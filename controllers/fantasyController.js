const express = require("express");
const router = express.Router();

const { 
    getAllFantasyByTeamId,
    getAllFantasy,
    createPlayersInTeam
  } = require("../queries/fantasy")



  router.get("/", async (req, res) => {

    const allTeams = await getAllFantasy();

    if (Array.isArray(allTeams)) {
        res.json(allTeams);
      } else {
        res.status(500).json({ error: "Server error" });
      }
})

//on players querie 

router.post("/", async (req, res) => {

    const team = await createPlayersInTeam(req.body.fantasy)
    res.json(team)
  
  })
//create a team with players


//update a team with players


module.exports = router;