/* Global Variable */
var stateMenu = true;
var userLatitude = undefined;
var userLongitude = undefined;

/* window onload */
$(document).ready(function(){
	$("main").fadeIn(2000);
});

/* Menu slide Up&Down */
function clickMenu() {
	if (stateMenu) {	// 메뉴 오픈
		$("#menu").slideDown("slow");
		$("#down").fadeOut("slow");
		stateMenu = false;
	} else {		// 메뉴 클로즈
		$("#menu").fadeOut("slow");
		$("#down").css("display", "inline-block");
		stateMenu = true;
	}
}
