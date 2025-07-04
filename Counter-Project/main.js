//--- Elements-----//

const Counter = document.getElementById("Counter");
const Buttons = document.querySelectorAll(".btn");
let number = 0;

// Intialize Action

Counter.textContent = number;

//--- Event Listeners-----//

Buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const currentButton = e.target.dataset.btn;

    if (currentButton === "Increase") {
      number++;
    } else if (currentButton === "Decrease") {
      number--;
    } else {
      number = 0;
    }

    //--- Upadte Counter-----//

    Counter.textContent = number;

    //--- Set Colors-----//

    if (number > 0) {
      Counter.style.color = "rgb(0, 170, 0)";
    } else if (number < 0) {
      Counter.style.color = "rgb(207, 26, 26)";
    } else {
      Counter.style.color = "rgb(13, 13, 13)";
    }
  });
});
