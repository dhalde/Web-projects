// day 3.2(http) and 3.3(JS routing) About the http.createServer() method includes request and response parameters which is supplied by Node.js .

// The request object can be used to get the info about the curr HTTP req
// e.g url, request header, and data.

// The respnse obj can be used to send a response for a curr HTTP req.

// If the response from the HTTP server is supposed to be displayed as HTML,
// You shpud include an http header with the correct content type.

const http = require("http");
const fs = require("fs");

let server = http.createServer((req, res) => {
    // sychronous way of fetching api (In Sync we to fetch api in the start);
    const data = fs.readFileSync(`${__dirname}/userApi4/api.json`, "utf-8");
    console.log(data);
    const objData = JSON.parse(data);
    // gives the info about the page url
    console.log(req.url);

    if (req.url == "/") {
        res.end("Hello my server welcome to IT jungle");
    }
    else if (req.url == "/about") {
        res.end("My about page");
    }
    else if (req.url == "/contact") {
        res.end("My contact page");
    }

    //Creating api (to store or fetch API we need in the form of JSON)
    else if (req.url == "/userapi") {
        //asynchronous way of Fetching api
        // const data = fs.readFile(`${__dirname}/userApi/api.json`, "utf-8", (err, data) => {

        //     const objData = JSON.parse(data);
        //     res.writeHead(200, { "content-type": "application/json" })
        //     res.end(objData[0].title);
        // });

        res.end(objData[0].title);

    }
    else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.end(" page not found");
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening 8000 port");
});
