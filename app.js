let minutes = 25;
let seconds = 0;
let interval;
let pomodoros = 0;

const startBtn = document.querySelector('.btn-start');
const resetBtn = document.querySelector('.btn-reset');
const minutesDiv = document.querySelector('.minutes');
const secondsDiv = document.querySelector('.seconds');

// Function to update the timer display
function updateTimer() {
    if (seconds === 0) {
        if (minutes === 0) {
            clearInterval(interval);
            pomodoros++;
            if (pomodoros % 4 === 0) {
                // Long break after 4 pomodoros
                minutes = 15;
                alert("Time for a long break!");
            } else {
                // Short break after each pomodoro
                minutes = 5;
                alert("Time for a short break!");
            }
            seconds = 0;
            updateDisplay();
            return;
        }
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }
    updateDisplay();
}

// Function to update the timer display
function updateDisplay() {
    minutesDiv.textContent = minutes < 10 ? '0' + minutes : minutes;
    secondsDiv.textContent = seconds < 10 ? '0' + seconds : seconds;
}

// Event listener for the start button
startBtn.addEventListener('click', () => {
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(updateTimer, 1000);
});

// Event listener for the reset button
resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    minutes = 25;
    seconds = 0;
    pomodoros = 0;
    updateDisplay();
});