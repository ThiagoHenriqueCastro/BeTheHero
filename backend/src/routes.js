const express = require("express");

/** CONTROLLERS */
const ongController = require("./controllers/OngController");
const incidentController = require("./controllers/IncidentController");
const profileController = require("./controllers/ProfileController");
const sessionController = require("./controllers/SessionController");

const routes = express.Router(); // modulo de rotas do express

/** SESSION */
routes.post("/session", sessionController.create);

/** ONGS */
routes.get("/ongs", ongController.index);
routes.post("/ongs", ongController.create);

/** INCIDENTS */
routes.get("/incidents", incidentController.index);
routes.post("/incidents", incidentController.create);
routes.delete("/incidents/:id", incidentController.delete);

/** PROFILE */
routes.get("/profile", profileController.index);

module.exports = routes;
