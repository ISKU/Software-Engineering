var id;
var number;
var userid;

function getVariable(seat_id, seatNumber, user){
	id = seat_id;
	number = seatNumber;
	userid = user;
}

function clickPay() {
	var card = document.getElementsByName("paycard")[0].value;
	var payNumber = document.getElementsByName("paynumber")[0].value;
	var pw = document.getElementsByName("paypw")[0].value;
	var date = document.getElementsByName("paydate")[0].value;

	if (card == "" || payNumber == "" || pw == "" || date == "") {
		window.alert("모든 정보를 입력해주세요");
	} else {
                var query = "insert into t_log (id,seat_id,seat,stamp,price,state) values('" + userid +"'," + id + ",'" + number + "',now(),10000,0)";
                var query2 = "update t_seat set " + number + " =1 where id="+id;
		
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
				window.alert("예매완료");
                                location.replace("/movie/main.jsp");
                        },
                        error: function(xhr, status, error) {
                                console.log(xhr + "\n" + status + "\n" + error);
                        }
                });
	}
}

function clickPayCancle() {
	location.replace("main.jsp");
}
