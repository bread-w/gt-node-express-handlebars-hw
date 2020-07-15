// Import MySQL connection.
const connection = require("../config/connection.js");

// This looper creates an array of question marks to use for queries. It was loaned by the GT repo and is absolutely genius.
function printQuestionMarks(num) {
  const arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax. This was also pulled from the GT repo, and it's also genius.
function objToSql(ob) {
  const arr = [];
  for (let key in ob) {
    let value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  // translate array of strings to a single comma-separated string
  return arr.toString();
}

// This object holds all of the SQL functions the code will be executing within the controller
const orm = {
  // Read
  selectAll: (tableInput, cb) => {
    const queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // Create
  insertOne: (table, cols, vals, cb) => {
    let queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";
    console.log(queryString);
    connection.query(queryString, vals, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // Update
  updateOne: (table, objColVals, condition, cb) => {
    let queryString = "UPDATE " + table;
    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;
    console.log(queryString);
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

// Export the orm object for the model (burger.js).
module.exports = orm;
