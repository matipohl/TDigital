<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h1>Create a Dog</h1>

	<form action="ShowDog" method="get">

	  <p>Name: <input type="text" 	name="name" 	size="40"></p>
	  <p>Breed: <input type="text" 	name="breed" 	size="40"></p>
	  <p>Weight: <input type="text" name="weight" 	size="40"></p>
	  <p><input type="submit" value="Enviar"></p>

	</form>

	<h1>Create a Cat</h1>
	
	<form action="ShowCat" method="get">

	  <p>Name: <input type="text" 	name="name" 	size="40"></p>
	  <p>Breed: <input type="text" 	name="breed" 	size="40"></p>
	  <p>Weight: <input type="text" name="weight" 	size="40"></p>
	  <p><input id="cat" type="submit" value="Enviar"></p>

	</form>

</body>
</html>