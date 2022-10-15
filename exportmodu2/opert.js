//Day 2.3 importing and exporting module;


let sum = (a, b) => {
    return a + b;
}
let sub = (a, b) => {
    return a - b;
}
let name = "BITW";

// module.exports.sum = sum; // exporting multiple value
// module.exports.sub = sub;

module.exports = { sum, sub, name };

