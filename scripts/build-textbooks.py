"""Extract the user's DOCX lectures as ordered text, tables and embedded images.
Run with the bundled Python runtime; never changes the source documents.
"""
from pathlib import Path
import hashlib
import json
import posixpath
import re
import shutil
import zipfile
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'public' / 'textbooks'
OUT.mkdir(parents=True, exist_ok=True)
NS = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
      'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
      'a': 'http://schemas.openxmlformats.org/drawingml/2006/main'}
W = '{' + NS['w'] + '}'
SUBJECTS = {'中药学专业知识一': 'zy1', '中药学专业知识二': 'zy2',
            '中药学综合知识与技能': 'zh', '药事管理与法规': 'fg'}
chapters = []
for folder, subject in SUBJECTS.items():
    for file in sorted((ROOT / 'data' / folder).glob('*.docx'), key=lambda f: int(f.name.split('.')[0])):
        order = int(file.name.split('.')[0])
        chapter_id = f'{subject}-{order:02d}'
        title = re.sub(r'\s+', ' ', file.stem.split('_')[-1]).strip()
        with zipfile.ZipFile(file) as z:
            rels = {r.attrib['Id']: r.attrib.get('Target', '') for r in ET.fromstring(z.read('word/_rels/document.xml.rels'))}
            def paragraph(p):
                parts = []
                result = []
                def flush():
                    text = ''.join(parts).strip()
                    parts.clear()
                    for part in re.split(r'(?=第\s*\d+\s*讲)', text):
                        if part.strip(): result.append({'type': 'paragraph', 'text': part.strip(), 'images': []})
                for e in p.iter():
                    if e.tag in (W + 't', '{http://schemas.openxmlformats.org/officeDocument/2006/math}t'): parts.append(e.text or '')
                    elif e.tag in (W + 'br', W + 'cr'): parts.append('\n')
                    elif e.tag == W + 'tab': parts.append(' ')
                    rid = e.attrib.get('{' + NS['r'] + '}embed') or e.attrib.get('{' + NS['r'] + '}id')
                    target = rels.get(rid, '')
                    path = posixpath.normpath(posixpath.join('word', target))
                    if '/media/' in path and path in z.namelist():
                        payload = z.read(path)
                        name = hashlib.sha256(payload).hexdigest()[:20] + Path(path).suffix.lower()
                        (OUT / name).write_bytes(payload)
                        flush()
                        result.append({'type': 'paragraph', 'text': '', 'images': ['/textbooks/' + name]})
                flush()
                return result
            def blocks(parent):
                result = []
                for child in parent:
                    if child.tag == W + 'p':
                        result.extend(paragraph(child))
                    elif child.tag == W + 'tbl':
                        rows = []
                        for row in child.findall('w:tr', NS):
                            cells = []
                            for cell in row.findall('w:tc', NS):
                                span = cell.find('w:tcPr/w:gridSpan', NS)
                                cells.append({'span': int(span.attrib.get(W + 'val', '1')) if span is not None else 1, 'blocks': blocks(cell)})
                            rows.append(cells)
                        result.append({'type': 'table', 'rows': rows})
                    elif child.tag == W + 'sdt':
                        content = child.find('w:sdtContent', NS)
                        if content is not None: result.extend(blocks(content))
                return result
            body = ET.fromstring(z.read('word/document.xml')).find('w:body', NS)
            content = blocks(body)
            original_text = ''.join(e.text or '' for e in body.iter() if e.tag in (W + 't', '{http://schemas.openxmlformats.org/officeDocument/2006/math}t'))
        def texts(items):
            for b in items:
                if b['type'] == 'paragraph': yield b['text']
                else:
                    for row in b['rows']:
                        for cell in row: yield from texts(cell['blocks'])
        sections = [{'id': chapter_id + '-intro', 'title': '章节开篇', 'start': 0}]
        for i, b in enumerate(content):
            if b['type'] == 'paragraph':
                line = b['text'].split('\n')[0].strip()
                if re.match(r'^第\s*\d+\s*讲', line):
                    sections.append({'id': f'{chapter_id}-s{i}', 'title': line, 'start': i})
        for i, sec in enumerate(sections):
            sec['end'] = sections[i + 1]['start'] if i + 1 < len(sections) else len(content)
        sections = [s for s in sections if s['end'] > s['start']]
        text = '\n'.join(texts(content))
        assert re.sub(r'\s+', '', text) == re.sub(r'\s+', '', original_text), f'Text extraction lost content: {file}'
        (OUT / f'{chapter_id}.json').write_text(json.dumps({'blocks': content}, ensure_ascii=False), encoding='utf-8')
        chapters.append({'id': chapter_id, 'subject': subject, 'order': order, 'title': title,
            'teacher': file.stem.split('_')[-2].strip(), 'fileName': file.name,
            'sourcePath': str(file.relative_to(ROOT)).replace('\\', '/'),
            'contentUrl': f'/textbooks/{chapter_id}.json', 'sections': sections,
            'characters': len(text), 'searchText': text})
outlines = []
for file in sorted((ROOT / 'data').glob('*.pdf')):
    subject = 'fg' if '药事管理' in file.name else 'zy2' if '（二）' in file.name else 'zy1' if '（一）' in file.name else 'zh'
    name = f'outline-{subject}.pdf'
    shutil.copyfile(file, OUT / name)
    outlines.append({'subject': subject, 'title': file.stem, 'url': '/textbooks/' + name})
(ROOT / 'src' / 'textbookCatalog.json').write_text(json.dumps({'chapters': chapters, 'outlines': outlines}, ensure_ascii=False), encoding='utf-8')
print(json.dumps({'chapters': len(chapters), 'sections': sum(len(c['sections']) for c in chapters), 'characters': sum(c['characters'] for c in chapters), 'assets': len(list(OUT.iterdir()))}))
