<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%
	session.removeAttribute("id");
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
	<link rel="stylesheet" type="text/css" href="./css/login.css" />
	<link rel="stylesheet" type="text/css" href="./css/menu.css" />
	<!-- JQuery -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
	<!-- External Javascripts -->
	<script type="text/javascript" src="./js/index.js"></script>
	<script type="text/javascript" src="./js/login.js"></script>
	<script type="text/javascript" src="./js/menu.js"></script>
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
		
		<!-- Login Area -->
		<div id="loginArea" class="shadow">
			<form>
				<table id="tableLogin">
					<tr>
						<th></th><th>L O G I N</th>
					</tr>
					<tr>
						<td><b>ID:</b></td>
						<td><input type="text" name="id" pattern="[A-Za-z]{1,12}" required /></td>
					</tr>
					<tr>
						<td><b>PW:</b></td>
						<td><input type="password" name="pw" required /></td>
					</tr>
					<tr>
						<td></td>
						<td>
							<input type="button" value="로그인" onclick="checkLogin()" />
							<input type="button" value="회원가입" onclick="checkJoin()" />
							<input type="button" value="취소" onclick="checkLoginCancle()" />
						</td>
					</tr>
				</table>
			</form>
		</div>

		<!-- Join Area -->
		<div id="joinArea" class="shadow">
			<form>
				<table id="tableJoin">
					<tr>
						<td>
							<b>ID</b><br />
							<input type="text" name="joinid" pattern="[A-Za-z]{1,12}" required />
						</td>
					</tr>
					<tr>
						<td>
							<b>PASSWORD</b><br />
							<input type="text" name="joinpw" required />
						</td>
					</tr>
					<tr>
						<td>
							<b>Check PASSWORD</b><br />
							<input type="text" name="joinpwcheck" required />
						</td>
					</tr>
					<tr>
						<td>
							<b>이름</b><br />
							<input type="text" name="joinname" required />
						</td>
					</tr>
					<tr>
						<td>
							<b>생년월일</b><br />
							<input type="number" name="joinbirth" required />
						</td>
					</tr>
					<tr>
						<td>
							<b>E-Mail</b><br />
							<input type="text" name="joinemail" required />
						</td>
					</tr>
					<tr>
						<td>
							<input type="button" value="완료" onclick="completeJoin()"/>
							<input type="button" value="취소" onclick="cancleJoin()"/>
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
</body>
</html>
