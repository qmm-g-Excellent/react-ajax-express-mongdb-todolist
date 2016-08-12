const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/toDoList';

exports.insertItem = function(data,callback){
    MongoClient.connect(url,function(err,db){
        const collection =  db.collection("allItems");
        collection.insert(data,function(err, result){
            assert.equal(err,null);
            callback(result);
        });
        db.close();
    })
};

exports.findAll = function(callback){
    MongoClient.connect(url,function(err ,db){
        const collection = db.collection("allItems");
        collection.find({}).toArray(function(err,docs){
            assert.equal(err,null);
           callback(docs);
        });
        db.close();
    })
};

exports.remove = function(item,callback){
    MongoClient.connect(url,function(err,db){
        const collection = db.collection("allItems");
        collection.deleteOne(item,function(err, result){
            assert.equal(err,null);
            callback(result);
        });
        db.close();
    })
};