(function(e){function t(t){for(var r,o,u=t[0],i=t[1],s=t[2],l=0,f=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==c[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},c={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-8bb5cc96":"366cf1d9","chunk-fdec55f4":"008bc4d4"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-8bb5cc96":1,"chunk-fdec55f4":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-8bb5cc96":"6b176e9c","chunk-fdec55f4":"b4b37148"}[e]+".css",c=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var s=a[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],d.parentNode.removeChild(d),n(a)},d.href=c;var b=document.getElementsByTagName("head")[0];b.appendChild(d)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}c[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"5f66":function(e,t,n){"use strict";n("a2df")},"8f9f":function(e,t,n){},a2df:function(e,t,n){},cc5d:function(e,t,n){"use strict";n("8f9f")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={class:"main-layout"},c=Object(r["d"])("footer",null,[Object(r["d"])("p",null,"© Created by Raknatee and Nattanon")],-1);function a(e,t,n,a,u,i){var s=Object(r["u"])("router-view");return Object(r["o"])(),Object(r["c"])("div",o,[Object(r["f"])(s),c])}var u=Object(r["g"])({setup:function(){document.title="CodeKids Teacher Resources"}}),i=(n("cc5d"),n("6b0d")),s=n.n(i);const l=s()(u,[["render",a]]);var f=l,d=n("9483");Object(d["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),window.location.reload(!0)},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var b=n("6c02"),p=function(e){return Object(r["r"])("data-v-2aa90d5b"),e=e(),Object(r["p"])(),e},h={class:"home"},g=p((function(){return Object(r["d"])("header",null,[Object(r["d"])("h1",null,"CodeKids Teacher")],-1)})),v={class:"content"},m=p((function(){return Object(r["d"])("h1",null,"Python Series",-1)})),j=p((function(){return Object(r["d"])("img",{class:"btn-img",src:"/class-logos/py/main.png",alt:""},null,-1)})),y=p((function(){return Object(r["d"])("h1",null,"Scratch Series",-1)})),O=p((function(){return Object(r["d"])("img",{class:"btn-img",src:"/class-logos/scratch/main.png",alt:""},null,-1)}));function w(e,t,n,o,c,a){var u=Object(r["u"])("router-link");return Object(r["o"])(),Object(r["c"])("div",h,[g,Object(r["d"])("div",v,[Object(r["f"])(u,{to:"/python",class:"btn btn-py"},{default:Object(r["y"])((function(){return[m,j]})),_:1}),Object(r["f"])(u,{to:"/scratch",class:"btn btn-scratch"},{default:Object(r["y"])((function(){return[y,O]})),_:1})])])}var k=Object(r["g"])({});n("5f66");const S=s()(k,[["render",w],["__scopeId","data-v-2aa90d5b"]]);var _=S,C=[{path:"/",name:"Home",component:_},{path:"/python",component:function(){return n.e("chunk-8bb5cc96").then(n.bind(null,"7f9a7"))}},{path:"/scratch",component:function(){return n.e("chunk-fdec55f4").then(n.bind(null,"36ee"))}}],P=Object(b["a"])({history:Object(b["b"])(),routes:C}),E=P;Object(r["b"])(f).use(E).mount("#app")}});
//# sourceMappingURL=app.d733e9f3.js.map