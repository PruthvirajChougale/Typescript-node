"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteuser = exports.updateuser = exports.adduser = exports.getuser = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const birthday_js_1 = __importDefault(require("./../models/birthday.js"));
const getuser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.query.name;
        let response = yield birthday_js_1.default.findOne({ name });
        if (response) {
            res.status(200).json(response);
        }
        else {
            res.status(500).json({ error: "couldn't fetch" });
        }
    }
    catch (err) {
        console.log(err);
        res.status(404).json({ error: "internal server error" });
    }
});
exports.getuser = getuser;
const adduser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, date } = req.body;
        const newbirthday = new birthday_js_1.default({ name: name, date: date });
        // const response=await newbirthday.save();
        yield newbirthday.save();
        console.log('data saved');
        res.status(200).json(newbirthday);
    }
    catch (err) {
        res.status(404).json({ error: "internal server error" });
    }
});
exports.adduser = adduser;
const updateuser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const namee = req.params.name;
        console.log(namee);
        const updateMe = req.body;
        console.log(updateMe);
        const response = yield birthday_js_1.default.findOneAndUpdate({ name: namee }, updateMe, {
            new: true,
            runValidators: true,
        });
        console.log(response);
        if (!response) {
            res.status(500);
        }
        res.status(200).json(response);
    }
    catch (err) {
        res.status(404).json({ error: "internal server error" });
    }
});
exports.updateuser = updateuser;
const deleteuser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteDate = yield birthday_js_1.default.findOneAndDelete({ name: req.params.name });
        if (deleteDate) {
            res.status(200);
        }
        else {
            res.status(500);
        }
    }
    catch (err) {
        res.status(404).json({ error: "internal server error" });
    }
});
exports.deleteuser = deleteuser;
