// import { ESLint } from "eslint";

// const readline = require("readline");

const fs = require("fs");
const http = require("http");

let homeContent = "";
let projectContent = "";
let registrationContent = "";
let styleContent = "";
let scriptContent = "";

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});

fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  projectContent = project;
});

fs.readFile("registration.html", (err, data) => {
    if (err) {
      throw err;
    }
    registrationContent = data;
  });

fs.readFile("style.css", (err, data) => {
    if (err) {
      throw err;
    }
    styleContent = data;
  });

  fs.readFile("script.js", (err, data) => {
    if (err) {
      throw err;
    }
    scriptContent = data;
  });

const args = require("minimist")(process.argv.slice(2), {
    alias: {
        p: "port",        
    },
});
let port = 3000;
if(args.port != undefined) port=args.port


http
  .createServer((request, response) => {
    let url = request.url;
    switch (url) {
        case "/registration":
            response.writeHeader(200, { "Content-Type": "text/html" });
            response.write(registrationContent);
            response.end();
            break;
        case "/style":
            response.writeHeader(200, { "Content-Type": "text/css" });
            response.write(styleContent);
            response.end();
            break;
        case "/script":
            response.writeHeader(200, { "Content-Type": "text/js" });
            response.write(scriptContent);
            response.end();
            break;
        case "/project":
            response.writeHeader(200, { "Content-Type": "text/html" });
            response.write(projectContent);
            response.end();
            break;
        default:
            response.writeHeader(200, { "Content-Type": "text/html" });
            response.write(homeContent);
            response.end();
            break;
    }
  })
  .listen(port);





// const lineDetail = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// lineDetail.question("Enter your name = ",(name) =>{
//     console.log(`Welcome, ${name}`);
//     lineDetail.close();
// });

// File Systems

// fs.appendFile("simple.txt","Welcome to NodeJS!",(err)=>{
//     if(err) throw err;
//     console.log("File Updated!");
// });

// fs.readFile("simple.txt", (err,data) => {
//     if(err) throw err;
//     console.log(data.toString());
// });

// Server package

// const server = http.createServer((req, res) => {
  
//     // fs.readFile("simple.txt",(err,data) => {
//     //     if(err) throw err;
//     //     res.end(data);
//     // });

//     const stream = fs.createReadStream("simple.txt", (err, data) => {
//         if(err) throw err;
//         stream.pipe(res);    
//     });
// });

// server.listen(3000);