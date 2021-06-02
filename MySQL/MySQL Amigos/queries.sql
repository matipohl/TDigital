-- 1
SELECT  user1.first_name, user1.last_name, user2.first_name, user2.last_name
FROM users user1 
LEFT JOIN friendships ON user1.id = friendships.user_id
LEFT JOIN users as user2 ON friendships.friend_id = user2.id
WHERE user1.first_name = "Kermit";


-- 2
SELECT  user1.first_name, user1.last_name, user2.first_name, user2.last_name
FROM users user1 
LEFT JOIN friendships ON user1.id = friendships.user_id
LEFT JOIN users as user2 ON friendships.friend_id = user2.id;

-- 3
SELECT distinct user1.first_name, user1.last_name, count(*) as amigos
FROM users user1
LEFT JOIN friendships ON user1.id = friendships.user_id
LEFT JOIN users AS user2 ON friendships.friend_id = user2.id
WHERE user2.first_name IS NOT NULL
GROUP BY user1.first_name;

-- 4
insert into users (first_name, last_name, created_at) values ("matías", "yañez", now());
insert into users (first_name, last_name, created_at) values ("magdalena", "pizarro", now());
insert into users (first_name, last_name, created_at) values ("pablo", "pizarro", now());
insert into friendships (user_id, friend_id, created_at) values (2, 6, now());
insert into friendships (user_id, friend_id, created_at) values (4, 7, now());
insert into friendships (user_id, friend_id, created_at) values (5, 8, now());

-- 5
SELECT  user1.id, user1.first_name, user1.last_name, user2.id, user2.first_name, user2.last_name
FROM users user1 
LEFT JOIN friendships ON user1.id = friendships.user_id
LEFT JOIN users as user2 ON friendships.friend_id = user2.id
WHERE user1.first_name = "Eli"
ORDER BY user2.first_name ASC;

-- 6
DELETE FROM friendships WHERE id = 5;

-- 7
SELECT  user1.first_name, user1.last_name, user2.first_name, user2.last_name
FROM users user1 
LEFT JOIN friendships ON user1.id = friendships.user_id
LEFT JOIN users as user2 ON friendships.friend_id = user2.id
WHERE user2.first_name is not null;
