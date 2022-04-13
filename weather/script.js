"use strict";
let input = document.querySelector(".davlat");
document.querySelector(".bos").addEventListener("click", (e) => {
  // console.log(e);

  let val = input.value;
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=c35c453b417a47a4b6075927220304&q=${val}&aqi=no`
  )
    .then(function (response) {
        return response.json();
      })
    .then(function (data) {
        console.log(data);
        let html = ` <div class="widget">
        <div class="weatherIcon"><img class="rasm" src="${data.current.condition.icon}" alt=""></div>
        <div class="weatherInfo">
          <div class="temperature"><span>${data.current.temp_c}&deg;</span></div>
          <div class="description">
            <div class="weatherCondition">${data.current.condition.text.toUpperCase()}</div>
            <div class="place">
              <p class="country">
              <span>${data.location.country}</span> <span class="poytaxt">${data.location.name}</span>
              </p>
            </div>
          </div>
        </div>
        <div class="date"><p>${data.location.localtime}</p></div>
      </div>`;
        document
          .querySelector(".container")
          .insertAdjacentHTML("beforeEnd", html);
      });
});
document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    let val = input.value;
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=c35c453b417a47a4b6075927220304&q=${val}&aqi=no`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let html = ` <div class="widget">
          <div class="weatherIcon"><img class="rasm" src="${
            data.current.condition.icon
          }" alt=""></div>
          <div class="weatherInfo">
            <div class="temperature"><span>${
              data.current.temp_c
            }&deg;</span></div>
            <div class="description">
              <div class="weatherCondition">${data.current.condition.text.toUpperCase()}</div>
              <div class="place">
                <p class="country">
                <span>${data.location.country}</span> <span class="poytaxt">${
          data.location.name
        }</span>
                </p>
              </div>
            </div>
          </div>
          <div class="date"><p>${data.location.localtime}</p></div>
        </div>`;
        document
          .querySelector(".container")
          .insertAdjacentHTML("afterBegin", html);
      });
  }
});
