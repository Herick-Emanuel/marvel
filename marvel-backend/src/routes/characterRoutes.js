const express = require("express");
const router = express.Router();
const characterController = require("../controller/characterController");

router.get("/", characterController.getMainCharacters);

module.exports = router;
