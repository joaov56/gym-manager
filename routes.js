const express = require("express");
const routes = express.Router();
const instructors = require("./instructors");

routes.get("/", (req, res) => {
  return res.render("layout");
});

routes.get("/instructors", (req, res) => {
  return res.render("instructors/index");
});

routes.get("/members", (req, res) => {
  return res.send("members");
});

routes.get("/instructors/create", (req, res) => {
  return res.render("instructors/create");
});

routes.get("/instructors/:id", instructors.show);

routes.get("/instructors/:id/edit", instructors.edit);

routes.post("/instructors", instructors.post);

module.exports = routes;
