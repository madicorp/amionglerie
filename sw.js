/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","a7e0aff67430a37078c72eec82775c91"],["/a-propos/index.html","7a6393893f3551792d9d6ae66606b5f0"],["/boutique/index.html","29a1d9abb059b1482357096e92edb211"],["/contact/index.html","0888ab5ff7cf65aa05857a8180c4a3af"],["/css/animations.css","9860bb99c5186b3ce0392bcd060a5ebb"],["/css/bootstrap.min.css","44f5dfbe04a2756518de0387e4b97acc"],["/css/fonts.css","f49b7b7be663758cdf3071ed1f4827c5"],["/css/main.css","d6604d6d7ac33e912e7c50a7bf12d066"],["/fonts/fontawesome-webfont78ce.eot","7149833697a959306ec3012a8588dcfa"],["/fonts/fontawesome-webfont78ce.svg","26efb89ed5261b9be06bf30c659fbc75"],["/fonts/fontawesome-webfont78ce.ttf","c4668ed2440df82d3fd2f8be9d31d07d"],["/fonts/fontawesome-webfont78ce.woff","d95d6f5d5ab7cfefd09651800b69bd54"],["/fonts/fontawesome-webfontd41d.eot","7149833697a959306ec3012a8588dcfa"],["/fonts/fontello6325.eot","4dad65572a168af3ad9b9f29efea42e9"],["/fonts/fontello6325.svg","c97adf5a3f9fd954477aa63c1ee81e94"],["/fonts/fontello6325.ttf","c226c0621a4586532cf1cc0a3ab5517a"],["/fonts/fontello6325.woff","95e25c2f740e4c72e1046e1197d2544f"],["/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/fonts/glyphicons-halflings-regular.svg","f721466883998665b87923b92dea655b"],["/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/fonts/glyphicons-halflings-regulard41d.eot","f4769f9bdb7466be65088239c12046d1"],["/fonts/rt-icons-23dab.eot","6d1c2647dc752b0d98b8bf0a04c375c9"],["/fonts/rt-icons-23dab.svg","1e5973299244e837eddcb8d4e3832987"],["/fonts/rt-icons-23dab.ttf","bdfaa56bda2f522e79bf31ccf05bb4dc"],["/fonts/rt-icons-23dab.woff","015c860528f19c99d5df382645ce10d3"],["/fonts/rt-icons-2d41d.eot","6d1c2647dc752b0d98b8bf0a04c375c9"],["/fonts/socicon.eot","fcfa47b3e0ab34ce1cf77db692b3c203"],["/fonts/socicon.svg","c7eb03f78d3f9e4c4b840abd70414ebc"],["/fonts/socicon.ttf","32d29f0b61dacbe6c0a3c3e324eff5b3"],["/fonts/socicon.woff","1acd3751768d4bfe3d518d02fa2fb3d9"],["/fonts/socicond41d.eot","fcfa47b3e0ab34ce1cf77db692b3c203"],["/gallerie/index.html","746c4936f5ed876258d71633f93d0073"],["/google34173b0f07f28ca0.html","c95ec71498c2e8fcc535b2d733f93c64"],["/images/academie.png","7e2c2f9b8e66577e3f7d354586216be4"],["/images/ajax-loader.gif","af962b37779a443a77ab836b3b7a93f5"],["/images/ami.png","fc77987a5d17f3802de5d0c1cecd5033"],["/images/coup-ongle.png","6a4cb1616948dafe17cd4460c87f29ea"],["/images/favicons/apple-touch-icon.png","821ddf17a747777f03f12627819cda37"],["/images/favicons/favicon-16x16.png","4e74487abfa711ae8dd45de6e22344ce"],["/images/favicons/favicon-32x32.png","7e401eaba1302eb315dfcbc3d68596bb"],["/images/favicons/safari-pinned-tab.svg","097f85a00bdebe36353d21eadef4251a"],["/images/loading.png","1e8ab858597742b9a6e02e49db322723"],["/images/logo.png","92b628aae60c10c6be7ef9897b14b9f6"],["/images/map_marker_icon.png","c5aa91484366663c28e92fb90e648385"],["/images/parallax/bg_parallax.jpg","b7af414211f563c89337942c29f63662"],["/images/parallax/bg_parallax_2.jpg","87f41b75225b813938dd84426cb77b23"],["/images/parallax/map.jpg","bb97c5fcfbeba9c280aec4d66fe655f7"],["/images/play.png","98769908395f79a839cbfcffe2820d4f"],["/images/preloader.gif","33c2dd803ae43f61e562c62dfce4b452"],["/images/prettyPhoto/facebook/btnNext.png","ff17e9f0988dcd5ed7613dc5e3553db6"],["/images/prettyPhoto/facebook/btnPrevious.png","c9f4e35f5b931b7c7977b841bc02c532"],["/images/prettyPhoto/facebook/default_thumbnail.gif","ed52db277173876860b62071785a2177"],["/images/prettyPhoto/facebook/loader.gif","df46993044576f83f2c2cc1a64e18f31"],["/images/prettyPhoto/facebook/sprite.png","898b67c70ce9f54548f00557eb8f5db5"],["/images/prettyPhoto/light_rounded/btnNext.png","c54c38386c0be860552f62e69624c603"],["/images/service.png","aa1153617170005b41c046c5ec016a85"],["/images/service_media01.png","dadb8458ba94ceff0258ad80e7d3c6d2"],["/images/shop.png","05bd0ff483843e90543ff34103b54b36"],["/images/touch/128x128.jpg","48a9618b4901444fec3e100f4da40847"],["/images/touch/144x144.jpg","69b62e8796065415fad8c885bb6dcf18"],["/images/touch/152x152.jpg","41764cc32c5550488a1670e6d211e0fc"],["/images/touch/192x192.jpg","d74ebb3b7b88d454b97c8bee0cd73e0f"],["/images/touch/512x512.jpg","0a194c5119d5918e4b32fca44c232d3d"],["/images/vernis-2.png","d6b6aa551502505572f9227a0ffcab15"],["/images/vernis-ongle.png","90be3bfcdb0678bc6a0fe0a41cd17be6"],["/images/vernis.png","64fcfe90072898639d6b37f238c35b31"],["/index.html","263bdfbc14778c226a89f348ff0ab132"],["/manifest.json","dea98bab3cf2efa8a399372acf8a9bdf"],["/package-lock.json","380d506eac5afa70940b628eedaa3663"],["/rendez-vous/index.html","58a6621bb77f751d3ea203bcc0d3f8a4"],["/scripts/main.min.js","4970b87deedf386d74a7149e07f654f7"],["/scripts/vendor/compressed.js","038ec60962b129def1b415556df3f240"],["/scripts/vendor/html5shiv.min.js","14bf80ba215a8dacef1eee856fd0f1ea"],["/scripts/vendor/modernizr-2.6.2.min.js","9d6981c7347b118e0942d4b71c7328c4"],["/scripts/vendor/respond.min.js","9cccbcd9bc6aed2bb14df1013e185ce3"],["/scripts/vuejs/about.vue.js","18f8dd6525ad06c156f4c76f6ba617bd"],["/scripts/vuejs/appointment.vue.js","46bdb2a7fd560d540d32070c669981f5"],["/scripts/vuejs/blog.vue.js","46bdb2a7fd560d540d32070c669981f5"],["/scripts/vuejs/contact.vue.js","55f859d9ac28d1a3cf5479fd7b09fe19"],["/scripts/vuejs/firebase.config.js","06ac3dbf5cfbbaeab2bd0528cc394ae1"],["/scripts/vuejs/footer.vue.js","dc8e7ddbf1facfde34ee19214261cd8a"],["/scripts/vuejs/form.vue.js","99c23a7505be7a761076cd133c61dd8f"],["/scripts/vuejs/gallery.vue.js","69e86574aaa4540b9378769c700d926a"],["/scripts/vuejs/home.vue.js","3e8f9bd15231905fc306d3ae22c8d89c"],["/scripts/vuejs/services.vue.js","60f236b161e55ddeb7593f4cc0250ffb"],["/scripts/vuejs/shop.vue.js","91a71561befc18b5676aa3d67608527b"],["/scripts/vuejs/shopsection.vue.js","8f2a4865340dfc71bb3e55c681bfa167"],["/scripts/vuejs/slider.vue.js","9dbf50d06b5281dcc58b15f49f378d4c"],["/services/index.html","8d0a5a7e2d29c849f5d424c1dda0a84b"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







