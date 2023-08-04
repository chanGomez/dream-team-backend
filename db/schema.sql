DROP DATABASE IF EXISTS teams_dev;

CREATE DATABASE teams_dev;

\c teams_dev;

CREATE TABLE teams (
    id SERIAL PRIMARY KEY,
    division TEXT,
    name TEXT NOT NULL,
    abber TEXT, 
    championship INT
)

DROP TABLE IF EXISTS players;

CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    position TEXT NOT NULL,
    draft YEAR,
    height TEXT,
    weight INT,
    accolades TEXT,
    hof BOOLEAN
);