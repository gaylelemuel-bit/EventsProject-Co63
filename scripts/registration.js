let event1 = {
    title: "New Believers",
    speaker: "Johnny Chang",
    location: "Online",
    date: "January 2 2026",
    duration: "3 Days",
    registrations: 0 
};
let event2 = {
    title: "Newly Married",
    speaker: "Pastor Micahel Todd",
    location: "Transformation Church",
    date: "February 13 2026",
    duration: "6 Days",
    registrations: 0
};
let event3 = {
    title: "Singles",
    speaker: "Brenda Palmer",
    location: "Peacock Theater",
    date: "March 6 2026",
    duration: "3 Days",
    registrations: 0
};
let event4 = {
    title: "Enterpreneurs",
    speaker: "Eric Thomas",
    location: "AT&T Stadium",
    date: "January 14 2026",
    duration: "5 Days",
    registrations: 0
};
let event5 = {
    title: "Heal Your Wounds",
    speaker: "Pastor Danielle Williams McCord",
    location: "Atlanta GA",
    date: "January 30 2026",
    duration: "4 Days",
    registrations: 0
};
let workshops = [
    { title: "New Believers", countId: 'shop1' },
    { title: "Newly Married", countId: 'shop2' },
    { title: "Singles", countId: 'shop3' },
    { title: "Enterpreneurs", countId: 'shop4' },
    { title: "Heal Your Wounds", countId: 'shop5'}
];

let allRegistrations = [];
function updateDisplayCounts() {
    workshops.forEach(event => {
        // Count how many times this specific event title appears in the log
        const count = allRegistrations.filter(reg => reg.eventTitle === event.title).length;
        
        const countElement = document.getElementById(event.countId);
        if (countElement) {
            countElement.textContent = count;
        }
    });
}
//  Function to Display the Individual Log as a TABLE ---
function renderIndividualRegistrations() {
    const tableBody = document.getElementById('registration-table-body');
    tableBody.innerHTML = ''; 
    allRegistrations.forEach(reg => {
        const tableRow = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = reg.name;

        const eventCell = document.createElement('td');
        eventCell.textContent = reg.eventTitle;

        tableRow.appendChild(nameCell);
        tableRow.appendChild(eventCell);
        tableBody.appendChild(tableRow);
    });
}
// - Function to Handle When Someone Clicks "Register" 
function handleRegistrationForm(event) {
    event.preventDefault();

    const nameInput = document.querySelector('input[placeholder="Full Name"]');
    const selectedTitle = document.querySelector('select').value;
    const userName = nameInput.value.trim();

    if (userName === "" || selectedTitle === "--Title--") {
        alert("Please enter your name and select a workshop title.");
        return;
    }
    allRegistrations.push({
        name: userName,
        eventTitle: selectedTitle
    });

    // Update both display sections
    updateDisplayCounts();  
    renderIndividualRegistrations(); 

    alert(`Thank you, ${userName}! You are registered for "${selectedTitle}".`);
    
    // Clear form fields
    document.querySelector('.form-container').reset();
}

const registrationForm = document.querySelector('.form-container');
registrationForm.addEventListener('submit', handleRegistrationForm);

const clearButton = document.querySelector('.btn2');
clearButton.addEventListener('click', function(e) {
    e.preventDefault();
    registrationForm.reset();
});
updateDisplayCounts();
renderIndividualRegistrations();
