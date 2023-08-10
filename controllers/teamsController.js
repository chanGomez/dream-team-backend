const express = require("express");
const router = express.Router();

const commentsController = require("./commentsController");
router.use("/:teamId/comments", commentsController);

const playersController = require("./playersController");
router.use("/:teamId/players", playersController);

const {
  getAllTeams,
  getTeamById,
  createTeam,
  deleteTeamById,
  updateTeamById,
} = require("../queries/teams");

router.get("/", async (req, res) => {
  const allTeams = await getAllTeams();

  if (Array.isArray(allTeams)) {
    res.json(allTeams);
  } else {
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const team = await getTeamById(id);

  if (team.length === 0) {
    res.status(500).json({ error: "Team not found!" });
  } else {
    res.status(200).json(team[0]);
  }
});

router.post("/", async (req, res) => {
  const team = await createTeam(req.body);
  res.json(team);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const deleteTeam = await deleteTeamById(id);

  if (deleteTeam.length === 0) {
    res.status(400).json({ error: "Team not found!" });
  } else {
    res.json(deleteTeam[0]);
  }
});

router.put("/:id", async (req, res) => {
  console.log(req.body);
  const updatedTeam = await updateTeamById(req.params.id, req.body);

  if (updatedTeam.length === 0) {
    res.status(404).json({ message: "Team not found!", error: true });
  } else {
    res.json(updatedTeam[0]);
  }
});

module.exports = router;
