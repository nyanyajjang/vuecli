(function(t){function e(e){for(var a,c,r=e[0],i=e[1],l=e[2],d=0,f=[];d<r.length;d++)c=r[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},o={app:0},s=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/vuecli/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=i;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"app"}},[n("contact-list",{attrs:{contacts:t.contacts}})],1)},s=[],c=(n("4160"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"card"},[t._m(0),n("div",{staticClass:"card-body"},[n("ul",{staticClass:"list-group list-group-flush"},t._l(t.contacts,(function(e){return n("li",{key:e.id,staticClass:"list-group-item d-flex align-items-center justify-content-between"},[n("div",{staticClass:"d-flex align-items-baseline"},[n("p",[t._v(t._s(e.data().first_name)+" "+t._s(e.data().last_name))])]),n("button",{staticClass:"btn btn-danger",on:{click:function(n){return t.removeContact(e)}}},[n("i",{staticClass:"fas fa-trash-alt"})])])})),0)])])])]),n("div",{staticClass:"row justify-content-center mt-5"},[n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"card"},[t._m(1),n("div",{staticClass:"card-body"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.first_name,expression:"first_name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"First_name"},domProps:{value:t.first_name},on:{input:function(e){e.target.composing||(t.first_name=e.target.value)}}})]),n("div",{staticClass:"col"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.last_name,expression:"last_name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"last_name"},domProps:{value:t.last_name},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addContact(e)},input:function(e){e.target.composing||(t.last_name=e.target.value)}}})])]),n("div",{staticClass:"row mt-3"},[n("div",{staticClass:"col"},[n("button",{staticClass:"btn btn-success",on:{click:t.addContact}},[t._v("Add Contact")])])])])])])])])}),r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-header d-flex justify-content-center"},[n("h2",[t._v("Contact")]),n("h2")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-header"},[n("h2",[t._v("New Contact")])])}],i=n("8aa5"),l=n.n(i),u={apiKey:"AIzaSyAReZnNuims2CKA5mzRTVuiaDWHa1OhAEM",authDomain:"contacts-7390f.firebaseapp.com",databaseURL:"https://contacts-7390f.firebaseio.com",projectId:"contacts-7390f",storageBucket:"contacts-7390f.appspot.com",messagingSenderId:"1059844640761",appId:"1:1059844640761:web:12c2a56395c46fe333b728",measurementId:"G-J5P0LPPVP0"},d=l.a.initializeApp(u),f=d.firestore(),p={name:"contact-list",props:["contacts"],data:function(){return{first_name:"",last_name:""}},methods:{addContact:function(){f.collection("contacts").add({first_name:this.first_name,last_name:this.last_name}),this.first_name="",this.last_name=""},removeContact:function(t){f.collection("contacts").doc(t.id).delete()}}},m=p,v=(n("609a"),n("2877")),h=Object(v["a"])(m,c,r,!1,null,null,null),b=h.exports,_={name:"App",data:function(){return{contacts:[]}},mounted:function(){var t=this;f.collection("contacts").onSnapshot((function(e){var n=e.docChanges();n.forEach((function(e){("added"===e.type||"removed"===e.type)&&f.collection("contacts").orderBy("first_name","asc").get().then((function(e){t.contacts=e.docs}))}))}))},components:{ContactList:b}},g=_,y=(n("5c0b"),Object(v["a"])(g,o,s,!1,null,null,null)),C=y.exports,w=n("9483");Object(w["a"])("".concat("/vuecli/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(C)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),o=n.n(a);o.a},"609a":function(t,e,n){"use strict";var a=n("9198"),o=n.n(a);o.a},9198:function(t,e,n){},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.5ca2cc1f.js.map