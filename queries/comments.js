const db = require("./db/dbConfig");

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

const getCommentById = async (teamId, commentId) => {
    try {
      const oneComment = await db.any(
        `
          SELECT TEAM_ID,
              COMMENTER,
              CONTENT
          FROM TEAMS
          JOIN COMMENTS ON TEAMS.ID = COMMENTS.TEAM_ID
          WHERE TEAMS.ID = $1
              AND COMMENTS.ID = $2;
      `,
        [teamId, commentId]
      );
  
      return oneComment;
    } catch (error) {
      return error;
    }
  };

  const deleteCommentById = async (id) => {
    try {
      const deleteComment = await db.any(
        `DELETE FROM comments WHERE id = $1 RETURNING *`,
        id
      );
  
      return deleteComment;
    } catch (error) {
      return error;
    }
  };

  const createComment = async (comment) => {
    try {
      const newComment = await db.any(
        `INSERT INTO comments (team_id, commenter, content) VALUES ($1, $2, $3) RETURNING *`,
        [
          comment.team_id,
          comment.commenter,
          comment.content
        ]
      );
  
      return newComment;
    } catch (error) {
      return error;
    }
  };

  const updateCommentById = async (id, comment) => {
    let { commenter, content } = comment;
    try {
      const updatedComment = await db.any(
        `UPDATE comments SET commenter = $1, content = $2 WHERE id = $3 RETURNING *`,
        [commenter, content, id]
      );
  
      return updatedComment;
    } catch (error) {
      return error;
    }
  };

  const getAllCommentsOnTeamsId = async (team_id) => {
    try {
      const allComments = await db.any(
        `SELECT * FROM teams INNER JOIN comments ON comments.team_id = teams.id WHERE comments.team_id = $1 `,
        team_id
      );
  
      return allComments;
    } catch (error) {
      return error;
    }
  };

module.exports = {
  getAllComments,
  getCommentById,
  deleteCommentById,
  createComment,
  updateCommentById,
  getAllCommentsOnTeamsId
};