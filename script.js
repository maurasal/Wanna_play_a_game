var timerEl = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
//moved timer variables OUTSIDE of the startQuiz function so it's globally available
let timeD;
let timeRemaining = 30;

startButton.addEventListener('click', startQuiz);

const questions = [
  {
    question: "Which variable should you use to store a value that will not change?",
    options: ["let", "const", "var"],
    correctAnswer: 1
  },
  {
    question: "Which of these is not a data type in JavaScript?",
    options: ["String", "Number", "Letter"],
    correctAnswer: 2
  },
  {
    question: "You can use a(n) ___________ to group together multiple items under one variable?",
    options: ["String", "Collection", "Array"],
    correctAnswer: 2
  },
  {
    question: "A __________ data type only takes true/false.",
    options: ["Boolean", "Julius", "Boogie"],
    correctAnswer: 0
  },
];

let currentQuestion = 0;
let score = 0;
let timer;

function displayQuestion() {

  questionEl.textContent = questions[currentQuestion].question;

  optionsEl.innerHTML = "";
  questions[currentQuestion].options.forEach((option, index) => {
    const optionButton = document.createElement("button");
    optionButton.textContent = option;
    optionButton.addEventListener("click", () => {
      checkAnswer(index);
    });
    optionsEl.appendChild(optionButton);
  });
}

function checkAnswer(selectedIndex) {
  if (selectedIndex === questions[currentQuestion].correctAnswer) {
    score++;
  } else {
    timeRemaining -= 10
  }
  currentQuestion++;
  if (currentQuestion === questions.length) {
    endQuiz();
  } else {
    displayQuestion();
  }
}

function endQuiz() {
  clearInterval(timeD);
  console.log("Quiz ended. Your score: " + score);
  console.log('Time is up!');
  questionEl.textContent = ("Enter your initials to record your score in the console log.")
  optionsEl.textContent = ("")
}

function startQuiz() {
  const countdownDisplay = document.getElementById('timer');
  timeD = setInterval(() => {
    timeRemaining--;
    countdownDisplay.textContent = ("You have " + timeRemaining + " second(s) remaining");
    if (timeRemaining <= 0) {
      endQuiz()
    }
  }, 1000);

  displayQuestion();
}

document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var inputValue = document.getElementById("textInput").value;

  console.log("Saved Scores: " + inputValue + " had a score of " + score);
  document.getElementById("textInput").value = "";
});
