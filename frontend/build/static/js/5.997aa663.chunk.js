(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[5],{198:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return c}));var a={UPDATE_VALUE:"UPDATE_VALUE",SUBMIT_FORM:"SUBMIT_FORM",SUCCESS_GENERATOR:"SUCCESS_GENERATOR",REQUEST_GENERATOR:"REQUEST_GENERATOR",RESET_GENERATOR:"RESET_GENERATOR",FAIL_GENERATOR:"FAIL_GENERATOR",SET_DEFAULT_GENERATOR:"SET_DEFAULT_GENERATOR",SAVE_PSEUDO_NUMBERS:"SAVE_PSEUDO_NUMBERS"},r={UPDATE_VALUE:"UPDATE_VALUE",SUBMIT_FORM:"SUBMIT_FORM",SUCCESS_SMIRNOV:"SUCCESS_SMIRNOV",REQUEST_SMIRNOV:"REQUEST_SMIRNOV",RESET_SMIRNOV:"RESET_SMIRNOV",FAIL_SMIRNOV:"FAIL_SMIRNOV",SET_MODAL:"SET_MODAL"},c={UPDATE_VALUE:"UPDATE_VALUE",SUBMIT_FORM:"SUBMIT_FORM",SUCCESS_FREQUENCY:"SUCCESS_FREQUENCY",REQUEST_FREQUENCY:"REQUEST_FREQUENCY",RESET_FREQUENCY:"RESET_FREQUENCY",FAIL_FREQUENCY:"FAIL_FREQUENCY",SET_MODAL:"SET_MODAL"}},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var a=n(204),r=n.n(a),c=n(205),s=n(206),o=n.n(s);function E(e,t,n,a,r){return i.apply(this,arguments)}function i(){return(i=Object(c.a)(r.a.mark((function e(t,n,a,c,s){var E,i,l,b,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E=c.REQUEST,i=c.SUCCESS,l=c.FAIL,e.prev=1,s({type:E}),e.next=5,o()({method:n,url:t,data:a,headers:{"Content-Type":"application/json"}});case 5:b=e.sent,d=b.data,s({type:i,payload:d}),e.next=14;break;case 10:throw e.prev=10,e.t0=e.catch(1),s({type:l,payload:e.t0.message}),"Ingresa parametros correctos";case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}},202:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return E}));var a=n(9),r=n(2),c=n(198),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.b.UPDATE_VALUE:return Object(r.a)(Object(r.a)({},e),{},Object(a.a)({},t.payload.key,t.payload.value));case c.b.FAIL_GENERATOR:return Object(r.a)(Object(r.a)({},e),{},{loading:!1,error:t.payload});case c.b.SUCCESS_GENERATOR:return Object(r.a)(Object(r.a)({},e),{},{loading:!1,response:t.payload.response,pseudoNumbers:t.payload.pseudoNumbers});case c.b.REQUEST_GENERATOR:return Object(r.a)(Object(r.a)({},e),{},{loading:!0});case c.b.SET_DEFAULT_GENERATOR:return Object(r.a)(Object(r.a)({},e),{},{x0:17,a:101,c:221,m:17001});case c.b.SAVE_PSEUDO_NUMBERS:return e.response&&(localStorage.removeItem("pseudo-numbers"),localStorage.removeItem("pseudo-numbers-modal"),localStorage.setItem("pseudo-numbers",JSON.stringify(e.pseudoNumbers)),localStorage.setItem("pseudo-numbers-modal",JSON.stringify(e.response))),e}},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.c.UPDATE_VALUE:return Object(r.a)(Object(r.a)({},e),{},Object(a.a)({},t.payload.key,t.payload.value));case c.c.FAIL_SMIRNOV:return Object(r.a)(Object(r.a)({},e),{},{loading:!1,error:t.payload});case c.c.SUCCESS_SMIRNOV:return Object(r.a)(Object(r.a)({},e),{},{loading:!1,response:{max:t.payload.max,message:t.payload.message,about:t.payload.about}});case c.c.REQUEST_SMIRNOV:return Object(r.a)(Object(r.a)({},e),{},{loading:!0});case c.c.SET_MODAL:return Object(r.a)(Object(r.a)({},e),{},{showModal:t.show})}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.a.UPDATE_VALUE:return Object(r.a)(Object(r.a)({},e),{},Object(a.a)({},t.payload.key,t.payload.value));case c.a.FAIL_FREQUENCY:return Object(r.a)(Object(r.a)({},e),{},{loading:!1,error:t.payload});case c.a.SUCCESS_FREQUENCY:return console.log(t.payload),Object(r.a)(Object(r.a)({},e),{},{loading:!1,response:t.payload});case c.a.REQUEST_FREQUENCY:return Object(r.a)(Object(r.a)({},e),{},{loading:!0});case c.a.SET_MODAL:return Object(r.a)(Object(r.a)({},e),{},{showModal:t.show})}}},203:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return c}));var a={x0:0,a:0,c:0,m:0,loading:!1,error:!1,success:!1,message:"",response:void 0,pseudoNumbers:void 0},r={percent:0,numberGroups:0,loading:!1,error:!1,success:!1,message:"",response:void 0,showModal:!1},c={alpha:0,numberGroups:0,loading:!1,error:!1,success:!1,message:"",response:void 0,showModal:!1}},238:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return U}));var a=n(24),r=n(0),c=n.n(r),s=n(242),o=n(215),E=n(236),i=n(235),l=n(190),b=n(194),d=n(30),u=n(202),j=n(203),O=n(198),S=n(201),R=n(10),p=n(65),h=n(8),m=n(1);function U(){var e=Object(r.useReducer)(u.b,j.b),t=Object(a.a)(e,2),n=t[0],U=t[1],_=c.a.createRef(null),T=c.a.createRef(null),x=Object(h.f)(),A=function(e){e&&e.current.scrollIntoView({behavior:"smooth",block:"start"})},f=function(e){var t=e.target,n=t.value,a=t.name;U({type:O.b.UPDATE_VALUE,payload:{key:a,value:n}})},N=function(e){x.push(e)};return Object(m.jsxs)(R.b,{children:[Object(m.jsx)(d.h,{}),Object(m.jsx)("h1",{children:"Generador de n\xfameros pseudoaleatorios \u270d"}),Object(m.jsx)("div",{className:"usecondary-button-box",children:Object(m.jsx)(d.f,{onClick:function(){return U({type:O.b.SET_DEFAULT_GENERATOR})},children:"Usar n\xfameros por default"})}),n&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(s.a,{onSubmit:function(e){e.preventDefault(),p.b.promise(Object(S.a)("/api/generator/generator/","POST",{x0:n.x0,a:n.a,c:n.c,m:n.m},{SUCCESS:O.b.SUCCESS_GENERATOR,FAIL:O.b.FAIL_GENERATOR,REQUEST:O.b.REQUEST_GENERATOR},U),{loading:"Generando n\xfameros pseudoaleatorios",success:"N\xfameros pseudoaleatorios generados correctamente",error:function(e){return"".concat(e)}})},children:[Object(m.jsxs)(o.a,{children:[Object(m.jsxs)(E.a,{children:["Valor de ",Object(m.jsx)("b",{children:"X0"})]}),Object(m.jsx)(i.a,{type:"number",name:"x0",value:n.x0,onChange:f})]}),Object(m.jsxs)(o.a,{children:[Object(m.jsxs)(E.a,{children:["Valor de ",Object(m.jsx)("b",{children:"a"})]}),Object(m.jsx)(i.a,{type:"number",name:"a",value:n.a,onChange:f})]}),Object(m.jsxs)(o.a,{children:[Object(m.jsxs)(E.a,{children:["Valor de ",Object(m.jsx)("b",{children:"c"})]}),Object(m.jsx)(i.a,{type:"number",name:"c",value:n.c,onChange:f})]}),Object(m.jsxs)(o.a,{children:[Object(m.jsxs)(E.a,{children:["Valor de ",Object(m.jsx)("b",{children:"m"})]}),Object(m.jsx)(i.a,{type:"number",name:"m",value:n.m,onChange:f})]}),n.loading?Object(m.jsx)(d.b,{}):Object(m.jsx)(d.e,{type:"submit",onClick:function(){return A(_)},children:"Generar"})]}),Object(m.jsx)("h2",{ref:_,style:{marginTop:"1rem"},children:n.response?"Resultados":""}),n.response&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(R.a,{className:"mt-4",children:[Object(m.jsx)(l.a,{sm:3,children:Object(m.jsx)(d.f,{onClick:function(){return A(T)},children:"Ir al final de la tabla"})}),Object(m.jsx)(l.a,{sm:3,children:Object(m.jsx)(d.f,{onClick:function(){U({type:O.b.SAVE_PSEUDO_NUMBERS}),p.b.success("N\xfameros guardados correctamente")},children:"Guardar estos n\xfameros \u2705"})}),Object(m.jsx)(l.a,{sm:3,children:Object(m.jsx)(d.f,{onClick:function(){N("/exercises/tests/smirnov"),U({type:O.b.SAVE_PSEUDO_NUMBERS})},children:"Realizar prueba Smirnov"})}),Object(m.jsx)(l.a,{sm:3,children:Object(m.jsx)(d.f,{onClick:function(){N("/exercises/tests/frequency"),U({type:O.b.SAVE_PSEUDO_NUMBERS})},children:"Realizar prueba frecuencia"})})]}),Object(m.jsxs)(b.a,{striped:!0,hover:!0,responsive:!0,className:"table-sm mt-4",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"n"}),Object(m.jsx)("th",{children:"Rn"}),Object(m.jsx)("th",{children:"Xn"}),Object(m.jsx)("th",{children:"Xn+1"})]})}),Object(m.jsx)("tbody",{children:n.response.map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.n}),Object(m.jsx)("td",{children:e.rn}),Object(m.jsx)("td",{children:e.xn}),Object(m.jsx)("td",{children:e.xn1})]},t)}))})]}),Object(m.jsxs)("span",{className:"mb-4",children:["Genial! Generaste ",n.response.length," n\xfameros \ud83d\udc4f"]}),Object(m.jsx)(d.f,{className:"mb-4",ref:T,onClick:function(){return A(_)},children:"Regresar al principio"})]})]})]})}}}]);
//# sourceMappingURL=5.997aa663.chunk.js.map