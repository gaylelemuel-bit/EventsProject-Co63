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
let workshops = [event1, event2, event3, event4, event5];

function registerEvent(eventIndex) {
    workshops[eventIndex].registrations++;
    displayEventCounts();
}
function displayEventCounts() {
    const shop1Display = document.getElementById('shop1');
    if (shop1Display) { 
        shop1Display.innerHTML = event1.registrations; 
    }
    const shop2Display = document.getElementById('shop2');
    if (shop2Display) {
        shop2Display.innerHTML = event2.registrations; 
    }
    const shop3Display = document.getElementById('shop3');
    if (shop3Display) {
        shop3Display.innerHTML = event3.registrations; 
    }
    const shop4Display = document.getElementById('shop4');
    if (shop4Display) {
        shop4Display.innerHTML = event4.registrations; 
    }
    const shop5Display = document.getElementById('shop5');
    if (shop5Display) {
        shop5Display.innerHTML = event5.registrations; 
    }
}
function displaySpeakerNames() {
    const speaker1El = document.getElementById('speakerName1');
    if (speaker1El) { speaker1El.innerHTML = event1.speaker; }

    const speaker2El = document.getElementById('speakerName2');
    if (speaker2El) { speaker2El.innerHTML = event2.speaker; }

    const speaker3El = document.getElementById('speakerName3');
    if (speaker3El) { speaker3El.innerHTML = event3.speaker; }

    const speaker4El = document.getElementById('speakerName4');
    if (speaker4El) { speaker4El.innerHTML = event4.speaker; }

    const speaker5El = document.getElementById('speakerName5');
    if (speaker5El) { speaker5El.innerHTML = event5.speaker; }
}
displaySpeakerNames();
displayEventCounts(); 