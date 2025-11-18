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
        const count = allRegistrations.filter(reg => reg.eventTitle === event.title).length;
        const countElement = document.getElementById(event.countId);
        if (countElement) {
            countElement.textContent = count;
        }
    });
}
function renderIndividualRegistrationsAsCards() {
    const cardContainer = document.getElementById('registration-card-container');
    cardContainer.innerHTML = ''; 
    
    // assign an index for easy identification
    allRegistrations.forEach((reg, index) => {
        const cardWrapper = document.createElement('div');
        cardWrapper.classList.add('col-sm-6', 'col-lg-4'); 

        const card = document.createElement('div');
        card.classList.add('card', 'shadow-sm', 'h-100'); 
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const nameElement = document.createElement('h5');
        nameElement.classList.add('card-title');
        nameElement.textContent = reg.name;

        const eventElement = document.createElement('h6');
        eventElement.classList.add('card-subtitle', 'mb-2', 'text-muted');
        eventElement.textContent = reg.eventTitle;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm', 'mt-3'); 
        deleteButton.textContent = 'Delete';
        deleteButton.dataset.index = index; 

        deleteButton.addEventListener('click', function() {
            const itemIndex = parseInt(this.dataset.index);
            // Remove the item from the allRegistrations array
            allRegistrations.splice(itemIndex, 1);
            
            renderIndividualRegistrationsAsCards();
            updateDisplayCounts();
        });
        cardBody.appendChild(nameElement);
        cardBody.appendChild(eventElement);
        cardBody.appendChild(deleteButton); 
        card.appendChild(cardBody);
        cardWrapper.appendChild(card);
        
        cardContainer.appendChild(cardWrapper);
    });
}
function handleRegistrationForm(event) {
    event.preventDefault();
    const nameInput = document.querySelector('input[placeholder="Full Name"]');
    const selectedTitle = document.querySelector('select').value; 
    const userName = nameInput.value.trim();

    if (userName === "" || selectedTitle === "--Title--") {
        alert("Please enter your name and select a workshop title.");
        return;
    }
    // Add new registration to our data array
    allRegistrations.push({
        name: userName,
        eventTitle: selectedTitle
    });
    updateDisplayCounts();  
    renderIndividualRegistrationsAsCards(); 

    alert(`Thank you, ${userName}! You are registered for "${selectedTitle}".`);
    document.querySelector('.form-container').reset();
}
document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.querySelector('.form-container');
    const clearButton = document.querySelector('.btn2');

    if (registrationForm) {
        registrationForm.addEventListener('submit', handleRegistrationForm);
    }
    if (clearButton) {
        clearButton.addEventListener('click', function(e) {
            e.preventDefault();
            registrationForm.reset();
        });
    }
    updateDisplayCounts();
});
