(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{50:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(17),s=c.n(a),i=c(12),j=c(54),o=c(57),l=c(55),d=c(58),b=c(2),u=function(e){var t=e.onIdSubmit,c=Object(n.useRef)();return Object(b.jsx)(j.a,{className:"align-items-center d-flex",style:{height:"100vh"},children:Object(b.jsxs)(o.a,{className:"w-100",onSubmit:function(e){e.preventDefault(),t(c.current.value)},children:[Object(b.jsxs)(o.a.Group,{children:[Object(b.jsx)(o.a.Label,{children:"Enter your id"}),Object(b.jsx)(o.a.Control,{type:"text",ref:c,required:!0})]}),Object(b.jsx)(l.a,{type:"submit",className:"mr-2",children:"Login"}),Object(b.jsx)(l.a,{variant:"secondary",onClick:function(){t(Object(d.a)())},children:"Crete a new id"})]})})},O=(c(49),function(e,t){var c="whatsapp-clone-"+e,r=Object(n.useState)((function(){var e=localStorage.getItem(c);return null!=e?JSON.parse(e):"function"===typeof t?t():t})),a=Object(i.a)(r,2),s=a[0],j=a[1];return Object(n.useEffect)((function(){localStorage.setItem(c,JSON.stringify(s))}),[c,s]),[s,j]}),x=(c(50),c(60)),h=c(59),f=c(56),v=function(){return Object(b.jsx)("div",{children:"Conversations"})},m=c(40),p=Object(n.createContext)(),y=function(){return Object(n.useContext)(p)},C=function(e){var t=e.children,c=O("contacts",[]),n=Object(i.a)(c,2),r=n[0],a=n[1];return Object(b.jsx)(p.Provider,{value:{contacts:r,createContact:function(e,t){a((function(c){return[].concat(Object(m.a)(c),[{id:e,name:t}])}))}},children:t})},N=c(61),g=function(){var e=y().contacts;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(N.a,{variant:"flush",children:e.map((function(e){return Object(b.jsx)(N.a.Item,{style:{color:"black"},children:e.name},e.id)}))})})},S=function(){return Object(b.jsx)("div",{style:{color:"black"},children:"New-Conversation-Modal"})},w=function(e){var t=e.closeModal,c=y().createContact,r=Object(n.useRef)(),a=Object(n.useRef)();return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{style:{color:"black"},children:[Object(b.jsx)(f.a.Header,{closeButton:!0,children:"Create Contact"}),Object(b.jsx)(f.a.Body,{children:Object(b.jsxs)(o.a,{onSubmit:function(e){e.preventDefault(),c(r.current.value,a.current.value),t()},children:[Object(b.jsxs)(o.a.Group,{children:[Object(b.jsx)(o.a.Label,{children:"Id"}),Object(b.jsx)(o.a.Control,{type:"text",ref:r,required:!0})]}),Object(b.jsxs)(o.a.Group,{children:[Object(b.jsx)(o.a.Label,{children:"Name"}),Object(b.jsx)(o.a.Control,{type:"text",ref:a,required:!0})]}),Object(b.jsx)(l.a,{type:"submit",children:"Create"})]})})]})})},k="conversations",I="contacts",L=function(e){var t=e.id,c=Object(n.useState)(k),r=Object(i.a)(c,2),a=r[0],s=r[1],j=Object(n.useState)(!1),o=Object(i.a)(j,2),d=o[0],u=o[1],O=function(){u(!1)},m=a===k;return Object(b.jsxs)("div",{style:{width:"250px"},className:"d-flex flex-column",children:[Object(b.jsxs)(x.a.Container,{activeKey:a,onSelect:s,children:[Object(b.jsxs)(h.a,{variant:"tabs",className:"justify-content-center",children:[Object(b.jsx)(h.a.Item,{children:Object(b.jsx)(h.a.Link,{eventKey:k,children:"Conversations"})}),Object(b.jsx)(h.a.Item,{children:Object(b.jsx)(h.a.Link,{eventKey:I,children:"Contacts"})})]}),Object(b.jsxs)(x.a.Content,{className:"border-right overflow-auto flex-grow-1",children:[Object(b.jsx)(x.a.Pane,{eventKey:k,children:Object(b.jsx)(v,{})}),Object(b.jsx)(x.a.Pane,{eventKey:I,children:Object(b.jsx)(g,{})})]}),Object(b.jsxs)("div",{className:"p-2 border-top border-right small",children:["Your id: ",Object(b.jsx)("span",{className:"text-muted",children:t})]}),Object(b.jsxs)(l.a,{onClick:function(){return u(!0)},className:"rounded-0",children:["New ",m?"Conversation":"Contact"]})]}),Object(b.jsx)(f.a,{show:d,onHide:O,children:m?Object(b.jsx)(S,{closeModal:O}):Object(b.jsx)(w,{closeModal:O})})]})},K=function(e){var t=e.id;return Object(b.jsx)("div",{className:"d-flex",style:{height:"100vh"},children:Object(b.jsx)(L,{id:t})})},M=function(){var e=O("id"),t=Object(i.a)(e,2),c=t[0],n=t[1];return c?Object(b.jsx)(C,{children:Object(b.jsx)(K,{id:c})}):Object(b.jsx)(u,{onIdSubmit:n})};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(M,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.3265247b.chunk.js.map