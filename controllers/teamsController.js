const express = require("express");
const router = express.Router();

const { getAllTeams, getTeamById} = require("../queries/teams")

router.get("/", async (req, res) => {
    const allTeams = await getAllTeams();

    if (Array.isArray(allTeams)) {
        res.json(allTeams);
      } else {
        res.status(500).json({ error: "Server error" });
      }
})

router.get("/:id", async (req, res) => {
    const id = req.params.id;

    const team = await getTeamById(id);

    if (team.length === 0 ) {
        res.status(500).json({ error: "Team not found!" });
      } else {
        res.status(200).json(team[0]);
      }
})

module.exports = router;