"use strict";

const buttons = document.querySelectorAll(".tool-btns");
const toolCards = document.querySelectorAll(".tool-card");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    buttons.forEach((btn) => {
      btn.classList.remove("selected");
    });
    this.classList.add("selected");
    //grab the class of the button that was selected
    let filterOn = this.classList.item(1);
    if (filterOn === "all") {
      toolCards.forEach((card) => {
        card.classList.remove("hidden");
      });
    } else {
      toolCards.forEach((card) => {
        //if card class doesn't match selected button, hide card.
        if (!card.classList.contains(filterOn)) {
          card.classList.add("hidden");
        } else {
          card.classList.remove("hidden");
        }
      });
    }
  });
});
