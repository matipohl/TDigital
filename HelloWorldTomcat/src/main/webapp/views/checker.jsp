<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" href="../style/style.css">

<title>Damas</title>
</head>
<body>

	<div class="container">
		<%
			int width = 0;
			int height = 0;
			if(request.getParameter("width") != null){
				width = Integer.parseInt(request.getParameter("width"));
			}
			if(request.getParameter("height") != null){
				height = Integer.parseInt(request.getParameter("height"));
			}
		%>
		
		<h1>Damas <%=width%> ancho X <%=height%> alto</h1>
		
		<%
			for(int i = 0; i<height; i++){ %>
				<div class="row">
				<%
				for(int j = 0; j<width; j++){
					if(i%2 == 0){
						if(j%2 == 0){%>
							<div class="white"></div>
						<%
						} else{%>
							<div class="black"></div>
						<%
						}
					}else{
						if(j%2 == 0){%>
							<div class="black"></div>
						<%
						} else {%>
							<div class="white"></div>
						<%
						}
					}
				} %>
				</div>
				<%
			}
		%>
	</div>

</body>
</html>