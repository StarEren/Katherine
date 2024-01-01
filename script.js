document.addEventListener('DOMContentLoaded', function () {
    // Set the date when we crossed paths
    const startDate = new Date('2023-12-03T22:57:00Z');
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
            document.getElementById('heartContainer'),
            document.getElementById('container'),

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
            "Your presence completes my world.",
            "In your arms, I've found my home.",
            "You're the melody to my heart's song.",
            "Every day I spend with you is a gift.",
            "Your love is the anchor in the storms of life.",
            "Our journey together is my favorite story.",
            "You're the masterpiece in the gallery of my life.",
            "Your laughter is the sweetest music to my ears.",
            "With you, every season feels like spring.",
            "You're the star that brightens my darkest nights.",
            "Our love is a symphony, playing in perfect harmony.",
            "I love the way you make ordinary moments extraordinary.",
            "You're the magic that turns the ordinary into extraordinary.",
            "Being with you is like a beautiful dream I never want to end.",
            "You're the sweet surprise that life blessed me with.",
            "You're the answer to all my prayers.",
            "Your love is the compass that guides me home.",
            "Our connection is a flame that never dims.",
            "You're the poetry my heart never knew it could write.",
            "With you, every day feels like a celebration.",
            "You're the reason I believe in love.",
            "Your touch is the medicine that heals my soul.",
            "I love you not only for who you are but for who I am with you.",
            "I love you.",
            "Your love is the fuel that propels me to new heights.",
            "With you, life's challenges become adventures.",
            "You're the inspiration behind my every smile.",
            "Our love story is my favorite tale to tell.",
            "You're the treasure I've been searching for.",
            "In your arms, I've found my forever home.",
            "You're the dream I never want to wake up from.",
            "Your love is the greatest gift I've ever received.",
            "With you, every day is a step closer to forever.",
            "You're the sunshine that warms my coldest days.",
            "Our love is a flame that can never be extinguished.",
            "You're the one my heart has been waiting for.",
            "Your love is the canvas on which my life is painted.",
            "With you, even the mundane becomes extraordinary.",
            "You're the reason my heart beats with joy.",
            "Our love is a melody that plays in the background of my life.",
            "You're the smile in my heart and the joy in my soul.",
            "Your love is the anchor that keeps me grounded.",
            "With you, every day is a new chapter in our love story.",
            "You're the rainbow after my life's storms.",
            "Your love is the balm that soothes my weary soul.",
            "You're the north star guiding me through life's journey.",
            "With you, even the mundane becomes a beautiful memory.",
            "You're the reason I believe in happily ever after.",
            "Your love is the melody that plays in my heart.",
            "With you, I've found a love that transcends time.",
            "You're the one I've been searching for my whole life.",
            "Your love is the foundation on which my happiness stands."
        ];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        createPopup(randomMessage);
        });

    // Add this part for the heart to fade a bit after clicking
    heart.addEventListener('click', function () {
        heart.style.transition = 'opacity 1s ease-in-out';
        heart.style.opacity = '0.7';

        // Reset opacity after 1 second
        setTimeout(function () {
            heart.style.transition = 'opacity 0.3s ease-in-out';
            heart.style.opacity = '1';
        }, 1000);
    });

    const katherineElement = document.getElementById('katherine');
    katherineElement.classList.add('clickable'); // Add the 'clickable' class for styling

    function handleKatherineClick() {
        const nepentheMessage = document.getElementById('message');
        // Remove the heart element
        const heartContainer = document.getElementById('heartContainer');
        const heart = document.getElementById('heart');
        heartContainer.removeChild(heart);
        // Show the nepenthe message
        nepentheMessage.classList.remove('hidden');

        // Remove click event listener and 'clickable' class after it's clicked
        katherineElement.removeEventListener('click', handleKatherineClick);
        katherineElement.classList.remove('clickable');
    }

    katherineElement.addEventListener('click', handleKatherineClick);

    // Add this part for the heart to fade a bit after clicking
    heart.addEventListener('click', function () {
        heart.style.transition = 'opacity 1s ease-in-out';
        heart.style.opacity = '0.7';

        // Reset opacity after 1 second
        setTimeout(function () {
            heart.style.transition = 'opacity 0.3s ease-in-out';
            heart.style.opacity = '1';
        }, 1000);
    });

});