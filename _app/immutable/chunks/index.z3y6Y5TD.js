import{r as $,n as x,k as E,f as D,l as b,m as M,p as N,q as P,v as j,d as v,w as B,x as O,y as I}from"./scheduler.zVM0ol8Y.js";let p=!1;function G(){p=!0}function R(){p=!1}function q(e,t,n,i){for(;e<t;){const s=e+(t-e>>1);n(s)<=i?e=s+1:t=s}return e}function z(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const r=[];for(let c=0;c<t.length;c++){const o=t[c];o.claim_order!==void 0&&r.push(o)}t=r}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let s=0;for(let r=0;r<t.length;r++){const c=t[r].claim_order,o=(s>0&&t[n[s]].claim_order<=c?s+1:q(1,s,d=>t[n[d]].claim_order,c))-1;i[r]=n[o]+1;const u=o+1;n[u]=r,s=Math.max(u,s)}const a=[],l=[];let f=t.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(a.push(t[r-1]);f>=r;f--)l.push(t[f]);f--}for(;f>=0;f--)l.push(t[f]);a.reverse(),l.sort((r,c)=>r.claim_order-c.claim_order);for(let r=0,c=0;r<l.length;r++){for(;c<a.length&&l[r].claim_order>=a[c].claim_order;)c++;const o=c<a.length?a[c]:null;e.insertBefore(l[r],o)}}function F(e,t){if(p){for(z(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function U(e,t,n){e.insertBefore(t,n||null)}function V(e,t,n){p&&!n?F(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function m(e){e.parentNode&&e.parentNode.removeChild(e)}function ce(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function S(e){return document.createElement(e)}function W(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function g(e){return document.createTextNode(e)}function ae(){return g(" ")}function fe(){return g("")}function ue(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function oe(e){return function(t){return t.preventDefault(),e.call(this,t)}}function H(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}const J=["width","height"];function K(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const i in t)t[i]==null?e.removeAttribute(i):i==="style"?e.style.cssText=t[i]:i==="__value"?e.value=e[i]=t[i]:n[i]&&n[i].set&&J.indexOf(i)===-1?e[i]=t[i]:H(e,i,t[i])}function Q(e,t){Object.keys(t).forEach(n=>{X(e,n,t[n])})}function X(e,t,n){const i=t.toLowerCase();i in e?e[i]=typeof e[i]=="boolean"&&n===""?!0:n:t in e?e[t]=typeof e[t]=="boolean"&&n===""?!0:n:H(e,t,n)}function _e(e){return/-/.test(e)?Q:K}function de(e){return e.dataset.svelteH}function Y(e){return Array.from(e.childNodes)}function L(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function C(e,t,n,i,s=!1){L(e);const a=(()=>{for(let l=e.claim_info.last_index;l<e.length;l++){const f=e[l];if(t(f)){const r=n(f);return r===void 0?e.splice(l,1):e[l]=r,s||(e.claim_info.last_index=l),f}}for(let l=e.claim_info.last_index-1;l>=0;l--){const f=e[l];if(t(f)){const r=n(f);return r===void 0?e.splice(l,1):e[l]=r,s?r===void 0&&e.claim_info.last_index--:e.claim_info.last_index=l,f}}return i()})();return a.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,a}function Z(e,t,n,i){return C(e,s=>s.nodeName===t,s=>{const a=[];for(let l=0;l<s.attributes.length;l++){const f=s.attributes[l];n[f.name]||a.push(f.name)}a.forEach(l=>s.removeAttribute(l))},()=>i(t))}function he(e,t,n){return Z(e,t,n,S)}function k(e,t){return C(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>g(t),!0)}function me(e){return k(e," ")}function A(e,t,n){for(let i=n;i<e.length;i+=1){const s=e[i];if(s.nodeType===8&&s.textContent.trim()===t)return i}return-1}function $e(e,t){const n=A(e,"HTML_TAG_START",0),i=A(e,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new y(t);L(e);const s=e.splice(n,i-n+1);m(s[0]),m(s[s.length-1]);const a=s.slice(1,s.length-1);if(a.length===0)return new y(t);for(const l of a)l.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new y(t,a)}function pe(e,t){t=""+t,e.data!==t&&(e.data=t)}function ye(e,t){e.value=t??""}function xe(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function ge(e,t){const n=[];let i=0;for(const s of t.childNodes)if(s.nodeType===8){const a=s.textContent.trim();a===`HEAD_${e}_END`?(i-=1,n.push(s)):a===`HEAD_${e}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class ee{is_svg=!1;e=void 0;n=void 0;t=void 0;a=void 0;constructor(t=!1){this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,n,i=null){this.e||(this.is_svg?this.e=W(n.nodeName):this.e=S(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(t)),this.i(i)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)U(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(m)}}class y extends ee{l=void 0;constructor(t=!1,n){super(t),this.e=this.n=null,this.l=n}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let n=0;n<this.n.length;n+=1)V(this.t,this.n[n],t)}}function we(e,t){return new e(t)}const h=new Set;let _;function Te(){_={r:0,c:[],p:_}}function Ee(){_.r||$(_.c),_=_.p}function te(e,t){e&&e.i&&(h.delete(e),e.i(t))}function Ne(e,t,n,i){if(e&&e.o){if(h.has(e))return;h.add(e),_.c.push(()=>{h.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function ve(e,t,n){const i=e.$$.props[t];i!==void 0&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function Ae(e){e&&e.c()}function be(e,t){e&&e.l(t)}function ne(e,t,n){const{fragment:i,after_update:s}=e.$$;i&&i.m(t,n),N(()=>{const a=e.$$.on_mount.map(B).filter(b);e.$$.on_destroy?e.$$.on_destroy.push(...a):$(a),e.$$.on_mount=[]}),s.forEach(N)}function ie(e,t){const n=e.$$;n.fragment!==null&&(P(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function se(e,t){e.$$.dirty[0]===-1&&(O.push(e),I(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Se(e,t,n,i,s,a,l=null,f=[-1]){const r=j;v(e);const c=e.$$={fragment:null,ctx:[],props:a,update:x,not_equal:s,bound:E(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:E(),dirty:f,skip_bound:!1,root:t.target||r.$$.root};l&&l(c.root);let o=!1;if(c.ctx=n?n(e,t.props||{},(u,d,...w)=>{const T=w.length?w[0]:d;return c.ctx&&s(c.ctx[u],c.ctx[u]=T)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](T),o&&se(e,u)),d}):[],c.update(),o=!0,$(c.before_update),c.fragment=i?i(c.ctx):!1,t.target){if(t.hydrate){G();const u=Y(t.target);c.fragment&&c.fragment.l(u),u.forEach(m)}else c.fragment&&c.fragment.c();t.intro&&te(e.$$.fragment),ne(e,t.target,t.anchor),R(),D()}v(r)}class He{$$=void 0;$$set=void 0;$destroy(){ie(this,1),this.$destroy=x}$on(t,n){if(!b(n))return x;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(t){this.$$set&&!M(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const re="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(re);export{ge as A,$e as B,_e as C,K as D,ye as E,ve as F,oe as G,y as H,ce as I,He as S,Y as a,k as b,he as c,m as d,S as e,me as f,V as g,F as h,Se as i,pe as j,fe as k,Ne as l,Ee as m,te as n,H as o,xe as p,Te as q,we as r,ae as s,g as t,Ae as u,be as v,ne as w,ie as x,de as y,ue as z};