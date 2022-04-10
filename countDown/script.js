"use strict";
let day = document.querySelector(".day");
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let countersec = Number(second.textContent);
let countermin = Number(minute.textContent);
let counterhour = Number(hour.textContent);
let counterday = Number(day.textContent);

let sI = setInterval(function () {
  second.innerHTML = countersec;
  countersec--;
  if (countersec == -1) {
    countermin--;
    minute.innerHTML = countermin;

    countersec = 59;
    if (countermin == -1) {
      counterhour--;
      hour.innerHTML = counterhour;
      countermin = 59;
      if (counterhour == -1) {
        counterday--;
        day.innerHTML = counterday;
        counterhour = 23;
        if (counterday == -1) {
          alert(`Vaqtingiz tugadi`);
        }
      }
    }
  }
}, 1000);
