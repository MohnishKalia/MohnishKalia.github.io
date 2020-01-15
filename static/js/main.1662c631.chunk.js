(this["webpackJsonpmohnishkalia-github-io"]=this["webpackJsonpmohnishkalia-github-io"]||[]).push([[0],{18:function(e,t,a){e.exports=a(31)},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),i=a.n(c),l=a(2),o=a(3),s=a(5),m=a(4),d=a(9),u=a(6),h=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},this.props.children)}}]),t}(n.Component),v=a(16),p=a.n(v),f=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={checked:!0,scrollProgress:0},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState({checked:e});var t=document.getElementById("theme");t?t.remove():this.createLight()}},{key:"createLight",value:function(){var e,t=document.createElement("link");t.href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/litera/bootstrap.min.css",t.id="theme",t.rel="stylesheet",t.crossOrigin="anonymous",null===(e=document.querySelector("head"))||void 0===e||e.append(t)}},{key:"scrollPercent",value:function(e){return e.scrollTop/(e.scrollHeight-e.clientHeight)*100}},{key:"componentDidMount",value:function(){var e=this,t=document.querySelector("body"),a=document.getElementById("navbar");t.setAttribute("data-offset",String(a.offsetHeight+15));var n=document.documentElement;window.onscroll=function(){return e.setState({scrollProgress:e.scrollPercent(n)})}}},{key:"render",value:function(){return r.a.createElement("div",{className:"mb-3 sticky-top"},r.a.createElement("nav",{id:"navbar",className:"navbar navbar-expand-md navbar-dark bg-danger"},r.a.createElement(h,null,r.a.createElement("a",{className:"navbar-brand",href:"#"},"Mohnish Kalia"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{className:"navbar-nav navbar-right ml-auto"},r.a.createElement("a",{className:"nav-item nav-link",href:"#cards"},"Past Projects"),r.a.createElement("a",{className:"nav-item nav-link",href:"#iam"},"I am..."),r.a.createElement("div",{className:"dropdown"},r.a.createElement("a",{className:"nav-item nav-link dropdown-toggle","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"},"Proficiencies"),r.a.createElement("div",{className:"dropdown-menu"},r.a.createElement("a",{className:"dropdown-item",href:"#backend"},"Backend"),r.a.createElement("a",{className:"dropdown-item",href:"#webdevkit"},"Web Devkit"),r.a.createElement("a",{className:"dropdown-item",href:"#scripting"},"Scripting"))),r.a.createElement("a",{className:"nav-item nav-link",href:"#edu"},"Education"),r.a.createElement("a",{className:"nav-item nav-link",href:"#footer"},"Contact"),r.a.createElement("form",{className:"form-inline"},r.a.createElement("span",{className:"navbar-text ml-0 ml-sm-3 mr-3 font-weight-bold"},"Dark Mode"),r.a.createElement(p.a,{onChange:this.handleChange,checked:this.state.checked})))))),r.a.createElement("div",{className:"progress",style:{height:"2px"}},r.a.createElement("div",{className:"progress-bar bg-success",role:"progressbar",style:{width:"".concat(this.state.scrollProgress,"%"),transitionDuration:"0.2s"},"aria-valuenow":this.state.scrollProgress,"aria-valuemin":0,"aria-valuemax":100})))}}]),t}(n.Component),g=a(17),b=a(8),E=a.n(b),k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).headers={repo:"Repository",ref:"Reference Notes",proj:"Project"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.type,a=e.title,n=e.description,c=e.repoPath,i=e.notesPath;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},this.headers[t]),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},a),r.a.createElement("p",{className:"card-text"},n)),r.a.createElement("div",{className:"card-footer"},c&&r.a.createElement("a",{href:c+"index.html",className:"card-link"},"Repo Page"),i&&r.a.createElement("a",{href:i,className:"card-link"},"View Notes")))}}]),t}(n.Component),N=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.name,a=e.description,n=e.confidence;return r.a.createElement("div",{className:"media my-4 col-md-6"},r.a.createElement("img",{src:"./lib/".concat(t,".png"),className:"align-self-center mr-3",alt:"Loading...",width:"128"}),r.a.createElement("div",{className:"media-body"},r.a.createElement("h5",{className:"mt-0"},t),a&&r.a.createElement("p",null,a),r.a.createElement("div",{className:"progress",style:{height:30}},r.a.createElement("div",{className:"progress-bar",style:{width:"".concat(n/5*100,"%")},role:"progressbar"},"".concat(n,"/5")))))}}]),t}(n.Component),w=a(10),y=a(7),j=function(){return r.a.createElement(h,null,r.a.createElement(C,null),r.a.createElement(M,null),r.a.createElement(S,null),r.a.createElement(P,null))},O=function(e){var t=e.text;return r.a.createElement("h3",{className:"col-md-12"},t)},x=function(e){var t=e.heading,a=e.description,n=e.icon;return r.a.createElement("li",{className:"list-group-item"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-9"},r.a.createElement("h5",{className:"mb-1"},t),r.a.createElement("p",{className:"mb-1 text-muted"},a)),r.a.createElement("div",{className:"col-3 text-right"},r.a.createElement(w.a,{icon:n,size:"4x",fixedWidth:!0}))))},C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={cards:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e,t;return E.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,E.a.awrap(fetch("./cards.json"));case 2:return e=a.sent,a.next=5,E.a.awrap(e.json());case 5:t=a.sent,this.setState({cards:t});case 7:case"end":return a.stop()}}),null,this)}},{key:"getDecks",value:function(){var e=this.state.cards,t=[[]],a=!0,n=!1,c=void 0;try{for(var i,l=e.entries()[Symbol.iterator]();!(a=(i=l.next()).done);a=!0){var o=i.value,s=Object(g.a)(o,2),m=s[0],d=s[1];t[Math.floor(m/3)].push(r.a.createElement(k,{data:d,key:d.title}))}}catch(u){n=!0,c=u}finally{try{a||null==l.return||l.return()}finally{if(n)throw c}}return t.map((function(e){return r.a.createElement("div",{className:"col-md-12 mb-4"},r.a.createElement("div",{className:"card-deck"},e))}))}},{key:"render",value:function(){return r.a.createElement("div",{id:"cards",className:"row"},this.getDecks())}}]),t}(n.Component),M=function(){return r.a.createElement("div",{id:"iam",className:"row mb-4"},r.a.createElement(O,{text:"I Am..."}),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement(x,{heading:"17 years old",description:"Looking towards college and a career",icon:y.e}),r.a.createElement(x,{heading:"Full-stack developer",description:"Hands on with MVC, MERN",icon:y.c}))))},S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={profs:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e,t;return E.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,E.a.awrap(fetch("./profs.json"));case 2:return e=a.sent,a.next=5,E.a.awrap(e.json());case 5:t=a.sent,this.setState({profs:t});case 7:case"end":return a.stop()}}),null,this)}},{key:"getMedia",value:function(e){return this.state.profs.filter((function(t){return t.type===e})).map((function(e){return r.a.createElement(N,{data:e,key:e.name})}))}},{key:"render",value:function(){var e="backend",t="webdevkit",a="scripting";return r.a.createElement("div",{id:"profs"},r.a.createElement("div",{id:e,className:"row"},r.a.createElement(O,{text:"Backend"}),this.getMedia(e)),r.a.createElement("div",{id:t,className:"row"},r.a.createElement(O,{text:"Web Devkit"}),this.getMedia(t)),r.a.createElement("div",{id:a,className:"row"},r.a.createElement(O,{text:"Scripting"}),this.getMedia(a)))}}]),t}(n.Component),P=function(){return r.a.createElement("div",{id:"edu",className:"row mb-4"},r.a.createElement(O,{text:"Education"}),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement(x,{heading:"Brookfield Central High School",description:"General studies and LAUNCH, 2020",icon:y.b}),r.a.createElement(x,{heading:"Marquette University",description:"COSC 2100 Data Structures and Algorithms",icon:y.d}))))},A=a(13),W=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{id:"footer",className:"pt-md-4 pb-4"},r.a.createElement(h,null,r.a.createElement("div",{className:"row"},r.a.createElement(D,{icon:A.a,text:"MohnishKalia",link:"https://github.com/MohnishKalia"}),r.a.createElement(D,{icon:y.a,text:"mohnish.kalia@gmail.com",link:"mailto:mohnish.kalia@gmail.com"}),r.a.createElement(D,{icon:A.b,text:"Mohnish Kalia",link:"https://www.linkedin.com/in/mohnishkalia/"}))))}}]),t}(n.Component),D=function(e){var t=e.icon,a=e.text,n=e.link;return r.a.createElement("div",{className:"col-md my-2 my-md-0 text-center text-muted"},r.a.createElement(w.a,{icon:t,className:"mr-3",size:"2x"}),r.a.createElement("a",{href:n,className:"h5 stretched-link text-reset text-decoration-none"},a))},B=(a(30),function(){return r.a.createElement("div",{className:"app"},r.a.createElement(f,null),r.a.createElement(j,null),r.a.createElement(W,null))}),L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(B,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");L?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):R(t,e)}))}}()}},[[18,1,2]]]);
//# sourceMappingURL=main.1662c631.chunk.js.map