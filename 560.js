(self.webpackChunkWeb_Folio_2021=self.webpackChunkWeb_Folio_2021||[]).push([[560],{645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},379:(e,t,n)=>{"use strict";var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function i(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var s=e[o],u=t.base?s[0]+t.base:s[0],c=n[u]||0,l="".concat(u," ").concat(c);n[u]=c+1;var p=i(l),d={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(a[p].references++,a[p].updater(d)):a.push({identifier:l,updater:h(d,t),references:1}),r.push(l)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var c,l=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function d(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,v=0;function h(e,t){var n,r,o;if(t.singleton){var a=v++;n=f||(f=u(t)),r=p.bind(null,n,a,!1),o=p.bind(null,n,a,!0)}else n=u(t),r=d.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=i(n[r]);a[o].references--}for(var u=s(e,t),c=0;c<n.length;c++){var l=i(n[c]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=u}}}},345:function(e){"undefined"!=typeof self&&self,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([,function(e,t,n){(function(t){for(var r=n(11),o="undefined"==typeof window?t:window,a=["moz","webkit"],i="AnimationFrame",s=o["request"+i],u=o["cancel"+i]||o["cancelRequest"+i],c=0;!s&&c<a.length;c++)s=o[a[c]+"Request"+i],u=o[a[c]+"Cancel"+i]||o[a[c]+"CancelRequest"+i];if(!s||!u){var l=0,p=0,d=[];s=function(e){if(0===d.length){var t=r(),n=Math.max(0,1e3/60-(t-l));l=n+t,setTimeout((function(){var e=d.slice(0);d.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(l)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return d.push({handle:++p,callback:e,cancelled:!1}),p},u=function(e){for(var t=0;t<d.length;t++)d[t].handle===e&&(d[t].cancelled=!0)}}e.exports=function(e){return s.call(o,e)},e.exports.cancel=function(){u.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=s,e.cancelAnimationFrame=u}}).call(this,n(4))},,function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return N}));var r=n(1),o=n.n(r),a=function(e){return new RegExp(/<[a-z][\s\S]*>/i).test(e)},i=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes},s=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},u="TYPE_CHARACTER",c="REMOVE_CHARACTER",l="REMOVE_ALL",p="REMOVE_LAST_VISIBLE_NODE",d="PAUSE_FOR",f="CALL_FUNCTION",v="ADD_HTML_TAG_ELEMENT",h="CHANGE_DELETE_SPEED",m="CHANGE_DELAY",y="CHANGE_CURSOR",g="PASTE_STRING",b="HTML_TAG";function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){C(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e){return function(e){if(Array.isArray(e))return A(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N=function(){function e(t,n){var w=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),C(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),C(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),C(this,"setupWrapperElement",(function(){w.state.elements.container&&(w.state.elements.wrapper.className=w.options.wrapperClassName,w.state.elements.cursor.className=w.options.cursorClassName,w.state.elements.cursor.innerHTML=w.options.cursor,w.state.elements.container.innerHTML="",w.state.elements.container.appendChild(w.state.elements.wrapper),w.state.elements.container.appendChild(w.state.elements.cursor))})),C(this,"start",(function(){return w.state.eventLoopPaused=!1,w.runEventLoop(),w})),C(this,"pause",(function(){return w.state.eventLoopPaused=!0,w})),C(this,"stop",(function(){return w.state.eventLoop&&(Object(r.cancel)(w.state.eventLoop),w.state.eventLoop=null),w})),C(this,"pauseFor",(function(e){return w.addEventToQueue(d,{ms:e}),w})),C(this,"typeOutAllStrings",(function(){return"string"==typeof w.options.strings?(w.typeString(w.options.strings).pauseFor(w.options.pauseFor),w):(w.options.strings.forEach((function(e){w.typeString(e).pauseFor(w.options.pauseFor).deleteAll(w.options.deleteSpeed)})),w)})),C(this,"typeString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(a(e))return w.typeOutHTMLString(e,t);if(e){var n=(w.options||{}).stringSplitter,r="function"==typeof n?n(e):e.split("");w.typeCharacters(r,t)}return w})),C(this,"pasteString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return a(e)?w.typeOutHTMLString(e,t,!0):(e&&w.addEventToQueue(g,{character:e,node:t}),w)})),C(this,"typeOutHTMLString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2?arguments[2]:void 0,r=i(e);if(r.length>0)for(var o=0;o<r.length;o++){var a=r[o],s=a.innerHTML;a&&3!==a.nodeType?(a.innerHTML="",w.addEventToQueue(v,{node:a,parentNode:t}),n?w.pasteString(s,a):w.typeString(s,a)):a.textContent&&(n?w.pasteString(a.textContent,t):w.typeString(a.textContent,t))}return w})),C(this,"deleteAll",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"natural";return w.addEventToQueue(l,{speed:e}),w})),C(this,"changeDeleteSpeed",(function(e){if(!e)throw new Error("Must provide new delete speed");return w.addEventToQueue(h,{speed:e}),w})),C(this,"changeDelay",(function(e){if(!e)throw new Error("Must provide new delay");return w.addEventToQueue(m,{delay:e}),w})),C(this,"changeCursor",(function(e){if(!e)throw new Error("Must provide new cursor");return w.addEventToQueue(y,{cursor:e}),w})),C(this,"deleteChars",(function(e){if(!e)throw new Error("Must provide amount of characters to delete");for(var t=0;t<e;t++)w.addEventToQueue(c);return w})),C(this,"callFunction",(function(e,t){if(!e||"function"!=typeof e)throw new Error("Callbak must be a function");return w.addEventToQueue(f,{cb:e,thisArg:t}),w})),C(this,"typeCharacters",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(e){w.addEventToQueue(u,{character:e,node:t})})),w})),C(this,"removeCharacters",(function(e){if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(){w.addEventToQueue(c)})),w})),C(this,"addEventToQueue",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return w.addEventToStateProperty(e,t,n,"eventQueue")})),C(this,"addReverseCalledEvent",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return w.options.loop?w.addEventToStateProperty(e,t,n,"reverseCalledEvents"):w})),C(this,"addEventToStateProperty",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0,o={eventName:e,eventArgs:t||{}};return w.state[r]=n?[o].concat(E(w.state[r])):[].concat(E(w.state[r]),[o]),w})),C(this,"runEventLoop",(function(){w.state.lastFrameTime||(w.state.lastFrameTime=Date.now());var e=Date.now(),t=e-w.state.lastFrameTime;if(!w.state.eventQueue.length){if(!w.options.loop)return;w.state.eventQueue=E(w.state.calledEvents),w.state.calledEvents=[],w.options=T({},w.state.initialOptions)}if(w.state.eventLoop=o()(w.runEventLoop),!w.state.eventLoopPaused){if(w.state.pauseUntil){if(e<w.state.pauseUntil)return;w.state.pauseUntil=null}var n,r=E(w.state.eventQueue),a=r.shift();if(!(t<=(n=a.eventName===p||a.eventName===c?"natural"===w.options.deleteSpeed?s(40,80):w.options.deleteSpeed:"natural"===w.options.delay?s(120,160):w.options.delay))){var i=a.eventName,A=a.eventArgs;switch(w.logInDevMode({currentEvent:a,state:w.state,delay:n}),i){case g:case u:var S=A.character,C=A.node,N=document.createTextNode(S),_=N;w.options.onCreateTextNode&&"function"==typeof w.options.onCreateTextNode&&(_=w.options.onCreateTextNode(S,N)),_&&(C?C.appendChild(_):w.state.elements.wrapper.appendChild(_)),w.state.visibleNodes=[].concat(E(w.state.visibleNodes),[{type:"TEXT_NODE",character:S,node:_}]);break;case c:r.unshift({eventName:p,eventArgs:{removingCharacterNode:!0}});break;case d:var O=a.eventArgs.ms;w.state.pauseUntil=Date.now()+parseInt(O);break;case f:var L=a.eventArgs,M=L.cb,x=L.thisArg;M.call(x,{elements:w.state.elements});break;case v:var j=a.eventArgs,k=j.node,D=j.parentNode;D?D.appendChild(k):w.state.elements.wrapper.appendChild(k),w.state.visibleNodes=[].concat(E(w.state.visibleNodes),[{type:b,node:k,parentNode:D||w.state.elements.wrapper}]);break;case l:var P=w.state.visibleNodes,R=A.speed,F=[];R&&F.push({eventName:h,eventArgs:{speed:R,temp:!0}});for(var Q=0,H=P.length;Q<H;Q++)F.push({eventName:p,eventArgs:{removingCharacterNode:!1}});R&&F.push({eventName:h,eventArgs:{speed:w.options.deleteSpeed,temp:!0}}),r.unshift.apply(r,F);break;case p:var I=a.eventArgs.removingCharacterNode;if(w.state.visibleNodes.length){var U=w.state.visibleNodes.pop(),q=U.type,G=U.node,W=U.character;w.options.onRemoveNode&&"function"==typeof w.options.onRemoveNode&&w.options.onRemoveNode({node:G,character:W}),G&&G.parentNode.removeChild(G),q===b&&I&&r.unshift({eventName:p,eventArgs:{}})}break;case h:w.options.deleteSpeed=a.eventArgs.speed;break;case m:w.options.delay=a.eventArgs.delay;break;case y:w.options.cursor=a.eventArgs.cursor,w.state.elements.cursor.innerHTML=a.eventArgs.cursor}w.options.loop&&(a.eventName===p||a.eventArgs&&a.eventArgs.temp||(w.state.calledEvents=[].concat(E(w.state.calledEvents),[a]))),w.state.eventQueue=r,w.state.lastFrameTime=e}}})),t)if("string"==typeof t){var A=document.querySelector(t);if(!A)throw new Error("Could not find container element");this.state.elements.container=A}else this.state.elements.container=t;n&&(this.options=T(T({},this.options),n)),this.state.initialOptions=T({},this.options),this.init()}var t,n;return t=e,(n=[{key:"init",value:function(){this.setupWrapperElement(),this.addEventToQueue(y,{cursor:this.options.cursor},!0),this.addEventToQueue(l,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(function(e){var t=document.createElement("style");t.appendChild(document.createTextNode(e)),document.head.appendChild(t)}(".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}"),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),!0===this.options.autoStart&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(e){this.options.devMode&&console.log(e)}}])&&S(t.prototype,n),e}()},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},,,,,,,function(e,t,n){(function(t){(function(){var n,r,o,a,i,s;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-i)/1e6},r=t.hrtime,a=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})(),s=1e9*t.uptime(),i=a-s):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,n(12))},function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var u,c=[],l=!1,p=-1;function d(){l&&u&&(l=!1,u.length?c=u.concat(c):p=-1,c.length&&f())}function f(){if(!l){var e=s(d);l=!0;for(var t=c.length;t;){for(u=c,c=[];++p<t;)u&&u[p].run();p=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new v(e,t)),1!==c.length||l||s(f)},v.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}]).default}}]);