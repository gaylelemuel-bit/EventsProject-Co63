const serviceForm = document.querySelector("form");
const serviceTable = document.getElementById("serviceTable");
// Handle the form submission 
$("#servicesForm").submit(function(event){
    event.preventDefault();
});
$("button").click(function(){
    // Iterate over every input element 
    //.val reads user input and .trim cleans white spaces
    $("input").each(function(){
        if ($(this).val().trim() === "") {
            $(this).addClass("error");
        }else {
            $(this).removeClass("error"); 
            return;
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

    // use input name to pull data 
    const title = serviceForm.elements["eventTitle"].value;
    const speaker = serviceForm.elements["eventSpeaker"].value;
    const date = serviceForm.elements["eventDate"].value;
    const location = serviceForm.elements["eventLocation"].value;
    const duration = serviceForm.elements["eventDuration"].value;

       // --- VALIDATION LOGIC ADDED HERE ---
    if (title === "" || speaker === "" || date === "" || location === "" || duration === "") {
        alert("Error: One or more fields are empty. Cannot add service to table."); 
        return; 
    }

    const newService = new Service(title, speaker,date,location,duration,); 
    //3. use the info
    const row = addRow(newService);
    serviceTable.appendChild(row); 

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
    });
    return row;
}
serviceForm.addEventListener("submit", onSubmitService);
