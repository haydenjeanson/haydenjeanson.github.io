'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "2cb4e8008c9de3bb593c364c378043d4",
".git/config": "eda643622171f572418716a88aa49112",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "0c19053636f2866cca4e8fdd7b3ea16a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "34ed0b9edd2892e4c9eb5fa5c6f164d5",
".git/logs/refs/heads/main": "34ed0b9edd2892e4c9eb5fa5c6f164d5",
".git/logs/refs/remotes/origin/HEAD": "9d96fe896246b7c964bc8588dd16ff06",
".git/logs/refs/remotes/origin/main": "9c65d3a6f70367500a622464f5df1fb6",
".git/objects/0e/1630e455a7b8d046187dafbc8a27481c511573": "3e8d5318a39dc01e2614c4af1eb7aa9b",
".git/objects/14/ffc7aec35aa24a32f03670f1c0d0f9515d5adc": "d357bb51284e8598f3914512e9993297",
".git/objects/1f/33b83911c46990965de4a64d643a5d39681808": "dd212a30df2d604eddbfdd2c06dbbda6",
".git/objects/24/31c57b527c0201fe0a09e73ca0d06e7412a6fe": "4e2eed6f40a1f07fdf4959871ab5242b",
".git/objects/3e/d86a9d2e34a1e9dceef7b23fc27ad1e21dc329": "6cc89fd009baa6d4988c74a8ca753818",
".git/objects/57/f559eca8543543a16a12a8f1ff0bfb06769251": "3dcfc9cf54d4711b9420fd17444aa9ca",
".git/objects/59/aca9cb86ab12213af8581f283b5a670e7cf087": "e4b6558718bb76753710a94078122f82",
".git/objects/5c/b8f5fb6d908300c5d73ca582898028046ff31c": "b163fde4c4f416679ac6847dc349cdf9",
".git/objects/5c/bbc9dcd6551fb4d9ac9cd2fd8d24633d6b914a": "1664efb362683d3db2be0b9b818012c2",
".git/objects/62/beebd64b01f4e5cea2fba7dd3a6fc3f8d71b64": "17cf349d6c93b764f411cef72be8e989",
".git/objects/b4/777eb70e5c381690003a3b8248dc0c77014ee2": "fb0985c3b22af85dcb32e76a34f585f5",
".git/objects/b9/301d5011b7e0931ac61d22847c126ebbac61e0": "db343bd4740a1d5c596d72b945697434",
".git/objects/ba/2bf12230b924158a49d1e1788f88aaca6f1a1a": "a87dcc208f03dfa667ff94ba4b3fe552",
".git/objects/c7/0915546c58374a6c7843e8c115369268fa2c19": "f6a071f709c5c9743f5ec18260f418ce",
".git/objects/cc/2c6a9cca0970394841d52509474b838d1b1296": "ba3661492eb9312c8460ef2be0f19027",
".git/objects/e2/bd529111003ba7f8ebd04fba3badad75024d23": "7d69c9fd6e1bd6dd7e304b8fa1d9e2e1",
".git/objects/ec/8c0d2f53034f9c7216626c0f0df162a3282d6e": "bfc5f98b1af8659c997b348c84a9cd78",
".git/objects/ee/a3103b4953d93714dc2b8e133b1a8cb6aee55a": "9d8340246cbc76fd0057e6fbd2bd6f1e",
".git/objects/f3/0b2edfecbd7e71612b02cfe0b7e6efb1751f3f": "529b8cbc43a903b011a4f2190ba8aea9",
".git/objects/pack/pack-61e305f92916407a104c62d893af727df108df6c.idx": "9e82cb7bd4c174de70095c1139d03e05",
".git/objects/pack/pack-61e305f92916407a104c62d893af727df108df6c.pack": "dbe1c1936bc966ff1444c55170b3cf7e",
".git/packed-refs": "b82e949104961d43f3126d852e534335",
".git/refs/heads/main": "d7ef3872cb127baa82b1b6de77823686",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "d7ef3872cb127baa82b1b6de77823686",
"assets/AssetManifest.json": "b128bc286a19505de8e840ae1e9ee772",
"assets/FontManifest.json": "16e779461aed76b136ebcf9b231f4281",
"assets/fonts/AlegreyaSans/AlegreyaSans-Bold.ttf": "1e3960b45fa41b6383b8f34c181432d0",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/images/apps-icon-18dp.svg": "01ec5d35fedc70b829c078ebc04d2aee",
"assets/images/apps-icon-24dp.png": "13fe7b4066cae716c32be10fe1bb3750",
"assets/images/apps-icon-36dp.png": "d6362a92cf37dd619d4b81bcf26334cf",
"assets/images/apps-icon-48dp.png": "64122f3fbe2eb021d93fe55b4e05747b",
"assets/images/cancel-icon-18dp.svg": "59cdabfc4bfd2cea295825cdeeefead6",
"assets/images/cancel-icon-24dp.png": "4e7ae5be5bcae549e940a8a4d60abff0",
"assets/images/cancel-icon-36dp.png": "cfba63195198be1165f0d585ec204bad",
"assets/images/cancel-icon-48dp.png": "6eab17544aa88669b1da6c99a5348d96",
"assets/images/GitHub-Mark-120px-plus.png": "ef7a02b69836dc8b6a732a54c4200dcb",
"assets/images/GitHub-Mark-32px.png": "f87561b8bb354ef83b09a66e54f70e08",
"assets/images/GitHub-Mark-64px.png": "438c17272c5f0e9f4a6da34d3e4bc5bd",
"assets/images/LI-In-Bug.png": "1b18d461ce75c75fdb4d7b6ec08b3e65",
"assets/NOTICES": "d5ee77170d4560bd88f371ef730c8c51",
"CNAME": "07589f37bf5db54c45e086b523e145fd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "1109dc3f790f149361cee8f713c77aeb",
"/": "1109dc3f790f149361cee8f713c77aeb",
"main.dart.js": "638dfb20db405a8a25918c9f7a3217de",
"manifest.json": "02feb935cbfd76bb5b22f5256cfa8a36",
"README.md": "9081db1249deb18dedc04d203a3c6762",
"version.json": "fa4e76c3bd2fbaf6840f5635e14b1586"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
