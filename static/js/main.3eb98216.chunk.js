(this.webpackJsonpnewsapp=this.webpackJsonpnewsapp||[]).push([[0],{34:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(25),r=a.n(s),i=(a(34),a(35),a(7)),l=a(8),o=a(9),b=a(10),j=a(12),d=a(2),h=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsx)("nav",{className:"navbar bg-secondary fixed-top px-2",style:{height:"62px"},children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(j.b,{className:"navbar-brand text-white",to:"/News-Monkey",children:"News Monkey"}),Object(d.jsx)("button",{className:"navbar-toggler border-2 border-white",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasNavbar","aria-controls":"offcanvasNavbar","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"offcanvas offcanvas-end",tabIndex:"-1",id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel",children:[Object(d.jsxs)("div",{className:"offcanvas-header bg-dark text-white",children:[Object(d.jsx)("h5",{className:"offcanvas-title",id:"offcanvasNavbarLabel",children:"News Monkey"}),Object(d.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close"})]}),Object(d.jsxs)("div",{className:"offcanvas-body bg-secondary ",children:[Object(d.jsxs)("ul",{className:"navbar-nav justify-content-end flex-grow-1 pe-3",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(j.b,{className:"nav-link active text-white","aria-current":"page",to:"/",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(j.b,{className:"nav-link text-white",to:"/",children:"About us"})}),Object(d.jsxs)("li",{className:"nav-item dropdown text-white",children:[Object(d.jsx)(j.b,{className:"nav-link dropdown-toggle text-white",to:"/",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Categories"}),Object(d.jsxs)("ul",{className:"dropdown-menu",children:[Object(d.jsx)("li",{children:Object(d.jsx)(j.b,{className:"dropdown-item",to:"/business",children:"Business"})}),Object(d.jsx)("li",{children:Object(d.jsx)(j.b,{className:"dropdown-item",to:"/sports",children:"Sports"})}),Object(d.jsx)("li",{children:Object(d.jsx)(j.b,{className:"dropdown-item",to:"/health",children:"Health"})}),Object(d.jsx)("li",{children:Object(d.jsx)(j.b,{className:"dropdown-item",to:"/science",children:"Science"})}),Object(d.jsx)("li",{children:Object(d.jsx)(j.b,{className:"dropdown-item",to:"/technology",children:"Technology"})})]})]})]}),Object(d.jsxs)("form",{className:"d-flex mt-3",role:"search",children:[Object(d.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(d.jsx)("button",{className:"btn btn-outline-light",type:"submit",children:"Search"})]})]})]})]})})}}]),a}(n.Component),u=a(4),p=a(6),x=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.description,n=e.imgUrl,c=e.url;return Object(d.jsxs)("div",{className:"card",style:{minWidth:"20rem"},children:[Object(d.jsx)("img",{src:n,className:"card-img-top",alt:"..."}),Object(d.jsxs)("div",{className:"card-body ",style:{position:"relative",height:"50%"},children:[Object(d.jsx)("h5",{className:"card-title",children:t}),Object(d.jsx)("p",{className:"card-text",children:a}),Object(d.jsx)("a",{target:"_blank",rel:"noreferrer",href:c,className:"btn btn-sm btn-primary",children:"Read More"})]})]})}}]),a}(n.Component),m=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.handleNext,a=e.handlePrev,n=e.page,c=e.tR,s=e.handlePage,r=e.pageSize,i=Math.ceil(c/r),l=Math.min(i,5),o=Math.max(1,n-Math.floor(l/2)),b=o+l-1;b>i&&(b=i,o=Math.max(1,b-l+1));var j=Array.from({length:l},(function(e,t){var a=o+t;return Object(d.jsx)("button",{className:"btn btn-".concat(n===a?"secondary":"light"," rounded-0 border border-2 px-3"),onClick:function(){s(a)},children:a},a)}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("button",{className:"btn btn-light",disabled:1===n,onClick:a,children:"\u2190 Previous"}),Object(d.jsx)("div",{className:"container d-flex justify-content-center align-items-center",children:j}),Object(d.jsx)("button",{className:"btn btn-light mx-5",disabled:n===Math.ceil(c/r),onClick:t,children:"Next \u2192"})]})}}]),a}(n.Component),O=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"spinner-border text-primary",role:"status",children:Object(d.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}}]),a}(n.Component),f=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).capitalizeFunc=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},n.handlePrev=Object(p.a)(Object(u.a)().mark((function e(){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({page:n.state.page-1}),n.fetchNews();case 2:case"end":return e.stop()}}),e)}))),n.handlePage=function(){var e=Object(p.a)(Object(u.a)().mark((function e(t){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({page:t}),n.fetchNews();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleNext=Object(p.a)(Object(u.a)().mark((function e(){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({page:n.state.page+1}),n.fetchNews();case 2:case"end":return e.stop()}}),e)}))),n.state={articles:[],page:1,loading:!1,totalResults:0},n}return Object(l.a)(a,[{key:"fetchNews",value:function(){var e=Object(p.a)(Object(u.a)().mark((function e(){var t,a,n;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.title="".concat(this.capitalizeFunc(this.props.category)," - NewsMonkey"),t="https://newsapi.org/v2/top-headlines?country=".concat(this.props.country,"&category=").concat(this.props.category,"&apiKey=e9370e871e35409b9ac367be63b85f44&page=").concat(this.state.page,"&pagesize=").concat(this.props.pageSize),this.setState({loading:!0}),e.next=5,fetch(t);case 5:return a=e.sent,e.next=8,a.json();case 8:n=e.sent,this.setState({articles:n.articles,totalResults:n.totalResults,loading:!1});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(p.a)(Object(u.a)().mark((function e(){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.fetchNews();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"container p-3 m-4",children:[Object(d.jsxs)("h2",{className:"text-center mb-3 text-light",children:["Top ",this.capitalizeFunc(this.props.category)," Headlines"]}),Object(d.jsx)("div",{className:"container text-center",children:this.state.loading&&Object(d.jsx)(O,{})}),Object(d.jsx)("div",{className:"d-flex justify-content-center",children:Object(d.jsx)("div",{className:"container d-grid overflow-hidden",style:{gridTemplateColumns:"repeat(auto-fit, minmax(17rem, 1fr))",gridRowGap:"3rem",gridColumnGap:"6rem"},children:!this.state.loading&&this.state.articles.map((function(e){return Object(d.jsx)("div",{className:"col-md-4",children:Object(d.jsx)(x,{title:e.source.name,description:e.title.slice(0,88)+"...",imgUrl:null===e.urlToImage?"https://img.freepik.com/free-vector/question-mark-sign-brush-stroke-trash-style-typography-vector_53876-140880.jpg":e.urlToImage,url:e.url})},e.url)}))})}),Object(d.jsx)("div",{className:"container d-flex align-item-center justify-content-between mt-5",children:Object(d.jsx)(m,{handlePrev:this.handlePrev,handleNext:this.handleNext,page:this.state.page,tR:this.state.totalResults,handlePage:this.handlePage,pageSize:this.props.pageSize})})]})}}]),a}(n.Component);f.defaultProps={pageSize:6,country:"in",category:"general"};var g=a(3);var v=function(){return Object(d.jsxs)(j.a,{children:[Object(d.jsx)("div",{className:"navbar",style:{height:"62px"},children:Object(d.jsx)(h,{})}),Object(d.jsx)("div",{className:"d-flex justify-content-center",children:Object(d.jsx)("div",{className:"container m-5 bg-dark p-4 rounded-5 border border-4 d-flex justify-content-center",style:{boxShadow:".1px .1px 26px black}"},children:Object(d.jsxs)(g.c,{children:[Object(d.jsx)(g.a,{exact:!0,path:"/sports",element:Object(d.jsx)(f,{category:"sports"},"sports")}),Object(d.jsx)(g.a,{exact:!0,path:"/science",element:Object(d.jsx)(f,{category:"science"},"science")}),Object(d.jsx)(g.a,{exact:!0,path:"/general",element:Object(d.jsx)(f,{category:"general"},"general")}),Object(d.jsx)(g.a,{exact:!0,path:"/business",element:Object(d.jsx)(f,{category:"business"},"business")}),Object(d.jsx)(g.a,{exact:!0,path:"/health",element:Object(d.jsx)(f,{category:"health"},"health")}),Object(d.jsx)(g.a,{exact:!0,path:"/technology",element:Object(d.jsx)(f,{category:"technology"},"technology")}),Object(d.jsx)(g.a,{exact:!0,path:"/News-Monkey",element:Object(d.jsx)(f,{category:"general"},"News-Monkey")})]})})})]})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,38)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(v,{})})),y()}},[[37,1,2]]]);
//# sourceMappingURL=main.3eb98216.chunk.js.map