$(document).ready(function () {
  //  console.log( "ready!" );

  /*
  1) create html 
  2) create a area for question and answer
  3) Start timer when click the "Start the Game" 
  4) Choose an answer via radio "make sure only one choicess"
  5) After times up display results
  6) Before times up display result when click on "Done" button
  */


  // question & answer array
  var options = [
    {
      question: "What was Mohammed Ali’s birth name?",
      choicess: ["Joe Frazier", "Cassius Clay", "Michael Spinks", "Larry Holmes"],
      correctAnswer: "Cassius Clay",

    },

    {
      question: "Lionel Messi is associated with which sport?",
      choicess: ["Football", "MMA", "Basketball", "Tennis"],
      correctAnswer: "Football",
    },

    {
      question: "Mount Everest is found in which mountain range?",
      choicess: ["Rocky Mountains", "Zagros", "Hindu Kush", " The Himalayas"],
      correctAnswer: "The Himalayas",
    },

    {
      question: "How many strings does a violin have?",
      choicess: ["3", "4", "5", "6"],
      correctAnswer: "4",
    },

    {
      question: "In Greek mythology, who turned all that he touched into gold?",
      choicess: ["Apollo", " Silenus", "Midas", "Dionysus"],
      correctAnswer: "Midas",
    }];

  var userGuess = "";
  var running = false;
  var pick;
  var index;
  var newArray = [];
  var holder = [];
  var intervalId;
  var questionCounter = 0;
  var time = 6;
  var correctGuesses = 0;
  var wrongGuesses = 0;
  var unanswerCount = 0;
  var optCount = options.length;

  $("#reset").hide();


  $("#startgame").click(function () {
    time = 6;
    run();
    $(".container").css("display", "block");
    $("#startgame").css("display", "none");

    displayQuestion();
    for (var i = 0; i < options.length; i++) {
      holder.push(options[i]);
    }

  });

  function run() {
    // """"Debugging solution"""""
    clearInterval(intervalId);
    // """"Debugging solution"""""
    intervalId = setInterval(decrement, 1000);
  }

  function decrement() {
    time--;
    $("#show-number").html("<h2>" + time + "</h2>");
    if (time <= 0) {
      unanswerCount++;
      stop();
      endgame();
      time = 0;
    }
  }

  function stop() {
    clearInterval(intervalId);
  }



  function displayQuestion() {
    //random index in array with mathfloor
    index = Math.floor(Math.random() * options.length);
    pick = options[index];


    //  		console.log(pick.question); do not forget to try
    //iterate through answer array and display
    $("#questions").html("<h2>" + pick.question + "</h2>");
    for (var i = 0; i < pick.choicess.length; i++) {
      var userchoicess = $("<div>");
      userchoicess.addClass("answerchoicess");
      userchoicess.html(pick.choicess[i]);
      //assign array position to it so can check answer
      userchoicess.attr("data-guessvalue", pick.choicess[i]);
      $("#answerblock").append(userchoicess);
      
    }



    //click function to select answer and outcomes
    $(".answerchoicess").on("click", function () {
      userGuess = $(this).attr("data-guessvalue");

      //correct guess or wrong guess displays
      if (userGuess === pick.correctAnswer) {
        stop();
        correctGuesses++;

        userGuess = "";
        $("#answerblock").html("<p>Correct!</p>");
        endgame();

      } else {
        stop();
        wrongGuesses++;

        userGuess = "";
        $("#answerblock").html("<p>The correct answer is: " + pick.correctAnswer + "</p>");
        endgame();
      }
    })
  }

  function endgame() {
    newArray.push(pick);
    options.splice(index, 1);

    var nextquestion = setTimeout(function () {
      $("#answerblock").empty();
      time = 6;

      //run the score screen if all questions answered

      if ((wrongGuesses + correctGuesses + unanswerCount) === optCount) {
        $("#questions").empty();
        $("#questions").html("<h3>Game Over!  Here's how you did: </h3>");
        $("#answerblock").append('<h4 class="col-12"> Correct: ' + correctGuesses + "</h4>");
        $("#answerblock").append('<h4 class="col-12"> Incorrect: ' + wrongGuesses + "</h4>");
        $("#answerblock").append('<h4 class="col-12"> Unanswered: ' + unanswerCount + "</h4>");
        $("#reset").show();
        correctGuesses = 0;
        wrongGuesses = 0;
        unanswerCount = 0;

      } else {
        run();
        displayQuestion();

      }
    }, 2000);


  }

  $("#reset").on("click", function () {
    $("#reset").hide();
    $("#answerblock").empty();
    $("#questions").empty();
    for (var i = 0; i < holder.length; i++) {
      options.push(holder[i]);
    }
    time = 6;
    run();
    displayQuestion();

  })


});
