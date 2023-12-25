document.addEventListener("DOMContentLoaded", function () {
    // Set the date we're counting up from
    var countUpDate = new Date("Jan 1, 2023 00:00:00").getTime();

    // Update the count-up every 1 second
    var x = setInterval(function () {
        // Get the current date and time
        var now = new Date().getTime();

        // Calculate the elapsed time
        var elapsedTime = now - countUpDate;

        // Calculate days, hours, minutes, and seconds
        var days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
        var hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

        // Display the count-up
        document.getElementById("countup").innerHTML =
            days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    }, 1000);
});
