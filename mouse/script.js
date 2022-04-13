"use strict";
let one = document.querySelector(".one");
let two = document.querySelector(".two");
one.addEventListener("click", function () {
  one.style.width = "70%";
  two.style.width = "30%";
});
two.addEventListener("click", function () {
  one.style.width = "30%";
  two.style.width = "70%";
});
