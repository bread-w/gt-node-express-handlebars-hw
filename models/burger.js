var orm = require("../config/orm.js");

const burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (data) {
      cb(data);
    });
  },

  insertOne: function (name, cb) {
    event.preventDefault();
    var payload = { burger_name: name };
    orm.insertOne("burgers", payload, function (error, data) {
      if (error) {
        return cb(error);
      }
      cb(data);
    });
  },

  updateOne: function (objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function (err, data) {
      if (err) {
        return cb(err);
      }
      cb(data);
    });
  },
};

module.exports = burger;