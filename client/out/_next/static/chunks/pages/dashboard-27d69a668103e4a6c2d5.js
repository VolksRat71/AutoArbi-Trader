_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"2wU4":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return t("sFYk")}])},sFYk:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return G}));var n=t("o0o1"),r=t.n(n),o=t("HaE+"),i=t("q1tI"),l=t.n(i),s=t("fE/f"),c=t("+rzG"),d=t("30+C"),u=t("oa/T"),m=t("ofer"),b=t("rePB"),f=t("R/WZ"),p=Object(f.a)((function(e){var a;return{root:{display:"grid",gap:"1em",minWidth:"260px",height:"50vh",marginBottom:"2em"},header:{display:"grid",gridTemplateColumns:"50% 50%"},progress:{display:"grid",margin:"0 50px 0 50px"},documents:{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center",flexWrap:"wrap"},items:{display:"flex",flexDirection:"row"},userNameFont:(a={fontSize:"3vw"},Object(b.a)(a,e.breakpoints.down("lg"),{fontSize:"2vw"}),Object(b.a)(a,e.breakpoints.down("sm"),{fontSize:"1.5em"}),a),font:Object(b.a)({fontSize:"1.5vw"},e.breakpoints.down("sm"),{fontSize:"1em"}),accent:{color:"#62bdf9"}}})),v=t("wx14"),y=t("Ff2n"),g=(t("17x9"),t("iuhU")),h=t("NqtD"),w=t("H2TA"),N=t("ye/S"),O=t("tr08"),j=i.forwardRef((function(e,a){var t=e.classes,n=e.className,r=e.color,o=void 0===r?"primary":r,l=e.value,s=e.valueBuffer,c=e.variant,d=void 0===c?"indeterminate":c,u=Object(y.a)(e,["classes","className","color","value","valueBuffer","variant"]),m=Object(O.a)(),b={},f={bar1:{},bar2:{}};if("determinate"===d||"buffer"===d)if(void 0!==l){b["aria-valuenow"]=Math.round(l),b["aria-valuemin"]=0,b["aria-valuemax"]=100;var p=l-100;"rtl"===m.direction&&(p=-p),f.bar1.transform="translateX(".concat(p,"%)")}else 0;if("buffer"===d)if(void 0!==s){var w=(s||0)-100;"rtl"===m.direction&&(w=-w),f.bar2.transform="translateX(".concat(w,"%)")}else 0;return i.createElement("div",Object(v.a)({className:Object(g.a)(t.root,t["color".concat(Object(h.a)(o))],n,{determinate:t.determinate,indeterminate:t.indeterminate,buffer:t.buffer,query:t.query}[d]),role:"progressbar"},b,{ref:a},u),"buffer"===d?i.createElement("div",{className:Object(g.a)(t.dashed,t["dashedColor".concat(Object(h.a)(o))])}):null,i.createElement("div",{className:Object(g.a)(t.bar,t["barColor".concat(Object(h.a)(o))],("indeterminate"===d||"query"===d)&&t.bar1Indeterminate,{determinate:t.bar1Determinate,buffer:t.bar1Buffer}[d]),style:f.bar1}),"determinate"===d?null:i.createElement("div",{className:Object(g.a)(t.bar,("indeterminate"===d||"query"===d)&&t.bar2Indeterminate,"buffer"===d?[t["color".concat(Object(h.a)(o))],t.bar2Buffer]:t["barColor".concat(Object(h.a)(o))]),style:f.bar2}))})),k=Object(w.a)((function(e){var a=function(a){return"light"===e.palette.type?Object(N.e)(a,.62):Object(N.a)(a,.5)},t=a(e.palette.primary.main),n=a(e.palette.secondary.main);return{root:{position:"relative",overflow:"hidden",height:4,"@media print":{colorAdjust:"exact"}},colorPrimary:{backgroundColor:t},colorSecondary:{backgroundColor:n},determinate:{},indeterminate:{},buffer:{backgroundColor:"transparent"},query:{transform:"rotate(180deg)"},dashed:{position:"absolute",marginTop:0,height:"100%",width:"100%",animation:"$buffer 3s infinite linear"},dashedColorPrimary:{backgroundImage:"radial-gradient(".concat(t," 0%, ").concat(t," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},dashedColorSecondary:{backgroundImage:"radial-gradient(".concat(n," 0%, ").concat(n," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},bar:{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},barColorPrimary:{backgroundColor:e.palette.primary.main},barColorSecondary:{backgroundColor:e.palette.secondary.main},bar1Indeterminate:{width:"auto",animation:"$indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite"},bar1Determinate:{transition:"transform .".concat(4,"s linear")},bar1Buffer:{zIndex:1,transition:"transform .".concat(4,"s linear")},bar2Indeterminate:{width:"auto",animation:"$indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite"},bar2Buffer:{transition:"transform .".concat(4,"s linear")},"@keyframes indeterminate1":{"0%":{left:"-35%",right:"100%"},"60%":{left:"100%",right:"-90%"},"100%":{left:"100%",right:"-90%"}},"@keyframes indeterminate2":{"0%":{left:"-200%",right:"100%"},"60%":{left:"107%",right:"-8%"},"100%":{left:"107%",right:"-8%"}},"@keyframes buffer":{"0%":{opacity:1,backgroundPosition:"0 -23px"},"50%":{opacity:0,backgroundPosition:"0 -23px"},"100%":{opacity:1,backgroundPosition:"-200px -23px"}}}}),{name:"MuiLinearProgress"})(j),x=l.a.createElement,C=Object(f.a)({root:{width:"100%"}});function z(e){var a=e.value,t=C().root;return x("div",{className:t},x(k,{variant:"determinate",value:a,color:100===a?"secondary":"primary"}))}var S=t("vrJG"),E=t.n(S),P=l.a.createElement;function I(e){var a=e.data,t=a.docs,n=a.name,r=a.title,o=p(),i=o.root,l=o.header,s=o.documents,c=o.items,b=o.progress,f=o.accent,v=o.font,y=o.userNameFont;var g=function(e){var a=0;return e.forEach((function(e){e.completed?a++:a=a})),a/e.length*100}(t);return P(d.a,{className:i},P(u.a,{className:l},P("div",null,P(m.a,{className:y},n),P(m.a,{className:"".concat(f," ").concat(v)},r)),P("div",{className:s},t.map((function(e){var a=e.id,t=e.completed,n=e.type;return P("div",{className:c,key:a},P(E.a,{className:v,color:t?"secondary":"primary"}),P(m.a,{className:v,color:"textSecondary"},n))})))),P("div",{className:b},P(z,{value:g})))}var T=t("79Xs"),F=t("kfFl"),_=t("yv+Y"),B=t("EQI2"),D=t("r9w1"),q=t("wb2y"),L=t("+JwS"),U=t("Z3vd"),X=t("ZiQX"),M=Object(f.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center",maxWidth:"300px","& > *":{margin:e.spacing(1),width:"25ch"}},logoutButton:{color:"#d9534f"},content:{maxHeight:500}}})),J=t("ULge"),W=t("ot8U"),Y=l.a.createElement;function Z(e){var a=e.open,t=e.setInfoDialogOpen,n=M(),s=n.content,c=n.root,d=n.logoutButton,u=J.a.route,m=u.logout,b=u.session,f=Object(i.useState)(!1),p=f[0],v=f[1],y=Object(i.useState)(null),g=y[0],h=y[1],w=Object(i.useState)(!1),N=w[0],O=w[1],j=Object(i.useState)("Error!"),k=j[0],x=j[1],C=Object(W.a)({firstName:"",lastName:"",state:"",county:"",city:"",street:"",zip:"",transactionId:"",price:"",vin:"",year:"",make:"",model:"",body:"",odometer:"",titleNumber:"",licenseNumber:""}),z=C.values,S=C.updateValue,E=z.firstName,P=z.lastName,I=z.state,Z=z.county,H=z.city,R=z.street,V=z.zip,$=z.transactionId,A=z.price,G=z.vin,Q=z.year,K=z.make,ee=z.model,ae=z.body,te=z.odometer,ne=z.titleNumber,re=z.licenseNumber,oe=function(){var e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:""===E||""===P||""===I||""===Z||""===H||""===R||""===V||"buyer"===g&&""===$||"seller"===g&&""===A||"seller"===g&&""===G||"seller"===g&&""===Q||"seller"===g&&""===K||"seller"===g&&""===ee||"seller"===g&&""===ae||"seller"===g&&""===te||"seller"===g&&""===ne||"seller"===g&&""===re?(x("Missing Fields!"),!1===N&&(O(!0),setTimeout((function(){O(!1)}),3e3))):(v(!0),setTimeout((function(){v(!1),t(!1)}),1e3));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(m,{method:"POST"});case 2:window.location.reload();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){!function(){var e=Object(o.a)(r.a.mark((function e(){var a,t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(b,{method:"POST"});case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,n=t.role,h(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),Y("div",null,Y(T.a,{open:N},Y(X.a,{severity:"error"},k)),Y(F.a,{open:a,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},Y(_.a,{id:"alert-dialog-title"},"Please fill out this form \ud83d\ude0a"),Y(B.a,{className:s},Y("form",{className:c,noValidate:!0,autoComplete:"off"},Y(D.a,{disabled:p,value:E,name:"firstName",onChange:S,variant:"outlined",id:"outlined-size-normal",label:"First Name",color:"secondary"}),Y(D.a,{disabled:p,value:P,name:"lastName",onChange:S,variant:"outlined",id:"outlined-size-normal",label:"Last Name",color:"secondary"}),Y(D.a,{disabled:p,value:I,name:"state",onChange:S,variant:"outlined",id:"outlined-size-normal",label:"State",color:"secondary"}),Y(D.a,{disabled:p,value:Z,name:"county",onChange:S,variant:"outlined",id:"outlined-size-normal",label:"County",color:"secondary"}),Y(D.a,{disabled:p,value:H,name:"city",onChange:S,variant:"outlined",id:"outlined-size-normal",label:"City",color:"secondary"}),Y(D.a,{disabled:p,value:R,name:"street",onChange:S,variant:"outlined",id:"outlined-size-normal",label:"Street",color:"secondary"}),Y(D.a,{disabled:p,value:V,name:"zip",onChange:S,type:"number",variant:"outlined",id:"outlined-size-normal",label:"Zip",color:"secondary"}),Y(q.a,null),Y(l.a.Fragment,null,"buyer"===g&&Y(D.a,{disabled:p,value:$,name:"transactionId",onChange:S,type:"number",variant:"outlined",id:"outlined-size-normal",label:"Transaction ID",color:"secondary"}),"seller"===g&&Y(l.a.Fragment,null,Y(D.a,{disabled:p,value:A,name:"price",onChange:S,type:"number",variant:"outlined",id:"outlined-size-normal",label:"Price",color:"secondary"}),Y(D.a,{disabled:p,value:G,name:"vin",onChange:S,variant:"outlined",id:"outlined-size-normal",label:"Vin",color:"secondary"}),Y(D.a,{disabled:p,value:Q,name:"year",onChange:S,type:"number",variant:"outlined",id:"outlined-size-normal",label:"Year",color:"secondary"}),Y(D.a,{disabled:p,value:K,name:"make",onChange:S,variant:"outlined",id:"outlined-size-normal",label:"Make",color:"secondary"}),Y(D.a,{disabled:p,value:ee,name:"model",onChange:S,variant:"outlined",id:"outlined-size-normal",label:"Model",color:"secondary"}),Y(D.a,{disabled:p,value:ae,name:"body",onChange:S,variant:"outlined",id:"outlined-size-normal",label:"Body",color:"secondary"}),Y(D.a,{disabled:p,value:te,name:"odometer",onChange:S,variant:"outlined",id:"outlined-size-normal",label:"Odometer",color:"secondary"}),Y(q.a,null),Y(D.a,{disabled:p,value:ne,name:"titleNumber",onChange:S,variant:"outlined",id:"outlined-size-normal",label:"Title Number",color:"secondary"}),Y(D.a,{disabled:p,value:re,name:"licenseNumber",onChange:S,variant:"outlined",id:"outlined-size-normal",label:"License Plate Number",color:"secondary"}))))),Y(L.a,null,Y(U.a,{disabled:p,size:"large",className:d,onClick:ie},"Log Out"),Y(U.a,{disabled:p,size:"large",color:"secondary",onClick:oe},"Submit"))))}var H=t("L4PR"),R=t("fx/U"),V=t("49Ka"),$="/api/db/check-user",A=l.a.createElement;function G(){var e=Object(R.a)(),a=H.a.buyer,t=H.a.seller,n=$,d=Object(i.useState)(!1),u=d[0],m=d[1];return Object(i.useEffect)((function(){!function(){var e=Object(o.a)(r.a.mark((function e(){var a,t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n,{method:"POST"});case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,"Some info missing"===t.message&&m(!0);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),A(s.a,null,A(c.a,{allDocsComplete:Object(V.a)(a,t),classes:e},A(l.a.Fragment,null,A(Z,{open:u,setInfoDialogOpen:m}),A(I,{key:2,data:t})),A(l.a.Fragment,null,A(I,{key:1,data:a}))))}}},[["2wU4",0,2,1,3,4,6,5]]]);