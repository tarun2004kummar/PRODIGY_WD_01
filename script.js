document.addEventListener('DOMContentLoaded', function() {
    // Form validation script
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            event.preventDefault(); // Prevent form submission
        } else {
            alert('Form submitted successfully!');
        }
    });

    // Change color on scroll script
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        const scrollPosition = window.scrollY;

        if (scrollPosition > 50) { // Change the threshold as needed
            header.style.backgroundColor = '#555'; // Change to the desired color
        } else {
            header.style.backgroundColor = '#333'; // Original color
        }
    });
});
