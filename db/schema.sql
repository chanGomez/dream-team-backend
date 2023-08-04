DROP DATABASE IF EXISTS teams_dev

CREATE DATABASE teams_dev

\c teams_dev

CREATE TABLE teams (
    id SERIAL PRIMARY KEY,
    division TEXT,
    name TEXT NOT NULL,
    abber TEXT 
    championship INT
)