import{_ as u}from"./preload-helper.0HuHagjb.js";function E(l={}){const{immediate:f=!1,onNeedRefresh:c,onOfflineReady:r,onRegistered:g,onRegisteredSW:a,onRegisterError:s}=l;let i,o,d;const p=async(e=!0)=>{await o,await d?.()};async function w(){if("serviceWorker"in navigator){if(i=await u(()=>import("./workbox-window.prod.es5.prqDwDSL.js"),__vite__mapDeps([]),import.meta.url).then(({Workbox:e})=>new e("./sw.js",{scope:"./",type:"classic"})).catch(e=>{s?.(e)}),!i)return;d=async()=>{await i?.messageSkipWaiting()};{let e=!1;const n=()=>{e=!0,i?.addEventListener("controlling",t=>{t.isUpdate&&window.location.reload()}),c?.()};i.addEventListener("installed",t=>{typeof t.isUpdate>"u"?typeof t.isExternal<"u"?t.isExternal?n():!e&&r?.():t.isExternal?window.location.reload():!e&&r?.():t.isUpdate||r?.()}),i.addEventListener("waiting",n),i.addEventListener("externalwaiting",n)}i.register({immediate:f}).then(e=>{a?a("./sw.js",e):g?.(e)}).catch(e=>{s?.(e)})}}return o=w(),p}export{E as registerSW};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
