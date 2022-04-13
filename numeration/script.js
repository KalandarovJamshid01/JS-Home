let counter = 1;
let childs = [...document.getElementsByClassName("button")];
childs.forEach(function (val) {
  val.addEventListener("click", function (e) {
    e.preventDefault();
    if (val.classList.contains("next") && counter < 4) {
      counter++;
      if (counter == 4) {
        document.querySelector(".next").classList.remove("div-back");
      } else {
        document.querySelector(".next").classList.add("div-back");
        document.querySelector(".prev").classList.add("div-back");
      }
      document
        .querySelector(`.heading${counter}`)
        .classList.add("heading-back");
      document.querySelector(`.div${counter}`).classList.add("div-back");
      console.log(counter);
    } else if (val.classList.contains("prev") && counter > 1) {
      document
        .querySelector(`.heading${counter}`)
        .classList.remove("heading-back");
      document.querySelector(`.div${counter}`).classList.remove("div-back");
      counter--;
      if (counter == 1) {
        document.querySelector(".prev").classList.remove("div-back");
      } else {
        document.querySelector(".prev").classList.add("div-back");
        document.querySelector(".next").classList.add("div-back");
      }
      console.log(counter);
    }
  });
});
  