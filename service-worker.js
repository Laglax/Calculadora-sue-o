const CACHE_NAME = 'reminder-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/main.html',
  '/favicon.png'
  // Añade otros archivos si los usas (imágenes, CSS...)
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
