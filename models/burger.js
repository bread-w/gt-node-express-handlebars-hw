var orm = require("../config/orm.js");

const burger = {
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },

  //   create: function (name, cb) {
  //     var payload = { burger_name: name };
  //     orm.insertOne("burgers", payload, function (error, data) {
  //       if (error) {
  //         return cb(error);
  //       }
  //       cb(null, data);
  //     });
  //   },
};

module.exports = burger;
