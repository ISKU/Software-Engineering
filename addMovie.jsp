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
	<link rel="stylesheet" type="text/css" href="./css/addMovie.css" />
	<link rel="stylesheet" type="text/css" href="./css/menu.css" />
	<!-- JQuery -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
	<!-- External Javascripts -->
	<script type="text/javascript" src="./js/index.js"></script>
	<script type="text/javascript" src="./js/addMovie.js"></script>
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
		
		<!-- AddMovie Area -->
		<div id="addMovieArea" class="shadow">
			<form>
				<table id="tableAddMovie">
					<tr>
						<td>
							<b>영화제목</b><br />
							<input type="text" name="addtitle" required />
						</td>
					</tr>
					<tr>
						<td>
							<b>영화관</b><br />
							<input type="text" name="addlocation" required />
						</td>
					</tr>
					<tr>
						<td>
							<b>날짜</b><br />
							<input type="text" name="adddate" required />
						</td>
					</tr>
					<tr>
						<td>
							<b>상영시간</b><br />
							<input type="text" name="addtime" required />
						</td>
					</tr>
					<tr>
						<form>
							<td>
								<b>포스터 업로드</b><br />
								<input type="file" id="fileData" name="addposter" required />
							</td>
							<td>
								<br />
								<input type="button" value="업로드" onclick="clickUpload()"/>	
							</td>
						</form>
					</tr>
					<tr>
						<td>
							<input type="button" value="완료" onclick="completeAddMovie()"/>
							<input type="button" value="취소" onclick="cancleAddMovie()"/>
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
