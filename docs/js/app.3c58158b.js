(function(e){function t(t){for(var n,o,c=t[0],u=t[1],s=t[2],l=0,f=[];l<c.length;l++)o=c[l],i[o]&&f.push(i[o][0]),i[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==i[c]&&(n=!1)}n&&(a.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={app:0},i={app:0},a=[];function c(e){return u.p+"js/"+({"listar~login":"listar~login",listar:"listar",login:"login"}[e]||e)+"."+{"listar~login":"96f5cb5c",listar:"8d6f86ec",login:"82b757be"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={"listar~login":1,listar:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise(function(t,r){for(var n="css/"+({"listar~login":"listar~login",listar:"listar",login:"login"}[e]||e)+"."+{"listar~login":"0c7df243",listar:"f34c2791",login:"31d6cfe0"}[e]+".css",i=u.p+n,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var s=a[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===n||l===i))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===n||l===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=n,delete o[e],p.parentNode.removeChild(p),r(a)},p.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(p)}).then(function(){o[e]=0}));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,r){n=i[e]=[t,r]});t.push(n[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e),s=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=i[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+n+": "+o+")");a.type=n,a.request=o,r[1](a)}i[e]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/issue-track/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var p=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"loginAction",function(){return D}),r.d(n,"logoutAction",function(){return J}),r.d(n,"setIssuesAction",function(){return H}),r.d(n,"insertIssueAction",function(){return K}),r.d(n,"lockIssueAction",function(){return Q}),r.d(n,"unlockIssueAction",function(){return W}),r.d(n,"updateIssueAction",function(){return X});var o={};r.r(o),r.d(o,"issuesGetter",function(){return Y}),r.d(o,"userGetter",function(){return Z});r("551c");var i=r("2b0e"),a=r("bb71");r("da64");i["a"].use(a["a"],{iconfont:"md"});var c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",["/"!=this.$route.path?r("v-toolbar",{attrs:{app:""}},[r("v-toolbar-title",{staticClass:"headline text-uppercase"},[r("span",[e._v("Issue")]),r("span",{staticClass:"font-weight-light"},[e._v("Track")])]),r("v-spacer"),e._v("\n    "+e._s(e.userGetter.login)),r("br"),e._v("\n    "+e._s(e.userGetter.repos)+"\n    "),r("v-btn",{attrs:{color:"red",dark:""},on:{click:function(t){return e.logoutAction()}}},[e._v("Exit")])],1):e._e(),r("v-content",[r("router-view")],1)],1)},u=[],s=r("c93e"),l=r("2f62"),f={name:"App",data:function(){return{}},computed:Object(s["a"])({},Object(l["c"])({userGetter:"github/userGetter"})),mounted:function(){},methods:Object(s["a"])({},Object(l["b"])({logoutAction:"github/logoutAction"}))},p=f,d=r("2877"),h=r("6544"),g=r.n(h),m=r("7496"),v=r("8336"),b=r("549c"),w=r("9910"),y=r("71d9"),k=r("2a7f"),O=Object(d["a"])(p,c,u,!1,null,null,null),S=O.exports;g()(O,{VApp:m["a"],VBtn:v["a"],VContent:b["a"],VSpacer:w["a"],VToolbar:y["a"],VToolbarTitle:k["b"]});var j=r("8c4f");i["a"].use(j["a"]);var A=new j["a"]({mode:"history",routes:[{path:"/",name:"login",component:function(){return Promise.all([r.e("listar~login"),r.e("login")]).then(r.bind(null,"a55b"))}},{path:"/listar",name:"listar",component:function(){return Promise.all([r.e("listar~login"),r.e("listar")]).then(r.bind(null,"9b0e"))}}]}),I=(r("96cf"),r("3040")),_="LOGIN_USUARIO",E="LOGOUT_USUARIO",T="SET_ISSUES",R="INSERT_ISSUE",x=r("bc3a"),P=r.n(x);P.a.interceptors.request.use(function(e){return Object(s["a"])({config:e},{Authorization:"Basic ".concat(localStorage.getItem("token"))})},function(e){return Promise.reject(e)});var C={};C=P.a.create({baseURL:"https://api.github.com",crossdomain:!0,headers:{Authorization:"Basic ".concat(localStorage.getItem("token"))}});var N,U=function(e){return C.get(e)},G=function(e,t){return C.post(e,t)},B=function(e,t){return C.put(e,t)},L=function(e,t){return C.patch(e,t)},V=function(e){return C.delete(e)},q=function(e){return U("/repos/"+localStorage.getItem("repos")+"/issues",e)},M=function(e){return G("/repos/"+localStorage.getItem("repos")+"/issues",e)},F=function(e){return L("/repos/"+localStorage.getItem("repos")+"/issues/"+e.number,e)},$=function(e){return B("/repos/"+localStorage.getItem("repos")+"/issues/"+e.number+"/lock",e)},z=function(e){return V("/repos/"+localStorage.getItem("repos")+"/issues/"+e.number+"/lock")},D=function(){var e=Object(I["a"])(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,n(_,r),A.push("/listar");case 3:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),J=function(){var e=Object(I["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:r=t.commit,r(E),A.push("/");case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(I["a"])(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,q(r).then(function(e){var t=e.data;n(T,t)}).catch(function(e){throw new TypeError(e,"error",10)});case 2:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),K=function(){var e=Object(I["a"])(regeneratorRuntime.mark(function e(t,r){var n,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,o=t.dispatch,M(r).then(function(e){var t=e.data;n(R,t),o("setIssuesAction")}).catch(function(e){throw new TypeError(e,"error",10)});case 2:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),Q=function(){var e=Object(I["a"])(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t.commit,n=t.dispatch,$(r).then(function(e){e.data;n("setIssuesAction")}).catch(function(e){throw new TypeError(e,"error",10)});case 2:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),W=function(){var e=Object(I["a"])(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t.commit,n=t.dispatch,z(r).then(function(e){e.data;n("setIssuesAction")}).catch(function(e){throw new TypeError(e,"error",10)});case 2:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),X=function(){var e=Object(I["a"])(regeneratorRuntime.mark(function e(t,r){var n,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,o=t.dispatch,F(r).then(function(e){var t=e.data;n(R,t),o("setIssuesAction")}).catch(function(e){throw new TypeError(e,"error",10)});case 2:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),Y=function(e){return e.issues},Z=function(e){return e.user},ee=r("a322"),te={user:{},issues:[]},re=(N={},Object(ee["a"])(N,_,function(e,t){localStorage.setItem("token",btoa(t.login+":"+t.password)),localStorage.setItem("repos",t.repos),e.user=t}),Object(ee["a"])(N,E,function(e){localStorage.removeItem("token"),localStorage.removeItem("repos"),e.user={}}),Object(ee["a"])(N,T,function(e,t){e.issues=t}),N),ne={namespaced:!0,actions:n,getters:o,mutations:re,state:te};i["a"].use(l["a"]);var oe=new l["a"].Store({modules:{github:ne},debug:!0}),ie=r("9483");Object(ie["a"])("".concat("/issue-track/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),i["a"].config.productionTip=!1,new i["a"]({router:A,store:oe,render:function(e){return e(S)}}).$mount("#app")}});
//# sourceMappingURL=app.3c58158b.js.map