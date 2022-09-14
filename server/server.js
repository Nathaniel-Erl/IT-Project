const express = require("express");
const res = require("express/lib/response");
const app = express();


app.get("/",(req,res) =>{
    console.log("here");
    res.send("Hi");
});



app.listen(3000);

