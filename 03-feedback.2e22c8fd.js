var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,o=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,l=u||f||Function("return this")(),c=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return l.Date.now()};function v(e,t,n){var i,r,o,a,u,f,l=0,c=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,o=r;return i=r=void 0,l=t,a=e.apply(o,n)}function T(e){return l=e,u=setTimeout(h,t),c?y(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||v&&e-l>=o}function h(){var e=d();if(j(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-f);return v?m(n,o-(e-l)):n}(e))}function w(e){return u=void 0,b&&i?y(e):(i=r=void 0,a)}function O(){var e=d(),n=j(e);if(i=arguments,r=this,f=e,n){if(void 0===u)return T(f);if(v)return u=setTimeout(h,t),y(f)}return void 0===u&&(u=setTimeout(h,t)),a}return t=p(t)||0,g(n)&&(c=!!n.leading,o=(v="maxWait"in n)?s(p(n.maxWait)||0,t):o,b="trailing"in n?!!n.trailing:b),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=f=r=u=void 0},O.flush=function(){return void 0===u?a:w(d())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=r.test(e);return u||o.test(e)?a(e.slice(2),u?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:i,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form"),y=localStorage.getItem("feedback-form-state");if(y){const{email:e,message:t}=JSON.parse(y);b.elements.email.value=e,b.elements.message.value=t}b.addEventListener("input",t((function(){localStorage.setItem("feedback-form-state",JSON.stringify({email:b.elements.email.value,message:b.elements.message.value}))}),500)),b.addEventListener("submit",(function(e){e.preventDefault(),console.log({email:e.currentTarget.elements.email.value,message:e.currentTarget.elements.message.value}),localStorage.removeItem("feedback-form-state"),e.currentTarget.elements.email.value="",e.currentTarget.elements.message.value=""}));
//# sourceMappingURL=03-feedback.2e22c8fd.js.map
