<<<<<<< HEAD

// // Catch all
// app.get("/",function(req,res){
//   res.sendFile(path.join(__dirname, "/app/public/home.html"));
// });
// // Survey page
// app.get("/survey",function(req,res){
//   res.sendFile(path.join(__dirname, "/app/public/survey.html"));
// });
// // Home
// app.get("/home",function(req,res){
//   res.sendFile(path.join(__dirname, "/app/public/home.html"));
// });
=======
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
>>>>>>> 3918214e8d4b03df9987145d2b24129c415c5f59
