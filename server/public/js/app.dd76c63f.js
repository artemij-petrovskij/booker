(function(e){function t(t){for(var r,i,s=t[0],l=t[1],c=t[2],p=0,m=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&m.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(m.length)m.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},1036:function(e,t,n){},"13e0":function(e,t,n){"use strict";var r=n("9668"),o=n.n(r);o.a},"189f":function(e,t,n){"use strict";var r=n("520a"),o=n.n(r);o.a},"4dca":function(e,t,n){},"520a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("5c96"),a=n.n(o),i=(n("0fae"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("el-container",{style:{height:"100vh"}},[n("el-aside",[n("navigation")],1),n("el-main",[n("router-view")],1)],1)],1)}),s=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{staticClass:"el-menu-vertical-demo",style:{height:"100%"},attrs:{router:"",collapse:e.isCollapse,"default-active":e.$route.path}},[n("el-menu-item",{attrs:{index:"/"}},[n("i",{staticClass:"el-icon-s-home"}),n("span",{staticClass:"home"},[e._v("Booker")])]),n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-reading"}),n("span",[e._v("Книги")])]),n("el-menu-item",{attrs:{index:"/books"}},[n("i",{staticClass:"el-icon-notebook-2"}),n("span",[e._v("Все книги")])]),n("el-menu-item",{attrs:{index:"/add"}},[n("i",{staticClass:"el-icon-circle-plus-outline"}),n("span",[e._v("Добавить книги")])])],2),n("el-submenu",{attrs:{index:"7"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-monitor"}),n("span",[e._v("Игры")])]),n("el-menu-item",{attrs:{index:"1"}},[n("i",{staticClass:"el-icon-aim"}),n("span",[e._v("Все игры")])]),n("el-menu-item",{attrs:{index:"2"}},[n("i",{staticClass:"el-icon-circle-plus-outline"}),n("span",[e._v("Добавить игры")])])],2)],1)},c=[],u={data:function(){return{isCollapse:!0,width:null}},methods:{updateWidth:function(){this.width=window.innerWidth,this.width<=900&&(this.isCollapse=!0),this.width>=900&&(this.isCollapse=!1)}},mounted:function(){window.addEventListener("resize",this.updateWidth),this.updateWidth()}},p=u,m=(n("b054"),n("2877")),d=Object(m["a"])(p,l,c,!1,null,"557014ac",null),f=d.exports,h={name:"Home",components:{navigation:f}},g=h,v=(n("034f"),Object(m["a"])(g,i,s,!1,null,null,null)),b=v.exports,x=n("8c4f"),w=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},k=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h1",[e._v("Booker")])])}],_={data:function(){return{}}},y=_,O=Object(m["a"])(y,w,k,!1,null,"725ce38b",null),j=O.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"books"},[n("h1",[e._v("Все книги")]),n("div",{staticClass:"books"},e._l(e.books,(function(t){return n("el-card",{key:t._id},[n("el-image",{staticStyle:{width:"200px",height:"300px"},attrs:{src:t.img,fit:"cover"}}),n("div",{staticStyle:{padding:"14px"}},[n("div",{staticClass:"bottom clearfix"},[n("div",{staticClass:"title"},[e._v(e._s(t.title))]),n("div",{staticClass:"author"},[e._v(e._s(t.author))])]),n("el-button-group",[n("router-link",{attrs:{router:"",to:{name:"Book",params:{id:t._id}}}},[n("el-button",{attrs:{icon:"el-icon-view",size:"small"}})],1),n("router-link",{attrs:{router:"",to:{name:"Edit",params:{id:t._id}}}},[n("el-button",{attrs:{icon:"el-icon-edit",size:"small"}})],1),n("el-button",{attrs:{icon:"el-icon-delete",size:"small"},on:{click:function(n){return e.deleteOne({id:t._id})}}})],1)],1)],1)})),1)])},$=[],R=(n("96cf"),n("1da1")),B=n("d4ec"),S=n("ade3"),E=n("a18f"),q="http://localhost:3000/api",P=function e(){Object(B["a"])(this,e)};Object(S["a"])(P,"getAllBooks",Object(R["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E("".concat(q,"/books"));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e["catch"](0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))),Object(S["a"])(P,"addNewBook",function(){var e=Object(R["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E("".concat(q,"/add"),{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()),Object(S["a"])(P,"showSingleBook",function(){var e=Object(R["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E("".concat(q,"/single"),{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e["catch"](0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()),Object(S["a"])(P,"edititem",function(){var e=Object(R["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E("".concat(q,"/edit"),{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e["catch"](0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}());var T={data:function(){return{books:""}},created:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,P.getAllBooks();case 2:e.books=t.sent;case 3:case"end":return t.stop()}}),t)})))()},methods:{deleteOne:function(e){console.log(e)}}},J=T,N=(n("da13"),Object(m["a"])(J,C,$,!1,null,null,null)),z=N.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"add"},[n("h1",[e._v("Добавить на полку")]),n("el-form",{ref:"controls",attrs:{model:e.controls,rules:e.rules,"label-width":"100px","label-position":"left "}},[n("el-form-item",{attrs:{label:"Название",prop:"title"}},[n("el-input",{model:{value:e.controls.title,callback:function(t){e.$set(e.controls,"title",t)},expression:"controls.title"}})],1),n("el-form-item",{attrs:{label:"Автор",prop:"author"}},[n("el-input",{model:{value:e.controls.author,callback:function(t){e.$set(e.controls,"author",t)},expression:"controls.author"}})],1),n("el-form-item",{attrs:{label:"Жанр",prop:"genre"}},[n("el-select",{attrs:{placeholder:"Жанр"},model:{value:e.controls.genre,callback:function(t){e.$set(e.controls,"genre",t)},expression:"controls.genre"}},e._l(e.controls.options,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),n("el-form-item",{attrs:{label:"Обложка(url)",prop:"img"}},[n("el-input",{model:{value:e.controls.img,callback:function(t){e.$set(e.controls,"img","string"===typeof t?t.trim():t)},expression:"controls.img"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("controls")}}},[e._v("Добавить")])],1)],1)],1)},M=[],W={data:function(){return{controls:{title:"",author:"",genre:"",img:"",options:[{value:"Фантастика",label:"Фантастика"},{value:"Научная литература",label:"Научная литература"},{value:"Художественная литература",label:"Художественная литература"}]},rules:{title:[{min:1,max:40,required:!0,message:"Пожалуйста введите название",trigger:"change"},{min:1,max:40,message:"Длинна не должна превышать 40 символов",trigger:"change"}],author:[{min:1,max:40,required:!0,message:"Пожалуйста введите автора",trigger:"change"}],img:[{required:!0,message:"Введите URL",trigger:"change"}],genre:[{required:!0,message:"Выберите жанр",trigger:"change"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;t.addBook()}))},addBook:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={title:e.controls.title,author:e.controls.author,genre:e.controls.genre,img:e.controls.img},t.next=3,P.addNewBook(n);case 3:e.$message({message:"Поздравляю, книга добавлена на полку!",type:"success"});case 4:case"end":return t.stop()}}),t)})))()}}},A=W,L=(n("e0ba"),Object(m["a"])(A,F,M,!1,null,"95fb5cae",null)),H=L.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"add"},[n("h1",[e._v("Редактировать")]),n("el-form",{ref:"controls",attrs:{model:e.controls,rules:e.rules,"label-width":"100px","label-position":"left "}},[n("el-form-item",{attrs:{label:"Название",prop:"title"}},[n("el-input",{model:{value:e.controls.title,callback:function(t){e.$set(e.controls,"title",t)},expression:"controls.title"}})],1),n("el-form-item",{attrs:{label:"Автор",prop:"author"}},[n("el-input",{model:{value:e.controls.author,callback:function(t){e.$set(e.controls,"author",t)},expression:"controls.author"}})],1),n("el-form-item",{attrs:{label:"Жанр",prop:"genre"}},[n("el-select",{attrs:{placeholder:"Жанр"},model:{value:e.controls.genre,callback:function(t){e.$set(e.controls,"genre",t)},expression:"controls.genre"}},e._l(e.controls.options,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),n("el-form-item",{attrs:{label:"Обложка(url)",prop:"img"}},[n("el-input",{model:{value:e.controls.img,callback:function(t){e.$set(e.controls,"img","string"===typeof t?t.trim():t)},expression:"controls.img"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("controls")}}},[e._v("Редактировать")])],1)],1)],1)},D=[],G={data:function(){return{controls:{id:"",title:"",author:"",genre:"",img:"",options:[{value:"Фантастика",label:"Фантастика"},{value:"Научная литература",label:"Научная литература"},{value:"Художественная литература",label:"Художественная литература"}]},rules:{title:[{min:1,max:40,required:!0,message:"Пожалуйста введите название",trigger:"change"},{min:1,max:40,message:"Длинна не должна превышать 40 символов",trigger:"change"}],author:[{min:1,max:40,required:!0,message:"Пожалуйста введите автора",trigger:"change"}],img:[{required:!0,message:"Введите URL",trigger:"change"}],genre:[{required:!0,message:"Выберите жанр",trigger:"change"}]}}},created:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){var n,r,o,a,i,s,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,P.showSingleBook(e.$route.params);case 2:n=t.sent,r=n[0],o=r._id,a=r.title,i=r.author,s=r.genre,l=r.img,e.controls.id=o,e.controls.title=a,e.controls.author=i,e.controls.genre=s,e.controls.img=l;case 9:case"end":return t.stop()}}),t)})))()},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;t.editBook()}))},editBook:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={id:e.controls.id,title:e.controls.title,author:e.controls.author,genre:e.controls.genre,img:e.controls.img},t.next=3,P.edititem(n);case 3:e.$message({message:"Поздравляю, книга успешна изменена!",type:"success"});case 4:case"end":return t.stop()}}),t)})))()}}},I=G,K=(n("189f"),Object(m["a"])(I,U,D,!1,null,"8d520f02",null)),Q=K.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"book"},[n("h1",[e._v(e._s(e.controls.title))]),n("h4",[e._v(e._s(e.controls.author))]),n("el-image",{staticStyle:{width:"200px",height:"300px"},attrs:{src:e.controls.img,fit:"cover"}})],1)},X=[],Y={data:function(){return{controls:{id:"",title:"",author:"",genre:"",img:""}}},created:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){var n,r,o,a,i,s,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,P.showSingleBook(e.$route.params);case 2:n=t.sent,r=n[0],o=r._id,a=r.title,i=r.author,s=r.genre,l=r.img,e.controls.id=o,e.controls.title=a,e.controls.author=i,e.controls.genre=s,e.controls.img=l;case 9:case"end":return t.stop()}}),t)})))()}},Z=Y,ee=(n("13e0"),Object(m["a"])(Z,V,X,!1,null,"369adbab",null)),te=ee.exports;r["default"].use(x["a"]);var ne=[{path:"/",name:"Home",component:j},{path:"/books",name:"Books",component:z},{path:"/add",name:"About",component:H},{path:"/edit/:id",name:"Edit",component:Q},{path:"/book/:id",name:"Book",component:te}],re=new x["a"]({mode:"history",routes:ne}),oe=re;r["default"].use(a.a),r["default"].config.productionTip=!1,new r["default"]({router:oe,render:function(e){return e(b)}}).$mount("#app")},"85ec":function(e,t,n){},9668:function(e,t,n){},b054:function(e,t,n){"use strict";var r=n("1036"),o=n.n(r);o.a},da13:function(e,t,n){"use strict";var r=n("4dca"),o=n.n(r);o.a},e0ba:function(e,t,n){"use strict";var r=n("f783"),o=n.n(r);o.a},f783:function(e,t,n){}});
//# sourceMappingURL=app.dd76c63f.js.map