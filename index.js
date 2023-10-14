// http api server using built in module http in node
const http = require("http");
const fs = require('fs');
const url = require('url')

// createServer fxn is used to creates a webserver
// It takes a callback fxn as a parameter which is used to process the incoming request 
// This callback fxn runs whenever an incoming request hits our server . The req parameter of callback fxn takes up an object which contains all the info about the requesting client side(Basically metadata of client side) 
const myServer = http.createServer((req, res)=>{
    if(req.url==='/favicon.ico'){
        res.end()
    }
   // console.log(req.headers);
    console.log("New Req rec")
    const log = `${Date.now()}: New Req received \n`; 
    const myUrl = url.parse(req.url)
    fs.appendFile('log.txt', log, (err, data)=>{
        // instead of a text if you send the whole html as a response . It would be called server side rendering
   // res.end("Hello form server")

   // Creating a multiroute url server
   switch(myUrl.pathname){
    case "/":
        res.end("Home Page");
        break;
    case "/about":
        res.end("I am Abhishek Pandey")
        break;
    default:
        res.end("404 Not found")
   }
    })
    
});

// every server requires a port number. Here on our local host we have initialized this port number as 8000
myServer.listen(8000, ()=> console.log("Server Started"))

// ctrl + c to close a server

