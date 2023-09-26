create database My_company;

use My_company;

create table department(
    id int primary key,
    dept_name varchar(30),
)

create table role(
    id int primary key,
    title varchar(30),
    salary decimal,
    department_id int,
)

create table employee(
    id int primary key,
    first_name varchar(30),
    last_name varchar(30),
    role_id int,
    manager_id int, 
)