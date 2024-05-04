"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = __importDefault(require("knex"));
var path_1 = __importDefault(require("path"));
var db = (0, knex_1.default)({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'herick',
        password: 'thunder5',
        database: 'marvel_saga_db',
    },
    migrations: {
        directory: path_1.default.resolve(__dirname, 'migrations'),
    },
    seeds: {
        directory: path_1.default.resolve(__dirname, 'seeds'),
    },
});
exports.default = db;
