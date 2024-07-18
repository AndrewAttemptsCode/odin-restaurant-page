(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>g});var o=t(601),r=t.n(o),a=t(314),i=t.n(a),c=t(417),s=t.n(c),d=new URL(t(254),t.b),l=new URL(t(248),t.b),p=new URL(t(990),t.b),u=i()(r());u.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);var h=s()(d),f=s()(l),m=s()(p);u.push([e.id,`/* Font */\n\n/* CSS Reset */\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n}\n\nbody {\n    line-height: 1.5;\n    font-family: 'Roboto', sans-serif;\n    -webkit-font-smoothing: antialiased;\n}\n\nimg, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n}\n\ninput, button, textarea, select {\n    font: inherit;\n}\n\np, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n}\n\n#root, #__next {\n    isolation: isolate;\n}\n\n/* Home Content */\n\n.home-layout {\n    position: relative;\n    display: flex;\n    min-height: 100vh;\n    flex-direction: column;\n    align-items: center;\n    justify-items: flex-start;\n    padding: 50px;\n    background: #f1d0a2d8;\n}\n\n.home-layout::before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: url(${h}) no-repeat center center;\n    background-size: cover;\n    z-index: -1;\n}\n\n.hero-content p {\n    font-weight:300;\n    font-size: 2rem;\n    color: #840f0f;\n    margin-top: 50px;\n    width: 70%;\n    text-align: center;\n}\n\n.hero-content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    max-width: 1000px;\n}\n\n.hero-title-container {\n    display: flex;\n    flex-direction: column;\n    padding: 16px;\n    background-color: #b423239f;\n    border-radius: 10px;\n    color: #f1d0a2;\n    line-height: 1.2;\n    margin: 0;\n\n    filter: drop-shadow(0 8px 8px rgba(199, 12, 12, 0.884));\n}\n\n.hero-title-1 {\n    align-self: flex-start;\n    font-size: 3.5rem;\n    color: #f1d0a2;\n}\n\n.hero-title-2 {\n    align-self: center;\n    font-size: 3.5rem;\n    color: #840f0f;\n}\n\n.hero-title-3 {\n    align-self: center;\n    font-size: 5.5rem;\n    color: #650909;\n}\n\n/* About Content */\n\n.about-layout {\n    position: relative;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-items: flex-start;\n    padding: 50px;\n    background: #f1d0a2d8;\n}\n\n.about-layout::before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: url(${f}) no-repeat center bottom;\n    background-size: cover;\n    z-index: -1;\n}\n\n.about-container {\n    display: flex;\n    flex-direction: column;\n    gap: 40px;\n    padding: 20px;\n}\n\n.about-container div {\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n    background: #b4232344;\n    padding: 40px;\n    border-radius: 10px;\n\n    filter: drop-shadow(0 8px 8px rgba(226, 43, 43, 0.377));\n}\n\n.about-container div:nth-child(even) {\n    flex-direction: row-reverse;\n}\n\n.about-container div:nth-child(even) h2 {\n    text-align: right;\n}\n\n.about-container div:nth-child(odd) h2 {\n    text-align: left;\n}\n\n.about-container div p {\n    flex: 1;\n    width: 40ch;\n    font-size: 1.2rem;\n    color: #840f0f;\n}\n\n.about-layout h1,\n.menu-layout h1 {\n    color: #1c0808;\n    font-size: 3.5rem;\n}\n\n.about-container h2 {\n    font-size: 4rem;\n    color: #650909;\n}\n\n/* Menu Layout */\n\n.menu-layout {\n    position: relative;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-items: flex-start;\n    padding: 50px;\n    background: #f1d0a2d8;\n}\n\n.menu-layout::before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: url(${m}) repeat;\n    z-index: -1;\n}\n\n.menu-container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: flex-start;\n    gap: 20px;\n    width: calc(271px * 4);\n}\n\n.food-item {\n    width: 251px;\n    background: whitesmoke;\n    border-radius: 10px;\n\n    transition: filter 0.3s ease;\n}\n\n.food-item:hover {\n    filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.5));\n}\n\n.food-info {\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 200px;\n}\n\n/* Nav Menu */\n\nheader {\n    background: #b42323;\n}\n\nnav {\n    display: grid;\n    grid-auto-flow: column;\n    justify-content: center;\n    gap: 15px;\n}\n\nnav button {\n    border: none;\n    width: 80px;\n    height: 80px;\n    padding: 8px 16px;\n    background: none;\n    cursor: pointer;\n    font-size: 1.5rem;\n    font-weight: bold;\n    color: #f1d0a2;\n}\n\nnav button:hover {\n    color: #f3ac49;\n}\n\n.logo {\n    position: absolute;\n    top: 0;\n    left: 25px;\n    width: 150px;\n    height: auto;\n    z-index: 1;\n}\n\n.logo img {\n    transition: filter 0.3s ease;\n}\n\n.logo img:hover {\n    cursor: pointer;\n    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5));\n}\n`,""]);const g=u},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(h);else{var f=r(h,o);o.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=o(e,r),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},659:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},254:(e,n,t)=>{e.exports=t.p+"419bf7d8f1c5f38fd0d4.jpg"},248:(e,n,t)=>{e.exports=t.p+"97c9620b36564c994c4a.jpg"},990:(e,n,t)=>{e.exports=t.p+"674969d473c1676361b7.png"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var o=t(72),r=t.n(o),a=t(825),i=t.n(a),c=t(659),s=t.n(c),d=t(56),l=t.n(d),p=t(540),u=t.n(p),h=t(113),f=t.n(h),m=t(208),g={};g.styleTagTransform=f(),g.setAttributes=l(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=u(),r()(m.A,g),m.A&&m.A.locals&&m.A.locals;const b=t.p+"52cb5344e3d82e03ae88.png";function v(){const e=document.querySelector("#content");e.innerHTML="";const n=document.createElement("div");n.classList.add("hero-content");const t=document.createElement("div");t.classList.add("hero-title-container");const o=document.createElement("h1");o.classList.add("hero-title-1"),o.textContent="Every slice";const r=document.createElement("h1");r.classList.add("hero-title-2"),r.textContent="is a";const a=document.createElement("h1");a.classList.add("hero-title-3"),a.textContent="taste sensation!";const i=document.createElement("p");i.textContent="Enjoy handcrafted pizzas with authentic flavours and premium toppings. Whether you crave a classic Margherita or a gourmet special, our menu promises something delicious for everyone. Join us for a cozy dining experience and exceptional service that will keep you coming back for more.",n.appendChild(t),t.appendChild(o),t.appendChild(r),t.appendChild(a),n.appendChild(i),e.appendChild(n)}function y(e,n,t,o){return{name:e,description:n,price:t,imagePath:o}}const x=t.p+"2b7b52a68f4db0db7ba2.jpg",w=t.p+"acda792a2cb3d0f9bf6d.jpg",C=t.p+"e1f522510bb1dfc149b0.jpg",z=t.p+"8e1f2644ee9fe38d0c19.jpg",k=t.p+"be4c20d713b2859ffc62.jpg",E=t.p+"d485e263c7203d6bb923.jpg",j=t.p+"93c07a4c0a7208c47bce.jpg",L=t.p+"61464a6b79bcfd4e2a8d.jpg";function S(e){const n=document.querySelector("#content");n.className="",n.classList.add(e)}document.addEventListener("DOMContentLoaded",(()=>{!function(){const e=document.querySelector("header");e.innerHTML="";const n=document.createElement("div");n.classList.add("logo"),e.appendChild(n);const t=document.createElement("a");t.href="https://github.com/AndrewAttemptsCode/odin-restaurant-page/tree/main",t.target="_blank",t.rel="noopener noreferrer",n.appendChild(t);const o=document.createElement("img");o.src=b,o.alt="Pizza Logo",t.appendChild(o);const r=document.createElement("nav");e.appendChild(r);const a=document.createElement("button");a.id="home",a.textContent="Home";const i=document.createElement("button");i.id="menu",i.textContent="Menu";const c=document.createElement("button");c.id="about",c.textContent="About",r.appendChild(a),r.appendChild(i),r.appendChild(c)}(),v(),S("home-layout"),document.querySelector("header").addEventListener("click",(e=>{"home"===e.target.id?(v(),S("home-layout")):"menu"===e.target.id?(function(){const e=document.querySelector("#content");e.innerHTML="";const n=document.createElement("div");n.classList.add("menu-container");const t=[y("Pepperoni 'n' Nduja","Cup 'n' crisp pepperoni, pepperoni, 'Nduja",12.99,E),y("Chicken Fajita","Chicken, peppers, red onions, roquito pearl slices, fajita seasoning",12.99,x),y("Chicken Feast","Chicken, mushrooms and sweetcorn",12.99,w),y("Chicken & Bacon club","Chicken, bacon, red onions & sunbraised tomatoe",12.99,C),y("Hawaiian Sizzler","Ham & pineapple, jalapenos, chilli flakes, red onions and roquito pearl slices",12.99,z),y("Mushroom & Sweetcorn","Mushrooms & sweetcorn",12.99,k),y("The spicy GOAT","Goats cheese, sliced roquitos, red onions, topped with hot honey drizzle",12.99,j),y("Create Your Own","Go Freestyle! Simply choose your sauce and add any toppings",12.99,L)],o=document.createElement("h1");o.textContent="Menu",e.appendChild(o),t.forEach((e=>{const t=document.createElement("div");t.classList.add("food-item");const o=document.createElement("h3");o.classList.add("food-title"),o.textContent=e.name;const r=document.createElement("p");r.classList.add("food-desc"),r.textContent=e.description;const a=document.createElement("p");a.classList.add("food-price"),a.textContent=`£${e.price}`;const i=document.createElement("img");i.classList.add("food-img"),i.src=e.imagePath,i.alt=`${e.name} pizza`;const c=document.createElement("div");c.classList.add("food-info"),t.appendChild(i),t.appendChild(c),c.appendChild(o),c.appendChild(r),c.appendChild(a),n.appendChild(t)})),e.appendChild(n)}(),S("menu-layout")):"about"===e.target.id&&(function(){const e=document.querySelector("#content");e.innerHTML="";const n=document.createElement("h1");n.textContent="About Us",e.appendChild(n);const t=document.createElement("div");t.classList.add("about-container"),[{title:"Welcome",text:"At Slices, we believe that every slice tells a story. Our journey began with a passion for creating the perfect pizza – one that brings people together, sparks joy, and creates unforgettable memories."},{title:"Our Story",text:"Founded in 2024, Slices has been dedicated to serving delicious, handcrafted pizzas made from the freshest ingredients. Our founder, Andrew, started with a simple dream: to share his love for authentic, mouth-watering pizzas with the world. With recipes passed down through generations and a commitment to quality, we've grown into a beloved local pizzeria known for our unique flavors and warm hospitality.0"},{title:"Our Pizzas",text:"Every pizza we create is a work of art. We start with our signature dough, hand-stretched to perfection and baked to a golden crisp. Our sauces are crafted from vine-ripened tomatoes and a blend of secret spices, while our toppings range from classic favorites to innovative combinations that tantalize the taste buds. Whether you're in the mood for a traditional Margherita, a spicy Pepperoni, or our gourmet Truffle Mushroom, there's something for everyone at Slices."},{title:"Our Commitment",text:"At Slices, we are committed to using only the finest ingredients. Our produce is sourced locally whenever possible, and our meats and cheeses are of the highest quality. We believe that great food starts with great ingredients, and we take pride in every pizza we serve."},{title:"Join Us",text:"More than just a place to eat, Slices is a community. Our cozy atmosphere, friendly staff, and dedication to exceptional service make every visit special. Whether you're dining in with family, grabbing a quick lunch, or celebrating a special occasion, we strive to make every experience memorable."},{title:"Thank You",text:"We are grateful for the support of our loyal customers who have made Slices what it is today. Thank you for being a part of our story. We look forward to serving you and continuing to share our love for pizza with you for many years to come."},{title:"Visit Us",text:"Located at 123 Pizza Lane, Slices is open every day from 16:00 - 21:00. Come by and taste the difference that passion, quality, and tradition make. We can't wait to welcome you!"}].forEach((e=>{const n=document.createElement("div"),o=document.createElement("h2"),r=document.createElement("p");o.textContent=e.title,r.textContent=e.text,n.appendChild(o),n.appendChild(r),t.appendChild(n)})),e.appendChild(t)}(),S("about-layout"))}))}))})();