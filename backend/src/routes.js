const express = require("express");

const ongs_controller = require("./controllers/ongs_controller");
const incident_controller = require("./controllers/incident_controller");
const profiler_controller = require("./controllers/profile_controller");
const session_controller = require("./controllers/session_controller")

const routes = express.Router();

routes.post("/session", session_controller.create)

routes.get('/ongs', ongs_controller.index);
routes.post('/ongs', ongs_controller.create);

routes.post('/incidents', incident_controller.create);
routes.get('/incidents', incident_controller.index);
routes.delete('/incidents/:id', incident_controller.delete);

routes.get('/profile', profiler_controller.index);

module.exports = routes;