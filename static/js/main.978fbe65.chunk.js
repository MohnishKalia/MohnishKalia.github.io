(this["webpackJsonpmohnishkalia-github-io"]=this["webpackJsonpmohnishkalia-github-io"]||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),s=a(1),i=a(2),o=a(4),m=a(3),u=a(7),d=a(5),h=a(10),p=a.n(h),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={checked:!0},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState({checked:e});var t=document.getElementById("theme");t?t.remove():this.createLight()}},{key:"createLight",value:function(){var e,t=document.createElement("link");t.href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/litera/bootstrap.min.css",t.id="theme",t.rel="stylesheet",t.crossOrigin="anonymous",null===(e=document.querySelector("body"))||void 0===e||e.append(t)}},{key:"render",value:function(){return r.a.createElement("nav",{id:"navbar",className:"navbar navbar-expand-md navbar-dark bg-danger sticky-top mb-3"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand",href:"https://github.com/MohnishKalia"},"Mohnish Kalia"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{className:"navbar-nav navbar-right ml-auto"},r.a.createElement("a",{className:"nav-item nav-link",href:"#cards"},"Past Projects"),r.a.createElement("a",{className:"nav-item nav-link",href:"#iam"},"I am..."),r.a.createElement("a",{className:"nav-item nav-link",href:"#profs"},"Proficiencies"),r.a.createElement("a",{className:"nav-item nav-link",href:"#edu"},"Education"),r.a.createElement("a",{className:"nav-item nav-link",href:"#footer"},"Contact"),r.a.createElement("form",{className:"form-inline"},r.a.createElement("span",{className:"navbar-text ml-0 ml-sm-3 mr-3 font-weight-bold"},"Dark Mode"),r.a.createElement(p.a,{onChange:this.handleChange,checked:this.state.checked}))))))}}]),t}(n.Component),b=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},this.props.children)}}]),t}(n.Component),f=a(6),E=a.n(f),g=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).headers={repo:"Repository",ref:"Reference Notes",proj:"Project"},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.type,a=e.title,n=e.description,c=e.repoPath,l=e.notesPath;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},this.headers[t]),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},a),r.a.createElement("p",{className:"card-text"},n)),r.a.createElement("div",{className:"card-footer"},c&&r.a.createElement("a",{href:c+"index.html",className:"card-link"},"Repo Page"),l&&r.a.createElement("a",{href:l,className:"card-link"},"View Notes")))}}]),t}(n.Component),N=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.name,a=e.description,n=e.confidence;return r.a.createElement("div",{className:"media my-4 col-md-6"},r.a.createElement("img",{src:"./lib/".concat(t,".png"),className:"align-self-center mr-3",alt:"Loading...",width:"128"}),r.a.createElement("div",{className:"media-body"},r.a.createElement("h5",{className:"mt-0"},t),a&&r.a.createElement("p",null,a),r.a.createElement("div",{className:"progress",style:{height:30}},r.a.createElement("div",{className:"progress-bar",style:{width:"".concat(n/5*100,"%")},role:"progressbar"},"".concat(n,"/5")))))}}]),t}(n.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(j,null),r.a.createElement(O,null),r.a.createElement(x,null),r.a.createElement(C,null))}}]),t}(n.Component),y=function(e){var t=e.text;return r.a.createElement("h3",{className:"col-md-12"},t)},w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={cards:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t;return E.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,E.a.awrap(fetch("./cards.json"));case 2:return e=a.sent,a.next=5,E.a.awrap(e.json());case 5:t=a.sent,this.setState({cards:t});case 7:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{id:"cards",className:"card-deck"},this.state.cards.map((function(e){return r.a.createElement(g,{data:e,key:e.title})})))))}}]),t}(n.Component),j=function(){return r.a.createElement("div",{id:"iam",className:"row"},r.a.createElement(y,{text:"I Am... PLACEHOLDER"}))},O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={profs:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t;return E.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,E.a.awrap(fetch("./profs.json"));case 2:return e=a.sent,a.next=5,E.a.awrap(e.json());case 5:t=a.sent,this.setState({profs:t});case 7:case"end":return a.stop()}}),null,this)}},{key:"getMedia",value:function(e){return this.state.profs.filter((function(t){return t.type===e})).map((function(e){return r.a.createElement(N,{data:e,key:e.name})}))}},{key:"render",value:function(){return r.a.createElement("div",{id:"profs"},r.a.createElement("div",{id:"backend",className:"row"},r.a.createElement(y,{text:"Backend"}),this.getMedia("backend")),r.a.createElement("div",{id:"webdevkit",className:"row"},r.a.createElement(y,{text:"Web Devkit"}),this.getMedia("webdevkit")),r.a.createElement("div",{id:"scripting",className:"row"},r.a.createElement(y,{text:"Scripting"}),this.getMedia("scripting")))}}]),t}(n.Component),x=function(){return r.a.createElement("div",{id:"edu",className:"row"},r.a.createElement(y,{text:"Education PLACEHOLDER"}))},C=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"jumbotron my-4"},r.a.createElement("h1",{className:"display-4"},"Hello, everybody!"),r.a.createElement("p",{className:"lead"},"One of the most fun ways to manipulate a web page is by changing some key elements"),r.a.createElement("hr",null),r.a.createElement("p",null,"If you wish, click the button below to change the tab's icon."),r.a.createElement("p",{className:"lead"},r.a.createElement("button",{id:"switch",className:"btn btn-primary btn-lg",disabled:!0},"Currently Under Construction"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"alert alert-info h-100",role:"alert"},r.a.createElement("h4",{className:"alert-heading"},"If you can see this, my webpage worked!"),r.a.createElement("p",null,"Just for fun, here is a testing link for ",r.a.createElement("a",{href:"https://latinlexicon.org/",target:"_blank",rel:"noopener noreferrer",className:"alert-link"},"Latin Lexicon")," within the alert."),r.a.createElement("hr",null),r.a.createElement("p",{className:"mb-0"},"arma virumque can\u014d, Tr\u014diae qu\u012b pr\u012bmus ab \u014dr\u012bs",r.a.createElement("br",null),"\u012ataliam f\u0101t\u014d profugus L\u0101v\u012bniaque v\u0113nit",r.a.createElement("br",null),"l\u012bt\u014fra, multum ille et terr\u012bs iact\u0101tus et alt\u014d",r.a.createElement("br",null),"v\u012b superum, saevae memorem I\u016bn\u014dnis ob \u012bram"),r.a.createElement("hr",null),r.a.createElement("p",{className:"mb-0"},"Remember that the most elegant solutions are (sometimes) the best.",r.a.createElement("br",null),"Working on the progress."))),r.a.createElement("div",{className:"col-md-6 mt-4 mt-sm-0"},r.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},r.a.createElement("iframe",{className:"embed-reponsive-item",src:"https://www.youtube.com/embed/PsO6ZnUZI0g",title:"stronger"})))))}}]),t}(n.Component),M=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{id:"footer",className:"my-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h3",{className:"text-uppercase"},"Mohnish Kalia"),r.a.createElement("p",{className:"text-muted"},"Please check the links for further information.",r.a.createElement("br",null),"Do not hesitate to reachout."),r.a.createElement("p",{className:"text-muted"},"My email is: ",r.a.createElement("a",{href:"mailto:mohnish.kalia@gmail.com"},"mohnish.kalia@gmail.com"))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h3",{className:"text-uppercase"},"Helpful Resources"),r.a.createElement("ul",{className:"list-unstyled text-small"},r.a.createElement("li",null,r.a.createElement("a",{className:"text-muted",href:"https://beastscouttest.netlify.com"},"BEAST Scouting")),r.a.createElement("li",null,r.a.createElement("a",{className:"text-muted",href:"https://shiffman.net"},"Helpful JS Teacher")),r.a.createElement("li",null,r.a.createElement("a",{className:"text-muted",href:"https://github.com/MohnishKalia"},"GitHub Profile")),r.a.createElement("li",null,r.a.createElement("a",{className:"text-muted",href:"https://docs.oracle.com/en/java/javase/13/docs/api/index.html"},"Java 13 API")),r.a.createElement("li",null,r.a.createElement("a",{className:"text-muted",href:"https://developer.mozilla.org/en-US/docs/Web"},"MDN")))),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("p",{className:"text-muted"},"This website and all content authored by Mohnish Kalia within is open source."))))}}]),t}(n.Component),P=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(v,null),r.a.createElement(b,null,r.a.createElement(k,null),r.a.createElement(M,null)))},A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(P,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");A?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):S(t,e)}))}}()}},[[11,1,2]]]);
//# sourceMappingURL=main.978fbe65.chunk.js.map