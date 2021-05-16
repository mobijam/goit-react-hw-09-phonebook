(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[2],{10:function(e,t,r){"use strict";r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return E})),r.d(t,"c",(function(){return w}));var n=r(3),c={registerRequest:Object(n.b)("auth/registerRequest"),registerSuccess:Object(n.b)("auth/registerSuccess"),registerError:Object(n.b)("auth/registerError"),loginRequest:Object(n.b)("auth/loginRequest"),loginSuccess:Object(n.b)("auth/loginSuccess"),loginError:Object(n.b)("auth/loginError"),logoutRequest:Object(n.b)("auth/logoutRequest"),logoutSuccess:Object(n.b)("auth/logoutSuccess"),logoutError:Object(n.b)("auth/logoutError"),getCurrentUserRequest:Object(n.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(n.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(n.b)("auth/getCurrentUserError")},a=r(17),o=r.n(a),s=r(28),u=r(19),i=r.n(u),b=r(24);i.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var l,j,d,O,f=function(e){i.a.defaults.headers.common.Authorization="Bearer ".concat(e)},h=function(){i.a.defaults.headers.common.Authorization=""},g={register:function(e){return function(){var t=Object(s.a)(o.a.mark((function t(r){var n,a,s,u,l,j,d,O;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(c.registerRequest()),t.prev=1,t.next=4,i.a.post("/users/signup",e);case 4:n=t.sent,a=n.data,f(a.token),r(c.registerSuccess(a)),t.next=17;break;case 10:return t.prev=10,t.t0=t.catch(1),s=t.t0.response,u=s.statusText,l=s.status,j=s.data,d=j.message?j.message:"User with this email is already registered",O="".concat(l," ").concat(u,": ").concat(d),r(c.registerError(t.t0.message)),t.abrupt("return",b.b.error(O));case 17:case 18:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},login:function(e){return function(){var t=Object(s.a)(o.a.mark((function t(r){var n,a,s,u,l,j;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(c.loginRequest()),t.prev=1,t.next=4,i.a.post("/users/login",e);case 4:n=t.sent,a=n.data,f(a.token),r(c.loginSuccess(a)),t.next=16;break;case 10:return t.prev=10,t.t0=t.catch(1),s=t.t0.response,u=s.statusText,l=s.status,j="".concat(l," ").concat(u),r(c.loginError(t.t0.message)),t.abrupt("return",b.b.error(j));case 16:case 17:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},logout:function(){return function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(c.logoutRequest()),e.prev=1,e.next=4,i.a.post("/users/logout");case 4:h(),t(c.logoutSuccess()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(c.logoutError(e.t0.message));case 11:case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var e=Object(s.a)(o.a.mark((function e(t,r){var n,a,s,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r(),a=n.auth.token){e.next=3;break}return e.abrupt("return");case 3:return f(a),t(c.getCurrentUserRequest()),e.prev=5,e.next=8,i.a.get("/users/current");case 8:s=e.sent,u=s.data,t(c.getCurrentUserSuccess(u)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(5),t(c.getCurrentUserError(e.t0.message));case 16:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t,r){return e.apply(this,arguments)}}()}},p=r(2),v=r(7),x={name:null,email:null},m=function(e,t){return t.payload.user},_=function(e,t){return t.payload.token},C=function(e,t){return t.payload},k=Object(n.c)(x,(l={},Object(p.a)(l,c.registerSuccess,m),Object(p.a)(l,c.loginSuccess,m),Object(p.a)(l,c.logoutSuccess,(function(){return x})),Object(p.a)(l,c.getCurrentUserSuccess,(function(e,t){return t.payload})),l)),S=Object(n.c)(null,(j={},Object(p.a)(j,c.registerSuccess,_),Object(p.a)(j,c.loginSuccess,_),Object(p.a)(j,c.logoutSuccess,(function(){return null})),j)),y=Object(n.c)(null,(d={},Object(p.a)(d,c.registerError,C),Object(p.a)(d,c.loginError,C),Object(p.a)(d,c.logoutError,C),Object(p.a)(d,c.getCurrentUserError,C),d)),N=Object(n.c)(!1,(O={},Object(p.a)(O,c.registerSuccess,(function(){return!0})),Object(p.a)(O,c.loginSuccess,(function(){return!0})),Object(p.a)(O,c.getCurrentUserSuccess,(function(){return!0})),Object(p.a)(O,c.registerError,(function(){return!1})),Object(p.a)(O,c.loginError,(function(){return!1})),Object(p.a)(O,c.getCurrentUserError,(function(){return!1})),Object(p.a)(O,c.logoutSuccess,(function(){return!1})),O)),E=Object(v.c)({user:k,token:S,isAuthenticated:N,error:y}),w={getIsAuthenticated:function(e){return e.auth.isAuthenticated},getUserName:function(e){return e.auth.user.name},getError:function(e){return e.auth.error},getToken:function(e){return!!e.auth.token}}},35:function(e,t,r){e.exports={loader:"Loader_loader__3gX8-",preloader:"Loader_preloader__32POT",preloader__image:"Loader_preloader__image__3pox6","preloader-rotate":"Loader_preloader-rotate__2CiCd"}},36:function(e,t,r){e.exports={colors:"'../../styles/variables/colors.css'",mainColor:"#fff",mainContainer:"Container_mainContainer__3sGYU",section:"Container_section__Jg7pJ",container:"Container_container__3xlzC",titleWrapper:"Container_titleWrapper__2MvFp",mainTitle:"Container_mainTitle__16boN",childContainer:"Container_childContainer__f8ZYn",appear:"Container_appear__3Uv-2",appearActive:"Container_appearActive__36NLl"}},5:function(e,t,r){"use strict";r.d(t,"m",(function(){return c})),r.d(t,"n",(function(){return a})),r.d(t,"l",(function(){return o})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return u})),r.d(t,"a",(function(){return i})),r.d(t,"g",(function(){return b})),r.d(t,"h",(function(){return l})),r.d(t,"f",(function(){return j})),r.d(t,"j",(function(){return d})),r.d(t,"k",(function(){return O})),r.d(t,"i",(function(){return f})),r.d(t,"d",(function(){return h})),r.d(t,"e",(function(){return g}));var n=r(3),c=Object(n.b)("contacts/fetchContactRequest"),a=Object(n.b)("contacts/fetchContactSuccess"),o=Object(n.b)("contacts/fetchContactError"),s=Object(n.b)("contacts/addContactRequest"),u=Object(n.b)("contacts/addContactSuccess"),i=Object(n.b)("contacts/addContactError"),b=Object(n.b)("contacts/deleteContactRequest"),l=Object(n.b)("contacts/deleteContactSuccess"),j=Object(n.b)("contacts/deleteContactError"),d=Object(n.b)("contacts/editContactRequest"),O=Object(n.b)("contacts/editContactSuccess"),f=Object(n.b)("contacts/editContactError"),h=Object(n.b)("contacts/ChangeFilter"),g=Object(n.b)("contacts/ChangeSorting")},52:function(e,t,r){e.exports={title:"HomeView_title__rufdD"}},8:function(e,t,r){e.exports={colors:"'../../styles/variables/colors.css'",bgColor:"#370617",accentColor:"#34a0a4",activeBtnColor:"#B4B8C5",header:"Navigation_header__3dHWF",link:"Navigation_link__39YzV",activeLink:"Navigation_activeLink__RjjnY",userMenu:"Navigation_userMenu__26ehC",headerBtn:"Navigation_headerBtn__3qtkI",avatar:"Navigation_avatar__1shyD"}},86:function(e,t,r){"use strict";r.r(t);r(0);var n=r(52),c=r.n(n),a=r(1);t.default=function(){return Object(a.jsx)("h1",{className:c.a.title,children:"Welcome to Phonebook!"})}},88:function(e,t,r){},89:function(e,t,r){"use strict";r.r(t);var n,c,a,o=r(0),s=r.n(o),u=r(22),i=r.n(u),b=r(16),l=r(9),j=r(50),d=r(27),O=r(3),f=r(18),h=r(51),g=r.n(h),p=(r(63),r(2)),v=r(7),x=r(5),m=Object(O.c)([],(n={},Object(p.a)(n,x.n,(function(e,t){return t.payload})),Object(p.a)(n,x.c,(function(e,t){var r=t.payload;return[].concat(Object(d.a)(e),[r])})),Object(p.a)(n,x.h,(function(e,t){var r=t.payload;return e.filter((function(e){return e.id!==r}))})),Object(p.a)(n,x.k,(function(e,t){var r=t.payload;return[].concat(Object(d.a)(e),[r])})),n)),_=Object(O.c)("",Object(p.a)({},x.d,(function(e,t){return t.payload}))),C=Object(O.c)("date",Object(p.a)({},x.e,(function(e,t){return t.payload}))),k=Object(O.c)(!1,(c={},Object(p.a)(c,x.m,(function(){return!0})),Object(p.a)(c,x.n,(function(){return!1})),Object(p.a)(c,x.l,(function(){return!1})),Object(p.a)(c,x.b,(function(){return!0})),Object(p.a)(c,x.c,(function(){return!1})),Object(p.a)(c,x.a,(function(){return!1})),Object(p.a)(c,x.g,(function(){return!0})),Object(p.a)(c,x.h,(function(){return!1})),Object(p.a)(c,x.f,(function(){return!1})),Object(p.a)(c,x.j,(function(){return!0})),Object(p.a)(c,x.k,(function(){return!1})),Object(p.a)(c,x.i,(function(){return!1})),c)),S=Object(O.c)(null,(a={},Object(p.a)(a,x.l,(function(e,t){return t.payload})),Object(p.a)(a,x.a,(function(e,t){return t.payload})),Object(p.a)(a,x.f,(function(e,t){return t.payload})),Object(p.a)(a,x.i,(function(e,t){return t.payload})),a)),y=Object(v.c)({items:m,filter:_,sorter:C,loading:k,error:S}),N=r(10),E=Object(d.a)(Object(O.d)({serializableCheck:{ignoredActions:[f.a,f.f,f.b,f.c,f.d,f.e]}})),w={key:"auth",storage:g.a,whitelist:["token"]},U=Object(O.a)({reducer:{auth:Object(f.g)(w,N.b),contacts:y},middleware:E,devTools:!1}),R={store:U,persistor:Object(f.h)(U)},q=r(24),z="/",T="/register",L="/login",A="/contacts",B=r(8),M=r.n(B),I=r(1);function W(){var e=Object(l.d)(N.c.getIsAuthenticated);return Object(I.jsxs)("nav",{children:[Object(I.jsx)(b.b,{to:z,exact:!0,className:M.a.link,activeClassName:M.a.activeLink,children:"Homepage"}),e&&Object(I.jsx)(b.b,{to:A,exact:!0,className:M.a.link,activeClassName:M.a.activeLink,children:"Contacts"})]})}var F=function(){return Object(I.jsxs)("div",{children:[Object(I.jsx)(b.b,{to:T,exact:!0,className:M.a.link,activeClassName:M.a.activeLink,children:"Registration"}),Object(I.jsx)(b.b,{to:L,exact:!0,className:M.a.link,activeClassName:M.a.activeLink,children:"Login"})]})},J=r.p+"static/media/default-avatar.1f3ac9bc.png";function P(){var e=J,t=Object(l.c)(),r=Object(l.d)(N.c.getUserName),n=Object(o.useCallback)((function(){t(N.a.logout())}),[t]);return Object(I.jsxs)("div",{className:M.a.userMenu,children:[Object(I.jsx)("img",{className:M.a.avatar,src:e,alt:r}),Object(I.jsxs)("span",{className:M.a.link,children:["Welcome, ",r]}),Object(I.jsx)("button",{className:M.a.headerBtn,type:"button",onClick:n,children:"Logout"})]})}function Y(){var e=Object(l.d)(N.c.getIsAuthenticated);return Object(I.jsxs)("header",{className:M.a.header,children:[Object(I.jsx)(W,{}),e?Object(I.jsx)(P,{}):Object(I.jsx)(F,{})]})}var H=r(6),D=r(23),V=r(29);function G(e){var t=e.children,r=e.redirectTo,n=Object(V.a)(e,["children","redirectTo"]),c=Object(l.d)(N.c.getIsAuthenticated),a=Object(l.d)(N.c.getToken);return Object(I.jsx)(H.b,Object(D.a)(Object(D.a)({},n),{},{children:c||a?t:Object(I.jsx)(H.a,{to:r})}))}function X(e){var t=e.children,r=e.redirectTo,n=Object(V.a)(e,["children","redirectTo"]),c=Object(l.d)(N.c.getIsAuthenticated);return Object(I.jsx)(H.b,Object(D.a)(Object(D.a)({},n),{},{children:c&&n.restricted?Object(I.jsx)(H.a,{to:r}):t}))}var Z=r(35),K=r.n(Z),Q=function(){return Object(I.jsx)("div",{className:K.a.preloader,children:Object(I.jsx)("svg",{className:K.a.preloader__image,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(I.jsx)("path",{fill:"currentColor",d:"M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"})})})},$=Object(o.lazy)((function(){return Promise.resolve().then(r.bind(null,86))})),ee=Object(o.lazy)((function(){return r.e(3).then(r.bind(null,155))})),te=Object(o.lazy)((function(){return r.e(1).then(r.bind(null,156))})),re=Object(o.lazy)((function(){return Promise.all([r.e(6),r.e(0)]).then(r.bind(null,157))})),ne=function(){return Object(I.jsx)(o.Suspense,{fallback:Object(I.jsx)(Q,{}),children:Object(I.jsxs)(H.d,{children:[Object(I.jsx)(X,{path:z,exact:!0,children:Object(I.jsx)($,{})}),Object(I.jsx)(X,{path:T,restricted:!0,redirectTo:A,children:Object(I.jsx)(ee,{})}),Object(I.jsx)(X,{path:L,restricted:!0,redirectTo:A,children:Object(I.jsx)(te,{})}),Object(I.jsx)(G,{path:A,redirectTo:L,children:Object(I.jsx)(re,{})})]})})},ce=r(36),ae=r.n(ce);function oe(e){var t=e.children;return Object(I.jsx)("section",{className:ae.a.section,children:Object(I.jsx)("div",{className:ae.a.mainContainer,children:t})})}r(85);function se(){var e=Object(l.c)();return Object(o.useEffect)((function(){e(N.a.getCurrentUser())}),[e]),Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(Y,{}),Object(I.jsxs)(oe,{children:[Object(I.jsx)(ne,{}),Object(I.jsx)(q.a,{autoClose:3e3})]})]})}r(86),r(87),r(88);i.a.render(Object(I.jsxs)(s.a.StrictMode,{children:[Object(I.jsx)(l.a,{store:R.store,children:Object(I.jsx)(j.a,{loading:null,persistor:R.persistor,children:Object(I.jsx)(b.a,{children:Object(I.jsx)(se,{})})})}),","]}),document.getElementById("root"))}},[[89,4,5]]]);
//# sourceMappingURL=main.246eaea6.chunk.js.map