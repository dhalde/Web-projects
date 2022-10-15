//Day2.1 CRUD operation using asynchronous way

// const fs = require('fs');

//CRUD operation using fs

// fs.mkdirSync('pushpa');

// creating read.txt async
// fs.writeFile("./pushpa/read.txt", "value of the proj", (err, data) => {
//     console.log("created the file");
// });

//updating the file
// fs.appendFile('./pushpa/read.txt', "my name is BITW", () => {

// });

// reading the file
// fs.readFile("./pushpa/read.txt", "utf-8", (err, data) => { console.log(data) });

//renaming the file
// fs.rename("./pushpa/read.txt", "./pushpa/readme.txt", () => { });/*callback function()*/

//removing the txt file
// fs.unlink("./pushpa/readme.txt", () => { });

//removing the file directory
// keypt '.'dot represent your current file;
// fs.rmdir("./pushpa", () => { });