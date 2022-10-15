//Day1.1 CRUD operation using synchronous way


// const fs = require('fs');

//Creating  a newFile
// fs.writeFileSync('read.txt', "this is where i will make api proj");
// fs.writeFileSync('read.txt', "i ams best in the world");

// fs.appendFileSync("read.txt", 'consistency is key for success');

// const buf_data = fs.readFileSync("read.txt");

// output

{/* <Buffer 69 20 61 6d 20 62 65 73 74 20 69 6e 20 74 68 65 20 77 6f 72 6c 64 63 6f 6e 73 69 73 74 65 6e 63 79 20 69 73 20 6b 65 79 20 66 6f 72 20 73 75 63 63 65 ... 62 more bytes> */ }

// Nodejs include an additional datafile called as buffer
// (not available in browser javascript);
// buffer is mainly used to store binary data,
// while reading from a file  or receiving packets over the network

// let org_data = buf_data.toString();
// console.log(org_data);