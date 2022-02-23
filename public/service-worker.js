const CACHE_NAME = 'ski-resort-weather-offline-cache-v1';
const DATA_CACHE_NAME = 'ski-resort-weather-offline-data-cache-v1';
const FILES_TO_CACHE = [
    // This needs to be included not '/index.htm', or it works explicitly for /index.html search.
    '/',
    '/maps',
    'manifest.json',

    '/css/weather-icons-wind.css',
    '/css/weather-icons.css',

    'public/font/weathericons-regular-webfont.eot',
    'public/font/weathericons-regular-webfont.svg',
    'public/font/weathericons-regular-webfont.ttf',
    'public/font/weathericons-regular-webfont.woff',
    'public/font/weathericons-regular-webfont.woff2',

    // 'https://fonts.googleapis.com',
    // 'https://www.snow-forecast.com/stylesheets/feed.css',
    // 'https://fonts.gstatic.com',
    // 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100&display=swap',
];

// install
self.addEventListener('install', function (evt) {
    // pre cache image data
    // evt.waitUntil(
    //   caches.open(DATA_CACHE_NAME).then((cache) => cache.add('/api/images'))
    // );
    // pre cache all static assets
    evt.waitUntil(
        caches
            .open(CACHE_NAME)
            .then((cache) => {
                console.log({ cache });
                cache.addAll(FILES_TO_CACHE);
            })
            .catch((err) => {
                console.log({ err });
            })
    );
    // tell the browser to activate this service worker immediately once it
    // has finished installing
    self.skipWaiting();
});
// activate
self.addEventListener('activate', function (evt) {
    evt.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(
                // eslint-disable-next-line array-callback-return
                keyList.map((key) => {
                    if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
                        console.log('Removing old cache data', key);
                        return caches.delete(key);
                    }
                })
            );
        })
    );
    self.clients.claim();
});
// fetch
self.addEventListener('fetch', function (evt) {
    if (evt.request.url.includes('/api/')) {
        evt.respondWith(
            caches
                .open(DATA_CACHE_NAME)
                .then((cache) => {
                    return fetch(evt.request)
                        .then((response) => {
                            // If the response was good, clone it and store it in the cache.
                            if (response.status === 200) {
                                cache.put(evt.request.url, response.clone());
                            }
                            return response;
                        })
                        .catch((err) => {
                            /* eslint-disable-line no-unused-vars */
                            // Network request failed, try to get it from the cache.
                            return cache.match(evt.request);
                        });
                })
                .catch((err) => console.log(err))
        );
        return;
    }
    evt.respondWith(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.match(evt.request).then((response) => {
                return response || fetch(evt.request);
            });
        })
    );
});
