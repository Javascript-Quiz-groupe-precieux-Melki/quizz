let counter = 0;
let time = 60;
let score = 0;
let innerwidth = 100;

const goodAnswerSound = new Audio("assets/good.mp3");
const wrongAnswerSound = new Audio("assets/wrong.mp3");

const main = document.querySelector(".main");
const homePage = document.querySelector(".start");

const userInfos = document.querySelectorAll(".start input");

const questionsPage = document.querySelector(".questions");

const question = document.querySelector(".question");

const resultPage = document.querySelector(".result");

const btnStart = document.querySelector(".btn-start");
const btnNext = document.querySelector(".btn-next");
const bntQuit = document.querySelector(".btn-quit");
const btnRestart = document.querySelector(".restart");

const statement1 = document.querySelector("#statement1");
const statement2 = document.querySelector("#statement2");
const statement3 = document.querySelector("#statement3");
const statement4 = document.querySelector("#statement4");

const defaultStatement = document.querySelector("#default-statement");

const statements = document.querySelectorAll("input[type='radio']");

const fakeRadio = document.querySelectorAll(".fakeradio");

const resultIcon = document.querySelector("#result-icon");

const timerZone = document.querySelector(".timer-zone");

const innertime = document.createElement("div");
innertime.classList.add("innertimer");
timerZone.appendChild(innertime);

const questionNumber = document.querySelector("#question-number");
const timeLeft = document.querySelector("#time-left");

btnStart.addEventListener("click", (e) => {
  e.preventDefault();

  userInfos.forEach((element) => {
    changeBorderStyle(element);
  });

  validateUserInfos();
});

btnNext.addEventListener("click", (e) => {
  e.preventDefault();
  checkStatement();
  setTimeout(nextQuestion, 500);
});

bntQuit.addEventListener("click", (e) => {
  e.preventDefault();
  showresult();
});

btnRestart.addEventListener("click", () => {
  location.reload();
});

//TODO remove green border when statement is not selected

statements.forEach((element) => {
  element.addEventListener("click", () => {
    setStyleWhenSelected(element);
  });
});
