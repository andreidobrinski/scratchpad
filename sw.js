if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let u={};const a=e=>l(e,r),o={module:{uri:r},exports:u,require:a};s[r]=Promise.all(i.map((e=>o[e]||a(e)))).then((e=>(n(...e),u)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_app/immutable/assets/_layout.8wW8-Maj.css",revision:null},{url:"_app/immutable/assets/_page.4U-nugKZ.css",revision:null},{url:"_app/immutable/assets/0.8wW8-Maj.css",revision:null},{url:"_app/immutable/assets/3.4U-nugKZ.css",revision:null},{url:"_app/immutable/assets/ReloadPrompt.7SsqIayP.css",revision:null},{url:"_app/immutable/chunks/entry.sbmP477_.js",revision:null},{url:"_app/immutable/chunks/index.Je63OzX8.js",revision:null},{url:"_app/immutable/chunks/index.lL02BS-q.js",revision:null},{url:"_app/immutable/chunks/paths.REHq1car.js",revision:null},{url:"_app/immutable/chunks/preload-helper.0HuHagjb.js",revision:null},{url:"_app/immutable/chunks/ReloadPrompt.GvZTcFK8.js",revision:null},{url:"_app/immutable/chunks/scheduler.RVYweIDu.js",revision:null},{url:"_app/immutable/chunks/virtual_pwa-register.gbRFCiGB.js",revision:null},{url:"_app/immutable/chunks/workbox-window.prod.es5.prqDwDSL.js",revision:null},{url:"_app/immutable/entry/app.wFnghzjW.js",revision:null},{url:"_app/immutable/entry/start.a53w_r5v.js",revision:null},{url:"_app/immutable/nodes/0.McQ8joPr.js",revision:null},{url:"_app/immutable/nodes/1.Qlrm3iDc.js",revision:null},{url:"_app/immutable/nodes/2.hXJjL6vf.js",revision:null},{url:"_app/immutable/nodes/3.6UfDxJAL.js",revision:null},{url:"apple-touch-icon-180x180.png",revision:"ed642caf66dbe6871d5c45c33a27cbdb"},{url:"favicon.ico",revision:"369fc745efbcb5f5c28dae83876c56f7"},{url:"maskable-icon-512x512.png",revision:"80e827725321a96904bb6ed435b350ec"},{url:"pencil-icon.svg",revision:"f97ba553bef8d629d3ffc8b713b403b0"},{url:"pwa-192x192.png",revision:"6db867f7550e80be257781931ae1b66c"},{url:"pwa-512x512.png",revision:"ffad4d5974b456c7c7a59d622a6459ce"},{url:"pwa-64x64.png",revision:"156566ac7e435a3b9db3244fee0d6aed"},{url:"about",revision:"503cf65452b30af54a68a5e12fda5890"},{url:"/scratchpad/",revision:"252087b8937b6d4e2ef9e2c9476c6ab1"},{url:"manifest.webmanifest",revision:"001830f4962923cf7d4e5d50660e0ede"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/scratchpad/")))}));
