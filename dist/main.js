!function(e){var n={};function t(c){if(n[c])return n[c].exports;var r=n[c]={i:c,l:!1,exports:{}};return e[c].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,c){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:c})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(c,r,function(n){return e[n]}.bind(null,r));return c},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n),t.d(n,"board",(function(){return x})),t.d(n,"boardBox",(function(){return v}));var c=t.p+"e48feabdd563479eefc8591390c18d1c.png",r=t.p+"9cab050258aa5fc071d990ece6e66816.png",i=t.p+"0180c5827bceece87dc3abdae65482ef.png",p=t.p+"69534b953181e0c4d0335d4bee6364e7.png",a=t.p+"55c06d7782205f329641b3114d5db7e6.png",o=t.p+"de55e4cb5f4b5acf62ee872a3a5b0cca.png",f=t.p+"ae8822a6c7a3fe3d4bc456aac92e680b.png",u=t.p+"7eeecfe963b7301bfc8797e2532bd71b.png",d=t.p+"11f4961ce6da7780b8b871f4b2088514.png",s=t.p+"48a5392547eb9403d668d19c1dee23ea.png",b=t.p+"271e9073e2fb4ece87ef62715f2bdf9e.png",g=t.p+"4c3cc6fc5c61c9ac11a2c3476612ee82.png";function l(e,n,t,c,r,i){this.pieces={king:e,queen:n,bishop:t,knight:c,castle:r,pawn:i}}const h=new l(c,r,i,p,a,o),y=new l(f,u,d,s,b,g);function m(e,n){const t=new Image;return t.src=n,Array.from(v)[e-1].appendChild(t)}var v=document.getElementsByClassName("grid-item"),x=[[1,2,3,4,5,6,7,8],[9,10,11,12,13,14,15,16],[17,18,19,20,21,22,23,24],[25,26,27,28,29,30,31,32],[33,34,35,36,37,38,39,40],[41,42,43,44,45,46,47,48],[49,50,51,52,53,54,55,56],[57,58,59,60,61,62,63,64]];!function(){!function(){for(let e=0;e<x[1].length;e++)m(x[1][e],h.pieces.pawn);for(let e=0;e<x[6].length;e++)m(x[6][e],y.pieces.pawn);m(x[0][0],h.pieces.castle),m(x[0][1],h.pieces.knight),m(x[0][2],h.pieces.bishop),m(x[0][3],h.pieces.queen),m(x[0][4],h.pieces.king),m(x[0][5],h.pieces.bishop),m(x[0][6],h.pieces.knight),m(x[0][7],h.pieces.castle),m(x[7][0],y.pieces.castle),m(x[7][1],y.pieces.knight),m(x[7][2],y.pieces.bishop),m(x[7][3],y.pieces.queen),m(x[7][4],y.pieces.king),m(x[7][5],y.pieces.bishop),m(x[7][6],y.pieces.knight),m(x[7][7],y.pieces.castle)}();var e=Array.from(v),n="",t="",c="";e.forEach(e=>{e.addEventListener("click",e=>{void 0!==e.target.src&&(n=e.target.parentNode,t=e.target.getAttribute("src")),void 0===e.target.src&&""!==t&&(c=e.target,function(e,n,t){let c=Array.from(v),r=function(e,n,t){let c="",r="";return e.map(i=>{i==n&&(c=e.indexOf(i)),i==t&&(r=e.indexOf(i))}),{currentIndex:c,targetIndex:r}}(c,n,t);r.currentIndex,r.targetIndex}(0,n,c))})})}()}]);