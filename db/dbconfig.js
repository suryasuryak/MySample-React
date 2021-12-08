

var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : "mysqlsft.mysql.database.azure.com",
  user     : "mysqladmin@mysqlsft",
  password : "Pass@123",
  database : 'express'
});

 
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });
  

  module.exports=connection