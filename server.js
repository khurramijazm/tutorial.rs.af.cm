//Express Framework is built on top of node.js and Sencha Labs Connect Middle ware. 
var express = require('express');
// behind the scenes creates require('http').createServer()
var app = express();
// 1st Middleware used to log every request only when enviornment is development.
//app.use(express.logger('dev'));
// gzip the response for happy fast browsers i.e Chrome, Safari, Firefox etc. 
//app.use(express.compress());
// Time taken by the server to process the request.
//app.use(express.responseTime());
// Serve static contents from the public directory
app.use(express.static(__dirname + '/public'));
// listen on port 3000 , I use free hosting from appfog on Rackspace Cloud infrastructure thats why the // port is 3000 in all the examples. 

app.use("/",function(req,res){});
app.listen(3000)