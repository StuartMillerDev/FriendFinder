$("#submitSurvey").submit(function(){
var meh=[];
$(".custome-select").each(function(){
  var temp=$(this).val();
  meh.push(temp);
  });
  console.log(meh);
});


// HERE
