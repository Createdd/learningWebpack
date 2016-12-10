var express=require("express");
var path = require('path');
var app=express();
var port=process.env.PORT||3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res){
  res.sendFile("/index.html");
});

app.listen(port, ()=>{
  console.log("Listening on Port: "+port);
});//listen to port
