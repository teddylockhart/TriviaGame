var startPage;
var triviaPage;
var resultsPage;


var trivia = {
  q1: ["The sky is blue.", "t"],
  q2: ["There are 365 days in a year.", "t"],
  q3: ["There are 42 ounces in a pound.", "f"],
  q4: ["The Declaration of Independence was created in 1745.", "f"],
  q5: ["Bananas are vegetables.", "f"]
};

function countdown () {
  var timeLeft = 120;
  var timer = setInterval(function() {
    timeLeft--;
    $("#timer").html(timeLeft);
    if (timeLeft <= 0)
      clearInterval(timer);
  }, 1000);

}


// Start Page Display

$(document).ready(function() {

$("#triviaPage").hide();
$("#resultsPage").hide();

// Events that occur because game starts

$("#start-button").click(startGame);

  function startGame() {
    $("#startPage").hide();
    $("#triviaPage").show();

    countdown();

    $("#triviaPage").append("<br>");
    $("#triviaPage").append(trivia.q1[0]);
    $("#triviaPage").append(trivia.q1[1]);
    $("#triviaPage").append("<br>");
    $("#triviaPage").append(trivia.q2[0]);
    $("#triviaPage").append(trivia.q2[1]);
  }


});