const db = require("./db/dbConfig");

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
    const newTeam = await db.any(
      `INSERT INTO teams (name, is_favorite) VALUES ($1, $2) RETURNING *`,
      [team.name, team.is_favorite]
    );
    return newTeam;
  } catch (error) {
    return error;
  }
};

const deleteTeamById = async (id) => {
  try {
    const deleteTeam = await db.any(
      "DELETE FROM teams WHERE id= $1 RETURNING *",
      id
    );
    return deleteTeam;
  } catch (error) {
    return error;
  }
};
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
const updateTeamById = async (id, team) => {
  try {
    const updatedTeam = await db.any(
      `UPDATE teams SET name=$1,is_favorite=$2 WHERE id = $3 RETURNING *`,
      [team.name, team.is_favorite, id]
    );
    await db.any(`DELETE FROM fantasy WHERE team_id=$1`, [id]);
    const positions = ["sg", "pg", "sf", "c", "pf"];
    for (let x = 0; x < positions.length; x++) {
      await createPlayersInTeam([id, team["players-" + positions[x]]]);
    }
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
  updateTeamById,
};
