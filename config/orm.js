var connection = require("./connection.js");

var orm = {

	selectAll: function(table, cb){
    connection.query('SELECT *  FROM ' + table + ';', function(err, result){
      cb(result);
    });
  },

	insertOne: function(table, col1, val1, cb){
    connection.query('INSERT INTO ' + table + ' ( ' + col1 + ' ) ' + ' VALUES (?)', [val1], function(err, result){
      cb(result);
    });
  },

	updateOne: function(table, col1, col_val, column, col_param, cb){
    connection.query('UPDATE ' + table + ' SET ' + col1 + ' = ? WHERE ' + column + ' = ?', [col_val, col_param], function(err, result){
      cb(result);
    });
  }

}


module.exports = orm;