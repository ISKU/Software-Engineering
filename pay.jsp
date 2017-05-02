<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<!DOCTYPE html>
<html>
<head>
	<!-- META -->
	<meta charset="utf-8" />
	<meta name="author" content="김민호" />
	<meta name="author" content="김근영" />	
	<meta name="author" content="윤종훈" />
	<meta name="description" content="영화 예매 시스템" />
		
	<!-- TITLE -->
	<title>영화예매시스템</title>
		
	<!-- External Style Sheet -->
	<link rel="stylesheet" type="text/css" href="./css/index.css" />	
	<link rel="stylesheet" type="text/css" href="./css/menu.css" />
	<link rel="stylesheet" type="text/css" href="./css/pay.css" />
	<!-- JQuery -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
	<!-- External Javascripts -->
	<script type="text/javascript" src="./js/index.js"></script>
	<script type="text/javascript" src="./js/menu.js"></script>
	<script type="text/javascript" src="./js/pay.js"></script>
</head>

<body>	
	<!-- Header Area -->
	<header>
		<div id="down">
			<img src="./icon/down.png" alt="down" width="100%" height="100%"/>
		</div>
		<br />
		<div class="line" onclick="clickMenu()"></div>
		<!-- Menu Area -->
		<div id="menu">
			<img src="./icon/left.png" alt="left side" />
			<img src="./icon/list.png" alt="usage" onclick="clickUsageMenu()" />	
			<img src="./icon/main.png" alt="main" onclick="clickMainMenu()" />
			<img src="./icon/logout.png" alt="logout" onclick="clickLogoutMenu()" />
			<%
				String id = (String) session.getAttribute("id");
					
				if (id != null && id.equals("admin")) {
					%><img src="./icon/admin.png" alt="admin" onclick="clickAdminMenu()" /><%	
				}
			%>
			<img src="./icon/right.png" alt="right side" />
		</div>
	</header>

	<!-- Main Area -->
	<main>
		<!-- Date -->
		<span id="date"></span>
		
		<!-- Pay  Area -->
		<div id="payArea" class="shadow">
			<form>
				<table id="tablePay">
					<tr>
						<td>
							<b>카드 종류</b><br />
							<input type="text" name="paycard" required />
						</td>
					</tr>
					<tr>
						<td>
							<b>카드 번호</b><br />
							<input type="text" name="paynumber" required />
						</td>
					</tr>
					<tr>
						<td>
							<b>비밀번호</b><br />
							<input type="number" name="paypw" required />
						</td>
					</tr>
					<tr>
						<td>
							<b>유효기간</b><br />
							<input type="text" name="paydate" required />
						</td>
					</tr>
					<tr>
						<td>
							<input type="button" value="결제" onclick="clickPay()"/>
							<input type="button" value="취소" onclick="clickPayCancle()"/>
						</td>
					</tr>
				</table>
			</form>
		</div>
		
		<br /><br />
	</main>

	<!-- Footer Area -->
	<footer>
		<div class="line"></div>
		<!-- Copyright -->
		<h2>&copy; Kim Min-Ho &bull; Kim Geun-Yeong &bull; Yun Jong-Hun</h2>
	</footer>
	<script> getVariable("<%=request.getParameter("seat_id")%>", "<%=request.getParameter("seatNumber")%>", "<%=session.getAttribute("id")%>"); </script>
</body>
</html>
