"use strict";

const questions = document.querySelectorAll(".question");

const display = (questionTextEl, arrowEl) => {
  questionTextEl.style.fontWeight = "bold";
  arrowEl.style.transform = "rotate(180deg)";
};
const hide = (questionTextEl, arrowEl) => {
  questionTextEl.style.fontWeight = "400";
  arrowEl.style.transform = "rotate(0deg)";
};

questions.forEach((question) => {
  question.addEventListener("click", function () {
    questions.forEach((item) => {
      const answer = item.querySelector(".answer");
      const questionTextEl = item.querySelector(".question-text");
      const arrowEl = item.querySelector(".arrow");

      if (question !== item) {
        answer.classList.add("hidden");
        hide(questionTextEl, arrowEl);
        return;
      }
      answer.classList.toggle("hidden");
      answer.classList.contains("hidden")
        ? hide(questionTextEl, arrowEl)
        : display(questionTextEl, arrowEl);
    });
  });
});
