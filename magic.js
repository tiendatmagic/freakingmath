var a = 0;
var b = 0;
var c = 0;
var rd = 0;
var score = 0;
var highscore = 0;
var ques = 0;
var answ = 0;
document.getElementsByClassName("score")[0].innerText = "Điểm: " + score;
document.getElementsByClassName("highscore")[0].innerText = "Điểm: " + highscore;
document.getElementsByClassName("btn-start")[0].addEventListener("click", function () {
    document.getElementById("mainstart").style.display = 'none';
    document.getElementById("maingame").style.display = 'block';
    document.getElementsByClassName("btn-end")[0].style.display = 'block';
    startgame();
});
document.getElementsByClassName("btn-end")[0].addEventListener("click", function () {
    location.reload();

});
document.getElementsByClassName("true")[0].addEventListener("click", truee);
document.getElementsByClassName("false")[0].addEventListener("click", falsee);

function startgame() {
    a = Math.floor(Math.random() * 20);
    b = Math.floor(Math.random() * 10);
    rd = Math.floor(Math.random() * 2);

    switch (rd) {
        case 0:
            c = a + b + Math.ceil(Math.random() * 4);
            ques = 0;
            break;
        case 1:
            c = a + b;
            ques = 1;
            break;

        default:
            break;
    }
    document.getElementsByClassName("s1")[0].innerText = a;
    document.getElementsByClassName("s2")[0].innerText = b;
    document.getElementsByClassName("s3")[0].innerText = c;
}

function truee() {

    answ = 1;
    if (ques === answ) {
        score += 1;
        document.getElementsByClassName("score")[0].innerText = "Điểm: " + score;
        startgame();

    }

}

function falsee() {
    answ = 0;
    if (ques === answ) {
        score += 1;
        document.getElementsByClassName("score")[0].innerText = "Điểm: " + score;
        startgame();

    }

}



