drop database if exists sql_injection;
create database sql_injection;
use sql_injection;

create table users (
	id int not null auto_increment,
	username varchar(100) not null,
	password varchar(100) not null,
	email varchar(100) not null,
	admin char(5) not null,
	PRIMARY KEY ( id )
);

insert into users (username, password, email, admin)
values (
	'admin', 'd83374167372baf70c14ad4385447cae', 'admin@myforum.com', 'true'
);
