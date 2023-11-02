(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s,a=c(5),n=c.n(a),l=c(2),i=c(1),d=(c(10),c(11),c(4)),o=c.n(d),r=c(0),j=function(e){var t=e.todos,c=e.selectedTodoId,s=e.onTodoSelected;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsxs)("tr",{"data-cy":"todo",className:o()({"has-background-info-light":e.id===c}),children:[Object(r.jsx)("td",{className:"is-vcentered",children:e.id}),Object(r.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:o()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(r.jsx)("span",{className:"icon",children:c===e.id?Object(r.jsx)("i",{className:"far fa-eye-slash"}):Object(r.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(s||(s={}));var u=function(e){var t=e.query,c=e.onFilterChange,a=e.onQueryChange,n=e.filter;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",value:n,onChange:function(e){return c(e.target.value)},children:[Object(r.jsx)("option",{value:s.All,children:"All"}),Object(r.jsx)("option",{value:s.Active,children:"Active"}),Object(r.jsx)("option",{value:s.Completed,children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return a(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t&&Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){a("")}})})]})]})},b=(c(13),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})});function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var m=function(e){var t=e.onClose,c=e.todo,s=Object(i.useState)(null),a=Object(l.a)(s,2),n=a[0],d=a[1],o=Object(i.useState)(!0),j=Object(l.a)(o,2),u=j[0],m=j[1];return Object(i.useEffect)((function(){var e;(e=c.userId,h("/users/".concat(e))).then((function(e){return d(e)})).finally((function(){return m(!1)}))}),[c]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),u?Object(r.jsx)(b,{}):Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",null===c||void 0===c?void 0:c.id]}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:t})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:c.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[c.completed?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(null===n||void 0===n?void 0:n.email),children:null===n||void 0===n?void 0:n.name})]})]})]})]})},O=function(){var e,t=Object(i.useState)([]),c=Object(l.a)(t,2),a=c[0],n=c[1],d=Object(i.useState)(""),o=Object(l.a)(d,2),O=o[0],x=o[1],f=Object(i.useState)(!0),v=Object(l.a)(f,2),p=v[0],N=v[1],y=Object(i.useState)(null),g=Object(l.a)(y,2),C=g[0],k=g[1],S=Object(i.useState)(""),w=Object(l.a)(S,2),A=w[0],T=w[1],I=Object(i.useState)(s.All),_=Object(l.a)(I,2),E=_[0],L=_[1];Object(i.useEffect)((function(){h("/todos").then((function(e){return n(e)})).catch((function(e){return x(e.message)})).finally((function(){return N(!1)}))}),[]);var B=Object(i.useMemo)((function(){return a.filter((function(e){switch(E){case s.Active:return!e.completed;case s.Completed:return e.completed;case s.All:default:return!0}})).filter((function(e){var t=A.toLowerCase();return e.title.toLowerCase().includes(t)}))}),[A,E,a]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(u,{query:A,onQueryChange:T,filter:E,onFilterChange:L})}),Object(r.jsxs)("div",{className:"block",children:[p&&Object(r.jsx)(b,{}),a.length>0&&Object(r.jsx)(j,{todos:B,selectedTodoId:null!==(e=null===C||void 0===C?void 0:C.id)&&void 0!==e?e:0,onTodoSelected:k}),O&&Object(r.jsx)("p",{children:O})]})]})})}),C&&Object(r.jsx)(m,{onClose:function(){return k(null)},todo:C})]})};n.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.45cbb95d.chunk.js.map