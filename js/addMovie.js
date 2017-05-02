var global_seat_id;

function clickUpload() {
	var title = document.getElementsByName("addtitle")[0].value;
	var formData = new FormData();
	formData.append('addposter', $('#fileData')[0].files[0]);

	$.ajax({
		type : 'post',
		url : './server/uploadFile.jsp?title=' + title,
		data : formData,
		dataType : 'json',
		processData : false,
		contentType : false,
		error: function(xhr, status, error){
			alert(error);
		},
		success : function(json){
		}
	});
}

function completeAddMovie() {
	var title = document.getElementsByName("addtitle")[0].value;
	var xlocation = document.getElementsByName("addlocation")[0].value;
	var date = document.getElementsByName("adddate")[0].value;
	var time = document.getElementsByName("addtime")[0].value;
	var poster = document.getElementsByName("addposter")[0].value;
	var poster2 = title + ".png";

	if (title == "" || xlocation == "" || date == "" || time == "" || poster == "")
		window.alert("모든 정보를 입력해주세요");
	else {
		var query = "insert into t_seat values ()";
		var query2 = "insert into t_movie (title, location, date, time, poster) values('"+ title +"','" + xlocation + "','" + date + "','" + time + "','" + poster2 + "')";

		$.ajax({
			type: "POST",
			url: "./server/update_db.jsp",
			data: ({query: query}),
			dataType: "JSON",
			success: function(data) {
			},
			error: function(xhr, status, error) {
				console.log(xhr + "\n" + status + "\n" + error);
			}
		});

		$.ajax({
			type: "POST",
			url: "./server/update_db.jsp",
			data: ({query: query2}),
			dataType: "JSON",
			success: function(data) {	
				if (data.result == "ok") {
					window.alert("영화가 추가되었습니다");
					location.replace("/movie/admin.jsp");
				}	
			},
			error: function(xhr, status, error) {
				console.log(xhr + "\n" + status + "\n" + error);
			}
		});
	}
}

function cancleAddMovie() {
	location.replace("/movie/admin.jsp");
}

function readyModifyMovie(seat_id) {
	var query = "select * from t_movie where seat_id = " + seat_id;
	global_seat_id = seat_id;

	$.ajax({
		type: "POST",
		url: "./server/select_db.jsp",
		data: ({query: query}),
		dataType: "JSON",
		success: function(data) {
			document.getElementsByName("addtitle")[0].value = data[0].title;
			document.getElementsByName("addlocation")[0].value = data[0].location;
			document.getElementsByName("adddate")[0].value = data[0].date;
			document.getElementsByName("addtime")[0].value = data[0].time;
		},
		error: function(xhr, status, error) {
			console.log(xhr + "\n" + status + "\n" + error);
		}
	});
}

function completeModifyMovie() {
	var title = document.getElementsByName("addtitle")[0].value;
	var xlocation = document.getElementsByName("addlocation")[0].value;
	var date = document.getElementsByName("adddate")[0].value;
	var time = document.getElementsByName("addtime")[0].value;
	var poster = title + ".png";

	var query = "UPDATE t_movie SET title = '" + title + "', location = '" + xlocation + "', date = '" + date + "', time = '" + time + "', poster = '" + poster + "' WHERE seat_id = " + global_seat_id;

	if (title == "" || xlocation == "" || date == "" || time == "")
		window.alert("모든 정보를 입력해주세요");
	else {
		$.ajax({
			type: "POST",
			url: "./server/update_db.jsp",
			data: ({query: query}),
			dataType: "JSON",
			success: function(data) {	// 중복 체크
				if (data.result == "ok") {
					window.alert("영화가 수정되었습니다");
					location.replace("/movie/admin.jsp");
				}	
			},
			error: function(xhr, status, error) {
				console.log(xhr + "\n" + status + "\n" + error);
			}
		});
	}
}
