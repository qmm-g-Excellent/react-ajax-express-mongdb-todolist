const db  = require("../models/db");

exports.save = function(req,res){
   db.insertItem(req.body, function(result){
       res.json("").end();
   })
};

exports.findAll = function(req,res){
    db.findAll(function(result){
        res.json(result).end();
    });
};

exports.remove = function(req,res){
    db.remove(res.body,function(result){
        res.json(result);
    })
};

