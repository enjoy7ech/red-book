export const pages = ['home','textbooks','videos','practice','past','mistakes','saved','plan'] as const;
export type PageId = typeof pages[number];
export function parseRoute(hash: string) {
 const [path, query = ''] = hash.replace(/^#\/?/, '').split('?');
 const page: PageId = pages.includes(path as PageId) ? path as PageId : 'textbooks';
 const params = new URLSearchParams(query);
 return { page, subject: params.get('subject'), chapter: params.get('chapter'), section: params.get('section') };
}
export function routeURL(page: PageId, params: Record<string,string|undefined> = {}) {
 const query = new URLSearchParams();
 for (const [key,value] of Object.entries(params)) if (value) query.set(key,value);
 return '#/' + page + (query.size ? '?' + query.toString() : '');
}
export function writeRoute(page: PageId, params: Record<string,string|undefined> = {}, replace = false) {
 const url = routeURL(page,params);
 if (location.hash === url) return;
 const depth = Number(history.state?.studyDepth) || 0;
 history[replace ? 'replaceState' : 'pushState']({ ...history.state, studyDepth: replace ? depth : depth + 1 }, '', url);
 window.dispatchEvent(new Event('study-route'));
}
