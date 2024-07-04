// Vaqt o'lchovlarini saqlash uchun o'zgaruvchilar
let startTime, currentTime, elapsedTime = 0, timerInterval;
let running = false;

// Elementlarni olish
const display = document.getElementById('display');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

// Tugmachalarga voqea tinglovchilar qo'shish
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

// start
function startTimer() {
    if (!running) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateDisplay, 10);
        running = true;
    }
}

// stop
function pauseTimer() {
    if (running) {
        clearInterval(timerInterval);
        elapsedTime = Date.now() - startTime;
        running = false;
    }
}

// reset
function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    running = false;
    display.textContent = '00 : 00 : 00 : 000';
}

// update
function updateDisplay() {
    currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor((elapsedTime / (1000 * 60 * 60)) / 24);
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor(elapsedTime % 1000);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    milliseconds = milliseconds < 100 ? '0' + milliseconds : milliseconds;
    milliseconds = milliseconds < 10 ? '00' + milliseconds : milliseconds;

    display.textContent = `${hours} : ${minutes} : ${seconds} : ${milliseconds}`;
}
