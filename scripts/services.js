const serviceForm = document.querySelector("form");
const serviceTable = document.getElementById("serviceTable");
const STORAGE_KEY = 'eventServices'; 

// Function to save array of services to localStorage
function saveServices(servicesArray) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(servicesArray));
}

// Function to load services from localStorage and display 
function loadServices() {
    const storedServices = localStorage.getItem(STORAGE_KEY);
    if (storedServices) {
        const services = JSON.parse(storedServices);
        services.forEach(serviceData => {
            const newService = new Service(serviceData.title, serviceData.speaker, serviceData.date, serviceData.location, serviceData.duration);
            const row = addRow(newService);
            serviceTable.appendChild(row);
        });
    }
}
// Function to retrieve services from table 
function getAllServicesFromTable() {
    const services = [];
    const rows = serviceTable.querySelectorAll("tr"); 
    
    rows.forEach(row => {
        const cells = row.querySelectorAll("td");
        if (cells.length === 6) { 
            const service = new Service(
                cells[0].textContent,
                cells[1].textContent,
                cells[2].textContent,
                cells[3].textContent,
                cells[4].textContent
            );
            services.push(service);
        }
    });
    return services;
}

// Handle the form submission (jQuery part for basic validation styles)
$("#servicesForm").submit(function(event){
    event.preventDefault();
});
$("button").click(function(){
    $("input").each(function(){
        if ($(this).val().trim() === "") {
            $(this).addClass("error");
        }else {
            $(this).removeClass("error"); 
            
        }
    });
});

//product const
function Service(title, speaker, date,location,duration){
    this.title = title ;
    this.speaker= speaker;
    this.date= date;
    this.location= location;
    this.duration= duration;
}

// 2. pull info from the form
function onSubmitService(eventService){
    eventService.preventDefault();

    const title = serviceForm.elements["eventTitle"].value;
    const speaker = serviceForm.elements["eventSpeaker"].value;
    const date = serviceForm.elements["eventDate"].value;
    const location = serviceForm.elements["eventLocation"].value;
    const duration = serviceForm.elements["eventDuration"].value;

    // --- VALIDATION LOGIC ---
    if (title === "" || speaker === "" || date === "" || location === "" || duration === "") {
        alert("Error: One or more fields are empty. Cannot add service to table."); 
        return; 
    }

    const newService = new Service(title, speaker,date,location,duration,); 
    const row = addRow(newService);
    serviceTable.appendChild(row); 

    // Get all services, then save the array
    const allServices = getAllServicesFromTable();
    saveServices(allServices);

    serviceForm.reset();
}

function addRow(newService){
    const row = document.createElement("tr");
    row.innerHTML=`
    <td>${newService.title}</td>
    <td>${newService.speaker}</td>
    <td>${newService.date}</td>
    <td>${newService.location}</td>
    <td>${newService.duration}</td>
    <td><button class="btn btn-danger btn-sm delete-btn">Delete </button></td>
    `;
    // delete function
    row.querySelector(".delete-btn").addEventListener("click", function (){
        const confirmation = confirm ("Are you sure you want to delete?");

        if(!confirmation) return;
        row.remove();
        
        // Refresh the saved data array after an item is removed
        const allServices = getAllServicesFromTable();
        saveServices(allServices);
    });
    return row;
}
serviceForm.addEventListener("submit", onSubmitService);

$(document).ready(function() {
    loadServices();
});