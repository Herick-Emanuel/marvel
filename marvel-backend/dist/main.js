"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var characterRoutes_1 = __importDefault(require("./routes/characterRoutes"));
var app = (0, express_1.default)();
var PORT = process.env.PORT || 4000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/characters", characterRoutes_1.default);
app.listen(PORT, function () {
    console.log("Server listening on port ".concat(PORT));
});
