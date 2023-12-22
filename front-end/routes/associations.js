const express = require("express");
const path = require("path");
const router = express.Router();

// Dès qu'une information est précisé derrière le "/" il s'agit d'une ressource, ici on demande la ressource "Prestation"
router.get("/", (req, res) => {
  // const isConnected = req.session.isConnected ? req.session.isConnected : false;
  const filePath = path.join(__dirname, "../views/associations.html");
  res.status(200).sendFile(filePath);
});

module.exports = router;
