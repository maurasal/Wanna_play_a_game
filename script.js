var timerEl = document.getElementById('timer')

const startButton = document.getElementById('startButton')

startButton.addEventListener('click', countdown)
startButton.addEventListener('click', askQuestion)

function countdown() {
    var timeLeft = 30;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        displayMessage();
      }
    }, 1000);
  }

function askQuestion() {

}