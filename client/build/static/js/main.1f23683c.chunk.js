(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{64:function(e,t,n){},70:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(25),o=n.n(a),s=n(7),i=(n(64),n(97)),l=n(100),u=n(96),d=n(11),j=n.n(d),b=n(17),h="https://boiling-sands-97823.herokuapp.com",O=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(h,"/todos/").concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c={description:t},e.next=4,fetch("".concat(h,"/todos/").concat(n),{method:"PUT",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}});case 4:window.location="/home",e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),x=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(h,"/todos/toggle/").concat(t),{method:"PUT"});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),f=n(1),m=r.a.createContext();function v(){return Object(c.useContext)(m)}function g(e){var t=e.children,n=e.id,r=Object(c.useState)([]),a=Object(s.a)(r,2),o=a[0],i=a[1],l=Object(c.useState)(""),u=Object(s.a)(l,2),d=u[0],O=u[1],p=Object(c.useState)(null),x=Object(s.a)(p,2),v=x[0],g=x[1],y=function(){var e=Object(b.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,c={description:d,user_id:n},!(d.length<3)){e.next=7;break}alert("You must type at least 3 characters"),e.next=10;break;case 7:return e.next=9,fetch("".concat(h,"/todos/"),{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}});case 9:O("");case 10:window.location="/home",e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(m.Provider,{value:{todoList:o,setTodoList:i,onSubmitTodo:y,description:d,setDescription:O,searchValue:v,setSearchValue:g},children:t})}var y=n(95),w=n(102),S=n(98),C=function(e){var t=e.activeTodo,n=e.setOpenModal,c=e.openModal,r=v(),a=r.todoList,o=r.setTodoList,s=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(h,"/todos/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 3:o(a.filter((function(e){return e.todo_id!==t}))),n(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)(S.a,{centered:!0,show:c,onHide:function(){return n(!1)},children:[Object(f.jsx)(S.a.Header,{children:Object(f.jsx)(S.a.Title,{children:"Delete Todo"})}),Object(f.jsxs)(S.a.Body,{children:['Do you want to delete "',t.description,'" ?']}),Object(f.jsxs)(S.a.Footer,{children:[Object(f.jsx)(w.a,{variant:"danger",onClick:function(){return s(t.todo_id)},children:"Delete"}),Object(f.jsx)(w.a,{variant:"secondary",onClick:function(){return n(!1)},children:"Cancel"})]})]})},N=n(99),k=function(e){var t=e.activeTodo,n=e.setOpenModal,r=e.openModal,a=Object(c.useState)(t.description),o=Object(s.a)(a,2),i=o[0],l=o[1];return Object(f.jsxs)(S.a,{centered:!0,show:r,onHide:function(){return n(!1)},children:[Object(f.jsx)(S.a.Header,{children:Object(f.jsx)(S.a.Title,{children:"Edit Todo"})}),Object(f.jsxs)(N.a,{onSubmit:function(e){return function(e){if(e.preventDefault(),i.length<4)return alert("Input value must be minimum 3 characters!");p(i,t.todo_id),n(!1)}(e)},children:[Object(f.jsx)(S.a.Body,{children:Object(f.jsx)(N.a.Control,{maxLength:"30",value:i,type:"text",onChange:function(e){return function(e){e.preventDefault();var t=e.target,n=t.value,c=t.maxLength,r=n.slice(0,c);l(r)}(e)}})}),Object(f.jsxs)(S.a.Footer,{children:[Object(f.jsx)(w.a,{type:"submit",children:"Save"}),Object(f.jsx)(w.a,{variant:"secondary",onClick:function(){return n(!1)},children:"Cancel"})]})]})]})},T=function(e){var t=e.todo,n=Object(c.useState)(!1),r=Object(s.a)(n,2),a=r[0],o=r[1],i=Object(c.useState)(!1),u=Object(s.a)(i,2),d=u[0],j=u[1],b=Object(c.useState)(),h=Object(s.a)(b,2),O=h[0],p=h[1],m=Object(c.useState)(!1),v=Object(s.a)(m,2),g=v[0],S=v[1],N={display:"".concat(g||window.innerWidth<768?"inline-block":"none"," ")};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(l.a.Item,{className:"todo-item mh-100 rounded px-2",onMouseOverCapture:function(){return S(!0)},onMouseLeave:function(){return S(!1)},children:Object(f.jsxs)(y.a,{className:"d-flex",children:[Object(f.jsxs)("span",{onClick:function(){return e=t.todo_id,x(e),void(window.location="/home");var e},className:"w-100",style:{textDecorationLine:"".concat(t.is_done?"line-through":"none"," "),color:"".concat(t.is_done?"gray":"#000"," ")},children:[Object(f.jsx)("input",{id:t.todo_id,type:"radio",onChange:function(){},checked:t.is_done,style:{marginRight:"5px"}}),t.description]}),Object(f.jsx)(w.a,{style:N,variant:"outline-secondary",className:"but border-0 p-1",onClick:function(){return p(t),void j(!0)},children:Object(f.jsx)("i",{className:"fa fa-edit"})}),Object(f.jsx)(w.a,{style:N,className:"but border-0 p-1",onClick:function(){return p(t),void o(!0)},variant:"outline-danger",children:Object(f.jsx)("i",{className:"fa fa-trash"})})]})},t.todo_id),a&&Object(f.jsx)(C,{activeTodo:O,openModal:a,setOpenModal:o}),d&&Object(f.jsx)(k,{activeTodo:O,openModal:d,setOpenModal:j})]})},L=function(e){var t=e.id,n=v(),r=n.todoList,a=n.setTodoList,o=Object(c.useState)(!1),i=Object(s.a)(o,2),d=i[0],j=i[1];return Object(c.useEffect)((function(){var e=!0;if(console.log({todoList:r}),t)return O(t).then(j(!0)).then((function(t){e&&a(t),j(!1)})),function(){e=!1}}),[]),console.log(r),Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{children:Object(f.jsxs)(l.a,{children:[d&&Object(f.jsx)(u.a,{className:"m-auto mt-5",animation:"border",role:"status",children:Object(f.jsx)("span",{className:"visually-hidden",children:"Loading..."})}),r&&0===r.length?Object(f.jsx)("p",{className:"text-center",children:"Your todo list is empty."}):Object(f.jsx)(f.Fragment,{children:r.map((function(e){return Object(f.jsx)(T,{todo:e},e.todo_id)}))})]})})})},M=function(){var e=v(),t=e.description,n=e.setDescription,c=e.onSubmitTodo;return Object(f.jsxs)(N.a,{onSubmit:c,className:"d-flex mt-5 mb-4",children:[Object(f.jsx)(N.a.Control,{maxLength:"30",value:t,type:"text",placeholder:"Enter a new todo",onChange:function(e){return function(e){e.preventDefault();var t=e.target,c=t.value,r=t.maxLength,a=c.slice(0,r);n(a)}(e)}}),Object(f.jsx)(w.a,{style:{fontSize:"16px"},variant:"outline-light",type:"submit",children:Object(f.jsx)("i",{className:"fa fa-plus"})})]})},E=(n(70),function(e){var t=e.prompt,n=v(),r=n.todoList,a=n.setSearchValue,o=n.searchValue,i=Object(c.useState)(!1),l=Object(s.a)(i,2),u=l[0],d=l[1],j=Object(c.useState)(0),b=Object(s.a)(j,2),h=b[0],O=b[1],p=Object(c.useState)(""),x=Object(s.a)(p,2),m=x[0],g=x[1],y=Object(c.useState)([]),w=Object(s.a)(y,2),S=w[0],C=w[1],N=Object(c.useRef)(null);function k(e){d(e&&e.target===N.current)}Object(c.useEffect)((function(){return document.addEventListener("click",k),T(m),function(){document.removeEventListener("click",k)}}),[m]);var T=function(e){var t=[];e?(r.forEach((function(n){n.description.toLocaleLowerCase().includes(e.toLowerCase())&&t.push(n)})),C(t.slice(0,4))):C([])};function L(e){a(e),d(!1),O(0),C([])}return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"dropdown",children:[Object(f.jsxs)("div",{className:"control",children:[Object(f.jsx)("div",{className:"selected-value",children:Object(f.jsx)("input",{"data-testid":"input",ref:N,placeholder:o?o.description:t,type:"text",value:o?o.description:m,onChange:function(e){!u&&d(!0),g(e.target.value),a(null)},onKeyDown:function(e){return function(e){switch(e.key){case"ArrowDown":u?O((function(e){return e<S.length-1?e+1:0})):d(!0);break;case"ArrowUp":O((function(e){return e>0?e-1:S.length-0}));break;case"Escape":d(!1);break;case"Enter":S&&h>-1&&L(S[h])}}(e)},onMouseOver:function(){return O(0)},onMouseOut:function(){return O(0)}})}),Object(f.jsx)("div",{"data-testid":"arrow",className:"arrow ".concat(u&&"open")})]}),Object(f.jsx)("div",{"data-testid":"options",className:"options ".concat(u&&"open"),children:S.length>0&&S.map((function(e,t){return Object(f.jsx)("div",{"data-testid":"opt".concat(t),className:"option ".concat((o===e||e===S[h])&&"selected"),onClick:function(){L(e)},children:e.description},e.todo_id)}))})]})})}),D=n(101),I=n(8),_=function(e){var t=e.setOpenModal,n=e.openModal,c=e.setId,r=Object(I.f)();return Object(f.jsxs)(S.a,{centered:!0,show:n,onHide:function(){return t(!1)},children:[Object(f.jsx)(S.a.Header,{children:Object(f.jsx)(S.a.Title,{children:"Logout"})}),Object(f.jsx)(S.a.Body,{children:"Are you sure?"}),Object(f.jsxs)(S.a.Footer,{children:[Object(f.jsx)(w.a,{variant:"danger",onClick:function(){c(null),t(!1),r.push("/login")},children:"Logout"}),Object(f.jsx)(w.a,{variant:"secondary",onClick:function(){return t(!1)},children:"Cancel"})]})]})},F=function(e){var t=e.setId,n=v(),r=n.setSearchValue,a=n.searchValue,o=Object(c.useState)(!1),l=Object(s.a)(o,2),u=l[0],d=l[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(D.a,{style:{backgroundColor:"#3c2b42",border:"1px solid #000"},expand:"xs",className:"rounded",children:Object(f.jsxs)(i.a,{fluid:!0,children:[Object(f.jsx)(D.a.Brand,{href:"#",children:Object(f.jsx)("h2",{style:{color:"rgb(219, 202, 227)"},children:"Todo App"})}),Object(f.jsx)(D.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(f.jsxs)(D.a.Collapse,{className:"justify-content-end mt-2",id:"basic-navbar-nav",children:[Object(f.jsx)("div",{children:Object(f.jsx)(E,{prompt:"Search...",onChange:function(e){return r(e)}})}),Object(f.jsx)(w.a,{className:"w-100 mt-2",variant:"outline-danger",onClick:d,children:"Logout"})]})]})}),a&&Object(f.jsxs)("div",{className:"mt-5 mb-3",children:[Object(f.jsx)("h6",{children:"Selected Todo:"}),Object(f.jsx)(T,{todo:a}),Object(f.jsx)("hr",{})]}),u&&Object(f.jsx)(_,{openModal:u,setId:t,setOpenModal:d})]})},H=n(27),B=function(e){var t=e.setOpenModal,n=e.openModal;return Object(f.jsxs)(S.a,{centered:!0,show:n,onHide:function(){return t(!1)},children:[Object(f.jsx)(S.a.Header,{children:Object(f.jsx)(S.a.Title,{children:"OOpss!"})}),Object(f.jsx)(S.a.Body,{children:"Wrong Credentials!"}),Object(f.jsx)(S.a.Footer,{children:Object(f.jsx)(w.a,{onClick:function(){return t(!1)},children:"Got it"})})]})};function J(e){e.id;var t=e.setId,n=Object(c.useState)(""),r=Object(s.a)(n,2),a=r[0],o=r[1],l=Object(c.useState)(""),u=Object(s.a)(l,2),d=u[0],O=u[1],p=Object(c.useState)(!1),x=Object(s.a)(p,2),m=x[0],v=x[1];console.log({URL:h});var g=Object(I.f)();function y(){return(y=Object(b.a)(j.a.mark((function e(n){var c,r,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,c={email:a,password:d},e.next=5,fetch("".concat(h,"/users/login"),{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}});case 5:return r=e.sent,e.next=8,r.json();case 8:return o=e.sent,t(o.user_id),g.push("/home"),e.abrupt("return",o);case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0),v(!0);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})))).apply(this,arguments)}return Object(f.jsxs)(i.a,{className:"align-items-center flex-column d-flex justify-content-center h-100",children:[Object(f.jsxs)(N.a,{onSubmit:function(e){return y.apply(this,arguments)},md:"8",className:"align-items-center d-flex flex-column mb-6",children:[Object(f.jsxs)(N.a.Group,{className:"mb-2 ",children:[Object(f.jsx)(N.a.Control,{placeholder:"Email",type:"text",onChange:function(e){return o(e.target.value)},required:!0}),Object(f.jsx)(N.a.Control,{placeholder:"Password",type:"text",onChange:function(e){return O(e.target.value)},required:!0})]}),Object(f.jsx)(w.a,{className:"w-100",type:"submit",children:"Login"})]}),Object(f.jsx)("p",{className:"mt-5 mb-4",children:" Not a member yet?"}),Object(f.jsx)(H.b,{to:"/register",children:Object(f.jsx)(w.a,{variant:"secondary",children:" Sign up"})}),m&&Object(f.jsx)(B,{openModal:m,setId:t,setOpenModal:v})]})}var P=n(59),V=n.n(P);function q(e){var t=e.setId,n=(e.id,Object(c.useState)("")),r=Object(s.a)(n,2),a=r[0],o=r[1],l=Object(c.useState)(""),u=Object(s.a)(l,2),d=u[0],O=u[1],p=Object(c.useState)(""),x=Object(s.a)(p,2),m=x[0],v=x[1],g=Object(c.useState)(null),y=Object(s.a)(g,2),C=y[0],k=y[1],T=Object(I.f)();function L(){return(L=Object(b.a)(j.a.mark((function e(n){var c,r,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,c={name:a,email:d,password:m},r={headers:{"Content-Type":"application/json"}},e.next=6,V.a.post("".concat(h,"/users/register"),c,r);case 6:o=e.sent,k(null),o.data&&t(o.data.user_id),T.push("/home"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0),k(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}return Object(f.jsxs)(i.a,{className:"align-items-center flex-column d-flex justify-content-center h-100",children:[Object(f.jsxs)(N.a,{onSubmit:function(e){return L.apply(this,arguments)},md:"8",className:"align-items-center d-flex flex-column ",children:[Object(f.jsxs)(N.a.Group,{className:"mb-2",children:[Object(f.jsx)(N.a.Control,{placeholder:"Name",type:"text",required:!0,onChange:function(e){return o(e.target.value)}}),Object(f.jsx)(N.a.Control,{placeholder:"Email",type:"text",required:!0,onChange:function(e){return O(e.target.value)}}),Object(f.jsx)(N.a.Control,{placeholder:"Password",type:"text",required:!0,onChange:function(e){return v(e.target.value)}})]}),Object(f.jsx)(w.a,{className:"w-100",type:"submit",children:"Sign up"})]}),Object(f.jsx)("p",{className:"mt-5 mb-4",children:"Already signed up? "}),Object(f.jsx)(H.b,{to:"/login",children:Object(f.jsx)(w.a,{variant:"secondary",children:" Sign in"})}),C&&Object(f.jsxs)(S.a,{className:"text-danger",centered:!0,show:C,onHide:function(){return k(null)},children:[Object(f.jsx)(S.a.Header,{children:Object(f.jsx)(S.a.Title,{children:"Oops!!!"})}),Object(f.jsx)(S.a.Body,{children:C.message}),Object(f.jsx)(S.a.Footer,{children:Object(f.jsx)(w.a,{variant:"secondary",onClick:function(){return k(null)},children:"OK"})})]})]})}var A=n(38);var U=function(){var e=function(e,t){var n="pern-todo-"+e,r=Object(c.useState)((function(){var e=localStorage.getItem(n);return null!=e?JSON.parse(e):"function"===typeof t?t():t})),a=Object(s.a)(r,2),o=a[0],i=a[1];return Object(c.useEffect)((function(){localStorage.setItem(n,JSON.stringify(o))}),[n,o]),[o,i]}("todo-user-id",null),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(f.jsx)(H.a,{children:Object(f.jsx)(A.a,{style:{height:"100vh"},children:Object(f.jsx)(g,{id:n,children:n?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(I.b,{path:"/",children:Object(f.jsx)(I.a,{to:"/home"})}),Object(f.jsx)(I.b,{path:"/home",children:Object(f.jsxs)(i.a,{className:"col-sm-12 col-md-8 col-lg-4 mx-auto h-40",children:[Object(f.jsx)(F,{setId:r,id:n}),Object(f.jsx)(M,{}),Object(f.jsx)(L,{id:n})]})})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(I.b,{path:"/",children:Object(f.jsx)(I.a,{to:"/login"})}),Object(f.jsx)(I.b,{path:"/register",children:Object(f.jsx)(q,{setId:r,id:n})}),Object(f.jsx)(I.b,{path:"/login",children:Object(f.jsx)(J,{setId:r,id:n})})]})})})})};n(92);o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(U,{})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.1f23683c.chunk.js.map