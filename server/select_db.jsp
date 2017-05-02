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

	Class.forName("com.mysql.jdbc.Driver");
	conn=DriverManager.getConnection(url, id, pw);

	String sql = request.getParameter("query");
//	sql = sql.replace("-"," ");

	PreparedStatement pstmt = null;
	pstmt = conn.prepareStatement(sql);
	ResultSet rs = pstmt.executeQuery(); 
	ResultSetMetaData rsmd = rs.getMetaData();
	int columnCount = rsmd.getColumnCount();

	JSONArray returnData = new JSONArray();
	JSONObject json = new JSONObject();

	while(rs.next()){
		for(int i=1; i<=columnCount; i++)
			json.put(rsmd.getColumnName(i), rs.getString(i));
		returnData.add(json);
		json = new JSONObject();
	}
	PrintWriter printWriter = response.getWriter();
	printWriter.print(returnData);

}catch(Exception e){
	e.printStackTrace(new java.io.PrintWriter(out));
}

%>
