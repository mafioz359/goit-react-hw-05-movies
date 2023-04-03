"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[947],{947:function(e,t,n){n.r(t);var r=n(439),c=n(335),a=n(791),s=n(689),o=n(87),i=n(184);t.default=function(){var e,t,n,u=(0,s.UO)(),l=(0,a.useState)({}),p=(0,r.Z)(l,2),v=p[0],h=p[1],d=(0,s.TH)(),f=(0,a.useRef)(null!==(e=null===(t=d.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies");return(0,a.useEffect)((function(){(0,c.MH)(u.movieId).then((function(e){return h(e)}))}),[u.movieId]),(0,i.jsxs)("div",{children:[(0,i.jsx)(o.rU,{to:f.current,children:"\u041d\u0430\u0437\u0430\u0434"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(v.poster_path),alt:"".concat(v.original_title)})}),(0,i.jsx)("li",{children:(0,i.jsx)("span",{children:v.title})}),(0,i.jsx)("li",{children:(0,i.jsx)("p",{})}),(0,i.jsxs)("li",{children:["Overview",(0,i.jsx)("span",{children:v.overview})]}),(0,i.jsxs)("li",{children:["Genres",(0,i.jsx)("span",{children:null===(n=v.genres)||void 0===n?void 0:n.map((function(e){return e.name}))}),";"]})]}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(o.OL,{to:"cast",children:"Cast"})}),(0,i.jsx)("li",{children:(0,i.jsx)(o.OL,{to:"reviews",children:"Reviews"})})]}),(0,i.jsx)(a.Suspense,{fallback:(0,i.jsx)("div",{children:"Loading..."}),children:(0,i.jsx)(s.j3,{})})]})}},335:function(e,t,n){n.d(t,{JP:function(){return l},MH:function(){return p},fq:function(){return h},gr:function(){return u},im:function(){return d}});var r=n(861),c=n(757),a=n.n(c),s=n(243),o="465b4aa22561626299c60e60f8601e8f",i="\nhttps://api.themoviedb.org/3/movie/",u=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat("https://api.themoviedb.org/3/trending/all/day?","page=").concat(1,"&api_key=").concat(o),e.prev=1,e.next=4,s.Z.get("".concat(n));case 4:return r=e.sent,c=r.data.results,e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat("\nhttps://api.themoviedb.org/3/search/movie","?api_key=").concat(o,"&query=").concat(t,"&language=en"),e.prev=1,e.next=4,s.Z.get("".concat(n));case 4:return r=e.sent,c=r.data.results,e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();function p(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function e(t){var n,r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(i).concat(t,"?api_key=").concat(o,"&language=en-US"),console.log(n),e.prev=2,e.next=5,s.Z.get("".concat(n));case 5:return r=e.sent,c=r.data,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}l();var h=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="\n    ".concat("\nhttps://api.themoviedb.org/3/movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"),e.prev=1,e.next=4,s.Z.get("".concat(n));case 4:return r=e.sent,c=r.data.cast,e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="\n        ".concat("https://api.themoviedb.org/3/movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US\n      "),e.prev=1,e.next=4,s.Z.get("".concat(n));case 4:return r=e.sent,c=r.data.results,e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=947.5a125556.chunk.js.map