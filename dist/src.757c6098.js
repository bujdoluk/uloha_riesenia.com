parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
var e=document.getElementById("form"),t=document.getElementById("content"),n=document.getElementById("btn1"),o=document.getElementById("btn2"),r=document.getElementById("btn3"),c=document.getElementById("close");buttons=new Array,buttons.push(n),buttons.push(o),buttons.push(r),buttons.forEach(function(n){return n.addEventListener("click",function(){e.style.display="flex",t.style.opacity="0.2"})}),c.addEventListener("click",function(){e.style.display="none",t.style.opacity="1"});var u=document.querySelector(".form_wrapper_captcha_img"),l=document.querySelector(".form_wrapper_captcha_reloadbutton"),a=document.querySelector(".form_wrapper_input input"),i=document.querySelector(".checkbutton"),d=document.querySelector(".form_wrapper_status"),s=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",0,1,2,3,4,5,6,7,8,9];function y(){for(var e=0;e<6;e++){var t=s[Math.floor(Math.random()*s.length)];u.innerText+=" ".concat(t)}}function m(){a.value="",u.innerText="",d.style.display="none"}y(),l.addEventListener("click",function(){m(),y()}),i.addEventListener("click",function(e){e.preventDefault(),d.style.display="block",a.value.split("").join(" ")==u.innerText?(d.style.color="#EE325C",d.innerText="Pekne! Nevyzeráš že by si bol robot :)",setTimeout(function(){m(),y()},2e3)):(d.style.color="#ff0000",d.innerText="Captcha je nesprávne zadaná. Skús znova!")});
},{}]},{},["Focm"], null)
//# sourceMappingURL=/src.757c6098.js.map