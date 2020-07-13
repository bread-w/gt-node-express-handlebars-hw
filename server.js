var express = require("express");
var burgerController = require("./controllers/burger_controller.js");

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
  response.send("Hello World!");
});

app.use("/api", burgerController);

app.listen(PORT, function () {
  console.log("App now listening at localhost:" + PORT);
});
