"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const contactschemas = new mongoose_1.default.Schema({
    fullname: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    sendAt: { type: Date, default: new Date(Date.now()) },
});
const Contact = mongoose_1.default.model("Contact", contactschemas);
exports.default = Contact;
