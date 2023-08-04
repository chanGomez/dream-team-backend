\c teams_dev

INSERT INTO 
    teams (division, name, abber, championship)
VALUES
('Southeast','Atlanta Hawks','ATL', 1),
('Atlantic','Boston Celtics','BOS', 17),
('Atlantic','Brooklyn Nets','BKN', 0),
('Southeast','Charlotte Hornets','CHA', 0),
('Central','Chicago Bulls','CHI', 6),
('Central','Cleveland Cavaliers','CLE', 1),
('Southwest','Dallas Mavericks','DAL', 1),
('Northwest','Denver Nuggets','DEN', 1),
('Central','Detroit Pistons','DET', 3),
('Pacific','Golden State Warriors','GSW', 7),
('Southwest','Houston Rockets','HOU', 2),
('Central','Indiana Pacers','IND', 0),
('Pacific','Los Angeles Clippers','LAC', 0),
('Pacific','Los Angeles Lakers','LAL', 17),
('Southwest','Memphis Grizzlies','MEM', 0),
('Southeast','Miami Heat','MIA', 3),
('Central','Milwaukee Bucks','MIL', 2),
('Northwest','Minnesota Timberwovles','MIN', 0),
('Southwest','New Orleans Pelicans','NOP', 0),
('Atlantic','New York Knicks','NYK', 2),
('Northwest','Oklahoma City Thunder','OKC', 1),
('Southeast','Orlando Magic','ORL', 0),
('Atlantic','Philadelphia 76ers','PHI', 3),
('Pacific','Phoenix Suns','PHX', 0),
('Northwest','Portland Trailblazers','POR', 1),
('Pacific','Sacramento Kings','SAC', 1),
('Southwest','San Antonio Spurs','SAS',5),
('Atlantic','Toronto Raptors','TOR', 1),
('Northwest','Utah Jazz','UTA', 0),
('Southeast','Washington Wizards','WAS', 1);

INSERT INTO players(position, name, draft, height, weight, accolades, hof)
VALUES
('SF', 'LeBron James', 2003, '6 ft 9 in', 250, '19x All-Star, 3x All-Star MVP, 4x MVP, 4x Finals MVP, 4x Champ', false ),
('PG','Steph Curry', 2009,'6 ft 2 in', 185, '9x All-Star, 1x All-Star MVP, 2x MVP, 4x Champ, 1x Finals MVP', false),
('SG', 'James Harden', 2009, '6 ft 5 in', 220, '10x All-Star, 1x MVP, 1x 6MOY', false),
('PF', 'Giannis Antetokounmpo', 2013, '7 ft', 242, '7x All-Star, 2x MVP, 1x All-Star MVP, 1x DPOY', false),
('C', 'Nikola Jokic', 2014, '6 ft 11 in', 284,'5x All-Star, 2x MVP, 1x Finals MVP, 1x Champ', false)