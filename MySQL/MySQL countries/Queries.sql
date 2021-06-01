SELECT countries.name, languages.language, languages.percentage
FROM languages 
INNER JOIN countries ON languages.country_code = countries.code
WHERE language = "Slovene" ORDER BY percentage DESC;

SELECT countries.name, count(cities.country_id) as cities 
FROM cities 
INNER JOIN countries ON cities.country_id = countries.id
GROUP BY countries.name
order by cities DESC;

SELECT name, population FROM cities
WHERE country_id = 136 AND population > 500000
ORDER BY population DESC;

SELECT countries.name, languages.language, languages.percentage
FROM languages
INNER JOIN countries ON languages.country_id = countries.id
where percentage > 89
ORDER BY percentage DESC;

SELECT name, surface_area, population FROM countries
WHERE surface_area < 501 AND population > 100000;

SELECT name, government_form, capital, life_expectancy FROM countries
WHERE government_form = "Constitutional Monarchy" AND capital > 200 AND life_expectancy > 75;

SELECT countries.name as country_name, cities.name as city_name, cities.district, cities.population
FROM cities
INNER JOIN countries ON cities.country_id = countries.id
WHERE cities.district = "Buenos Aires" and cities.population > 500000; 

SELECT region, count(region) as countries FROM countries 
GROUP BY region
ORDER BY countries DESC;




