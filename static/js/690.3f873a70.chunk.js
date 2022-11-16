"use strict";(self.webpackChunkwallet_app=self.webpackChunkwallet_app||[]).push([[690],{4690:function(n,e,t){t.r(e),t.d(e,{default:function(){return sn}});var r,i,a,o,l,d,s,c,u,p,x,h,f,m=t(885),g=t(6305),b=function(n){var e=n.name,t=n.theme.colors;switch(e){case"Main expenses":return t.yellow;case"Products":return t.lReddy;case"Car":return t.reddy;case"Self care":return t.lPurple;case"Child care":return t.lBlue;case"Household products":default:return t.btBlue;case"Education":return t.lBlight;case"Leisure":return t.lGreen;case"Entertainment":return t.btPink;case"Other expenses":return t.green}},w=t(9683),v=t(2501),y=t(184),j=function(n){var e=n.trSummary;g.kL.register(g.qi,g.u);var t={labels:[],datasets:[{label:"Statistics",data:e&&(null===e||void 0===e?void 0:e.categoriesSummary.length)>0?[]:[100],backgroundColor:e&&(null===e||void 0===e?void 0:e.categoriesSummary.length)>0?[]:["#BDBDBD"],borderColor:["transparent"]}]};e&&e.categoriesSummary.length>0&&e.categoriesSummary.forEach((function(n){var r=n.name,i=n.type,a=n.total;if("INCOME"!==i){var o=b({name:r,theme:v.Z}),l=Math.abs(a),d=Math.abs(e.expenseSummary);t.datasets[0].backgroundColor.push(o),t.labels.push(r);var s=Math.round(l/d*100);t.datasets[0].data.push(s)}}));return(0,y.jsx)(w.$I,{redraw:!!e,options:{cutout:"70%",animation:{delay:200},plugins:{tooltip:{callbacks:{label:function(n){var e=n.label,t=n.raw;return"".concat(e,": ").concat(t,"%")}}}}},data:t})},Z=t(1413),k=t(168),S=t(4313),C=S.default.div(r||(r=(0,k.Z)(["\n  @media screen and (min-width: 768px) {\n      width: 336px;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 395px;\n  }\n"]))),M=S.default.div(i||(i=(0,k.Z)(["\n  width: 100%;\n  max-width: 320px;\n  overflow: visible scroll;\n  margin: 0 auto;\n\n  @media screen and (min-width: 768px) {\n    max-width: 704px;\n  }\n  @media screen and (min-width: 1280px) {\n    margin-top: 46px;\n    margin-right: 0;\n    max-width: 715px;\n    max-height: 80vh;\n  }\n  &::-webkit-scrollbar {\n    width: 4px;\n  }\n  &::-webkit-scrollbar-track {\n    border-radius: 2px;\n  }\n  &::-webkit-scrollbar-thumb {\n    background-color: ",";\n    border-radius: 2px;\n  }\n"])),(function(n){return n.theme.colors.bgGrayRight})),F=S.default.div(a||(a=(0,k.Z)(["\n  overflow: hidden;\n"]))),z=S.default.h2(o||(o=(0,k.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 400;\n  font-size: ",";\n    @media screen and (min-width: 768px){\n  font-size: ",";    \n  }\n  @media screen and (min-width: 1280px){\n  font-size: ",";    \n  }\n"])),(function(n){return n.firtsTime?"14px":"13.5px"}),(function(n){return n.firtsTime?"16px":"15px"}),(function(n){return n.firtsTime?"19px":"17px"})),R=S.default.table(l||(l=(0,k.Z)(["\n  width: 100%;\n  border-collapse: collapse;\n  font-family: ",";\n  color: ",";\n  text-align: center;\n"])),(function(n){return n.theme.ff.familyExo}),(function(n){return n.theme.colors.black})),E=S.default.th(d||(d=(0,k.Z)(["\n  &:first-child {\n    border-radius: 30px 0 0 30px;\n  }\n  &:last-child {\n    border-radius: 0 30px 30px 0;\n  }\n  border: none;\n  background-color: ",";\n  text-align: ",";\n  padding: ",";\n  @media screen and (min-width: 1280px) {\n    padding: ",";\n  }\n  \n\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 1.5;\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.left?"left":"right"}),(function(n){return n.left?"16px 10px 15px 20px":"16px 20px 15px 10px"}),(function(n){return n.left?"16px 10px 15px 28px":"16px 28px 15px 10px"})),I=S.default.tr(s||(s=(0,k.Z)(["\n    &:not(:last-child) {\n      margin-bottom: 8px;\n  }\n  &:first-child {margin-top: 8px}\n    position: relative;\n    font-size: 16px;\n  \n     \n      &::after {\n        content: '';\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        width: 100%;\n        border: 1px solid #dcdcdf;\n        box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);\n      }\n"]))),P=S.default.td(c||(c=(0,k.Z)(["\n  position: relative;\n  padding-left: ",";\n  padding-right: ",";\n\n  height: 52px;\n  line-height: calc(18 / 16);\n  font-weight: ",";\n  text-align: ",";\n\n  @media screen and (max-width: 767px) {\n    max-width: 188px;\n  }\n \n  @media screen and (min-width: 1280px){\n    padding-left: ",";\n    padding-right: ",";\n  }\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 18px;\n    @media screen and (min-width: 1280px){\n      left: 28px;\n    }\n    transform: translateY(-50%);\n    display: ",";\n    width: 24px;\n    height: 24px;\n    background-color: ",";\n    border-radius: 2px;\n  }\n"])),(function(n){return n.name?"58px":"0"}),(function(n){return n.right?"20px":"0"}),(function(n){return n.type?"700":"400"}),(function(n){return n.left?"left":"right"}),(function(n){return n.name?"68px":"0"}),(function(n){return n.right?"28px":"0"}),(function(n){return n.name?"block":"none"}),b),B=S.default.div(u||(u=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 17px;\n\n  margin-top: 16px;\n"]))),D=S.default.div(p||(p=(0,k.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n\n  @media screen and (min-width: 1280px){\n    padding: 0 28px;\n  }\n"]))),Y=S.default.span(x||(x=(0,k.Z)(["\n  font-weight: 700;\n  line-height: calc(24 / 16);\n"]))),A=S.default.span(h||(h=(0,k.Z)(["\n  font-weight: 700;\n  line-height: calc(24 / 16);\n  color: ",";\n"])),(function(n){return n.red?"#FF6596":"#24CCA7"})),G=S.default.div(f||(f=(0,k.Z)(["\n   @media screen and (max-width: 767px) {\n    display: block;\n  }\n \n  display: flex;\n  align-items: center;\n  justify-content: space-between; \n  margin-bottom: 20px;\n"]))),L=function(n){return{control:function(e){return(0,Z.Z)((0,Z.Z)({},e),{},{backgroundColor:"inherit",width:"100%",height:"50px",border:"1px solid #000000",borderRadius:"30px",boxShadow:"0px 6px 15px rgba(0, 0, 0, 0.1)",paddingLeft:"10px",paddingRight:"16px",color:"#e0e0e0",fontFamily:"Exo,  sans-serif",fontWeight:"400",fontSize:"18",lineHeight:1.5,outline:"none",cursor:"pointer",marginBottom:n?"20px":"0",display:"flex",alignItems:"center",justifyContent:"space-between",":hover":{borderColor:"#000000"}})},container:function(e){return(0,Z.Z)((0,Z.Z)({},e),{},{flexGrow:"1",":first-child":{marginRight:n?"0":"20px",flexGrow:"2",flexShrink:"0"}})},ValueContainer:function(n){return(0,Z.Z)((0,Z.Z)({},n),{},{paddingRight:"10px"})},indicatorSeparator:function(n){return(0,Z.Z)((0,Z.Z)({},n),{},{display:"none"})},option:function(n,e){var t=e.data,r=e.isDisabled,i=e.isFocused,a=e.isSelected;return(0,Z.Z)((0,Z.Z)({},n),{},{height:"32px",display:"flex",alignItems:"center",verticalAlign:"center",borderRadius:"15px",padding:"15px",backgroundColor:r?void 0:a?t.color:i?"rgba(255, 255, 255, 0.5)":void 0,color:r?"#ccc":a?t.color:i?"#ff6596":void 0,cursor:r?"not-allowed":"default",":active":(0,Z.Z)((0,Z.Z)({},n[":active"]),{},{backgroundColor:r?void 0:a?t.color:"rgba(255, 255, 255, 0.5)"}),":hover":{color:"#ff6596",background:"rgba(255, 255, 255, 0.5)"},":focus":{color:"#ff6596",background:"rgba(255, 255, 255, 0.5)"}})},menu:function(n){return(0,Z.Z)((0,Z.Z)({},n),{},{background:"rgba(255, 255, 255, 0.8)",boxShadow:"0px 6px 15px rgba(0, 0, 0, 0.1)",backdropFilter:"blur(25px)",borderRadius:"15px",zIndex:"1000000"})},menuList:function(n){return(0,Z.Z)((0,Z.Z)({},n),{},{overflow:"hidden scroll","::-webkit-scrollbar":{width:"4px"},"::-webkit-scrollbar-track":{borderRadius:"2px"},"::-webkit-scrollbar-thumb":{backgroundColor:"rgba(0, 0, 0, 0.2)",borderRadius:" 2px"}})}}},O=t(5716),T=t(5040),J=[{id:0,label:"January",value:"1"},{id:1,label:"February",value:"2"},{id:2,label:"March",value:"3"},{id:3,label:"April",value:"4"},{id:4,label:"May",value:"5"},{id:5,label:"June",value:"6"},{id:6,label:"July",value:"7"},{id:7,label:"August",value:"8"},{id:8,label:"September",value:"9"},{id:9,label:"October",value:"10"},{id:10,label:"November",value:"11"},{id:11,label:"December",value:"12"}];function N(){for(var n=(new Date).getFullYear(),e=n-4,t=[],r=n;r>=e;r--)t.push({value:r,label:r.toString()});return t}var W,H,_,q,Q,V=function(n){var e=n.trSummary,t=n.setYear,r=n.setMonth,i=(0,O.Z)("(max-width: 767px)"),a=function(n){return n.reduce((function(n,e){return n.push({value:"".concat(e.value),label:"".concat(e.label)}),n}),[])};return(0,y.jsxs)(C,{children:[(0,y.jsxs)(G,{children:[(0,y.jsx)(T.ZP,{name:"month",placeholder:"Month",styles:L(i),onChange:function(n){r(n.value)},options:a(J)}),(0,y.jsx)(T.ZP,{name:"year",placeholder:"Year",styles:L(i),onChange:function(n){t(n.value)},options:a(N())})]}),(0,y.jsx)(M,{children:e?(0,y.jsx)(y.Fragment,{children:e.categoriesSummary.length>0?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(R,{children:[(0,y.jsx)("thead",{children:(0,y.jsxs)("tr",{children:[(0,y.jsx)(E,{left:!0,children:"Category"}),(0,y.jsx)(E,{children:"Sum"})]})}),(0,y.jsx)("tbody",{children:e.categoriesSummary.reduce((function(n,e){var t=e.name,r=e.total,i=e.type;return"INCOME"!==i&&n.push((0,y.jsxs)(I,{type:i,children:[(0,y.jsx)(P,{left:!0,name:t,children:t}),(0,y.jsx)(P,{right:!0,leftPosition:!0,children:Math.abs(r).toFixed(2)})]},t)),n}),[])})]}),(0,y.jsxs)(B,{children:[(0,y.jsxs)(D,{children:[(0,y.jsx)(Y,{children:"Expanses: "}),(0,y.jsx)(A,{red:!0,children:Math.abs(e.expenseSummary).toFixed(2)})]}),(0,y.jsxs)(D,{children:[(0,y.jsx)(Y,{children:"Incomes: "}),(0,y.jsx)(A,{children:Math.abs(e.incomeSummary).toFixed(2)})]})]})]}):(0,y.jsx)(F,{children:(0,y.jsx)(z,{children:"In this period you don't have any expances."})})}):(0,y.jsx)(F,{children:(0,y.jsx)(z,{firtsTime:!0,children:"Choose month and year to see statistics."})})})]})},$=t(2791),K=t(9434),U=t(556),X=t(8007),nn=function(n){return n.trSummary.summary},en=function(n){return n.trSummary.error},tn=S.default.h2(W||(W=(0,k.Z)(["\n    margin-bottom: 10px;\n    font-family: ",";\n    font-weight: ",";\n    font-size: ",";\n    line-height: 1.5;\n    color: ",";\n    @media screen and (max-width: 767px) {\n        margin-top: 28px;\n    }\n    @media screen and (min-width: 768px) {\n        margin-bottom: 20px;\n    }\n"])),(function(n){return n.theme.ff.familyPoppins}),(function(n){return n.theme.fontWeight.fw4}),(function(n){return n.theme.fontSize.fs30}),(function(n){return n.theme.colors.black})),rn=S.default.div(H||(H=(0,k.Z)(["\n    padding-top: 128px;\n\n     @media screen and (max-width: 767px) {\n        margin: 0 auto;\n        max-width: 300px;\n    }\n     @media screen and (min-width: 768px) {\n        padding: 10px 0 10px;\n    }\n    @media screen and (min-width: 1280px) {\n        padding: 31px 15px 10px 68px;\n    }\n"]))),an=S.default.div(_||(_=(0,k.Z)(["\n    display: block;\n    @media screen and (min-width: 768px) {\n        display: flex;\n        justify-content: flex-start;\n        gap: 32px;\n    }\n"]))),on=S.default.div(q||(q=(0,k.Z)(["\n    margin-bottom: 32px;\n    width: 100%;\n    min-height: 200px;\n    flex-shrink: 0;\n    @media screen and (max-width: 767px) {\n        position: relative;\n    }\n    @media screen and (min-width: 768px) {\n        width: 336px;\n        min-height: 200px;\n        flex-shrink: 0;\n    }\n    @media screen and (min-width: 1280px) {\n        width: 288px;\n    }\n"]))),ln=S.default.p(Q||(Q=(0,k.Z)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    font-family: ",";\n    font-weight: ",";\n    font-size: ",";\n    line-height: 1.5;\n    color: ",";\n"])),(function(n){return n.theme.ff.familyPoppins}),(function(n){return n.theme.fontWeight.fw7}),(function(n){return n.theme.fontSize.fs18}),(function(n){return n.theme.colors.black})),dn=function(){var n=(0,$.useState)(""),e=(0,m.Z)(n,2),t=e[0],r=e[1],i=(0,$.useState)(""),a=(0,m.Z)(i,2),o=a[0],l=a[1],d=(0,K.v9)(nn),s=(0,K.v9)(U.QM),c=(0,K.v9)(en),u=(0,K.I0)(),p=(0,O.Z)("(max-width: 768px)");(0,$.useEffect)((function(){t&&o&&u((0,X.f)({month:t,year:o}))}),[t,o,u]);var x=function(){return t&&o?d:d=null};return(0,y.jsxs)(rn,{children:[(0,y.jsx)(tn,{children:"Statistics"}),(0,y.jsxs)(an,{children:[(0,y.jsxs)(on,{children:[(0,y.jsx)(j,{trSummary:x()}),p&&(0,y.jsxs)(ln,{children:["\u20b4 ",s.toFixed(2)]})]}),(0,y.jsx)(V,{setYear:l,setMonth:r,trSummary:x()}),c&&(0,y.jsx)("p",{children:c})]})]})},sn=function(){return(0,y.jsx)(dn,{})}}}]);
//# sourceMappingURL=690.3f873a70.chunk.js.map