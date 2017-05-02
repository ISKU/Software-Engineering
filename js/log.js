
function getTable(userid) {
	query = "select A.no, B.title, B.location, B.date, B.time, A.seat, A.stamp, A.price, A.state, A.seat_id, if(B.date < now(),1,0) as timeover from t_log A, t_movie B where B.seat_id = A.seat_id and A.id = '" + userid + "'";

	$.ajax({
		type: "POST",
		url: "./server/select_db.jsp",	
		data: ({query: query}),
		dataType: "JSON",
		success: function(data) {
			var tableUsage = document.getElementById("tableUsage");			
			if (data.length == 0) {
				document.getElementById("state").innerHTML = "예매내역이 없습니다";
			} else {
				for (var index = 0; index < data.length; index++) {
					var startRow = document.createElement("tr");
			
					var td = document.createElement("td");
					var tdValue = document.createTextNode(data[index].no);
					td.appendChild(tdValue);
					startRow.appendChild(td);
	
					td = document.createElement("td");
					tdValue = document.createTextNode(data[index].title);
					td.appendChild(tdValue);
					startRow.appendChild(td);

					td = document.createElement("td");
					tdValue = document.createTextNode(data[index].location);
					td.appendChild(tdValue);
					startRow.appendChild(td);

					td = document.createElement("td");
					tdValue = document.createTextNode(data[index].date);
					td.appendChild(tdValue);
					startRow.appendChild(td);

					td = document.createElement("td");
					tdValue = document.createTextNode(data[index].time);
					td.appendChild(tdValue);
					startRow.appendChild(td);
	
					td = document.createElement("td");
					tdValue = document.createTextNode(data[index].seat);
					td.appendChild(tdValue);
					startRow.appendChild(td);
	
					td = document.createElement("td");
					tdValue = document.createTextNode(data[index].stamp);
					td.appendChild(tdValue);
					startRow.appendChild(td);

					td = document.createElement("td");
					tdValue = document.createTextNode(data[index].price);
					td.appendChild(tdValue);
					startRow.appendChild(td);
					
					td = document.createElement("td");
					if (data[index].state == 1){
						tdValue = document.createTextNode("예매취소");
						td.appendChild(tdValue);
					}
					else if(data[index].timeover == 1){
						tdValue = document.createTextNode("취소불가");
						td.appendChild(tdValue);
					}
					else{
						var button = document.createElement("button");
						var buttonValue = document.createTextNode("취소");
						var split = data[index].seat.substring(2,4);
						button.setAttribute("onclick", "cancleTable(" + data[index].no+","+data[index].seat_id+","+split +")");
						button.appendChild(buttonValue);
						td.appendChild(button);
					}
					startRow.appendChild(td);

					tableUsage.appendChild(startRow);	
				}
			}
		},
		error: function(xhr, status, error) {
			console.log(xhr + "\n" + status + "\n" + error);
		}
	});
}

function cancleTable(no,seat_id,seat) {
	var query = "update t_log set state = 1 where no = " + no;
	var query2 = "update t_seat set no" + seat +" = 0 where id = " + seat_id;
	
	var check = window.confirm("취소 하시겠습니까?");

	if (check) {
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
                                        location.replace("/movie/log.jsp");
                                }
                        },
                        error: function(xhr, status, error) {
                                console.log(xhr + "\n" + status + "\n" + error);
                        }
                });
	}
}


