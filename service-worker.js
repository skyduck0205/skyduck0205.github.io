"use strict";var precacheConfig=[["/index.html","50f8c0d7fdc350098f48ee719c31a74e"],["/static/css/main.d745bf66.css","d745bf66d499fc67ba23bf5345ae7476"],["/static/js/main.37c85e0e.js","e0aeba29df801c8e6bfe8bab0a966538"],["/static/media/104.3f13e038.jpg","3f13e038f15776814b70fb699c030753"],["/static/media/avatar.8a0c9a1a.png","8a0c9a1a54a2f96eeb7911ada4a1b299"],["/static/media/cat.06bf24d1.jpg","06bf24d16a7eaf8f3167c1bcf6353406"],["/static/media/catpunch.225bee68.jpg","225bee687310c273ff2d46a016280f13"],["/static/media/datavan.b2a71a6e.jpg","b2a71a6eb70ac7fb85be5f719caad1f9"],["/static/media/docmanager.7727723d.jpg","7727723d55a033daad9c54cc9aacaeaf"],["/static/media/duck-typing-logo.16fc3c47.svg","16fc3c472f5dbd36542e360e75196368"],["/static/media/duck-typing-text-en.e1c0a195.svg","e1c0a195aeec7c456212268692a96249"],["/static/media/duck-typing-text-jp.206a9c4a.svg","206a9c4a5dff30d70d1467d3ea2ac808"],["/static/media/foxtest.6d1ce037.jpg","6d1ce037c3b9a2adb0357ecaee40d86f"],["/static/media/gridpuzzle.20a96a7c.jpg","20a96a7c078600f19c5ea97e72ca4342"],["/static/media/holisong.95b55421.jpg","95b554214d58b84defa1361ab321bb33"],["/static/media/ivm.98662a72.jpg","98662a72e5239e12846dabaae6d634eb"],["/static/media/labor.e8dea853.jpg","e8dea853b7a8d0370d95540f2c9321cc"],["/static/media/lifezmd.1323baa2.jpg","1323baa273b5b778ebdfb7be586fc632"],["/static/media/mrg.875a785c.jpg","875a785c9659093e2f6035ee9c1b2c9f"],["/static/media/pugbot.b0b0a27b.jpg","b0b0a27b8cccb7c8e842a1af2a9021d7"],["/static/media/rxjsdraw.65322f98.jpg","65322f9873d709e1a9693d52aa1f0b60"],["/static/media/small2.390b2ede.jpg","390b2ede419781f7eaca1b8d9ae85931"],["/static/media/smt.7233dfe0.jpg","7233dfe018adc372dd60425fc184af09"],["/static/media/tinlt.773e2807.jpg","773e28073b8d72d377b38f4997e98617"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});