<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ page import = "java.sql.*" %>
<%@page import = "java.io.*" %>
<%@page import = "java.util.*" %>
<%@ page import = "org.json.simple.JSONObject" %>
<%@ page import = "org.json.simple.JSONArray" %>
<%
Connection conn = null;
try{
	String url = "jdbc:mysql://localhost:3306/movie";//생성한 데이타베이스 이름을 넣는다.
	String id = "root"; // db에 접속하는 계정
	String pw = "ubuntu"; // db에 접속하는 계정의 비밀번호

	String sql = request.getParameter("query");
//	sql = sql.replace("-"," ");

        Class.forName("com.mysql.jdbc.Driver");
        conn=DriverManager.getConnection(url, id, pw);

	PreparedStatement pstmt = null;
	pstmt = conn.prepareStatement(sql);
	pstmt.executeUpdate(); 

	JSONObject json = new JSONObject();
	json.put("result","ok");
	PrintWriter PrintWriter = response.getWriter();
	PrintWriter.print(json);

}catch(Exception e){
	e.printStackTrace(new java.io.PrintWriter(out));
}

%>
