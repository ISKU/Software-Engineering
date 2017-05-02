/* window onload */
$(document).ready(function(){
	getTable();
});

function clickAdd() {
	location.replace("/movie/addMovie.jsp");
}

function getTable() {
	var query = "select * from t_movie";

	$.ajax({
		type: "POST",
		url: "./server/select_db.jsp",	
		data: ({query: query}),
		dataType: "JSON",
		success: function(data) {
			var tableUsage = document.getElementById("tableUsage");			
			
			for (var index = 0; index < data.length; index++) {
				var startRow = document.createElement("tr");
			
				var td = document.createElement("td");
				var tdValue = document.createTextNode(index + 1);
				td.appendChild(tdValue);
				startRow.appendChild(td);

				td = document.createElement("td");
				tdValue = document.createTextNode(data[index].poster);
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
				var button = document.createElement("button");
				var buttonValue = document.createTextNode("수정");
				button.setAttribute("onclick", "modifyTable(" + data[index].seat_id + ")");
				button.appendChild(buttonValue);


				td.appendChild(button);

				button = document.createElement("button");
				buttonValue = document.createTextNode("삭제");
				button.appendChild(buttonValue);
				button.setAttribute("onclick", "deleteTable(" + data[index].seat_id + ")");
				td.appendChild(button);
				startRow.appendChild(td);

				tableUsage.appendChild(startRow);	
			}
		},
		error: function(xhr, status, error) {
			console.log(xhr + "\n" + status + "\n" + error);
		}
	});
}

function modifyTable(seat_id) {
	location.replace("/movie/modifyMovie.jsp?seat_id=" + seat_id);
}

function deleteTable(seat_id) {
	var check = window.confirm("정말 삭제하시겠습니까?");

	if (check) {
		var query = "delete from t_seat where id = " + seat_id;
		var query2 = "delete from t_movie where seat_id = " + seat_id;
		
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
				if (data.result == "ok")
					location.replace("/movie/admin.jsp");
			},
			error: function(xhr, status, error) {
				console.log(xhr + "\n" + status + "\n" + error);
			}
		});		
	}
}




