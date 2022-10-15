//Day 4.3 Creating an online stream where you can read the input.txt file like youtube
// We need fs to read the file and server to show the response to it 
//IMPORTANT CONCEPT 
var fs = require('fs');

const http = require('http');

let server = http.createServer();


server.on('request', (req, res) => {
    //this is the old way of doing in this it is not streaming exactly  
    // fs.readFile('input.txt', "utf-8", (err, data) => {
    //     if (err) { return console.log(err); }
    //     console.log(data);
    //     res.end(data);
    // });

    //2nd way 
    //Reding from a stream
    //Create a readable stream
    //Handle stream events -> data, end, and error
    // The data load so quickly it look like in one go

    // const rstream = fs.createReadStream('input.txt');

    //Fetching the data in the form on chunk
    // rstream.on("data", (chunk) => {
    //     console.log(chunk.toString());
    //     res.write(chunk);

    // });
    //We have to end data after completing 
    // rstream.on("end", () => {
    //     res.end();
    // });

    // rstream.on("error", () => {
    //     res.end("Not Found");
    // })

    //3rd and simplest way
    const rstream = fs.createReadStream('input.txt');
    rstream.pipe(res);
});


server.listen(8000, "127.0.0.1");