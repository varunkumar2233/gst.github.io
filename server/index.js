const express = require('express');
//const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
// parse application/json
//app.use(bodyParser.json());


//create database connection
const conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '123456',
  database: 'gstdatabase'
});
 
conn.on('error', function(err) {
  console.log("this is error")
  console.log("[mysql error]",err);
});
//connect to database
conn.connect((err) =>{
  if(err) throw err.sqlMessage
  console.log('Mysql Connected...' +'\n' +
  "Get all data : http://localhost:3000/api/stateId"+'\n'
  );
});
 
//show all articles
app.get('/api/gstregistration/:stateId',(req, res) => {
  let sql = "SELECT * FROM gstreg where stateId="+req.params.stateId;
  console.log(sql);
  
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    // console.log(results);
    
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    
  });
});
 

//Server listening
app.listen(3000,() =>{
  console.log('Server started on port 3000...');
});