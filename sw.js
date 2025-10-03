// Service Worker للأمان وتحسين الأداء
const CACHE_NAME = 'health-certificates-v1';
const urlsToCache = [
  '/',
  '/admin-dashboard.html',
  '/certificate.html',
  '/medical-leaves.html',
  '/1.html',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

// تثبيت Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

// اعتراض الطلبات وإجبار HTTPS
self.addEventListener('fetch', function(event) {
  // إجبار HTTPS
  if (event.request.url.startsWith('http://')) {
    const httpsUrl = event.request.url.replace('http://', 'https://');
    event.respondWith(Response.redirect(httpsUrl, 301));
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // إرجاع من Cache أو جلب من الشبكة
        return response || fetch(event.request);
      }
    )
  );
});

// تحديث Cache
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
