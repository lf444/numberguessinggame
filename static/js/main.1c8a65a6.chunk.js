(this.webpackJsonpnbguessgame=this.webpackJsonpnbguessgame||[]).push([[0],{58:function(e,t,c){},59:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var n,a=c(0),r=c.n(a),i=c(8),s=c.n(i),o=(c(58),c(11));c(59);function l(e){switch(e){case n.facile:return"facile";case n.normal:return"normal";case n.difficile:return"difficile";default:return"facile%"}}!function(e){e.facile="100",e.normal="500",e.difficile="1000"}(n||(n={}));var j=c(99),b=c(105),u=c(107),d=c(110),f=c(108),O=c(106),h=c.p+"static/media/coeur.6f00a23b.png",g=c.p+"static/media/heart2.4ce7fbfb.png",m=c(4);var x=function(){var e=p(),t=Object(a.useState)(n.facile),c=Object(o.a)(t,2),r=c[0],i=c[1],s=Object(a.useState)(10),O=Object(o.a)(s,2),x=O[0],v=O[1],S=Object(a.useState)(0),y=Object(o.a)(S,2),C=y[0],k=y[1],F=Object(a.useState)(1),w=Object(o.a)(F,2),N=w[0],E=w[1],P=Object(a.useState)(""),z=Object(o.a)(P,2),M=z[0],R=z[1],T=Object(a.useState)([]),I=Object(o.a)(T,2),B=I[0],D=I[1],A=Object(a.useState)(!1),H=Object(o.a)(A,2),J=H[0],L=H[1],K=Object(a.useState)(!1),V=Object(o.a)(K,2),W=V[0],Y=V[1],q=Object(a.useState)(!1),G=Object(o.a)(q,2),Q=G[0],U=G[1],X=Object(a.useState)(!1),Z=Object(o.a)(X,2),$=Z[0],_=Z[1],ee=Object(a.useState)(0),te=Object(o.a)(ee,2),ce=te[0],ne=te[1],ae=Object(a.useState)(0),re=Object(o.a)(ae,2),ie=(re[0],re[1]);function se(){var e=1,t=+r;return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}var oe=Object(a.useState)(se()),le=Object(o.a)(oe,2),je=le[0],be=le[1],ue=function(e){var t=B.concat([e]);D(t)},de=function(){""!==M&&x>0&&(L(!1),Y(!1),_(!1),U(!1),ue(x>1?M+", ":M+"."),+M<+je&&(Y(!0),R(""),v(x-1)),+M>+je&&(L(!0),R(""),v(x-1)),+M===+je&&(k(x*+r),U(!0)))},fe=function(){E(N+1),v(10),k(0),R(""),D([]),be(se()),U(!1),L(!1),Y(!1),_(!1)};return Object(a.useEffect)((function(){fe()}),[r]),Object(a.useEffect)((function(){0===x&&(_(!0),k(0),L(!1),Y(!1))}),[x]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Number guessing game"}),Object(m.jsxs)(j.a,{children:["We have selected a random number. See if you can guess beteween 1 and"," ",r]}),N>1?Object(m.jsxs)(j.a,{children:["C'est votre ",N,"\xe9me partie d'affil\xe9 !"]}):Object(m.jsx)(m.Fragment,{children:" "}),N>1?Object(m.jsxs)(j.a,{children:["Highest score ",ce," !"]}):Object(m.jsx)(m.Fragment,{children:" "}),Object(m.jsxs)(j.a,{children:["Nb de points : ",C]}),Object(m.jsx)(j.a,{children:function(t){for(var c=[],n=0;n<t;n++)c.push(Object(m.jsx)("img",{className:e.img,src:h}));for(var a=0;a<10-t;a++)c.push(Object(m.jsx)("img",{className:e.img,src:g}));return Object(m.jsx)("div",{children:c})}(x)}),Object(m.jsxs)(j.a,{children:["Vos try : ",B]}),Object(m.jsx)(u.a,{variant:"outlined",style:{marginTop:"5px",marginBottom:"5px"},label:"diffculter",id:"diffculter",name:"diffculter",value:r,className:"text",onChange:function(e){return function(e){var t=e.target.value;i(t)}(e)},children:Object.values(n).map((function(e){return Object(m.jsx)(d.a,{value:e,children:l(e)},e)}))}),Object(m.jsxs)("div",{className:e.btn,children:[Object(m.jsx)(f.a,{variant:"outlined",type:"number",style:{backgroundColor:"white",marginRight:"10px"},id:"essaie",InputProps:{inputProps:{max:+r,min:1}},onKeyPress:function(e){console.log("Pressed keyCode ".concat(e.key)),"Enter"===e.key&&(de(),e.preventDefault())},value:M,onChange:function(e){return function(e){var t=e.target.value;R(+t)}(e)}}),Object(m.jsx)(b.a,{onClick:function(){de()},disabled:x<1||Q||$,style:{backgroundColor:"white"},children:"TRY"})]}),W?Object(m.jsx)(j.a,{style:{color:"blue",fontSize:"24px"},children:"trop bas "}):Object(m.jsx)(m.Fragment,{children:" "}),J?Object(m.jsx)(j.a,{style:{color:"yellow",fontSize:"24px"},children:"trop haut "}):Object(m.jsx)(m.Fragment,{children:" "}),Q?Object(m.jsx)(j.a,{style:{color:"green",fontSize:"24px"},children:"c gagn\xe9  "}):Object(m.jsx)(m.Fragment,{children:" "}),$?Object(m.jsx)(j.a,{style:{color:"red",fontSize:"24px"},children:"c perdu "}):Object(m.jsx)(m.Fragment,{children:" "}),$?Object(m.jsx)(b.a,{onClick:function(){fe()},style:{backgroundColor:"white"},children:"Recommencer ?"}):Object(m.jsx)(m.Fragment,{children:" "}),Q?Object(m.jsx)(b.a,{onClick:function(){E(N+1),v(10),k(0),ne(C),ie(C>ce?C:ce),R(""),D([]),be(se()),U(!1),L(!1),Y(!1),_(!1)},style:{backgroundColor:"white"},children:"Stop ?"}):Object(m.jsx)(m.Fragment,{children:" "}),Q?Object(m.jsx)(b.a,{onClick:function(){E(N+1),v(10),k(ce+C),ne(C),ie(C>ce?C:ce),R(""),D([]),be(se()),U(!1),L(!1),Y(!1),_(!1)},style:{backgroundColor:"white"},children:"Continuer ?"}):Object(m.jsx)(m.Fragment,{children:" "}),N>1?Object(m.jsx)(b.a,{className:e.bottom,onClick:function(){E(0),v(10),k(0),R(""),D([]),be(se()),U(!1),L(!1),Y(!1),_(!1)},style:{backgroundColor:"white"},children:"RESET HARD ?"}):Object(m.jsx)(m.Fragment,{children:" "})]})},p=Object(O.a)((function(){return{btn:{alignItems:"center",display:"flex",margin:"2%"},submit:{fontSize:"40px"},bottom:{position:"absolute",right:0,bottom:0},img:{margin:"2px",width:"20px",height:"20px"}}})),v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,111)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root")),v()}},[[66,1,2]]]);
//# sourceMappingURL=main.1c8a65a6.chunk.js.map