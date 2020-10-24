
var score = 0;



function setCookie(hihihi, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000000));
    //	d.setTime(d.getTime() + (exdays * 48 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = hihihi + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(hihihi) {
    var name = hihihi + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var fscore = getCookie("fscore");
    if (fscore != "") {
        score = Number(fscore);
    } else {
        if (fscore != null) {
            setCookie("fscore", fscore, 30);
        }
    }
}

document.getElementsByClassName("btn-start")[0].addEventListener("click", function () {
    document.getElementsByClassName("score")[0].innerHTML = "Điểm của bạn:" + score;
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

        var fscore = getCookie("fscore");
        score += 1;
        fscore = score;
        if (fscore != null) {
            setCookie("fscore", fscore, 30);

        }
        document.getElementsByClassName("score")[0].innerText = "Điểm: " + score;
        startgame();

    }
    else {
        document.getElementsByClassName("score")[0].innerHTML = "Điểm của bạn:" + score;
        var fscore = getCookie("fscore");
        fscore = score;
        if (fscore != null) {
            setCookie("fscore", fscore, 30);

        }
        document.getElementsByClassName("score")[0].innerHTML = "Điểm của bạn:" + score;
        location.reload();

    }

}

function falsee() {
    answ = 0;
    if (ques === answ) {
        var fscore = getCookie("fscore");
        score += 1;
        fscore = score;
        if (fscore != null) {
            setCookie("fscore", fscore, 30);

        }
        document.getElementsByClassName("score")[0].innerText = "Điểm: " + score;
        startgame();

    }

    else {
        document.getElementsByClassName("score")[0].innerHTML = "Điểm của bạn:" + score;
        var fscore = getCookie("fscore");
        fscore = score;
        if (fscore != null) {
            setCookie("fscore", fscore, 30);

        }
        document.getElementsByClassName("score")[0].innerHTML = "Điểm của bạn:" + score;
        location.reload();
    }

}

