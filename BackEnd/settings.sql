-- settings.sql
CREATE DATABASE truckdash;
CREATE USER truckdashuser WITH PASSWORD 'truckdash';
GRANT ALL PRIVILEGES ON DATABASE truckdash TO truckdashuser;