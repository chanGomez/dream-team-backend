const db = require("../db/dbconfig");

const getAllPlayers = async () => {
  try {
    const allPlayers = await db.any("SELECT * FROM players");
    console.log(allPlayers);
    return allPlayers;
  } catch (error) {
    return error;
  }
};

const getPlayerById = async (id) => {
  try {
    const player = await db.any(`SELECT * FROM players WHERE id=$1`, id);

    console.log(player);
    return player;
  } catch (error) {
    return error;
  }
};


module.exports = { getAllPlayers, getPlayerById };
