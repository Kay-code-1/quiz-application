let score = 0;
let timer = 0;
var quizQuestion = document.querySelector(".question");
var quizOptions = document.querySelectorAll(".option");

//JSON array for questions

let questionArray = '{"questions":['+
'{
    question: "Joey played Dr. Drake Ramoray on which soap opera show?",
    optionArray: [
      "Stranger Things",
      "Days of Our Lives",
      "Breaking Bad",
      "Prison Break",
    ],
    answer: "Days of Our Lives",
  }',

  '{
    question: "Phoebe’s scientist boyfriend David worked in what city?",
    option: ["Mumbai", "Pune", "Sunnyvale", "Minsk"],
    answer: "Minsk",
  }',

  {
    question: "What color is Monica’s apartment?",
    option: ["Blue", "Red", "Pink", "Purple"],
    answer: "Purple",
  },

  {
    question: "Joey and Chandler’s TV guide is addressed to who?",
    option: [
      "Miss Chanandler Bong",
      "Mr Candle Bing",
      "Mr Chandler Bong ",
      "Joey Tribbiani",
    ],
    answer: "Miss Chanandler Bong",
  },

  {
    question: " Which character famously said, “PIVOT?”?",
    option: ["Rachel", "Joey", "Ross", "Gunther"],
    answer: "Ross",
  },

  {
    question:
      "Brad Pitt and David Schwimmer’s characters cofounded what club in high school?",
    option: [
      "Acting Club",
      "Paleontology Club",
      "Kids Club",
      "The “I Hate Rachel Green Club.”",
    ],
    answer: "The “I Hate Rachel Green Club.”",
  },
]
    
}
  

const questionText = json.parse(questionArray);
function startQuiz() {
  console.log("Quiz has started!");

  for (let i = 0; i < questionArray.length; i++) {
    console.log("Total Questions:" + questionArray.length);
    
    quizQuestion.innerHTML = questionText.question[i];
    // for (let i = 0; i < questionArray.option.length; i++) {
    //   console.log("options length: " + (questionArray.option).length);
    
    // }
    // ongoingQuestion++;
  }
}

//function checkAnswer()
