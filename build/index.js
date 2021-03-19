"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// rest of the code remains same
const app = express_1.default();
const PORT = 1568;
app.get("/", (req, res) => res.send("hello world"));
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at  http://localhost:${PORT}`);
});
