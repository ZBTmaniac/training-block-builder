// Bump this version whenever you upload a new index.html
const CACHE = 'block-builder-v22';
const FILES = ['./', './index.html', './bb-manifest.json', './bb-icon-180.png', './bb-icon-192.png', './bb-icon-512.png', './apple-touch-icon.png', './favicon.ico'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  const isPage = e.request.mode === 'navigate' || e.request.destination === 'document';
  if (isPage){
    // The app itself: try the network first so updates show on the first load; fall back to the saved copy offline
    e.respondWith(Promise.race([
      fetch(e.request).then(res => { if (res && res.ok){ const copy = res.clone(); caches.open(CACHE).then(c => c.put('./index.html', copy)); } return res; }),
      new Promise((_, reject) => setTimeout(() => reject(new Error('slow')), 3000))
    ]).catch(() => caches.match('./index.html')));
    return;
  }
  // Icons and other files: saved copy first, refreshed in the background
  e.respondWith(caches.match(e.request, {ignoreSearch: true}).then(cached => {
    const fresh = fetch(e.request).then(res => {
      if (res && res.ok){ const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }   // clone now, before the page reads the body
      return res;
    }).catch(() => cached);
    return cached || fresh;
  }));
});
