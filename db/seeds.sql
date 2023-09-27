use My_company;

insert into department(name)
values ('HR'),
('Marketing'),
('Sales'),
('product Development'),
('IT'),
('Finance'),
("Executive");

insert into role(title, salary, department_id)
values("Finance Manager",110000, 6),
("Human Resources Manager",100000,1),
("Customer Success Manager",90000,3),
("Sales Manager",110000, 3),
("Marketing Manager",100000,2),
("Software Engineer",100000,4),
("Product Manager",110000,4),
("Data Scientist",120000,5),
("CEO", 250000,7);

insert into employee(first_name,last_name,role_id,manager_id)
values("Alice","Smith",1,null),
("Bob","Jones",2,2),
("Carol","Williams",1,1),
("Dave","Brown",3,null),
("Emily","Johnson",4,4),
("Frank","Miller",5,5),
("Grace","Davis",6,null),
("Henry","Garcia",3,3),
("Isabella","Rodriguez",4,null),
("John","Wilson",4,4),
( "Katherine","Martinez",4,null),
("Louis","Anderson",5,null),
("Mary","Taylor",6,null),
("Nicholas","Thomas",6,6),
( "Olivia","Hernandez",1,null),
( "Peter","Lopez",7,7),
("Richard","Walker",3,3),
("Susan","Perez",5,null),
("Thomas","Hall",6,null),
("Umaima","Young",3,null),
("Victoria","Allen",2,null);