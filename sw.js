if(!self.define){let e,i={};const s=(s,l)=>(s=new URL(s+".js",l).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(l,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let u={};const a=e=>s(e,r),o={module:{uri:r},exports:u,require:a};i[r]=Promise.all(l.map((e=>o[e]||a(e)))).then((e=>(n(...e),u)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_app/immutable/assets/_layout.1eycQPuC.css",revision:null},{url:"_app/immutable/assets/0.1eycQPuC.css",revision:null},{url:"_app/immutable/assets/ReloadPrompt.7SsqIayP.css",revision:null},{url:"_app/immutable/chunks/entry.atIxBeE7.js",revision:null},{url:"_app/immutable/chunks/index.4zaEo9GE.js",revision:null},{url:"_app/immutable/chunks/index.z3y6Y5TD.js",revision:null},{url:"_app/immutable/chunks/preload-helper.0HuHagjb.js",revision:null},{url:"_app/immutable/chunks/ReloadPrompt.vDset7zZ.js",revision:null},{url:"_app/immutable/chunks/scheduler.zVM0ol8Y.js",revision:null},{url:"_app/immutable/chunks/virtual_pwa-register.gbRFCiGB.js",revision:null},{url:"_app/immutable/chunks/workbox-window.prod.es5.prqDwDSL.js",revision:null},{url:"_app/immutable/entry/app.DFFYdwee.js",revision:null},{url:"_app/immutable/entry/start.xIihEuae.js",revision:null},{url:"_app/immutable/nodes/0.qcoi69OP.js",revision:null},{url:"_app/immutable/nodes/1.7LU0yUD4.js",revision:null},{url:"_app/immutable/nodes/2.2rtrtC5T.js",revision:null},{url:"apple-touch-icon-180x180.png",revision:"ed642caf66dbe6871d5c45c33a27cbdb"},{url:"favicon.ico",revision:"369fc745efbcb5f5c28dae83876c56f7"},{url:"maskable-icon-512x512.png",revision:"80e827725321a96904bb6ed435b350ec"},{url:"pencil-icon.svg",revision:"f97ba553bef8d629d3ffc8b713b403b0"},{url:"pwa-192x192.png",revision:"6db867f7550e80be257781931ae1b66c"},{url:"pwa-512x512.png",revision:"ffad4d5974b456c7c7a59d622a6459ce"},{url:"pwa-64x64.png",revision:"156566ac7e435a3b9db3244fee0d6aed"},{url:"/scratchpad/",revision:"8663cb2c015c04c3087622344f40e6b4"},{url:"manifest.webmanifest",revision:"001830f4962923cf7d4e5d50660e0ede"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/scratchpad/")))}));
