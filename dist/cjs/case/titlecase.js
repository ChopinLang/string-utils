"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_js_1 = require("../helpers/string.js");
function titleCase(subject) {
    subject = string_js_1.coerceToString(subject);
}
exports.default = titleCase;
