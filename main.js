(()=>{"use strict";var t={426:(t,e,i)=>{i.d(e,{Z:()=>d});var n=i(81),s=i.n(n),r=i(645),a=i.n(r),o=i(667),c=i.n(o),h=new URL(i(17),i.b),l=a()(s()),u=c()(h);l.push([t.id,'*:focus {\n  outline: none;\n}\n\nbody {\n  padding: 30px;\n  background-color: #505577;\n  font-family: \'Comfortaa\', cursive;\n  margin: 0;\n}\n\n.textarea {\n  display: block;\n  padding: 15px;\n  width: 970px;\n  height: 150px;\n  margin: 0 auto;\n  margin-bottom: 30px;\n  resize: none;\n  border-radius: 5px;\n  background-color: #8b9dc3;\n  border: 1px solid #3b5998;\n  border: none;\n  color: #f7f7f7;\n  font-size: 18px;\n  font-family: \'Comfortaa\', cursive;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;\n}\n\n.keyboard {\n  display: flex;\n  flex-wrap: wrap;\n  width: 970px;\n  height: 320px;\n  margin: 0 auto;\n  margin-bottom: 30px;\n  gap: 5px;\n  justify-items: center;\n  background-color: #f7f7f7;\n  padding: 15px;\n  border: 1px solid #8b9dc3;\n  border: none;\n  border-radius: 5px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;\n}\n\n.key {\n  width: 60px;\n  height: 60px;\n  cursor: pointer;\n  background-color: #8b9dc3;\n  transition: .4s ease-out;\n  border: 1px solid #3b5998;\n  border: none;\n  border-radius: 5px;\n  font-size: 18px;\n  color: #f7f7f7;\n  font-family: \'Comfortaa\', cursive;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;\n}\n\n.key:hover {\n  background-color: #627AAC;\n}\n\n.key:active {\n  background-color: #3b5998;\n}\n\n.key[data-code="Space"]{\n  width: 450px;\n}\n\n.key[data-code="Backspace"],\n.key[data-code="Enter"],\n.key[data-code="CapsLock"],\n.key[data-code="ShiftLeft"],\n.key[data-code="ShiftRight"] {\n  width: 125px;\n}\n\n.key[data-code="CapsLock"] {\n  position: relative;\n}\n\n.key[data-code="CapsLock"]::after {\n  content: "";\n  display: block;\n  position: absolute;\n  left: 5px;\n  top: 5px;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background-color: #3b5998;\n}\n\n.active.key[data-code="CapsLock"]::after {\n  background-color: #f7f7f7;;\n}\n\n.active {\n  background-color: #3b5998;\n}\n\n.description {\n  margin: 0 auto;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  color: #f7f7f7;\n  font-size: 20px;\n  user-select: none;\n}\n\n.combination {\n  display: flex;\n  align-items: center;\n  column-gap: 5px;\n  margin: 0 auto;\n}\n\n.combination__ctrl,\n.combination__shift {\n  width: 40px;\n  height: 40px;\n  background-color: #8b9dc3;\n  border: none;\n  border-radius: 5px;\n  color: #f7f7f7;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;\n  font-size: 14px;\n  font-family: \'Comfortaa\', cursive;\n}\n\n.combination__shift {\n  width: 80px;\n  margin-right: 5px;\n}\n\n.made-for {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n}\n\n.made-for::after {\n  content: "";\n  display: block;\n  width: 25px;\n  height: 25px;\n  background-image: url('+u+");\n  margin-left: 5px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;\n}",""]);const d=l},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i="",n=void 0!==e[5];return e[4]&&(i+="@supports (".concat(e[4],") {")),e[2]&&(i+="@media ".concat(e[2]," {")),n&&(i+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),i+=t(e),n&&(i+="}"),e[2]&&(i+="}"),e[4]&&(i+="}"),i})).join("")},e.i=function(t,i,n,s,r){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(n)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(a[c]=!0)}for(var h=0;h<t.length;h++){var l=[].concat(t[h]);n&&a[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),i&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=i):l[2]=i),s&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=s):l[4]="".concat(s)),e.push(l))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function i(t){for(var i=-1,n=0;n<e.length;n++)if(e[n].identifier===t){i=n;break}return i}function n(t,n){for(var r={},a=[],o=0;o<t.length;o++){var c=t[o],h=n.base?c[0]+n.base:c[0],l=r[h]||0,u="".concat(h," ").concat(l);r[h]=l+1;var d=i(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)e[d].references++,e[d].updater(p);else{var f=s(p,n);n.byIndex=o,e.splice(o,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function s(t,e){var i=e.domAPI(e);return i.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;i.update(t=e)}else i.remove()}}t.exports=function(t,s){var r=n(t=t||[],s=s||{});return function(t){t=t||[];for(var a=0;a<r.length;a++){var o=i(r[a]);e[o].references--}for(var c=n(t,s),h=0;h<r.length;h++){var l=i(r[h]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=c}}},569:t=>{var e={};t.exports=function(t,i){var n=function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(i)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,i)=>{t.exports=function(t){var e=i.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(i){!function(t,e,i){var n="";i.supports&&(n+="@supports (".concat(i.supports,") {")),i.media&&(n+="@media ".concat(i.media," {"));var s=void 0!==i.layer;s&&(n+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),n+=i.css,s&&(n+="}"),i.media&&(n+="}"),i.supports&&(n+="}");var r=i.sourceMap;r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,i)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},17:(t,e,i)=>{t.exports=i.p+"fcc92b5ccc4b0b8acf89.svg"}},e={};function i(n){var s=e[n];if(void 0!==s)return s.exports;var r=e[n]={id:n,exports:{}};return t[n](r,r.exports,i),r.exports}i.m=t,i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;i.g.importScripts&&(t=i.g.location+"");var e=i.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=t})(),i.b=document.baseURI||self.location.href,(()=>{var t=i(379),e=i.n(t),n=i(795),s=i.n(n),r=i(569),a=i.n(r),o=i(565),c=i.n(o),h=i(216),l=i.n(h),u=i(589),d=i.n(u),p=i(426),f={};f.styleTagTransform=d(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=l(),e()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const g=["Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","Backspace","Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Backslash","Delete","CapsLock","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter","ShiftLeft","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ArrowUp","ShiftRight","ControlLeft","MetaLeft","AltLeft","Space","AltRight","ArrowLeft","ArrowDown","ArrowRight","Lang"],b=["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace","Tab","q","w","e","r","t","y","u","i","o","p","[","]","\\","Del","Caps Lock","a","s","d","f","g","h","j","k","l",";","'","Enter","Shift","z","x","c","v","b","n","m",",",".","/","&uarr;","Shift","Ctrl","Win","Alt","Space","Alt","&larr;","&darr;","&rarr;","EN"],x=["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace","Tab","Q","W","E","R","T","Y","U","I","O","P","[","]","\\","Del","Caps Lock","A","S","D","F","G","H","J","K","L",";","'","Enter","Shift","Z","X","C","V","B","N","M",",",".","/","&uarr;","Shift","Ctrl","Win","Alt","Space","Alt","&larr;","&darr;","&rarr;","EN"],k=["~","!","@","#","$","%","^","&","*","(",")","_","+","Backspace","Tab","Q","W","E","R","T","Y","U","I","O","P","{","}","|","Del","Caps Lock","A","S","D","F","G","H","J","K","L",":",'"',"Enter","Shift","Z","X","C","V","B","N","M","<",">","?","&uarr;","Shift","Ctrl","Win","Alt","Space","Alt","&larr;","&darr;","&rarr;","EN"],y=["~","!","@","#","$","%","^","&","*","(",")","_","+","Backspace","Tab","q","w","e","r","t","y","u","i","o","p","{","}","|","Del","Caps Lock","a","s","d","f","g","h","j","k","l",":",'"',"Enter","Shift","z","x","c","v","b","n","m","<",">","?","&uarr;","Shift","Ctrl","Win","Alt","Space","Alt","&larr;","&darr;","&rarr;","EN"],S=["ё","1","2","3","4","5","6","7","8","9","0","-","=","Backspace","Tab","й","ц","у","к","е","н","г","ш","щ","з","х","ъ","\\","Del","Caps Lock","ф","ы","в","а","п","р","о","л","д","ж","э","Enter","Shift","я","ч","с","м","и","т","ь","б","ю","/","&uarr;","Shift","Ctrl","Win","Alt","Space","Alt","&larr;","&darr;","&rarr;","RU"],m=["Ё","!",'"',"№",";","%",":","?","*","(",")","_","+","Backspace","Tab","Й","Ц","У","К","Е","Н","Г","Ш","Щ","З","Х","Ъ","/","Del","Caps Lock","Ф","Ы","В","А","П","Р","О","Л","Д","Ж","Э","Enter","Shift","Я","Ч","С","М","И","Т","Ь","Б","Ю","/","&uarr;","Shift","Ctrl","Win","Alt","Space","Alt","&larr;","&darr;","&rarr;","RU"],v=["Ё","1","2","3","4","5","6","7","8","9","0","-","=","Backspace","Tab","Й","Ц","У","К","Е","Н","Г","Ш","Щ","З","Х","Ъ","\\","Del","Caps Lock","Ф","Ы","В","А","П","Р","О","Л","Д","Ж","Э","Enter","Shift","Я","Ч","С","М","И","Т","Ь","Б","Ю","/","&uarr;","Shift","Ctrl","Win","Alt","Space","Alt","&larr;","&darr;","&rarr;","RU"],C=["ё","!","@","#","$","%","^","&","*","(",")","_","+","Backspace","Tab","й","ц","у","к","е","н","г","ш","щ","з","х","ъ","/","Del","Caps Lock","ф","ы","в","а","п","р","о","л","д","ж","э","Enter","Shift","я","ч","с","м","и","т","ь","б","ю","/","&uarr;","Shift","Ctrl","Win","Alt","Space","Alt","&larr;","&darr;","&rarr;","RU"];class L{constructor(){this.isShift=!1,this.isCaps=!1,this.isCapsShift=!1,this.lang=localStorage.getItem("language")||"ru",this.cursorPosition=null,this.letterInString=null,this.indexInString=null,this.currentPositionInString=null}createTextarea(){this.textarea=document.createElement("textarea"),this.textarea.className="textarea",document.body.appendChild(this.textarea)}createKeyboard(){this.keyboard=document.createElement("div"),this.keyboard.className="keyboard",document.body.appendChild(this.keyboard);for(let t=0;t<g.length;t+=1)this.key=document.createElement("button"),this.key.className="key",this.key.dataset.code=g[t],this.key.innerHTML=this.checkLang(t),this.keyboard.appendChild(this.key),this.keys=document.querySelectorAll(".key")}createDescription(){this.description=document.createElement("div"),this.description.className="description",document.body.appendChild(this.description),this.combination=document.createElement("div"),this.combination.className="combination",this.description.appendChild(this.combination),this.combinationKeyCtrl=document.createElement("button"),this.combinationKeyCtrl.className="combination__ctrl",this.combinationKeyCtrl.textContent="Ctrl",this.combination.appendChild(this.combinationKeyCtrl),this.combinationPlus=document.createElement("div"),this.combinationPlus.className="combination__plus",this.combinationPlus.textContent="+",this.combination.appendChild(this.combinationPlus),this.combinationKeyShift=document.createElement("button"),this.combinationKeyShift.className="combination__shift",this.combinationKeyShift.textContent="Shift",this.combination.appendChild(this.combinationKeyShift),this.combinationSpan=document.createElement("span"),this.combinationSpan.className="combination__span",this.combinationSpan.textContent="switch language",this.combination.appendChild(this.combinationSpan),this.madeFor=document.createElement("div"),this.madeFor.className="made-for",this.madeFor.textContent="made for",this.description.appendChild(this.madeFor)}checkLang(t){return localStorage.setItem("language",this.lang),"en"===this.lang?!0===this.isShift?k[t]:!0===this.isCaps?x[t]:!0===this.isCapsShift?y[t]:b[t]:!0===this.isShift?m[t]:!0===this.isCaps?v[t]:!0===this.isCapsShift?C[t]:S[t]}addListeners(){document.addEventListener("keydown",(t=>this.onKeyDown(t))),document.addEventListener("keyup",(t=>this.onKeyUp(t))),this.keys.forEach((t=>t.addEventListener("mousedown",(()=>this.onMouseDown(t))))),this.keys.forEach((t=>t.addEventListener("mouseup",(()=>this.onMouseUp(t))))),this.textarea.addEventListener("click",(t=>{this.cursorPosition=t.target.selectionStart}))}onMouseDown(t){switch(t.dataset.code){case"Space":this.textarea.value=`${this.textarea.value.slice(0,this.cursorPosition)} ${this.textarea.value.slice(this.cursorPosition)}`,this.cursorPosition+=1;break;case"Tab":this.textarea.value=`${this.textarea.value.slice(0,this.cursorPosition)}        ${this.textarea.value.slice(this.cursorPosition)}`,this.cursorPosition+=8;break;case"Backspace":this.cursorPosition>0&&(this.textarea.value=this.textarea.value.split("").filter(((t,e)=>e!==this.cursorPosition-1)).join(""),this.cursorPosition-=1);break;case"Delete":this.textarea.value=this.textarea.value.split("").filter(((t,e)=>e!==this.cursorPosition)).join("");break;case"CapsLock":this.isCaps=!this.isCaps;for(let t=0;t<this.keys.length;t+=1)this.keys[t].innerHTML=this.checkLang(t);t.classList.toggle("active");break;case"ShiftLeft":this.isShift=!0;for(let t=0;t<this.keys.length;t+=1)this.keys[t].innerHTML=this.checkLang(t);break;case"ShiftRight":this.isShift=!0;for(let t=0;t<this.keys.length;t+=1)this.keys[t].innerHTML=this.checkLang(t);break;case"Enter":this.textarea.value=`${this.textarea.value.slice(0,this.cursorPosition)}\n${this.textarea.value.slice(this.cursorPosition)}`,this.cursorPosition+=1;break;case"ArrowUp":if(this.countLetterInString(),this.getIndexInString(),this.letterInString[this.indexInString-1]){const t=this.currentPositionInString,e=this.letterInString[this.indexInString-1]-t+1;this.letterInString[this.indexInString-1]>=t?(this.cursorPosition-=e+t,this.updateCursorPosition()):(this.cursorPosition-=t+1,this.updateCursorPosition())}else this.cursorPosition=0,this.updateCursorPosition();break;case"ArrowRight":this.cursorPosition<this.textarea.value.length&&(this.cursorPosition+=1);break;case"ArrowDown":if(this.countLetterInString(),this.getIndexInString(),this.letterInString[this.indexInString+1]){const t=this.letterInString[this.indexInString]-this.currentPositionInString,e=this.letterInString[this.indexInString]-t+1;this.letterInString[this.indexInString+1]>=e?(this.cursorPosition+=e+t,this.updateCursorPosition()):(this.cursorPosition+=this.letterInString[this.indexInString+1]+t+1,this.updateCursorPosition())}else this.cursorPosition=this.textarea.value.length,this.updateCursorPosition();break;case"ArrowLeft":this.cursorPosition>0&&(this.cursorPosition-=1);break;case"Lang":"en"===this.lang?this.lang="ru":this.lang="en";for(let t=0;t<this.keys.length;t+=1)this.keys[t].innerHTML=this.checkLang(t);break;case"Alt":case"ControlLeft":case"AltRight":case"ControlRight":case"AltLeft":case"MetaLeft":break;default:this.textarea.value=`${this.textarea.value.slice(0,this.cursorPosition)}${t.textContent}${this.textarea.value.slice(this.cursorPosition)}`,this.cursorPosition+=1}if(!0===this.isCaps&&("ShiftLeft"===t.dataset.code||"ShiftRight"===t.dataset.code)){this.isCaps=!1,this.isShift=!1,this.isCapsShift=!0;for(let t=0;t<this.keys.length;t+=1)this.keys[t].innerHTML=this.checkLang(t)}this.updateCursorPosition(),this.textarea.focus()}onMouseUp(t){switch(t.dataset.code){case"ShiftLeft":this.isShift=!1;for(let t=0;t<this.keys.length;t+=1)this.keys[t].innerHTML=this.checkLang(t);break;case"ShiftRight":this.isShift=!1;for(let t=0;t<this.keys.length;t+=1)this.keys[t].innerHTML=this.checkLang(t)}if(!0===this.isCapsShift&&("ShiftLeft"===t.dataset.code||"ShiftRight"===t.dataset.code)){this.isCaps=!0,this.isShift=!1,this.isCapsShift=!1;for(let t=0;t<this.keys.length;t+=1)this.keys[t].innerHTML=this.checkLang(t)}this.textarea.focus()}onKeyDown(t){if(t.preventDefault(),this.keys.forEach((e=>{if(e.dataset.code===t.code){switch("CapsLock"!==t.code&&e.classList.add("active"),e.dataset.code){case"Space":this.textarea.value=`${this.textarea.value.slice(0,this.cursorPosition)} ${this.textarea.value.slice(this.cursorPosition)}`,this.cursorPosition+=1;break;case"Tab":this.textarea.value=`${this.textarea.value.slice(0,this.cursorPosition)}        ${this.textarea.value.slice(this.cursorPosition)}`,this.cursorPosition+=8;break;case"Enter":this.textarea.value=`${this.textarea.value.slice(0,this.cursorPosition)}\n${this.textarea.value.slice(this.cursorPosition)}`,this.cursorPosition+=1;break;case"Backspace":this.cursorPosition>0&&(this.textarea.value=this.textarea.value.split("").filter(((t,e)=>e!==this.cursorPosition-1)).join(""),this.cursorPosition-=1);break;case"Delete":this.textarea.value=this.textarea.value.split("").filter(((t,e)=>e!==this.cursorPosition)).join("");break;case"ShiftLeft":this.isShift=!this.isCapsShift;for(let t=0;t<this.keys.length;t+=1)this.keys[t].innerHTML=this.checkLang(t);break;case"ShiftRight":this.isShift=!this.isCapsShift;for(let t=0;t<this.keys.length;t+=1)this.keys[t].innerHTML=this.checkLang(t);break;case"CapsLock":this.isCaps=!this.isCaps;for(let t=0;t<this.keys.length;t+=1)this.keys[t].innerHTML=this.checkLang(t);e.classList.toggle("active");break;case"ArrowUp":if(this.countLetterInString(),this.getIndexInString(),void 0!==this.letterInString[this.indexInString-1]){const t=this.currentPositionInString,e=this.letterInString[this.indexInString-1]-t+1;this.letterInString[this.indexInString-1]>=t?(this.cursorPosition-=e+t,this.updateCursorPosition()):(this.cursorPosition-=t+1,this.updateCursorPosition())}else this.cursorPosition=0,this.updateCursorPosition();break;case"ArrowRight":this.cursorPosition<this.textarea.value.length&&(this.cursorPosition+=1);break;case"ArrowDown":if(this.countLetterInString(),this.getIndexInString(),void 0!==this.letterInString[this.indexInString+1]){const t=this.letterInString[this.indexInString]-this.currentPositionInString,e=this.letterInString[this.indexInString]-t+1;this.letterInString[this.indexInString+1]>=e?(this.cursorPosition+=e+t,this.updateCursorPosition()):(this.cursorPosition+=this.letterInString[this.indexInString+1]+t+1,this.updateCursorPosition())}else this.cursorPosition=this.textarea.value.length,this.updateCursorPosition();break;case"ArrowLeft":this.cursorPosition>0&&(this.cursorPosition-=1);break;case"Alt":case"ControlLeft":case"ControlRight":case"AltLeft":case"AltRight":case"MetaLeft":case"MetaRight":break;default:this.textarea.value=`${this.textarea.value.slice(0,this.cursorPosition)}${e.textContent}${this.textarea.value.slice(this.cursorPosition)}`,this.cursorPosition+=1}this.updateCursorPosition()}})),t.shiftKey&&t.ctrlKey){"en"===this.lang?this.lang="rus":this.lang="en";for(let t=0;t<this.keys.length;t+=1)this.keys[t].innerHTML=this.checkLang(t)}if(!0===this.isCaps&&"Shift"===t.key){this.isCaps=!1,this.isShift=!1,this.isCapsShift=!0;for(let t=0;t<this.keys.length;t+=1)this.keys[t].innerHTML=this.checkLang(t)}this.textarea.focus()}onKeyUp(t){if(t.preventDefault(),this.keys.forEach((e=>{e.dataset.code===t.code&&"CapsLock"!==e.dataset.code&&e.classList.remove("active")})),!0===this.isCapsShift&&"Shift"===t.key){this.isCaps=!0,this.isShift=!1,this.isCapsShift=!1;for(let t=0;t<this.keys.length;t+=1)this.keys[t].innerHTML=this.checkLang(t)}if("Shift"===t.key){this.isShift=!1;for(let t=0;t<this.keys.length;t+=1)this.keys[t].innerHTML=this.checkLang(t)}}updateCursorPosition(){this.textarea.selectionStart=this.cursorPosition,this.textarea.selectionEnd=this.cursorPosition}countLetterInString(){const t=this.textarea.value.split("\n").map((t=>t.length));this.letterInString=t.flat()}getIndexInString(){let t=0,e=this.cursorPosition;if(1===this.letterInString.length)this.currentPositionInString=e;else{for(let i=0;i<this.letterInString.length;i+=1){if(e<=this.letterInString[i]){this.indexInString=t;break}e-=this.letterInString[i],t+=1,e-=1}this.currentPositionInString=e}}}window.onload=()=>{const t=new L;t.createTextarea(),t.createKeyboard(),t.createDescription(),t.addListeners()}})()})();