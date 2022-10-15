//Day 3.4 about Json 

// const bioData = {
//     name: "Dip",
//     occupation: "Fresher",
//     channel: "BITW"
// };

// console.log(bioData.channel

//  const jsonData = JSON.stringify(bioData);  converting object to JSON
// console.log(jsonData);
// op: { "name": "Dip", "occupation": "Fresher", "channel": "BITW" }
// console.log(jsonData.channel); cannot access Json this way;

// const objData = JSON.parse(jsonData); converting json Data to obj
// console.log(objData);
// op: { name: 'Dip', occupation: 'Fresher', channel: 'BITW' }


// Task 
// 1:convert to JSON
// 2:Add into second File
// 3:readfile
// 4:Again convert into org obj
// 5:console.log

const fs = require('fs');

const bioData = {
    name: "Dip",
    occupation: "Fresher",
    channel: "BITW"
};

const jsonObj = JSON.stringify(bioData);

// fs.writeFile("json1.json", jsonObj, (err) => {
//     console.log("done");
// });

fs.readFile("json1.json", "utf-8", (err, data) => {
    console.log(data);
    const objData = JSON.parse(jsonObj);
    console.log(objData);

});