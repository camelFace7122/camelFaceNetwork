(this["webpackJsonpsamurai-path"]=this["webpackJsonpsamurai-path"]||[]).push([[1],{142:function(e,t,n){e.exports=n(232)},147:function(e,t,n){},148:function(e,t,n){},149:function(e,t,n){},16:function(e,t,n){e.exports={header:"Header_header__RUz2-",headerContainer:"Header_headerContainer__3WfoT",logotype:"Header_logotype__2e_c-",logoName:"Header_logoName__2vQvJ",logoSlogan:"Header_logoSlogan__300C2",loginBlock:"Header_loginBlock__3UNb5",authorized:"Header_authorized__41z7k",image:"Header_image__1vDZ5",authorizedTextBlock:"Header_authorizedTextBlock__3SY3e",userLogin:"Header_userLogin__195rg"}},23:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return l}));var r=n(4),a=n.n(r),o=n(7),u=n(2),c=n(32),i={initialized:!1,globalError:null},s=function(){return function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Object(c.c)());case 2:t({type:"app/INITIALIZED_SUCCESS"});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},l=function(e){return{type:"app/SHOW_GLOBAL_ERROR",globalError:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/INITIALIZED_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{initialized:!0});case"app/SHOW_GLOBAL_ERROR":return Object(u.a)(Object(u.a)({},e),{},{globalError:t.globalError});default:return e}}},232:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(49),u=n.n(o),c=(n(147),n(25)),i=n(26),s=n(28),l=n(27),f=(n(148),n(6)),p=(n(149),function(e){return a.a.createElement("div",null,"Today Elon Musk started new Neurolink project 17 january 21:55")}),d=n(9),m=n.n(d),h=n(17),g=function(e){return a.a.createElement("div",{className:m.a.person},a.a.createElement("img",{src:e.state.avatar}),a.a.createElement("p",null,e.state.friend))},E=n(39),b=n.n(E),v=function(e){var t=e.sidebar.friends.map((function(e){return a.a.createElement(g,{key:e.id,state:e})}));return a.a.createElement("div",{className:m.a.navBar},a.a.createElement("nav",{className:m.a.nav},a.a.createElement("div",{className:m.a.item},a.a.createElement(h.b,{to:"/profile",activeClassName:m.a.active},"Profile")),a.a.createElement("div",{className:b()(m.a.item,m.a.active)},a.a.createElement(h.b,{to:"/dialogs",activeClassName:m.a.active},"Messages")),a.a.createElement("div",{className:m.a.item},a.a.createElement(h.b,{to:"/users",activeClassName:m.a.active},"Users")),a.a.createElement("div",{className:m.a.item},a.a.createElement(h.b,{to:"/news",activeClassName:m.a.active},"News")),a.a.createElement("div",{className:m.a.item},a.a.createElement("a",null,"Music")),a.a.createElement("div",{className:m.a.item},a.a.createElement("a",null,"Settings"))),a.a.createElement("aside",null,a.a.createElement("h3",null,"Friends"),a.a.createElement("div",{className:m.a.friends},t)))},_=n(20),O=Object(_.b)((function(e){return{sidebar:e.sidebar}}),(function(e){return{}}))(v),j=n(16),S=n.n(j),w=n(88),P=n.n(w),y=n(63),U=n.n(y),C=function(e){return a.a.createElement("header",{className:S.a.header},a.a.createElement("div",{className:"wrapper"},a.a.createElement("div",{className:S.a.headerContainer},a.a.createElement("div",{className:S.a.logotype},a.a.createElement("img",{src:P.a}),a.a.createElement("span",{className:S.a.logoName},"Bonfire"),a.a.createElement("span",{className:S.a.logoSlogan},"so turn the lights out")),a.a.createElement("div",{className:S.a.loginBlock},e.isAuth?a.a.createElement("div",{className:S.a.authorized},a.a.createElement("div",{className:S.a.authorizedTextBlock},a.a.createElement("span",{className:S.a.userLogin},e.login),a.a.createElement("div",null,a.a.createElement("button",{onClick:e.logout},"Logout"))),a.a.createElement("div",{className:S.a.image},a.a.createElement("img",{src:e.userPhoto||U.a,alt:"user photo"}))):a.a.createElement(h.b,{to:"/login"},"Login")))))},T=n(32),N=n(42),k=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement(C,this.props)}}]),n}(a.a.Component),A=Object(_.b)((function(e){return{isAuth:Object(N.b)(e),login:Object(N.c)(e),userPhoto:Object(N.e)(e)}}),{logout:T.d})(k),x=n(19),I=n(23),L=n(52),R=n(40),G=n(50),B=n.n(G),H=function(e){var t=e.globalError,n=e.onErrorPopUpClose;return a.a.createElement("div",{className:b()(B.a.errorPopUp,Object(R.a)({},B.a.isHasError,t))},a.a.createElement("p",null,"Sorry, it seems we have error"),a.a.createElement("h4",null,t),a.a.createElement("button",{className:B.a.closeBtn,onClick:function(){return n(null)}},"\xd7"))},z=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(a.a.Component),D=a.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,306))})),F=a.a.lazy((function(){return n.e(6).then(n.bind(null,307))})),M=a.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,309))})),W=a.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,308))})),Z=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={timer:null},e.onErrorPopUpClose=function(t){clearInterval(e.state.timer),e.props.showGlobalError(t)},e.catchAllUnhandledErrors=function(t,n){e.onErrorPopUpClose(t.reason.toJSON().message),e.setState({timer:setTimeout((function(){e.props.showGlobalError(null)}),1e4)})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"App"},a.a.createElement(A,null),a.a.createElement("div",{className:"main wrapper"},a.a.createElement(O,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(z,null,a.a.createElement(a.a.Suspense,{fallback:a.a.createElement(L.a,null)},a.a.createElement(f.d,null,a.a.createElement(f.b,{exact:!0,path:"/",render:function(){return a.a.createElement(f.a,{to:"/profile"})}}),a.a.createElement(f.b,{render:function(){return a.a.createElement(W,null)},path:"/dialogs"}),a.a.createElement(f.b,{render:function(){return a.a.createElement(D,null)},path:"/profile/:userId?"}),a.a.createElement(f.b,{render:function(){return a.a.createElement(F,null)},path:"/users"}),a.a.createElement(f.b,{render:function(){return a.a.createElement(p,null)},path:"/news"}),a.a.createElement(f.b,{render:function(){return a.a.createElement(M,null)},path:"/login"}),a.a.createElement(f.b,{render:function(){return a.a.createElement("div",null,"Error 404, page was not found")},path:"*"})))))),a.a.createElement(H,{globalError:this.props.globalError,onErrorPopUpClose:this.onErrorPopUpClose})):a.a.createElement(L.a,null)}}]),n}(a.a.Component),J=Object(x.d)(f.g,Object(_.b)((function(e){return{initialized:e.app.initialized,globalError:e.app.globalError}}),{initializeApp:I.b,showGlobalError:I.c}))(Z);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=n(64),V=n(79),K={friends:[{id:1,friend:"Zhalgas",avatar:"https://pbs.twimg.com/profile_images/913861131005022209/iaBdZZn1.jpg"},{id:2,friend:"Erkanat",avatar:"https://demotivation.ru/wp-content/uploads/2020/05/1463056020_205639_1463060534_noticia_normal_recorte1-1.jpg"},{id:3,friend:"Maya",avatar:"https://dropi.ru/img/uploads/2017-10-25/1_original.jpeg"}]},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Y=n(86),q=n(92),$=n(85),ee=Object(x.c)({profilePage:Q.b,dialogsPage:V.b,sidebar:X,usersPage:Y.b,auth:T.b,form:$.a,app:I.a}),te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||x.d,ne=Object(x.e)(ee,te(Object(x.a)(q.a)));window.__store__=ne;var re=ne;u.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(h.a,null,a.a.createElement(_.a,{store:re},a.a.createElement(J,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},32:function(e,t,n){"use strict";n.d(t,"c",(function(){return p})),n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return m}));var r=n(4),a=n.n(r),o=n(7),u=n(2),c=n(8),i=n(33),s={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},l=function(e){return{type:"auth/GET_CAPTCHA_URL",payload:{captchaUrl:e}}},f=function(e,t,n,r){return{type:"auth/SET_AUTH_USER_DATA",data:{userId:e,email:t,login:n},isAuth:r}},p=function(){return function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r,o,u,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.getAuthUserData();case 2:0===(n=e.sent).resultCode&&(r=n.data,o=r.id,u=r.login,i=r.email,t(f(o,i,u,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r,o,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.authorizeByLogin(e);case 2:if(0!==(r=t.sent).resultCode){t.next=7;break}n(p()),t.next=14;break;case 7:if(10!==r.resultCode){t.next=12;break}return t.next=10,c.c.getCaptchaUrl().then((function(e){return e.url}));case 10:o=t.sent,n(l(o));case 12:u=r.messages.length>0?r.messages[0]:"Common Error",n(Object(i.a)("login",{_error:u}));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(){return function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.logout();case 2:0===e.sent.resultCode&&t(f(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_AUTH_USER_DATA":return Object(u.a)(Object(u.a)(Object(u.a)({},e),t.data),{},{isAuth:t.isAuth});case"auth/GET_CAPTCHA_URL":return Object(u.a)(Object(u.a)({},e),t.payload);default:return e}}},42:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return c}));var r=function(e){return e.auth.isAuth},a=function(e){return e.auth.captchaUrl},o=function(e){return e.auth.login},u=function(e){return e.auth.userId},c=function(e){return e.profilePage.profile?e.profilePage.profile.photos.small:null}},50:function(e,t,n){e.exports={errorPopUp:"ErrorPopUp_errorPopUp__ldiJ3",isHasError:"ErrorPopUp_isHasError__3_JG0",closeBtn:"ErrorPopUp_closeBtn__ZrfS9"}},52:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(90),u=n.n(o),c=n(91),i=n.n(c);t.a=function(e){return a.a.createElement("div",{className:i.a.preloader},a.a.createElement("img",{src:u.a}))}},63:function(e,t,n){e.exports=n.p+"static/media/user.5de72daf.png"},64:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return v})),n.d(t,"e",(function(){return _})),n.d(t,"h",(function(){return O})),n.d(t,"f",(function(){return j})),n.d(t,"g",(function(){return S}));var r=n(4),a=n.n(r),o=n(7),u=n(31),c=n(2),i=n(33),s=n(8),l=n(23),f="profilePage/ADD_POST",p="profilePage/DELETE_POST",d={posts:[{id:1,message:"This is the main event of the evening!",likesCount:"0"},{id:2,message:"Wow, is it me?",likesCount:"15"},{id:3,message:"Catch me, if you can, man",likesCount:"329"}],profile:null,profileUpdateStatus:"none",status:""},m=function(e){return{type:f,post:e}},h=function(e){return{type:p,postId:e}},g=function(e){return{type:"profilePage/SET_USER_STATUS",status:e}},E=function(e){return{type:"profilePage/SAVE_PHOTO_SUCCESS",photos:e}},b=function(e){return{type:"profilePage/SET_PROFILE_UPDATE_STATUS",profileUpdateStatus:e}},v=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getUserProfile(e);case 2:r=t.sent,n({type:"profilePage/SET_USER_PROFILE",profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getUserStatus(e);case 2:r=t.sent,n(g(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.b.updateUserStatus(e);case 3:0===t.sent.resultCode&&n(g(e)),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),n(Object(l.c)(t.t0.response.request.status)),setTimeout((function(){n(Object(l.c)(null))}),1e4);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.savePhoto(e);case 2:0===(r=t.sent).resultCode&&n(E(r.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n,r){var o,u,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=r().auth.userId,t.next=3,s.b.saveProfileEdit(e);case 3:if(0!==(u=t.sent).resultCode){t.next=10;break}return t.next=7,n(v(o));case 7:n(b("success")),t.next=13;break;case 10:c=u.messages.length>0?u.messages[0]:"Common Error",n(Object(i.a)("edit-profile",{_error:c})),n(b("error"));case 13:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(c.a)(Object(c.a)({},e),{},{posts:[].concat(Object(u.a)(e.posts),[{id:4,message:t.post,likesCount:228}])});case"profilePage/SET_USER_PROFILE":return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case"profilePage/SET_USER_STATUS":return Object(c.a)(Object(c.a)({},e),{},{status:t.status});case p:return Object(c.a)(Object(c.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case"profilePage/SAVE_PHOTO_SUCCESS":return Object(c.a)(Object(c.a)({},e),{},{profile:Object(c.a)(Object(c.a)({},e.profile),{},{photos:t.photos})});case"profilePage/SET_PROFILE_UPDATE_STATUS":return Object(c.a)(Object(c.a)({},e),{},{profileUpdateStatus:t.profileUpdateStatus});default:return e}}},79:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(31),a=n(2),o={messages:[{id:1,message:"Each day i will ...."},{id:2,message:"My new variable ...."},{id:3,message:"easy money"}],dialogs:[{id:1,name:"Aslan"},{id:2,name:"Rachel"},{id:3,name:"Gus"},{id:4,name:"Artur"},{id:5,name:"Luke"}]},u=function(e){return{type:"ADD_MESSAGE",message:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogsPage/ADD_MESSAGE":return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:4,message:t.message}])});default:return e}}},8:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i}));var r=n(89),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0",headers:{"API-KEY":"76654ab4-13c6-418e-b77e-6191b76d0efc_"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))}},u={getAuthUserData:function(){return a.get("auth/me").then((function(e){return e.data}))},authorizeByLogin:function(e){var t=e.email,n=e.password,r=e.rememberMe,o=void 0!==r&&r,u=e.captcha;return a.post("auth/login",{email:t,password:n,rememberMe:o,captcha:u}).then((function(e){return e.data}))},logout:function(){return a.delete("auth/login").then((function(e){return e.data}))}},c={getUserProfile:function(e){return a.get("profile/".concat(e)).then((function(e){return e.data}))},getUserStatus:function(e){return a.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateUserStatus:function(e){return a.put("profile/status/",{status:e}).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},saveProfileEdit:function(e){return a.put("profile",e).then((function(e){return e.data}))}},i={getCaptchaUrl:function(){return a.get("/security/get-captcha-url").then((function(e){return e.data}))}}},86:function(e,t,n){"use strict";n.d(t,"d",(function(){return v})),n.d(t,"a",(function(){return _})),n.d(t,"e",(function(){return j})),n.d(t,"c",(function(){return S}));var r=n(4),a=n.n(r),o=n(7),u=n(31),c=n(2),i=n(8),s=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(c.a)(Object(c.a)({},e),r):e}))},l="usersPage/UNFOLLOW",f="usersPage/FOLLOW",p="usersPage/SET_USERS",d={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[],fake:10},m=function(e){return{type:f,userId:e}},h=function(e){return{type:l,userId:e}},g=function(e){return{type:p,users:e}},E=function(e){return{type:"usersPage/TOGGLE_IS_FETCHING",isFetching:e}},b=function(e,t){return{type:"usersPage/TOGGLE_FOLLOWING_IN_PROGRESS",isFetching:e,userId:t}},v=function(e,t){return function(){var n=Object(o.a)(a.a.mark((function n(r){var o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(E(!0)),n.next=3,i.d.getUsers(e,t);case 3:o=n.sent,r(g(o.items)),r({type:"usersPage/SET_TOTAL_USERS_COUNT",totalCount:o.totalCount-6700}),r(E(!1));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},_=function(e,t){return function(){var n=Object(o.a)(a.a.mark((function n(r){var o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r({type:"usersPage/SET_CURRENT_PAGE",pageNumber:e}),r(E(!0)),n.next=4,i.d.getUsers(e,t);case 4:o=n.sent,r(g(o.items)),r(E(!1));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},O=function(){var e=Object(o.a)(a.a.mark((function e(t,n,r,o){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(b(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(o(n)),t(b(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),j=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(n,e,i.d.unfollow.bind(i.d),h);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(n,e,i.d.follow.bind(i.d),m);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(c.a)(Object(c.a)({},e),{},{users:s(e.users,t.userId,"id",{followed:!0})});case l:return Object(c.a)(Object(c.a)({},e),{},{users:s(e.users,t.userId,"id",{followed:!1})});case p:return Object(c.a)(Object(c.a)({},e),{},{users:t.users});case"usersPage/SET_CURRENT_PAGE":return Object(c.a)(Object(c.a)({},e),{},{currentPage:t.pageNumber});case"usersPage/SET_TOTAL_USERS_COUNT":return Object(c.a)(Object(c.a)({},e),{},{totalUsersCount:t.totalCount});case"usersPage/TOGGLE_IS_FETCHING":return Object(c.a)(Object(c.a)({},e),{},{isFetching:t.isFetching});case"usersPage/TOGGLE_FOLLOWING_IN_PROGRESS":return Object(c.a)(Object(c.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(u.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}}},88:function(e,t,n){e.exports=n.p+"static/media/flame.f0845b97.svg"},9:function(e,t,n){e.exports={navBar:"NavBar_navBar__15mQF",nav:"NavBar_nav__2aKNQ",item:"NavBar_item__2ZT00",active:"NavBar_active__1118_",person:"NavBar_person__3sC7-",friends:"NavBar_friends__3isoC"}},90:function(e,t,n){e.exports=n.p+"static/media/preloader.14707564.gif"},91:function(e,t,n){e.exports={preloader:"Preloader_preloader__1gsfs"}}},[[142,2,3]]]);
//# sourceMappingURL=main.a5560690.chunk.js.map