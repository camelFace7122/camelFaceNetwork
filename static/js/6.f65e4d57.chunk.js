(this["webpackJsonpsamurai-path"]=this["webpackJsonpsamurai-path"]||[]).push([[6],{244:function(e,n,t){e.exports={portrait:"Users_portrait__neTBz",usersContainer:"Users_usersContainer__Y-Yxf",userBlock:"Users_userBlock__VRcNN",userInfo:"Users_userInfo__oylr7",about:"Users_about__2Ydb3"}},245:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(65);function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,a=void 0;try{for(var l,s=e[Symbol.iterator]();!(r=(l=s.next()).done)&&(t.push(l.value),!n||t.length!==n);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==s.return||s.return()}finally{if(o)throw a}}return t}}(e,n)||Object(r.a)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},302:function(e,n,t){e.exports={selectedPage:"Paginator_selectedPage__3Vc08",pageNumber:"Paginator_pageNumber__3y0fi",numbers:"Paginator_numbers__3LyX0"}},307:function(e,n,t){"use strict";t.r(n);var r=t(25),o=t(26),a=t(28),l=t(27),s=t(0),u=t.n(s),i=t(20),c=t(244),f=t.n(c),g=t(86),p=t(63),m=t.n(p),d=t(40),h=t(245),b=t(302),v=t.n(b),P=t(39),w=t.n(P),y=function(e){for(var n=e.portionSize,t=void 0===n?10:n,r=e.currentPage,o=e.totalUsersCount,a=e.pageSize,l=e.onPageChanged,i=Math.ceil(o/a),c=[],f=1;f<=i;f++)c.push(f);var g=Math.ceil(i/t),p=Object(s.useState)(1),m=Object(h.a)(p,2),b=m[0],P=m[1],y=(b-1)*t+1,E=b*t;return u.a.createElement("div",{className:v.a.numbers},u.a.createElement("button",{disabled:1===b,onClick:function(){b>1&&P(b-1)}},"Prev"),c.filter((function(e){return e>=y&&e<=E})).map((function(e){return u.a.createElement("span",{key:e,className:w()(v.a.pageNumber,Object(d.a)({},v.a.selectedPage,r===e)),onClick:function(n){return l(e)}},e)})),u.a.createElement("button",{disabled:b===g,onClick:function(){b<g&&P(b+1)}},"Next"))},E=t(17),C=function(e){var n=e.user,t=e.followingInProgress,r=e.unfollow,o=e.follow;return u.a.createElement("div",{key:n.id,className:f.a.userBlock},u.a.createElement("div",{className:f.a.portrait},u.a.createElement("div",null,u.a.createElement(E.b,{to:"/profile/".concat(n.id)},u.a.createElement("img",{src:n.photos.small?n.photos.small:m.a,alt:"dsd"}))),u.a.createElement("div",null,n.followed?u.a.createElement("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){return r(n.id)}},"Unfollow"):u.a.createElement("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){return o(n.id)}},"Follow"))),u.a.createElement("div",{className:f.a.userInfo},u.a.createElement("div",{className:f.a.about},u.a.createElement("div",null,n.name),u.a.createElement("p",null,n.status)),u.a.createElement("div",{className:f.a.about},u.a.createElement("div",null),u.a.createElement("div",null))))},_=function(e){return u.a.createElement("div",null,u.a.createElement("h2",null,"Users"),u.a.createElement(y,{currentPage:e.currentPage,totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,onPageChanged:e.onPageChanged}),e.users.map((function(n){return u.a.createElement(C,{key:n.id,user:n,followingInProgress:e.followingInProgress,unfollow:e.unfollow,follow:e.follow})})))},k=t(52),S=t(19);function U(e,n){return e===n}function I(e,n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,o=0;o<r;o++)if(!e(n[o],t[o]))return!1;return!0}function N(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t+"]")}return n}!function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r]}((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:U,t=null,r=null;return function(){return I(n,t,arguments)||(r=e.apply(null,arguments)),t=arguments,r}}));var j=function(e){return e.usersPage.users},z=function(e){return e.usersPage.totalUsersCount},O=function(e){return e.usersPage.pageSize},x=function(e){return e.usersPage.currentPage},A=function(e){return e.usersPage.isFetching},F=function(e){return e.usersPage.followingInProgress},T=function(e){Object(a.a)(t,e);var n=Object(l.a)(t);function t(){var e;Object(r.a)(this,t);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(e=n.call.apply(n,[this].concat(a))).onPageChanged=function(n){var t=e.props.pageSize;e.props.changePage(n,t)},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,n=e.currentPage,t=e.pageSize;this.props.requestUsers(n,t)}},{key:"render",value:function(){return u.a.createElement("div",{className:f.a.usersContainer},this.props.isFetching?u.a.createElement(k.a,null):null,u.a.createElement(_,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,toggleFollowingInProgress:this.props.toggleFollowingInProgress,followingInProgress:this.props.followingInProgress,followThunkCreator:this.props.followThunkCreator,unfollowThunkCreator:this.props.unfollowThunkCreator}))}}]),t}(u.a.Component);n.default=Object(S.d)(Object(i.b)((function(e){return{users:j(e),totalUsersCount:z(e),pageSize:O(e),currentPage:x(e),isFetching:A(e),followingInProgress:F(e)}}),{requestUsers:g.d,changePage:g.a,follow:g.c,unfollow:g.e}))(T)}}]);
//# sourceMappingURL=6.f65e4d57.chunk.js.map