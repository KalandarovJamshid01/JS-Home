"use strict";
let inter1 = document.querySelector(".inter1");
let inter2 = document.querySelector(".inter2");
let inter3 = document.querySelector(".inter3");
let k = 0;
let i = 0;
let j = 0;
let twit = setInterval(function () {
  k += 40;
  inter1.textContent = k;
  if (k == 12000) {
    clearInterval(twit);
  }
}, 0.2);
let youtube = setInterval(function () {
  i += 16;
  inter2.textContent = i;
  if (i > 5000) {
    clearInterval(youtube);
  }
}, 0.4);
let facebook = setInterval(function () {
  j += 24;
  inter3.textContent = j;
  if (j > 7500) {
    clearInterval(facebook);
  }
}, 0.3);
