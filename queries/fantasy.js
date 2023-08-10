const db = require("../db/dbconfig");


const getAllFantasy = async () => {
    try {
      const allTeams = await db.any("SELECT * FROM fantasy");
      console.log(allTeams);
      return allTeams;
    } catch (error) {
      return error;
    }
  };
  
const getAllFantasyIdsByTeamId = async (id) => {
    try {
      const oneTeam = await db.any(
        `SELECT * FROM fantasy 
        where team_id = $1`, id)
  
      return oneTeam;
    } catch (error) {
      return error;
    }
  };

//   const createFantasy = async (fantasy) => {
//     try {
//         const newFantasy = await db.one(`INSERT INTO fantasy (team_id, player_id) VALUES ($1, $2) RETURNING *`, 
//         [fantasy.team_id, fantasy.player_id])
//         return newFantasy
//     } catch (error) {
//         return error
//     }
//   }


  module.exports = { getAllFantasyIdsByTeamId, getAllFantasy};