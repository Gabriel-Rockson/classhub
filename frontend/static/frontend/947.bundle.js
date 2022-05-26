"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[947],{4612:(e,t,n)=>{n.d(t,{BZ:()=>y,II:()=>d,Z8:()=>w});var a=n(79762),r=n(32090),l=n(9199),i=n(67294),o=n(26450);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}var m=["htmlSize"],d=(0,r.Gp)((function(e,t){var n=e.htmlSize,o=c(e,m),d=(0,r.jC)("Input",o),u=(0,r.Lr)(o),p=(0,a.Yp)(u),f=(0,l.cx)("chakra-input",e.className);return i.createElement(r.m$.input,s({size:n},p,{__css:d.field,ref:t,className:f}))}));l.Ts&&(d.displayName="Input"),d.id="Input";var u=["placement"],p={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},f=(0,r.m$)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),h=(0,r.Gp)((function(e,t){var n,a=e.placement,l=void 0===a?"left":a,o=c(e,u),m=null!=(n=p[l])?n:{},d=(0,r.yK)();return i.createElement(f,s({ref:t},o,{__css:s({},d.addon,m)}))}));l.Ts&&(h.displayName="InputAddon");var E=(0,r.Gp)((function(e,t){return i.createElement(h,s({ref:t,placement:"left"},e,{className:(0,l.cx)("chakra-input__left-addon",e.className)}))}));l.Ts&&(E.displayName="InputLeftAddon"),E.id="InputLeftAddon";var v=(0,r.Gp)((function(e,t){return i.createElement(h,s({ref:t,placement:"right"},e,{className:(0,l.cx)("chakra-input__right-addon",e.className)}))}));l.Ts&&(v.displayName="InputRightAddon"),v.id="InputRightAddon";var g=["children","className"],y=(0,r.Gp)((function(e,t){var n=(0,r.jC)("Input",e),a=(0,r.Lr)(e),m=a.children,d=a.className,u=c(a,g),p=(0,l.cx)("chakra-input__group",d),f={},h=(0,o.WR)(m),E=n.field;h.forEach((function(e){var t,a;n&&(E&&"InputLeftElement"===e.type.id&&(f.paddingStart=null!=(t=E.height)?t:E.h),E&&"InputRightElement"===e.type.id&&(f.paddingEnd=null!=(a=E.height)?a:E.h),"InputRightAddon"===e.type.id&&(f.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(f.borderStartRadius=0))}));var v=h.map((function(t){var n,a,r=(0,l.YU)({size:(null==(n=t.props)?void 0:n.size)||e.size,variant:(null==(a=t.props)?void 0:a.variant)||e.variant});return"Input"!==t.type.id?i.cloneElement(t,r):i.cloneElement(t,Object.assign(r,f,t.props))}));return i.createElement(r.m$.div,s({className:p,ref:t,__css:{width:"100%",display:"flex",position:"relative"}},u),i.createElement(r.Fo,{value:n},v))}));l.Ts&&(y.displayName="InputGroup");var b=["placement"],I=["className"],N=["className"],S=(0,r.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),x=(0,r.Gp)((function(e,t){var n,a,l,o=e.placement,m=void 0===o?"left":o,d=c(e,b),u=(0,r.yK)(),p=u.field,f=s(((l={})["left"===m?"insetStart":"insetEnd"]="0",l.width=null!=(n=null==p?void 0:p.height)?n:null==p?void 0:p.h,l.height=null!=(a=null==p?void 0:p.height)?a:null==p?void 0:p.h,l.fontSize=null==p?void 0:p.fontSize,l),u.element);return i.createElement(S,s({ref:t,__css:f},d))}));x.id="InputElement",l.Ts&&(x.displayName="InputElement");var w=(0,r.Gp)((function(e,t){var n=e.className,a=c(e,I),r=(0,l.cx)("chakra-input__left-element",n);return i.createElement(x,s({ref:t,placement:"left",className:r},a))}));w.id="InputLeftElement",l.Ts&&(w.displayName="InputLeftElement");var _=(0,r.Gp)((function(e,t){var n=e.className,a=c(e,N),r=(0,l.cx)("chakra-input__right-element",n);return i.createElement(x,s({ref:t,placement:"right",className:r},a))}));_.id="InputRightElement",l.Ts&&(_.displayName="InputRightElement")},27947:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var a=n(67294),r=n(96974),l=n(39711),i=n(68527),o=n(79762),s=n(4612),c=n(15193),m=n(8016),d=n(94649),u=n(19501),p=n(10575),f=n(36938),h=n(25336);function E(){var e=(0,r.s0)(),t=u.Ry().shape({username:u.Z_().required("Username field is required"),email:u.Z_().email("Email must be a valid email").required("Email field is required"),password:u.Z_().required("Password field is required").min(8,"A min of 8 characters required")});return a.createElement(a.Fragment,null,a.createElement(i.kC,{direction:"column",bg:"whitesmoke",align:"center",justify:"center",h:"100vh",py:2},a.createElement(f.Z,null),a.createElement(i.xu,{w:["80%",96],px:5,py:4},a.createElement(i.X6,{py:[2],fontSize:["xl"],textAlign:"center"},"Let's Help You Manage Keep Track of Your Students' Data."),a.createElement(i.X6,{py:[2,4],fontWeight:"500",fontSize:["lg"],textAlign:"center"},"Create New Account"),a.createElement(d.J9,{initialValues:{username:"",email:"",password:""},validationSchema:t,onSubmit:function(t,n){var a=n.setSubmitting,r=n.setErrors;a(!0),p.Z.register(t.username,t.email,t.password).then((function(t){e("/app/dashboard/profile",{replace:!0})})).catch((function(e){var t;r(null===(t=e.response)||void 0===t?void 0:t.data)})).finally((function(){return a(!1)}))}},(function(e){var t=e.handleSubmit,n=e.errors,r=e.touched,l=e.isSubmitting;return a.createElement("form",{onSubmit:t},a.createElement(i.gC,{spacing:6},a.createElement(o.NI,{isInvalid:!!n.detail},a.createElement(o.J1,{fontWeight:"bold"},n.detail)),a.createElement(o.NI,{colorScheme:"messenger",isInvalid:!!n.username&&r.username},a.createElement(o.lX,null,a.createElement(h.Z,null,"Username")),a.createElement(d.gN,{as:s.II,type:"text",id:"username",name:"username",variant:"filled",borderColor:"gray.200",_hover:{borderColor:"facebook.600"}}),a.createElement(o.J1,{fontWeight:"bold"},n.username)),a.createElement(o.NI,{colorScheme:"messenger",isInvalid:!!n.email&&r.email},a.createElement(o.lX,null,a.createElement(h.Z,null,"Email")),a.createElement(d.gN,{as:s.II,type:"email",id:"email",name:"email",variant:"filled",borderColor:"gray.200",_hover:{borderColor:"facebook.600"}}),a.createElement(o.J1,{fontWeight:"bold"},n.email)),a.createElement(o.NI,{colorScheme:"messenger",isInvalid:!!n.password&&r.password},a.createElement(o.lX,null,a.createElement(h.Z,null,"Password")),a.createElement(d.gN,{as:s.II,type:"password",id:"password",name:"password",variant:"filled",borderColor:"gray.200",_hover:{borderColor:"facebook.600"}}),a.createElement(o.J1,{fontWeight:"bold"},n.password))),a.createElement(c.zx,{borderRadius:5,colorScheme:"telegram",style:{boxShadow:"none"},disabled:l,mt:8,type:"submit",w:"full"},l&&a.createElement(m.$,{color:"white",mr:2})," Register"))})),a.createElement(i.xu,{mt:2},a.createElement(i.rU,{as:l.rU,to:"/app/login",color:"telegram.700",style:{boxShadow:"none"}},"Already having an account? login")))))}},25336:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(68527);const l=function(e){var t=e.children;return a.createElement(a.Fragment,null,a.createElement(r.kC,null,a.createElement(r.kC,null,t),a.createElement(r.kC,{color:"red.600",ms:2},"*")))}},36938:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(68527),l=n(71714);const i=function(){return a.createElement(a.Fragment,null,a.createElement(r.kC,{justify:"center",py:2,w:"100%"},a.createElement(l.Z,null)))}},71714:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(39711),l=n(68527);const i=function(){return a.createElement(a.Fragment,null,a.createElement(l.rU,{as:r.rU,to:"/",fontSize:"2xl",style:{textDecoration:"none",boxShadow:"none"}},a.createElement(l.xv,{as:"span",color:"blackAlpha.800",fontFamily:"cursive",fontWeight:"600"},"class"),a.createElement(l.xv,{as:"span",color:"red.600",fontWeight:"bold"},"Hub")))}}}]);