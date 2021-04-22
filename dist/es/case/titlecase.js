import helpers from "@nyxlang/helpers";
const { coerceToString } = helpers;
export default function titleCase(subject) {
    subject = coerceToString(subject);
}
