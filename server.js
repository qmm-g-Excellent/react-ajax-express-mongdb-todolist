 const express =require("express");
 const path = require("path");
 const bodyParser = require("body-parser");
 // const db = require("");

 const app = new express();


 app.use(bodyParser.json());
 app.use(express.static("./views"));
 app.use(express.static(path.join(__dirname,"public"))); //  ???./

 app.listen(3000,()=>{
  console.log("web server start port on 3000");
 });

 app.use("/", require("./routes/index"));

