(this.webpackJsonpdrugsearch=this.webpackJsonpdrugsearch||[]).push([[0],{21:function(e,t,a){},22:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var r=a(3),s=a.n(r),n=a(12),c=a.n(n),i=(a(21),a(22),a(27)),o=a(15),j=a(13),d=a.p+"static/media/sayKarenWhite.a7e3b86e.png",l=a(1),A=function(){return Object(l.jsxs)("footer",{id:"footer",className:"footerDetails",children:["Website created by:",Object(l.jsx)("a",{href:"http://saykaren.com",target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)("img",{src:d,className:"footerDetails",id:"sayKarenLogo",alt:"sayKaren.com"})}),Object(l.jsx)("a",{href:"https://github.com/saykaren/BreakingBad",target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAfUlEQVR4Ae3OsQ3AIBAEQQJC90opXwhluLB1iIiM5HV2G9/rp6UPpZQSMIAh7QXMagh7AbOaL/sO3OyN3zBAP7i7HJSA8VECRkVZGAXlYQSUixFQQLFXTQzowDz/oaIEjI8SMDZKwRgoASOgBIyAEjACqrS9gCprn1JK6aAHmHKqh5sAKoMAAAAASUVORK5CYII=",className:"footerDetails",id:"codeIcon",alt:"code"})})]})},u=a(9),b=a(28),g=a(11),O=a.n(g),h=a(14),p=function(){var e=Object(h.a)(O.a.mark((function e(t){var a,r,s,n,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.queryKey,r=Object(u.a)(a,3),s=r[1],n=r[2],"&limit=10",e.next=5,fetch("".concat(s).concat(n).concat("&limit=10"));case 5:return c=e.sent,e.abrupt("return",c.json());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAByklEQVRYw+2VMY8BURSFRaIgQSMq0W2UoiVq0Uv04geIXvREL3qJekUvWqLcbLfRrWoVq5AsZ+/OXM8zBvOeN8UmzjRzz305hzHyBQJP/TOhjLKf8SG80xXyr6CJPzX9ik9iYxVskPSnYICjBn7E57AXBXvkzBfMIGtmOr4Kp6om4yNYcewrXbZWiJgraHPoDi907Xhqm4pPY8uRHWvu8LRF2kzBiAM/EbXmKN3ZGpmIL+LAcTXh1dg5oPhofBBLDpsjKLlzdpcnV6+gLj5r/szPi+9VfyQ+jjXHDC92Q96sEdcv6HHIN1LWzLLuU+Ta6unGZ8Qb32JHKqCpJf4dGb2CCQd8IOxaEKaNrYkeHI+qCO+sgOaKOKMKUguOtqaS6yggZ8qWKkgZjsAPsjcLsnQCyiAVcAT6Z/5FAXl9NlVAKuD4hcTdggSdUgOpBMeGY+NSQG5DEaQCjm/OH+5KQYhOegepBMeS50da8gxSCY5jpbdu7BGkMhxdtq6PyNp4A6kEx67r/moB7boeQCrBMaZcELsLUjc4ei+4C1IJjgs9DFLC4gZIJTgWtAFVuApSCY5m5ASpgKM59dzhaE4ySAUczWoSeOopI/oFC/M//SjtumkAAAAASUVORK5CYII=",x=function(e){var t=e.sectionArray,a=e.title;return Object(l.jsx)("div",{className:"drugDetails",children:t&&t.map((function(e,t){return Object(l.jsxs)("div",{children:[" ",a,": ",e]},t)}))})},f=function(){var e=Object(r.useState)("Asprin"),t=Object(u.a)(e,2),a=t[0],s=t[1],n=Object(r.useState)("https://api.fda.gov/drug/label.json?search=openfda.brand_name:"),c=Object(u.a)(n,2),i=c[0],o=(c[1],Object(b.a)(["drug","".concat(i),"".concat(a)],p)),j=Object(r.useState)(""),d=Object(u.a)(j,2),A=d[0],g=d[1];return Object(l.jsxs)("div",{className:"main_component",children:["error"===o.status&&Object(l.jsx)("div",{children:"NO DATA: Error Fetching Data"}),"Loading"===o.status&&Object(l.jsx)("div",{children:"Loading Data...."}),"success"===o.status&&Object(l.jsxs)(l.Fragment,{children:[o.data.results&&Object(l.jsxs)("section",{className:"disclaimer",children:[Object(l.jsx)("img",{src:m,className:"icon",alt:"disclaimer"}),Object(l.jsxs)("a",{href:o.data.meta.terms,target:"_blank",rel:"noopener noreferrer",children:[o.data.meta.disclaimer," "]})," ","Last Updated: ",o.data.meta.last_updated," ",Object(l.jsx)("img",{src:m,className:"icon",alt:"disclaimer"})]}),Object(l.jsxs)("section",{className:"search",children:[Object(l.jsx)("input",{type:"text",value:A,onChange:function(e){return g(e.target.value)},placeholder:"Prescription Drug",id:"drugInputSearch"}),Object(l.jsx)("button",{onClick:function(){return s(A)},children:"SEARCH"})]}),o.data.results&&Object(l.jsxs)("section",{children:[Object(l.jsxs)("h2",{children:["Results: ",a]}),Object(l.jsx)("div",{children:o.data.results.length>0&&o.data.results.map((function(e,t){return Object(l.jsxs)("span",{children:[Object(l.jsx)(x,{sectionArray:e.package_label_principal_display_panel,title:"Description"}),Object(l.jsx)(x,{sectionArray:e.dosage_and_administration,title:"Description"}),Object(l.jsx)(x,{sectionArray:e.indications_and_usage,title:"Description"}),Object(l.jsx)(x,{sectionArray:e.geriatric_use,title:"Geriatric Use"}),Object(l.jsx)(x,{sectionArray:e.pediatric_use,title:"Pediatric Use"}),Object(l.jsx)(x,{sectionArray:e.information_for_patients,title:"Patient Info"}),Object(l.jsx)(x,{sectionArray:e.warnings_and_cautions,title:"Warnings"})]},t)}))})]})]}),"success"===o.status&&o.data.error&&Object(l.jsxs)("section",{className:"main_component",children:[Object(l.jsxs)("h2",{children:[A," ",o.data.error.code&&o.data.error.code," "]}),Object(l.jsx)("div",{children:o.data.error.message&&o.data.error.message})]})]})},y=new i.a({defaultOptions:{queries:{}}}),C=function(){return Object(l.jsxs)(o.a,{client:y,children:[Object(l.jsx)(f,{}),Object(l.jsx)(A,{}),Object(l.jsx)(j.ReactQueryDevtools,{initialIsOpen:!1,position:"bottom-right"})]})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,29)).then((function(t){var a=t.getCLS,r=t.getFID,s=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),r(e),s(e),n(e),c(e)}))};c.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root")),S()}},[[25,1,2]]]);
//# sourceMappingURL=main.d78ab42f.chunk.js.map