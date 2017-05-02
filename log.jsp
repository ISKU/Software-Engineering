<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<%
	String userid = (String) session.getAttribute("id");
					
	if (userid == null) {
		%> <script> window.alert("로그인을 해주세요"); location.replace("login.jsp"); </script> <%
	}
%>

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
	<link rel="stylesheet" type="text/css" href="./css/usage.css" />
	<!-- JQuery -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
	<!-- External Javascripts -->
	<script type="text/javascript" src="./js/index.js"></script>
	<script type="text/javascript" src="./js/menu.js"></script>
	<script type="text/javascript" src="./js/log.js"></script>
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
		
		<!-- Log Area -->
		<div id="logArea" class="shadow">		
			<table id="tableUsage">
				<tr>
					<th>예매번호</th>
					<th>영화제목</th>
					<th>영화관</th>
					<th>날짜</th>
					<th>상영시간</th>
					<th>좌석</th>
					<th>예매시간</th>
					<th>금액</th>
					<th>상태</th>
				</tr>
			</table>
			<b id="state"></b>
		</div>
		<br /><br />
	</main>

	<!-- Footer Area -->
	<footer>
		<div class="line"></div>
		<!-- Copyright -->
		<h2>&copy; Kim Min-Ho &bull; Kim Geun-Yeong &bull; Yun Jong-Hun</h2>
	</footer>

	<script> getTable("<%=session.getAttribute("id")%>"); </script>
</body>
</html>
