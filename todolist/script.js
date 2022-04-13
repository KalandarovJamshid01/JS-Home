"use strict";
let cont = document.getElementById("content");

let input;
let val;
document.querySelector(".add").addEventListener("click", function (e) {
  e.preventDefault();
  input = String(document.querySelector(".input").value);

  val = `<div class="element">
  <input type="text" readonly class="content_input" value="${input}" />
  
    <button class="delete-btn">Delete</button>

</div>`;
  cont.insertAdjacentHTML("afterbegin", val);
  document.querySelector(".input").value = "";
  let buttons = document.querySelectorAll(".delete-btn");

  let btnArr = [...buttons];
  console.log(btnArr);
  let els = document.querySelectorAll(".element");
  let elsArr = [...els];
  console.log(elsArr);
  for (let i = 0; i < btnArr.length; i++) {
    btnArr[i].addEventListener("click", function (e) {
      e.preventDefault();
      elsArr[i].remove();
      console.log(elsArr);
    });
  }
});
