_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{SGa5:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return P}));var a=n("q1tI"),o=n.n(a),r=n("L4PR"),i=n("30+C"),c=n("oa/T"),l=n("ofer"),s=n("r9w1"),u=n("wx14"),d=n("Ff2n"),g=(n("17x9"),n("iuhU")),p=n("H2TA"),f=a.forwardRef((function(e,t){var n=e.disableSpacing,o=void 0!==n&&n,r=e.classes,i=e.className,c=Object(d.a)(e,["disableSpacing","classes","className"]);return a.createElement("div",Object(u.a)({className:Object(g.a)(r.root,i,!o&&r.spacing),ref:t},c))})),m=Object(p.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(f),y=n("Z3vd"),h=n("o0o1"),b=n.n(h);function v(e,t,n,a,o,r,i){try{var c=e[r](i),l=c.value}catch(s){return void n(s)}c.done?t(l):Promise.resolve(l).then(a,o)}var w=n("KQm4"),j=n("kfFl"),N=n("yv+Y"),S=n("EQI2"),x=n("++HY"),O=n("+JwS"),C=["I'm here to create a new account","I want to create a text to secure my information","We are using new technology to add more security"],T={domain:"http//localhost:",port:"8080",path:"/check_pattern"},k=o.a.createElement;function E(e){var t=e.open,n=e.handleDialogClose,r=e.styles,i=Object(a.useState)(0),c=i[0],u=i[1],d=Object(a.useState)(!0),g=d[0],p=d[1],f=Object(a.useState)([]),m=f[0],h=f[1],E=Object(a.useState)(""),_=E[0],A=E[1],I=C,W=T,F=(W.domain,W.port,W.path,Object(a.useRef)()),P=function(){setTimeout((function(){n(),h(""),p(!0),u(0)}),200)},z=function(){var e,t=(e=b.a.mark((function e(){var t,n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F.current.stop(),e.next=3,F.current.getTypingPattern({type:1,text:_.join("")});case 3:return t=e.sent,console.log(t),e.next=7,fetch("/sighup/typingdna",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 7:return n=e.sent,console.log(n),e.next=11,n.json();case 11:a=e.sent,console.log(a);case 13:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(a,o){var r=e.apply(t,n);function i(e){v(r,a,o,i,c,"next",e)}function c(e){v(r,a,o,i,c,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){F.current||(F.current=new TypingDNA)}),[F]),k("div",null,k(j.a,{open:t,onClose:P,"aria-labelledby":"form-dialog-title"},k(N.a,{id:"form-dialog-title"},k("img",{width:"200",src:"https://github.com/Archivaldi/4wheelz/blob/userAuthFE/client/src/images/ShoppedTypingDNA.png?raw=true"})),k(S.a,{className:r},k(x.a,null,"To ensure the highest level of security, we are using a technology that will test who you are by the way you type!"),k(l.a,{variant:"body1",component:"body1"},c<I.length?k(o.a.Fragment,null,k("span",null,"Please type: ",I[c]),k(s.a,{autoFocus:!0,autoComplete:"off",margin:"dense",id:"name",label:"Type Message Here",type:"email",color:"secondary",value:m,disabled:!g,onChange:function(e){return t=e.target.value,h(t),void(t===I[c]&&p(!1));var t},fullWidth:!0})):k("span",null,"Thank you for participating!"))),k(O.a,null,k(y.a,{onClick:P,color:"secondary"},"Go Back"),c<I.length?k(y.a,{onClick:function(){u(c+1),p(!0),A([].concat(Object(w.a)(_),Object(w.a)(m))),h("")},color:"secondary",disabled:g},"Next"):k(y.a,{onClick:z,color:"secondary"},"Submit"))))}var _=o.a.createElement;function A(e){var t=(0,e.useStyles)(),n=t.root,r=t.dialog,u=t.brand,d=t.auto,g=t.arbiTrader,p=t.buttons,f=t.logo,h=Object(a.useState)(null),b=h[0],v=h[1],w=Object(a.useState)(!1),j=w[0],N=w[1],S=function(e){v(e)};return Object(a.useEffect)((function(){"seller"===b&&N(!0)}),[b]),_(i.a,{className:n},_(E,{styles:r,open:j,handleDialogClose:function(){N(!1),v(null)}}),_(c.a,null,_("div",{className:u},_("img",{src:"https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/AutoArbiTraderLogo.png?raw=true",alt:"logo",className:f}),_(l.a,{variant:"h5",noWrap:!0},_("span",{className:d},"auto")," ",_("span",{className:g},"arbi-trader"))),"buyer"==b?_(s.a,{color:"secondary",id:"standard-required",label:"Transaction ID",required:!0}):_(l.a,{variant:"h6",color:"textSecondary"},"Welcome! What role will you be needing assistance in your transaction today?")),_(m,{className:p},"buyer"==b?_(o.a.Fragment,null,_(y.a,{size:"large",color:"secondary",onClick:function(){return S(null)}},"Go Back"),_(y.a,{size:"large",color:"secondary"},"Submit")):_(o.a.Fragment,null,_(y.a,{size:"large",color:"secondary",onClick:function(){return S("buyer")}},"Buying"),_(y.a,{size:"large",color:"secondary",onClick:function(){return S("seller")}},"Selling"))))}var I=n("R/WZ"),W=Object(I.a)((function(e){return{page:{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center"},root:{minWidth:275,maxWidth:300,display:"flex",flexDirection:"column",alignItems:"center"},brand:{display:"grid",gridAutoFlow:"column",justifyContent:"center",alignItems:"center"},logo:{maxWidth:50,padding:e.spacing(1),paddingLeft:e.spacing(0)},auto:{color:"#62bdf9"},arbiTrader:{color:"#0081cb"},buttons:{display:"flex",width:"100%",justifyContent:"space-around",margin:"6px"},dialog:{minHeight:160}}})),F=o.a.createElement;function P(){r.a.buyer,r.a.seller;var e=W().page;return F("div",{className:e},F(A,{useStyles:W}))}},u6Hu:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n("SGa5")}])}},[["u6Hu",0,2,1,4,5,7]]]);