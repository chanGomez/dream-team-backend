const db = require("../db/dbconfig");

const getAllTeams = async () => {
  try {
    const allTeams = await db.any("SELECT * FROM teams");
    console.log(allTeams);
    return allTeams;
  } catch (error) {
    return error;
  }
};

const getTeamById = async (id) => {
  try {
    const team = await db.any(`SELECT * FROM teams WHERE id=$1`, id);

    console.log(team);
    return team;
  } catch (error) {
    return error;
  }
};

const createTeam = async (team) => {
  try {
      const newTeam = await db.one(`INSERT INTO teams (name, is_favorite, 
        player_id_one, player_id_two, player_id_three, player_id_four, player_id_five) VALUES ($1) RETURNING *`, 
      [team.name, team.is_favorite, team.player_id_one, team.player_id_two, 
        team.player_id_three, team.player_id_four, team.player_id_five])
      return newTeam
  } catch (error) {
      return error
  }
}

const deleteTeamById = async (id) => {
  try {
     const deleteTeam = await db.any("DELETE FROM teams WHERE id= $1 RETURNING *", id)
     return deleteTeam

  } catch (error) {
      return error
  }
}

const updateTeamById = async (id, team) => {
  try {
    let dynamicValues = Object.values(team);

    function makeQueryString(data) {
      let count = 2;
      let result = "";

      for (let key in data) {
        result += `${key} = $${count},`;
        count++;
      }
      result = result.substring(0, result.length - 1);
      return result;
    }

    let queryString = makeQueryString(team);

    const updatedTeam = await db.any(
      `UPDATE teams SET ${queryString} WHERE id = $1 RETURNING *`,
      [id, ...dynamicValues]
    );
    return updatedTeam;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllTeams,
  getTeamById,
  createTeam,
  deleteTeamById,
  updateTeamById
};
