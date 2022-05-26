"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[205],{6886:(e,t,n)=>{n.d(t,{Cd:()=>v,X:()=>E,bZ:()=>p,zM:()=>g});var r=n(32090),a=n(9199),l=n(26450),c=n(67294),o=n(10894);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}var s=function(e){return c.createElement(o.JO,i({viewBox:"0 0 24 24"},e),c.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))},u=["status"],m={info:{icon:function(e){return c.createElement(o.JO,i({viewBox:"0 0 24 24"},e),c.createElement("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"}))},colorScheme:"blue"},warning:{icon:s,colorScheme:"orange"},success:{icon:function(e){return c.createElement(o.JO,i({viewBox:"0 0 24 24"},e),c.createElement("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"}))},colorScheme:"green"},error:{icon:s,colorScheme:"red"}},d=(0,l.kr)({name:"AlertContext",errorMessage:"useAlertContext: `context` is undefined. Seems you forgot to wrap alert components in `<Alert />`"}),f=d[0],h=d[1],p=(0,r.Gp)((function(e,t){var n,l=(0,r.Lr)(e),o=l.status,s=void 0===o?"info":o,d=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(l,u),h=null!=(n=e.colorScheme)?n:m[s].colorScheme,p=(0,r.jC)("Alert",i({},e,{colorScheme:h})),v=i({width:"100%",display:"flex",alignItems:"center",position:"relative",overflow:"hidden"},p.container);return c.createElement(f,{value:{status:s}},c.createElement(r.Fo,{value:p},c.createElement(r.m$.div,i({role:"alert",ref:t},d,{className:(0,a.cx)("chakra-alert",e.className),__css:v}))))})),v=(0,r.Gp)((function(e,t){var n=(0,r.yK)();return c.createElement(r.m$.div,i({ref:t},e,{className:(0,a.cx)("chakra-alert__title",e.className),__css:n.title}))})),E=(0,r.Gp)((function(e,t){var n=i({display:"inline"},(0,r.yK)().description);return c.createElement(r.m$.div,i({ref:t},e,{className:(0,a.cx)("chakra-alert__desc",e.className),__css:n}))})),g=function(e){var t=h().status,n=m[t].icon,l=(0,r.yK)();return c.createElement(r.m$.span,i({display:"inherit"},e,{className:(0,a.cx)("chakra-alert__icon",e.className),__css:l.icon}),c.createElement(n,{w:"100%",h:"100%"}))}},11391:(e,t,n)=>{n.d(t,{Ph:()=>v});var r=n(79762),a=n(32090),l=n(94244),c=n(9199),o=n(38554),i=n.n(o),s=n(67294);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var d=["children","placeholder","className"],f=["rootProps","placeholder","icon","color","height","h","minH","minHeight","iconColor","iconSize","isFullWidth"],h=["children"],p=(0,a.Gp)((function(e,t){var n=e.children,r=e.placeholder,l=e.className,o=m(e,d);return s.createElement(a.m$.select,u({},o,{ref:t,className:(0,c.cx)("chakra-select",l)}),r&&s.createElement("option",{value:""},r),n)}));c.Ts&&(p.displayName="SelectField");var v=(0,a.Gp)((function(e,t){var n=(0,a.jC)("Select",e),o=(0,a.Lr)(e),d=o.rootProps,h=o.placeholder,v=o.icon,E=o.color,g=o.height,_=o.h,b=o.minH,w=o.minHeight,x=o.iconColor,S=o.iconSize;o.isFullWidth;var I=m(o,f),N=(0,c.Vl)(I,l.oE),C=N[0],O=N[1],Z=(0,r.Yp)(O),k={width:"100%",height:"fit-content",position:"relative",color:E},P=i()({paddingEnd:"2rem"},n.field,{_focus:{zIndex:"unset"}});return s.createElement(a.m$.div,u({className:"chakra-select__wrapper",__css:k},C,d),s.createElement(p,u({ref:t,height:null!=_?_:g,minH:null!=b?b:w,placeholder:h},Z,{__css:P}),e.children),s.createElement(y,u({"data-disabled":(0,c.PB)(Z.disabled)},(x||E)&&{color:x||E},{__css:n.icon},S&&{fontSize:S}),v))}));c.Ts&&(v.displayName="Select");var E=function(e){return s.createElement("svg",u({viewBox:"0 0 24 24"},e),s.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}))},g=(0,a.m$)("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),y=function(e){var t=e.children,n=void 0===t?s.createElement(E,null):t,r=m(e,h),a=s.cloneElement(n,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return s.createElement(g,u({},r,{className:"chakra-select__icon-wrapper"}),s.isValidElement(n)?a:null)};c.Ts&&(y.displayName="SelectIcon")},25336:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(68527);const l=function(e){var t=e.children;return r.createElement(r.Fragment,null,r.createElement(a.kC,null,r.createElement(a.kC,null,t),r.createElement(a.kC,{color:"red.600",ms:2},"*")))}},38205:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var r=n(67294),a=n(96974),l=n(97375),c=n(68527),o=n(66371),i=n(6886),s=n(15193),u=n(79762),m=n(4612),d=n(11391),f=n(8016),h=n(94649),p=n(19501),v=n(10575),E=n(59572);function g(e,t,n,r,a,l,c){try{var o=e[l](c),i=o.value}catch(e){return void n(e)}o.done?t(i):Promise.resolve(i).then(r,a)}const y={updateTeacherData:function(){var e,t=(e=regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.Z.patch("teachers/".concat(t,"/"),{first_name:n.first_name,middle_name:n.middle_name,last_name:n.last_name,email:n.email_address,grade:n.grade,address:n.address,cell_number:n.cell_number});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var l=e.apply(t,n);function c(e){g(l,r,a,c,o,"next",e)}function o(e){g(l,r,a,c,o,"throw",e)}c(void 0)}))});return function(e,n){return t.apply(this,arguments)}}()};function _(e,t,n,r,a,l,c){try{var o=e[l](c),i=o.value}catch(e){return void n(e)}o.done?t(i):Promise.resolve(i).then(r,a)}const b={getUserData:function(){var e,t=(e=regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,E.Z)("users/".concat(t,"/")).then((function(e){return v.Z.setUser(e.data)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var l=e.apply(t,n);function c(e){_(l,r,a,c,o,"next",e)}function o(e){_(l,r,a,c,o,"throw",e)}c(void 0)}))});return function(e){return t.apply(this,arguments)}}()};var w=n(42858),x=n(25336);function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);c=!0);}catch(e){o=!0,a=e}finally{try{c||null==n.return||n.return()}finally{if(o)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function N(){var e=S((0,r.useState)(void 0),2),t=e[0],n=e[1],E=S((0,r.useState)(v.Z.getCurrentUser()),2),g=E[0],_=E[1],I=(0,l.qY)(),N=I.isOpen,C=I.onOpen,O=I.onClose,Z=(0,a.s0)(),k=r.useRef();(0,r.useEffect)((function(){w.Z.getClassList().then((function(e){n(e.data)})).catch((function(e){console.log(e)}))}),[]);var P={username:null==g?void 0:g.username,email:null==g?void 0:g.email},j=null==g?void 0:g.teacher_profile;if(null===j)return r.createElement(c.X6,null,"There is no associated teacher profile for this user");var A={first_name:j.first_name?j.first_name:"",middle_name:j.middle_name?j.middle_name:"",last_name:j.last_name?j.last_name:"",email_address:j.email?j.email:"",grade:j.grade?j.grade:"",address:j.address?j.address:"",cell_phone:j.cell_phone?j.cell_phone:""},F=p.Ry().shape({first_name:p.Z_().required("First Name is required"),last_name:p.Z_().required("Last Name is required"),grade:p.Z_().required("You must select a class"),email_address:p.Z_().email("Invalid Email").required("Email Address is required")});return r.createElement(r.Fragment,null,r.createElement(o.aR,{isOpen:N,leastDestructiveRef:k,onClose:O},r.createElement(o.dh,null,r.createElement(o._T,{bg:"blackAlpha.900"},r.createElement(o.iP,null,r.createElement(i.bZ,{variant:"top-accent",status:"success"},r.createElement(i.zM,null),r.createElement(c.xu,null,r.createElement(i.Cd,null,"Profile Update Successful"),r.createElement(i.X,null,"You have successfully updated your profile details")))),r.createElement(o.xo,null,r.createElement(c.Kq,{direction:"row",spacing:5},r.createElement(s.zx,{borderRadius:5,colorScheme:"telegram",style:{boxShadow:"none"},onClick:function(){return Z("/app/dashboard/class-list",{replace:!0})}},"Go to Class List"),r.createElement(s.zx,{borderRadius:5,colorScheme:"whatsapp",style:{boxShadow:"none"},ref:k,onClick:O},"OK")))))),r.createElement(c.kC,{align:"center",justify:"center"},r.createElement(c.xu,{w:["100%","90%","80%","70%","60%"],px:4,mb:20},r.createElement(c.X6,{py:5,fontSize:"2xl"},"Account Settings"),r.createElement("hr",null),r.createElement(c.xu,{mt:5},r.createElement(c.X6,{py:4,fontSize:"xl"},"User Information"),r.createElement(h.J9,{initialValues:P},(function(e){return e.errors,e.touched,e.isSubmitting,r.createElement(r.Fragment,null,r.createElement(h.l0,null,r.createElement(c.Kq,{direction:["column","column","row"],spacing:5},r.createElement(u.NI,null,r.createElement(u.lX,{htmlFor:"username"},"Username ",r.createElement(x.Z,null)),r.createElement(h.gN,{variant:"filled",as:m.II,id:"username",name:"username",type:"text"}),r.createElement(u.J1,{fontWeight:"bold"})),r.createElement(u.NI,null,r.createElement(u.lX,{htmlFor:"email"},"Email ",r.createElement(x.Z,null)),r.createElement(h.gN,{variant:"filled",as:m.II,id:"email",name:"email",type:"email"}),r.createElement(u.J1,{fontWeight:"bold"}))),r.createElement(c.kC,{mt:5,direction:"column"},r.createElement(c.xv,null,"Staff Member"),r.createElement(c.xv,{textAlign:"center",bg:"green.300",color:"green.800",pt:1,rounded:"xl",w:20},"Yes")),r.createElement(s.zx,{borderRadius:5,colorScheme:"telegram",style:{boxShadow:"none"},my:8,type:"submit"},"Save User Info Changes")))}))),r.createElement("hr",null),r.createElement(c.xu,{mt:10},r.createElement(c.X6,{py:5,mb:5,fontSize:"xl"},"Teacher Profile"),r.createElement(h.J9,{initialValues:A,validationSchema:F,onSubmit:function(e,t){var n=t.setSubmitting,r=t.setErrors;n(!0);var a=j.id;y.updateTeacherData(a,e).then((function(e){b.getUserData(g.id).then((function(e){_((function(e){return v.Z.getCurrentUser()})),C()})).catch((function(e){console.log(e)}))})).catch((function(e){var t;r(null===(t=e.response)||void 0===t?void 0:t.data)})).finally((function(){return n(!1)}))}},(function(e){var n=e.errors,a=e.touched,l=e.isSubmitting;return r.createElement(r.Fragment,null,r.createElement(h.l0,null,r.createElement(c.Kq,{direction:["column","column","row"],spacing:5},r.createElement(u.NI,{isInvalid:!!n.first_name&&a.first_name},r.createElement(u.lX,{htmlFor:"first_name"},r.createElement(x.Z,null,"First Name")),r.createElement(h.gN,{variant:"filled",as:m.II,id:"first_name",name:"first_name",type:"text"}),r.createElement(u.J1,{fontWeight:"bold"},n.first_name)),r.createElement(u.NI,{isInvalid:!!n.middle_name&&a.middle_name},r.createElement(u.lX,{htmlFor:"middle_name"},"Middle Name"),r.createElement(h.gN,{variant:"filled",as:m.II,id:"middle_name",name:"middle_name",type:"text"}),r.createElement(u.J1,{fontWeight:"bold"},n.middle_name))),r.createElement(c.Kq,{mt:5,direction:["column","column","row"],spacing:5},r.createElement(u.NI,{isInvalid:!!n.last_name&&a.last_name},r.createElement(u.lX,{htmlFor:"last_name"},r.createElement(x.Z,null,"Last Name")),r.createElement(h.gN,{variant:"filled",as:m.II,id:"last_name",name:"last_name",type:"text"}),r.createElement(u.J1,{fontWeight:"bold"},n.last_name)),r.createElement(u.NI,{isInvalid:!!n.email_address&&a.email_address},r.createElement(u.lX,{htmlFor:"email_address"},r.createElement(x.Z,null,"Email Address")),r.createElement(h.gN,{variant:"filled",as:m.II,id:"email_address",name:"email_address",type:"email"}),r.createElement(u.J1,{fontWeight:"bold"},n.email_address))),r.createElement(c.Kq,{mt:5,direction:["column","column","row"],spacing:5},r.createElement(u.NI,{isInvalid:!!n.grade&&a.grade},r.createElement(u.lX,{htmlFor:"grade"},r.createElement(x.Z,null,"Class")),r.createElement(h.gN,{variant:"filled",as:d.Ph,id:"grade",name:"grade"},r.createElement("option",{value:""},"---------"),null==t?void 0:t.map((function(e){return r.createElement("option",{key:e.id,value:e.id},"Grade ",e.grade)}))),r.createElement(u.J1,{fontWeight:"bold"},n.grade)),r.createElement(u.NI,{isInvalid:!!n.address&&a.address},r.createElement(u.lX,{htmlFor:"address"},"Address"),r.createElement(h.gN,{variant:"filled",as:m.II,id:"address",name:"address",type:"text"}),r.createElement(u.J1,{fontWeight:"bold"},n.address))),r.createElement(c.Kq,{mt:5,direction:["column","column","row"],spacing:5},r.createElement(u.NI,{w:["100%","100%","50%"],isInvalid:!!n.cell_phone&&a.cell_phone},r.createElement(u.lX,null,"Cell Phone"),r.createElement(h.gN,{variant:"filled",as:m.II,id:"cell_phone",name:"cell_phone",type:"text"}),r.createElement(u.J1,{fontWeight:"bold"},n.cell_phone))),r.createElement(s.zx,{borderRadius:5,colorScheme:"telegram",style:{boxShadow:"none"},disabled:l,type:"submit",mt:8},l&&r.createElement(f.$,{color:"white",mr:2})," Save Teacher Profile Changes")))}))))))}},59572:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(67294),a=n(9669),l=n.n(a),c=n(96974),o=n(10575);function i(){var e=o.Z.getAccessToken();return e?{Authorization:"Bearer ".concat(e)}:{}}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=l().create({baseURL:"https://classhub.onrender.com/api/v1/",headers:{"Content-Type":"application/json"},withCredentials:!0});d.interceptors.request.use((function(e){return e.headers=u(u({},e.headers),i()),e}),(function(e){return Promise.reject(e)})),d.interceptors.response.use((function(e){return e}),(function(e){var t=e.config;return e.response&&(401!==e.response.status||t._retry||(t._retry=!0,o.Z.refreshToken().then((function(e){return o.Z.setAccessToken(e.data.access),d.defaults.headers.common=u(u({},d.defaults.headers.common),i()),window.location.reload(),d(t)})).catch((function(e){var t;return e.response&&null!==(t=e.response)&&void 0!==t&&t.data?(o.Z.logout(),r.createElement(c.Fg,{to:"/app/login",replace:!0})):Promise.reject(e)})))),Promise.reject(e)}));const f=d},42858:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(59572);function a(e,t,n,r,a,l,c){try{var o=e[l](c),i=o.value}catch(e){return void n(e)}o.done?t(i):Promise.resolve(i).then(r,a)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(r,l){var c=e.apply(t,n);function o(e){a(c,r,l,o,i,"next",e)}function i(e){a(c,r,l,o,i,"throw",e)}o(void 0)}))}}const c={getClassList:function(){var e=l(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.Z.get("classes/");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getClassData:function(){var e=l(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.Z.get("classes/".concat(t,"/"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getGradeAttendaces:function(){var e=l(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.Z.get("classes/attendances/".concat(t,"/"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}}]);