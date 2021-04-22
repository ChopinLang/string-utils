"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBoolean = void 0;
function isBoolean(obj) {
    return (typeof obj == "boolean" ||
        (typeof obj == "object" && obj instanceof Boolean));
}
exports.isBoolean = isBoolean;
