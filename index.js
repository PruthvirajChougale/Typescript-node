"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const execute_js_1 = __importDefault(require("./execute/execute.js"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 4000;
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
let conn = mongoose_1.default.connect('mongodb://localhost:27017/birthday');
app.use('/', execute_js_1.default);
app.listen(port, () => {
    console.log('you are listening to port ' + port);
});
