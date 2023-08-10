const db = require("../db/dbconfig");

//returns all IDs
const getAllFantasy = async () => {
  try {
    const allTeams = await db.any("SELECT * FROM fantasy");
    console.log(allTeams);
    return allTeams;
  } catch (error) {
    return error;
  }
};

//
const getAllFantasyByTeamId = async (teamId) => {
  try {
    const oneTeam = await db.any(
      `SELECT player_name, name, accolades, player_id FROM fantasy 
        JOIN players on fantasy.player_id = players.id
        JOIN teams on fantasy.team_id = teams.id
        WHERE fantasy.team_id = $1`,
      teamId
    );

    return oneTeam;
  } catch (error) {
    return error;
  }
};
//create a team with players

const createPlayersInTeam = async (team) => {
  try {
    const newTeamWithPlayers = await db.any(
      `INSERT INTO fantasy (team_id, player_id) VALUES ($1, $2) RETURNING *`,
      team
    );
    return newTeamWithPlayers;
  } catch (error) {
    return error;
  }
};
//update a team with players

const updateFantasy = async (id, fantasy) => {
  try {
    const updatedFantasy = await db.one(
      "UPDATE fantasy set player_id = $1 WHERE id = $2",
      [id, fantasy]
    );
  } catch (error) {
    return error;
  }
};

module.exports = { getAllFantasyByTeamId, getAllFantasy, createPlayersInTeam , updateFantasy};
