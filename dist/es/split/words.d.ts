export default words;
/**
 * Splits a string into words using {@link http://www.unicode.org/reports/tr29/ Unicode UAX #29} and strips punctuation
 *
 * @function words
 * @static
 * @since 0.01
 * @memberof Split
 * @param {string} subject String to split into words
 * @returns {string[]} An array of words
 * @example
 * words("This is a string")
 * // => ["This", "is", "a", "string"]
 * words("The quick (“brown”) fox can’t jump 32.3 feet, right?")
 * // => ["The", "quick", "brown", "fox", "can’t", "jump", "32.3", "feet", "right"]
 * words("В чащах юга жил бы цитрус? Да, но фальшивый экземпляр!")
 * // => ["В", "чащах", "юга", "жил", "бы", "цитрус", "Да", "но", "фальшивый", "экземпляр"]
 * words("thisIsAStringToSplit")
 * // => ["this", "Is", "A", "String", "To", "Split"]
 */
declare function words(subject: string, pattern: any, flags: any): string[];
