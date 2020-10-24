
var money = 10000;



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
	var fmoney = getCookie("fmoney");
	if (fmoney != "") {
		money = Number(fmoney);
	} else {
		if (fmoney != null) {
			setCookie("fmoney", fmoney, 30);
		}
	}
}

document.getElementsByClassName("start")[0].addEventListener("click", function () {
	// document.getElementById("money").innerHTML = "Số tiền của bạn:" + money;
	// document.getElementById("login").style.display = 'none';
	 document.getElementById("mgame").style.display = 'block';
	//
	document.getElementById("money").innerHTML = "Số tiền của bạn:" + money;

	var fmoney = getCookie("fmoney");
	money += 1000;
	fmoney = money;

	if (fmoney != null) {
		setCookie("fmoney", fmoney, 30);

	}
	document.getElementById("money").innerHTML = "Số tiền của bạn:" + money;
	//
});
