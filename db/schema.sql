DROP DATABASE IF EXISTS teams_dev;

CREATE DATABASE teams_dev;

\c teams_dev;

DROP TABLE IF EXISTS players;

CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    player_name TEXT NOT NULL,
    position TEXT NOT NULL,
    draft INT,
    height TEXT,
    weight INT,
    accolades TEXT,
    hof BOOLEAN
);

CREATE TABLE teams (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    is_favorite BOOLEAN,
    player_id INTEGER REFERENCES players (id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS comments;

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    commenter TEXT NOT NULL,
    content TEXT,
    team_id INTEGER REFERENCES teams (id) ON DELETE CASCADE
);

