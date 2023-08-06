const db = require("../db/dbconfig");

const getAllComments = async (teamId) => {
  try {
    const allComments = await db.any(
      `SELECT * FROM comments where team_id = $1 ORDER BY id ASC`,
      teamId
    );

    return allComments;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllComments,
};