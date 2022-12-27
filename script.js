"use strict";

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const button = question.querySelector(".btn");
  const answer = question.querySelector(".answer");
  const questionTextEl = question.querySelector(".question-text");
  const arrowEl = question.querySelector(".arrow");

  let active = true;
  button.addEventListener("click", function () {
    questions.forEach((item) => {
      const display = function () {
        item.querySelector(".question-text").style.fontWeight = "bold";
        item.querySelector(".answer").classList.remove("hidden");
        item.querySelector(".arrow").style.transform = "rotate(180deg)";
      };

      const reset = function () {
        item.querySelector(".question-text").style.fontWeight = "400";
        item.querySelector(".answer").classList.add("hidden");
        item.querySelector(".arrow").style.transform = "rotate(0deg)";
      };

      if (item == question) {
        if (active == false) {
          display();
          active = true;
        } else {
          reset();
          active = false;
        }
      } else {
        active = false;
        reset();
      }
    });
  });
  questionTextEl.addEventListener("click", function () {
    questions.forEach((item) => {
      const display = function () {
        item.querySelector(".question-text").style.fontWeight = "bold";
        item.querySelector(".answer").classList.remove("hidden");
        item.querySelector(".arrow").style.transform = "rotate(180deg)";
      };

      const reset = function () {
        item.querySelector(".question-text").style.fontWeight = "400";
        item.querySelector(".answer").classList.add("hidden");
        item.querySelector(".arrow").style.transform = "rotate(0deg)";
      };

      if (item == question) {
        if (active == false) {
          display();
          active = true;
        } else {
          reset();
          active = false;
        }
      } else {
        active = false;
        reset();
      }
    });
  });
});
