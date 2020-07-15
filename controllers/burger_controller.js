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
