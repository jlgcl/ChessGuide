!function(e){var n={};function t(r){if(n[r])return n[r].exports;var c=n[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,t),c.l=!0,c.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)t.d(r,c,function(n){return e[n]}.bind(null,c));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n),t.d(n,"board",(function(){return O})),t.d(n,"boardBox",(function(){return H}));var r=t.p+"e48feabdd563479eefc8591390c18d1c.png",c=t.p+"9cab050258aa5fc071d990ece6e66816.png",i=t.p+"0180c5827bceece87dc3abdae65482ef.png",o=t.p+"69534b953181e0c4d0335d4bee6364e7.png",d=t.p+"55c06d7782205f329641b3114d5db7e6.png",p=t.p+"de55e4cb5f4b5acf62ee872a3a5b0cca.png",s=t.p+"ae8822a6c7a3fe3d4bc456aac92e680b.png",a=t.p+"7eeecfe963b7301bfc8797e2532bd71b.png",f=t.p+"11f4961ce6da7780b8b871f4b2088514.png",u=t.p+"48a5392547eb9403d668d19c1dee23ea.png",l=t.p+"271e9073e2fb4ece87ef62715f2bdf9e.png",b=t.p+"4c3cc6fc5c61c9ac11a2c3476612ee82.png";function g(e,n,t,r,c,i){this.pieces={king:e,queen:n,bishop:t,knight:r,castle:c,pawn:i},this.piecesWon={}}const h=new g(r,c,i,o,d,p),m=new g(s,a,f,u,l,b);function v(e,n){const t=new Image;return t.src=n,Array.from(H)[e-1].appendChild(t)}function y(e){for(const n of Object.keys(h.pieces))return!!Object.values(h.pieces).includes(e)}function M(e,n,t,r,c,i,o){let d=n[r+1][c+1],p=n[r+1][c-1],s=n[r-1][c+1],a=n[r-1][c-1],f="",u="",l="",b="";void 0!==t[d].childNodes[0]&&(f=t[d].childNodes[0].getAttribute("src")),void 0!==t[p].childNodes[0]&&(u=t[p].childNodes[0].getAttribute("src")),void 0!==t[s].childNodes[0]&&(l=t[s].childNodes[0].getAttribute("src")),void 0!==t[a].childNodes[0]&&(b=t[a].childNodes[0].getAttribute("src")),function(e,n,t,r,c,i,o,d,p,s,a,f,u){if(!(y(i)&&y(o)||""===r[s].innerHTML&&""===r[a].innerHTML||r[c]!==r[s]&&r[c]!==r[a])){r[O[n][t]].innerHTML="",r[c].innerHTML="";let i=document.createElement("img");i.src=e,r[c].appendChild(i)}if((y(d)||y(p))&&(""!==r[f].innerHTML||""!==r[u].innerHTML)&&(r[c]===r[f]||r[c]===r[u])){r[O[n][t]].innerHTML="",r[c].innerHTML="";let i=document.createElement("img");i.src=e,r[c].appendChild(i)}}(e,r,c,t,i,f,u,l,b,d,p,s,a)}function T(e,n,t,r,c,i){let o=r;for(;o<i&&e;)return o++,""===t[n[o][c]].innerHTML;for(;o>i&&!e;)return o--,""===t[n[o][c]].innerHTML}function L(e,n,t){let r=Array.from(H),c=function(e,n,t){let r="",c="";return e.map(i=>{i==n&&(r=e.indexOf(i)),i==t&&(c=e.indexOf(i))}),{currentIndex:r,targetIndex:c}}(r,n,t);!function(e,n,t,r,c){let i=j(O,t).i,o=j(O,t).j,d=j(O,r).i,p=j(O,r).j,s=!1;for(const n of Object.keys(h.pieces))Object.values(h.pieces).includes(e)&&(s=!0);if(s&&O[i+2]&&o===p&&O[d][o]<=O[i+2][o]){if(T(s,O,n,i,o,d)&&(n[t].innerHTML="",""===n[t].innerHTML)){let t=document.createElement("img");t.src=e,n[r].appendChild(t)}}else if(!s&&void 0!==O[i-2]&&o===p&&O[d][o]>=O[i-2][o]&&T(s,O,n,i,o,d)&&(n[t].innerHTML="",""===n[t].innerHTML)){let t=document.createElement("img");t.src=e,n[r].appendChild(t)}M(e,O,n,i,o,r)}(e,r,c.currentIndex,c.targetIndex)}function j(e,n){for(let t=0;t<e.length;t++)for(let r=0;r<e[t].length;r++)if(e[t][r]===n)return{i:t,j:r}}var H=document.getElementsByClassName("grid-item"),O=[[1,2,3,4,5,6,7,8],[9,10,11,12,13,14,15,16],[17,18,19,20,21,22,23,24],[25,26,27,28,29,30,31,32],[33,34,35,36,37,38,39,40],[41,42,43,44,45,46,47,48],[49,50,51,52,53,54,55,56],[57,58,59,60,61,62,63,64]];!function(){!function(){for(let e=0;e<O[1].length;e++)v(O[1][e],h.pieces.pawn);for(let e=0;e<O[6].length;e++)v(O[6][e],m.pieces.pawn);v(O[0][0],h.pieces.castle),v(O[0][1],h.pieces.knight),v(O[0][2],h.pieces.bishop),v(O[0][3],h.pieces.queen),v(O[0][4],h.pieces.king),v(O[0][5],h.pieces.bishop),v(O[0][6],h.pieces.knight),v(O[0][7],h.pieces.castle),v(O[7][0],m.pieces.castle),v(O[7][1],m.pieces.knight),v(O[7][2],m.pieces.bishop),v(O[7][3],m.pieces.queen),v(O[7][4],m.pieces.king),v(O[7][5],m.pieces.bishop),v(O[7][6],m.pieces.knight),v(O[7][7],m.pieces.castle)}();var e=Array.from(H),n="",t="",r="";e.forEach(e=>{e.addEventListener("click",e=>{void 0!==e.target.src&&""===t?(n=e.target.parentNode,t=e.target.getAttribute("src")):void 0!==e.target.src&&""!==t&&(r=e.target.parentNode,L(t,n,r),t="",n="",r=""),void 0===e.target.src&&""!==t&&(r=e.target,L(t,n,r),t="",n="",r="")})})}()}]);