const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

/** Récupération de la date d'aujourd'hui */
let date_ob = new Date();

/** Message de test */
let test = "Test succeeded at " + date_ob;

/** Requête de test */
router.get("/", (req, res) => {
  res.json(test);
});

/** Requête post permettant le hashage de l'input envoyé */
router.post("/", (req, res) => {
  console.log("Hash begin !");
  console.log("Input received : " + req.body.input);
  const inputToHash = req.body.input;
  const hashedInput = bcrypt.hashSync(inputToHash, 10);
  console.log("Hashed input made : " + hashedInput);
  res.json("HashedInput : " + hashedInput + " ! ");
});

module.exports = router;
