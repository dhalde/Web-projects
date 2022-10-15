//Day 2.3 importing and exporting module;

// we are exporting the sum function (opert module can be used by index.js )and  storing in the add and calling the function

// 1st way
// const opert = require("./opert") 


// console.log(opert); // return in the form of obj


// console.log(opert.sum(54, 64));
// console.log(opert.sub(54, 64));


// 2nd way   sequence doesnt matter
const { sum, name, sub, } = require("./opert")

// console.log(sum); // return in the form of obj


console.log(sum(54, 64));
console.log(sub(54, 64));

console.log(name);