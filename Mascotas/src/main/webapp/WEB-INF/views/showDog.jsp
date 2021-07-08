<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="UTF-8"%>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Info Dog</title>
</head>
<body>
	<h4>
		Nombre: <c:out value="${dog.getName()}"/>
	</h4>
	<p>
		Raza: <c:out value="${dog.getBreed()}"></c:out>
	</p>
	<p>
		Peso: <c:out value="${dog.getWeight()}"></c:out>
	</p>
	<p>
		Opinión experta: <c:out value="${dog.showAffection()}"></c:out>
	</p>
</body>
</html>