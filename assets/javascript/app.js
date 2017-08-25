var startPage;
var triviaPage;
var resultsPage;


var trivia = [
  {
    question: "Who is the inventor of instant ramen?",
    option: ["Momofuku Ando","Shigetoshi Nakamura","Keizo Shimamoto","Samanosuke Akechi"],
    answer: "1"
  },

  {
    question: "Which city hosts the ramen museum?",
    option: ["Tokyo","Kyoto","Yokohama","Osaka"],
    answer: "3"
  },

  {
    question: "Which style of ramen is from Tokyo?",
    option: ["Shio","Miso","Shoyu","Tonkatsu"],
    answer: "3"
  },

  {
    question: "Which style of ramen is from Fukuoka?",
    option: ["Shio","Miso","Shoyu","Tonkatsu"],
    answer: "4"
  },

  {
    question: "Which style of ramen is from Sapporo?",
    option: ["Shio","Miso","Shoyu","Tonkatsu"],
    answer: "2"
  }

];

var triviaIndex = 0;

var correct = 0;
var incorrect = 0;
var unanswered = 0;


function countdown () {
  var timeLeft = 120;
  var timer = setInterval(function() {
    timeLeft--;
    $("#timer").html(timeLeft);
    if (timeLeft <= 0) {
      clearInterval(timer);
      $("#triviaPage").hide();
      $("#resultsPage").show();
    }
  }, 1000);

}

function Questions() {
  // If there are still more questions, render the next one.
  if (triviaIndex <= (trivia.length - 1)) {
    $("#question").html(trivia[triviaIndex].question);
    $("#a1").html("1: " + trivia[triviaIndex].option[0] + "<br>");
    $("#a2").html("2: " + trivia[triviaIndex].option[1] + "<br>");
    $("#a3").html("3: " + trivia[triviaIndex].option[2] + "<br>");
    $("#a4").html("4: " + trivia[triviaIndex].option[3] + "<br>");
  }
  // If there aren't, render the end game screen.
  else {
    $("#triviaPage").hide();
    $("#resultsPage").show();
  }
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
    Questions();

    // When the user presses a key, it will run the following function...
    document.onkeyup = function(event) {

      // If there are no more questions, stop the function.
      if (triviaIndex === trivia.length) {
        return;
      }

      var userInput = String.fromCharCode(event.keyCode).toLowerCase();

      if (userInput === "1" || userInput === "2" || userInput === "3" || userInput === "4") {

        if (userInput === trivia[triviaIndex].answer) {
          correct++;
          $("#correct").html(correct);
        }
        else {
          incorrect++;
          $("#incorrect").html(incorrect);
          ;
        }

        triviaIndex++;
        Questions();

      }

    };

  }

});