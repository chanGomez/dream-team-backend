const db = require("../db/dbconfig");

const getAllPlayers = async (teamId) => {
  try {
    const allComments = await db.any(
      `SELECT * FROM players where team_id = $1 ORDER BY id ASC`,
      teamId
    );

    return allComments;
  } catch (error) {
    return error;
  }
};

const getPlayerById = async (teamId, playerId) => {
  try {
    const onePlayer = await db.any(
      `
        SELECT TEAM_ID,
        POSITION,
        PLAYER_NAME,
        DRAFT,
        HEIGHT,
        WEIGHT,
        ACCOLADES,
        HOF
        FROM TEAMS
        JOIN PLAYERS ON TEAMS.ID = PLAYERS.TEAM_ID
        WHERE TEAMS.ID = $1
            AND PLAYERS.ID = $2;
    `,
      [teamId, playerId]
    );

    return onePlayer;
  } catch (error) {
    return error;
  }
};


module.exports = { getAllPlayers, getPlayerById };


// SELECT TEAM_ID,
// POSITION,
// PLAYER_NAME,
// DRAFT,
// HEIGHT,
// WEIGHT,
// ACCOLADES,
// HOF
// FROM TEAMS
// JOIN PLAYERS ON TEAMS.ID = PLAYERS.TEAM_ID
// WHERE TEAMS.ID = 1
//     AND PLAYERS.ID = 1;