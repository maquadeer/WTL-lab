var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var cors = require('cors');

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

app.listen(port, ()=>{
  console.log('Mongo Connection Initiated...');
  MongoClient.connect(url, function (err, client) {
   database = client.db(databasename);
    console.log('Mongo Connected');
      });
      
});
