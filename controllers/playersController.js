const express = require("express");

const { getAllPlayers, 
  getPlayerById } 
  = require("../queries/players");

const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  const allPlayers = await getAllPlayers(req.params.teamId);

  if (allPlayers.length === 0) {
    res.status(404).json({ error: "not found" });
  } else {
    res.json(allPlayers);
  }
});

router.get("/:playerId", async (req, res) => {
  try {
    const player = await getPlayerById(
      req.params.teamId,
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

module.exports = router;
