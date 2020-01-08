(this["webpackJsonpmohnishkalia-github-io"]=this["webpackJsonpmohnishkalia-github-io"]||[]).push([[0],{12:function(e,a,t){e.exports=t(19)},19:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),c=t.n(l),s=t(1),i=t(2),o=t(4),m=t(3),d=t(7),u=t(5),h=t(10),p=t.n(h),v=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={checked:!0},t.handleChange=t.handleChange.bind(Object(d.a)(t)),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState({checked:e});var a=document.getElementById("theme");a?a.remove():this.createLight()}},{key:"createLight",value:function(){var e,a=document.createElement("link");a.href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/litera/bootstrap.min.css",a.id="theme",a.rel="stylesheet",a.crossOrigin="anonymous",null===(e=document.querySelector("head"))||void 0===e||e.append(a)}},{key:"componentDidMount",value:function(){var e=document.querySelector("body"),a=document.getElementById("navbar");e.setAttribute("data-offset",String(a.offsetHeight+15))}},{key:"render",value:function(){return r.a.createElement("nav",{id:"navbar",className:"navbar navbar-expand-md navbar-dark bg-danger sticky-top mb-3"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand",href:"https://github.com/MohnishKalia"},"Mohnish Kalia"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{className:"navbar-nav navbar-right ml-auto"},r.a.createElement("a",{className:"nav-item nav-link",href:"#cards"},"Past Projects"),r.a.createElement("a",{className:"nav-item nav-link",href:"#iam"},"I am..."),r.a.createElement("div",{className:"dropdown"},r.a.createElement("a",{className:"nav-item nav-link dropdown-toggle","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"},"Proficiencies"),r.a.createElement("div",{className:"dropdown-menu"},r.a.createElement("a",{className:"dropdown-item",href:"#backend"},"Backend"),r.a.createElement("a",{className:"dropdown-item",href:"#webdevkit"},"Web Devkit"),r.a.createElement("a",{className:"dropdown-item",href:"#scripting"},"Scripting"))),r.a.createElement("a",{className:"nav-item nav-link",href:"#edu"},"Education"),r.a.createElement("a",{className:"nav-item nav-link",href:"#extra"},"..."),r.a.createElement("a",{className:"nav-item nav-link",href:"#footer"},"Contact"),r.a.createElement("form",{className:"form-inline"},r.a.createElement("span",{className:"navbar-text ml-0 ml-sm-3 mr-3 font-weight-bold"},"Dark Mode"),r.a.createElement(p.a,{onChange:this.handleChange,checked:this.state.checked}))))))}}]),a}(n.Component),f=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},this.props.children)}}]),a}(n.Component),E=t(11),b=t(6),g=t.n(b),N=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).headers={repo:"Repository",ref:"Reference Notes",proj:"Project"},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.data,a=e.type,t=e.title,n=e.description,l=e.repoPath,c=e.notesPath;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},this.headers[a]),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t),r.a.createElement("p",{className:"card-text"},n)),r.a.createElement("div",{className:"card-footer"},l&&r.a.createElement("a",{href:l+"index.html",className:"card-link"},"Repo Page"),c&&r.a.createElement("a",{href:c,className:"card-link"},"View Notes")))}}]),a}(n.Component),k=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.data,a=e.name,t=e.description,n=e.confidence;return r.a.createElement("div",{className:"media my-4 col-md-6"},r.a.createElement("img",{src:"./lib/".concat(a,".png"),className:"align-self-center mr-3",alt:"Loading...",width:"128"}),r.a.createElement("div",{className:"media-body"},r.a.createElement("h5",{className:"mt-0"},a),t&&r.a.createElement("p",null,t),r.a.createElement("div",{className:"progress",style:{height:30}},r.a.createElement("div",{className:"progress-bar",style:{width:"".concat(n/5*100,"%")},role:"progressbar"},"".concat(n,"/5")))))}}]),a}(n.Component),y=function(){return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(x,null),r.a.createElement(C,null),r.a.createElement(M,null),r.a.createElement(S,null),r.a.createElement(A,null))},w=function(e){var a=e.text;return r.a.createElement("h3",{className:"col-md-12"},a)},j=function(e){var a=e.heading,t=e.description;return r.a.createElement("li",{className:"list-group-item"},r.a.createElement("h5",{className:"mb-1"},a),r.a.createElement("p",{className:"mb-1 text-muted"},t))},O=function(){return r.a.createElement("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert"},r.a.createElement("strong",null,"Warning! This site is under constuction.")," Content within is not reflective of finished product.",r.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},x=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={cards:[]},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e,a;return g.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.awrap(fetch("./cards.json"));case 2:return e=t.sent,t.next=5,g.a.awrap(e.json());case 5:a=t.sent,this.setState({cards:a});case 7:case"end":return t.stop()}}),null,this)}},{key:"getDecks",value:function(){var e=this.state.cards,a=[[]],t=!0,n=!1,l=void 0;try{for(var c,s=e.entries()[Symbol.iterator]();!(t=(c=s.next()).done);t=!0){var i=c.value,o=Object(E.a)(i,2),m=o[0],d=o[1];a[Math.floor(m/3)].push(r.a.createElement(N,{data:d,key:d.title}))}}catch(u){n=!0,l=u}finally{try{t||null==s.return||s.return()}finally{if(n)throw l}}return a.map((function(e){return r.a.createElement("div",{className:"col-md-12 mb-4"},r.a.createElement("div",{className:"card-deck"},e))}))}},{key:"render",value:function(){return r.a.createElement("div",{id:"cards",className:"row"},this.getDecks())}}]),a}(n.Component),C=function(){return r.a.createElement("div",{id:"iam",className:"row mb-4"},r.a.createElement(w,{text:"I Am..."}),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement(j,{heading:"17 years old",description:"Looking towards college and a career"}),r.a.createElement(j,{heading:"Full-stack developer",description:"Hands on with MVC, MERN"}))))},M=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={profs:[]},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e,a;return g.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.awrap(fetch("./profs.json"));case 2:return e=t.sent,t.next=5,g.a.awrap(e.json());case 5:a=t.sent,this.setState({profs:a});case 7:case"end":return t.stop()}}),null,this)}},{key:"getMedia",value:function(e){return this.state.profs.filter((function(a){return a.type===e})).map((function(e){return r.a.createElement(k,{data:e,key:e.name})}))}},{key:"render",value:function(){var e="backend",a="webdevkit",t="scripting";return r.a.createElement("div",{id:"profs"},r.a.createElement("div",{id:e,className:"row"},r.a.createElement(w,{text:"Backend"}),this.getMedia(e)),r.a.createElement("div",{id:a,className:"row"},r.a.createElement(w,{text:"Web Devkit"}),this.getMedia(a)),r.a.createElement("div",{id:t,className:"row"},r.a.createElement(w,{text:"Scripting"}),this.getMedia(t)))}}]),a}(n.Component),S=function(){return r.a.createElement("div",{id:"edu",className:"row"},r.a.createElement(w,{text:"Education"}),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement(j,{heading:"Brookfield Central High School",description:"General studies and LAUNCH, 2020"}),r.a.createElement(j,{heading:"Marquette University",description:"COSC 2100 Data Structures and Algorithms"}))))},A=function(){return r.a.createElement("div",{id:"extra"},r.a.createElement("div",{className:"jumbotron my-4"},r.a.createElement("h1",{className:"display-4"},"Hello, everybody!"),r.a.createElement("p",{className:"lead"},"One of the most fun ways to manipulate a web page is by changing some key elements"),r.a.createElement("hr",null),r.a.createElement("p",null,"If you wish, click the button below to change the tab's icon."),r.a.createElement("p",{className:"lead"},r.a.createElement("button",{id:"switch",className:"btn btn-primary btn-lg",disabled:!0},"Currently Under Construction"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"alert alert-info h-100",role:"alert"},r.a.createElement("h4",{className:"alert-heading"},"If you can see this, my webpage worked!"),r.a.createElement("p",null,"Just for fun, here is a testing link for ",r.a.createElement("a",{href:"https://latinlexicon.org/",target:"_blank",rel:"noopener noreferrer",className:"alert-link"},"Latin Lexicon")," within the alert."),r.a.createElement("hr",null),r.a.createElement("p",{className:"mb-0"},"arma virumque can\u014d, Tr\u014diae qu\u012b pr\u012bmus ab \u014dr\u012bs",r.a.createElement("br",null),"\u012ataliam f\u0101t\u014d profugus L\u0101v\u012bniaque v\u0113nit",r.a.createElement("br",null),"l\u012bt\u014fra, multum ille et terr\u012bs iact\u0101tus et alt\u014d",r.a.createElement("br",null),"v\u012b superum, saevae memorem I\u016bn\u014dnis ob \u012bram"),r.a.createElement("hr",null),r.a.createElement("p",{className:"mb-0"},"Remember that the most elegant solutions are (sometimes) the best.",r.a.createElement("br",null),"Working on the progress."))),r.a.createElement("div",{className:"col-md-6 mt-4 mt-sm-0"},r.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},r.a.createElement("iframe",{className:"embed-reponsive-item",src:"https://www.youtube.com/embed/PsO6ZnUZI0g",title:"stronger"})))))},P=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{id:"footer",className:"my-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h3",{className:"text-uppercase"},"Mohnish Kalia"),r.a.createElement("p",{className:"text-muted"},"Please check the links for further information.",r.a.createElement("br",null),"Do not hesitate to reachout."),r.a.createElement("p",{className:"text-muted"},"My email is: ",r.a.createElement("a",{href:"mailto:mohnish.kalia@gmail.com"},"mohnish.kalia@gmail.com"))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h3",{className:"text-uppercase"},"Helpful Resources"),r.a.createElement("ul",{className:"list-unstyled text-small"},r.a.createElement("li",null,r.a.createElement("a",{className:"text-muted",href:"https://beastscouttest.netlify.com"},"BEAST Scouting")),r.a.createElement("li",null,r.a.createElement("a",{className:"text-muted",href:"https://shiffman.net"},"Helpful JS Teacher")),r.a.createElement("li",null,r.a.createElement("a",{className:"text-muted",href:"https://github.com/MohnishKalia"},"GitHub Profile")),r.a.createElement("li",null,r.a.createElement("a",{className:"text-muted",href:"https://docs.oracle.com/en/java/javase/13/docs/api/index.html"},"Java 13 API")),r.a.createElement("li",null,r.a.createElement("a",{className:"text-muted",href:"https://developer.mozilla.org/en-US/docs/Web"},"MDN")))),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("p",{className:"text-muted"},"This website and all content authored by Mohnish Kalia within is open source."))))}}]),a}(n.Component),W=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(v,null),r.a.createElement(f,null,r.a.createElement(y,null),r.a.createElement(P,null)))},D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(W,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");D?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):I(a,e)}))}}()}},[[12,1,2]]]);
//# sourceMappingURL=main.2b622cd0.chunk.js.map