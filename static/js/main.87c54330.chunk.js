(this["webpackJsonpmohnishkalia-github-io"]=this["webpackJsonpmohnishkalia-github-io"]||[]).push([[0],{17:function(e,t,a){e.exports=a(29)},28:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),i=a.n(c),o=a(2),s=a(3),l=a(5),m=a(4),d=a(8),u=a(6),h=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},this.props.children)}}]),t}(n.Component),p=a(15),v=a.n(p),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={checked:!0,scrollProgress:0},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState({checked:e});var t=document.getElementById("theme");t?t.remove():this.createLight()}},{key:"createLight",value:function(){var e,t=document.createElement("link");t.href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/litera/bootstrap.min.css",t.id="theme",t.rel="stylesheet",t.crossOrigin="anonymous",null===(e=document.querySelector("head"))||void 0===e||e.append(t)}},{key:"scrollPercent",value:function(e){return e.scrollTop/(e.scrollHeight-e.clientHeight)*100}},{key:"componentDidMount",value:function(){var e=this,t=document.querySelector("body"),a=document.getElementById("navbar");t.setAttribute("data-offset",String(a.offsetHeight+15));var n=document.documentElement;window.onscroll=function(){return e.setState({scrollProgress:e.scrollPercent(n)})}}},{key:"render",value:function(){return r.a.createElement("div",{className:"mb-3 sticky-top"},r.a.createElement("nav",{id:"navbar",className:"navbar navbar-expand-md navbar-dark bg-danger"},r.a.createElement(h,null,r.a.createElement("a",{className:"navbar-brand",href:"#"},"Mohnish Kalia"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{className:"navbar-nav navbar-right ml-auto"},r.a.createElement("a",{className:"nav-item nav-link",href:"#cards"},"Past Projects"),r.a.createElement("a",{className:"nav-item nav-link",href:"#iam"},"I am..."),r.a.createElement("div",{className:"dropdown"},r.a.createElement("a",{className:"nav-item nav-link dropdown-toggle","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"},"Proficiencies"),r.a.createElement("div",{className:"dropdown-menu"},r.a.createElement("a",{className:"dropdown-item",href:"#backend"},"Backend"),r.a.createElement("a",{className:"dropdown-item",href:"#webdevkit"},"Web Devkit"),r.a.createElement("a",{className:"dropdown-item",href:"#scripting"},"Scripting"))),r.a.createElement("a",{className:"nav-item nav-link",href:"#edu"},"Education"),r.a.createElement("a",{className:"nav-item nav-link",href:"#footer"},"Contact"),r.a.createElement("form",{className:"form-inline"},r.a.createElement("span",{className:"navbar-text ml-0 ml-sm-3 mr-3 font-weight-bold"},"Dark Mode"),r.a.createElement(v.a,{onChange:this.handleChange,checked:this.state.checked})))))),r.a.createElement("div",{className:"progress",style:{height:"2px"}},r.a.createElement("div",{className:"progress-bar bg-success",role:"progressbar",style:{width:"".concat(this.state.scrollProgress,"%"),transitionDuration:"0.2s"},"aria-valuenow":this.state.scrollProgress,"aria-valuemin":0,"aria-valuemax":100})))}}]),t}(n.Component),g=a(16),b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).headers={repo:"Repository",ref:"Reference Notes",proj:"Project"},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.type,a=e.title,n=e.description,c=e.repoPath,i=e.notesPath;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},this.headers[t]),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},a),r.a.createElement("p",{className:"card-text"},n)),r.a.createElement("div",{className:"card-footer"},c&&r.a.createElement("a",{href:c+"index.html",className:"card-link"},"Repo Page"),i&&r.a.createElement("a",{href:i,className:"card-link"},"View Notes")))}}]),t}(n.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.name,a=e.description,n=e.confidence;return r.a.createElement("div",{className:"media my-4 col-md-6"},r.a.createElement("img",{src:"./lib/".concat(t,".png"),className:"align-self-center mr-3",alt:"Loading...",width:"128"}),r.a.createElement("div",{className:"media-body"},r.a.createElement("h5",{className:"mt-0"},t),a&&r.a.createElement("p",null,a),r.a.createElement("div",{className:"progress",style:{height:30}},r.a.createElement("div",{className:"progress-bar",style:{width:"".concat(n/5*100,"%")},role:"progressbar"},"".concat(n,"/5")))))}}]),t}(n.Component),k=a(9),y=a(7),N=[{type:"repo",title:"Data Structures",description:"Assignment Java source code + book files for Data Structures @ Marquette University.",repoPath:"/DataStructures/",notesPath:"https://docs.google.com/document/d/e/2PACX-1vQcWbUfrRR6N6h5BxdnzteHXayVCi9nv1hvHtMouggw2LDqTTiv7itdBcaWeXcZQRe8zkZ8B7KZuAT-/pub"},{type:"repo",title:"AP Computer Science A",description:"Collection of Java samples and assignments used and created during my junior year computer science class.",repoPath:"/IndividualWork/",notesPath:"https://docs.google.com/document/d/127zV5BPuIynxdtRpARvU-n5dMDOOjuRxIB88nCfP6ec/pub"},{type:"ref",title:"Code the Way",description:"Notes accrued throughout the CTW 2019 master class. This is more listed text than images.",notesPath:"https://docs.google.com/document/d/e/2PACX-1vQWmHEEKGJrUIU6FswHLYe0v9bzLJQIW6P9e1f1FikISQrFTDie71-aBZKFFINakS8lNKYOu6ZJQb5C/pub"}],w=[{type:"backend",name:"Java",description:"Data structures, algorithms, programming competitions",confidence:4},{type:"backend",name:"CSharp",description:"MVC 5 with .NET and EF6",confidence:3},{type:"webdevkit",name:"Javascript",description:"DOM interaction, REST APIs, async/await, Browser API",confidence:5},{type:"webdevkit",name:"Node.js",description:"API requests, API design, npm, full-stack JSE + deployment",confidence:3},{type:"webdevkit",name:"React",description:"This page is made with React! Working out hooks",confidence:2},{type:"webdevkit",name:"Typescript",description:"Static typing made simple, 2nd nature from JS background",confidence:4},{type:"scripting",name:"Python",description:"Starting with web scrapers, file manipulation, algorithms",confidence:2},{type:"scripting",name:"Coming Soon",description:"This is not ready to be revealed yet...",confidence:5}],j=function(){return r.a.createElement(h,null,r.a.createElement(C,null),r.a.createElement(P,null),r.a.createElement(S,null),r.a.createElement(A,null))},O=function(e){var t=e.text;return r.a.createElement("h3",{className:"col-md-12"},t)},x=function(e){var t=e.heading,a=e.description,n=e.icon;return r.a.createElement("li",{className:"list-group-item"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-9"},r.a.createElement("h5",{className:"mb-1"},t),r.a.createElement("p",{className:"mb-1 text-muted"},a)),r.a.createElement("div",{className:"col-3 text-right"},r.a.createElement(k.a,{icon:n,size:"4x",fixedWidth:!0}))))},C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={cards:N},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"getDecks",value:function(){var e=this.state.cards,t=[[]],a=!0,n=!1,c=void 0;try{for(var i,o=e.entries()[Symbol.iterator]();!(a=(i=o.next()).done);a=!0){var s=i.value,l=Object(g.a)(s,2),m=l[0],d=l[1];t[Math.floor(m/3)].push(r.a.createElement(b,{data:d,key:d.title}))}}catch(u){n=!0,c=u}finally{try{a||null==o.return||o.return()}finally{if(n)throw c}}return t.map((function(e){return r.a.createElement("div",{className:"col-md-12 mb-4"},r.a.createElement("div",{className:"card-deck"},e))}))}},{key:"render",value:function(){return r.a.createElement("div",{id:"cards",className:"row"},this.getDecks())}}]),t}(n.Component),P=function(){return r.a.createElement("div",{id:"iam",className:"row mb-4"},r.a.createElement(O,{text:"I Am..."}),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement(x,{heading:"17 years old",description:"Looking towards college and a career",icon:y.e}),r.a.createElement(x,{heading:"Full-stack developer",description:"Hands on with MVC, MERN",icon:y.c}))))},S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={profs:w},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"getMedia",value:function(e){return this.state.profs.filter((function(t){return t.type===e})).map((function(e){return r.a.createElement(E,{data:e,key:e.name})}))}},{key:"render",value:function(){var e="backend",t="webdevkit",a="scripting";return r.a.createElement("div",{id:"profs"},r.a.createElement("div",{id:e,className:"row"},r.a.createElement(O,{text:"Backend"}),this.getMedia(e)),r.a.createElement("div",{id:t,className:"row"},r.a.createElement(O,{text:"Web Devkit"}),this.getMedia(t)),r.a.createElement("div",{id:a,className:"row"},r.a.createElement(O,{text:"Scripting"}),this.getMedia(a)))}}]),t}(n.Component),A=function(){return r.a.createElement("div",{id:"edu",className:"row mb-4"},r.a.createElement(O,{text:"Education"}),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement(x,{heading:"Brookfield Central High School",description:"General studies and LAUNCH, 2020",icon:y.b}),r.a.createElement(x,{heading:"Marquette University",description:"COSC 2100 Data Structures and Algorithms",icon:y.d}))))},M=a(12),W=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{id:"footer",className:"pt-md-4 pb-4"},r.a.createElement(h,null,r.a.createElement("div",{className:"row"},r.a.createElement(D,{icon:M.a,text:"MohnishKalia",link:"https://github.com/MohnishKalia"}),r.a.createElement(D,{icon:y.a,text:"mohnish.kalia@gmail.com",link:"mailto:mohnish.kalia@gmail.com"}),r.a.createElement(D,{icon:M.b,text:"Mohnish Kalia",link:"https://www.linkedin.com/in/mohnishkalia/"}))))}}]),t}(n.Component),D=function(e){var t=e.icon,a=e.text,n=e.link;return r.a.createElement("div",{className:"col-md my-2 my-md-0 text-center text-muted"},r.a.createElement(k.a,{icon:t,className:"mr-3",size:"2x"}),r.a.createElement("a",{href:n,className:"h5 stretched-link text-reset text-decoration-none"},a))},I=(a(28),function(){return r.a.createElement("div",{className:"app"},r.a.createElement(f,null),r.a.createElement(j,null),r.a.createElement(W,null))}),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(I,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");R?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):T(t,e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.87c54330.chunk.js.map