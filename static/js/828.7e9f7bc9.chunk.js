"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[828],{2828:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(5861),u=n(885),i=n(7757),a=n.n(i),c=n(501),s=n(2791),o=n(4160),l=n(184),f=function(e){var t=e.handleSubmit,n=e.onChange,r=e.query;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(o.l0,{onSubmit:t,children:[(0,l.jsx)(o.II,{type:"text",name:"query",value:r,onChange:function(e){return n(e.target.value)}}),(0,l.jsx)("button",{type:"submit",children:"Search"})]})})},h=n(6871),d=n(1221),v=function(){var e,t=(0,s.useState)(!1),n=(0,u.Z)(t,2),i=n[0],o=n[1],v=(0,s.useState)(""),m=(0,u.Z)(v,2),p=m[0],g=m[1],x=(0,c.lr)(),j=(0,u.Z)(x,2),y=j[0],w=j[1],_=(0,h.TH)(),b=null!==(e=y.get("query"))&&void 0!==e?e:"";(0,s.useEffect)((function(){if(b){var e=function(){var e=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,d.XT)(b).then((function(e){return o(e.data.results)})).catch((function(e){return new Error(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[b]);return(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{children:(0,l.jsx)(f,{query:p,handleSubmit:function(e){e.preventDefault();var t=e.target.elements.query.value,n=t.toLowerCase();w(t?{query:n}:{}),e.target.reset()},onChange:g,changeFilter:function(e){w(""!==e?{filter:e}:{})}})}),i&&i.map((function(e){return(0,l.jsx)("li",{children:(0,l.jsx)(c.OL,{to:"/movies/".concat(e.id),state:{from:_},children:e.title})},e.id)}))]})}}}]);
//# sourceMappingURL=828.7e9f7bc9.chunk.js.map