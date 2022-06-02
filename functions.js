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
  if (counter == quiz.length - 1) {
    btnNext.textContent = "Terminer";
  }
  resetBorder();
}

function checkStatement() {
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
  });
}

function resetBorder() {
  fakeRadio.forEach((element) => {
    element.style.background = "#fff";
    element.style.border = "1px solid #666";
    console.log(element.parentElement);
    element.parentElement.style.border = "2px #eee solid";
  });
}

function changeBorderStyle(element) {
  element.style.border = "1px solid grey";
  element.nextElementSibling.textContent = "";
}

function validateUserInfos() {
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
  } else if (userInfos[1].value.indexOf("@gmail.com") == "-1") {
    userInfos[1].style.border = "2px solid red";
    userInfos[1].nextElementSibling.textContent =
      "Veuillez entrer une adresse e-mail valide";
  } else init();
}

function setStyleWhenSelected(element) {
  btnNext.removeAttribute("disabled");
  resetBorder();
  element.parentElement.style.border = "2px solid #028A3D";
  element.previousElementSibling.style.background = "#028A3D";
  element.previousElementSibling.style.border = "none";
}
function shuffleArray(inputArray) {
  inputArray.sort(() => Math.random() - 0.5);
}
