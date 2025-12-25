INSERT INTO roles (role_name) VALUES ('admin'), ('user');

INSERT INTO users (name, email) VALUES 
('Alice', 'alice@example.com'),
('Bob', 'bob@example.com');

INSERT INTO user_roles (user_id, role_id) VALUES 
(1, 1), -- Alice is admin
(2, 2); -- Bob is user

INSERT INTO posts (user_id, title, content) VALUES
(1, 'Hello World', 'My first post'),
(2, 'Hi there', 'Bob''s first post');
