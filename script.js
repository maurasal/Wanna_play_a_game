var timerEl = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
//moved timer variables OUTSIDE of the startQuiz function so it's globally available
let timeD;
let timeRemaining = 30;

startButton.addEventListener('click', startQuiz);

const quizQuestions = [
  {
    question: "What color is a 'bay' horse?",
    options: ["White", "Brown", "Black"],
    correctAnswer: 1
  },
  {
    question: "What is the name of the piece of equipment that goes over a horse's head?",
    options: ["Saddle", "Martingale", "Bridle"],
    correctAnswer: 2
  },
  {
    question: "What unit of measurment is used to determine a horse's height measured?",
    options: ["Feet", "Inches", "Hands"],
    correctAnswer: 2
  },
  {
    question: "What is the profession of someone who makes horse shoes?",
    options: ["Farrier", "Veterinarian", "Doctor"],
    correctAnswer: 0
  },
];

let currentQuestion = 0;
let score = 0;
let timer;

function displayQuestion() {

  questionEl.textContent = quizQuestions[currentQuestion].question;

  optionsEl.innerHTML = "";
  quizQuestions[currentQuestion].options.forEach((option, index) => {
    const optionButton = document.createElement("button");
    optionButton.textContent = option;
    optionButton.addEventListener("click", () => {
      checkAnswer(index);
    });
    optionsEl.appendChild(optionButton);
  });
}

function checkAnswer(selectedIndex) {
  if (selectedIndex === quizQuestions[currentQuestion].correctAnswer) {
    score++;
  } else {
    timeRemaining -= 10
  }
  currentQuestion++;
  if (currentQuestion === quizQuestions.length) {
    endQuiz();
  } else {
    displayQuestion();
  }
}

function endQuiz() {
  clearInterval(timeD);
  console.log("Quiz ended. Your score: " + score);
  console.log('Time is up!');
  questionElement.textContent = ("Enter your initials to record your score")
}

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
 
    var inputValue = document.getElementById("textInput").value;

    console.log("Saved Scores: " + inputValue + " had a score of " + score);
    document.getElementById("textInput").value = "";
});

function startQuiz() {
  const countdownDisplay = document.getElementById('timer');
  timeD = setInterval(() => {
    timeRemaining--;
    countdownDisplay.textContent = ("You have " + timeRemaining + " second(s) left");
    if (timeRemaining === 0) {
      endQuiz()
    }
  }, 1000);

  displayQuestion();
}
