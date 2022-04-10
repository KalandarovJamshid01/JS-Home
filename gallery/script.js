"use strict";
let ota = document.querySelector(".container");
let child = document.querySelectorAll(".div");
// ota.addEventListener("click", function (e) {
//   if (e.target.classList.contains("div")) {
//     let arr = [...ota.children];
//     for (let son of arr) {

//       son.classList.toggle("width");
//     }
//     // ota.children.classList.toggle("width");
//   }
// });
child.forEach((el) => {
  el.addEventListener("click", function (e) {
    let arr = [...el.parentElement.children];
    arr.forEach(function (val) {
      if (val == el) {
        val.classList.add("width");
      } else {
        val.classList.remove("width");
      }
    });
    // if (el.previousElementSibling.classList.contains("width")) {
    //   el.previousElementSibling.classList.remove("width");
    // }
    // e.preventDefault();
    // el.classList.toggle("width");
  });
});
