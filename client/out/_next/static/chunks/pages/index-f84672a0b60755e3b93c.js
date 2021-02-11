_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{RXBc:function(e,a,r){"use strict";r.r(a),r.d(a,"default",(function(){return B}));var t=r("q1tI"),n=r.n(t),o=r("+rzG"),i=r("30+C"),c=r("oa/T"),s=r("ofer"),l=r("rePB"),d=r("R/WZ"),m=Object(d.a)((function(e){var a;return{root:{display:"grid",gap:"1em",minWidth:"260px"},header:{display:"grid",gridTemplateColumns:"50% 50%"},progress:{display:"grid",margin:"0 50px 0 50px"},documents:{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center",flexWrap:"wrap"},items:{display:"flex",flexDirection:"row"},userNameFont:(a={fontSize:"3vw"},Object(l.a)(a,e.breakpoints.down("lg"),{fontSize:"2vw"}),Object(l.a)(a,e.breakpoints.down("sm"),{fontSize:"1.5em"}),a),font:Object(l.a)({fontSize:"1.5vw"},e.breakpoints.down("sm"),{fontSize:"1em"}),accent:{color:"#62bdf9"}}})),f=r("wx14"),u=r("Ff2n"),b=(r("17x9"),r("iuhU")),p=r("NqtD"),v=r("H2TA"),g=r("ye/S"),y=r("tr08"),h=t.forwardRef((function(e,a){var r=e.classes,n=e.className,o=e.color,i=void 0===o?"primary":o,c=e.value,s=e.valueBuffer,l=e.variant,d=void 0===l?"indeterminate":l,m=Object(u.a)(e,["classes","className","color","value","valueBuffer","variant"]),v=Object(y.a)(),g={},h={bar1:{},bar2:{}};if("determinate"===d||"buffer"===d)if(void 0!==c){g["aria-valuenow"]=Math.round(c),g["aria-valuemin"]=0,g["aria-valuemax"]=100;var w=c-100;"rtl"===v.direction&&(w=-w),h.bar1.transform="translateX(".concat(w,"%)")}else 0;if("buffer"===d)if(void 0!==s){var k=(s||0)-100;"rtl"===v.direction&&(k=-k),h.bar2.transform="translateX(".concat(k,"%)")}else 0;return t.createElement("div",Object(f.a)({className:Object(b.a)(r.root,r["color".concat(Object(p.a)(i))],n,{determinate:r.determinate,indeterminate:r.indeterminate,buffer:r.buffer,query:r.query}[d]),role:"progressbar"},g,{ref:a},m),"buffer"===d?t.createElement("div",{className:Object(b.a)(r.dashed,r["dashedColor".concat(Object(p.a)(i))])}):null,t.createElement("div",{className:Object(b.a)(r.bar,r["barColor".concat(Object(p.a)(i))],("indeterminate"===d||"query"===d)&&r.bar1Indeterminate,{determinate:r.bar1Determinate,buffer:r.bar1Buffer}[d]),style:h.bar1}),"determinate"===d?null:t.createElement("div",{className:Object(b.a)(r.bar,("indeterminate"===d||"query"===d)&&r.bar2Indeterminate,"buffer"===d?[r["color".concat(Object(p.a)(i))],r.bar2Buffer]:r["barColor".concat(Object(p.a)(i))]),style:h.bar2}))})),w=Object(v.a)((function(e){var a=function(a){return"light"===e.palette.type?Object(g.d)(a,.62):Object(g.a)(a,.5)},r=a(e.palette.primary.main),t=a(e.palette.secondary.main);return{root:{position:"relative",overflow:"hidden",height:4,"@media print":{colorAdjust:"exact"}},colorPrimary:{backgroundColor:r},colorSecondary:{backgroundColor:t},determinate:{},indeterminate:{},buffer:{backgroundColor:"transparent"},query:{transform:"rotate(180deg)"},dashed:{position:"absolute",marginTop:0,height:"100%",width:"100%",animation:"$buffer 3s infinite linear"},dashedColorPrimary:{backgroundImage:"radial-gradient(".concat(r," 0%, ").concat(r," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},dashedColorSecondary:{backgroundImage:"radial-gradient(".concat(t," 0%, ").concat(t," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},bar:{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},barColorPrimary:{backgroundColor:e.palette.primary.main},barColorSecondary:{backgroundColor:e.palette.secondary.main},bar1Indeterminate:{width:"auto",animation:"$indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite"},bar1Determinate:{transition:"transform .".concat(4,"s linear")},bar1Buffer:{zIndex:1,transition:"transform .".concat(4,"s linear")},bar2Indeterminate:{width:"auto",animation:"$indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite"},bar2Buffer:{transition:"transform .".concat(4,"s linear")},"@keyframes indeterminate1":{"0%":{left:"-35%",right:"100%"},"60%":{left:"100%",right:"-90%"},"100%":{left:"100%",right:"-90%"}},"@keyframes indeterminate2":{"0%":{left:"-200%",right:"100%"},"60%":{left:"107%",right:"-8%"},"100%":{left:"107%",right:"-8%"}},"@keyframes buffer":{"0%":{opacity:1,backgroundPosition:"0 -23px"},"50%":{opacity:0,backgroundPosition:"0 -23px"},"100%":{opacity:1,backgroundPosition:"-200px -23px"}}}}),{name:"MuiLinearProgress"})(h),k=n.a.createElement,x=Object(d.a)({root:{width:"100%"}});function j(e){var a=e.value,r=x().root;return k("div",{className:r},k(w,{variant:"determinate",value:a,color:100===a?"secondary":"primary"}))}var N=r("vrJG"),O=r.n(N),C=n.a.createElement;function E(e){var a=e.data,r=a.docs,t=a.name,n=a.title,o=m(),l=o.root,d=o.header,f=o.documents,u=o.items,b=o.progress,p=o.accent,v=o.font,g=o.userNameFont;var y=function(e){var a=0;return e.forEach((function(e){e.completed?a++:a=a})),a/e.length*100}(r);return C(i.a,{className:l},C(c.a,{className:d},C("div",null,C(s.a,{className:g},t),C(s.a,{className:"".concat(p," ").concat(v)},n)),C("div",{className:f},r.map((function(e){var a=e.id,r=e.completed,t=e.type;return C("div",{className:u,key:a},C(O.a,{className:v,color:r?"secondary":"primary"}),C(s.a,{className:v,color:"textSecondary"},t))})))),C("div",{className:b},C(j,{value:y})))}var P=r("L4PR"),S=r("fx/U"),_=r("49Ka"),z=n.a.createElement;function B(){var e=Object(S.a)(),a=P.a.buyer,r=P.a.seller;return z(o.a,{allDocsComplete:Object(_.a)(a,r),classes:e},z(E,{key:2,data:r}),z(E,{key:1,data:a}))}},vlRD:function(e,a,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("RXBc")}])}},[["vlRD",0,1,3,2,4,5]]]);