 const express = require("express");
 const path = require("path");
 const bodyParser = require("body-parser");

 const app = new  express();

 app.use(bodyParser.json());
 app.use(express.static("./views"));
 app.use(express.static(path.join(__dirname, "public")))
 // app.use(express.static("public");

 app.listen(3000,()=>{
     console.log(" server start on port 3000 success!");
 });

 app.get("/a" , (req,res)=>{
     res.send("first page");
 })