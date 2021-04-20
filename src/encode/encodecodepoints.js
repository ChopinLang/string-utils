import { coerceToString } from "../helpers/string.js";

export default function encodeCodePoints(subject) {
  subject = coerceToString(subject);
  return [...subject].map((scalar) => scalar.codePointAt(0));
}
