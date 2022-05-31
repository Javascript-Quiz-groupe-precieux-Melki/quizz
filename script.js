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

const resultPage = document.querySelector(".result"); //Page de resultats

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
const timeLeft = document.querySelector("#time");

function init() {
  homePage.style = "animation-duration: 1s;animation-name: slidein;";
  homePage.classList.add("hide");
  questionsPage.classList.add("hide");
  questionsPage.classList.remove("hide");

  question.textContent = quiz[0].q;
  statement1.nextElementSibling.textContent = quiz[0].a[0].text;
  statement2.nextElementSibling.textContent = quiz[0].a[1].text;
  statement3.nextElementSibling.textContent = quiz[0].a[2].text;
  statement4.nextElementSibling.textContent = quiz[0].a[3].text;

  let username = userInfos[0].value;
  let usermail = userInfos[1].value;
  resultPage.childNodes[1].textContent = username;
  resultPage.childNodes[3].textContent = usermail;

  function timemanager() {
    time > 0 ? time-- : false;

    timeLeft.textContent = time;

    if (time <= 10) {
      timeLeft.style.color = "red";
    }
    if (time <= 0) {
      time = 60;
      timeLeft.style.color = "#222";
      nextQuestion();
    }
  }

  function widthmanager() {
    innerwidth -= 0.0084;

    innertime.style.width = "" + innerwidth + "%";
  }
  setInterval(widthmanager, 5);
  {
  }

  setInterval(timemanager, 1000);
  {
  }
}

function showresult() {
  questionsPage.classList.add("hide");
  resultPage.classList.remove("hide");
  resultPage.childNodes[7].textContent = score + "/" + quiz.length;
  if ((score * 100) / quiz.length >= 50) {
    resultIcon.classList.add("fa-regular", "fa-circle-check", "success");
  } else resultIcon.classList.add("fa-regular", "fa-circle-xmark", "wrong");
}
function nextQuestion() {
  defaultStatement.checked = true;
  resultPage.childNodes[7].textContent = score + "/" + quiz.length;
  if (counter < quiz.length - 1) {
    counter++;
  } else {
    showresult();
  }
  question.textContent = quiz[counter].q;
  statement1.nextElementSibling.textContent = quiz[counter].a[0].text;
  statement2.nextElementSibling.textContent = quiz[counter].a[1].text;
  statement3.nextElementSibling.textContent = quiz[counter].a[2].text;
  statement4.nextElementSibling.textContent = quiz[counter].a[3].text;

  time = 60;
  innerwidth = 100;
  questionNumber.textContent = "Question " + (counter + 1) + "/" + quiz.length;
  btnNext.setAttribute("disabled", "disabled");

  statements.forEach((element) => {
    element.parentElement.style.border = "2px solid #ddd";
  });
  resetBorder();
}

function validator() {
  const answer = document.querySelector("input[type='radio']:checked");
  quiz[counter].a.forEach((element) => {
    if (element.text == answer.nextElementSibling.textContent) {
      if (element.iscorrect) {
        goodAnswerSound.play();
        answer.parentElement.style.border = "1px #028A3D solid";
        score++;
      } else {
        wrongAnswerSound.play();
        answer.parentElement.style.border = "1px red solid";
      }
    }

    // timer.style.display="none"
  });
}

btnStart.addEventListener("click", (e) => {
  e.preventDefault();
  userInfos.forEach((element) => {
    element.style.border = "1px solid grey";
    element.nextElementSibling.textContent = "";
  });
  if (userInfos[0].value == "" || userInfos[1].value == "") {
    if (userInfos[0].value == "") {
      userInfos[0].style.border = "2px solid red";
      userInfos[0].nextElementSibling.textContent =
        "vous avez oublié de remplir votre nom";
    }
    if (userInfos[1].value == "") {
      userInfos[1].style.border = "2px solid red";
      userInfos[1].nextElementSibling.textContent =
        "vous avez oublié de renseigner votre mail";
    }
  } else if (userInfos[1].value.indexOf("@") == "-1") {
    userInfos[1].style.border = "2px solid red";
    userInfos[1].nextElementSibling.textContent =
      "Veuillez entrer une adresse e-mail valide";
  } else init();
});

btnNext.addEventListener("click", (e) => {
  e.preventDefault();
  validator();
  setTimeout(nextQuestion, 500);
  // nextQuestion()
});

bntQuit.addEventListener("click", (e) => {
  e.preventDefault();
  showresult();
});

btnRestart.addEventListener("click", () => {
  location.reload();
});

statements.forEach((element) => {
  element.addEventListener("click", () => {
    btnNext.removeAttribute("disabled");
    resetBorder();
    element.parentElement.style.border = "2px solid ##028A3D";
    element.previousElementSibling.style.background = "#028A3D";
    element.previousElementSibling.style.border = "none";
  });
});

function resetBorder() {
  statements.forEach((element) => {
    element.parentElement.style.border = "2px #ddd solid;";
  });

  fakeRadio.forEach((element) => {
    element.style.background = "#fff";
    element.style.border = "1px solid #666";
    console.log("asdasd", element);
  });
}
