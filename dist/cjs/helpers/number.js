"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBigInt = exports.isNumber = void 0;
function isNumber(obj) {
    return (typeof obj == "number" || (typeof obj == "object" && obj instanceof Number));
}
exports.isNumber = isNumber;
function isBigInt(obj) {
    return typeof obj == "bigint";
}
exports.isBigInt = isBigInt;
