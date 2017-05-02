/* Check Login */
function checkLogin() {
	var id = document.getElementsByName("id")[0].value;
	var pw = document.getElementsByName("pw")[0].value; 

	$.ajax({
		type: "POST",
		url: "./server/checkLogin.jsp",
		data: ({id: id, pw: pw}),	// id, pw로 유저 정보 확인
		dataType: "JSON",
		success: function(data) {
			if (data.result == "true") {	// 유저의 정보가 일치함
				$("#loginArea").css("display", "none");
				location.replace("/movie/main.jsp");
			} else
				window.alert("아이디 또는 비밀번호를 확인해주세요");
		},
		error: function(xhr, status, error) {
			console.log(xhr + "\n" + status + "\n" + error);
		}
	});
}

/* Join Button Click */
function checkJoin() {
	$("#loginArea").css("display", "none");
	$("#joinArea").fadeIn(1000);
}

/* Join Cancle Button */
function cancleJoin() {
	location.replace("main.jsp");
}

function checkLoginCancle() {
	location.replace("main.jsp");
}

/* 회원가입 체크 및 완료 */
function completeJoin() {
	var id = document.getElementsByName("joinid")[0].value;
	var pw = document.getElementsByName("joinpw")[0].value;
	var pwcheck = document.getElementsByName("joinpwcheck")[0].value;
	var name = document.getElementsByName("joinname")[0].value;
	var birth = document.getElementsByName("joinbirth")[0].value;
	var email = document.getElementsByName("joinemail")[0].value;
	var patternEmail = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

	var query = "insert into t_user values('" + id + "', '" + name + "', " + birth + ", '" + pw + "', '" + email + "')";

	if (id == "" || pw == "" || pwcheck == "" || name == "" || birth == "" || email == "")
		window.alert("모든 정보를 입력해주세요");
	else if (pw != pwcheck)
		window.alert("비밀번호를 다시 입력해주세요");
	else if (!patternEmail.test(email))
		window.alert("이메일 형식을 맞춰주세요");
	else {
		$.ajax({
			type: "POST",
			url: "./server/checkJoin.jsp",
			data: ({id: id}),
			dataType: "JSON",
			success: function(data) {	// 중복 체크
				if (data.result == "false") {
					$.ajax({
						type: "POST",
						url: "./server/update_db.jsp",
						data: ({query: query}),
						dataType: "JSON",
						success: function(data) {	// 회원가입 결과를 받는다.
							if (data.result == "ok") {
								window.alert("회원가입이 완료되었습니다");
								cancleJoin();
							}
						},
						error: function(xhr, status, error) {
							console.log(xhr + "\n" + status + "\n" + error);
						}
					});
				} else {
					window.alert("중복된 아이디입니다.");
				}
			},
			error: function(xhr, status, error) {
				console.log(xhr + "\n" + status + "\n" + error);
			}
		});
	}
}
