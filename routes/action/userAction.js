const db  = require("../models/db");

exports.save = function(req,res){
   db.insertItem(req.body, function(result){
       console.log("bdidbi");
       res.json("").end();
   })
};

exports.findAll = function(req,res){
    db.findAll(function(result){
        res.json(result).end();
    });
};


