console.log("Loaded friends.js");

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

var friends=[
  {
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      1,
      2,
      3,
      4,
      5,
      1,
      2,
      3,
      4,
      5
    ]
},
{
"name":"Rick",
"photo":"https://upload.wikimedia.org/wikipedia/en/e/e9/Rick_and_Morty_characters_-_Rick_Sanchez.jpg",
"scores":[
    1,
    2,
    3,
    4,
    5,
    5,
    4,
    3,
    2,
    1
  ]
},
{
"name":"Morty",
"photo":"https://upload.wikimedia.org/wikipedia/en/d/d7/Rick_and_Morty_characters_-_Morty_Smith.jpg",
"scores":[
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3
  ]
}

];
