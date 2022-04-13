"use strict";
let input = document.querySelector(".poisk");
const container = document.querySelector(".container");

let data2;
document.querySelector(".icon").addEventListener("click", function (e) {
  let val = input.value;
  document.querySelector(".container").innerHTML = "";
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      data2 = data;
      console.log(data);
      for (let i = 0; i < data.meals.length; i++) {
        let html = `
    <div class="cart">
        <div class="img"><img class="image" src="${data.meals[i].strMealThumb}" alt="" /></div>
        <div class="cart_info">
          <p class="meal_name">${data.meals[i].strMeal}</p> 
          <button id="${i}" class="recip  e">Get Recipe</button>
        </div>
      </div>`;

        document
          .querySelector(".container")
          .insertAdjacentHTML("beforeend", html);
      }
    })
    .catch(function (error) {
      alert(`Xato malumot kiritildi`);
    });
});
container.addEventListener("click", (e) => {
  const btn = e.target;
  if (!btn.classList.contains("recipe")) return;
  console.log("hello");
  const num = +btn.id;
  let htmlGet = `<div class="getrec">
  <div class="popup">
    <ion-icon name="close" class="close" id="${num}"></ion-icon>
    <p class="name">${data2.meals[num].strMeal}</p>
    <p class="category">${data2.meals[num].strCategory}</p>
    <p class="instr">Instructions:</p>
    <p class="description">${data2.meals[num].strInstructions}</p>
    <a href="${data2.meals[num].strYoutube}" class="video"><u>Watch Video</u> </a>
    <img src="${data2.meals[num].strMealThumb}" alt="" class="circle" />
  </div>
  </div>`;
  document.querySelector(".container").insertAdjacentHTML("beforeend", htmlGet);
  document.querySelector(`.close`).addEventListener("click", function () {
    document.querySelector(".getrec").remove();
  });
});
