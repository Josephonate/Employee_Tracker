DROP DATABASE IF EXISTS My_company;
CREATE DATABASE My_company;

USE My_company;

create table department (
    id int not null auto_increment primary key,
    name varchar(30) unique not null
);

create table role(
    id int not null auto_increment primary key,
    title varchar(30) not null,
    salary decimal not null,
    department_id int null
);

create table employee(
    id int not null auto_increment primary key,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    role_id int not null,
    manager_id int null
);