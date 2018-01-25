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

var precacheConfig = [["/404.html","a7e0aff67430a37078c72eec82775c91"],["/a-propos/index.html","7a6393893f3551792d9d6ae66606b5f0"],["/boutique/index.html","29a1d9abb059b1482357096e92edb211"],["/contact/index.html","38964216209b2d71ec0daa0299857779"],["/css/animations.css","9860bb99c5186b3ce0392bcd060a5ebb"],["/css/bootstrap.min.css","44f5dfbe04a2756518de0387e4b97acc"],["/css/fonts.css","f49b7b7be663758cdf3071ed1f4827c5"],["/css/main.css","d6604d6d7ac33e912e7c50a7bf12d066"],["/firedata/ami-onglerie.json","9acca56c0f338e6a0fa057d2e2b76b10"],["/fonts/fontawesome-webfont78ce.eot","7149833697a959306ec3012a8588dcfa"],["/fonts/fontawesome-webfont78ce.svg","26efb89ed5261b9be06bf30c659fbc75"],["/fonts/fontawesome-webfont78ce.ttf","c4668ed2440df82d3fd2f8be9d31d07d"],["/fonts/fontawesome-webfont78ce.woff","d95d6f5d5ab7cfefd09651800b69bd54"],["/fonts/fontawesome-webfontd41d.eot","7149833697a959306ec3012a8588dcfa"],["/fonts/fontello6325.eot","4dad65572a168af3ad9b9f29efea42e9"],["/fonts/fontello6325.svg","c97adf5a3f9fd954477aa63c1ee81e94"],["/fonts/fontello6325.ttf","c226c0621a4586532cf1cc0a3ab5517a"],["/fonts/fontello6325.woff","95e25c2f740e4c72e1046e1197d2544f"],["/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/fonts/glyphicons-halflings-regular.svg","f721466883998665b87923b92dea655b"],["/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/fonts/glyphicons-halflings-regulard41d.eot","f4769f9bdb7466be65088239c12046d1"],["/fonts/rt-icons-23dab.eot","6d1c2647dc752b0d98b8bf0a04c375c9"],["/fonts/rt-icons-23dab.svg","1e5973299244e837eddcb8d4e3832987"],["/fonts/rt-icons-23dab.ttf","bdfaa56bda2f522e79bf31ccf05bb4dc"],["/fonts/rt-icons-23dab.woff","015c860528f19c99d5df382645ce10d3"],["/fonts/rt-icons-2d41d.eot","6d1c2647dc752b0d98b8bf0a04c375c9"],["/fonts/socicon.eot","fcfa47b3e0ab34ce1cf77db692b3c203"],["/fonts/socicon.svg","c7eb03f78d3f9e4c4b840abd70414ebc"],["/fonts/socicon.ttf","32d29f0b61dacbe6c0a3c3e324eff5b3"],["/fonts/socicon.woff","1acd3751768d4bfe3d518d02fa2fb3d9"],["/fonts/socicond41d.eot","fcfa47b3e0ab34ce1cf77db692b3c203"],["/gallerie/index.html","746c4936f5ed876258d71633f93d0073"],["/google34173b0f07f28ca0.html","c95ec71498c2e8fcc535b2d733f93c64"],["/images/academie.png","7e2c2f9b8e66577e3f7d354586216be4"],["/images/ajax-loader.gif","af962b37779a443a77ab836b3b7a93f5"],["/images/ami.png","fc77987a5d17f3802de5d0c1cecd5033"],["/images/banner_slide_01.jpg","762c7c89dced0d8657862511f3ff92a3"],["/images/banner_slide_02.jpg","a2164aa5cb510b6624dba2b91272d9e9"],["/images/coup-ongle.png","6a4cb1616948dafe17cd4460c87f29ea"],["/images/favicons/apple-touch-icon.png","821ddf17a747777f03f12627819cda37"],["/images/favicons/favicon-16x16.png","4e74487abfa711ae8dd45de6e22344ce"],["/images/favicons/favicon-32x32.png","7e401eaba1302eb315dfcbc3d68596bb"],["/images/favicons/safari-pinned-tab.svg","097f85a00bdebe36353d21eadef4251a"],["/images/gallery/01.jpg","fdce9559013e2b79aa019f8403380d1b"],["/images/gallery/02.jpg","3cbf7f7914d872a32dda2486809c92b3"],["/images/gallery/03.jpg","d5cdb12951bae4eae61ceb7b91b1b00f"],["/images/gallery/04.jpg","41cf19d4dde12f5faa1858c599b9ac1e"],["/images/gallery/05.jpg","2ae472f7b5326900124209a58b24ccfc"],["/images/gallery/06.jpg","0398b66a3b97c1bf873533c6bb328daf"],["/images/gallery/07.jpg","dfeb11bfbaa2f4465eff192b225302b8"],["/images/gallery/08.jpg","d25c878223cf50c815cb8414b378c51f"],["/images/gallery/09.jpg","6838fa39e8dc0f03856362b1585b60e6"],["/images/gallery/10.jpg","e9a42fcf2b47889010b18383736d6f14"],["/images/gallery/11.jpg","4d6ec18c9d96f10a7617ed2befc6cd0e"],["/images/gallery/12.jpg","14d421b2643c9fc0c3f292948aa92e9f"],["/images/gallery/14.jpg","d571a7bce0478f2245c17f9d7b43abb5"],["/images/gallery/16.jpg","679ccc6434630f40166fc7d1cce69960"],["/images/gallery/17.jpg","968e63213e17ef0a24a5623aa79e5438"],["/images/gallery/18.jpg","02e57bdcc057b510da6c12f2c948aa88"],["/images/gallery/19.jpg","e87bd4575750913584cf40bdb2ec6dd4"],["/images/gallery/20.jpg","0b5c6399a3643b156914fd5aaf704265"],["/images/gallery/21.jpg","48e4aa6fdf09796db9c2df0f15448148"],["/images/gallery/22.jpg","7f717de093b7a7d54e38bafa68624ea3"],["/images/loading.png","1e8ab858597742b9a6e02e49db322723"],["/images/logo.png","92b628aae60c10c6be7ef9897b14b9f6"],["/images/map_marker_icon.png","c5aa91484366663c28e92fb90e648385"],["/images/models_portrait/01.jpg","6720d133dd93b87a206fef3a38f909dd"],["/images/models_portrait/02.jpg","04309faacbeb0b3996817079f9a7f88b"],["/images/models_portrait/03.jpg","1fa21ccb08971a2d8eb69922dd54462f"],["/images/models_portrait/04.jpg","ecf9ad0cc4d700e5aaa2a71440675d94"],["/images/models_portrait/05.jpg","0ead298db51b9e60dffa2d81bbbac39e"],["/images/models_portrait/06.jpg","08ca3bf3911a82e2b89b6c51c6a1f412"],["/images/models_portrait/07.jpg","a161e20b2583dcf287fbd7a8039b62f4"],["/images/models_portrait/08.jpg","0697187ddfd21917d0206ba1c40eb36b"],["/images/models_portrait/09.jpg","51e9c80e96526f66c418703d120267c7"],["/images/models_portrait/10.jpg","8c5f19d99f6fefcbd434f6e1d4e0a867"],["/images/models_portrait/11.jpg","a9fe797c7636a05627764356665d7b07"],["/images/models_portrait/12.jpg","bc8f97a9dab3867d55b086121ca7aba3"],["/images/models_portrait/13.jpg","42cc6ec6788c9d135be475404ef847da"],["/images/models_portrait/14.jpg","6cb5f77b31510bda8fffd9c843e0f4bf"],["/images/models_portrait/15.jpg","3e745a6e6c1720ea1ac85610bcf51cf7"],["/images/models_portrait/16.jpg","e24afdc165a61ab62267560cd62b75b2"],["/images/models_portrait/17.jpg","3e16e2d047fd465c443b89eab64792b9"],["/images/models_portrait/18.jpg","5ecf675d106bbf346d4d949ad0922185"],["/images/models_portrait/19.jpg","64ba0a32c8582b7b448db5737c366401"],["/images/models_portrait/20.jpg","e334125450209f6d03bdce3313b8c952"],["/images/models_portrait/21.jpg","bb3c8b2d3c5cf4e10e3310ee4392d523"],["/images/models_portrait/22.jpg","004f8f44b10b40396e777c97d998a0f6"],["/images/models_portrait/23.jpg","abb341d968588ce8af2ac693b6fa1380"],["/images/models_portrait/24.jpg","11d230ee4e3e823fb232b60061cb80e1"],["/images/models_square/01.jpg","679ad6e815f1fb66870a1eefdb1e113b"],["/images/models_square/02.jpg","2c8016e02e1802de281346e846f4b94b"],["/images/models_square/03.jpg","60c4ab12d96db548907a89974926426d"],["/images/models_square/04.jpg","5332ae23eec21402d6eb13184c7265e6"],["/images/models_square/05.jpg","238a584127c4ed8e98059373ad23f495"],["/images/models_square/06.jpg","f0c56b5ae2c34c0fd95f84e98aef672d"],["/images/models_square/07.jpg","18951b76c84b7f415db1e478633023dd"],["/images/models_square/08.jpg","40f5126295b93cf76b478eaf23acade3"],["/images/models_square/09.jpg","0d57718c2848e8ea14934ef20c0a7bcf"],["/images/models_square/10.jpg","06be7d8534c384cf96b0c3e9780c91ec"],["/images/models_square/11.jpg","ebfd479519049d4972b0d7b9385e9154"],["/images/models_square/12.jpg","a007ca239c0c0f6d6331275a6ad3253e"],["/images/models_square/13.jpg","65a9e434d439171c1547d995eb7574c4"],["/images/models_square/14.jpg","c55fb436bc5087213ac0a6faa5c129a3"],["/images/models_square/15.jpg","0cfdea57cdcaccf99d2daa05fdff5557"],["/images/models_square/16.jpg","1a7043e7c36e1dba36af7f56cfb739b2"],["/images/models_square/17.jpg","fff1afa4a8253658811eb1ccb0ea4b18"],["/images/models_square/18.jpg","44108e553e8f3d89d0a79873bc43f5fd"],["/images/models_square/19.jpg","05da951244ed29dc068d97138df3fb69"],["/images/models_square/20.jpg","dc5111e2fa4f6d07679feec225fd5ab3"],["/images/models_square/21.jpg","f6a6b279d6d499e160fd1cc1a757796c"],["/images/models_square/22.jpg","a09e3301d02fc2f2b73777d3bb62ce4f"],["/images/models_square/23.jpg","6040e8062097c1e6eb65952487593805"],["/images/models_square/24.jpg","1e5dd6d85ca6eb9367f460044aa23f3e"],["/images/models_square/25.jpg","5b6048100a33f8bb11657060132b4323"],["/images/parallax/bg_parallax.jpg","b7af414211f563c89337942c29f63662"],["/images/parallax/bg_parallax_2.jpg","87f41b75225b813938dd84426cb77b23"],["/images/parallax/bottom.html","9a8bcce5967a243eda4528c5b6176140"],["/images/parallax/call_to_action.jpg","44d6ae84b4960e2ddc77c9c011e4ea07"],["/images/parallax/call_to_action_2.jpg","e8354216203b55bd0fba02096c2b5f37"],["/images/parallax/featured.html","9a8bcce5967a243eda4528c5b6176140"],["/images/parallax/map.jpg","bb97c5fcfbeba9c280aec4d66fe655f7"],["/images/parallax/map3.jpg","f5112830ee0efb4f3d9008ca3765ef50"],["/images/parallax/progress.html","9a8bcce5967a243eda4528c5b6176140"],["/images/parallax/table.html","9a8bcce5967a243eda4528c5b6176140"],["/images/play.png","98769908395f79a839cbfcffe2820d4f"],["/images/preloader.gif","33c2dd803ae43f61e562c62dfce4b452"],["/images/prettyPhoto/facebook/btnNext.png","ff17e9f0988dcd5ed7613dc5e3553db6"],["/images/prettyPhoto/facebook/btnPrevious.png","c9f4e35f5b931b7c7977b841bc02c532"],["/images/prettyPhoto/facebook/default_thumbnail.gif","ed52db277173876860b62071785a2177"],["/images/prettyPhoto/facebook/loader.gif","df46993044576f83f2c2cc1a64e18f31"],["/images/prettyPhoto/facebook/sprite.png","898b67c70ce9f54548f00557eb8f5db5"],["/images/prettyPhoto/light_rounded/btnNext.png","c54c38386c0be860552f62e69624c603"],["/images/recent_post1.jpg","b95fa97d6ba54f76238aa3a9da1fdf58"],["/images/recent_post2.jpg","71971ff5e9537b55732ec8373330464c"],["/images/recent_post3.jpg","a4e40f0fe62b1ee741be26280b77ca03"],["/images/recent_post4.jpg","aa8e9bc001dd67754fa35b3f5ed748b7"],["/images/recent_post5.jpg","552c6f4e62eb6b9654c9774039599c5c"],["/images/service.png","aa1153617170005b41c046c5ec016a85"],["/images/service_media01.png","dadb8458ba94ceff0258ad80e7d3c6d2"],["/images/shop.png","05bd0ff483843e90543ff34103b54b36"],["/images/side-image.jpg","565ec2544e2c8ec9de7ff550958b0ff0"],["/images/slide01.png","8aa98af3a6f4071fcf60d31601d6338f"],["/images/slide02.png","3a73c82843b63c2366a90952c2421faa"],["/images/team/01.jpg","e587c8855721ecb0257e16aadb3bb939"],["/images/team/02.jpg","1c5692a2bd467a2487bd3044267c4a0c"],["/images/team/03.jpg","905d08b0f424741133c6857c5dc0f354"],["/images/team/04.jpg","b42ff0e6f498c4e9e4d5879c15ceb9c9"],["/images/team/05.jpg","cd1248d04553d375b1839acf0498c1ac"],["/images/team/06.jpg","202023e6cabb553a6e7599bb6bfd24b2"],["/images/team/07.jpg","25ae0f764772316d9f0fff7be91875ed"],["/images/team/08.jpg","5d4e90c19f4f4322a30c37a2fbc4b2be"],["/images/teaser01.jpg","6f1c8bb139ccfd01f431ca35e7656657"],["/images/teaser02.jpg","9f1fb308da2be35906adef63e0f17802"],["/images/teaser03.jpg","b5d046d39e53efc2b370f79a111da8e8"],["/images/top_carousel_01.jpg","565ec2544e2c8ec9de7ff550958b0ff0"],["/images/top_carousel_02.jpg","1f1176d052510982430f579ecc7bba14"],["/images/top_carousel_03.jpg","a4c7f561e16c5724eee2c274acf19c15"],["/images/top_carousel_04.jpg","3db30d16201190abcafc4145d3a79d14"],["/images/top_carousel_05.jpg","2a5405840716a8d8f076ef2da409e44c"],["/images/top_carousel_06.jpg","f18a82cf00abdd396bd83f7f82a3cd53"],["/images/top_carousel_07.jpg","f702cece48b63d06b4dfbdc93dd900b7"],["/images/top_carousel_08.jpg","648c44b798fb5badd45edb7d265f5719"],["/images/top_carousel_09.jpg","d35f4f06a9b8860ace401d265882331b"],["/images/top_carousel_10.jpg","cbc31c84bad31164794f70499ed6041b"],["/images/top_slider_01.jpg","4c2c48e6b8f879758c05e43e4a3f02cb"],["/images/touch/128x128.jpg","48a9618b4901444fec3e100f4da40847"],["/images/touch/144x144.jpg","69b62e8796065415fad8c885bb6dcf18"],["/images/touch/152x152.jpg","41764cc32c5550488a1670e6d211e0fc"],["/images/touch/192x192.jpg","d74ebb3b7b88d454b97c8bee0cd73e0f"],["/images/touch/512x512.jpg","0a194c5119d5918e4b32fca44c232d3d"],["/images/vernis-2.png","d6b6aa551502505572f9227a0ffcab15"],["/images/vernis-ongle.png","90be3bfcdb0678bc6a0fe0a41cd17be6"],["/images/vernis.png","64fcfe90072898639d6b37f238c35b31"],["/index.html","613ffde04627fcd66c24f4d9dd2edfab"],["/jekyll/update/2016/09/08/welcome-to-jekyll/index.html","5e58c393d16217999b8497cb5ab03bcd"],["/manifest.json","dea98bab3cf2efa8a399372acf8a9bdf"],["/package-lock.json","380d506eac5afa70940b628eedaa3663"],["/rendez-vous/index.html","58a6621bb77f751d3ea203bcc0d3f8a4"],["/scripts/main.min.js","4970b87deedf386d74a7149e07f654f7"],["/scripts/vendor/compressed.js","038ec60962b129def1b415556df3f240"],["/scripts/vendor/html5shiv.min.js","14bf80ba215a8dacef1eee856fd0f1ea"],["/scripts/vendor/modernizr-2.6.2.min.js","9d6981c7347b118e0942d4b71c7328c4"],["/scripts/vendor/respond.min.js","9cccbcd9bc6aed2bb14df1013e185ce3"],["/scripts/vuejs/about.vue.js","18f8dd6525ad06c156f4c76f6ba617bd"],["/scripts/vuejs/appointment.vue.js","46bdb2a7fd560d540d32070c669981f5"],["/scripts/vuejs/blog.vue.js","46bdb2a7fd560d540d32070c669981f5"],["/scripts/vuejs/contact.vue.js","55f859d9ac28d1a3cf5479fd7b09fe19"],["/scripts/vuejs/firebase.config.js","06ac3dbf5cfbbaeab2bd0528cc394ae1"],["/scripts/vuejs/footer.vue.js","dc8e7ddbf1facfde34ee19214261cd8a"],["/scripts/vuejs/form.vue.js","99c23a7505be7a761076cd133c61dd8f"],["/scripts/vuejs/gallery.vue.js","69e86574aaa4540b9378769c700d926a"],["/scripts/vuejs/home.vue.js","3e8f9bd15231905fc306d3ae22c8d89c"],["/scripts/vuejs/services.vue.js","60f236b161e55ddeb7593f4cc0250ffb"],["/scripts/vuejs/shop.vue.js","91a71561befc18b5676aa3d67608527b"],["/scripts/vuejs/shopsection.vue.js","8f2a4865340dfc71bb3e55c681bfa167"],["/scripts/vuejs/slider.vue.js","9dbf50d06b5281dcc58b15f49f378d4c"],["/services/index.html","8d0a5a7e2d29c849f5d424c1dda0a84b"]];
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







