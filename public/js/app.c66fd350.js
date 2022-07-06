(function(){"use strict";var e={7137:function(e,t,n){var r=n(9963),o=n(6252),i=n(1457),u=n(9941),a=n(4520),s=n(4806),c=n(9788),l=n(2958),d=n(5876),f=n(9289),g=n(5528),m={key:0},h=(0,o.Uk)("Dashboard"),p={class:"pa-2"},v=(0,o.Uk)(" Logout "),w={key:1};function b(e,t,n,r,b,k){var _=(0,o.up)("router-view"),y=(0,o.up)("Login");return(0,o.wg)(),(0,o.j4)(i.q,null,{default:(0,o.w5)((function(){return[e.isLogged()?((0,o.wg)(),(0,o.iD)("div",m,[(0,o.Wm)(u.L,{color:"blue-darken-4",density:"compact"},{prepend:(0,o.w5)((function(){return[(0,o.Wm)(a.g,{onClick:t[0]||(t[0]=function(t){return e.drawer=!e.drawer})})]})),default:(0,o.w5)((function(){return[(0,o.Wm)(s.o,null,{default:(0,o.w5)((function(){return[h]})),_:1})]})),_:1}),e.drawer?((0,o.wg)(),(0,o.j4)(g.V,{key:0,permanent:"",theme:"dark"},{append:(0,o.w5)((function(){return[(0,o._)("div",p,[(0,o.Wm)(c.T,{loading:e.loading,block:"",onClick:t[1]||(t[1]=function(t){return e.makeLogout()})},{default:(0,o.w5)((function(){return[v]})),_:1},8,["loading"])])]})),default:(0,o.w5)((function(){return[(0,o.Wm)(l.i,{density:"compact",nav:""},{default:(0,o.w5)((function(){return[(0,o.Wm)(d.l,{to:"/","prepend-icon":"mdi-view-dashboard",title:"Home",value:"home"}),(0,o.Wm)(d.l,{to:"/setting","prepend-icon":"mdi-cog-outline",title:"Settings",value:"setting"})]})),_:1})]})),_:1})):(0,o.kq)("",!0),(0,o.Wm)(f.O,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(_)]})),_:1})])):((0,o.wg)(),(0,o.iD)("div",w,[(0,o.Wm)(y)]))]})),_:1})}var k=n(655),_=n(4169),y=n(5911),j=n(6859);const O={class:"login_form_block"},S={class:"login_state"},L={key:0,class:"server_error"},W={key:1,class:"credentials_error"},A={key:2,class:"success_login"},D=(0,o.Uk)(" Login ");function T(e,t,n,r,i,u){return(0,o.wg)(),(0,o.iD)("div",O,[(0,o.Wm)(_._,{class:"login_form",title:"Dashboard",subtitle:"авторизуйтесь чтобы продолжить работу",color:"grey-darken-3",width:"400px"},{default:(0,o.w5)((()=>[(0,o.Wm)(y.Z,null,{default:(0,o.w5)((()=>[(0,o.Wm)(j.h,{label:"Email",modelValue:i.email,"onUpdate:modelValue":t[0]||(t[0]=e=>i.email=e),variant:"outlined",placeholder:"Email",shaped:""},null,8,["modelValue"]),(0,o.Wm)(j.h,{label:"Password",modelValue:i.password,"onUpdate:modelValue":t[1]||(t[1]=e=>i.password=e),variant:"outlined",placeholder:"Password",type:"password",shaped:""},null,8,["modelValue"]),(0,o._)("div",S,["unknown_error"===i.loginStateSlug?((0,o.wg)(),(0,o.iD)("div",L,"Server error, please try again later.")):"wrong_login_data"===i.loginStateSlug?((0,o.wg)(),(0,o.iD)("div",W,"Wrong email or password")):"login_success"===i.loginStateSlug?((0,o.wg)(),(0,o.iD)("div",A,"Login success")):(0,o.kq)("",!0)]),(0,o.Wm)(c.T,{loading:i.loading,onClick:u.makeLogin,type:"flat",theme:"dark"},{default:(0,o.w5)((()=>[D])),_:1},8,["loading","onClick"])])),_:1})])),_:1})])}var P=n(2262),C=(0,P.qj)({user:{id:0,token:null,logged:!1,name:"",email:"",isConfirmed:!0,createdAt:"",updatedAt:""}});function U(){var e=function(e){return C.user.token=e,!0},t=function(){return C.user.token},n=function(){return C.user.token=null,!0},r=function(e){C.user.id=e.id,C.user.email=e.email,C.user.name=e.name,C.user.createdAt=e.created_at,C.user.updatedAt=e.updated_at,C.user.logged=!0},o=function(){return C.user.logged},i=function(){return{id:C.user.id,email:C.user.email,name:C.user.name,createdAt:C.user.createdAt,updatedAt:C.user.updatedAt}},u=function(){C.user.id=0,C.user.token=null,C.user.logged=!1,C.user.name="",C.user.email="",C.user.isConfirmed=!0,C.user.createdAt="",C.user.updatedAt=""};return{setToken:e,getToken:t,clearToken:n,fillUserData:r,getUserData:i,isLogged:o,clearAllUserData:u}}var J=U().getToken,E="http://192.168.0.104:8000",G=function(e,t){return void 0===t&&(t={}),(0,k.mG)(void 0,void 0,void 0,(function(){var n,r,o;return(0,k.Jh)(this,(function(i){switch(i.label){case 0:return n=J(),r={accept:"application/json","content-type":"application/json"},n&&(r["Authorization"]="Bearer ".concat(n)),[4,fetch("".concat(E,"/api/").concat(e),{method:"POST",headers:r,body:JSON.stringify(t)})];case 1:return o=i.sent(),[4,o.json()];case 2:return[2,i.sent()]}}))}))},V={login:function(e,t){return(0,k.mG)(this,void 0,void 0,(function(){return(0,k.Jh)(this,(function(n){switch(n.label){case 0:return[4,G("login",{email:e,password:t})];case 1:return[2,n.sent()]}}))}))},getUser:function(){return(0,k.mG)(this,void 0,void 0,(function(){return(0,k.Jh)(this,(function(e){switch(e.label){case 0:return[4,G("user")];case 1:return[2,e.sent()]}}))}))},logout:function(){return(0,k.mG)(this,void 0,void 0,(function(){return(0,k.Jh)(this,(function(e){switch(e.label){case 0:return[4,G("logout")];case 1:return[2,e.sent()]}}))}))}},x=U(),Z=x.setToken,q=x.fillUserData,N=x.clearAllUserData;function H(){var e=this,t=function(t,r){return(0,k.mG)(e,void 0,void 0,(function(){var e,i;return(0,k.Jh)(this,(function(u){switch(u.label){case 0:return u.trys.push([0,3,,4]),[4,V.login(t,r)];case 1:return e=u.sent(),"success"!==e.status?[2,{status:"fail",slug:"wrong_login_data",message:"Wrong login data"}]:[4,o(e.token)];case 2:return i=u.sent(),i||n(),[2,{status:"success",slug:"login_success",message:"Login success"}];case 3:return u.sent(),[2,{status:"fail",slug:"unknown_error",message:"Unknown error"}];case 4:return[2]}}))}))},n=function(){localStorage.clear(),V.logout(),N()},r=function(){return(0,k.mG)(e,void 0,void 0,(function(){var e,t;return(0,k.Jh)(this,(function(r){switch(r.label){case 0:return e=localStorage.getItem("auth_token"),e?[4,o(e)]:[3,2];case 1:t=r.sent(),t||n(),r.label=2;case 2:return[2,!1]}}))}))},o=function(t){return(0,k.mG)(e,void 0,void 0,(function(){var e;return(0,k.Jh)(this,(function(n){switch(n.label){case 0:localStorage.setItem("auth_token",t),Z(t),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,V.getUser()];case 2:return e=n.sent(),"success"!==e.status?[2,!1]:(q(e.user),[2,!0]);case 3:return n.sent(),[2,!1];case 4:return[2]}}))}))};return{login:t,logout:n,checkLogin:r}}var I={name:"Login",setup(){const{login:e}=H();return{login:e}},data(){return{loading:!1,email:"",password:"",loginStateSlug:null}},methods:{async makeLogin(){this.loginStateSlug=null,this.loading=!0;const e=await this.login(this.email,this.password);this.loginStateSlug=e.slug,this.loading=!1}}},M=n(3744);const B=(0,M.Z)(I,[["render",T],["__scopeId","data-v-3948217c"]]);var F=B,K=(0,o.aZ)({name:"App",setup:function(){var e=U().isLogged,t=H(),n=t.checkLogin,r=t.logout;return{isLogged:e,checkLogin:n,logout:r}},components:{Login:F},data:function(){return{drawer:!0,loading:!1}},methods:{makeLogout:function(){return(0,k.mG)(this,void 0,void 0,(function(){return(0,k.Jh)(this,(function(e){switch(e.label){case 0:return this.loading=!0,[4,this.logout()];case 1:return e.sent(),this.loading=!1,[2]}}))}))}},mounted:function(){this.checkLogin()}});const R=(0,M.Z)(K,[["render",b]]);var z=R,Y=n(2119),Q=n(1669),X=n(9003),$=n(3379);function ee(e,t,n,r,i,u){return(0,o.wg)(),(0,o.j4)(Q.K,{fluid:""},{default:(0,o.w5)((function(){return[(0,o.Wm)(X.o,{dense:""},{default:(0,o.w5)((function(){return[((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(4,(function(e){return(0,o.Wm)($.D,{key:e,cols:"4"},{default:(0,o.w5)((function(){return[(0,o.Wm)(_._,{title:"Project ".concat(e),subtitle:"Subtitle for Content ".concat(e),color:"blue-darken-3",text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.?"},null,8,["title","subtitle"])]})),_:2},1024)})),64))]})),_:1})]})),_:1})}var te=(0,o.aZ)({name:"HomeView",components:{}});const ne=(0,M.Z)(te,[["render",ee]]);var re=ne,oe=[{path:"/",name:"home",component:re},{path:"/setting",name:"setting",component:function(){return n.e(314).then(n.bind(n,3022))}}],ie=(0,Y.p7)({history:(0,Y.PO)("/"),routes:oe}),ue=ie,ae=(n(9773),n(2652)),se=(0,ae.Rd)();function ce(){return(0,k.mG)(this,void 0,void 0,(function(){var e;return(0,k.Jh)(this,(function(t){switch(t.label){case 0:return[4,n.e(461).then(n.t.bind(n,5933,23))];case 1:return e=t.sent(),e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}}),[2]}}))}))}ce(),(0,r.ri)(z).use(ue).use(se).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var u=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var a=!0,s=0;s<r.length;s++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(a=!1,i<u&&(u=i));if(a){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var u={};e=e||[null,t({}),t([]),t(t)];for(var a=2&o&&r;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((function(e){u[e]=function(){return r[e]}}));return u["default"]=function(){return r},n.d(i,u),i}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+{314:"setting",461:"webfontloader"}[e]+"."+{314:"cf0d22e7",461:"61fa1fe9"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue_frontent:";n.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){a=d;break}}a||(s=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=r),e[r]=[o];var f=function(t,n){a.onerror=a.onload=null,clearTimeout(g);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},g=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),s&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(t),a=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};n.l(u,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,u=r[0],a=r[1],s=r[2],c=0;if(u.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(s)var l=s(n)}for(t&&t(r);c<u.length;c++)i=u[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkvue_frontent"]=self["webpackChunkvue_frontent"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(7137)}));r=n.O(r)})();
//# sourceMappingURL=app.c66fd350.js.map