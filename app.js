const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const teamsController = require("./controllers/teamsController");
const playersController = require("./controllers/playersController");
const commentsController = require("./controllers/commentsController");


const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/teams", teamsController);
app.use("/players", playersController);
app.use("/comments", commentsController);

app.get("/", (req, res) => {
  res.send("Welcome to the Dream Team App");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found!");
});

module.exports = app;
