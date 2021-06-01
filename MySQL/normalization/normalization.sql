CREATE TABLE categories (
	id INT NOT NULL AUTO_INCREMENT,
    name_category VARCHAR(255),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE now(),
    
    PRIMARY KEY (id)
);

CREATE TABLE authors (
	id INT NOT NULL AUTO_INCREMENT,
    name_author VARCHAR(255),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE now(),
    
    PRIMARY KEY (id)
);

CREATE TABLE books (
	id INT NOT NULL AUTO_INCREMENT,
    author_id INT,
    name_book VARCHAR(255),
    isbn VARCHAR(255),
    description_book MEDIUMTEXT,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE now(),
    
    PRIMARY KEY (id),
    FOREIGN KEY (author_id) REFERENCES authors(id)
);

CREATE TABLE book_category (
	id INT NOT NULL AUTO_INCREMENT,
    category_id INT,
    book_id INT,

	PRIMARY KEY (id),
    FOREIGN KEY (category_id) REFERENCES categories(id),
	FOREIGN KEY (book_id) REFERENCES books(id)   
);

CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
    name_user VARCHAR(255),
    email VARCHAR(255),
    password_user VARCHAR(255),
	created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE now(),
	
    PRIMARY KEY (id)
);

CREATE TABLE user_book (
	id INT NOT NULL AUTO_INCREMENT,
    user_id INT,
    book_id INT,
    favorite TINYINT(1),
		
	PRIMARY KEY (id),
	FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (book_id) REFERENCES books(id)
);
