export default grapheme_iterator;
declare function grapheme_iterator(s: any): {
    [Symbol.iterator](): Generator<string, void, unknown>;
};
