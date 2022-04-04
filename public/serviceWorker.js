const CACHE_NAME = 'pgasz-cocktails-app-v1';
const urlsToCache = ['index.html', 'offline.html'];

// installation
const self = this;

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});
//listen for request when we are offline
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then(() => {
            return fetch(e.request).catch(() => caches.match('offline.html'));
        })
    );
});

// activate
self.addEventListener('activate', (e) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);

    e.waitUntil(
        caches.keys().then((cacheNames) => {
            Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
