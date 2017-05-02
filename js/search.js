var titleValue;
var locationValue;
var dateValue;
var timeValue;

function locationTable(title) {
	var query = "select distinct location from t_movie where title = '"+ title +"'";
	titleValue = title;	
	
	$("#searchDate").css("display", "none");
	$("#searchTime").css("display", "none");

	$.ajax({
		type: "POST",
		url: "./server/select_db.jsp",
		data: ({query: query}),
		dataType: "JSON",
		success: function(data) {	
			var fieldset = document.getElementById("locationTable");

			for (var index = 0; index < data.length; index++) {			
				var input  = document.createElement("input");
				input.type = "radio";
				input.value = data[index].location;
				input.class = "radio";
				input.name = "location";

				var label = document.createElement("label");
				label.for = data[index].location;
 				var inputValue = document.createTextNode(data[index].location);
				label.appendChild(inputValue);
	
				var div = document.createElement("div");
				div.setAttribute("class", "lineTable");

				fieldset.appendChild(input);
				fieldset.appendChild(label);
				fieldset.appendChild(div);
			}
		},
		error: function(xhr, status, error) {
			console.log(xhr + "\n" + status + "\n" + error);
		}
	});
}

function clickLocation() {
	var radio = document.getElementsByName("location");
	var select;

	for (var index = 0; index < radio.length; index++) {
		if (radio[index].checked) {
			locationValue = radio[index].value;
			select = true;
			break;
		}
	}

	if (select) {
		$("#searchDate").css("display", "none");
		$("#searchDate").fadeIn();
		$("#searchTime").css("display", "none");
		$("#datePicker").fadeIn();

	} else {
		window.alert("영화관을 선택하세요");
	}
}

function clickDate() {
	var select;
	dateValue = document.getElementById("datePicker").value;
	query = "select time from t_movie where title='" + titleValue + "' and location = '" + locationValue + "' and date = '" + dateValue +"'";

	if (dateValue == "") {
		window.alert("영화날짜를 선택해주세요");
		return;
	}

	$("#searchTime").css("display", "none");
	$("#searchTime").fadeIn();

	$.ajax({
		type: "POST",
		url: "./server/select_db.jsp",
		data: ({query: query}),
		dataType: "JSON",
		success: function(data) {
			var fieldset = document.getElementById("timeTable");

			for (var i = fieldset.childNodes.length - 1; i >= 4; i--)
				fieldset.removeChild(fieldset.childNodes[i]);

			if (data.length == 0) {
				var b = document.createElement("b");
				var bValue = document.createTextNode("결과 없음");
				b.appendChild(bValue);
				var br = document.createElement("br");
				fieldset.appendChild(b);
				fieldset.appendChild(br);
				$(".showSeat").css("display", "none");
			} else {
				for (var index = 0; index < data.length; index++) {			
					var input  = document.createElement("input");
					input.type = "radio";
					input.value = data[index].time;
					input.class = "radio";
					input.name = "time";

					var label = document.createElement("label");
					label.for = data[index].time;
 					var inputValue = document.createTextNode(data[index].time);
					label.appendChild(inputValue);
	
					var div = document.createElement("div");
					div.setAttribute("class", "lineTable");

					fieldset.appendChild(input);
					fieldset.appendChild(label);
					fieldset.appendChild(div);
				}
				$(".showSeat").fadeIn();	
			}
		},
		error: function(xhr, status, error) {
			console.log(xhr + "\n" + status + "\n" + error);
		}
	});
}

function clickTime() {
	var radio = document.getElementsByName("time");
	var select;

	for (var index = 0; index < radio.length; index++) {
		if (radio[index].checked) {
			timeValue = radio[index].value;
			select = true;
			break;
		}
	}

	if (!select) {
		window.alert("영화시간을 선택해주세요");
		return;
	}

	query = "select seat_id from t_movie where title='" + titleValue + "' and location = '" + locationValue + "' and date = '" + dateValue +"' and time = '" + timeValue + "'";

	$.ajax({
		type: "POST",
		url: "./server/select_db.jsp",
		data: ({query: query}),
		dataType: "JSON",
		success: function(data) {
			location.replace("seatTable.jsp?seat_id=" + data[0].seat_id);
		},
		error: function(xhr, status, error) {
			console.log(xhr + "\n" + status + "\n" + error);
		}
	});
}
