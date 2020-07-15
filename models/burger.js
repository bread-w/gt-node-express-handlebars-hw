// var orm = require("../config/orm.js");

// const burger = {
//   selectAll: function (cb) {
//     orm.selectAll("burgers", function (data) {
//       cb(data);
//     });
//   },

//   insertOne: function (name, cb) {
//     event.preventDefault();
//     var payload = { burger_name: name };
//     orm.insertOne("burgers", payload, function (error, data) {
//       if (error) {
//         return cb(error);
//       }
//       cb(data);
//     });
//   },

//   updateOne: function (objColVals, condition, cb) {
//     orm.updateOne("burgers", objColVals, condition, function (err, data) {
//       if (err) {
//         return cb(err);
//       }
//       cb(data);
//     });
//   },
// };

// module.exports = burger;

// Requiring the ORM methods made within config
const orm = require("../config/orm.js");

// Taking the perimeters passed through the ORM methods and assigning them into burger object for export to the controller
const burger = {
  selectAll: (cb) => {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: (cols, vals, cb) => {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  updateOne: (objColVals, condition, cb) => {
    orm.updateOne("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },
};

module.exports = burger;