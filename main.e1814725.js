parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return i(e)||t(e)||r(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,n){if(e){if("string"==typeof e)return c(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,n):void 0}}function t(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function i(e){if(Array.isArray(e))return c(e)}function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var o=document.querySelector("tbody"),d=e(o.children),l=function(e,n){return e.sort(function(e,r){return e.children[n].innerHTML<r.children[n].innerHTML?-1:e.children[n].innerHTML>r.children[n].innerHTML?1:0})};document.querySelector("thead").firstElementChild.children[0].addEventListener("click",function(){l(d,0).forEach(function(e){return o.appendChild(e)})}),document.querySelector("thead").firstElementChild.children[1].addEventListener("click",function(){l(d,1).forEach(function(e){return o.appendChild(e)})}),document.querySelector("thead").firstElementChild.children[2].addEventListener("click",function(){l(d,2).forEach(function(e){return o.appendChild(e)})}),document.querySelector("thead").firstElementChild.children[3].addEventListener("click",function(){l(d,3).forEach(function(e){return o.appendChild(e)}),o.prepend(d[d.length-1])});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.e1814725.js.map