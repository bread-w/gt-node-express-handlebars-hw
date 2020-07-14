var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");
const connection = require("../config/connection.js");

router.get("/burger", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burger", function (req, res) {
  if (typeof req.body === "object" && typeof req.body.name === "string") {
    burger.insertOne(req.body.name, function (error, data) {
      if (error) {
        return res.sendStatus(500);
      }
      res.sendStatus(201);
    });
  }
});

router.put("/burger/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  // change boolean value from 0 -> 1

  console.log(condition);
  burger.updateOne(1, condition, function (err, data) {
    if (error) {
      return res.sendStatus(500);
    }
    console.log(data);
    res.sendStatus(201);
  });
});

module.exports = router;
