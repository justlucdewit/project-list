(function(t){function e(e){for(var i,o,c=e[0],s=e[1],l=e[2],p=0,u=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);d&&d(e);while(u.length)u.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},r={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1654:function(t,e,n){"use strict";n("84d1")},"3ffb":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var i=n("7a23");const r={id:"app-wrapper"},a=Object(i["c"])("div",{id:"app-title"},"Listing of all my portefolio projects:",-1),o=Object(i["c"])("br",null,null,-1),c=Object(i["c"])("br",null,null,-1),s=Object(i["c"])("br",null,null,-1),l={id:"card-container"};function d(t,e,n,d,p,u){const h=Object(i["h"])("Card");return Object(i["e"])(),Object(i["b"])("div",r,[a,o,c,s,Object(i["c"])("div",l,[Object(i["d"])(h,{title:"Articles",image:"https://media.discordapp.net/attachments/375936269907263489/1027949682510532708/unknown.png?width=401&height=401",link:"https://medium.com/@lukedev_",description:"I sometimes like to write about programming things ive learned and experienced in my career and learning journey. <br /><br /> Im still new to writing articles and really enjoy learning to write. <br /><br /> I post these articles to my medium account."}),Object(i["d"])(h,{title:"Luke dev website",image:"https://media.discordapp.net/attachments/375936269907263489/1028064521035726898/unknown.png?width=401&height=401",link:"https://lukedev.nl/",description:"My main website that acts as my portefolio but also hosts most of my projects. <br /><br /> On here you can also find a nice contact form I made for myself, which uses discord webhooks to notify me."}),Object(i["d"])(h,{title:"COD Language",image:"https://media.discordapp.net/attachments/375936269907263489/1028065908238864434/unknown.png",link:"https://github.com/justlucdewit/cod",description:"The COD programming language is a transpiled language that I spend some time on making after getting inspired by the porth series of tsoding on youtube. <br /><br /> The language is a concatinative stack based language which means it is a pretty excentric yet interesting langugae. <br /><br /> Right now the compiler is written in python but I am planning to bootstrap it."}),Object(i["d"])(h,{title:"Galaxy generator",image:"https://media.discordapp.net/attachments/375936269907263489/1028066094843445328/unknown.png?width=401&height=401",link:"https://justlucdewit.github.io/galaxy-map/",description:"This galaxy generator is something I made for a worldbuilding group together with my friend <a href='https://github.com/Mateiadrielrafael'>Matei Adriel</a>. <br /><br /> I started the project and designed the algorithm to randomly pick coordinates with a distribution in the shape of a spiral galaxy, and Matei helped me with the design of the UI."})])])}const p={class:"card"},u={class:"card-header"},h={class:"card-header-title"},b=["src"],g={class:"card-content"},f=["innerHTML"],m={class:"card-footer"},j=["href"];function y(t,e,n,r,a,o){return Object(i["e"])(),Object(i["b"])("div",null,[Object(i["c"])("div",p,[Object(i["c"])("div",u,[Object(i["c"])("h3",h,Object(i["i"])(n.title),1),Object(i["c"])("img",{src:n.image,alt:"",class:"card-img"},null,8,b)]),Object(i["c"])("div",g,[Object(i["c"])("div",{class:"content",innerHTML:n.description},null,8,f)]),Object(i["c"])("footer",m,[Object(i["c"])("a",{href:n.link,class:"card-footer-item",target:"_blank"},"View",8,j)])])])}var O={props:{title:String,description:String,link:String,image:String}},w=(n("1654"),n("6b0d")),v=n.n(w);const k=v()(O,[["render",y],["__scopeId","data-v-8dec75f4"]]);var x=k,I={name:"App",components:{Card:x}};n("5c7c");const M=v()(I,[["render",d]]);var _=M;Object(i["a"])(_).mount("#app")},"5c7c":function(t,e,n){"use strict";n("3ffb")},"84d1":function(t,e,n){}});
//# sourceMappingURL=app.b7af5ba4.js.map