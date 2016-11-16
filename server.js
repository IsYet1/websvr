var express = require("express");
var app = express();

var distPath = '../ng/OxyDof/dist'

//Setup DIST folder
app.use(express.static(distPath));

/* serves main page */
app.get("/", function (req, res) {
  res.sendfile(distPath + '/index.htm')
  // res.sendfile('../../ng/cli00/dist/index.html')
});

app.post("/user/add", function (req, res) {
  /* some server side logic */
  res.send("OK");
});

/* serves all the static files */
app.get(/^(.+)$/, function (req, res) {
  console.log('static file request : ' + req.params);
  res.sendfile(__dirname + req.params[0]);
});

var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("Listening on " + port);
});