function e(e){return e&&e.__esModule?e.default:e}var t,r,n,i,o,a,s=globalThis;/* eslint-disable no-self-assign *//*! @vimeo/player v2.20.1 | (c) 2023 Vimeo | MIT License | https://github.com/vimeo/player.js */function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach(function(t){v(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(){c=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,t,r,i){var o,a,s=Object.create((t&&t.prototype instanceof d?t:d).prototype);return n(s,"_invoke",{value:(o=new T(i||[]),a="suspendedStart",function(t,n){if("executing"===a)throw Error("Generator is already running");if("completed"===a){if("throw"===t)throw n;return _()}for(o.method=t,o.arg=n;;){var i=o.delegate;if(i){var s=function e(t,r){var n=r.method,i=t.iterator[n];if(void 0===i)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=void 0,e(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=TypeError("The iterator does not provide a '"+n+"' method")),h;var o=f(i,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):a:(r.method="throw",r.arg=TypeError("iterator result is not an object"),r.delegate=null,h)}(i,o);if(s){if(s===h)continue;return s}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if("suspendedStart"===a)throw a="completed",o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);a="executing";var u=f(e,r,o);if("normal"===u.type){if(a=o.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:o.done}}"throw"===u.type&&(a="completed",o.method="throw",o.arg=u.arg)}})}),s}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var h={};function d(){}function p(){}function y(){}var v={};u(v,o,function(){return this});var m=Object.getPrototypeOf,g=m&&m(m(P([])));g&&g!==t&&r.call(g,o)&&(v=g);var b=y.prototype=d.prototype=Object.create(v);function w(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var i;n(this,"_invoke",{value:function(n,o){function a(){return new t(function(i,a){!function n(i,o,a,s){var u=f(e[i],e,o);if("throw"!==u.type){var l=u.arg,c=l.value;return c&&"object"==typeof c&&r.call(c,"__await")?t.resolve(c.__await).then(function(e){n("next",e,a,s)},function(e){n("throw",e,a,s)}):t.resolve(c).then(function(e){l.value=e,a(l)},function(e){return n("throw",e,a,s)})}s(u.arg)}(n,o,i,a)})}return i=i?i.then(a,a):a()}})}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function P(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=y,n(b,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:p,configurable:!0}),p.displayName=u(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,s,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},w(E.prototype),u(E.prototype,a,function(){return this}),e.AsyncIterator=E,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new E(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},w(b),u(b,s,"Generator"),u(b,o,function(){return this}),u(b,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=P,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;k(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:P(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}function f(e,t,r,n,i,o,a){try{var s=e[o](a),u=s.value}catch(e){r(e);return}s.done?t(u):Promise.resolve(u).then(n,i)}function h(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var o=e.apply(t,r);function a(e){f(o,n,i,a,s,"next",e)}function s(e){f(o,n,i,a,s,"throw",e)}a(void 0)})}}function d(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,k(n.key),n)}}function y(e,t,r){return t&&p(e.prototype,t),r&&p(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function v(e,t,r){return(t=k(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function b(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function w(e,t,r){return(w=b()?Reflect.construct.bind():function(e,t,r){var n=[null];n.push.apply(n,t);var i=new(Function.bind.apply(e,n));return r&&g(i,r.prototype),i}).apply(null,arguments)}function E(e){var t="function"==typeof Map?new Map:void 0;return(E=function(e){if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e;if("function"!=typeof e)throw TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return w(e,arguments,m(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),g(r,e)})(e)}function x(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}/**
 * @module lib/functions
 *//**
 * Check to see this is a node environment.
 * @type {Boolean}
 *//* global global */var T=void 0!==s&&"[object global]"===({}).toString.call(s);/**
 * Get the name of the method for a given getter or setter.
 *
 * @param {string} prop The name of the property.
 * @param {string} type Either “get” or “set”.
 * @return {string}
 */function P(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}/**
 * Check to see if the URL is a Vimeo url.
 *
 * @param {string} url The url string.
 * @return {boolean}
 */function _(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}/**
 * Check to see if the URL is for a Vimeo embed.
 *
 * @param {string} url The url string.
 * @return {boolean}
 */function j(e){return/^https:\/\/player\.vimeo\.com\/video\/\d+/.test(e)}/**
 * Get the Vimeo URL from an element.
 * The element must have either a data-vimeo-id or data-vimeo-url attribute.
 *
 * @param {object} oEmbedParameters The oEmbed parameters.
 * @return {string}
 */function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,r=e.url,n=t||r;if(!n)throw Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(!isNaN(parseFloat(n))&&isFinite(n)&&Math.floor(n)==n)return"https://vimeo.com/".concat(n);if(_(n))return n.replace("http:","https:");if(t)throw TypeError("“".concat(t,"” is not a valid video id."));throw TypeError("“".concat(n,"” is not a vimeo.com url."))}/* eslint-disable max-params *//**
 * A utility method for attaching and detaching event handlers
 *
 * @param {EventTarget} target
 * @param {string | string[]} eventName
 * @param {function} callback
 * @param {'addEventListener' | 'on'} onName
 * @param {'removeEventListener' | 'off'} offName
 * @return {{cancel: (function(): void)}}
 */var A=function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"addEventListener",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"removeEventListener",o="string"==typeof t?[t]:t;return o.forEach(function(t){e[n](t,r)}),{cancel:function(){return o.forEach(function(t){return e[i](t,r)})}}},C=void 0!==Array.prototype.indexOf,S="undefined"!=typeof window&&void 0!==window.postMessage;if(!T&&(!C||!S))throw Error("Sorry, the Vimeo Player API is not available in this browser.");var N="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==s?s:"undefined"!=typeof self?self:{};!/*!
 * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */function(e){if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,r=Object.defineProperty&&function(){try{// Avoid IE8's broken Object.defineProperty
return 1===Object.defineProperty({},"x",{value:1}).x}catch(e){}}(),n=function(e,t,n){r?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:n}):e[t]=n};e.WeakMap=function(){// ECMA-262 23.3 WeakMap Objects
function e(){if(void 0===this)throw TypeError("Constructor WeakMap requires 'new'");// ECMA-262 23.3.1.1 WeakMap([iterable])
if(n(this,"_id","_WeakMap_"+o()+"."+o()),arguments.length>0)throw TypeError("WeakMap iterable is not supported")}function r(e,r){if(!i(e)||!t.call(e,"_id"))throw TypeError(r+" method called on incompatible receiver "+typeof e)}function o(){return Math.random().toString().substring(2)}return(// ECMA-262 23.3.3.2 WeakMap.prototype.delete(key)
n(e.prototype,"delete",function(e){if(r(this,"delete"),!i(e))return!1;var t=e[this._id];return!!t&&t[0]===e&&(delete e[this._id],!0)}),// ECMA-262 23.3.3.3 WeakMap.prototype.get(key)
n(e.prototype,"get",function(e){if(r(this,"get"),i(e)){var t=e[this._id];if(t&&t[0]===e)return t[1]}}),// ECMA-262 23.3.3.4 WeakMap.prototype.has(key)
n(e.prototype,"has",function(e){if(r(this,"has"),!i(e))return!1;var t=e[this._id];return!!t&&t[0]===e}),// ECMA-262 23.3.3.5 WeakMap.prototype.set(key, value)
n(e.prototype,"set",function(e,t){if(r(this,"set"),!i(e))throw TypeError("Invalid value used as weak map key");var o=e[this._id];return o&&o[0]===e?o[1]=t:n(e,this._id,[e,t]),this}),n(e,"_polyfill",!0),e)}()}function i(e){return Object(e)===e}}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:N);var F=(t=n={exports:{}},n.exports,// special form of UMD for polyfilling across evironments
N[r="Promise"]=N[r]||function(){var e,t,r,n=Object.prototype.toString,i="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;// dammit, IE8.
try{Object.defineProperty({},"x",{}),e=function(e,t,r,n){return Object.defineProperty(e,t,{value:r,writable:!0,configurable:!1!==n})}}catch(t){e=function(e,t,r){return e[t]=r,e}}function o(e,n){r.add(e,n),t||(t=i(r.drain))}// promise duck typing
function a(e){var t,r=typeof e;return null!=e&&("object"==r||"function"==r)&&(t=e.then),"function"==typeof t&&t}function s(){for(var e=0;e<this.chain.length;e++)// NOTE: This is a separate function to isolate
// the `try..catch` so that other code can be
// optimized better
(function(e,t,r){var n,i;try{!1===t?r.reject(e.msg):(n=!0===t?e.msg:t.call(void 0,e.msg))===r.promise?r.reject(TypeError("Promise-chain cycle")):(i=a(n))?i.call(n,r.resolve,r.reject):r.resolve(n)}catch(e){r.reject(e)}})(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function u(e){var t,r=this;// already triggered?
if(!r.triggered){r.triggered=!0,r.def&&(r=r.def);try{(t=a(e))?o(function(){var n=new f(r);try{t.call(e,function(){u.apply(n,arguments)},function(){l.apply(n,arguments)})}catch(e){l.call(n,e)}}):(r.msg=e,r.state=1,r.chain.length>0&&o(s,r))}catch(e){l.call(new f(r),e)}}}function l(e){var t=this;// already triggered?
!t.triggered&&(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,t.chain.length>0&&o(s,t))}function c(e,t,r,n){for(var i=0;i<t.length;i++)!function(i){e.resolve(t[i]).then(function(e){r(i,e)},n)}(i)}function f(e){this.def=e,this.triggered=!1}function h(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function d(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");// instance shadowing the inherited "brand"
// to signal an already "initialized" promise
this.__NPO__=1;var t=new h(this);this.then=function(e,r){var n={success:"function"!=typeof e||e,failure:"function"==typeof r&&r};return(// Note: `then(..)` itself can be borrowed to be used against
// a different promise constructor for making the chained promise,
// by substituting a different `this` binding.
n.promise=new this.constructor(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");n.resolve=e,n.reject=t}),t.chain.push(n),0!==t.state&&o(s,t),n.promise)},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,function(e){u.call(t,e)},function(e){l.call(t,e)})}catch(e){l.call(t,e)}}// Note: using a queue instead of array for efficiency
r=function(){var e,r,n;function i(e,t){this.fn=e,this.self=t,this.next=void 0}return{add:function(t,o){n=new i(t,o),r?r.next=n:e=n,r=n,n=void 0},drain:function(){var n=e;for(e=r=t=void 0;n;)n.fn.call(n.self),n=n.next}}}();var p=e({},"constructor",d,/*configurable=*/!1);return(// Note: Android 4 cannot use `Object.defineProperty(..)` here
d.prototype=p,// built-in "brand" to signal an "uninitialized" promise
e(p,"__NPO__",0,/*configurable=*/!1),e(d,"resolve",function(e){return(// spec mandated checks
// note: best "isPromise" check that's practical for now
e&&"object"==typeof e&&1===e.__NPO__?e:new this(function(t,r){if("function"!=typeof t||"function"!=typeof r)throw TypeError("Not a function");t(e)}))}),e(d,"reject",function(e){return new this(function(t,r){if("function"!=typeof t||"function"!=typeof r)throw TypeError("Not a function");r(e)})}),e(d,"all",function(e){var t=this;return(// spec mandated checks
"[object Array]"!=n.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t(function(r,n){if("function"!=typeof r||"function"!=typeof n)throw TypeError("Not a function");var i=e.length,o=Array(i),a=0;c(t,e,function(e,t){o[e]=t,++a===i&&r(o)},n)}))}),e(d,"race",function(e){var t=this;return(// spec mandated checks
"[object Array]"!=n.call(e)?t.reject(TypeError("Not an array")):new t(function(r,n){if("function"!=typeof r||"function"!=typeof n)throw TypeError("Not a function");c(t,e,function(e,t){r(t)},n)}))}),d)}(),t.exports&&(t.exports=N[r]),n.exports),L=new WeakMap;/**
 * Store a callback for a method or event for a player.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @param {(function(this:Player, *): void|{resolve: function, reject: function})} callback
 *        The callback to call or an object with resolve and reject functions for a promise.
 * @return {void}
 */function I(e,t,r){var n=L.get(e.element)||{};t in n||(n[t]=[]),n[t].push(r),L.set(e.element,n)}/**
 * Get the callbacks for a player and event or method.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @return {function[]}
 */function R(e,t){return(L.get(e.element)||{})[t]||[]}/**
 * Remove a stored callback for a method or event for a player.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @param {function} [callback] The specific callback to remove.
 * @return {boolean} Was this the last callback?
 */function M(e,t,r){var n=L.get(e.element)||{};if(!n[t])return!0;// If no callback is passed, remove all callbacks for the event
if(!r)return n[t]=[],L.set(e.element,n),!0;var i=n[t].indexOf(r);return -1!==i&&n[t].splice(i,1),L.set(e.element,n),n[t]&&0===n[t].length}/**
 * @module lib/postmessage
 *//**
 * Parse a message received from postMessage.
 *
 * @param {*} data The data received from postMessage.
 * @return {object}
 */function V(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){return(// If the message cannot be parsed, throw the error as a warning
console.warn(e),{})}return e}/**
 * Post a message to the specified target.
 *
 * @param {Player} player The player object to use.
 * @param {string} method The API method to call.
 * @param {object} params The parameters to send to the player.
 * @return {void}
 */function B(e,t,r){if(e.element.contentWindow&&e.element.contentWindow.postMessage){var n={method:t};void 0!==r&&(n.value=r);// IE 8 and 9 do not support passing messages, so stringify them
var i=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));i>=8&&i<10&&(n=JSON.stringify(n)),e.element.contentWindow.postMessage(n,e.origin)}}/**
 * @module lib/embed
 */var q=["autopause","autoplay","background","byline","color","colors","controls","dnt","height","id","interactive_params","keyboard","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];/**
 * Get the 'data-vimeo'-prefixed attributes from an element as an object.
 *
 * @param {HTMLElement} element The element.
 * @param {Object} [defaults={}] The default values to use.
 * @return {Object<string, string>}
 */function D(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return q.reduce(function(t,r){var n=e.getAttribute("data-vimeo-".concat(r));return(n||""===n)&&(t[r]=""===n?1:n),t},t)}/**
 * Create an embed from oEmbed data inside an element.
 *
 * @param {object} data The oEmbed data.
 * @param {HTMLElement} element The element to put the iframe in.
 * @return {HTMLIFrameElement} The iframe embed.
 */function U(e,t){var r=e.html;if(!t)throw TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var n=document.createElement("div");return n.innerHTML=r,t.appendChild(n.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}/**
 * Make an oEmbed call for the specified URL.
 *
 * @param {string} videoUrl The vimeo.com url for the video.
 * @param {Object} [params] Parameters to pass to oEmbed.
 * @param {HTMLElement} element The element.
 * @return {Promise}
 */function z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;return new Promise(function(n,i){if(!_(e))throw TypeError("“".concat(e,"” is not a vimeo.com url."));var o="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));for(var a in t)t.hasOwnProperty(a)&&(o+="&".concat(a,"=").concat(encodeURIComponent(t[a])));var s="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;s.open("GET",o,!0),s.onload=function(){if(404===s.status){i(Error("“".concat(e,"” was not found.")));return}if(403===s.status){i(Error("“".concat(e,"” is not embeddable.")));return}try{var t=JSON.parse(s.responseText);// Check api response for 403 on oembed
if(403===t.domain_status_code){// We still want to create the embed to give users visual feedback
U(t,r),i(Error("“".concat(e,"” is not embeddable.")));return}n(t)}catch(e){i(e)}},s.onerror=function(){var e=s.status?" (".concat(s.status,")"):"";i(Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},s.send()})}/** @typedef {import('./timing-src-connector.types').PlayerControls} PlayerControls *//** @typedef {import('./timing-object.types').TimingObject} TimingObject *//** @typedef {import('./timing-src-connector.types').TimingSrcConnectorOptions} TimingSrcConnectorOptions *//** @typedef {(msg: string) => any} Logger *//** @typedef {import('timing-object.types').TConnectionState} TConnectionState *//**
 * @type {TimingSrcConnectorOptions}
 *
 * For details on these properties and their effects, see the typescript definition referenced above.
 */var H={role:"viewer",autoPlayMuted:!0,allowedDrift:.3,maxAllowedDrift:1,minCheckInterval:.1,maxRateAdjustment:.2,maxTimeToCatchUp:1},$=/*#__PURE__*/function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(a,e);var t,r,n,i,o=(t=b(),function(){var e,r=m(a);if(t){var n=m(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return function(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return x(e)}(this,e)});/**
   * @param {PlayerControls} player
   * @param {TimingObject} timingObject
   * @param {TimingSrcConnectorOptions} options
   * @param {Logger} logger
   */function a(e,t){var r,n,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=arguments.length>3?arguments[3]:void 0;return d(this,a),v(x(n=o.call(this)),"logger",void 0),v(x(n),"speedAdjustment",0),/**
     * @param {PlayerControls} player
     * @param {number} newAdjustment
     * @return {Promise<void>}
     */v(x(n),"adjustSpeed",(r=h(/*#__PURE__*/c().mark(function e(t,r){var i;return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.speedAdjustment!==r){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.getPlaybackRate();case 4:return e.t0=e.sent,e.t1=n.speedAdjustment,e.t2=e.t0-e.t1,e.t3=r,i=e.t2+e.t3,n.log("New playbackRate:  ".concat(i)),e.next=12,t.setPlaybackRate(i);case 12:n.speedAdjustment=r;case 13:case"end":return e.stop()}},e)})),function(e,t){return r.apply(this,arguments)})),n.logger=s,n.init(t,e,l(l({},H),i)),n}return y(a,[{key:"disconnect",value:function(){this.dispatchEvent(new Event("disconnect"))}},{key:"init",value:(r=h(/*#__PURE__*/c().mark(function e(t,r,n){var i,o,a,s=this;return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.waitForTOReadyState(t,"open");case 2:if("viewer"!==n.role){e.next=10;break}return e.next=5,this.updatePlayer(t,r,n);case 5:i=A(t,"change",function(){return s.updatePlayer(t,r,n)}),o=this.maintainPlaybackPosition(t,r,n),this.addEventListener("disconnect",function(){o.cancel(),i.cancel()}),e.next=14;break;case 10:return e.next=12,this.updateTimingObject(t,r);case 12:a=A(r,["seeked","play","pause","ratechange"],function(){return s.updateTimingObject(t,r)},"on","off"),this.addEventListener("disconnect",function(){return a.cancel()});case 14:case"end":return e.stop()}},e,this)})),function(e,t,n){return r.apply(this,arguments)})},{key:"updateTimingObject",value:(n=h(/*#__PURE__*/c().mark(function e(t,r){return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,r.getCurrentTime();case 3:return e.t1=e.sent,e.next=6,r.getPaused();case 6:if(!e.sent){e.next=10;break}e.t2=0,e.next=13;break;case 10:return e.next=12,r.getPlaybackRate();case 12:e.t2=e.sent;case 13:e.t3=e.t2,e.t4={position:e.t1,velocity:e.t3},e.t0.update.call(e.t0,e.t4);case 16:case"end":return e.stop()}},e)})),function(e,t){return n.apply(this,arguments)})},{key:"updatePlayer",value:(i=h(/*#__PURE__*/c().mark(function e(t,r,n){var i,o,a;return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o=(i=t.query()).position,a=i.velocity,"number"==typeof o&&r.setCurrentTime(o),"number"!=typeof a){e.next=25;break}if(0!==a){e.next=11;break}return e.next=6,r.getPaused();case 6:if(e.t0=e.sent,!1!==e.t0){e.next=9;break}r.pause();case 9:e.next=25;break;case 11:if(!(a>0)){e.next=25;break}return e.next=14,r.getPaused();case 14:if(e.t1=e.sent,!0!==e.t1){e.next=19;break}return e.next=18,r.play().catch(/*#__PURE__*/function(){var e=h(/*#__PURE__*/c().mark(function e(t){return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!("NotAllowedError"===t.name&&n.autoPlayMuted)){e.next=5;break}return e.next=3,r.setMuted(!0);case 3:return e.next=5,r.play().catch(function(e){return console.error("Couldn't play the video from TimingSrcConnector. Error:",e)});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 18:this.updatePlayer(t,r,n);case 19:return e.next=21,r.getPlaybackRate();case 21:if(e.t2=e.sent,e.t3=a,!(e.t2!==e.t3)){e.next=25;break}r.setPlaybackRate(a);case 25:case"end":return e.stop()}},e,this)})),function(e,t,r){return i.apply(this,arguments)})},{key:"maintainPlaybackPosition",value:function(e,t,r){var n,i=this,o=r.allowedDrift,a=r.maxAllowedDrift,s=r.minCheckInterval,u=r.maxRateAdjustment,l=r.maxTimeToCatchUp,f=(n=h(/*#__PURE__*/c().mark(function r(){var n,s,f,h,d;return c().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(r.t0=0===e.query().velocity,r.t0){r.next=6;break}return r.next=4,t.getPaused();case 4:r.t1=r.sent,r.t0=!0===r.t1;case 6:if(!r.t0){r.next=8;break}return r.abrupt("return");case 8:return r.t2=e.query().position,r.next=11,t.getCurrentTime();case 11:if(r.t3=r.sent,s=Math.abs(n=r.t2-r.t3),i.log("Drift: ".concat(n)),!(s>a)){r.next=22;break}return r.next=18,i.adjustSpeed(t,0);case 18:t.setCurrentTime(e.query().position),i.log("Resync by currentTime"),r.next=29;break;case 22:if(!(s>o)){r.next=29;break}return d=(f=s/l)<(h=u)?(h-f)/2:h,r.next=28,i.adjustSpeed(t,d*Math.sign(n));case 28:i.log("Resync by playbackRate");case 29:case"end":return r.stop()}},r)})),function(){return n.apply(this,arguments)}),d=setInterval(function(){return f()},1e3*Math.min(l,Math.max(s,a)));return{cancel:function(){return clearInterval(d)}}}},{key:"log",value:function(e){var t;null===(t=this.logger)||void 0===t||t.call(this,"TimingSrcConnector: ".concat(e))}},{key:"waitForTOReadyState",value:/**
     * @param {TimingObject} timingObject
     * @param {TConnectionState} state
     * @return {Promise<void>}
     */function(e,t){return new Promise(function(r){!function n(){e.readyState===t?r():e.addEventListener("readystatechange",n,{once:!0})}()})}}]),a}(/*#__PURE__*/E(EventTarget)),W=new WeakMap,G=new WeakMap,K={},Y=/*#__PURE__*/function(){var e;/**
   * Create a Player.
   *
   * @param {(HTMLIFrameElement|HTMLElement|string|jQuery)} element A reference to the Vimeo
   *        player iframe, and id, or a jQuery object.
   * @param {object} [options] oEmbed parameters to use when creating an embed in the element.
   * @return {Player}
   */function t(e){var r,n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};// Not an element!
if(d(this,t),window.jQuery&&e instanceof jQuery&&(e.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),e=e[0]),"undefined"!=typeof document&&"string"==typeof e&&(e=document.getElementById(e)),!((r=e)&&1===r.nodeType&&"nodeName"in r&&r.ownerDocument&&r.ownerDocument.defaultView))throw TypeError("You must pass either a valid element or a valid id.");// Already initialized an embed in this div, so grab the iframe
if("IFRAME"!==e.nodeName){var o=e.querySelector("iframe");o&&(e=o)}// iframe url is not a Vimeo url
if("IFRAME"===e.nodeName&&!_(e.getAttribute("src")||""))throw Error("The player element passed isn’t a Vimeo embed.");// If there is already a player object in the map, return that
if(W.has(e))return W.get(e);this._window=e.ownerDocument.defaultView,this.element=e,this.origin="*";var a=new F(function(t,r){if(n._onMessage=function(e){if(_(e.origin)&&n.element.contentWindow===e.source){"*"===n.origin&&(n.origin=e.origin);var i=V(e.data);if(i&&"error"===i.event&&i.data&&"ready"===i.data.method){var o=Error(i.data.message);o.name=i.data.name,r(o);return}var a=i&&"ready"===i.event,s=i&&"ping"===i.method;if(a||s){n.element.setAttribute("data-ready","true"),t();return}!/**
 * Parse the data received from a message event.
 *
 * @param {Player} player The player that received the message.
 * @param {(Object|string)} data The message data. Strings will be parsed into JSON.
 * @return {void}
 */function(e,t){t=V(t);var r,n=[];if(t.event)"error"===t.event&&R(e,t.data.method).forEach(function(r){var n=Error(t.data.message);n.name=t.data.name,r.reject(n),M(e,t.data.method,r)}),n=R(e,"event:".concat(t.event)),r=t.data;else if(t.method){var i=/**
 * Return the first stored callback for a player and event or method.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @return {function} The callback, or false if there were none
 */function(e,t){var r=R(e,t);if(r.length<1)return!1;var n=r.shift();return M(e,t,n),n}(e,t.method);i&&(n.push(i),r=t.value)}n.forEach(function(t){try{if("function"==typeof t){t.call(e,r);return}t.resolve(r)}catch(e){// empty
}})}(n,i)}},n._window.addEventListener("message",n._onMessage),"IFRAME"!==n.element.nodeName){var o=D(e,i);z(O(o),o,e).then(function(t){var r,i,o=U(t,e);return(// Overwrite element with the new iframe,
// but store reference to the original element
n.element=o,n._originalElement=e,r=e,i=L.get(r),L.set(o,i),L.delete(r),W.set(n.element,n),t)}).catch(r)}});if(// Store a copy of this Player in the map
G.set(this,a),W.set(this.element,this),"IFRAME"===this.element.nodeName&&B(this,"ping"),K.isEnabled){var s=function(){return K.exit()};this.fullscreenchangeHandler=function(){K.isFullscreen?I(n,"event:exitFullscreen",s):M(n,"event:exitFullscreen",s),// eslint-disable-next-line
n.ready().then(function(){B(n,"fullscreenchange",K.isFullscreen)})},K.on("fullscreenchange",this.fullscreenchangeHandler)}return this}return(/**
   * Get a promise for a method.
   *
   * @param {string} name The API method to call.
   * @param {Object} [args={}] Arguments to send via postMessage.
   * @return {Promise}
   */y(t,[{key:"callMethod",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new F(function(n,i){// We are storing the resolve/reject handlers to call later, so we
// can’t return here.
// eslint-disable-next-line promise/always-return
return t.ready().then(function(){I(t,e,{resolve:n,reject:i}),B(t,e,r)}).catch(i)})}},{key:"get",value:function(e){var t=this;return new F(function(r,n){// We are storing the resolve/reject handlers to call later, so we
// can’t return here.
// eslint-disable-next-line promise/always-return
return e=P(e,"get"),t.ready().then(function(){I(t,e,{resolve:r,reject:n}),B(t,e)}).catch(n)})}},{key:"set",value:function(e,t){var r=this;return new F(function(n,i){if(e=P(e,"set"),null==t)throw TypeError("There must be a value to set.");// We are storing the resolve/reject handlers to call later, so we
// can’t return here.
// eslint-disable-next-line promise/always-return
return r.ready().then(function(){I(r,e,{resolve:n,reject:i}),B(r,e,t)}).catch(i)})}},{key:"on",value:function(e,t){if(!e)throw TypeError("You must pass an event name.");if(!t)throw TypeError("You must pass a callback function.");if("function"!=typeof t)throw TypeError("The callback must be a function.");0===R(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch(function(){// Ignore the error. There will be an error event fired that
// will trigger the error callback if they are listening.
}),I(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw TypeError("The callback must be a function.");// If there are no callbacks left, remove the listener
M(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch(function(e){// Ignore the error. There will be an error event fired that
// will trigger the error callback if they are listening.
})}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=G.get(this)||new F(function(e,t){t(Error("Unknown player. Probably unloaded."))});return F.resolve(e)}},{key:"addCuePoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:e,data:t})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"requestFullscreen",value:function(){return K.isEnabled?K.request(this.element):this.callMethod("requestFullscreen")}},{key:"exitFullscreen",value:function(){return K.isEnabled?K.exit():this.callMethod("exitFullscreen")}},{key:"getFullscreen",value:function(){return K.isEnabled?F.resolve(K.isFullscreen):this.get("fullscreen")}},{key:"requestPictureInPicture",value:function(){return this.callMethod("requestPictureInPicture")}},{key:"exitPictureInPicture",value:function(){return this.callMethod("exitPictureInPicture")}},{key:"getPictureInPicture",value:function(){return this.get("pictureInPicture")}},{key:"remotePlaybackPrompt",value:function(){return this.callMethod("remotePlaybackPrompt")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var e=this;return new F(function(t){// If the clip is private there is a case where the element stays the
// div element. Destroy should reset the div and remove the iframe child.
if(G.delete(e),W.delete(e.element),e._originalElement&&(W.delete(e._originalElement),e._originalElement.removeAttribute("data-vimeo-initialized")),e.element&&"IFRAME"===e.element.nodeName&&e.element.parentNode&&(e.element.parentNode.parentNode&&e._originalElement&&e._originalElement!==e.element.parentNode?e.element.parentNode.parentNode.removeChild(e.element.parentNode):e.element.parentNode.removeChild(e.element)),e.element&&"DIV"===e.element.nodeName&&e.element.parentNode){e.element.removeAttribute("data-vimeo-initialized");var r=e.element.querySelector("iframe");r&&r.parentNode&&(r.parentNode.parentNode&&e._originalElement&&e._originalElement!==r.parentNode?r.parentNode.parentNode.removeChild(r.parentNode):r.parentNode.removeChild(r))}e._window.removeEventListener("message",e._onMessage),K.isEnabled&&K.off("fullscreenchange",e.fullscreenchangeHandler),t()})}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getCameraProps",value:function(){return this.get("cameraProps")}},{key:"setCameraProps",value:function(e){return this.set("cameraProps",e)}},{key:"getChapters",value:function(){return this.get("chapters")}},{key:"getCurrentChapter",value:function(){return this.get("currentChapter")}},{key:"getColor",value:function(){return this.get("color")}},{key:"getColors",value:function(){return F.all([this.get("colorOne"),this.get("colorTwo"),this.get("colorThree"),this.get("colorFour")])}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"setColors",value:function(e){if(!Array.isArray(e))return new F(function(e,t){return t(TypeError("Argument must be an array."))});var t=new F(function(e){return e(null)}),r=[e[0]?this.set("colorOne",e[0]):t,e[1]?this.set("colorTwo",e[1]):t,e[2]?this.set("colorThree",e[2]):t,e[3]?this.set("colorFour",e[3]):t];return F.all(r)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"setMuted",value:function(e){return this.set("muted",e)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getQualities",value:function(){return this.get("qualities")}},{key:"getQuality",value:function(){return this.get("quality")}},{key:"setQuality",value:function(e){return this.set("quality",e)}},{key:"getRemotePlaybackAvailability",value:function(){return this.get("remotePlaybackAvailability")}},{key:"getRemotePlaybackState",value:function(){return this.get("remotePlaybackState")}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}},{key:"setTimingSrc",value:(e=h(/*#__PURE__*/c().mark(function e(t,r){var n,i=this;return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw TypeError("A Timing Object must be provided.");case 2:return e.next=4,this.ready();case 4:return n=new $(this,t,r),B(this,"notifyTimingObjectConnect"),n.addEventListener("disconnect",function(){return B(i,"notifyTimingObjectDisconnect")}),e.abrupt("return",n);case 8:case"end":return e.stop()}},e,this)})),function(t,r){return e.apply(this,arguments)})}]),t)}();T||(o={fullscreenchange:(i=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],// New WebKit
["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],// Old WebKit
["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],r=0,n=t.length,i={};r<n;r++)if((e=t[r])&&e[1]in document){for(r=0;r<e.length;r++)i[t[0][r]]=e[r];return i}return!1}()).fullscreenchange,fullscreenerror:i.fullscreenerror},Object.defineProperties(a={request:function(e){return new Promise(function(t,r){var n=function e(){a.off("fullscreenchange",e),t()};a.on("fullscreenchange",n);var o=(e=e||document.documentElement)[i.requestFullscreen]();o instanceof Promise&&o.then(n).catch(r)})},exit:function(){return new Promise(function(e,t){if(!a.isFullscreen){e();return}var r=function t(){a.off("fullscreenchange",t),e()};a.on("fullscreenchange",r);var n=document[i.exitFullscreen]();n instanceof Promise&&n.then(r).catch(t)})},on:function(e,t){var r=o[e];r&&document.addEventListener(r,t)},off:function(e,t){var r=o[e];r&&document.removeEventListener(r,t)}},{isFullscreen:{get:function(){return!!document[i.fullscreenElement]}},element:{enumerable:!0,get:function(){return document[i.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){// Coerce to boolean in case of old WebKit
return!!document[i.fullscreenEnabled]}}}),K=a,/**
 * Initialize all embeds within a specific element
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),r=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))};t.forEach(function(e){try{// Skip any that have data-vimeo-defer
if(null!==e.getAttribute("data-vimeo-defer"))return;var t=D(e),n=O(t);z(n,t,e).then(function(t){return U(t,e)}).catch(r)}catch(e){r(e)}})}(),/**
 * Resize embeds when messaged by the player.
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;// Prevent execution if users include the player.js script multiple times.
window.VimeoPlayerResizeEmbeds_||(window.VimeoPlayerResizeEmbeds_=!0,window.addEventListener("message",function(t){if(_(t.origin)&&t.data&&"spacechange"===t.data.event){for(var r=e.querySelectorAll("iframe"),n=0;n<r.length;n++)if(r[n].contentWindow===t.source){r[n].parentElement.style.paddingBottom="".concat(t.data.data[0].bottom,"px");break}}}))}(),/**
 * Add chapters to existing metadata for Google SEO
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;//  Prevent execution if users include the player.js script multiple times.
window.VimeoSeoMetadataAppended||(window.VimeoSeoMetadataAppended=!0,window.addEventListener("message",function(t){if(_(t.origin)){var r=V(t.data);if(r&&"ready"===r.event)for(var n=e.querySelectorAll("iframe"),i=0;i<n.length;i++){var o=n[i],a=o.contentWindow===t.source;j(o.src)&&a&&new Y(o).callMethod("appendVideoMetadata",window.location.href)}}}))}(),/**
 * Seek to time indicated by vimeo_t query parameter if present in URL
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;//  Prevent execution if users include the player.js script multiple times.
if(!window.VimeoCheckedUrlTimeParam){window.VimeoCheckedUrlTimeParam=!0;var t=function(e){"console"in window&&console.error&&console.error("There was an error getting video Id: ".concat(e))};window.addEventListener("message",function(r){if(_(r.origin)){var n=V(r.data);if(n&&"ready"===n.event)for(var i=e.querySelectorAll("iframe"),o=0;o<i.length;o++)!function(){var e=i[o],n=e.contentWindow===r.source;if(j(e.src)&&n){var a=new Y(e);a.getVideoId().then(function(e){var t=new RegExp("[?&]vimeo_t_".concat(e,"=([^&#]*)")).exec(window.location.href);if(t&&t[1]){var r=decodeURI(t[1]);a.setCurrentTime(r)}}).catch(t)}}()}})}}());var Q={},J="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||// eslint-disable-next-line no-undef
void 0!==s&&s||{},X={searchParams:"URLSearchParams"in J,iterable:"Symbol"in J&&"iterator"in Symbol,blob:"FileReader"in J&&"Blob"in J&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in J,arrayBuffer:"ArrayBuffer"in J};if(X.arrayBuffer)var Z=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],ee=ArrayBuffer.isView||function(e){return e&&Z.indexOf(Object.prototype.toString.call(e))>-1};function et(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||""===e)throw TypeError('Invalid character in header field name: "'+e+'"');return e.toLowerCase()}function er(e){return"string"!=typeof e&&(e=String(e)),e}// Build a destructive iterator for the value list
function en(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return X.iterable&&(t[Symbol.iterator]=function(){return t}),t}function ei(e){this.map={},e instanceof ei?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){if(2!=e.length)throw TypeError("Headers constructor: expected name/value pair to be length 2, found"+e.length);this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function eo(e){if(!e._noBody){if(e.bodyUsed)return Promise.reject(TypeError("Already read"));e.bodyUsed=!0}}function ea(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function es(e){var t=new FileReader,r=ea(t);return t.readAsArrayBuffer(e),r}function eu(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function el(){return this.bodyUsed=!1,this._initBody=function(e){if(/*
      fetch-mock wraps the Response object in an ES6 Proxy to
      provide useful test harness features such as flush. However, on
      ES5 browsers without fetch or Proxy support pollyfills must be used;
      the proxy-pollyfill is unable to proxy an attribute unless it exists
      on the object before the Proxy is created. This change ensures
      Response.bodyUsed exists on the instance, while maintaining the
      semantic of setting Request.bodyUsed in the constructor before
      _initBody is called.
    */// eslint-disable-next-line no-self-assign
this.bodyUsed=this.bodyUsed,this._bodyInit=e,e){if("string"==typeof e)this._bodyText=e;else if(X.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(X.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(X.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else{var t;X.arrayBuffer&&X.blob&&(t=e)&&DataView.prototype.isPrototypeOf(t)?(this._bodyArrayBuffer=eu(e.buffer),// IE 10-11 can't handle a DataView body.
this._bodyInit=new Blob([this._bodyArrayBuffer])):X.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||ee(e))?this._bodyArrayBuffer=eu(e):this._bodyText=e=Object.prototype.toString.call(e)}}else this._noBody=!0,this._bodyText="";!this.headers.get("content-type")&&("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):X.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},X.blob&&(this.blob=function(){var e=eo(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(!this._bodyFormData)return Promise.resolve(new Blob([this._bodyText]));throw Error("could not read FormData body as blob")}),this.arrayBuffer=function(){if(this._bodyArrayBuffer)return eo(this)||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer));if(X.blob)return this.blob().then(es);throw Error("could not read as ArrayBuffer")},this.text=function(){var e,t,r,n,i,o=eo(this);if(o)return o;if(this._bodyBlob)return e=this._bodyBlob,r=ea(t=new FileReader),i=(n=/charset=([A-Za-z0-9_-]+)/.exec(e.type))?n[1]:"utf-8",t.readAsText(e,i),r;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}(this._bodyArrayBuffer));if(!this._bodyFormData)return Promise.resolve(this._bodyText);throw Error("could not read FormData body as text")},X.formData&&(this.formData=function(){return this.text().then(eh)}),this.json=function(){return this.text().then(JSON.parse)},this}ei.prototype.append=function(e,t){e=et(e),t=er(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},ei.prototype.delete=function(e){delete this.map[et(e)]},ei.prototype.get=function(e){return e=et(e),this.has(e)?this.map[e]:null},ei.prototype.has=function(e){return this.map.hasOwnProperty(et(e))},ei.prototype.set=function(e,t){this.map[et(e)]=er(t)},ei.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},ei.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),en(e)},ei.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),en(e)},ei.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),en(e)},X.iterable&&(ei.prototype[Symbol.iterator]=ei.prototype.entries);// HTTP methods whose capitalization should be normalized
var ec=["CONNECT","DELETE","GET","HEAD","OPTIONS","PATCH","POST","PUT","TRACE"];function ef(e,t){if(!(this instanceof ef))throw TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var r,n,i=(t=t||{}).body;if(e instanceof ef){if(e.bodyUsed)throw TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new ei(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,i||null==e._bodyInit||(i=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",(t.headers||!this.headers)&&(this.headers=new ei(t.headers)),this.method=(n=(r=t.method||this.method||"GET").toUpperCase(),ec.indexOf(n)>-1?n:r),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal||function(){if("AbortController"in J)return new AbortController().signal}(),this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&i)throw TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(i),("GET"===this.method||"HEAD"===this.method)&&("no-store"===t.cache||"no-cache"===t.cache)){// Search for a '_' parameter in the query string
var o=/([?&])_=[^&]*/;o.test(this.url)?this.url=this.url.replace(o,"$1_="+new Date().getTime()):this.url+=(/\?/.test(this.url)?"&":"?")+"_="+new Date().getTime()}}function eh(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),i=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(i))}}),t}function ed(e,t){if(!(this instanceof ed))throw TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');if(t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.status<200||this.status>599)throw RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");this.ok=this.status>=200&&this.status<300,this.statusText=void 0===t.statusText?"":""+t.statusText,this.headers=new ei(t.headers),this.url=t.url||"",this._initBody(e)}ef.prototype.clone=function(){return new ef(this,{body:this._bodyInit})},el.call(ef.prototype),el.call(ed.prototype),ed.prototype.clone=function(){return new ed(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new ei(this.headers),url:this.url})},ed.error=function(){var e=new ed(null,{status:200,statusText:""});return e.status=0,e.type="error",e};var ep=[301,302,303,307,308];ed.redirect=function(e,t){if(-1===ep.indexOf(t))throw RangeError("Invalid status code");return new ed(null,{status:t,headers:{location:e}})};var ey=J.DOMException;try{new ey}catch(e){(ey=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack}).prototype=Object.create(Error.prototype),ey.prototype.constructor=ey}function ev(e,t){return new Promise(function(r,n){var i=new ef(e,t);if(i.signal&&i.signal.aborted)return n(new ey("Aborted","AbortError"));var o=new XMLHttpRequest;function a(){o.abort()}if(o.onload=function(){var e,t,n={statusText:o.statusText,headers:(e=o.getAllResponseHeaders()||"",t=new ei,// Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
// https://github.com/github/fetch/issues/748
// https://github.com/zloirock/core-js/issues/751
e.replace(/\r?\n[\t ]+/g," ").split("\r").map(function(e){return 0===e.indexOf("\n")?e.substr(1,e.length):e}).forEach(function(e){var r=e.split(":"),n=r.shift().trim();if(n){var i=r.join(":").trim();try{t.append(n,i)}catch(e){console.warn("Response "+e.message)}}}),t)};i.url.startsWith("file://")&&(o.status<200||o.status>599)?n.status=200:n.status=o.status,n.url="responseURL"in o?o.responseURL:n.headers.get("X-Request-URL");var a="response"in o?o.response:o.responseText;setTimeout(function(){r(new ed(a,n))},0)},o.onerror=function(){setTimeout(function(){n(TypeError("Network request failed"))},0)},o.ontimeout=function(){setTimeout(function(){n(TypeError("Network request timed out"))},0)},o.onabort=function(){setTimeout(function(){n(new ey("Aborted","AbortError"))},0)},o.open(i.method,function(e){try{return""===e&&J.location.href?J.location.href:e}catch(t){return e}}(i.url),!0),"include"===i.credentials?o.withCredentials=!0:"omit"===i.credentials&&(o.withCredentials=!1),"responseType"in o&&(X.blob?o.responseType="blob":X.arrayBuffer&&(o.responseType="arraybuffer")),t&&"object"==typeof t.headers&&!(t.headers instanceof ei||J.Headers&&t.headers instanceof J.Headers)){var s=[];Object.getOwnPropertyNames(t.headers).forEach(function(e){s.push(et(e)),o.setRequestHeader(e,er(t.headers[e]))}),i.headers.forEach(function(e,t){-1===s.indexOf(t)&&o.setRequestHeader(t,e)})}else i.headers.forEach(function(e,t){o.setRequestHeader(t,e)});i.signal&&(i.signal.addEventListener("abort",a),o.onreadystatechange=function(){// DONE (success or failure)
4===o.readyState&&i.signal.removeEventListener("abort",a)}),o.send(void 0===i._bodyInit?null:i._bodyInit)})}function em(e){let t=Math.floor(e/3600),r=Math.floor(e%3600/60),n=e%60;return[t,r>9?r:t?"0"+r:r||"0",n>9?n:"0"+n].filter(Boolean).join(":")}/**
 * VimeoPlaylist
 * Class for interacting with the Vimeo API
 * to create a continous playlist of Vimeo vids
 * @constructor
 * @requires @vimeo/player
 * @param {DOMElement} el - player element passed to Vimeo's imported Player class.
 * @param {Object} options - plugin options, playlist, etc.
 *
 * @author Stephen Scaff (github.com/stephenscaff || stephenscaff.com)
 */function eg(e,t){t=t||{},Object.assign(this,eg.defaults,t),this.hasPlayerId(e)&&(this.hasPlaylist=this.hasPlaylist,this.playlistOutput=document.querySelector(this.playlistOutput),this.playlistNavPrev=document.querySelector(this.playlistNavPrev),this.playlistNavNext=document.querySelector(this.playlistNavNext),this.fullscreenToggle=document.querySelector(this.fullscreenToggle),this.fullscreenToggleKeyCode=this.fullscreenToggleKeyCode,this.playListItems=[],this.currentVidIdx=0,this.vidCount=this.playlist.length,this.isActive=!1,this.activeClass="is-playing",this.pausedClass="is-paused",this.debug=this.debug,this.player=new Y(e,{id:this.playlist[this.currentVidIdx].id,width:this.width,title:this.title,muted:this.muted,controls:this.controls,autoplay:this.autoplay,color:this.color}))}ev.polyfill=!0,J.fetch||(J.fetch=ev,J.Headers=ei,J.Request=ef,J.Response=ed),Q=self.fetch.bind(self),/**
 * Default Options
 */eg.defaults={width:900,loop:!1,title:!1,muted:!0,controls:!0,autoplay:!0,color:"#7B8EF9",fullscreenToggle:"#js-vp-fstoggle",fullscreenToggleKeyCode:null,hasPlaylist:!0,playlistOutput:"#js-vp-playlist",playlistNavNext:"#js-vp-next",playlistNavPrev:"#js-vp-prev",supportsKeyNav:!0,playlist:[],itemTmpl:function(e){let t=em(e.duration);return`
    <a class="plist-item__link" data-vimeo-id="${e.id}" tabindex="0">
      <figure class="plist-item__thumb">
        <div class="plist-item__thumb-color">
          <img class="plist-item__thumb-img" src="${e.thumbnail_large}"/>
          <svg class="plist-item__icon-play" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#fff" width="50" height="50" viewBox="0 0 36 36">
            <path d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path>
          </svg>
        </div>
      </figure>
      <div class="plist-item__main">
        <span class="plist-item__title">${e.title}</span>
        <span class="plist-item__user">${e.user_name}</span>
        <span class="plist-item__time-dur">${t}</span>

      </div>
    </a>
  `},itemName:"plist-item",itemTrigger:".plist-item__link",debug:!1},/**
 * VimeoPlaylist Methods
 */eg.prototype={constructor:eg,/**
   * Has Player ID
   * Check if we have a valid player element id
   * to render Vimeo.Player
   * @param {Element ID}
   * @return {Boolean}
   */hasPlayerId(e){var t;return t=`#${e}`,!!document.body.contains(document.querySelector(t))||(console.warn("VimeoPlaylist: Provide a valid ID to render Vimeo Player"),!1)},/**
   * Setup and buildPlaylist
   * buildPlaylist makes vimeo api requests
   * and calls playlist logic once those
   * promises resolve.
   */init(){this.player&&(this.settings(),this.listeners(),this.hasPlaylist&&this.buildPlaylist())},/**
   * Player settings
   */settings(){this.player.setColor(this.color)},/**
   * Player Listeners
   * @fires {onEnd | onPause | onPlay | toggleFullscreen}
   */listeners(){this.onAlmostEnd(),this.onEnd(),this.onPause(),this.onPlay(),this.onFullScreenToggle(),this.handleNavClicks(),this.supportsKeyNav&&this.handleKeyNav()},/**
   * LoadVid
   * Helper to load vimeo vids by their ID
   * No need for this.player['play']() and it
   * can cause a browser promise pause() error.
   * @param {string} id - vimeo video id
   */loadVid(e){console.log(e,this.player,this.player.loadVideo(e)),this.player.loadVideo(e).then(()=>{this.setActiveState()}).catch(e=>{// @todo better error handling
this.debug&&console.error(e,"error loading video")})},/**
   * OnEnd
   * Listens for when a vid ends.
   * @fires next()
   */onEnd(){this.player.on("ended",()=>{this.debug&&console.debug("ended"),this.next()})},/**
   * OnTimeupdate
   * Listens for when almost ends, based on threshold
   * @fires next()
   */onAlmostEnd(){this.player.on("timeupdate",e=>{let t=e.seconds,r=e.duration;r-t<=.5&&(this.debug&&console.log("Video is almost ended"),this.next())})},/**
   * OnPause
   * @fires setPausedState
   */onPause(){this.player.on("pause",()=>{this.debug&&console.debug("pause"),this.setPausedState()})},/**
   * On Play
   * Calls setActiveState on play
   * @fires {setActiveState}
   */onPlay(){this.player.on("play",()=>{this.debug&&console.debug("play"),this.setActiveState()})},/**
   * On Fullscreen Toggle
   * @fires {toggleFullscreen} - if fullscreenToggle
   */onFullScreenToggle(){this.fullscreenToggleKeyCode&&window.addEventListener("keydown",e=>{e.code===this.fullscreenToggleKeyCode&&this.toggleFullscreen()},!1),this.fullscreenToggle&&this.fullscreenToggle.addEventListener("click",e=>{e.preventDefault(),this.toggleFullscreen()})},/**
   * Build Playlist from fetched vimeo vids
   * Fetches vids inConstructs playlist markup from this.playlist by
   *
   * @external { fetchAllVids | createFrag }
   * @fires { setupFirstVid | handlePlaylistClicks}
   */buildPlaylist(){let t=0,r=Promise.all(this.playlist.map(t=>/*@__PURE__*/e(Q)(`https://vimeo.com/api/v2/video/${t.id}.json`).then(e=>{if(e.ok)return e.json();throw Error("Status code error :"+e.status)}).catch(e=>console.log(e))));r.then(e=>{e.forEach(e=>{var r,n;let i,o;if(void 0===e)return;let a=(r=this.itemTmpl(e[0]),n=this.itemName,i=document.createDocumentFragment(),o=document.createElement("article"),o.className+=n,o.innerHTML=r,i.appendChild(o),o);if(t++,this.playlistOutput?this.playlistOutput.appendChild(a):this.debug&&console.warn("VimeoPlaylist: Provide a valid selector to output playlist"),t===this.vidCount){// define this.playlistItems
if(this.setupFirstVid(),!this.hasPlaylist)return;this.playlistItems=document.querySelectorAll(this.itemTrigger),this.handlePlaylistClicks()}})})},/**
   * setupFirstVid
   * Handle setup for first vid in sequence
   * @fires { player['play'] }
   */setupFirstVid(){this.playlistItems&&(this.playlistItems[0].classList.add(this.activeClass),this.player.element.setAttribute("allow","autoplay"),this.player.play())},/**
   * HandlePlaylistClicks
   * Loops over this.playlistItems and listens for
   * clicks to play vid and define currentVidIdx
   * @fires { loadVid | setActiveState }
   */handlePlaylistClicks(){this.playlistItems.forEach((e,t)=>{e.addEventListener("click",e=>{e.preventDefault(),this.currentVidIdx=t,this.play(this.currentVidIdx)}),e.addEventListener("keydown",e=>{"Enter"===e.code&&(this.currentVidIdx=t,this.play(this.currentVidIdx))})})},/**
   * Handle Nav Clicks
   * Pal
   */handleNavClicks(){this.playlistNavPrev&&this.playlistNavPrev.addEventListener("click",e=>{e.preventDefault(),this.prev()}),this.playlistNavNext&&this.playlistNavNext.addEventListener("click",e=>{e.preventDefault(),this.next()})},/**
   * Handle Key Navigation
   * Keydown listener for next/prev arrow keys control
   */handleKeyNav(){document.addEventListener("keydown",e=>{"ArrowRight"===e.code&&this.next(),"ArrowLeft"===e.code&&this.prev()},!1)},/**
   * Set Active State
   * Toggle active state class
   */setActiveState(){let e=document.querySelector(`.${this.activeClass}`),t=document.querySelector(`.${this.pausedClass}`);e&&e.classList.remove(this.activeClass),t&&t.classList.remove(this.pausedClass),this.hasPlaylist&&this.playlistItems[this.currentVidIdx]&&this.playlistItems[this.currentVidIdx].classList.add(this.activeClass)},/**
   * Set Paused Class
   * Adds Paused Class to active playlist item
   */setPausedState(){let e=document.querySelector(`.${this.activeClass}`);e&&e.classList.add(this.pausedClass)},/**
   * Play
   * Plays selected playlist vid by currentIndex
   * @param {number} currentIndex - index
   */play(e){this.currentVidIdx=e,this.loadVid(this.playlist[this.currentVidIdx]),this.setActiveState()},/**
   * Next
   * Tracks current video index and progress to next.
   */next(){this.currentVidIdx++,this.currentVidIdx<this.vidCount?this.currentVidIdx:this.currentVidIdx=0,this.loadVid(this.playlist[this.currentVidIdx])},/**
   * Prev
   * Not in use yet, but we may want an actual playlist at some point
   * Or, at least the ability to go forward and backward.
   */prev(){this.currentVidIdx--,this.currentVidIdx<0&&(this.currentVidIdx=0),this.loadVid(this.playlist[this.currentVidIdx])},/**
   * Toggle Fullscreen
   * Targeted vimeo iframe for full screen vid on Enter
   */toggleFullscreen(){let e=this.player.element;document.vid?document.exitFullscreen&&document.exitFullscreen():e.requestFullscreen()}};var eb={};// Plugin Options
let ew={hasPlaylist:!0,playlist:/*@__PURE__*/e(JSON.parse('[{"id":"288588748"},{"id":"293125541"},{"id":"328536852"},{"id":"281449879"},{"id":"341760931"},{"id":"316705014"},{"id":"218833458"},{"id":"343072157"},{"id":"343513016"},{"id":"354894903"},{"id":"229056408"},{"id":"373994913"},{"id":"310394931"},{"id":"342058177"},{"id":"77149266"},{"id":"330089817"},{"id":"294478296"},{"id":"373858773"},{"id":"246877776"},{"id":"262117047"},{"id":"312120351"}]')),playlistOutput:"#js-vp-playlist",color:"#6c77f7",fullscreenToggle:"#js-vp-fstoggle",fullscreenToggleKeyCode:"KeyF",itemTmpl:function(e){let t=em(e.duration);return`
    <a class="plist-item__link" data-vimeo-id="${e.id}" tabindex="0">
      <figure class="plist-item__thumb">
        <div class="plist-item__thumb-color">
          <img class="plist-item__thumb-img" src="${e.thumbnail_large}"/>
          <svg class="plist-item__icon-play" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#fff" width="50" height="50" viewBox="0 0 36 36">
            <path d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path>
          </svg>
        </div>
      </figure>
      <div class="plist-item__main">
        <span class="plist-item__title">${e.title}</span>
        <span class="plist-item__user">${e.user_name}</span>
        <span class="plist-item__time-dur">${t}</span>
        <div class="equalizer">
          <span class="equalizer__item"></span>
          <span class="equalizer__item"></span>
          <span class="equalizer__item"></span>
        </div>
      </div>
    </a>
  `}};// Init on #js-player
const eE=new eg("js-vp-player",ew);eE.init();//# sourceMappingURL=index.5da0d451.js.map

//# sourceMappingURL=index.5da0d451.js.map
