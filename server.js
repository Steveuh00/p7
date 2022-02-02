var express = require('express');
var bodyParser = require('body-parser')
var apiRouter = require('./apiRouter').router;

var server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.get('/', function (req, res){
res.setHeader('Content-type', 'text/html');
res.status(200).send("bonjour")
});

server.use('/api/', apiRouter)

server.listen(3000, function(){
console.log('server en ecoute')
});