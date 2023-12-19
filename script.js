// Wrap your JavaScript code in a window.onload event to ensure the DOM is fully loaded
window.onload = function() {
    // Get the elements you want to animate
    var titleElement = document.querySelector('.intro-section h1');
    var paragraphElement = document.querySelector('.intro-section p');

    // Call the function to simulate typing effect
    typeWriter(titleElement, 'Hi 👋 I\'m Hakon');
    typeWriter(paragraphElement, 'I\'m a bachelor Data Science Student at ');

    function typeWriter(element, text) {
        // Set the initial values
        var i = 0;
        var speed = 100; // Adjust the typing speed as needed

        // Clear any existing text in the element
        element.innerHTML = '';

        // Use a timer to add each character with a delay to simulate typing
        function type() {
            if (i < text.length) {
                // Add the character to the element
                element.innerHTML += text.charAt(i);
                i++;

                // Use setTimeout to simulate typing speed
                setTimeout(type, speed);
            } else {
                // Append the styled link after the typing effect is complete
                if (element === paragraphElement) {
                    // Append the link with inline styling for bold text
                    element.innerHTML += ' <a href="https://itu.dk/" target="_blank" style="font-weight: bold;">ITU</a>';
                }
            }
        }

        // Start the typing effect
        type();
    }
};
