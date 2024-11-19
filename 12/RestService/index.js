var express = require('express');
var cors = require('cors');
var fs = require("fs");

var app = express();
app.use(cors());

app.get('/students', function (req, res) {
    fs.readFile( __dirname + "/" + "students.json", 'utf8', function (err, data) {
     var marksdata = JSON.parse(data);
     console.log( marksdata );
     res.end( JSON.stringify(marksdata));
    });
 })
 
 app.get('/imarks', function (req, res) {
    fs.readFile( __dirname + "/" + "imarks.json", 'utf8', function (err, data) {
     var marksdata = JSON.parse(data);
     console.log( marksdata );
     res.end( JSON.stringify(marksdata));
    });
 })

 app.get('/emarks', function (req, res) {
    fs.readFile( __dirname + "/" + "emarks.json", 'utf8', function (err, data) {
     var marksdata = JSON.parse(data);
     console.log( marksdata );
     res.end( JSON.stringify(marksdata));
    });
 })
 
 app.listen(8080);
 