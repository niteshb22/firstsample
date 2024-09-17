"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/server.ts
const express_1 = __importDefault(require("express"));
const downloadRoute_1 = __importDefault(require("./routes/downloadRoute"));
const db_1 = __importDefault(require("./db/db"));
const app = (0, express_1.default)();
const PORT = 3000;
// MonnogDB Connect
(0, db_1.default)();
// Use the download routes
app.use('/auth', downloadRoute_1.default);
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send("API is running");
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
