var id;
var userid;

function getVariable(user) {
	userid = user;
}

function getTable(seat_id) {
	var query = "select * from t_seat where id ='" + seat_id+"'";
	
	id = seat_id;
	
	$.ajax({
		type: "POST",
		url: "./server/select_db.jsp",	
		data: ({query: query}),
		dataType: "JSON",
		success: function(data) {
			var object = Object.keys(data[0]).sort();
			var tablePoster = document.getElementById("seattable");			
				for (var i = 0; i < 7; i++) {
					var startRow = document.createElement("tr");
						
					for( var j =1; j <= 7; j++){
						
						var td = document.createElement("td");
        	                                var br = document.createElement("br");

						var input  = document.createElement("input");
	                               		input.type = "radio";
                          		      	input.class = "radio";
                                		input.name = "seat";

						var which = object[(i*7)+j];
						if(data[0][which] == '1'){
							input.disabled="true";
						}		
						
						input.value = which;

                                		var label = document.createElement("label");
                        	        	label.for = (7*i)+j;
                                		var inputValue = document.createTextNode((7*i)+j);
                	                	label.appendChild(inputValue);

        	                        	td.appendChild(input);
	                                	td.appendChild(label);

						startRow.appendChild(td);
					}
					tablePoster.appendChild(startRow);
				}

		},
		error: function(xhr, status, error) {
			console.log(xhr + "\n" + status + "\n" + error);
		}
	});
}

function clickseat() {
	var radio = document.getElementsByName("seat");
        for (var index = 0; index < radio.length; index++) {
                if (radio[index].checked) {
                        seatValue = radio[index].value;
                        break;
                }
        }

	if (userid == "null") {
		window.alert("영화 예매는 로그인이 필요합니다.");
		location.replace("login.jsp");
		return;
	}

	location.replace("pay.jsp?seat_id=" + id + "&seatNumber=" + seatValue);
}

