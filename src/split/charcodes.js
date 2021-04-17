export default function charCodes(subject) {
  return subject.split("").map((char) => char.charCodeAt(0));
}
