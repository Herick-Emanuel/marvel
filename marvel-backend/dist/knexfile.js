"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.development = void 0;
exports.development = {
    client: "pg",
    connection: {
        database: "marvel_saga_db",
        user: "herick",
        password: "thunder5",
    },
    migrations: {
        directory: "./migrations",
    },
    seeds: {
        directory: "./seeds",
    },
};
