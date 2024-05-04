"use strict";
var express = require("express");
var router = express.Router();
var characterController = require("../controller/characterController");
router.get("/", characterController.getMainCharacters);
module.exports = router;
