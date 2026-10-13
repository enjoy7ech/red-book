import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Root, RootContent } from 'mdast';
import type { AISource } from './aiContext';

// Turn citations into links in the syntax tree, leaving code and existing links intact.
function remarkCitations() {
 return (tree: Root) => {
  function visit(parent: { children: RootContent[] }) {
   parent.children = parent.children.flatMap(node => {
    if (node.type === 'text') {
     const parts: RootContent[] = []; let start = 0;
     for (const match of node.value.matchAll(/\[资料(\d+)\]/g)) {
      if (match.index > start) parts.push({ type: 'text', value: node.value.slice(start, match.index) });
      parts.push({ type: 'link', url: '#ai-source-' + match[1], children: [{ type: 'text', value: match[0] }] });
      start = match.index + match[0].length;
     }
     if (start < node.value.length) parts.push({ type: 'text', value: node.value.slice(start) });
     return parts;
    }
    if ('children' in node && !['link', 'linkReference', 'imageReference'].includes(node.type)) visit(node as { children: RootContent[] });
    return [node];
   });
  }
  visit(tree);
 };
}

export default function AIMarkdown({ content, sources = [], onSource }: { content: string; sources?: AISource[]; onSource: (source: AISource) => void }) {
 return <Markdown remarkPlugins={[remarkGfm, remarkCitations]} skipHtml components={{
  a: ({ href, children }) => {
   const citation = href?.match(/^#ai-source-(\d+)$/);
   if (citation) {
    const source = sources[Number(citation[1]) - 1];
    return source ? <button type="button" className="ai-citation" title={source.title} onClick={() => onSource(source)}>{children}</button> : <span>{children}</span>;
   }
   return href && /^https?:\/\//i.test(href) ? <a href={href} target="_blank" rel="noopener noreferrer">{children}</a> : <span>{children}</span>;
  },
  img: ({ alt }) => <span className="ai-image-label">{alt || '图片'}</span>,
  table: ({ children }) => <div className="ai-table-scroll"><table>{children}</table></div>,
 }}>{content}</Markdown>;
}
