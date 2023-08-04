const express = require("express");

const router = express.Router();

const { getAllPlayers } = require("../queries/players");

router.get("/", async (req, res) => {
  const allPlayers = await getAllPlayers();

  if (Array.isArray(allPlayers)) {
    res.json(allPlayers);
  } else {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
