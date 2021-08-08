let score = 0;
let timer = 0;
var question = document.querySelector(".question");
var availableOptions = document.querySelectorAll(".option");

let questionArray = [
  {
    question: "Joey played Dr. Drake Ramoray on which soap opera show?",
    option1: "Stranger Things",
    option2: "Days of Our Lives",
    option3: "Breaking Bad",
    option4: "Prison Break",
    answer: "Days of Our Lives",
  },

  {
    question: "Phoebe’s scientist boyfriend David worked in what city?",
    option1: "Mumbai",
    option2: "Pune",
    option3: "Sunnyvale",
    option4: "Minsk",
    answer: "Minsk",
  },

  {
    question: "What color is Monica’s apartment?",
    option1: "Blue",
    option2: "Red",
    option3: "Pink",
    option4: "Purple",
    answer: "Purple",
  },

  {
    question: "Joey and Chandler’s TV guide is addressed to who?",
    option1: "Miss Chanandler Bong",
    option2: "Mr Candle Bing",
    option3: "Mr Chandler Bong ",
    option4: "Joey Tribbiani",
    answer: "Miss Chanandler Bong",
  },

  {
    question: " Which character famously said, “PIVOT?”?",
    option1: "Rachel",
    option2: "Joey",
    option3: "Ross",
    option4: "Gunther",
    answer: "Ross",
  },

  {
    question:
      "Brad Pitt and David Schwimmer’s characters cofounded what club in high school?",
    option1: "Acting Club",
    option2: "Paleontology Club",
    option3: "Kids Club",
    option4: "The “I Hate Rachel Green Club.”",
    answer: "The “I Hate Rachel Green Club.”",
  },
];

console.log("Total Questions:" + questionArray.length);
ongoingQuestion = 0;

function startQuiz() {
  console.log("Quiz has started!");

  for (let i = 0; i < questionArray.length; i++) {
    question.innerHTML = questionArray[ongoingQuestion]["question"];
    for (
      let i = 0;
      i < questionArray[ongoingQuestion]["availableOptions"].length;
      i++
    ) {
      var number = availableOptions.dataset["number"];
      availableOptions.innerHTML = ongoingQuestion["availableOptions" + number];
    }
    ongoingQuestion++;
  }
}

//function checkAnswer()
