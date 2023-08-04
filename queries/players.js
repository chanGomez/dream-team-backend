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

module.exports = { getAllPlayers };
