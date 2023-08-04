const express = require("express");

const router = express.Router();

const { getAllPlayers, getPlayerById } = require("../queries/players");

router.get("/", async (req, res) => {
  const allPlayers = await getAllPlayers();

  if (Array.isArray(allPlayers)) {
    res.json(allPlayers);
  } else {
    res.status(500).json({ error: "Server error" });
  }
});
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const player = await getPlayerById(id);

  if (player.length === 0) {
    res.status(500).json({ error: "Player not found!" });
  } else {
    res.status(200).json(player[0]);
  }
});

module.exports = router;
