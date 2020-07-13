var connection = require("./connection.js");

var orm = {
  selectAll: function (tableInput, cb) {
    connection.query;
  },
  insertOne: function (table, data, cb) {
    connection.query(`INSERT INTO ${table} SET ?`, data, function (err, res) {
      if (err) {
        return cb(err);
      }
      cb(null, res);
    });
  },
  updateOne: function () {
    connection.query;
  },
};

module.exports = orm;
