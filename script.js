document.addEventListener('DOMContentLoaded', function () {
    // Set the imaginary date when Katherine & Eren crossed paths (Dec 16th)
    const startDate = new Date('2022-12-16T00:00:00Z');

    function updateTimer() {
        const currentDate = new Date();
        const timeDifference = currentDate - startDate;

        const seconds = Math.floor((timeDifference / 1000) % 60);
        const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);

        document.getElementById('hours').innerText = formatTime(hours);
        document.getElementById('minutes').innerText = formatTime(minutes);
        document.getElementById('seconds').innerText = formatTime(seconds);
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    // Update the timer every second
    setInterval(updateTimer, 1000);

    // Initial update
    updateTimer();
});
