// Function for "Learn More" buttons
function directToRegisterPage() {
    // This function can now be used for all buttons
    window.location.href = "./Registration.html";
}

// Select all buttons with the class 'register-btn'
const registerButtons = document.querySelectorAll(".register-btn");

// Add an event listener to each button using a loop
registerButtons.forEach(button => {
    button.addEventListener('click', directToRegisterPage);
});

// Dark Mode Toggle Logic
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.getElementById('page-body');
const navbar = document.querySelector('.navbar');

// Function to set the theme
function setTheme(isDarkMode) {
    if (isDarkMode) {
        body.classList.add('dark-mode');
        // Update navbar classes for Bootstrap dark mode styling
        navbar.classList.remove('navbar-light', 'bg-light');
        navbar.classList.add('navbar-dark', 'bg-dark');
        darkModeToggle.textContent = 'Light Mode';
    } else {
        body.classList.remove('dark-mode');
        // Update navbar classes for Bootstrap light mode styling
        navbar.classList.remove('navbar-dark', 'bg-dark');
        navbar.classList.add('navbar-light', 'bg-light');
        darkModeToggle.textContent = 'Dark Mode';
    }
}

// Event listener for the dark mode button
darkModeToggle.addEventListener('click', () => {
    const isDarkModeEnabled = body.classList.contains('dark-mode');
    // Toggle the theme without saving to local storage
    setTheme(!isDarkModeEnabled);
});

    const buyButton = document.getElementById('buy-button');
    const orderFormContainer = document.getElementById('order-form-container');
    const cancelButton = document.getElementById('cancel-button');
    const orderForm = document.getElementById('order-form');

    // Show the order form when the "Buy Now" button is clicked
    buyButton.addEventListener('click', () => {
        orderFormContainer.style.display = 'block';
    });

    // Hide the order form when cancelled
    cancelButton.addEventListener('click', () => {
        orderFormContainer.style.display = 'none';
    });

    orderForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        // hide the form after submission
        orderFormContainer.style.display = 'none';
        alert('Order submitted successfully!');
    });