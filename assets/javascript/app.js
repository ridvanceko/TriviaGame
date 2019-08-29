$(document).ready(function () {
  //  console.log( "ready!" );

/*
1) create html 
2) create a area for question and answer
3) Start timer when click the "Start the Game" 
4) Choose an answer via radio "make sure only one choice"
5) After times up display results
6) Before times up display result when click on "Done" button
*/
  var questionCounter = 0;
  var time = 26;
  var correctGuesses = 0;
  var wrongGuesses = 0;

  // question & answer array
  var questions = [
    {
      question1: "What was Mohammed Ali’s birth name?",
      choices: ["Joe Frazier", "Cassius Clay", "Michael Spinks", "Larry Holmes"],
      correctAnswer: "Cassius Clay",

    }, 
    
    {
      question2: "Lionel Messi is associated with which sport?",
      choices: ["Football", "MMA", "Basketball", "Tennis"],
      correctAnswer: "Football",
    },
    
    {
      question3: "Mount Everest is found in which mountain range?",
      choices: ["Rocky Mountains", "Zagros", "Hindu Kush", " The Himalayas"],
      correctAnswer: "The Himalayas",
    },
    
    {
      question4: "How many strings does a violin have?",
      choices: ["3", "4", "5", "6"],
      correctAnswer: "4",
    },
    
    {
      question5: "In Greek mythology, who turned all that he touched into gold?",
      choices: ["Apollo", " Silenus", "Midas", "Dionysus"],
      correctAnswer: "Midas",
    }];

   $("#startgame").click(function(){
    run();
    $(".container").css("display","block");
    $("#startgame").css("display", "none");

  //  $("this").hide();

   });

  
    var intervalId;

    function run() {
      // """"Debugging solution"""""
      clearInterval(intervalId);
      // """"Debugging solution"""""
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

      time--;

      $("#show-number").html("<h2>" + time + "</h2>");

      if (time === 0) {

        stop();
      }
    }

    function stop() {

      clearInterval(intervalId);
    }

   





  });