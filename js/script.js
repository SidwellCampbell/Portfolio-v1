"use strict";

const buttons = document.querySelectorAll(".tool-btns");
const toolCards = document.querySelectorAll(".tool-card");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    buttons.forEach((btn) => {
      btn.classList.remove("selected");
    });
    this.classList.add("selected");
    if (this.classList.contains("language")) {
      toolCards.forEach((card) => {
        if (!card.classList.contains("language")) {
          card.style.display = "none";
        }
      });
    }
  });
});
