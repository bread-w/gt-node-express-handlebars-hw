var orm = require("../config/orm.js");

const burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (data) {
      cb(data);
    });
  },

  insertOne: function (name, cb) {
    var payload = { burger_name: name };
    orm.insertOne("burgers", payload, function (error, data) {
      if (error) {
        return cb(error);
      }
      cb(null, data);
    });
  },

  updateOne: function (objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function (err, data) {
      if (err) {
        return cb(err);
      }
      cb(null, data);
    });
  },
};

module.exports = burger;
