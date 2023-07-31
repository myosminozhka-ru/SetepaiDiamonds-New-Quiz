/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.inputNodes=e.querySelectorAll(".q-items__input"),this.callbacks=[],this.init()}var n,r;return n=t,(r=[{key:"init",value:function(){this.changeHandler()}},{key:"changeHandler",value:function(){var t=this;this.inputNodes.forEach((function(e){e.addEventListener("change",t.change.bind(t))}))}},{key:"change",value:function(t){this.callbacks.forEach((function(e){return e(t)}))}},{key:"onChange",value:function(t){this.callbacks.push(t)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.prevBtnNode=e.querySelector(".q-controller__btn.q-controller__btn--prev"),this.nextBtnNode=e.querySelector(".q-controller__btn.q-controller__btn--next"),this.nextCallbacks=[],this.prevCallbacks=[],this.init()}var e,n;return e=t,(n=[{key:"init",value:function(){this.nextHandler(),this.prevHandler()}},{key:"nextHandler",value:function(){var t;this.nextBtnNode&&(null===(t=this.nextBtnNode)||void 0===t||t.addEventListener("click",this.next.bind(this)))}},{key:"prevHandler",value:function(){var t;this.prevBtnNode&&(null===(t=this.prevBtnNode)||void 0===t||t.addEventListener("click",this.prev.bind(this)))}},{key:"next",value:function(t){this.nextCallbacks.forEach((function(e){return e(t)}))}},{key:"prev",value:function(t){this.prevCallbacks.forEach((function(e){return e(t)}))}},{key:"disableNext",value:function(t,e){this.nextBtnNode.classList.add("q-disabled")}},{key:"ableNext",value:function(){this.nextBtnNode.classList.remove("q-disabled")}},{key:"onNext",value:function(t){this.nextCallbacks.push(t)}},{key:"onPrev",value:function(t){this.prevCallbacks.push(t)}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(){c=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function f(t,e,n,o){var i=e&&e.prototype instanceof y?e:y,a=Object.create(i.prototype),c=new L(o||[]);return r(a,"_invoke",{value:k(t,n,c)}),a}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var p={};function y(){}function v(){}function d(){}var m={};s(m,i,(function(){return this}));var b=Object.getPrototypeOf,g=b&&b(b(N([])));g&&g!==e&&n.call(g,i)&&(m=g);var w=d.prototype=y.prototype=Object.create(m);function S(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function o(r,i,c,u){var l=h(t[r],t,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==a(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return o("throw",t,c,u)}))}u(l.arg)}var i;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return i=i?i.then(r,r):r()}})}function k(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=q(a,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=h(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function q(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,q(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var o=h(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return v.prototype=d,r(w,"constructor",{value:d,configurable:!0}),r(d,"constructor",{value:v,configurable:!0}),v.displayName=s(d,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},S(_.prototype),s(_.prototype,u,(function(){return this})),t.AsyncIterator=_,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new _(f(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(w),s(w,l,"Generator"),s(w,i,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=N,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},t}function u(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}var h=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.formNode=document.querySelector(".q-form__form"),this.formBtn=document.querySelector(".q-controller__btn--submit"),this.inputNodes=document.querySelectorAll(".q-form__item input"),this.action=this.formNode?this.formNode.getAttribute("action"):null,this.el=e,this.formType=document.querySelector(".q-app__start")}var e,n,r,o;return e=t,n=[{key:"init",value:function(){this.submitHandler()}},{key:"initEl",value:function(t){this.el=t}},{key:"submitHandler",value:function(){this.formBtn&&this.formBtn.addEventListener("click",this.submit.bind(this))}},{key:"submit",value:(r=c().mark((function t(e){var n,r,o,i,a,l,s,f,h,p,y,v,d,m;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==e||e.preventDefault(),n=!1,this.inputNodes.forEach((function(t){""===t.value&&(n=!0)})),!n){t.next=6;break}return alert("Fill in all required fields"),t.abrupt("return");case 6:r=new FormData(this.formNode),o=new FormData(this.el),i=new FormData(this.formType),a=u(o.entries());try{for(a.s();!(l=a.n()).done;)s=l.value,r.append(s[0],s[1])}catch(t){a.e(t)}finally{a.f()}f=u(i.entries());try{for(f.s();!(h=f.n()).done;)p=h.value,r.append(p[0],p[1])}catch(t){f.e(t)}finally{f.f()}y=u(r.entries());try{for(y.s();!(v=y.n()).done;)d=v.value,console.log("".concat(d[0],", ").concat(d[1]))}catch(t){y.e(t)}finally{y.f()}return t.next=17,fetch(this.action,{method:"POST",body:r});case 17:if(!(m=t.sent).ok){t.next=22;break}return t.abrupt("return",{status:"ok"});case 22:alert("ERROR HTTP: "+m.status);case 23:case"end":return t.stop()}}),t,this)})),o=function(){var t=this,e=arguments;return new Promise((function(n,o){var i=r.apply(t,e);function a(t){s(i,n,o,a,c,"next",t)}function c(t){s(i,n,o,a,c,"throw",t)}a(void 0)}))},function(t){return o.apply(this,arguments)})}],n&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}var v=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.start=document.querySelector(".q-app__start"),this.inners=document.querySelectorAll(".q-app__inner"),this.ring=document.querySelector(".q-app__inner--ring"),this.ringSteps=document.querySelectorAll(".q-app__inner--ring"),this.earrings=document.querySelector(".q-app__inner--earrings"),this.form=document.querySelector(".q-app__form"),this.finish=document.querySelector(".q-app__finish")}var e,n;return e=t,(n=[{key:"openStart",value:function(){this.start.classList.add("active")}},{key:"closeStart",value:function(){this.start.classList.remove("active")}},{key:"openType",value:function(t){document.querySelector(".q-app__inner--".concat(t)).classList.add("active")}},{key:"closeType",value:function(t){document.querySelector(".q-app__inner--".concat(t)).classList.remove("active")}},{key:"toType",value:function(t,e){var n=document.querySelectorAll(".q-app__inner--".concat(t," .q-step"));n.forEach((function(t){return t.classList.remove("active")})),n[e].classList.add("active")}},{key:"toStep",value:function(t){var e=document.querySelectorAll(".q-app__inner.active .q-step");e.forEach((function(t){return t.classList.remove("active")})),e[t].classList.add("active")}},{key:"openForm",value:function(){this.form.classList.add("active")}},{key:"closeForm",value:function(){this.form.classList.remove("active")}},{key:"openFinish",value:function(){this.finish.classList.add("active")}},{key:"closeFinish",value:function(){this.finish.classList.remove("active")}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()),d=new h,m=null,b=document.querySelector(".q-app__start"),g=new i(b);new n(b).onChange((function(t){g.ableNext(t),m=t.target.value})),g.onNext((function(t){v.closeStart(),v.openType(m),v.toType(m,0)})),document.querySelectorAll(".q-app__inner").forEach((function(t){var e=t.querySelectorAll(".q-step");e.forEach((function(t,r){var o=t,a=new i(o);new n(o).onChange((function(t){a.ableNext(t)})),a.onNext((function(t){0===r?v.toStep(r+1):r===e.length-1?(v.closeType(m),v.openForm()):v.toStep(r+1)})),a.onPrev((function(t){0===r?(v.closeType(m),v.openStart()):(e.length,v.toStep(r-1))}))}))}));var w=document.querySelector(".q-app__form"),S=new i(w),_=document.querySelector(".q-finish__img img");S.ableNext(),S.onNext((function(t){d.initEl(document.querySelector(".q-app__inner--".concat(m))),d.submit().then((function(t){"ok"===t.status&&(_.setAttribute("src",_.getAttribute("src")+m+".png"),t.img&&_.setAttribute(t.img),v.closeForm(),v.openFinish())}))})),S.onPrev((function(t){v.closeForm(),v.openType(m)})),window.qapp={step:v,feedback:d}})();