var friends=require("../data/friends.js");
module.exports=function(app){

  app.get("/api/friends",function(req,res){
    // This function compares an array to the other objects
    function compareAll(person){
      var temp=person.scores;
      var difference=[];
      var bestMatches=[];
      // Loop through each friend in the friends array
      friends.forEach(function(item){
        var scores=item.scores;
        // loop through each score in side the current friend
        scores.forEach(function(score){
          // compare each number at the current score
          var a=score;
          var b=temp.score;
          var c=Math.abs(a-b);
          difference.push(c);
        });
        // Math for matching best set of scores. the average of the absolute difference between scores should be as low as possible.
        // A perfect match will have almost no difference and average the same as the user.
        if(difference.length==10){
        bestMatches.push(calculateAverage(difference));
        }

      });
    }

    function calculateAverage(arr){
      var sum=0;
      arr.forEach(function(num){
        sum+=num;
      });
      var avg=sum/difference.length;
      return avg;
    }

    function addOne(person){
      friends.push(person);
    }
  });
  app.post("/api/friends",function(req,res){

  });
}
