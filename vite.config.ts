import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({ plugins: [react(), { name: 'local-course-access', configureServer(server) { server.middlewares.use((request, response, next) => { if (request.url?.startsWith('/api/cloud-video') && !['127.0.0.1', '::1', '::ffff:127.0.0.1'].includes(request.socket.remoteAddress || '')) { response.statusCode = 403; response.end('Course playback is available on this computer only.'); return; } next(); }); } }], server: { host: '127.0.0.1', port: 5173, strictPort: true, proxy: { '/api/cloud-video': { target: 'http://127.0.0.1:5245', changeOrigin: true } } }, build: { rollupOptions: { output: { manualChunks(id) {
  if (!id.includes('node_modules')) return;
  if (id.includes('pdfjs-dist')) return 'pdf-vendor';
  if (/\/(react|react-dom|scheduler)\//.test(id)) return 'react-vendor';
  return 'ui-vendor';
} } } } });
