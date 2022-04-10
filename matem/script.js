"use strict";
let oneNum = Math.trunc(Math.random() * 10);
let twoNum = Math.trunc(Math.random() * 10);

let one = document.querySelector(".one");
let two = document.querySelector(".two");
let val;
one.innerHTML = oneNum;
two.innerHTML = twoNum;
let check = document.querySelector(".check");
let yig = oneNum + twoNum;
check.addEventListener("click", function (e) {
  e.preventDefault();
  val = Number(document.querySelector(".inp").value);
  document.querySelector(".inp").value = "";
  
  if (yig == val) {
    alert(`Siz togri javobni topdingiz`);
  } else {
    alert(`Siz topaolmadingiz togri javob ${yig} edi`);
  }
});
