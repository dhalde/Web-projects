// Day3.1 working with npm module
const chalk = require("chalk");
const validator = require("validator");

const clr = validator.isEmail("dipesh7@gmail.com");

console.log(clr ? chalk.green(clr) : chalk.red(clr));