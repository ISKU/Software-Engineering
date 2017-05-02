<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@page import = "java.sql.*"%>
<%@page import = "java.io.*" %>
<%@page import = "java.util.*" %>
<%@page import="org.json.simple.JSONObject"%>
<%@page import="org.json.simple.JSONArray"%>
<%@page import="java.io.FileNotFoundException"%>
<%
Connection conn = null;

try{
        String url = "jdbc:mysql://localhost:3306/movie";//생성한 데이타베이스 이름을 넣는다.
        String id = "root"; // db에 접속하는 계정
        String pw = "ubuntu"; // db에 접속하는 계정의 비밀번호

        Class.forName("com.mysql.jdbc.Driver");
        conn=DriverManager.getConnection(url, id, pw);

        String sql = "select * from t_user where id = '" + request.getParameter("id") + "' and password = '" + request.getParameter("pw") + "'";

        PreparedStatement pstmt = null;
        pstmt = conn.prepareStatement(sql);
        ResultSet rs = pstmt.executeQuery();

        JSONObject json = new JSONObject();

        if(rs.next()){
        	json.put("result", "true");
		session.setAttribute("id", request.getParameter("id"));
        }	
	else{
		json.put("result","false");
	}

        PrintWriter printWriter = response.getWriter();
        printWriter.print(json);

}catch(Exception e){
        e.printStackTrace(new java.io.PrintWriter(out));
}




%>
