/*! For license information please see 261.js.LICENSE.txt */
(self.webpackChunkWeb_Folio_2021=self.webpackChunkWeb_Folio_2021||[]).push([[261],{310:function(t){"undefined"!=typeof self&&self,t.exports=function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=29)}([function(t,e,n){var r=n(24)("wks"),i=n(12),o=n(1).Symbol,u="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=u&&o[t]||(u?o:i)("Symbol."+t))}).store=r},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.5.6"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(4),i=n(11);t.exports=n(6)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(5),i=n(34),o=n(35),u=Object.defineProperty;e.f=n(6)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){t.exports=!n(17)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports={}},function(t,e,n){var r=n(24)("keys"),i=n(12);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e){t.exports=!1},function(t,e,n){var r=n(1),i=n(2),o=n(3),u=n(19),c=n(20),a=function(t,e,n){var f,s,l,d,p=t&a.F,h=t&a.G,v=t&a.S,y=t&a.P,_=t&a.B,m=h?r:v?r[e]||(r[e]={}):(r[e]||{}).prototype,g=h?i:i[e]||(i[e]={}),b=g.prototype||(g.prototype={});for(f in h&&(n=e),n)l=((s=!p&&m&&void 0!==m[f])?m:n)[f],d=_&&s?c(l,r):y&&"function"==typeof l?c(Function.call,l):l,m&&u(m,f,l,t&a.U),g[f]!=l&&o(g,f,d),y&&b[f]!=l&&(b[f]=l)};r.core=i,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(10),i=n(1).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e,n){var r=n(1),i=n(3),o=n(7),u=n(12)("src"),c=Function.toString,a=(""+c).split("toString");n(2).inspectSource=function(t){return c.call(t)},(t.exports=function(t,e,n,c){var f="function"==typeof n;f&&(o(n,"name")||i(n,"name",e)),t[e]!==n&&(f&&(o(n,u)||i(n,u,t[e]?""+t[e]:a.join(String(e)))),t===r?t[e]=n:c?t[e]?t[e]=n:i(t,e,n):(delete t[e],i(t,e,n)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[u]||c.call(this)}))},function(t,e,n){var r=n(36);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(42),i=n(9);t.exports=function(t){return r(i(t))}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(8),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){var r=n(2),i=n(1),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(15)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(4).f,i=n(7),o=n(0)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},function(t,e,n){var r=n(9);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Math.PI/180;e.default=function(t){return t*r}},function(t,e,n){"use strict";n(30);var r=function(t){return t&&t.__esModule?t:{default:t}}(n(54));t.exports=r.default},function(t,e,n){n(31),n(47),t.exports=n(2).Array.from},function(t,e,n){"use strict";var r=n(32)(!0);n(33)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})}))},function(t,e,n){var r=n(8),i=n(9);t.exports=function(t){return function(e,n){var o,u,c=String(i(e)),a=r(n),f=c.length;return a<0||a>=f?t?"":void 0:(o=c.charCodeAt(a))<55296||o>56319||a+1===f||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):o:t?c.slice(a,a+2):u-56320+(o-55296<<10)+65536}}},function(t,e,n){"use strict";var r=n(15),i=n(16),o=n(19),u=n(3),c=n(13),a=n(37),f=n(26),s=n(46),l=n(0)("iterator"),d=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,n,h,v,y,_){a(n,e,h);var m,g,b,x=function(t){if(!d&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",O="values"==v,M=!1,j=t.prototype,S=j[l]||j["@@iterator"]||v&&j[v],P=S||x(v),T=v?O?x("entries"):P:void 0,k="Array"==e&&j.entries||S;if(k&&(b=s(k.call(new t)))!==Object.prototype&&b.next&&(f(b,w,!0),r||"function"==typeof b[l]||u(b,l,p)),O&&S&&"values"!==S.name&&(M=!0,P=function(){return S.call(this)}),r&&!_||!d&&!M&&j[l]||u(j,l,P),c[e]=P,c[w]=p,v)if(m={values:O?P:x("values"),keys:y?P:x("keys"),entries:T},_)for(g in m)g in j||o(j,g,m[g]);else i(i.P+i.F*(d||M),e,m);return m}},function(t,e,n){t.exports=!n(6)&&!n(17)((function(){return 7!=Object.defineProperty(n(18)("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(10);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){"use strict";var r=n(38),i=n(11),o=n(26),u={};n(3)(u,n(0)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(u,{next:i(1,n)}),o(t,e+" Iterator")}},function(t,e,n){var r=n(5),i=n(39),o=n(25),u=n(14)("IE_PROTO"),c=function(){},a=function(){var t,e=n(18)("iframe"),r=o.length;for(e.style.display="none",n(45).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[o[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=r(t),n=new c,c.prototype=null,n[u]=t):n=a(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(4),i=n(5),o=n(40);t.exports=n(6)?Object.defineProperties:function(t,e){i(t);for(var n,u=o(e),c=u.length,a=0;c>a;)r.f(t,n=u[a++],e[n]);return t}},function(t,e,n){var r=n(41),i=n(25);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e,n){var r=n(7),i=n(21),o=n(43)(!1),u=n(14)("IE_PROTO");t.exports=function(t,e){var n,c=i(t),a=0,f=[];for(n in c)n!=u&&r(c,n)&&f.push(n);for(;e.length>a;)r(c,n=e[a++])&&(~o(f,n)||f.push(n));return f}},function(t,e,n){var r=n(22);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(21),i=n(23),o=n(44);t.exports=function(t){return function(e,n,u){var c,a=r(e),f=i(a.length),s=o(u,f);if(t&&n!=n){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}}},function(t,e,n){var r=n(8),i=Math.max,o=Math.min;t.exports=function(t,e){return(t=r(t))<0?i(t+e,0):o(t,e)}},function(t,e,n){var r=n(1).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(7),i=n(27),o=n(14)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){"use strict";var r=n(20),i=n(16),o=n(27),u=n(48),c=n(49),a=n(23),f=n(50),s=n(51);i(i.S+i.F*!n(53)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,i,l,d=o(t),p="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,y=void 0!==v,_=0,m=s(d);if(y&&(v=r(v,h>2?arguments[2]:void 0,2)),null==m||p==Array&&c(m))for(n=new p(e=a(d.length));e>_;_++)f(n,_,y?v(d[_],_):d[_]);else for(l=m.call(d),n=new p;!(i=l.next()).done;_++)f(n,_,y?u(l,v,[i.value,_],!0):i.value);return n.length=_,n}})},function(t,e,n){var r=n(5);t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&r(o.call(t)),e}}},function(t,e,n){var r=n(13),i=n(0)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},function(t,e,n){"use strict";var r=n(4),i=n(11);t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}},function(t,e,n){var r=n(52),i=n(0)("iterator"),o=n(13);t.exports=n(2).getIteratorMethod=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){var r=n(22),i=n(0)("toStringTag"),o="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:o?r(e):"Object"==(u=r(e))&&"function"==typeof e.callee?"Arguments":u}},function(t,e,n){var r=n(0)("iterator"),i=!1;try{var o=[7][r]();o.return=function(){i=!0},Array.from(o,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var o=[7],u=o[r]();u.next=function(){return{done:n=!0}},o[r]=function(){return u},t(o)}catch(t){}return n}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=r(n(55)),u=r(n(56)),c=r(n(57)),a=r(n(58)),f=r(n(59)),s=Math.PI,l=Math.max,d=Math.min,p=function(){function t(e,n){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.element=e,this.originalHTML=this.element.innerHTML;var r=document.createElement("div"),i=document.createDocumentFragment();r.setAttribute("aria-label",e.innerText),r.style.position="relative",this.container=r,this._letters=(0,u.default)(e,n),this._letters.forEach((function(t){return i.appendChild(t)})),r.appendChild(i),this.element.innerHTML="",this.element.appendChild(r);var c=window.getComputedStyle(this.element),a=c.fontSize,f=c.lineHeight;this._fontSize=parseFloat(a),this._lineHeight=parseFloat(f)||this._fontSize,this._metrics=this._letters.map(o.default);var l=this._metrics.reduce((function(t,e){return t+e.width}),0);this._minRadius=l/s/2+this._lineHeight,this._dir=1,this._forceWidth=!1,this._forceHeight=!0,this._radius=this._minRadius,this._invalidate()}return i(t,[{key:"radius",value:function(t){return void 0!==t?(this._radius=l(this._minRadius,t),this._invalidate(),this):this._radius}},{key:"dir",value:function(t){return void 0!==t?(this._dir=t,this._invalidate(),this):this._dir}},{key:"forceWidth",value:function(t){return void 0!==t?(this._forceWidth=t,this._invalidate(),this):this._forceWidth}},{key:"forceHeight",value:function(t){return void 0!==t?(this._forceHeight=t,this._invalidate(),this):this._forceHeight}},{key:"refresh",value:function(){return this._invalidate()}},{key:"destroy",value:function(){return this.element.innerHTML=this.originalHTML,this}},{key:"_invalidate",value:function(){var t=this;return cancelAnimationFrame(this._raf),this._raf=requestAnimationFrame((function(){t._layout()})),this}},{key:"_layout",value:function(){var t=this,e=this._radius,n=this._dir,r="center "+(-1===n?-e+this._lineHeight:e)/this._fontSize+"em",i=e-this._lineHeight,o=(0,f.default)(this._metrics,i),u=o.rotations,s=o.θ;if(this._letters.forEach((function(e,i){var o=e.style,c=(-.5*s+u[i])*n,a="translateX("+-.5*t._metrics[i].width/t._fontSize+"em) rotate("+c+"deg)";o.position="absolute",o.bottom=-1===n?0:"auto",o.left="50%",o.transform=a,o.transformOrigin=r,o.webkitTransform=a,o.webkitTransformOrigin=r})),this._forceHeight){var l=s>180?(0,c.default)(e,s):(0,c.default)(i,s)+this._lineHeight;this.container.style.height=l/this._fontSize+"em"}if(this._forceWidth){var p=(0,a.default)(e,d(180,s));this.container.style.width=p/this._fontSize+"em"}return this}}]),t}();e.default=p},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.getBoundingClientRect();return{height:e.height,left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:e.width}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var n=document.createElement("span"),r=t.innerText.trim();return(e?e(r):[].concat(function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(r))).map((function(t){var e=n.cloneNode();return e.insertAdjacentHTML("afterbegin"," "===t?"&nbsp;":t),e}))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t&&t.__esModule?t:{default:t}}(n(28));e.default=function(t,e){return t*(1-Math.cos((0,r.default)(e/2)))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t&&t.__esModule?t:{default:t}}(n(28));e.default=function(t,e){return 2*t*Math.sin((0,r.default)(e/2))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t&&t.__esModule?t:{default:t}}(n(60));e.default=function(t,e){return t.reduce((function(t,n){var i=n.width,o=(0,r.default)(i/e);return{θ:t.θ+o,rotations:t.rotations.concat([t.θ+o/2])}}),{θ:0,rotations:[]})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=180/Math.PI;e.default=function(t){return t*r}}])},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var u=this[o][0];null!=u&&(i[u]=!0)}for(var c=0;c<t.length;c++){var a=[].concat(t[c]);r&&i[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),e.push(a))}},e}},379:(t,e,n)=>{"use strict";var r,i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),o=[];function u(t){for(var e=-1,n=0;n<o.length;n++)if(o[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},r=[],i=0;i<t.length;i++){var c=t[i],a=e.base?c[0]+e.base:c[0],f=n[a]||0,s="".concat(a," ").concat(f);n[a]=f+1;var l=u(s),d={css:c[1],media:c[2],sourceMap:c[3]};-1!==l?(o[l].references++,o[l].updater(d)):o.push({identifier:s,updater:v(d,e),references:1}),r.push(s)}return r}function a(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var u=i(t.insert||"head");if(!u)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");u.appendChild(e)}return e}var f,s=(f=[],function(t,e){return f[t]=e,f.filter(Boolean).join("\n")});function l(t,e,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=s(e,i);else{var o=document.createTextNode(i),u=t.childNodes;u[e]&&t.removeChild(u[e]),u.length?t.insertBefore(o,u[e]):t.appendChild(o)}}function d(t,e,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var p=null,h=0;function v(t,e){var n,r,i;if(e.singleton){var o=h++;n=p||(p=a(e)),r=l.bind(null,n,o,!1),i=l.bind(null,n,o,!0)}else n=a(e),r=d.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var i=u(n[r]);o[i].references--}for(var a=c(t,e),f=0;f<n.length;f++){var s=u(n[f]);0===o[s].references&&(o[s].updater(),o.splice(s,1))}n=a}}}}}]);