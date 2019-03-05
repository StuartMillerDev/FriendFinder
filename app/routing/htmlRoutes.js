module.exports=function(app){
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
}
