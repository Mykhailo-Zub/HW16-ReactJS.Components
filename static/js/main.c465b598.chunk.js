(this["webpackJsonphw16-react.components"]=this["webpackJsonphw16-react.components"]||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t.p+"static/media/user.e7875f01.svg"},function(e,a,t){e.exports=t.p+"static/media/male.07582995.svg"},function(e,a,t){e.exports=t.p+"static/media/female.5c87994c.svg"},function(e,a,t){e.exports=t.p+"static/media/unknown.2508df20.svg"},,,function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(4),l=t.n(r),i=(t(18),t(1)),o=t(2),s=t(5),m=t(6),d=t(12),h=t(11),f=t(7),p=t.n(f),u=function(e){return c.a.createElement("div",{className:"contact"},c.a.createElement("img",{className:"avatar",src:p.a,alt:"Avatar"}),c.a.createElement("div",{className:"main-info"},c.a.createElement("div",{className:"first-name"},e.firstName),c.a.createElement("div",{className:"last-name"},e.lastName),c.a.createElement("div",{className:"phone"},e.phone)),c.a.createElement("div",{className:"gender"},c.a.createElement("img",{src:e.gender,alt:"Gender icon"})))},g=t(8),v=t.n(g),N=t(9),E=t.n(N),S=t(10),b=t.n(S),w=[{firstName:"\u0411\u0430\u0440\u043d\u0435\u0439",lastName:"\u0421\u0442\u0438\u043d\u0441\u043e\u0432\u0441\u044c\u043a\u0438\u0439",phone:"+380956319521",gender:"male",male:!0,female:!1,notSpecified:!1},{firstName:"\u0420\u043e\u0431\u0456\u043d",lastName:"\u0429\u0435\u0440\u0431\u0430\u0442\u0441\u044c\u043a\u0430",phone:"+380931460123",gender:"female",male:!1,female:!0,notSpecified:!1},{firstName:"\u0410\u043d\u043e\u043d\u0456\u043c\u043d\u0438\u0439",lastName:"\u0410\u043d\u043e\u043d\u0456\u043c\u0443\u0441",phone:"+380666666666",male:!1,female:!1,notSpecified:!0},{firstName:"\u041b\u0456\u043b\u0456\u044f",lastName:"\u041e\u043b\u0434\u0440\u043e\u0432\u043d\u0430",phone:"+380504691254",gender:"female",male:!1,female:!0,notSpecified:!1},{firstName:"\u041c\u0430\u0440\u0448\u0435\u043d",lastName:"\u0415\u0440\u0456\u043a\u0441\u043e\u043d\u044f\u043d",phone:"+380739432123",gender:"male",male:!0,female:!1,notSpecified:!1},{firstName:"\u0422\u0435\u043e\u0434\u043e\u0440",lastName:"\u041c\u043e\u0442\u0441\u0431\u0435\u0441",phone:"+380956319526",gender:"male",male:!0,female:!1,notSpecified:!1}],k=function(e){Object(d.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={contacts:[].concat(w),search:"",male:!0,female:!0,notSpecified:!0},e.handleSearchChange=function(a){e.setState({search:a.target.value,contacts:w.filter((function(e){return e.firstName.toLowerCase().includes(a.target.value.toLowerCase())||e.lastName.includes(a.target.value.toLowerCase())||e.phone.toString().includes(a.target.value)}))})},e.addGenderImg=function(e){return"male"===e?v.a:"female"===e?E.a:b.a},e.handleGenderChange=function(a){var t;e.setState(Object(o.a)(Object(o.a)({},e.state),{},(t={},Object(i.a)(t,a.target.name,a.target.checked),Object(i.a)(t,"contacts",e.state.contacts.filter((function(a){return e.state.notSpecified?void 0===a.gender:e.state.female?"female"===a.gender:e.state.male?"male"===a.gender:void 0}))),t)))},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"contacts-wrapper"},c.a.createElement("input",{type:"text",id:"search",placeholder:"Search",value:this.state.search,onChange:this.handleSearchChange}),c.a.createElement("div",{className:"checkboxes"},c.a.createElement("label",{htmlFor:"male"},c.a.createElement("input",{type:"checkbox",name:"male",id:"male",checked:this.state.male,onChange:this.handleGenderChange}),"Male"),c.a.createElement("label",{htmlFor:"female"},c.a.createElement("input",{type:"checkbox",name:"female",id:"female",checked:this.state.female,onChange:this.handleGenderChange}),"Female"),c.a.createElement("label",{htmlFor:"notSpecefied"},c.a.createElement("input",{type:"checkbox",name:"notSpecified",id:"notSpecefied",checked:this.state.notSpecified,onChange:this.handleGenderChange}),"Not specified")),this.state.contacts.map((function(a){var t=a.firstName,n=a.lastName,r=a.phone,l=a.gender;return c.a.createElement(u,{firstName:t,lastName:n,phone:r,gender:e.addGenderImg(l),key:r})})))}}]),t}(n.Component);var C=function(){return c.a.createElement("div",null,c.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.c465b598.chunk.js.map