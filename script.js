document.addEventListener('DOMContentLoaded', function () {
    // Set the date when Katherine & Eren crossed paths
    const startDate = new Date('2023-01-01T00:00:00Z');

    function updateTimer() {
        const currentDate = new Date();
        const timeDifference = currentDate - startDate;

        const seconds = Math.floor((timeDifference / 1000) % 60);
        const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);

        document.getElementById('timer').innerText = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    // Update the timer every second
    setInterval(updateTimer, 1000);

    // Initial update
    updateTimer();
});
