// Basic interactivity for CTA button
document.querySelector('.cta-button').addEventListener('click', function() {
    alert('Welcome to the Autism Support Platform! Let\'s get started.');
});


document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add login functionality here
    alert('Login form submitted!');
});

document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add sign-up functionality here
    alert('Sign up form submitted!');
});
