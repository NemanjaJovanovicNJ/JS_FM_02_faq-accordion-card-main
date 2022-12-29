"use strict";

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  let active = 0;
  question.addEventListener("click", function () {
    questions.forEach((item) => {
      const answer = item.querySelector(".answer");
      const questionTextEl = item.querySelector(".question-text");
      const arrowEl = item.querySelector(".arrow");
      const display = () => {
        answer.classList.remove("hidden");
        questionTextEl.style.fontWeight = "bold";
        arrowEl.style.transform = "rotate(180deg)";
      };
      const hide = () => {
        answer.classList.add("hidden");
        questionTextEl.style.fontWeight = "400";
        arrowEl.style.transform = "rotate(0deg)";
      };

      if (question !== item) {
        hide();
      } else {
        if (active == 0) {
          display();
          active = 1;
        } else {
          hide();
          active = 0;
        }
      }
    });
  });
});
