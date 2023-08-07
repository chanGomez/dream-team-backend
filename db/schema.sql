DROP DATABASE IF EXISTS teams_dev;

CREATE DATABASE teams_dev;

\c teams_dev;

-- CREATE TABLE teams (
--     id SERIAL PRIMARY KEY,
--     division TEXT,
--     name TEXT NOT NULL,
--     abber TEXT, 
--     championship INT
-- );

CREATE TABLE teams (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    is_favorite BOOLEAN
);

DROP TABLE IF EXISTS comments;

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    commenter TEXT NOT NULL,
    content TEXT,
    team_id INTEGER REFERENCES teams (id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS players;

CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    position TEXT NOT NULL,
    draft INT,
    height TEXT,
    weight INT,
    accolades TEXT,
    hof BOOLEAN,
    team_id INTEGER REFERENCES teams (id) ON DELETE CASCADE
);