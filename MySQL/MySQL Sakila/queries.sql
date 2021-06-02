SELECT city.city_id, city.city, customer.first_name, customer.last_name, customer.email, address.address
	FROM ((customer
	INNER JOIN address ON customer.address_id = address.address_id)
	INNER JOIN city ON address.city_id = city.city_id)
	WHERE city.city_id = 312;

SELECT film.film_id, film.title, film.description, film.release_year, film.rating, film.special_features, category.name as genre
	FROM ((film
	INNER JOIN film_category ON film.film_id = film_category.film_id)
	INNER JOIN category ON film_category.category_id = category.category_id)
	WHERE category.name = "Comedy";

SELECT actor.actor_id, concat(actor.first_name, " ", actor.last_name) as actor_name, film.film_id, film.title, film.description, film.release_year
	FROM ((actor 
	INNER JOIN film_actor ON actor.actor_id = film_actor.actor_id)
	INNER JOIN film ON film_actor.film_id = film.film_id) 
	WHERE actor.actor_id = 5;

SELECT customer.store_id, address.city_id, customer.first_name, customer.last_name, customer.email, address.address
	FROM (customer
	INNER JOIN address ON customer.address_id = address.address_id)
	WHERE customer.store_id = 1 AND 
	(address.city_id = 1 OR address.city_id = 42 OR address.city_id = 312 OR address.city_id = 459);

SELECT film.title, film.description, film.release_year, film.rating, film.special_features
	FROM (film
	INNER JOIN film_actor ON film.film_id = film_actor.film_id)
	WHERE film.rating = "G" AND film.special_features LIKE "%Behind the Scenes%" AND film_actor.actor_id = 15;

SELECT film.film_id, film.title, actor.actor_id, CONCAT(actor.first_name, " ", actor.last_name) as actor_name
	FROM film
	INNER JOIN film_actor ON film.film_id = film_actor.film_id
	INNER JOIN actor ON film_actor.actor_id = actor.actor_id
	WHERE film.film_id = 369;

SELECT film.film_id, film.title, film.description, film.release_year, film.rating, film.special_features, category.name as genre, film.rental_rate
	FROM film
	INNER JOIN film_category ON film.film_id = film_category.film_id
	INNER JOIN category ON film_category.category_id = category.category_id
	WHERE film.rental_rate = 2.99 AND category.name = "Drama";

SELECT actor.actor_id, CONCAT(actor.first_name, " ", actor.last_name) as actor_name, film.film_id, film.title, film.description, film.release_year, 
film.rating, film.special_features , category.name as genre
	FROM film
	INNER JOIN film_actor ON film.film_id = film_actor.film_id
	INNER JOIN actor ON film_actor.actor_id = actor.actor_id
	INNER JOIN film_category ON film.film_id = film_category.film_id
	INNER JOIN category ON film_category.category_id = category.category_id
	WHERE category.name = "Action" AND actor.first_name = "SANDRA" AND actor.last_name = "KILMER";



