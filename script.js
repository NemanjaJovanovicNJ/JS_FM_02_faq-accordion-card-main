"use strict";

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", function () {
    questions.forEach((item, i) => {
      const answer = item.querySelector(".answer");
      const questionTextEl = item.querySelector(".question-text");
      const arrowEl = item.querySelector(".arrow");
      const display = () => {
        questionTextEl.style.fontWeight = "bold";
        arrowEl.style.transform = "rotate(180deg)";
      };
      const hide = () => {
        questionTextEl.style.fontWeight = "400";
        arrowEl.style.transform = "rotate(0deg)";
      };

      if (question !== item) {
        answer.classList.add("hidden");
        hide();
      } else {
        answer.classList.toggle("hidden");
        if (!answer.classList.contains("hidden")) {
          display();
        } else {
          hide();
        }
      }
    });
  });
});
