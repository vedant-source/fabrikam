var express = require("express"); //lib-----Node Module
var app = express(); // will create app object from express package

var onAboutUs = function (req, res) {
  res.send("Chief Mentor :Ravi Tambade");
};
var onDefault = function (req, res) {
  res.send(
    "<h1>Fabrikam</h1>" +
      "<hr/>" +
      "<ol>" +
      " <li>Access Human Resource,</li>" +
      " <li>Accounting</li>" +
      " <li>project Management</li>" +
      " <li>Corporate Training</li>" +
      "</ol>"
  );
};
app.get("/", onDefault); // Request handler functions are registered
app.get("/aboutus", onAboutUs); // Request handler functions are registered
var server = app.listen(8081);
console.log("Server is running on port 8081");
