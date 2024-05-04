import express from "express";
import characterController from "../controller/characterController.js";

const router = express.Router();

router.get("/", characterController.getAllCharacters);
router.post("/", characterController.createCharacter);
router.put("/:id", characterController.updateCharacter);
router.delete("/:id", characterController.deleteCharacter);

export default router;
