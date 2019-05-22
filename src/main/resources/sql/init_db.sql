create schema CODL;

CREATE USER 'tomcat'@'localhost'  IDENTIFIED BY 'Amn3sia!';

GRANT ALL privileges ON CODL.* TO 'tomcat'@'localhost';

FLUSH PRIVILEGES;

create table CODL.COMMENT (ID bigint not null auto_increment, DATE_CREATION datetime(6) not null, POST_ID bigint, TEXT text not null, USER_ID bigint not null, primary key (ID)) engine=InnoDB;
create table CODL.POST (ID bigint not null auto_increment, CODE text not null, DATE_CREATION datetime(6) not null, DESCRIPTION text, LANGUAGE varchar(255) not null, TITLE varchar(255) not null, USER_ID bigint not null, primary key (ID)) engine=InnoDB;
create table CODL.USER (ID bigint not null auto_increment, DATE_CREATION datetime(6), EMAIL varchar(255), NAME varchar(255), URL_AVATAR varchar(255), USERNAME varchar(255), primary key (ID)) engine=InnoDB;
create table CODL.VOTE (ID bigint not null auto_increment, COMMENT_ID bigint, POST_ID bigint, USER_ID bigint not null, VALUE bigint not null, primary key (ID)) engine=InnoDB;
alter table CODL.COMMENT add constraint FKc4guf2g3mhm8dd6rvogse4wb0 foreign key (USER_ID) references USER (ID);
alter table CODL.POST add constraint FKk57duahs09p84ac63gbqbvx9v foreign key (USER_ID) references USER (ID);