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

var precacheConfig = [["/amionglerie/404.html","4060a3a6e4390928f9017612eebbcaf9"],["/amionglerie/a-propos/index.html","02ff3e9718bf6cb54555b17e76ac1c49"],["/amionglerie/blog/index.html","fe601a7bfd1712cf40e60b11675c56cc"],["/amionglerie/boutique/index.html","656ef6c61320eb40acf0c5c3404e7108"],["/amionglerie/contact/index.html","49d493b6083a3de91379028aaf760071"],["/amionglerie/css/animations.css","9860bb99c5186b3ce0392bcd060a5ebb"],["/amionglerie/css/bootstrap.min.css","44f5dfbe04a2756518de0387e4b97acc"],["/amionglerie/css/fonts.css","f49b7b7be663758cdf3071ed1f4827c5"],["/amionglerie/css/main.css","a34b257041b61b869552132b515310e3"],["/amionglerie/fonts/fontawesome-webfont78ce.eot","7149833697a959306ec3012a8588dcfa"],["/amionglerie/fonts/fontawesome-webfont78ce.svg","26efb89ed5261b9be06bf30c659fbc75"],["/amionglerie/fonts/fontawesome-webfont78ce.ttf","c4668ed2440df82d3fd2f8be9d31d07d"],["/amionglerie/fonts/fontawesome-webfont78ce.woff","d95d6f5d5ab7cfefd09651800b69bd54"],["/amionglerie/fonts/fontawesome-webfontd41d.eot","7149833697a959306ec3012a8588dcfa"],["/amionglerie/fonts/fontello6325.eot","4dad65572a168af3ad9b9f29efea42e9"],["/amionglerie/fonts/fontello6325.svg","c97adf5a3f9fd954477aa63c1ee81e94"],["/amionglerie/fonts/fontello6325.ttf","c226c0621a4586532cf1cc0a3ab5517a"],["/amionglerie/fonts/fontello6325.woff","95e25c2f740e4c72e1046e1197d2544f"],["/amionglerie/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/amionglerie/fonts/glyphicons-halflings-regular.svg","f721466883998665b87923b92dea655b"],["/amionglerie/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/amionglerie/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/amionglerie/fonts/glyphicons-halflings-regulard41d.eot","f4769f9bdb7466be65088239c12046d1"],["/amionglerie/fonts/rt-icons-23dab.eot","6d1c2647dc752b0d98b8bf0a04c375c9"],["/amionglerie/fonts/rt-icons-23dab.svg","1e5973299244e837eddcb8d4e3832987"],["/amionglerie/fonts/rt-icons-23dab.ttf","bdfaa56bda2f522e79bf31ccf05bb4dc"],["/amionglerie/fonts/rt-icons-23dab.woff","015c860528f19c99d5df382645ce10d3"],["/amionglerie/fonts/rt-icons-2d41d.eot","6d1c2647dc752b0d98b8bf0a04c375c9"],["/amionglerie/fonts/socicon.eot","fcfa47b3e0ab34ce1cf77db692b3c203"],["/amionglerie/fonts/socicon.svg","c7eb03f78d3f9e4c4b840abd70414ebc"],["/amionglerie/fonts/socicon.ttf","32d29f0b61dacbe6c0a3c3e324eff5b3"],["/amionglerie/fonts/socicon.woff","1acd3751768d4bfe3d518d02fa2fb3d9"],["/amionglerie/fonts/socicond41d.eot","fcfa47b3e0ab34ce1cf77db692b3c203"],["/amionglerie/images/academie.png","7e2c2f9b8e66577e3f7d354586216be4"],["/amionglerie/images/ami.png","fc77987a5d17f3802de5d0c1cecd5033"],["/amionglerie/images/favicons/apple-touch-icon.png","2add0d1d0b1c909c5e71d37a968bffcb"],["/amionglerie/images/favicons/favicon-16x16.png","71a57c78742fa710910b09df78500767"],["/amionglerie/images/favicons/favicon-32x32.png","3506cd376729cda5ccefa170eb98d981"],["/amionglerie/images/favicons/safari-pinned-tab.svg","097f85a00bdebe36353d21eadef4251a"],["/amionglerie/images/logo.png","92b628aae60c10c6be7ef9897b14b9f6"],["/amionglerie/images/map_marker_icon.png","c5aa91484366663c28e92fb90e648385"],["/amionglerie/images/parallax/bg_parallax.jpg","b7af414211f563c89337942c29f63662"],["/amionglerie/images/parallax/bg_parallax_2.jpg","87f41b75225b813938dd84426cb77b23"],["/amionglerie/images/parallax/map.jpg","bb97c5fcfbeba9c280aec4d66fe655f7"],["/amionglerie/images/play.png","98769908395f79a839cbfcffe2820d4f"],["/amionglerie/images/preloader.gif","33c2dd803ae43f61e562c62dfce4b452"],["/amionglerie/images/service.png","aa1153617170005b41c046c5ec016a85"],["/amionglerie/images/service_media01.png","dadb8458ba94ceff0258ad80e7d3c6d2"],["/amionglerie/images/shop.png","05bd0ff483843e90543ff34103b54b36"],["/amionglerie/images/touch/128x128.jpg","48a9618b4901444fec3e100f4da40847"],["/amionglerie/images/touch/144x144.jpg","69b62e8796065415fad8c885bb6dcf18"],["/amionglerie/images/touch/152x152.jpg","41764cc32c5550488a1670e6d211e0fc"],["/amionglerie/images/touch/192x192.jpg","d74ebb3b7b88d454b97c8bee0cd73e0f"],["/amionglerie/images/touch/512x512.jpg","0a194c5119d5918e4b32fca44c232d3d"],["/amionglerie/index.html","52a83cdc978e9d0987e131b4fbcd221e"],["/amionglerie/jekyll/update/2016/09/08/welcome-to-jekyll/index.html","f1724d5b0dffc6065dd5169680a64843"],["/amionglerie/manifest.json","dea98bab3cf2efa8a399372acf8a9bdf"],["/amionglerie/package-lock.json","380d506eac5afa70940b628eedaa3663"],["/amionglerie/rendez-vous/index.html","c15f77757e8d5c860abf7a49b9a4e693"],["/amionglerie/scripts/main.min.js","69c62347de59f3eeea1236947f646f58"],["/amionglerie/scripts/vendor/compressed.js","6113f77b53184a96c531a9d205848bb2"],["/amionglerie/scripts/vendor/html5shiv.min.js","14bf80ba215a8dacef1eee856fd0f1ea"],["/amionglerie/scripts/vendor/modernizr-2.6.2.min.js","9d6981c7347b118e0942d4b71c7328c4"],["/amionglerie/scripts/vendor/respond.min.js","9cccbcd9bc6aed2bb14df1013e185ce3"],["/amionglerie/scripts/vuejs/about.vue.js","7ed6e82489ed5cec882a7f6fd82c7bdf"],["/amionglerie/scripts/vuejs/appointment.vue.js","46bdb2a7fd560d540d32070c669981f5"],["/amionglerie/scripts/vuejs/blog.vue.js","46bdb2a7fd560d540d32070c669981f5"],["/amionglerie/scripts/vuejs/contact.vue.js","d522d68bbde693ea3503196bada5a80d"],["/amionglerie/scripts/vuejs/default.vue.js","8b447447caa9e6556560c66047d47954"],["/amionglerie/scripts/vuejs/firebase.config.js","06ac3dbf5cfbbaeab2bd0528cc394ae1"],["/amionglerie/scripts/vuejs/footer.vue.js","df9f76a565fbd3583bd83389512c7ffc"],["/amionglerie/scripts/vuejs/home.vue.js","46bdb2a7fd560d540d32070c669981f5"],["/amionglerie/scripts/vuejs/services.vue.js","60f236b161e55ddeb7593f4cc0250ffb"],["/amionglerie/scripts/vuejs/shop.vue.js","4cfffbcfccb78d71339057852c7318ff"],["/amionglerie/scripts/vuejs/slider.vue.js","33f2ef11c8def42c2a44308ac77b1395"],["/amionglerie/services/index.html","4a7dc4fe5e578c18bf44b7cfe0d51391"]];
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







