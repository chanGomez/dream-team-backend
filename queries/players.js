const db = require("./db/dbConfig");

const getAllPlayersInTeam = async (teamId) => {
  try {
    const allPlayers = await db.any(
      // `SELECT * FROM fantasy where team_id = $1`,
      `SELECT player_name, player_id, position FROM fantasy 
      JOIN players on fantasy.player_id = players.id
      JOIN teams on fantasy.team_id = teams.id
      WHERE fantasy.team_id = $1`,
      teamId
    );

    return allPlayers;
  } catch (error) {
    return error;
  }
};

const getPlayerById = async (id) => {
  try {
    const onePlayer = await db.any(`SELECT * FROM players WHERE id=$1`, id);

    return onePlayer;
  } catch (error) {
    return error;
  }
};

const getAllPlayers = async () => {
  try {
    const allPlayers = await db.any("SELECT * FROM players");
    console.log(allPlayers);
    return allPlayers;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllPlayersInTeam, getPlayerById, getAllPlayers };
