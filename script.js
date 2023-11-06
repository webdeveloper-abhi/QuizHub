"use strict";

const display = document.querySelector("#quiz");
const answers = document.querySelectorAll(".btn");
const next = document.querySelector(".next");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const optionBox = document.querySelector(".answer");

const question1 = {
  question: "Who is the Current Prime Minister of India",
  options: ["S Jaishankar", "Amit Shah", "Narendra Modi", "All of the Above"],
  correct: "Narendra Modi",
};

const question2 = {
  question: "How many International Odi Centuriesb does Virat have",
  options: ["75", "76", "48", "49"],
  correct: "49",
};

const question3 = {
  question: "Does C language an Object Oriented Language",
  options: ["Yes", "No", "May Be", "I don't Know"],
  correct: "No",
};

const question4 = {
  question: "Does DOM is part of Javascript?",
  options: ["Yes", "No", "May Be", "I don't Know"],
  correct: "No",
};

const question5 = {
  question: "In Which year India got independence",
  options: ["1952", "1942", "1947", "1988"],
  correct: "1947",
};

const questions = [question1, question2, question3, question4, question5];

let questionIndex = 0;
let score = 0;
const startQuiz = function () {
  questionIndex = 0;
  score = 0;
  next.innerHTML = "Next";
  showQuestion();
};

const showQuestion = function () {
  optionBox.innerHTML = "";
  next.style.display = "none";
  let currentQuestion = questions[questionIndex];
  display.value = `${questionIndex + 1}) ${currentQuestion.question}`;

  currentQuestion.options.forEach((answer) => {
    let button = document.createElement("button");
    button.classList.add("btn");
    button.innerHTML = answer;
    optionBox.appendChild(button);

    button.addEventListener("click", function () {
      if (button.innerHTML == currentQuestion.correct) {
        button.style.backgroundColor = `rgba(0,255,0,0.5)`;
        button.style.color = "black";
        score++;
      } else {
        button.style.backgroundColor = `rgba(255,0,0,0.5)`;
        button.style.color = "black";
      }
      Array.from(optionBox.children).forEach((button) => {
        if (button.innerHTML == currentQuestion.correct) {
          button.style.backgroundColor = `rgba(0,255,0,0.5)`;
          button.style.color = "black";
        }
        button.disabled = "true";
        next.style.display = "";
      });
    });
  });
};

startQuiz();

next.addEventListener("click", () => {
  if (questionIndex < questions.length) {
    nextEvent();
  } else {
    startQuiz();
  }
});

function nextEvent() {
  questionIndex++;
  if (questionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  h1.innerText = "Summary";
  h2.style.display = "none";
  display.value = `You have scored ${score}/${questions.length}`;
  optionBox.innerHTML = "";
  next.innerHTML = "Restart Quiz";
  next.addEventListener("click", () => {
    location.href = "index.html";
  });
}
