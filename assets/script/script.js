//let timer = 0;
var questionTracker = 0; //Start of first question

var selectedAnswer = "";
//array for questions
let questionArray = [
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
    options: ["Mumbai", "Pune", "Sunnyvale", "Minsk"],
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
    question: "How did Susan and Ross come up with Ben’s name?",
    options: [
      "It was the doctor's name.",
      "They both had uncles named Ben.",
      "They named him after Benjamin Franklin.",
      "It was on the Janitor's name tag.",
    ],
    answer: "Days of Our Lives",
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

//Function to add questions and options once quiz starts

function generateQuestion() {
  let questionNumber = document.querySelector(".question-number");
  let quizQuestion = document.querySelector(".question");
  let quizOptions = document.querySelector(".options");
  let btnAnswer = document.querySelector("#submit-answer");

  quizQuestion.innerHTML = questionArray[questionTracker].question;
  questionNumber.innerHTML = "Question" + (questionTracker + 1);

  //add radio buttons to choose from options

  const rdiOptions = [];
  questionArray[questionTracker].options.forEach((o, i) => {
    let input = `<input type='radio' id='rdo_${i}' name='answers' value='${o}' onclick='registerAnswer("${o}")'>`;
    let label = `<label for='rdo_${i}'>${o}</label>`;
    rdiOptions.push(input + label);
  });
  quizOptions.innerHTML = rdiOptions.join("<br>");
  btnAnswer.style.visibility = "visible";
  btnAnswer.setAttribute("disabled", "disabled");
}

//Start quiz function

function startQuiz() {
  console.log("Quiz has started!");
  console.log("Total Questions:" + questionArray.length);
  let welcome = document.getElementById("welcome");
  let questionCard = document.getElementById("question-card");
  welcome.style.display = "none";
  questionCard.style.display = "block";
  generateQuestion();
}

//Function to store answer chosen by user

function registerAnswer(ans) {
  selectedAnswer = ans;
  let btnAnswer = document.querySelector("#submit-answer");
  btnAnswer.removeAttribute("disabled");
}

//Check if the answer is correct
var score = 0;
let scre = document.getElementById("score");
scre.innerHTML = `Score: ${score}`;
let displayResult = document.getElementById("result");

console.log("initial score: " + score);
function checkAnswer() {
  if (questionArray[questionTracker].answer === selectedAnswer) {
    score++;
    scre.innerHTML = `Score: ${score}`;
    console.log("after win score: " + score);
    alert("Correct Answer!" + " " + "Your Score is: " + score);
  } else {
    alert("Incorrect Answer!");
  }
  nextQuestion();
}

function nextQuestion() {
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
  let leaderBoard = document.getElementById("leaderboard");
  leaderBoard.style.display = "block";
}
