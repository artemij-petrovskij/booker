(function(e){function t(t){for(var r,a,c=t[0],u=t[1],s=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-d63166ba":"f13fe771"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-d63166ba":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-d63166ba":"26a5a6e6"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],p.parentNode.removeChild(p),n(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"4be6":function(e,t,n){"use strict";var r=n("8ded"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("5c96"),o=n.n(a),i=(n("0fae"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("el-container",{style:{height:"100vh"}},[n("el-aside",[n("navigation")],1),n("el-main",[n("router-view")],1)],1)],1)}),c=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{staticClass:"el-menu-vertical-demo",style:{height:"100%"},attrs:{router:"",collapse:e.isCollapse,"default-active":e.$route.path}},[n("el-menu-item",{attrs:{index:"/"}},[n("i",{staticClass:"el-icon-notebook-2"}),n("span",[e._v("Все книги")])]),n("el-menu-item",{attrs:{index:"/add"}},[n("i",{staticClass:"el-icon-circle-plus-outline"}),n("span",[e._v("Добавить")])])],1)},s=[],l={data:function(){return{isCollapse:!0,width:null}},methods:{updateWidth:function(){this.width=window.innerWidth,this.width<=900&&(this.isCollapse=!0),this.width>=900&&(this.isCollapse=!1)}},mounted:function(){window.addEventListener("resize",this.updateWidth),this.updateWidth()}},d=l,p=(n("4be6"),n("2877")),f=Object(p["a"])(d,u,s,!1,null,"49e14394",null),h=f.exports,v={name:"Home",components:{navigation:h}},m=v,b=(n("034f"),Object(p["a"])(m,i,c,!1,null,null,null)),g=b.exports,y=(n("d3b7"),n("8c4f")),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h1",[e._v("Все книги")]),n("div",{staticClass:"books"},e._l(e.books,(function(t){return n("el-card",{key:t._id},[n("el-image",{staticStyle:{width:"200px",height:"300px"},attrs:{src:t.img,fit:"cover"}}),n("div",{staticStyle:{padding:"14px"}},[n("span",[e._v(e._s(t.title))]),n("div",{staticClass:"bottom clearfix"},[n("div",{staticClass:"author"},[e._v(e._s(t.author))]),n("el-button",{staticClass:"button",attrs:{type:"text"}},[e._v("Operating")])],1)])],1)})),1)])},k=[],x=(n("96cf"),n("1da1")),_=n("b3ee"),O={data:function(){return{books:""}},created:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,_["a"].getAllBooks();case 2:e.books=t.sent;case 3:case"end":return t.stop()}}),t)})))()}},j=O,C=(n("cccb"),Object(p["a"])(j,w,k,!1,null,null,null)),E=C.exports;r["default"].use(y["a"]);var S=[{path:"/",name:"Home",component:E},{path:"/add",name:"About",component:function(){return n.e("chunk-d63166ba").then(n.bind(null,"7e55"))}}],P=new y["a"]({mode:"history",routes:S}),A=P;r["default"].use(o.a),r["default"].config.productionTip=!1,new r["default"]({router:A,render:function(e){return e(g)}}).$mount("#app")},"5ced":function(e,t,n){},"85ec":function(e,t,n){},"8ded":function(e,t,n){},b3ee:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));n("96cf");var r=n("1da1"),a=n("d4ec"),o=n("ade3"),i=n("a18f"),c="api",u=function e(){Object(a["a"])(this,e)};Object(o["a"])(u,"getAllBooks",Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i("".concat(c,"/books"));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e["catch"](0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))),Object(o["a"])(u,"addNewBook",function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i("".concat(c,"/add"),{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}())},cccb:function(e,t,n){"use strict";var r=n("5ced"),a=n.n(r);a.a}});
//# sourceMappingURL=app.979b4d90.js.map