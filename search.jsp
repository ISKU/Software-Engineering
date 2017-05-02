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
	<link rel="stylesheet" type="text/css" href="./css/menu.css" />
	<link rel="stylesheet" type="text/css" href="./css/search.css" />
	<!-- JQuery -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
	<!-- External Javascripts -->
	<script type="text/javascript" src="./js/index.js"></script>
	<script type="text/javascript" src="./js/menu.js"></script>
	<script type="text/javascript" src="./js/search.js"></script>
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
		
		<!-- Search Area -->
		<div id="searchArea" class="shadow">		
			<div id="searchLocation" class="searchTable">
				<form><fieldset id="locationTable" class="shadow">
					<legend><b>영화관 선택</b></legend>
					<br>
				</fieldset>
				<br>
				<input type="button" id="button" value="조회" onclick="clickLocation()"/>
			</form>
			</div>
			<div id="searchDate" class="searchTable">
				<form><fieldset id="dateTable" class="shadow">
					<legend><b>날짜 선택</b></legend><br>
					<div><input type="date" id="datePicker" onchange="changeDatePicker()"/></div>	
				</fieldset>	
				<br>
				<input type="button" id="button" value="조회" onclick="clickDate()"/>
			</form>
			</div>
			<div id="searchTime" class="searchTable">
				<form><fieldset id="timeTable" class="shadow">
					<legend><b>시간 선택</b></legend>
					<br>
				</fieldset>
				<br>
				<input type="button" id="button" class="showSeat" value="좌석보기" onclick="clickTime()"/>
			</form>
			</div>	
		</div>
		<br /><br />
	</main>

	<!-- Footer Area -->
	<footer>
		<div class="line"></div>
		<!-- Copyright -->
		<h2>&copy; Kim Min-Ho &bull; Kim Geun-Yeong &bull; Yun Jong-Hun</h2>
	</footer>

	<script> locationTable("<%=request.getParameter("title")%>"); </script>
</body>
</html>
