create schema CODL;

CREATE USER 'tomcat'@'localhost'  IDENTIFIED BY 'Amn3sia!';

GRANT ALL privileges ON CODL.* TO 'tomcat'@'localhost';

FLUSH PRIVILEGES;

insert into CODL.USER values (1, "2010-04-02 15:28:22", "tekkenMaster");
insert into CODL.POST values (1, "<html>Hello World</html>", "2010-04-02 15:28:22", "This is the first code", "HTML", "Title 1", 10, 1);
insert into CODL.POST values (2, "<html>LOLOLOL</html>","2010-04-02 15:28:22", "This is the first code", "JAVA", "Title 2", 190, 1);

