/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(t){t.classList.add("popup_is-opened"),document.addEventListener("keydown",n),t.addEventListener("click",r)}function e(t){t.classList.remove("popup_is-opened"),document.removeEventListener("keydown",n),t.removeEventListener("click",r)}function r(t){t.target===t.currentTarget&&e(t.currentTarget)}function n(t){"Escape"===t.key&&e(document.querySelector(".popup_is-opened"))}function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function c(){c=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,c=Object.create(o.prototype),a=new T(n||[]);return i(c,"_invoke",{value:C(t,r,a)}),c}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var h="suspendedStart",y="suspendedYield",v="executing",m="completed",_={};function g(){}function b(){}function w(){}var S={};f(S,u,(function(){return this}));var E=Object.getPrototypeOf,L=E&&E(E(P([])));L&&L!==r&&n.call(L,u)&&(S=L);var x=w.prototype=g.prototype=Object.create(S);function k(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function q(t,e){function r(c,i,a,u){var l=d(t[c],t,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==o(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,u)}))}u(l.arg)}var c;i(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return c=c?c.then(o,o):o()}})}function C(e,r,n){var o=h;return function(c,i){if(o===v)throw new Error("Generator is already running");if(o===m){if("throw"===c)throw i;return{value:t,done:!0}}for(n.method=c,n.arg=i;;){var a=n.delegate;if(a){var u=O(a,n);if(u){if(u===_)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var l=d(e,r,n);if("normal"===l.type){if(o=n.done?m:y,l.arg===_)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=m,n.method="throw",n.arg=l.arg)}}}function O(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),_;var c=d(o,e.iterator,r.arg);if("throw"===c.type)return r.method="throw",r.arg=c.arg,r.delegate=null,_;var i=c.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,_):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,_)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var c=-1,i=function r(){for(;++c<e.length;)if(n.call(e,c))return r.value=e[c],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(o(e)+" is not iterable")}return b.prototype=w,i(x,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:b,configurable:!0}),b.displayName=f(w,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},k(q.prototype),f(q.prototype,l,(function(){return this})),e.AsyncIterator=q,e.async=function(t,r,n,o,c){void 0===c&&(c=Promise);var i=new q(p(t,r,n,o),c);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(x),f(x,s,"Generator"),f(x,u,(function(){return this})),f(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=P,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var c=this.tryEntries.length-1;c>=0;--c){var i=this.tryEntries[c],a=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var c=o;break}}c&&("break"===t||"continue"===t)&&c.tryLoc<=e&&e<=c.finallyLoc&&(c=null);var i=c?c.completion:{};return i.type=t,i.arg=e,c?(this.method="next",this.next=c.finallyLoc,_):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),_},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),_}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),_}},e}function i(t,e,r,n,o,c,i){try{var a=t[c](i),u=a.value}catch(t){return void r(t)}a.done?e(u):Promise.resolve(u).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var c=t.apply(e,r);function a(t){i(c,n,o,a,u,"next",t)}function u(t){i(c,n,o,a,u,"throw",t)}a(void 0)}))}}var u={baseUrl:"https://mesto.nomoreparties.co/v1/wff-cohort-7",headers:{authorization:"ad3367f2-61df-42e1-9fcf-1c800ea06b41","Content-Type":"application/json"}},l=function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так: ".concat(t.status))},s=function(){var t=a(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(u.baseUrl,"/cards"),{headers:u.headers}).then((function(t){return l(t)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=a(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(u.baseUrl,"/users/me"),{headers:u.headers}).then((function(t){return l(t)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=a(c().mark((function t(e,r){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(u.baseUrl,"/users/me"),{method:"PATCH",headers:u.headers,body:JSON.stringify({name:e,about:r})}).then((function(t){return l(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),d=function(){var t=a(c().mark((function t(e,r){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(u.baseUrl,"/cards"),{method:"POST",headers:u.headers,body:JSON.stringify({name:e,link:r})}).then((function(t){return l(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),h=function(){var t=a(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(u.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:u.headers}).then((function(t){return l(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=a(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(u.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:u.headers}).then((function(t){return l(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=a(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(u.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:u.headers}).then((function(t){return l(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=a(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(u.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:u.headers,body:JSON.stringify({avatar:e})}).then((function(t){return l(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function _(t,e,r,n,o){var c=document.querySelector("#card-template").content.cloneNode(!0);c.querySelector(".card__image").src=t.link,c.querySelector(".card__image").alt=t.name,c.querySelector(".card__title").textContent=t.name,c.querySelector(".card__like-counter").textContent=t.likes.length;var i=c.querySelector(".card__delete-button");t.owner._id!==e?i.remove():i.addEventListener("click",(function(e){r(e,t._id)}));var a=c.querySelector(".card__like-button"),u=c.querySelector(".card__like-counter");return t.likes.some((function(t){return t._id===e}))&&a.classList.add("card__like-button_is-active"),a.addEventListener("click",(function(e){n(e,t._id,u)})),c.querySelector(".card__image").addEventListener("click",o),c}function g(t,e){h(e).then((function(){return t.target.closest(".card").remove()})).catch((function(t){return console.log(t)}))}function b(t,e,r){(t.target.classList.contains("card__like-button_is-active")?v:y)(e).then((function(e){t.target.classList.toggle("card__like-button_is-active"),r.textContent=e.likes.length})).catch((function(t){return console.log(t)}))}var w=function(t){return t.some((function(t){return!t.validity.valid}))},S=function(t,e,r){return w(t),w(t)?function(t,e){t.classList.add(e),t.disabled=!0}(e,r):function(t,e){t.classList.remove(e),t.disabled=!1}(e,r)},E=function(t,e,r){var n=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(r),n.textContent=""},L=function(t,e){var r=Array.from(t.querySelectorAll(e.inputSelector)),n=t.querySelector(e.submitButtonSelector);r.forEach((function(r){E(t,r,e.inputErrorClass),r.setCustomValidity("")})),S(r,n,e.inactiveButtonClass)};function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var k,q=document.querySelector(".places__list"),C=document.querySelector(".profile__add-button"),O=document.querySelector(".profile__edit-button"),j=document.querySelector(".profile__edit-icon"),A=document.querySelector(".profile__image"),T=document.querySelector(".popup_type_edit"),P=document.querySelector(".popup_type_avatar"),N=document.querySelector(".popup_type_new-card"),U=document.querySelector(".popup_type_image"),G=T.querySelector(".popup__form"),I=P.querySelector(".popup__form"),B=G.querySelector(".popup__input_type_name"),D=G.querySelector(".popup__input_type_description"),F=I.querySelector(".popup__input_type_avatar-url"),M=N.querySelector(".popup__form"),J=N.querySelector(".popup__input_type_card-name"),V=N.querySelector(".popup__input_type_url"),H=U.querySelector(".popup__image"),Y=U.querySelector(".popup__caption"),z=document.querySelector(".profile__title"),$=document.querySelector(".profile__description"),K=document.forms["edit-profile"],Q=document.forms.avatar,R=document.forms["new-place"],W=document.querySelectorAll(".popup"),X={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function Z(t,e){e.querySelector(".popup__button").textContent=t?"Сохранение...":"Сохранить"}function tt(e){t(U),H.src=e.target.src,H.alt=e.target.alt,Y.textContent=e.target.closest(".card").querySelector(".card__title").textContent}W.forEach((function(t){t.addEventListener("click",(function(r){r.target.classList.contains("popup__close")&&e(t)}))})),O.addEventListener("click",(function(){B.value=z.textContent,D.value=$.textContent,L(K,X),t(T)})),j.addEventListener("click",(function(){Q.reset(),L(Q,X),t(P)})),C.addEventListener("click",(function(){R.reset(),L(R,X),t(N)})),G.addEventListener("submit",(function(t){!function(t){t.preventDefault(),Z(!0,T),p(B.value,D.value).then((function(t){z.textContent=t.name,$.textContent=t.about})).catch((function(t){return console.log(t)})).finally((function(){return Z(!1,T)})),e(T)}(t)})),I.addEventListener("submit",(function(t){!function(t){t.preventDefault(),Z(!0,P),m(F.value).then((function(t){A.style.backgroundImage="url(".concat(t.avatar,")")})).catch((function(t){return console.log(t)})).finally((function(){return Z(!1,P)})),e(P)}(t)})),M.addEventListener("submit",(function(t){t.preventDefault(),Z(!0,N),d(J.value,V.value).then((function(t){q.prepend(_(t,k,g,b,tt))})).catch((function(t){return console.log(t)})).finally((function(){return Z(!1,N)})),J.value="",V.value="",e(N)})),Promise.all([f(),s()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,c,i,a=[],u=!0,l=!1;try{if(c=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=c.call(r)).done)&&(a.push(n.value),a.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw o}}return a}}(e,r)||function(t,e){if(t){if("string"==typeof t)return x(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?x(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],c=n[1];k=o._id,z.textContent=o.name,$.textContent=o.about,A.style.backgroundImage="url(".concat(o.avatar,")"),c.forEach((function(t){q.prepend(_(t,k,g,b,tt))}))})).catch((function(t){return console.log(t)})),function(t){Array.from(document.querySelectorAll(t.formSelector)).forEach((function(e){!function(e){var r=Array.from(e.querySelectorAll(t.inputSelector)),n=e.querySelector(t.submitButtonSelector);r.forEach((function(o){o.addEventListener("input",(function(){!function(e,o){o.validity.patternMismatch?o.setCustomValidity(o.dataset.errorMessage):o.setCustomValidity(""),o.validity.valid?(E(e,o,t.inputErrorClass),S(r,n,t.inactiveButtonClass)):(function(t,e,r,n){var o=t.querySelector(".".concat(e.id,"-error"));e.classList.add(n),o.textContent=r}(e,o,o.validationMessage,t.inputErrorClass),S(r,n,t.inactiveButtonClass))}(e,o)}))}))}(e)}))}(X)})();