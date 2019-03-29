create schema CODL;

CREATE USER 'tomcat'@'localhost'  IDENTIFIED BY 'Amn3sia!';

GRANT ALL privileges ON CODL.* TO 'tomcat'@'localhost';

FLUSH PRIVILEGES;

insert into CODL.POST values (1, "<html>Hello World</html>", "This is the first code", "HTML", "Title 1", 1, 10);
insert into CODL.POST values (2, "<html>LOLOLOL</html>", "test MYSQL", "HTML", "MYSQL", 1, 10);

