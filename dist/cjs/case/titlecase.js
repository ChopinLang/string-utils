"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = __importDefault(require("@chopinlang/helpers"));
const { coerceToString } = helpers_1.default;
function titleCase(subject) {
    subject = coerceToString(subject);
}
exports.default = titleCase;
