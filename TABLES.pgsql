create table users(
  user_name varchar(255) primary key,
  email varchar(255) unique,
  pd varchar(255) not null,
  bias varchar(1000),
  tag_count numeric

);

drop table users;

insert into users (user_name,email,pd,bias,tag_count) values ('bichu136','bicagu123@gmail.com','Digimon136','bias',0);

select * from users;

select user_name,pd from users where user_name='bichu136';
