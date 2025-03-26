function updateDateTime() {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const formattedDate = now.toLocaleString("en-US", options);
  document.getElementById("datetime").textContent = formattedDate;
}

updateDateTime(); // Initial call
setInterval(updateDateTime, 1000); // Update every second

let stopwatchInterval, timerInterval, alarmTimeout;
let stopwatchTime = 0,
  timerTime = 0;

function formatTime(time) {
  const hours = Math.floor(time / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((time % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

function startStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = setInterval(() => {
    stopwatchTime++;
    document.getElementById("stopwatch").textContent =
      formatTime(stopwatchTime);
  }, 1000);
}
function stopStopwatch() {
  clearInterval(stopwatchInterval);
}
function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchTime = 0;
  document.getElementById("stopwatch").textContent = "00:00:00";
}

function startTimer() {
  clearInterval(timerInterval);
  const inputTime = parseInt(document.getElementById("timerInput").value);
  if (isNaN(inputTime) || inputTime <= 0) {
    alert("Please enter a valid time in seconds.");
    return;
  }
  timerTime = inputTime;
  document.getElementById("timer").textContent = formatTime(timerTime);
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
function stopTimer() {
  clearInterval(timerInterval);
}
function resetTimer() {
  clearInterval(timerInterval);
  document.getElementById("timer").textContent = "00:00:00";
  document.getElementById("timerInput").value = "";
}
function setAlarm() {
    clearTimeout(alarmTimeout);
    const alarmTime = document.getElementById("alarmInput").value;
    if (!alarmTime) {
        alert("Please set a valid alarm time.");
        return;
    }
    document.getElementById("alarm").textContent = `Alarm set for ${alarmTime}`;
    const now = new Date();
    const alarmDate = new Date(now.toDateString() + ' ' + alarmTime);
    let timeToAlarm = alarmDate - now;
    if (timeToAlarm < 0) timeToAlarm += 86400000; 
    alarmTimeout = setTimeout(() => {
        alert("Alarm ringing!");
        document.getElementById("alarm").classList.add("shaking");
        setTimeout(() => document.getElementById("alarm").classList.remove("shaking"), 500);
    }, timeToAlarm);
}
function clearAlarm() {
    clearTimeout(alarmTimeout);
    document.getElementById("alarm").textContent = "No alarm set";
}

function setTheme(theme) {
  document.body.className = theme;
}
