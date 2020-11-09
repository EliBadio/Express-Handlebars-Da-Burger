let orm = require('../config/orm.js');

let burger = {
  selectAll: cb => {
    orm.selectAll('burgers', res => {
      cb(res);
    });
  },
  insertOne: (vals, cb) => {
    orm.insertOne('burgers', 'burger_name', vals, res => {
      cb(res);
    });
  },
  updateOne: (colNewVal, condition, cb) => {
    orm.updateOne('burgers', colNewVal, condition, res => {
      cb(res);
    });
  },
};

module.exports = burger; 
