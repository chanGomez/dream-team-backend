const express = require("express");

const { getAllPlayersInTeam, 
  getPlayerById,
  getAllPlayers } 
  = require("../queries/players");

const router = express.Router({ mergeParams: true });

  // localhost:3006/teams/1/players/all-players-in-team
router.get("/all-players-in-team", async (req, res) => {

  const allPlayers = await getAllPlayersInTeam(req.params.teamId);
  if (allPlayers.length === 0) {
    res.status(404).json({ error: "not found" });
  } else {
    res.json(allPlayers);
  }
});

  // localhost:3006/players/1
router.get("/:playerId", async (req, res) => {
  try {
    const player = await getPlayerById(
      req.params.playerId
    );

    if (player.length === 0) {
      throw {
        status: 404,
        message: "Player not found",
      };
    } else {
      return res.json(player);
    }
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

// localhost:3006/players
router.get("/", async (req, res) => {
  const allPlayers = await getAllPlayers();
console.log(allPlayers);
  if (Array.isArray(allPlayers)) {
    res.json(allPlayers);
  } else {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
