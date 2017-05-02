<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page import="java.io.*"%>
<%@ page import="com.oreilly.servlet.multipart.DefaultFileRenamePolicy"%>
<%@ page import="com.oreilly.servlet.MultipartRequest"%>
<%@ page import = "java.util.*" %>
<%@ page import = "org.json.simple.JSONObject" %>
<%@ page import = "org.json.simple.JSONArray" %>
<%

try {
	String title = request.getParameter("title");

	request.setCharacterEncoding("UTF-8");
	String savePath = request.getRealPath("/img/");

	int maxSize = 1024*1024*1024;
	String encType = "UTF-8";

	MultipartRequest multipartRequest = new MultipartRequest(request, savePath, maxSize, encType, new DefaultFileRenamePolicy());
	String fileName = multipartRequest.getFilesystemName("addposter");
	
	File file1 = new File(savePath + fileName);
	File file2 = new File(savePath + title+".png");
	file1.renameTo(file2);
	
	JSONObject json = new JSONObject();
	json.put("fileName", fileName);
	
	PrintWriter PrintWriter = response.getWriter();
	PrintWriter.print(json);
} catch(Exception e){
	e.printStackTrace(new java.io.PrintWriter(out));
}

%>

