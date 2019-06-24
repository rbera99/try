var express = require('express');
var bodyParser = require('body-parser');
var app     = express();

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "riddhik.mysql.database.azure.com",
  user: "riddhik@riddhik",
  password: "1-Livelyriver",
  database: "mydb"
});

n1="riddhik";
n2="xyz";
//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.
app.use(bodyParser.urlencoded({ extended: true })); 

//app.use(express.bodyParser());

app.post('/myaction', function(req, res) {
  n1=req.body.name;
n2=req.body.email;
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
var sql = "INSERT INTO users (name, email) VALUES (n1,n2)";
  con.query(sql, function (err, result) {
    if (err) throw err;
   
  });
});

app.listen(8080, function() {
  console.log('Server running at http://127.0.0.1:8080/');
});