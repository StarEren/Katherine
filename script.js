document.addEventListener('DOMContentLoaded', function () {
    // Set the imaginary date when Katherine & Eren crossed paths (Dec 16th)
    const startDate = new Date('2023-11-04T09:41:00Z');
    let clickCount = 0;

    function updateTimer() {
        const currentDate = new Date();
        const timeDifference = currentDate - startDate;
    
        const seconds = Math.floor((timeDifference / 1000) % 60);
        const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const months = Math.floor(days / 30); // Assuming an average month length of 30 days
        const years = Math.floor(days / 365);
    
        const yearString = years > 0 ? `${years} ${years === 1 ? 'year' : 'years'}` : '';
        const monthString = months > 0 ? `${months} ${months === 1 ? 'month' : 'months'}` : '';
        const dayString = days % 30 > 0 ? `${days % 30} ${days % 30 === 1 ? 'day' : 'days'}` : '';
        const hourString = hours > 0 ? `${hours} ${hours === 1 ? 'hour' : 'hours'}` : '';
        const minuteString = minutes > 0 ? `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}` : '';
        const secondString = seconds > 0 ? `${seconds} ${seconds === 1 ? 'second' : 'seconds'}` : '';
    
        const displayTime = [yearString, monthString, dayString, hourString, minuteString, secondString].filter(Boolean).join(', ');
    
        document.getElementById('timer').innerText = displayTime;
    }
    
    
    
    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    function createPopup(message) {
        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.innerText = message;
    
        // Append the element to the body to get its size
        document.body.appendChild(popup);
    
        // Get computed style to consider margins and padding
        const computedStyle = getComputedStyle(popup);
    
        // Calculate random position within the visible area
        const maxX = window.innerWidth - popup.clientWidth;
        const maxY = window.innerHeight - popup.clientHeight;
    
        // Minimum distance from other elements
        const minDistance = 20;
    
        // Store the positions of existing pop-ups, timer, message, and exclude other text
        const existingElements = [
            ...Array.from(document.querySelectorAll('.popup')),
            document.getElementById('timer'),
            document.getElementById('message'),
            document.getElementById('heartContainer'), // Exclude heart container
            // Exclude other text elements if needed
        ].map((existingElement) => {
            if (existingElement) {
                const rect = existingElement.getBoundingClientRect();
                return {
                    top: rect.top - parseFloat(computedStyle.marginTop),
                    left: rect.left - parseFloat(computedStyle.marginLeft),
                    width: rect.width,
                    height: rect.height,
                };
            }
        });
    
        // Filter out undefined values
        const filteredExistingElements = existingElements.filter((element) => element);
    
        // Calculate a new position that doesn't overlap with existing elements
        let newTop, newLeft;
        do {
            newTop = Math.random() * (maxY - minDistance);
            newLeft = Math.random() * (maxX - minDistance);
        } while (
            filteredExistingElements.some(
                (existingElement) =>
                    newTop < existingElement.top + existingElement.height + minDistance &&
                    newTop + popup.clientHeight + minDistance > existingElement.top &&
                    newLeft < existingElement.left + existingElement.width + minDistance &&
                    newLeft + popup.clientWidth + minDistance > existingElement.left
            )
        );
    
        popup.style.position = 'fixed';
        popup.style.top = `${newTop}px`;
        popup.style.left = `${newLeft}px`;
    
        // Remove the temporarily appended element
        document.body.removeChild(popup);
    
        document.body.appendChild(popup);
    
        setTimeout(() => {
            popup.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(popup);
            }, 1000);
        }, 2000); // Adjust the time for how long the pop-up stays visible
    }
    
    
    
    
    
    

    // Update the timer every second
    setInterval(updateTimer, 1000);

    // Initial update
    updateTimer();

    // Heart Click Event
    const heart = document.getElementById('heart');
    const heartContainer = document.getElementById('heartContainer');
    const message = document.getElementById('message');

    heartContainer.addEventListener('click', function () {
        clickCount++;

        if (clickCount < 21) {
            heart.classList.add('clicked');

            // Remove the 'clicked' class after the animation
            setTimeout(function () {
                heart.classList.remove('clicked');
            }, 150);

            // Display a random pop-up with a different message
            const messages = [
                "You make my heart skip a beat.",
                "Every moment with you is special.",
                "I'm grateful for you every day.",
                "Your smile brightens my day.",
                "You complete me.",
                "Together is my favorite place to be.",
                "You're the love of my life.",
                "I cherish our time together.",
                "You're my sunshine on a rainy day.",
                "I love you more than words can say.",
                "You're my everything.",
                "You're the missing piece to my puzzle.",
                "Our love is timeless.",
                "Life is better with you in it.",
                "You're my best friend and lover.",
                "With you, every day is Valentine's Day.",
                "You're the one my heart adores.",
                "I fall in love with you all over again every day.",
                "You're the reason for my happiness.",
                "Forever isn't long enough with you.",
                "I'm lucky to have you in my life.",
            ];
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            createPopup(randomMessage);
        } else {
            // Hide the heart container after 21 clicks
            heartContainer.style.display = 'none';

            // Show message after 21 clicks
            message.classList.remove('hidden');
        }
    });
});


