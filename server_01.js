//var app = require('express').createServer();
//app.get('/', function(req, res) {
//    res.send('Welcome to Khurram App.');
//});


var express = require('express');
var login = require('./serverside/login.js');
var app = express();
    
    
app.get("/index.html", function(req, res) {
  res.redirect("/index.html");
  //res.send('home page');
});

app.get("/login",function(req,res){
    login(req,res);
});

app.get("*",function(req,res){
    notFound(res);
})

function notFound(res)
{
    res.send('<h3>Page not found.</h3>',404);
}

app.configure(function(){
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/public'));
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
  app.use(app.router);
});

app.listen(process.env.VCAP_APP_PORT || 3000);
console.log('node http server listening on port',3000);
//  mongodb://<dbuser>:<dbpassword>@ds045037.mongolab.com:45037/tutorials