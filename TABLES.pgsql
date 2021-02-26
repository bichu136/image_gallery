drop table users;

insert into users (user_name,email,pd,bias,tag_count) values ('bichu136','bicagu123@gmail.com','Digimon136','bias',0);

insert into roles (name) values ('admin');
insert into roles (name) values ('user');
insert into roles (name) values ('mods');
insert into moderate_statuses (name) values ('TAG');
insert into moderate_statuses (name) values ('MOD');
insert into moderate_statuses (name) values ('DON');

select * from roles;
select * from profiles;


-- delete_all_user
delete from users where role_id=2;
delete from profiles where bias='';

-- show all tables
select table_name from information_schema.tables

select kcu.table_schema,
       kcu.table_name,
       tco.constraint_name,
       kcu.ordinal_position as position,
       kcu.column_name as key_column
from information_schema.table_constraints tco
join information_schema.key_column_usage kcu
     on kcu.constraint_name = tco.constraint_name
     and kcu.constraint_schema = tco.constraint_schema
     and kcu.constraint_name = tco.constraint_name
where tco.constraint_type = 'PRIMARY KEY'
order by kcu.table_schema,
         kcu.table_name,
         position;
