const db = require("../db/dbconfig");

const getAllPlayersInTeam = async (
       teamId
) => {
  try {
    const allPlayers = await db.any(
      `SELECT * FROM fantasy where team_id = $1`,
       teamId
    );

    return allPlayers;
  } catch (error) {
    return error;
  }
};

const getPlayerById = async (id) => {
  try {
    const onePlayer = await db.any(
      `SELECT * FROM players WHERE id=$1`, id)

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


// SELECT * FROM teams where 
//       player_id_one = 1
//       player_id_two = 2 
//       player_id_three = 3 
//       player_id_four = 4 
//       player_id_five= 5
//        ORDER BY id ASC;

// SELECT player_id_one = 1,
//       player_id_two = 2, 
//       player_id_three = 3, 
//       player_id_four = 4, 
//       player_id_five= 5 FROM teams where team.id = 1;