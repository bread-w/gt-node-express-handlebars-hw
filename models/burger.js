var orm = require("../config/orm.js");

function create(name, cb) {
  var payload = { burger_name: name };
  orm.insertOne("burgers", payload, function (error, data) {
    if (error) {
      return cb(error);
    }
    cb(null, data);
  });
}

module.exports = { create };
