var score = 0;
var time = 3;
var tim;
var playg = 0;
var bgcolor = 0;
var highscore = JSON.parse(localStorage.getItem("highscore"));
if (highscore === null) {
  highscore = 0;
}

document.getElementsByClassName("highscore")[0].innerHTML =
  "Điểm cao nhất:" + highscore;
document
  .getElementsByClassName("btn-start")[0]
  .addEventListener("click", function () {
    playg = 1;
    document.getElementsByClassName("nametitle")[0].style.display = "none";

    document.getElementsByClassName("score")[0].innerHTML = score;
    document.getElementById("mainstart").style.display = "none";
    document.getElementById("maingame").style.display = "block";

    startgame();
    checktime();
    setInterval(() => {}, 1000);

    bgcolor = Math.floor(Math.random() * 5);

    switch (bgcolor) {
      case 0:
        document.getElementsByTagName("body")[0].style.backgroundColor =
          "#c92bc9";
        break;
      case 1:
        document.getElementsByTagName("body")[0].style.backgroundColor =
          "#0099FF";
        break;
      case 2:
        document.getElementsByTagName("body")[0].style.backgroundColor =
          "#adff2f";
        break;
      case 3:
        document.getElementsByTagName("body")[0].style.backgroundColor =
          "#800080";
      case 4:
        document.getElementsByTagName("body")[0].style.backgroundColor =
          "#ffb3ff";
        break;
      default:
        document.getElementsByTagName("body")[0].style.backgroundColor =
          "#FF6633";
        break;
    }
  });

document
  .getElementsByClassName("btn-reload")[0]
  .addEventListener("click", function () {
    location.reload();
  });
document.getElementsByClassName("true")[0].addEventListener("click", truee);
document.getElementsByClassName("false")[0].addEventListener("click", falsee);

window.addEventListener(
  "keydown",
  function (event) {
    if (event.which === 37) {
      if (playg === 1) truee();
    } else if (event.which === 39) {
      if (playg === 1) falsee();
    }
  },
  true
);
function startgame() {
  a = Math.floor(Math.random() * 50);
  b = Math.floor(Math.random() * 50);
  rd = Math.floor(Math.random() * 9);
  switch (rd) {
    case 0:
    case 3:
    case 6:
    case 8:
      c = a + b;
      ques = 1;
      break;

    case 1:
      c = a + b - 10;
      ques = 0;
      break;
    case 2:
      c = a + b - Math.ceil(Math.random() * 4);
      ques = 0;
      break;

    case 5:
      c = a + b + 10;
      ques = 0;
      break;
    case 4:
    case 7:
      c = a + b + Math.ceil(Math.random() * 4);
      ques = 0;
      break;

    default:
      rd = Math.floor(Math.random() * 3);
      break;
  }
  document.getElementsByClassName("s1")[0].innerText = a;
  document.getElementsByClassName("s2")[0].innerText = b;
  document.getElementsByClassName("s3")[0].innerText = c;
}

function checktime() {
  var tim = setInterval(function () {
    time -= 1;
    if (time <= 0) {
      time = 0;
    }
    if (time === 0) {
      document.getElementsByClassName("score")[0].innerHTML = score;
      document.getElementsByClassName("modal")[0].style.display = "block";
      document.getElementsByClassName("score")[1].innerHTML = "Điểm: " + score;
    }

    document.getElementsByClassName("line")[0].style.width =
      "calc(100% /" + time + ")";
  }, 1000);
}

function truee() {
  answ = 1;
  if (ques === answ) {
    score += 1;
    document.getElementsByClassName("score")[0].innerText = score;
    startgame();
    time = 3;
  } else {
    playg = 0;
    document.getElementsByClassName("score")[0].innerHTML = score;
    document.getElementsByClassName("modal")[0].style.display = "block";
    document.getElementsByClassName("score")[1].innerHTML = "Điểm: " + score;
    time = 0;
  }
  savehighscore();
}

function falsee() {
  answ = 0;
  if (ques === answ) {
    score += 1;
    document.getElementsByClassName("score")[0].innerText = score;
    startgame();
    time = 3;
  } else {
    playg = 0;
    document.getElementsByClassName("score")[0].innerHTML = score;
    document.getElementsByClassName("modal")[0].style.display = "block";
    document.getElementsByClassName("score")[1].innerHTML = "Điểm: " + score;
    time = 0;
  }
  savehighscore();
}

function savehighscore() {
  if (score > highscore) {
    highscore = score;
    document.getElementsByClassName("highscore")[0].innerText =
      "Điểm: " + highscore;
    document.getElementsByClassName("highscore")[0].innerHTML =
      "Điểm cao nhất:" + highscore;
    localStorage.setItem("highscore", JSON.stringify(highscore));
    document.getElementsByClassName("highscore")[0].innerHTML =
      "Điểm cao nhất:" + highscore;
  }
}
