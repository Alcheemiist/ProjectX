#!/usr/bin/env node

var express = require("express"),
    app = express(),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    methodOverride = require('method-override'),
    hostname = process.env.HOSTNAME || 'localhost' || '10.32.122.207',
    port = parseInt(process.env.PORT, 10) || 3000,
    publicDir = process.argv[2] || __dirname + '/public',
    path = require('path');

app.get("/", function (req, res) {
  res.sendFile(path.join(publicDir, "index.html"));

  
  res.status(200);
});

app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(publicDir));
app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));

console.log("Simple static server showing %s listening at http://%s:%s", publicDir, hostname, port);
app.listen(port, hostname);