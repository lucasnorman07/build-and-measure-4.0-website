const CACHE_NAME = "BAM-cache-v18";
const FILES_TO_CACHE = [
    // default route
    ".",
    // html
    "index.html",
    "docs.html",
    // "404.html",
    "license.html",
    "download.html",
    "release-notes.html",
    // js
    "js/main.js",
    "js/docs.js",
    "js/startPageAnimations.js",
    "js/release-notes.js",
    // css
    "css/style.css",
    "css/start.css",
    "css/docs.css",
    "css/download.css",
    "css/release-notes.css",
    // images
    "favicon.ico",
    "images/documentation-images/bottom-panel.png",
    "images/documentation-images/command-bar.png",
    "images/documentation-images/command-box.png",
    "images/documentation-images/context-menu.png",
    "images/documentation-images/control-panel.png",
    "images/documentation-images/differing.png",
    "images/documentation-images/drawing-palette.png",
    "images/documentation-images/editor.png",
    "images/documentation-images/export-menu.png",
    "images/documentation-images/filter-menu.png",
    "images/documentation-images/project-with-ui-descriptions.png",
    "images/documentation-images/settings.png",
    "images/documentation-images/start-page.png",
    "images/documentation-images/tool-bar.png",
    "images/apple-icon.svg",
    "images/arrowIcon.png",
    "images/example-bedroom-layout.svg",
    "images/example-bob.svg",
    "images/example-car.png",
    "images/example-demo-details.svg",
    "images/example-easy-to-use.png",
    "images/example-factory-layout.svg",
    "images/example-house.png",
    "images/example-logos-and-icons.svg",
    "images/example-office-chairs.png",
    "images/example-poster.svg",
    "images/example-precise-drawing.png",
    "images/example-title-block.png",
    "images/example-user-interface.png",
    "images/example-vedbod-ritn1.svg",
    "images/example-vedbod-ritn2.svg",
    "images/hamburgerIcon.png",
    "images/linux-icon.svg",
    "images/logo-512.png",
    "images/logo-maskable.png",
    "images/logo-maskable.webp",
    "images/logo.png",
    "images/logo.svg",
    "images/searchIcon.png",
    "images/windows-icon.svg",
    // videos
    "videos/demoVideo.mp4",
    // for SEO
    "robots.txt",
    "sitemap.xml",
    // manifest for PWA
    "manifest.json"
];

self.addEventListener("install", async e => {
    console.log("[SW] install");
    // add the FILES_TO_CACHE to the cache with the name CACHE_NAME
    const cache = await caches.open(CACHE_NAME);
    self.skipWaiting();
    cache.addAll(FILES_TO_CACHE);
});

self.addEventListener("activate", async e => {
    console.log("[SW] activate");
    self.skipWaiting();
    e.waitUntil(cleanUpCache());
});

self.addEventListener("fetch", async e => {
    e.respondWith(fetchAssets(e));
});

async function cleanUpCache() {
    const keys = await caches.keys();
    const keysToDelete = keys.map(key => {
        if (key !== CACHE_NAME) {
            return caches.delete(key);
        }
    });

    return Promise.all(keysToDelete);
}

async function fetchAssets(e) {
    try {
        const response = await fetch(e.request);
        return response;
    } catch {
        const cache = await caches.open(CACHE_NAME);
        return cache.match(e.request);
    }
}
