const express = require('express');

const app = express();



app.use(express.json());


// Endpoint

app.get("/data", (req, res) => {

    console.log(req.url);
    console.log(req.query);
    // res.send(req.query);
    // ! this is first way to get data from the client with help of QueryString
    if(req.query.user === "admin" && req.query.password === "1234"){
        res.send({ method: "GET", path: "/data" });
    }
    else{
        res.sendStatus(401);
        // res.send("unauthorized");
    }

    // res.send("Hey");
})


app.post("/data/:user/:password", (req, res) => {
    // ! THis is the second way to get the data from the client with the help of paramaters
    console.log(req.params);
    res.send({ method: req.method, path: req.url });
})

app.put("/data", (req, res) => {
    res.send({ method: req.method, path: req.url });

})

app.patch("/data", (req, res) => {
    res.send({ method: req.method, path: req.url });
})

app.delete("/data", (req, res) => {
    res.send({ method: req.method, path: req.url });

})


app.get("/user" , (req,res)=>{

    // ! This is last way to get data from the Client with help of Body parser
    console.log(req.body);
    res.send("Hello this is /user endpoint");
})






app.listen(8080, () => {
    console.log("Express server listening on 8080");
});


// * Middleware
// * Rest API and CRUD operations
// * Mongoose
// * MVC

