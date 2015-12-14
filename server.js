var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, '/')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
	res.sendfile('./views/display.html');
});

app.get('/login', function(req, res) {
  res.sendfile('./views/login.html');
});

app.get('/contacts', function(req, res) {
  res.sendfile('./views/contacts.html');
});

app.get('/contacts/data', function(req, res){
  fs.readFile('./data/contacts.json', function(err, data){
  	if(err){
  		console.log(err);
  	}
  	res.setHeader('Cache-control', 'no-cache');
  	res.json(JSON.parse(data));
  })
});

app.get('/people', function(req, res){
  res.sendfile('./views/people.html');
});

app.get('/register', function(req, res) {
  res.sendfile('./views/register.html');
});

app.get('/edit', function(req, res) {
  res.sendfile('./views/register.html');
});

app.get('/people/new', function(req, res) {
	res.sendfile('./views/people_new.html');
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
