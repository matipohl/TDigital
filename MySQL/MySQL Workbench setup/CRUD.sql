
insert into users (first_name, last_name, handle, birthday, created_at, updated_at) values ("pedro", "perez", "pperez", "1965-04-15", now(), now());

SELECT users.first_name, tweets.tweet, tweets.created_at
FROM tweets
INNER JOIN users ON tweets.user_id = users.id
WHERE first_name = "Kobe";

update tweets
set tweet = "fucking labor day"
where id = 12;

delete from users 
where first_name = "Matías";
