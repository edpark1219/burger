var orm = require('../config/orm.js');

var burger = {
  insertOne: function(some_val, cb){
    orm.insertOne('burgers', 'burger_name', some_val, function(res){
      cb(res);
    });
  },
  selectAll: function(cb){
    orm.selectAll('burgers', function(res){
      cb(res);
    });
  },
  updateOne: function(user_id, cb){
    orm.updateOne('burgers', 'devoured', TRUE , 'id', user_id, function(res){
      cb(res);
    });
  },

}

module.exports = burger;