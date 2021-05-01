import helpers from "@chopinlang/helpers";
const { coerceToString } = helpers;
export default function titleCase(subject) {
    subject = coerceToString(subject);
}
