(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[6],{184:function(e,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"c",(function(){return r})),t.d(a,"a",(function(){return s}));var n={UPDATE_VALUE:"UPDATE_VALUE",SUBMIT_FORM:"SUBMIT_FORM",SUCCESS_GENERATOR:"SUCCESS_GENERATOR",REQUEST_GENERATOR:"REQUEST_GENERATOR",RESET_GENERATOR:"RESET_GENERATOR",FAIL_GENERATOR:"FAIL_GENERATOR",SET_DEFAULT_GENERATOR:"SET_DEFAULT_GENERATOR",SAVE_PSEUDO_NUMBERS:"SAVE_PSEUDO_NUMBERS"},r={UPDATE_VALUE:"UPDATE_VALUE",SUBMIT_FORM:"SUBMIT_FORM",SUCCESS_SMIRNOV:"SUCCESS_SMIRNOV",REQUEST_SMIRNOV:"REQUEST_SMIRNOV",RESET_SMIRNOV:"RESET_SMIRNOV",FAIL_SMIRNOV:"FAIL_SMIRNOV",SET_MODAL:"SET_MODAL"},s={UPDATE_VALUE:"UPDATE_VALUE",SUBMIT_FORM:"SUBMIT_FORM",SUCCESS_FREQUENCY:"SUCCESS_FREQUENCY",REQUEST_FREQUENCY:"REQUEST_FREQUENCY",RESET_FREQUENCY:"RESET_FREQUENCY",FAIL_FREQUENCY:"FAIL_FREQUENCY",SET_MODAL:"SET_MODAL"}},187:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(190),r=t.n(n),s=t(191),c=t(192),o=t.n(c);function l(e,a,t,n,r){return i.apply(this,arguments)}function i(){return(i=Object(s.a)(r.a.mark((function e(a,t,n,s,c){var l,i,d,E,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=s.REQUEST,i=s.SUCCESS,d=s.FAIL,e.prev=1,c({type:l}),e.next=5,o()({method:t,url:a,data:n,headers:{"Content-Type":"application/json"}});case 5:E=e.sent,u=E.data,c({type:i,payload:u}),e.next=14;break;case 10:throw e.prev=10,e.t0=e.catch(1),c({type:d,payload:e.t0.message}),"Ingresa parametros correctos";case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}},188:function(e,a,t){"use strict";t.d(a,"b",(function(){return c})),t.d(a,"c",(function(){return o})),t.d(a,"a",(function(){return l}));var n=t(9),r=t(2),s=t(184),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case s.b.UPDATE_VALUE:return Object(r.a)(Object(r.a)({},e),{},Object(n.a)({},a.payload.key,a.payload.value));case s.b.FAIL_GENERATOR:return Object(r.a)(Object(r.a)({},e),{},{loading:!1,error:a.payload});case s.b.SUCCESS_GENERATOR:return Object(r.a)(Object(r.a)({},e),{},{loading:!1,response:a.payload.response,pseudoNumbers:a.payload.pseudoNumbers});case s.b.REQUEST_GENERATOR:return Object(r.a)(Object(r.a)({},e),{},{loading:!0});case s.b.SET_DEFAULT_GENERATOR:return Object(r.a)(Object(r.a)({},e),{},{x0:17,a:101,c:221,m:17001});case s.b.SAVE_PSEUDO_NUMBERS:return e.response&&localStorage.setItem("pseudo-numbers",JSON.stringify(e.pseudoNumbers)),e}},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case s.c.UPDATE_VALUE:return Object(r.a)(Object(r.a)({},e),{},Object(n.a)({},a.payload.key,a.payload.value));case s.c.FAIL_SMIRNOV:return Object(r.a)(Object(r.a)({},e),{},{loading:!1,error:a.payload});case s.c.SUCCESS_SMIRNOV:return Object(r.a)(Object(r.a)({},e),{},{loading:!1,response:{max:a.payload.max,message:a.payload.message,about:a.payload.about}});case s.c.REQUEST_SMIRNOV:return Object(r.a)(Object(r.a)({},e),{},{loading:!0});case s.c.SET_MODAL:return Object(r.a)(Object(r.a)({},e),{},{messageModal:a.message,titleModal:a.title,showModalCall:a.show,modalAction:a.action,hideModal:a.hide})}},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case s.a.UPDATE_VALUE:return Object(r.a)(Object(r.a)({},e),{},Object(n.a)({},a.payload.key,a.payload.value));case s.a.FAIL_FREQUENCY:return Object(r.a)(Object(r.a)({},e),{},{loading:!1,error:a.payload});case s.a.SUCCESS_FREQUENCY:return console.log(a.payload),Object(r.a)(Object(r.a)({},e),{},{loading:!1,response:a.payload});case s.a.REQUEST_FREQUENCY:return Object(r.a)(Object(r.a)({},e),{},{loading:!0});case s.a.SET_MODAL:return Object(r.a)(Object(r.a)({},e),{},{messageModal:a.message,titleModal:a.title,showModalCall:a.show,modalAction:a.action,hideModal:a.hide})}}},189:function(e,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"c",(function(){return r})),t.d(a,"a",(function(){return s}));var n={x0:0,a:0,c:0,m:0,loading:!1,error:!1,success:!1,message:"",response:void 0,pseudoNumbers:void 0},r={percent:0,numberGroups:0,loading:!1,error:!1,success:!1,message:"",response:void 0,titleModal:"",messageModal:"",showModalCall:!1,modalAction:null,hideModal:!1},s={alpha:0,numberGroups:0,loading:!1,error:!1,success:!1,message:"",response:void 0,titleModal:"",messageModal:"",showModalCall:!1,modalAction:null,hideModal:!1}},226:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return A}));var n,r=t(25),s=t(12),c=t(0),o=t(21),l=t(229),i=t(201),d=t(222),E=t(221),u=t(187),b=t(7),O=t(52),j=t(184),S=t(188),p=t(189),R=t(6),U=t(11),_=t(1),m=U.c.div(n||(n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: start;\n  margin-top: 2rem;\n  width: 80%;\n"])));function A(){var e=Object(c.useReducer)(S.c,p.c),a=Object(r.a)(e,2),t=a[0],n=a[1],s=Object(R.f)(),U=localStorage.getItem("pseudo-numbers")&&JSON.parse(localStorage.getItem("pseudo-numbers")),A=function(e){var a=e.target,t=a.value,r=a.name;n({type:j.c.UPDATE_VALUE,payload:{key:r,value:t}})};return Object(_.jsxs)(b.b,{children:[Object(_.jsx)("h1",{children:"Prueba de Smirnov \u270d"}),Object(_.jsxs)(l.a,{onSubmit:function(e){e.preventDefault(),O.b.promise(Object(u.a)("/api/smirnov/test/","POST",{pseudoNumbers:U,percent:null===t||void 0===t?void 0:t.percent,numberGroups:null===t||void 0===t?void 0:t.numberGroups},{SUCCESS:j.c.SUCCESS_SMIRNOV,FAIL:j.c.FAIL_SMIRNOV,REQUEST:j.c.REQUEST_SMIRNOV},n),{loading:"Realizando prueba de smirnov",success:"Prueba finalizada",error:function(e){return"".concat(e)}})},children:[Object(_.jsxs)(i.a,{children:[Object(_.jsx)(d.a,{children:"Porcentaje %"}),Object(_.jsx)(E.a,{value:t.percent,type:"number",name:"percent",onChange:A})]}),Object(_.jsxs)(i.a,{children:[Object(_.jsx)(d.a,{children:"N\xfamero de grupos"}),Object(_.jsx)(E.a,{value:null===t||void 0===t?void 0:t.numberGroups,type:"number",name:"numberGroups",onChange:A})]}),U?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)(d.a,{children:["Total de n\xfameros generados actualmente:"," ",U.n.length,". ",Object(_.jsx)("b",{className:"b-link",children:"Ver n\xfameros"})]}),Object(_.jsx)("br",{}),t.loading?Object(_.jsx)(o.b,{}):Object(_.jsx)(o.d,{type:"submit",children:"Realizar test"})]}):Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(d.a,{children:"A\xfan no tienes n\xfameros pseudoaleatorios generados \ud83d\ude25"}),Object(_.jsx)("br",{}),Object(_.jsx)(o.e,{onClick:function(){s.push("/exercises/generator")},children:"Ir a generarlos"})]})]}),t.response&&Object(_.jsxs)(m,{children:[Object(_.jsx)("h2",{children:"Resultados \ud83d\udcaf"}),Object(_.jsxs)("span",{children:[Object(_.jsx)("b",{children:"Di de tablas "}),": ",t.response.about]}),Object(_.jsx)("br",{}),Object(_.jsxs)("span",{children:[Object(_.jsx)("b",{children:"Di m\xe1ximo"}),": ",t.response.max]}),Object(_.jsx)("br",{}),Object(_.jsxs)("span",{children:[Object(_.jsx)("b",{children:"Resultado: "}),t.response.message]})]}),Object(_.jsx)(o.g,{})]})}}}]);
//# sourceMappingURL=6.d7512472.chunk.js.map