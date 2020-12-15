var score = 0;
var time = 60;
var tim;
var highscore = JSON.parse(localStorage.getItem("highscore"));
if (highscore === null) {
    highscore = 0;
}
document.getElementsByClassName("highscore")[0].innerHTML = "Điểm cao nhất:" + highscore;
document.getElementsByClassName("btn-start")[0].addEventListener("click", function () {
    document.getElementsByClassName("score")[0].innerHTML = "Điểm :" + score;
    document.getElementsByClassName("footer")[0].style.display = 'none';
    document.getElementById("mainstart").style.display = 'none';
    document.getElementById("maingame").style.display = 'block';
    document.getElementsByClassName("btn-end")[0].style.display = 'block';
    startgame();
    checktime();
    document.getElementsByClassName("highscore")[0].innerHTML = "Điểm cao nhất:" + highscore;
    document.getElementsByClassName("highscore")[0].innerHTML = "Điểm cao nhất:" + highscore;
});
document.getElementsByClassName("btn-end")[0].addEventListener("click", function () {
    location.reload();
});
document.getElementsByClassName("btn-reload")[0].addEventListener("click", function () {
    location.reload();
});
document.getElementsByClassName("true")[0].addEventListener("click", truee);
document.getElementsByClassName("false")[0].addEventListener("click", falsee);

function startgame() {
    a = Math.floor(Math.random() * 50);
    b = Math.floor(Math.random() * 50);
    rd = Math.floor(Math.random() * 6);
    switch (rd) {

        case 0:
            c = a + b;
            ques = 1;
            break;
        case 1:
            c = a + b + 10;
            ques = 0;
            break;
        case 2:
            c = a + b - 10;
            ques = 0;
            break;
        case 3:
            c = a + b - Math.ceil(Math.random() * 4);
            ques = 0;
            break;
        case 4:
        case 5:
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
            clearInterval(tim);
        }
        if (time === 0) {
            document.getElementsByClassName("score")[0].innerHTML = "Điểm: " + score;
            document.getElementsByClassName("modal")[0].style.display = 'block';
            document.getElementsByClassName("score")[1].innerHTML = "Điểm: " + score;
        }
    }, 1000);
}

function truee() {
    answ = 1;
    if (ques === answ) {
        score += 1;
        document.getElementsByClassName("score")[0].innerText = "Điểm: " + score;
        startgame();
    } else {
        document.getElementsByClassName("score")[0].innerHTML = "Điểm: " + score;
        document.getElementsByClassName("modal")[0].style.display = 'block';
        document.getElementsByClassName("score")[1].innerHTML = "Điểm: " + score;
        time = 0;
        clearInterval(tim);
    }
    savehighscore();
}

function falsee() {
    answ = 0;
    if (ques === answ) {
        score += 1;
        document.getElementsByClassName("score")[0].innerText = "Điểm: " + score;
        startgame();
    } else {
        document.getElementsByClassName("score")[0].innerHTML = "Điểm :" + score;
        document.getElementsByClassName("modal")[0].style.display = 'block';
        document.getElementsByClassName("score")[1].innerHTML = "Điểm: " + score;
        time = 0;
        clearInterval(tim);
    }
    savehighscore();
}

function savehighscore() {
    if (score > highscore) {
        highscore = score;
        document.getElementsByClassName("highscore")[0].innerText = "Điểm: " + highscore;
        document.getElementsByClassName("highscore")[0].innerHTML = "Điểm cao nhất:" + highscore;
        localStorage.setItem("highscore", JSON.stringify(highscore));
        document.getElementsByClassName("highscore")[0].innerHTML = "Điểm cao nhất:" + highscore;
    }
}