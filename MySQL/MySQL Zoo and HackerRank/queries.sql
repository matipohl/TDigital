SELECT name, continent, population FROM world;

SELECT name
  FROM world
 WHERE population > 1000000000;
 
 select name, gdp/population as per_capita_gdp from world 
where population >= 200000000;

select name, population/1000000 as pop_in_millions from world 
where continent = 'South America';

select name, population from world
where name IN ('France' , 'Germany' , 'Italy');

select name from world where name like '%United%';

select name, population, area from world
where area >= 3000000 or population >= 250000000;

SELECT name, population, area
FROM world
WHERE (area >= 3000000 AND population <= 250000000) OR (area < 3000000 AND population > 250000000);

SELECT name, ROUND(population/1000000,2), ROUND(gdp/1000000000, 2)
FROM world
WHERE continent = 'South America';

select name, round(gdp/population, -3) from world where gdp > 1000000000000;

select name, capital from world where len(name) = len(capital);

select name, capital from world where left(name,1) = left(capital,1) and name <> capital;

SELECT name FROM world
WHERE 
name LIKE '%a%' AND 
name LIKE '%e%' AND 
name LIKE '%i%' AND 
name LIKE '%o%' AND 
name LIKE '%u%' AND 
name NOT LIKE '% %';







