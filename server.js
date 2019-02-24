var express=require("express");
var path=require("path");
var PORT=process.env.PORT || 8080;
var app=express();
// app.use(express.static("/app/public"));
app.use("/public", express.static(__dirname + '/app/public'));
// Catch all
app.get("/",function(req,res){
  res.sendFile(path.join(__dirname, "/app/public/home.html"));
});
// Survey page
app.get("/survey",function(req,res){
  res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});
// Home
app.get("/home",function(req,res){
  res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.post("/api/friends",function(req,res){

});

app.get("/api/friends",function(req,res){

});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
