//Day 4.2 Events Module
//Node.js has a built-in module, called "Events",
//where you can create-, fire-, and listen for- your own events.



const EventsEmmiter = require("events");

let event = new EventsEmmiter;

//Ex-1 Registering for the event to be fired only one time using once.

// event.on("simpleOnClick", (n) => {
//     console.log(n);
// });
// event.emit("simpleOnClick", 786);


//Ex-2 Create an event emitter instance and  Register a couple of callbacks
// event.on("simpleOnClick", () => {
//     console.log("My name is Dipesh");
// });

// event.on("simpleOnClick", () => {
//     console.log("occupation is Fresher");
// });

// event.on("simpleOnClick", () => {
//     console.log("Creativity");
// });

// event.emit("simpleOnClick");


//Ex-3 Registering for the event with callback parameters
// event.on("checkPage", (sc, msg) => {
//     console.log(`status code is ${sc} and this is running ${msg}`);
// })

// event.emit("checkPage", 200, "ok");