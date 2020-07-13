var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.all(function (data) {
    var burgerObject = {
      burgers: data,
    };
    console.log(burgerObject);
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
