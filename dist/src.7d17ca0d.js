parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
var e=document.getElementById("form"),t=document.getElementById("content"),n=document.getElementById("open"),o=document.getElementById("close");n.addEventListener("click",function(){e.style.display="flex",t.style.opacity="0.2"}),o.addEventListener("click",function(){e.style.display="none",t.style.opacity="1"});var r=document.querySelector(".form_wrapper_captcha"),c=document.querySelector(".form_wrapper_captcha_reloadbutton"),l=document.querySelector(".form_wrapper_input input"),a=document.querySelector(".checkbutton"),i=document.querySelector(".form_wrapper_status"),u=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",0,1,2,3,4,5,6,7,8,9];function d(){for(var e=0;e<6;e++){var t=u[Math.floor(Math.random()*u.length)];r.innerText+=" ".concat(t)}}function y(){l.value="",r.innerText="",i.style.display="none"}d(),c.addEventListener("click",function(){y(),d()}),a.addEventListener("click",function(e){e.preventDefault(),i.style.display="block",l.value.split("").join(" ")==r.innerText?(i.style.color="#EE325C",i.innerText="Pekne! Nevyzeráš že by si bol robot :)",setTimeout(function(){y(),d()},2e3)):(i.style.color="#ff0000",i.innerText="Captcha je nesprávne zadaná. Skús znova!")});
},{}]},{},["Focm"], null)
//# sourceMappingURL=/src.7d17ca0d.js.map