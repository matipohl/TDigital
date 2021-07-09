<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!doctype html>
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
	  
	  	<form action="showContador" method="post">
	  
	  	<p><button type="submit" class="btn btn-success" name="button1">Success</button></p>

		</form>
		<h2>El contador es:</h2>
		<p>
        <c:out value="${count}"/>
    	</p>
	</div>
	
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" ></script>
  </body>
</html>