var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var server = require('https').Server(app);
var port = 80;
var helmet = require('helmet');

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'https://localhost:80');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
	next();
});

//pre-flight requests
app.options('*', function(req, res) {
	res.send(200);
});

server.listen(port, (err) => {
//if (err) {
//	throw err;
//}
	/* eslint-disable no-console */
	console.log('Node Endpoints working :)');
});

module.exports = server;

app.all('/', (req, res) => {
	if (req.method === 'GET') {
		console.log(req.body);
		res.status(200);
		res.send(`GET Request Success!!!`);
	} else if (req.method === 'POST') {
		console.log(req.body);
		res.status(200);
		res.send(`${req.body.input.InputSuccess} is the Best!!!`);
	} else if (req.method === 'PUT') {
		console.log(req.body);
		res.status(200);
		res.send(`PUT Request Success!!!`);
	}
});