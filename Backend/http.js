// step 1
const http = require('http');

let data = {
    name : "Shlok",
    age: 21
}


// step 2
let server = http.createServer((req, res)=>{

        console.log(req.url);
        console.log(req.method);

        if (req.url == "/data" && req.method == "GET") {
            res.setHeader("Content-Type" , "application/json");
            // res.setHeader("Shlok" , "Hey this is shlok");
            res.end(JSON.stringify(data));
        }

        else if(req.url = "/data" && req.method == "POST"){
            res.end("This is /demo with POST method");
        }

        else if(req.url = "/login" && req.method == "GET"){
            res.end("This is /login with GET method");
        }


        else{
            res.end("Nothing");
        }


});


// 1024 >
// step 3
server.listen(8080 ,()=>{
    console.log("server1 listing on port 8080");
});

