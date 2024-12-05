"use strict";

const buttons = document.querySelectorAll(".tool-btns");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    buttons.forEach((btn) => {
      btn.classList.remove("selected");
    });
    this.classList.add("selected");
  });
});
