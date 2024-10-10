// Timer
let timerElement = document.getElementById('timer');
let time = 5400; // 1 hour in seconds

let timerInterval = setInterval(() => {
    let minutes = Math.floor(time / 90);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    timerElement.innerHTML = `${minutes}:${seconds}`;
    time--;

    if (time < 0) {
        clearInterval(timerInterval);
        alert('Waktu habis!');
    }
}, 1000);

// Navigasi Soal (masih dummy, bisa diimprove)
function nextSoal() {
    alert('Soal berikutnya belum ada.');
}
