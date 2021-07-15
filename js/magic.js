var score = 0;
var time = 3;
var tim;
var playg = 0;
var bgcolor = 0;
var audio_true = new Audio("./sound/true_sound.mp3");
var audio_false = new Audio("./sound/false_sound.mp3");
var highscore = JSON.parse(localStorage.getItem("highscore"));
if (highscore === null) {
  highscore = 0;
}

function getId(id) {
  return document.getElementById(id);
}

function getClass(clss) {
  {
    return document.getElementsByClassName(clss);
  }
}
function getTagName(tagname) {
  {
    return document.getElementsByTagName(tagname);
  }
}
getClass("highscore")[0].innerText = highscore;
document
  .getElementsByClassName("btn-start")[0]
  .addEventListener("click", playgame);
getClass("true")[0].addEventListener("click", truee);
getClass("false")[0].addEventListener("click", falsee);
getClass("replay")[0].onclick = () => {
  setTimeout(playgame, 300);
};
getClass("returnmainmenu")[0].onclick = () => {
  location.reload();
};
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

function playgame() {
  playg = 1;
  score = 0;
  time = 3;
  clearInterval(tim);
  getClass("gover")[0].style.display = "none";
  getClass("displaynumber")[0].style.display = "block";
  getClass("nametitle")[0].style.display = "none";
  getClass("score")[0].innerText = score;
  getId("mainstart").style.display = "none";
  getId("maingame").style.display = "block";
  setcolor();
  startgame();
  checktime();
}

function setcolor() {
  bgcolor = Math.floor(Math.random() * 6);
  switch (bgcolor) {
    case 0:
      getTagName("body")[0].style.backgroundColor =
        "#c92bc9";
      break;
    case 1:
      getTagName("body")[0].style.backgroundColor =
        "#5bbdff";
      break;
    case 2:
      getTagName("body")[0].style.backgroundColor =
        "#24AE5E";
      break;
    case 3:
      getTagName("body")[0].style.backgroundColor =
        "#800080";
    case 4:
      getTagName("body")[0].style.backgroundColor =
        "#ff55b8";
      break;
    default:
      getTagName("body")[0].style.backgroundColor =
        "#FF6633";
      break;
  }
}

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
  getClass("s1")[0].innerText = a;
  getClass("s2")[0].innerText = b;
  getClass("s3")[0].innerText = c;
}

function checktime() {
  var tim = setInterval(function () {
    time -= 1;
    if (time <= 0) {
      time = 0;
    }
    if (time === 0) {
      playg = 0;
      audio_false.play();
      clearInterval(tim);
      getClass("score")[0].innerText = score;
      getClass("gover")[0].style.display = "block";
      getClass("displaynumber")[0].style.display = "none";
      getClass("score")[1].innerText = score;
    }
    getClass("line")[0].style.width = "calc(100% /" + time + ")";
  }, 1000);
}

function truee() {
  answ = 1;
  checkclick();
}

function falsee() {
  answ = 0;
  checkclick();
}

function checkclick() {
  if (playg === 1) {
    if (ques === answ) {
      score += 1;
      audio_true.play();
      getClass("score")[0].innerText = score;
      startgame();
      time = 3;
    } else {
      playg = 0;
      audio_false.play();
      getClass("score")[0].innerText = score;
      getClass("gover")[0].style.display = "block";
      getClass("displaynumber")[0].style.display = "none";
      time = 0;
    }
    getClass("score")[1].innerText = score;
    savehighscore();
  }
}

function savehighscore() {
  if (score > highscore) {
    highscore = score;
    localStorage.setItem("highscore", JSON.stringify(highscore));
    getClass("highscore")[0].innerText = highscore;
  }
}
