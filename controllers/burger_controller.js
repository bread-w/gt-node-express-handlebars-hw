// var express = require("express");
// var router = express.Router();
// var burger = require("../models/burger.js");
// // var connection = require("../config/connection.js");

// router.get("/", function (req, res) {
//   burger.selectAll(function (data) {
//     var hbsObject = {
//       burgers: data,
//     };
//     console.log(hbsObject);
//     res.render("index", { burger: data });
//   });
// });

// router.post("/api/burgers", function (req, res) {
//   if (typeof req.body === "object" && typeof req.body.name === "string") {
//     burger.insertOne(req.body.name, function (err, data) {
//       if (err) {
//         return res.sendStatus(500);
//       }
//       // res.sendStatus(201).redirect("/api/burgers");
//       res.json({ id: data.insertId });
//     });
//   }
// });

// router.put("/api/burgers/:id", function (req, res) {
//   // var condition = "id = " + req.params.id;
//   var condition = parseInt(req.params.id);
//   // change boolean value from 0 -> 1

//   console.log(condition);
//   burger.updateOne(1, condition, function (err, data) {
//     if (err) {
//       console.log(err);
//       return res.sendStatus(500);
//     } else {
//       console.log(data);
//     }
//     res.status(201).redirect("/api/burgers");
//   });
// });

// module.exports = router;

// Requirements to set up routes
const burger = require("../models/burger.js");
const express = require("express");
const router = express.Router();

// View route
router.get("/", (req, res) => {
  burger.selectAll(function (data) {
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
// Post route to add the burgers
router.post("/api/burgers", (req, res) => {
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    (result) => {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    }
  );
});
// PUT route to updated the burgers devoured boolean
router.put("/api/burgers/:id", (req, res) => {
  const condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne(
    {
      devoured: req.body.devoured,
    },
    condition,
    (result) => {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

// Export routes for server.js to use.
module.exports = router;
