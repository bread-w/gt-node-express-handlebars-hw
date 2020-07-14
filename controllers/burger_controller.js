var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/burger", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.patch("/burger", function (req, res) {});

router.post("/burger", function (req, res) {
  if (typeof req.body === "object" && typeof req.body.name === "string") {
    burger.create(req.body.name, function (error, data) {
      if (error) {
        return res.sendStatus(500);
      }
      res.sendStatus(201);
    });
  }
});

module.exports = router;
