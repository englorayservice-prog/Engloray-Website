-- CREATE DATABASE EnglorayBackend;


SELECT name FROM sys.databases;
GO

DROP DATABASE EnglorayBackend;

USE EnglorayBackend;
GO

SELECT TABLE_SCHEMA, TABLE_NAME
FROM INFORMATION_SCHEMA.TABLES
WHERE TABLE_TYPE = 'BASE TABLE';

select * from EnglorayContactForms;

select * from InternshipForms;

select * from AllProgramsForms;
select * from ButtonInternForms;

SELECT name
FROM sys.tables
WHERE name = 'InternshipForms';

create table Workshops(
    WorkshopId INT PRIMARY KEY IDENTITY(1,1),
    WorkshopName NVARCHAR(50) NOT NULL
);

drop table Workshops

SELECT * from Workshops

INSERT INTO Workshops (workshopName)
VALUES 
('UI UX Workshop'),
('Graphic Workshop'),
('Java & python Workshop');

SELECT COLUMN_NAME
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_NAME = 'WorkshopForms';

EXEC sp_rename 'WorkshopForms.Workshop', 'WorkshopName', 'column';

select * from EnglorayContactForms