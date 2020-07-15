var connection = require("./connection.js");

var orm = {
  selectAll: function (tableInput, cb) {
    var readBurgers = "SELECT * FROM " + tableInput + ";";
    connection.query(readBurgers, [tableInput], function (err, res) {
      if (err) throw err;
      cb(res);
    });
  },
  insertOne: function (table, data, cb) {
    connection.query(`INSERT INTO ${table} SET ?`, data, function (err, res) {
      if (err) {
        return cb(err);
      }
      cb(null, res);
    });
  },
  updateOne: function (table, objColVals, condition, cb) {
    var updateData = "UPDATE " + table;
    updateData += " SET devoured=";
    updateData += objColVals;
    updateData += " WHERE id=";
    updateData += condition;

    connection.query(updateData, function (err, res) {
      if (err) {
        return cb(err);
      }
      cb(null, res);
    });
  },
};

module.exports = orm;
