<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">

    <title>Contador</title>
  </head>
  
  <body>
  	<div class="container">
	  <!-- Content here -->
	  <h1>Button Clicker!</h1>
	  
	  	<form action="ShowWords" method="post">
	  
	  	<p><button type="submit" class="btn btn-success" name="button1">Generate</button></p>

		</form>
		<p>Generaste <c:out value="${count}"></c:out> palabras aleatorias</p>
		<p> <c:out value="${word}"></c:out></p>
		<p> <c:out value="${time}"></c:out></p>
	</div>
	
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" ></script>
  </body>
</html>