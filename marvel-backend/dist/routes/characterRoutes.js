"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var characterController_js_1 = __importDefault(require("../controller/characterController.js"));
var router = express_1.default.Router();
router.get("/", characterController_js_1.default.getAllCharacters);
router.post("/", characterController_js_1.default.createCharacter);
router.put("/:id", characterController_js_1.default.updateCharacter);
router.delete("/:id", characterController_js_1.default.deleteCharacter);
exports.default = router;
