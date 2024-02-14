document.addEventListener('DOMContentLoaded', function () {
    // Function to send and store messages
    function sendMessage() {
        var sweetMessage = document.getElementById('message-input').value.trim();

        if (sweetMessage !== '') {
            // Store the message in local storage
            storeMessage(sweetMessage);

            // Clear the input field
            document.getElementById('message-input').value = '';

            // Alert or perform other actions as needed
            alert('Sweet Message Sent: ' + sweetMessage);
        } else {
            alert('Please enter a sweet message before sending.');
        }
    }

    // Function to store messages in local storage
    function storeMessage(message) {
        // Retrieve existing messages from local storage
        var storedMessages = localStorage.getItem('storedMessages');

        // Parse existing messages (or initialize an empty array)
        var messagesArray = storedMessages ? JSON.parse(storedMessages) : [];

        // Add the new message to the array
        messagesArray.push(message);

        // Store the updated messages array back in local storage
        localStorage.setItem('storedMessages', JSON.stringify(messagesArray));
    }

    // Function to create a moving heart
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heart.innerHTML = '❤️';
        document.body.appendChild(heart);

        // Remove the heart after the animation
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }

    // Animation loop for creating moving hearts
    setInterval(createHeart, 2000); // Add a new heart every 2 seconds

    // Animation loop for updating heart positions
    requestAnimationFrame(function animateHearts() {
        const hearts = document.querySelectorAll('.heart');
        hearts.forEach((heart) => {
            heart.style.top = heart.offsetTop - 1 + 'px';
        });
        requestAnimationFrame(animateHearts);
    });

    // Expose the sendMessage function to the global scope (for testing purposes)
    window.sendMessage = sendMessage;
});
