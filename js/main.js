/* window onload */
$(document).ready(function(){
        getTable();
});

function getTable() {
	var query = "select * from t_movie group by title";

	$.ajax({
		type: "POST",
		url: "./server/select_db.jsp",	
		data: ({query: query}),
		dataType: "JSON",
		success: function(data) {
			var tablePoster = document.getElementById("tablePoster");			
			
			for (var index = 0; index < data.length; index = index + 3) {
				var startRow = document.createElement("tr");
				
				for (var i = 0; i < 3 && (index + i) < data.length; i++) {
					var Img = document.createElement("img");			
					var td = document.createElement("td");

					Img.src = "/movie/img/"+data[index + i].poster;
					Img.width = 200;
					Img.height = 300;
					Img.setAttribute("onclick", "location.href = 'http://52.78.61.223:9999/movie/search.jsp?title=" + data[index + i].title + "'")
					td.appendChild(Img);

					var br = document.createElement("br");
					td.appendChild(br);
					td.appendChild(br);

					var tdValue = document.createTextNode(data[index + i].title);
					td.appendChild(tdValue);

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

function clickAdd() {
	window.alert("add");
}


function clickSearch(){

	var searchMovie = document.getElementById("searchMovie").value;
	var query = "select * from t_movie";

	$.ajax({
		type: "POST",
		url: "./server/select_db.jsp",	
		data: ({query: query}),
		dataType: "JSON",
		success: function(data) {
			
			for (var index = 0; index < data.length; index++) {
				if( data[index].title == searchMovie){
					var found = true;
					break;
				}
			}
				
				if(found){
					location.href = 'http://52.78.61.223:9999/movie/search.jsp?title=' + searchMovie;
			
				}
			
				else{
					location.replace("/movie/nosearch.jsp");
				}
	
		}
	});
}	
