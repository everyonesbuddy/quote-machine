(this["webpackJsonpquote-machine"]=this["webpackJsonpquote-machine"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(5),r=n.n(o),u=n(4),s=n.n(u),i=n(6),h=n(2),b=(n(12),n(0)),j="https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";var d=function(){var e=Object(c.useState)("Everything has beauty, but not everyone can see."),t=Object(h.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)("Confucius"),r=Object(h.a)(o,2),u=r[0],d=r[1],f=Object(c.useState)(0),l=Object(h.a)(f,2),p=(l[0],l[1]),O=Object(c.useState)(null),x=Object(h.a)(O,2),w=x[0],m=x[1],v=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,m(c.quotes),console.log(c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){v(j)}),[j]),Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("header",{className:"App-header",children:Object(b.jsxs)("div",{id:"quote-box",children:[Object(b.jsx)("p",{id:"text",children:n}),Object(b.jsx)("h3",{id:"author",children:u}),Object(b.jsx)("a",{href:encodeURI("http://www.twitter.com/intent/tweet?text=".concat(n," -").concat(u)),id:"tweet-quote",children:"Tweet Quote"}),Object(b.jsx)("button",{id:"new-quote",onClick:function(){return function(){var e=Math.floor(Math.random()*w.length);p(e),a(w[e].quote),d(w[e].author)}()},children:"Display Random Quote"})]})})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(d,{})}),document.getElementById("root")),f()}},[[14,1,2]]]);
//# sourceMappingURL=main.30d22e15.chunk.js.map