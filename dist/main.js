!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=37)}([function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));var r=n(1);n(2);let o=(e,t,n,r={})=>{let o=document.createElement(e);return Object.keys(r).forEach(e=>{""!==e&&(o[e]=r[e])}),o.classList.add(t),n.appendChild(o),o},i=e=>{document.querySelector(".current")&&document.querySelector(".current").remove();let t=document.querySelector(".uploader-container"),n=o("div",e,t,{id:e});return n.classList.add("current"),n},c=(e,t)=>{let n=Object.keys(e)[0],r=Object.keys(e)[1],c=i(n);o("button","makeNew",c,{innerText:"Make New"}).addEventListener("click",t=>{let o=i(n),c=Object.keys(e[Object.keys(e)[0]][0]),a={};c.forEach(e=>{a[e]=e});let p=s(a,t);l(n,r,a,p),u(r);o.appendChild(p)}),e[n].map(e=>{let t=s(e);a(n,e,t,r);c.appendChild(t)})},s=(e,t="")=>{let n=document.createElement("form"),r=Object.keys(e),i=o("div","input-wrapper",n);for(let t=0;t<r.length;t++)"created_at"!==r[t]&&"updated_at"!==r[t]&&o("input",r[t],i,{name:r[t],id:r[t]+e.id,value:e[r[t]]||r[t]});return n};const a=(e,t,n,i)=>{let s=o("div","buttons",n);o("button","update-btn",s,{innerText:"edit"}).addEventListener("click",n=>{n.preventDefault(),Object(r.g)(n,t,e,i)}),o("button","destroy-btn",s,{innerText:"delete"}).addEventListener("click",async n=>{if(confirm("are you sure you wanna destroy "+(t.title||t.name)))Object(r.a)(n,t,e);else{n.preventDefault();let e=await Object(r.c)("projects");c(Object.keys(e)[0],e,n)}}),o("button","getOneBtn",s,{innerText:"goto"}).addEventListener("click",n=>{Object(r.b)(n,t,e)});"traits"!==e&&o("input","imgUpload",s,{name:"image",id:e+"Img"+t.id,type:"file"});if("traits"!==e&&"trait"!==e){o("img",e+"-pic"+t.id,s,{src:"./src/img/"+t.local_url})}return s},l=(e,t,n,i)=>{let c=o("div","buttons",i);return o("button","getOneBtn",c,{innerText:"add new"}).addEventListener("click",o=>{Object(r.e)(o,e,n,t)}),c},u=async e=>{let t="technologies"===e?"name":"title",n=await Object(r.c)(e),i=document.querySelector(".buttons");n[e].map(e=>{o("input","chkbox",i,{type:"checkbox",value:e.id});let n=document.createTextNode(e[t]);i.appendChild(n)})}},function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return s})),n.d(t,"a",(function(){return a})),n.d(t,"g",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"f",(function(){return d}));var r=n(0);let o="https://portfolio-server-mick.herokuapp.com",i=async e=>{return await fetch(o+"/"+e).then(e=>e.json()).then(e=>e)},c=async e=>{return await fetch(o+"/"+e).then(e=>e.json()).then(e=>e)};const s=async(e,t,n,r)=>{e.preventDefault();let i=Object.keys(n),c=new FormData;for(let e=0;e<i.length;e++)"id"!==i[e]&&"created_at"!==i[e]&&"updated_at"!==i[e]&&c.append(i[e],document.querySelector("."+i[e]).value);let s=document.querySelectorAll(".chkbox"),a=document.querySelector("#"+t+"Img"+n.id);return a&&0!==a.files.length&&c.append("picture",a.files[0]),r="projects"===t?"technology_ids[]":"project_ids[]",s&&s.forEach(e=>{e.checked&&c.append(r,e.value)}),await fetch(o+"/"+t,{method:"post",body:c}).then((function(e){return e.json()}))},a=async(e,t,n)=>{e.preventDefault(),await fetch(o+"/"+n+"/"+t.id,{method:"delete"}).then(e=>e);await c(n);let i=await c(n);Object(r.b)(i)};const l=async(e,t,n,i)=>{e.preventDefault(),n=(e=>"s"===e.slice(-1)?e:"y"===e.slice(-1)?e.slice(0,-1)+"ies":e+"s")(n);let s=Object.keys(t),a=new FormData;for(let e=0;e<s.length;e++)"id"!==s[e]&&"created_at"!==s[e]&&"updated_at"!==s[e]&&a.append(s[e],document.getElementById(s[e]+t.id).value);let l=document.querySelectorAll(".chkbox"),u=document.querySelector("#"+n+"Img"+t.id);u&&0!==u.files.length&&a.append("picture",u.files[0]),i="projects"===n?"technology_ids[]":"project_ids[]",l&&l.forEach(e=>{e.checked&&a.append(i,e.value)});await fetch(o+"/"+n+"/"+t.id,{method:"put",body:a}).then(e=>e.json()).then(e=>e).then(async e=>{let t=await c(n);return Object(r.b)(t),e})},u=async(e,t,n)=>{e.preventDefault(),document.querySelector("."+n).style.display="none";let i=await fetch(`${o}/${n}/${t.id}`).then((function(e){return e.json()})).then((function(e){return e}));i[n=(e=>"ies"===e.substr(e.length-3)?e.slice(0,-3)+"y":e.slice(0,-1))(n)]=[i[n]];i[n];let c={[Object.keys(i)[1]]:i[Object.keys(i)[1]]};Object(r.b)(i),p(c)};let p=async e=>{let t,n=Object.keys(e)[0],o=await c(n);switch(e=Object.values(e)[0],n){case"technologies":t="name";break;case"projects":t="title"}Object.values(o)[0].map(n=>{let o=e.map(e=>e.id===n.id?"checked":""),i=Object(r.a)("input","chkbox",document.querySelector(".current form"),{type:"checkbox",name:"projects",value:n.id,checked:o.includes("checked")?"checked":""}),c=document.createTextNode(n[t]);document.querySelector(".current form").append(c),i.addEventListener("click",e=>{})})};const d=async(e,t,n)=>{return Object.keys(t)[0],await fetch(`${o}/${n}/${t.id}`).then((function(e){return e.json()})).then((function(e){return e}))}},function(e,t,n){(function(e){var r=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++)n[t[r]]=Object.getOwnPropertyDescriptor(e,t[r]);return n},o=/%[sdj%]/g;t.format=function(e){if(!b(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(s(arguments[n]));return t.join(" ")}n=1;for(var r=arguments,i=r.length,c=String(e).replace(o,(function(e){if("%%"===e)return"%";if(n>=i)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return e}})),a=r[n];n<i;a=r[++n])y(a)||!v(a)?c+=" "+a:c+=" "+s(a);return c},t.deprecate=function(n,r){if(void 0!==e&&!0===e.noDeprecation)return n;if(void 0===e)return function(){return t.deprecate(n,r).apply(this,arguments)};var o=!1;return function(){if(!o){if(e.throwDeprecation)throw new Error(r);e.traceDeprecation?console.trace(r):console.error(r),o=!0}return n.apply(this,arguments)}};var i,c={};function s(e,n){var r={seen:[],stylize:l};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),m(n)?r.showHidden=n:n&&t._extend(r,n),h(r.showHidden)&&(r.showHidden=!1),h(r.depth)&&(r.depth=2),h(r.colors)&&(r.colors=!1),h(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=a),u(r,e,r.depth)}function a(e,t){var n=s.styles[t];return n?"["+s.colors[n][0]+"m"+e+"["+s.colors[n][1]+"m":e}function l(e,t){return e}function u(e,n,r){if(e.customInspect&&n&&x(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,e);return b(o)||(o=u(e,o,r)),o}var i=function(e,t){if(h(t))return e.stylize("undefined","undefined");if(b(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(g(t))return e.stylize(""+t,"number");if(m(t))return e.stylize(""+t,"boolean");if(y(t))return e.stylize("null","null")}(e,n);if(i)return i;var c=Object.keys(n),s=function(e){var t={};return e.forEach((function(e,n){t[e]=!0})),t}(c);if(e.showHidden&&(c=Object.getOwnPropertyNames(n)),w(n)&&(c.indexOf("message")>=0||c.indexOf("description")>=0))return p(n);if(0===c.length){if(x(n)){var a=n.name?": "+n.name:"";return e.stylize("[Function"+a+"]","special")}if(j(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(O(n))return e.stylize(Date.prototype.toString.call(n),"date");if(w(n))return p(n)}var l,v="",k=!1,_=["{","}"];(f(n)&&(k=!0,_=["[","]"]),x(n))&&(v=" [Function"+(n.name?": "+n.name:"")+"]");return j(n)&&(v=" "+RegExp.prototype.toString.call(n)),O(n)&&(v=" "+Date.prototype.toUTCString.call(n)),w(n)&&(v=" "+p(n)),0!==c.length||k&&0!=n.length?r<0?j(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),l=k?function(e,t,n,r,o){for(var i=[],c=0,s=t.length;c<s;++c)E(t,String(c))?i.push(d(e,t,n,r,String(c),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(d(e,t,n,r,o,!0))})),i}(e,n,r,s,c):c.map((function(t){return d(e,n,r,s,t,k)})),e.seen.pop(),function(e,t,n){if(e.reduce((function(e,t){return t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1];return n[0]+t+" "+e.join(", ")+" "+n[1]}(l,v,_)):_[0]+v+_[1]}function p(e){return"["+Error.prototype.toString.call(e)+"]"}function d(e,t,n,r,o,i){var c,s,a;if((a=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?s=a.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):a.set&&(s=e.stylize("[Setter]","special")),E(r,o)||(c="["+o+"]"),s||(e.seen.indexOf(a.value)<0?(s=y(n)?u(e,a.value,null):u(e,a.value,n-1)).indexOf("\n")>-1&&(s=i?s.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+s.split("\n").map((function(e){return"   "+e})).join("\n")):s=e.stylize("[Circular]","special")),h(c)){if(i&&o.match(/^\d+$/))return s;(c=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(c=c.substr(1,c.length-2),c=e.stylize(c,"name")):(c=c.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),c=e.stylize(c,"string"))}return c+": "+s}function f(e){return Array.isArray(e)}function m(e){return"boolean"==typeof e}function y(e){return null===e}function g(e){return"number"==typeof e}function b(e){return"string"==typeof e}function h(e){return void 0===e}function j(e){return v(e)&&"[object RegExp]"===k(e)}function v(e){return"object"==typeof e&&null!==e}function O(e){return v(e)&&"[object Date]"===k(e)}function w(e){return v(e)&&("[object Error]"===k(e)||e instanceof Error)}function x(e){return"function"==typeof e}function k(e){return Object.prototype.toString.call(e)}function _(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(n){if(h(i)&&(i=e.env.NODE_DEBUG||""),n=n.toUpperCase(),!c[n])if(new RegExp("\\b"+n+"\\b","i").test(i)){var r=e.pid;c[n]=function(){var e=t.format.apply(t,arguments);console.error("%s %d: %s",n,r,e)}}else c[n]=function(){};return c[n]},t.inspect=s,s.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},s.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=f,t.isBoolean=m,t.isNull=y,t.isNullOrUndefined=function(e){return null==e},t.isNumber=g,t.isString=b,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=h,t.isRegExp=j,t.isObject=v,t.isDate=O,t.isError=w,t.isFunction=x,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=n(4);var S=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function T(){var e=new Date,t=[_(e.getHours()),_(e.getMinutes()),_(e.getSeconds())].join(":");return[e.getDate(),S[e.getMonth()],t].join(" ")}function E(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",T(),t.format.apply(t,arguments))},t.inherits=n(5),t._extend=function(e,t){if(!t||!v(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e};var q="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function L(e,t){if(!e){var n=new Error("Promise was rejected with a falsy value");n.reason=e,e=n}return t(e)}t.promisify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');if(q&&e[q]){var t;if("function"!=typeof(t=e[q]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,q,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,n,r=new Promise((function(e,r){t=e,n=r})),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push((function(e,r){e?n(e):t(r)}));try{e.apply(this,o)}catch(e){n(e)}return r}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),q&&Object.defineProperty(t,q,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,r(e))},t.promisify.custom=q,t.callbackify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r]);var o=n.pop();if("function"!=typeof o)throw new TypeError("The last argument must be of type Function");var i=this,c=function(){return o.apply(i,arguments)};t.apply(this,n).then((function(t){e.nextTick(c,null,t)}),(function(t){e.nextTick(L,t,c)}))}return Object.setPrototypeOf(n,Object.getPrototypeOf(t)),Object.defineProperties(n,r(t)),n}}).call(this,n(3))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:c}catch(e){r=c}}();var a,l=[],u=!1,p=-1;function d(){u&&a&&(u=!1,a.length?l=a.concat(l):p=-1,l.length&&f())}function f(){if(!u){var e=s(d);u=!0;for(var t=l.length;t;){for(a=l,l=[];++p<t;)a&&a[p].run();p=-1,t=l.length}a=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function y(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new m(e,t)),1!==l.length||u||s(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},function(e,t,n){var r={"./IMG_8809.jpg":7,"./cool.jpg":8,"./resume.docx":9,"./resume.pdf":10,"./resume.png":11,"./sm_IMG_8809.jpg":12,"./sm_math-game.png":13,"./sm_mick-medium.png":14,"./sm_my-travelogue.png":15,"./sm_news_clover.png":16,"./sm_nyc_snaps.png":17,"./sm_trees-of-nyc.png":18,"./tech_icons/bootstrap.png":19,"./tech_icons/css3.png":20,"./tech_icons/gnu-linux.png":21,"./tech_icons/html5.png":22,"./tech_icons/javascript (1).svg":23,"./tech_icons/javascript.svg":24,"./tech_icons/jquery.png":25,"./tech_icons/mapbox.png":26,"./tech_icons/mysql.png":27,"./tech_icons/node-js.png":28,"./tech_icons/php.png":29,"./tech_icons/postgresql.png":30,"./tech_icons/reactjs.png":31,"./tech_icons/rubyonrails.png":32,"./tech_icons/sequelize.png":33};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=6},function(e,t,n){e.exports=n.p+"/src/img/IMG_8809.jpg"},function(e,t,n){e.exports=n.p+"/src/img/cool.jpg"},function(e,t){throw new Error("Module parse failed: Unexpected character '' (1:2)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)")},function(e,t,n){e.exports=n.p+"/src/img/resume.pdf"},function(e,t,n){e.exports=n.p+"/src/img/resume.png"},function(e,t,n){e.exports=n.p+"/src/img/sm_IMG_8809.jpg"},function(e,t,n){e.exports=n.p+"/src/img/sm_math-game.png"},function(e,t,n){e.exports=n.p+"/src/img/sm_mick-medium.png"},function(e,t,n){e.exports=n.p+"/src/img/sm_my-travelogue.png"},function(e,t,n){e.exports=n.p+"/src/img/sm_news_clover.png"},function(e,t,n){e.exports=n.p+"/src/img/sm_nyc_snaps.png"},function(e,t,n){e.exports=n.p+"/src/img/sm_trees-of-nyc.png"},function(e,t,n){e.exports=n.p+"/src/img/tech_icons/bootstrap.png"},function(e,t,n){e.exports=n.p+"/src/img/tech_icons/css3.png"},function(e,t,n){e.exports=n.p+"/src/img/tech_icons/gnu-linux.png"},function(e,t,n){e.exports=n.p+"/src/img/tech_icons/html5.png"},function(e,t,n){e.exports=n.p+"/src/img/tech_icons/javascript (1).svg"},function(e,t,n){e.exports=n.p+"/src/img/tech_icons/javascript.svg"},function(e,t,n){e.exports=n.p+"/src/img/tech_icons/jquery.png"},function(e,t,n){e.exports=n.p+"/src/img/tech_icons/mapbox.png"},function(e,t,n){e.exports=n.p+"/src/img/tech_icons/mysql.png"},function(e,t,n){e.exports=n.p+"/src/img/tech_icons/node-js.png"},function(e,t,n){e.exports=n.p+"/src/img/tech_icons/php.png"},function(e,t,n){e.exports=n.p+"/src/img/tech_icons/postgresql.png"},function(e,t,n){e.exports=n.p+"/src/img/tech_icons/reactjs.png"},function(e,t,n){e.exports=n.p+"/src/img/tech_icons/rubyonrails.png"},function(e,t,n){e.exports=n.p+"/src/img/tech_icons/sequelize.png"},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(1);let i=()=>{let e=document.querySelector(".main-content");"none"===document.querySelector(".sidebar").style.display&&(document.querySelector(".sidebar").style.display="inline");let t=Object(r.a)("div","about",e,{id:"about"});Object(r.a)("p","about-para",t,{innerText:"I am currently employed at General Assembly as a teaching assistant and am seeking further employment. I have been coding on and off for about ten years."}),Object(r.a)("p","about-para",t,{innerText:"I mostly build full-stack Javascript apps with React, Node, Sequelize, Express, and Postgres. I also enjoy Vanilla Javascript. Other front-end tools are CSS, JQuery, Bootstrap, and Mapbox."}),Object(r.a)("p","about-para",t,{innerText:"This site was built with Vanilla Javascript and comprizes of a Rails backend deployed on Google App Engine. Images are stored using Rails Active Storage."})},c=(e=".JPG")=>{console.log(e),"none"===document.querySelector(".sidebar").style.display&&(document.querySelector(".sidebar").style.display="inline");let t,n=document.querySelector(".main-content");document.querySelector(".resume")?(t=document.querySelector(".resume")).innerHTML="":(console.log(n.children),n.children[1]&&n.removeChild(n.children[1]),t=Object(r.a)("div","resume",n,{id:"resume"})),console.log(t);let o=Object(r.a)("div","res-img-wrapper",t);if(".JPG"===e){".JPG"===e&&Object(r.a)("img","resume",o,{src:"./src/img/resume.png"})}if(".PDF"===e){if(0!==(".PDF"===e&&Object(r.a)("object","object",o,{data:"./src/img/resume.pdf",width:"100%",height:"100%",innerText:"It appears your browser does not support .PDFs, but you can download it below",frameborder:0,scrolling:"no",navpanes:0,scrollbar:0})).innerText.length){Object(r.a)("div","div",o,{innerHTML:'<span class="iconify down-arrow" data-icon="el:download" data-inline="false"></span>'}).addEventListener("click",e=>{window.open("./src/img/resume.pdf","_blank")})}}if(".DOC"===e){".DOC"===e&&Object(r.a)("iframe","iframe",o,{src:"https://docs.google.com/document/d/1K55Ni0Ck3mvfUIwPlBHoXo_ZcNFA4ubPwpZ_fujHgWU/export?format=doc",style:"width:100%; height: 100%;border: none;"})}},s=()=>{let e=document.querySelector(".sidebar");e.removeChild(e.children[2]);let t=Object(r.a)("div","btn-wrapper",e,{});Object(r.a)("btn","about-btn",t,{innerText:"LinkedIn",id:"about-btn"}),Object(r.a)("btn","about-btn",t,{innerText:"Angelist",id:"about-btn"}),Object(r.a)("btn","about-btn",t,{innerText:"BuiltInNyc",id:"about-btn"}),Object(r.a)("btn","about-btn",t,{innerText:"GlassDoor",id:"about-btn"})},a=()=>{let e=document.querySelector(".sidebar");console.log(e),e.removeChild(e.children[2]);let t=Object(r.a)("div","btn-wrapper",e,{});[".JPG",".PDF",".DOC"].forEach(e=>{Object(r.a)("button","about-btn",t,{innerText:e,id:"about-btn"}).addEventListener("click",e=>{c(e.target.innerText)})})};function l(e,t="projects"){const n=[{projects:"ion:newspaper-outline"},{resume:"noto:scroll"},{about:"noto:information"}];let o=(e,t=null)=>{let l=document.querySelector(".main-content");l.innerHTML="";let d=Object(r.a)("div","nav",l,{}),f=t&&"project"===Object.keys(t)[0]?"title":"name",m=t&&t[Object.keys(t)[0]][f];n.forEach((l,f)=>{let y=Object(r.a)("div","option",d,{});y.style.cursor="pointer";let g=Object(r.a)("span","iconify",y);if(g.setAttribute("data-icon",Object.values(n[f])),g.setAttribute("data-inline",!1),e===Object.keys(n[f])[0]){let e=Object(r.a)("div","text",y,{innerText:Object.keys(n[f])});y.appendChild(e);let o=t?Object(r.a)("div","more-text",y,{innerText:" - "+m}):document.createTextNode(" ");y.appendChild(o),y.style.color="red",y.style.fontSize="1em",y.style.position="absolute",y.style.top=0,y.style.left="2%"}y.addEventListener("click",e=>{"projects"===Object.keys(n[f])[0]&&(o("projects"),u("technologies"),p("projects")),"about"===Object.keys(n[f])[0]&&(o("about"),i(),s()),"resume"===Object.keys(n[f])[0]&&(o(Object.keys(n[f])[0]),c(),a());let t=n.splice(n.indexOf(e.target.innerText),1);n.push(t[0])})})};o(t,e)}let u=async(e,t=[])=>{console.log("data",t);let n=0===t.length?await Object(o.d)(e):t,i=document.querySelector(".sidebar"),c=e=>{let t;n.technologies.forEach((n,r)=>{n.name===e&&(t=r)});let s=n.technologies.splice(t,1);n.technologies.unshift(s[0]),console.log("sidebar",i.children),i.children[2]&&i.removeChild(i.children[2]);let a=Object(r.a)("div","tech-list",i,{});n&&n.technologies.forEach(t=>{if(t.name===e){let e=Object(r.a)("div","selected-div",a,{});e.style.textAlign="center",e.style.margin="10%",Object(r.a)("img","selected-img",e,{src:"src/img/"+t.local_url}).style.width="50%"}else{let e=Object(r.a)("img","tech-img",a,{src:"src/img/"+t.local_url});e.style.cursor="pointer",e.addEventListener("click",async e=>{let n=await Object(o.f)(e,t,"technologies");document.querySelector(".main-content").innerHTML="",l(n),p("projects",n),c(t.name)})}})};c()};n(6);let p=async(e,t=[])=>{matchMedia("(min-width: 600px)").matches&&"none"===document.querySelector(".sidebar").style.display&&(document.querySelector(".sidebar").style.display="inline")&&console.log("type/data",e,t);let n=0===t.length||"undefined"===t.length?await Object(o.c)(e):t;console.log("res",n),"project"===Object.keys(n)[0]?(n.project=[n.project],e="project"):e="projects";let i=document.querySelector(".main-content"),c=Object(r.a)("div","projects",i,{id:"projects"});n[e].forEach((t,i)=>{let s=Object(r.a)("div","proj-wrapper",c,{});s.classList.add("proj-wrap"+t.id),"project"===e&&window.matchMedia("(min-width: 600px)").matches&&(s.style.width="110%",s.style.fontSize="2em");let a=Object(r.a)("div","project",s);a.classList.add("project"+t.id,"projectCard");let d=Object(r.a)("div","img-wrapper",a),f=Object(r.a)("img","img",d,{src:"src/img/"+t.local_url}),m=Object(r.a)("div","modal",d,{});m.classList.add("project-"+t.id+"-modal","modal-slide");let y=Object(r.a)("span","modal-span",m),g=(Object(r.a)("h2","project-title",y,{innerText:t.title}),Object(r.a)("div","techs-div",y));g.style.display="none",n.technologies&&n.technologies.forEach(e=>{f=Object(r.a)("img","tech-img",g,{src:"src/img/"+e.local_url})});let b,h=Object(r.a)("div","link-modal",d),j=Object(r.a)("p","more-anchor",h,{innerText:"...more"});j.addEventListener("click",async e=>{let n=await Object(o.f)(e,t,"projects");document.querySelector(".main-content").innerHTML="",l({project:t}),p("project",{project:t,technologies:n.technologies,traits:n.traits}),u("technologies",{technologies:n.technologies})}),Object(r.a)("button","site-button",h,{innerText:"visit site"}).addEventListener("click",e=>{location.href=t.site_url,target="_blank"});let v=Object(r.a)("div","traits-div",m);if(v.style.display="none",n.traits&&n.traits.forEach(e=>{b=Object(r.a)("h3","trait",v,{innerText:e.name})}),"project"===e&&window.matchMedia("(min-width: 300px)").matches){console.log("300"),j.style.display="none",m.style.backgroundImage="linear-gradient(to right, rgba(255,255,255, 1),rgba(255, 255, 255, 1) )",document.querySelector(".techs-div").style.display="flex",document.querySelector(".traits-div").style.display="flex",document.querySelector(".sidebar").style.display="none"}})};n(34),n(35);const d=()=>{(()=>{let e=document.querySelector(".sidebar");e.innerHTML="";let t=Object(r.a)("div","header-img",e,{}),n=(Object(r.a)("img","img",t,{src:"../src/img/cool.jpg",alt:"mickpic"}),Object(r.a)("div","email",e,{}));Object(r.a)("a","url",n,{href:"https://mail.google.com/mail/?view=cm&fs=1&to=email@domain.com"}).innerText="mickrothnyc@gmail.com"})(),u("technologies"),l(),p("projects")};d();document.querySelector(".title").addEventListener("click",()=>{d()});(()=>{let e=document.querySelector(".header"),t=Object(r.a)("div","burger-div",e),n=Object(r.a)("span","iconify",t);n.setAttribute("data-icon","typcn:th-menu-outline"),n.setAttribute("data-inline",!1),t.addEventListener("click",e=>{"block"===document.querySelector(".burgerMenu-mainDiv").style.display?document.querySelector(".burgerMenu-mainDiv").style.display="none":document.querySelector(".burgerMenu-mainDiv").style.display="block"})})(),(()=>{const e=document.querySelector(".container"),t=Object(r.a)("div","burgerMenu-mainDiv",e),n=Object(r.a)("h4","burger-item",t,{innerText:"projects"});n.addEventListener("click",e=>{l(null,"projects"),p("projects"),u("technologies"),t.style.display="none"}),n.style.cursor="pointer";const o=Object(r.a)("h4","burger-item",t,{innerText:"resume"});o.addEventListener("click",e=>{l(null,"resume"),c(),a(),t.style.display="none"}),o.style.cursor="pointer";const s=Object(r.a)("h4","burger-item",t,{innerText:"about"});s.addEventListener("click",e=>{l(null,"about"),i(),t.style.display="none"}),s.style.cursor="pointer";let d=Object(r.a)("h4","burger-item",t,{innerText:"Linked In"});d.addEventListener("click",e=>{location.href="https://www.linkedin.com/in/mick-roth/",target="_blank"}),d.style.cursor="pointer";let f=Object(r.a)("h4","burger-item",t,{innerText:"Github"});f.addEventListener("click",e=>{location.href="https://github.com/mickmed",target="_blank"}),f.style.cursor="pointer",t.children.forEach(e=>{console.log("child",e),e.style.cursor="pointer"})})()}]);