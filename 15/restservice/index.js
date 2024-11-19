var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var cors = require('cors');
var multer=require('multer');

var app = express();
app.use(cors());

var port = 8080;
var url = 'mongodb://127.0.0.1:27017/mymongodb';
var databasename = 'mymongodb';
var database; 


app.get('/retrieve', function (req, res) {
  database.collection("students").find({}).toArray((err, result) => {
   if (err) throw err;
    console.log(result);
    res.send(result);
  });

})


app.post('/insert', multer().none(), function (req, res) {
  database.collection("students").insertOne({
      id:req.body.id,
      name:req.body.sname,
      imarks:req.body.imarks,
      emarks:req.body.emarks
    });
    res.json('Inserted');
})

app.delete('/delete', function (req, res) {
  database.collection("students").deleteOne({
      id:req.query.id
    });
    res.json('Deleted');
})

app.put('/update', multer().none(), function (req, res) {
  var query={id:req.body.id};
  var newvalue = {$set:{imarks:req.body.imarks}};
  console.log(query);
  console.log(newvalue);
  database.collection("students").updateOne(query, newvalue);
  //database.collection("students").updateOne({id:1001}, { $set: {name:'Graham'}});
    res.json('Updated');
  
})

app.listen(port, ()=>{
  console.log('Mongo Connection Initiated...');
  MongoClient.connect(url, function (err, client) {
   database = client.db(databasename);
    console.log('Mongo Connected');
      });
      
});
