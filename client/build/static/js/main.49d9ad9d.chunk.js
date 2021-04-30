(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{50:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(17),s=c.n(a),i=c(10),j=c(54),o=c(57),l=c(55),d=c(58),u=c(2),b=function(e){var t=e.onIdSubmit,c=Object(n.useRef)();return Object(u.jsx)(j.a,{className:"align-items-center d-flex",style:{height:"100vh"},children:Object(u.jsxs)(o.a,{className:"w-100",onSubmit:function(e){e.preventDefault(),t(c.current.value)},children:[Object(u.jsxs)(o.a.Group,{children:[Object(u.jsx)(o.a.Label,{children:"Enter your id"}),Object(u.jsx)(o.a.Control,{type:"text",ref:c,required:!0})]}),Object(u.jsx)(l.a,{type:"submit",className:"mr-2",children:"Login"}),Object(u.jsx)(l.a,{variant:"secondary",onClick:function(){t(Object(d.a)())},children:"Crete a new id"})]})})},O=(c(49),function(e,t){var c="whatsapp-clone-"+e,r=Object(n.useState)((function(){var e=localStorage.getItem(c);return null!=e?JSON.parse(e):"function"===typeof t?t():t})),a=Object(i.a)(r,2),s=a[0],j=a[1];return Object(n.useEffect)((function(){localStorage.setItem(c,JSON.stringify(s))}),[c,s]),[s,j]}),x=(c(50),c(60)),h=c(59),f=c(56),v=function(){return Object(u.jsx)("div",{children:"Conversations"})},m=c(32),p=Object(n.createContext)(),y=function(){return Object(n.useContext)(p)},C=function(e){var t=e.children,c=O("contacts",[]),n=Object(i.a)(c,2),r=n[0],a=n[1];return Object(u.jsx)(p.Provider,{value:{contacts:r,createContact:function(e,t){a((function(c){return[].concat(Object(m.a)(c),[{id:e,name:t}])}))}},children:t})},g=c(61),S=function(){var e=y().contacts;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(g.a,{variant:"flush",children:e.map((function(e){return Object(u.jsx)(g.a.Item,{style:{color:"black"},children:e.name},e.id)}))})})},N=function(e){var t=e.closeModal,c=y(),r=c.contacts,a=(c.useConversations,Object(n.useState)([])),s=Object(i.a)(a,2),j=s[0],d=s[1];return Object(u.jsxs)("div",{style:{color:"black"},children:[Object(u.jsx)(f.a.Header,{closeButton:!0,children:"Create Conversation"}),Object(u.jsx)(f.a.Body,{children:Object(u.jsxs)(o.a,{onSubmit:function(e){e.preventDefault(),t()},children:[r.map((function(e){return Object(u.jsx)(o.a.Group,{controlId:e.id,children:Object(u.jsx)(o.a.Check,{type:"checkbox",value:j.includes(e.id),label:e.name,onChange:function(){return t=e.id,void d((function(e){return e.includes(t)?e.filter((function(e){return t!==e})):[].concat(Object(m.a)(e),[t])}));var t}})},e.id)})),Object(u.jsx)(l.a,{type:"submit",children:"Create"})]})})]})},k=function(e){var t=e.closeModal,c=y().createContact,r=Object(n.useRef)(),a=Object(n.useRef)();return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{style:{color:"black"},children:[Object(u.jsx)(f.a.Header,{closeButton:!0,children:"Create Contact"}),Object(u.jsx)(f.a.Body,{children:Object(u.jsxs)(o.a,{onSubmit:function(e){e.preventDefault(),c(r.current.value,a.current.value),t()},children:[Object(u.jsxs)(o.a.Group,{children:[Object(u.jsx)(o.a.Label,{children:"Id"}),Object(u.jsx)(o.a.Control,{type:"text",ref:r,required:!0})]}),Object(u.jsxs)(o.a.Group,{children:[Object(u.jsx)(o.a.Label,{children:"Name"}),Object(u.jsx)(o.a.Control,{type:"text",ref:a,required:!0})]}),Object(u.jsx)(l.a,{type:"submit",children:"Create"})]})})]})})},w="conversations",I="contacts",L=function(e){var t=e.id,c=Object(n.useState)(w),r=Object(i.a)(c,2),a=r[0],s=r[1],j=Object(n.useState)(!1),o=Object(i.a)(j,2),d=o[0],b=o[1],O=function(){b(!1)},m=a===w;return Object(u.jsxs)("div",{style:{width:"250px"},className:"d-flex flex-column",children:[Object(u.jsxs)(x.a.Container,{activeKey:a,onSelect:s,children:[Object(u.jsxs)(h.a,{variant:"tabs",className:"justify-content-center",children:[Object(u.jsx)(h.a.Item,{children:Object(u.jsx)(h.a.Link,{eventKey:w,children:"Conversations"})}),Object(u.jsx)(h.a.Item,{children:Object(u.jsx)(h.a.Link,{eventKey:I,children:"Contacts"})})]}),Object(u.jsxs)(x.a.Content,{className:"border-right overflow-auto flex-grow-1",children:[Object(u.jsx)(x.a.Pane,{eventKey:w,children:Object(u.jsx)(v,{})}),Object(u.jsx)(x.a.Pane,{eventKey:I,children:Object(u.jsx)(S,{})})]}),Object(u.jsxs)("div",{className:"p-2 border-top border-right small",children:["Your id: ",Object(u.jsx)("span",{className:"text-muted",children:t})]}),Object(u.jsxs)(l.a,{onClick:function(){return b(!0)},className:"rounded-0",children:["New ",m?"Conversation":"Contact"]})]}),Object(u.jsx)(f.a,{show:d,onHide:O,children:m?Object(u.jsx)(N,{closeModal:O}):Object(u.jsx)(k,{closeModal:O})})]})},B=function(e){var t=e.id;return Object(u.jsx)("div",{className:"d-flex",style:{height:"100vh"},children:Object(u.jsx)(L,{id:t})})},K=function(){var e=O("id"),t=Object(i.a)(e,2),c=t[0],n=t[1];return c?Object(u.jsx)(C,{children:Object(u.jsx)(B,{id:c})}):Object(u.jsx)(b,{onIdSubmit:n})};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(K,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.49d9ad9d.chunk.js.map