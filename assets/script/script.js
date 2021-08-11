var timer = 0;
var duration = 30;
var display = document.querySelector("#time");
var questionTracker = 0; //Start of first question
var selectedAnswer = "";
var score = 0;
var welcome = document.getElementById("welcome");
var questionCard = document.getElementById("question-card");
var displayResult = document.getElementById("result");
var ansStatus = document.getElementById("ans-status");
var scre = document.getElementById("score");
var nxtQues = document.getElementById("next-que");
var leaderBoard = document.getElementById("leaderboard");
scre.innerHTML = `Score: ${score}`;

//initialize leaderboard
var scoreTable = document.getElementById("score-table");
scoreTable.innerHTML = "";
var leaderBoardScore = JSON.parse(localStorage.getItem("quiz"));
if (leaderBoardScore) {
  var trows = leaderBoardScore.map((q) => {
    return `<tr><td>${q.name}</td><td>${q.score}</td>`;
  });
  scoreTable.innerHTML = trows.join("");
}

console.log("initial score: " + score);
//array for questions
const questionArray = [
  //array of quiz questions
  {
    question: "Joey played Dr. Drake Ramoray on which soap opera show?",
    options: [
      "Stranger Things",
      "Days of Our Lives",
      "Breaking Bad",
      "Prison Break",
    ],
    answer: "Days of Our Lives",
  },

  {
    question: "Phoebe’s scientist boyfriend David worked in what city?",
    options: ["New York", "Miami", "Sunnyvale", "Minsk"],
    answer: "Minsk",
  },
  {
    question: "What color is Monica’s apartment?",
    options: ["Blue", "Red", "Pink", "Purple"],
    answer: "Purple",
  },
  {
    question: "Joey and Chandler’s TV guide is addressed to who?",
    options: [
      "Miss Chanandler Bong",
      "Mr Candle Bing",
      "Mr Chandler Bong ",
      "Joey Tribbiani",
    ],
    answer: "Miss Chanandler Bong",
  },
  {
    question: " Which character famously said, “PIVOT?”?",
    options: ["Rachel", "Joey", "Ross", "Gunther"],
    answer: "Ross",
  },
  {
    question:
      "Brad Pitt and David Schwimmer’s characters cofounded what club in high school?",
    options: [
      "Acting Club",
      "Paleontology Club",
      "Kids Club",
      "The “I Hate Rachel Green Club.”",
    ],
    answer: "The “I Hate Rachel Green Club.”",
  },
  {
    question:
      "Susan and Ross named Ben because it was the name of which person?",
    options: ["Doctor Ben", "Uncle Ben", "Benjamin Franklin", "Janitor Ben"],
    answer: "Janitor Ben",
  },
  {
    question: "What’s the game Chandler makes up to give Joey money?",
    options: ["Rock", "Scissors", "Paper", "Cups"],
    answer: "Cups",
  },
  {
    question: "Which two friends were friends in high school?",
    options: [
      "Rachel and Monica",
      "Phoebe and Monica",
      "Ross and Joey",
      "Ross and Rachel",
    ],
    answer: "Rachel and Monica",
  },
  {
    question: "What’s in Monica’s secret closet?",
    options: [
      "Junk",
      "Teddy Bear",
      "Napkins for All categories of Guests",
      "Baby clothes",
    ],
    answer: "Junk",
  },
];

//Timer Countdown function

function startTimer(duration, display) {
  let countdown = duration,
    seconds;
  timer = setInterval(function () {
    seconds = parseInt(countdown % 60, 10);
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = seconds;

    if (--countdown < 0) {
      display.textContent = "00";
      alert("Time's up!");
      showLeaderBoard();
    }
  }, 1000);
}

//Function to add questions and options once quiz starts
function generateQuestion() {
  let questionNumber = document.querySelector(".question-number");
  let quizQuestion = document.querySelector(".question");
  let quizOptions = document.querySelector(".options");
  let btnAnswer = document.querySelector("#submit-answer");

  quizQuestion.innerHTML = questionArray[questionTracker].question;
  questionNumber.innerHTML = "Question " + (questionTracker + 1);

  //add radio buttons to choose from options
  const rdiOptions = [];
  questionArray[questionTracker].options.forEach((o, i) => {
    let input = `<input type='radio' id='rdo_${i}' name='answers' class='form-check-input' value='${o}' onclick='registerAnswer("${o}")'>`;
    let label = `<label for='rdo_${i}' class='form-check-label'>${o}</label>`;
    let rdoGroup = `<div class='form-check'>${input + label}</div>`;
    rdiOptions.push(rdoGroup);
  });
  quizOptions.innerHTML = rdiOptions.join("");
  btnAnswer.style.visibility = "visible";
  btnAnswer.setAttribute("disabled", "disabled");
}

//Start quiz function
function startQuiz() {
   startTimer(duration, display);
  console.log("Quiz has started!");
  console.log("Total Questions:" + questionArray.length);

  welcome.style.display = "none";
  questionCard.style.display = "block";

  generateQuestion();
}

//Function to store answer chosen by user
function registerAnswer(ans) {
  let btnAnswer = document.querySelector("#submit-answer");
  selectedAnswer = ans;
  btnAnswer.removeAttribute("disabled");
}

//Check if the answer is correct
function checkAnswer() {
  if (questionArray[questionTracker].answer === selectedAnswer) {
    score++;
    scre.innerHTML = `Score: ${score}`;
    console.log("after win score: " + score);
    ansStatus.innerHTML = "Correct Answer!";
    ansStatus.style.color = "green";
  } else {
   // duration=duration-5; - to add a function for reducing 5 seconds for incorrect answer
  
    ansStatus.innerHTML = "Incorrect Answer!";
    ansStatus.style.color = "red";
  }

  nxtQues.style.visibility = "visible";
  let submitBtn = document.getElementById("submit-answer");
  if (questionTracker < questionArray.length) {
    submitBtn.setAttribute("disabled", "disabled");
  } else {
    submitBtn.style.display = "none";
  }
}

function nextQuestion() {
  ansStatus.innerHTML = "";
  nxtQues.style.visibility = "hidden";
  selectedAnswer = "";
  questionTracker++;
  if (questionTracker < questionArray.length) {
    generateQuestion();
  } else {
    showLeaderBoard();
  }
}

//function to show Leaderboard
function showLeaderBoard() {
  questionTracker = 0;
  clearInterval(timer);
  questionCard.style.display = "none";
  leaderBoard.style.display = "block";
  let player = document.getElementById("pname");
  player.value = "";
}

function saveLeaderBoard() {
  let player = document.getElementById("pname");
  console.log(`Your Score\nName:${player.value}\nscore:${score}`);
  let playerscore = {
    name: player.value,
    score: score,
  };

  var quiz = JSON.parse(localStorage.getItem("quiz"));

  if (quiz) {
    quiz.push(playerscore);
    localStorage.setItem("quiz", JSON.stringify(quiz));
  } else {
    localStorage.setItem("quiz", JSON.stringify([playerscore]));
  }

  console.log("Player name from Local storage" + player.value);
  console.log("Player score" + score);

  scoreTable.innerHTML = "";
  let trows = quiz.map((q) => {
    return `<tr><td>${q.name}</td><td>${q.score}</td>`;
  });
  scoreTable.innerHTML = trows.join("");
  leaderBoard.style.display = "none";
  welcome.style.display = "block";
  score = 0;
  scre.innerHTML = `Score: ${score}`;
}
