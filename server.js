var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');

var port = process.env.PORT || 8000;

app.use(bodyParser.json());

app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(port, function(){
  console.log("App listening on port " + port);
});

exports = module.exports = app;
