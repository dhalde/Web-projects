//Day 2.3 path module information

const path = require("path");

// console.log(path.dirname("C:/Users/dipes/OneDrive/Desktop/nodejs/pathmodu/index.js"));
// console.log(path.extname("C:/Users/dipes/OneDrive/Desktop/nodejs/pathmodu/index.js"));
// console.log(path.basename("C:/Users/dipes/OneDrive/Desktop/nodejs/pathmodu/index.js"));


const myPath = (path.parse("C:/Users/dipes/OneDrive/Desktop/nodejs/pathmodu/index.js"));

console.log(`my path root is : ${myPath.root}`);


