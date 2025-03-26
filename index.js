function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedDate = now.toLocaleString('en-US', options);
    document.getElementById("datetime").textContent = formattedDate;
}

updateDateTime(); // Initial call
setInterval(updateDateTime, 1000); // Update every second

let stopwatchInterval, timerInterval;
let stopwatchTime = 0, timerTime = 300; // 5 min timer

function formatTime(time) {
    const hours = Math.floor(time / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function startStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = setInterval(() => {
        stopwatchTime++;
        document.getElementById("stopwatch").textContent = formatTime(stopwatchTime);
    }, 1000);
}
function stopStopwatch() { clearInterval(stopwatchInterval); }
function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    document.getElementById("stopwatch").textContent = "00:00:00";
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timerTime > 0) {
            timerTime--;
            document.getElementById("timer").textContent = formatTime(timerTime);
        } else {
            clearInterval(timerInterval);
            alert("Time's up!");
        }
    }, 1000);
}
function stopTimer() { clearInterval(timerInterval); }
function resetTimer() {
    clearInterval(timerInterval);
    timerTime = 300;
    document.getElementById("timer").textContent = "00:05:00";
}

resetTimer();