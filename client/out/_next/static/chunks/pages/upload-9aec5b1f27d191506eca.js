_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"++HY":function(e,a,t){"use strict";var n=t("wx14"),o=t("q1tI"),r=(t("17x9"),t("H2TA")),c=t("ofer"),l=o.forwardRef((function(e,a){return o.createElement(c.a,Object(n.a)({component:"p",variant:"body1",color:"textSecondary",ref:a},e))}));a.a=Object(r.a)({root:{marginBottom:12}},{name:"MuiDialogContentText"})(l)},YMul:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return ie}));var n=t("o0o1"),o=t.n(n),r=t("HaE+"),c=t("q1tI"),l=t.n(c),i=t("fE/f"),d=t("+rzG"),s=t("30+C"),u=t("oa/T"),p=t("ofer"),m=t("Z3vd"),b=t("kfFl"),f=t("+JwS"),h=t("EQI2"),v=t("yv+Y"),y=t("r9w1"),g=t("wx14"),O=t("Ff2n"),k=(t("17x9"),t("iuhU")),j=t("EHdT"),x=t("H2TA"),w=t("NqtD"),C=c.forwardRef((function(e,a){e.checked;var t=e.classes,n=e.className,o=e.control,r=e.disabled,l=(e.inputRef,e.label),i=e.labelPlacement,d=void 0===i?"end":i,s=(e.name,e.onChange,e.value,Object(O.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),u=Object(j.a)(),m=r;"undefined"===typeof m&&"undefined"!==typeof o.props.disabled&&(m=o.props.disabled),"undefined"===typeof m&&u&&(m=u.disabled);var b={disabled:m};return["checked","name","onChange","value","inputRef"].forEach((function(a){"undefined"===typeof o.props[a]&&"undefined"!==typeof e[a]&&(b[a]=e[a])})),c.createElement("label",Object(g.a)({className:Object(k.a)(t.root,n,"end"!==d&&t["labelPlacement".concat(Object(w.a)(d))],m&&t.disabled),ref:a},s),c.cloneElement(o,b),c.createElement(p.a,{component:"span",className:Object(k.a)(t.label,m&&t.disabled)},l))})),S=Object(x.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(C),E=t("ODXe"),N=t("yCxk"),I=t("PsDL"),P=c.forwardRef((function(e,a){var t=e.autoFocus,n=e.checked,o=e.checkedIcon,r=e.classes,l=e.className,i=e.defaultChecked,d=e.disabled,s=e.icon,u=e.id,p=e.inputProps,m=e.inputRef,b=e.name,f=e.onBlur,h=e.onChange,v=e.onFocus,y=e.readOnly,x=e.required,w=e.tabIndex,C=e.type,S=e.value,P=Object(O.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),q=Object(N.a)({controlled:n,default:Boolean(i),name:"SwitchBase",state:"checked"}),z=Object(E.a)(q,2),D=z[0],B=z[1],F=Object(j.a)(),T=d;F&&"undefined"===typeof T&&(T=F.disabled);var H="checkbox"===C||"radio"===C;return c.createElement(I.a,Object(g.a)({component:"span",className:Object(k.a)(r.root,l,D&&r.checked,T&&r.disabled),disabled:T,tabIndex:null,role:void 0,onFocus:function(e){v&&v(e),F&&F.onFocus&&F.onFocus(e)},onBlur:function(e){f&&f(e),F&&F.onBlur&&F.onBlur(e)},ref:a},P),c.createElement("input",Object(g.a)({autoFocus:t,checked:n,defaultChecked:i,className:r.input,disabled:T,id:H&&u,name:b,onChange:function(e){var a=e.target.checked;B(a),h&&h(e,a)},readOnly:y,ref:m,required:x,tabIndex:w,type:C,value:S},p)),D?o:s)})),q=Object(x.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(P),z=t("5AJ6"),D=Object(z.a)(c.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),B=Object(z.a)(c.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),F=t("ye/S"),T=Object(z.a)(c.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),H=c.createElement(B,null),M=c.createElement(D,null),R=c.createElement(T,null),_=c.forwardRef((function(e,a){var t=e.checkedIcon,n=void 0===t?H:t,o=e.classes,r=e.color,l=void 0===r?"secondary":r,i=e.icon,d=void 0===i?M:i,s=e.indeterminate,u=void 0!==s&&s,p=e.indeterminateIcon,m=void 0===p?R:p,b=e.inputProps,f=e.size,h=void 0===f?"medium":f,v=Object(O.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),y=u?m:d,j=u?m:n;return c.createElement(q,Object(g.a)({type:"checkbox",classes:{root:Object(k.a)(o.root,o["color".concat(Object(w.a)(l))],u&&o.indeterminate),checked:o.checked,disabled:o.disabled},color:l,inputProps:Object(g.a)({"data-indeterminate":u},b),icon:c.cloneElement(y,{fontSize:void 0===y.props.fontSize&&"small"===h?h:y.props.fontSize}),checkedIcon:c.cloneElement(j,{fontSize:void 0===j.props.fontSize&&"small"===h?h:j.props.fontSize}),ref:a},v))})),L=Object(x.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(F.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(F.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(_),U=c.forwardRef((function(e,a){var t=e.classes,n=e.className,o=e.row,r=void 0!==o&&o,l=Object(O.a)(e,["classes","className","row"]);return c.createElement("div",Object(g.a)({className:Object(k.a)(t.root,n,r&&t.row),ref:a},l))})),A=Object(x.a)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(U),J=t("R/WZ"),V=l.a.createElement,G=Object(J.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:200}}}}));function W(e){var a=e.open,t=e.handleUploadClose,n=e.type,l=G().root,i=Object(c.useState)(!1),d=i[0],s=i[1],u=function(){var e=Object(r.a)(o.a.mark((function e(a){var t,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="","Government ID"===n&&(t="government_id"),r=document.querySelector('input[name="Government ID"]').files,(c=new FormData).append("file",r[0]),e.next=7,fetch("/api/db/documentUpload/".concat(t),{method:"POST",body:c});case 7:e.sent,window.location.reload();case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return V("div",null,V(b.a,{color:"dark",open:a,onClose:t,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},V(v.a,{id:"alert-dialog-title"},"Upload ".concat(n," Document")),V(h.a,null,"Bill of Sale"===n?V("form",{className:l,noValidate:!0,autoComplete:"on"},V(y.a,{color:"secondary",id:"standard-required",label:"First Name",required:!0}),V(y.a,{color:"secondary",id:"standard-required",label:"Last Name",required:!0}),V(y.a,{color:"secondary",id:"standard-required",label:"Vin Number",required:!0}),V(y.a,{color:"secondary",id:"standard-required",label:"Chassis Year",required:!0}),V(y.a,{color:"secondary",id:"standard-required",label:"Model",required:!0}),V(y.a,{color:"secondary",id:"standard-required",label:"Title #",required:!0}),V(y.a,{color:"secondary",id:"standard-required",label:"Milage",required:!0}),V(y.a,{color:"secondary",id:"standard-required",label:"Price",required:!0}),V(S,{control:V(L,{checked:d,onChange:function(){s(!d)}}),label:"Apply Signature"})):V(A,null,V(m.a,{variant:"contained",color:"secondary",component:"label"},"Upload ",n,V("input",{type:"file",name:n,hidden:!0})))),V(p.a,{variant:"subtitle1"},"Please only use PNG or JPG"),V(f.a,null,V(m.a,{color:"secondary",onClick:u},"Submit"),V(m.a,{onClick:t,color:"secondary"},"Close"))))}var Y=t("++HY"),$=l.a.createElement;function X(e){var a=e.url,t=e.open,n=e.handleDocumentClose,o=e.type;return $("div",null,$(b.a,{open:t,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},$(v.a,{id:"alert-dialog-title"}," ",$("img",{src:"https://raw.githubusercontent.com/Archivaldi/4wheelz/master/client/src/images/ShoppedAnvilLogo.png",alt:"anvil_logo",width:"200"})," "),$(h.a,null,$(Y.a,{id:"alert-dialog-description"},$("embed",{style:{maxHeight:"350px",maxWidth:"500px"},src:a,alt:o}))),$(f.a,null,$(m.a,{onClick:n,color:"secondary"},"Close"))))}var Z=t("vrJG"),Q=t.n(Z),K=t("rePB"),ee=Object(J.a)((function(e){var a;return{root:{height:"100%",alignItems:"center",minWidth:"260px",marginBottom:"2em"},flex:{display:"flex",flexWrap:"wrap",height:"100%",alignItems:"center",justifyContent:"space-between"},buttonMargin:{margin:"20px"},font:(a={fontSize:"3vw"},Object(K.a)(a,e.breakpoints.up("lg"),{fontSize:"2vw"}),Object(K.a)(a,e.breakpoints.up("sm"),{fontSize:"1.5em"}),Object(K.a)(a,e.breakpoints.down("sm"),{fontSize:"1em"}),a),disAppear:Object(K.a)({},e.breakpoints.down("xs"),{display:"none"}),icon:{fontSize:"100%"}}})),ae=l.a.createElement;function te(e){var a=e.type,t=e.completed,n=e.url,o=ee(),r=o.root,l=o.flex,i=o.icon,d=o.font,b=o.buttonMargin,f=o.disAppear,h=Object(c.useState)(!1),v=h[0],y=h[1],g=Object(c.useState)(!1),O=g[0],k=g[1];return ae(s.a,{className:r},ae(W,{open:v,handleUploadClose:function(){y(!1)},type:a}),ae(X,{open:O,handleDocumentClose:function(){k(!1)},type:a,url:n}),ae(u.a,{className:l},ae(p.a,{className:d,color:"textSecondary"},ae(Q.a,{className:i,color:t?"secondary":"primary"}),"".concat(a).toUpperCase()),ae("div",null,ae(m.a,{disabled:t,className:"".concat(d," ").concat(b),color:"secondary",onClick:function(){y(!0)}},ae("span",null,"Upload",ae("span",{className:f},t?"ed":""))),ae(m.a,{disabled:!n,className:"".concat(d," ").concat(b),color:"secondary",onClick:function(){k(!0)}},ae("span",null,"View ",ae("span",{className:f},"Document"))))))}var ne=t("bVjH"),oe=t("bJni"),re=t("ULge"),ce=t("fx/U"),le=l.a.createElement;function ie(){var e=Object(ce.b)(),a=Object(c.useState)(null),t=a[0],n=a[1],s=Object(c.useState)([]),u=s[0],p=s[1],m=oe.a.userInfo,b=re.a.route.session;return Object(c.useEffect)((function(){!function(){var e=Object(r.a)(o.a.mark((function e(){var a,t,r,c,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(b,{method:"POST"});case 2:return a=e.sent,e.next=5,a.json();case 5:return t=e.sent,r=t.role,e.next=9,fetch(m,{method:"POST"});case 9:return c=e.sent,e.next=12,c.json();case 12:l=e.sent,n(l[r]);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),Object(c.useEffect)((function(){var e=0,a=[];for(var n in t)if("govId"===n||"title"===n||"billOfSale"===n||"registration"===n){var o=void 0,r=!0===t[n];"govId"===n&&(o="Government ID"),"title"===n&&(o="Vehicle Title",r=!0),"billOfSale"===n&&(o="Bill of Sale",r=!0),"registration"===n&&(o="Registration",r=!0);var c={type:o,completed:r,url:t[n],id:e};a.push(c),e++}p(a)}),[t]),le(i.a,null,le(d.a,{classes:e},le(l.a.Fragment,null,le(ne.a,null),u.length>0&&u.map((function(e){var a=e.id,t=e.type,n=e.completed,o=e.url;return le(te,{key:a,type:t,completed:n,url:o})})))))}},tJ1D:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/upload",function(){return t("YMul")}])}},[["tJ1D",0,2,1,3,4,5]]]);