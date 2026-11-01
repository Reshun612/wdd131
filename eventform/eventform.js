// WDD 131 Week 7 Prove: Event Ticket Form
const form = document.querySelector("#event-form");
const attendeeType = document.querySelector("#attendee-type");
const typeDetails = document.querySelector("#type-details");
const typeDetailsLabel = document.querySelector("#type-details-label");
const typeDetailsInput = document.querySelector("#type-details-input");
const typeDetailsHelp = document.querySelector("#type-details-help");
const eventDate = document.querySelector("#event-date");
const errors = document.querySelector("#form-errors");
const ticket = document.querySelector("#ticket");

// The event date must be later than today's date.
const today = new Date();
const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
const tomorrowString = [tomorrow.getFullYear(),String(tomorrow.getMonth()+1).padStart(2,"0"),String(tomorrow.getDate()).padStart(2,"0")].join("-");
eventDate.min = tomorrowString;

function updateAttendeeField(){
 const type=attendeeType.value;
 typeDetails.hidden=type==="";
 typeDetailsInput.disabled=type==="";
 typeDetailsInput.required=type!=="";
 if(type==="student"){
  typeDetailsLabel.textContent="Student I#";
  typeDetailsInput.placeholder="Enter your 9-digit student I number";
  typeDetailsInput.inputMode="numeric";
  typeDetailsInput.pattern="[0-9]{9}";
  typeDetailsInput.maxLength=9;
  typeDetailsHelp.textContent="Enter exactly 9 digits.";
 }else if(type==="guest"){
  typeDetailsLabel.textContent="Access Code";
  typeDetailsInput.placeholder="Enter the event access code";
  typeDetailsInput.inputMode="text";
  typeDetailsInput.removeAttribute("pattern");
  typeDetailsInput.removeAttribute("maxlength");
  typeDetailsHelp.textContent="Enter the code EVENT131.";
 }else{
  typeDetailsLabel.textContent="Student I#";
  typeDetailsInput.placeholder="";
  typeDetailsInput.removeAttribute("pattern");
  typeDetailsInput.removeAttribute("maxlength");
  typeDetailsHelp.textContent="";
 }
 typeDetailsInput.value="";
}
function todayString(){return [today.getFullYear(),String(today.getMonth()+1).padStart(2,"0"),String(today.getDate()).padStart(2,"0")].join("-");}
function showErrors(errorList){
 errors.replaceChildren();
 const heading=document.createElement("p");heading.textContent="Please fix the following:";
 const list=document.createElement("ul");
 errorList.forEach(error=>{const item=document.createElement("li");item.textContent=error;list.append(item);});
 errors.append(heading,list);errors.hidden=false;
}
attendeeType.addEventListener("change",()=>{updateAttendeeField();errors.hidden=true;ticket.hidden=true;});
form.addEventListener("submit",event=>{
 event.preventDefault();errors.hidden=true;ticket.hidden=true;
 const errorList=[];
 const name=document.querySelector("#name").value.trim();
 const email=document.querySelector("#email").value.trim();
 const selectedDate=eventDate.value;
 const type=attendeeType.value;
 const detail=typeDetailsInput.value.trim();
 if(!name)errorList.push("Please enter your full name.");
 if(!email||!document.querySelector("#email").checkValidity())errorList.push("Please enter a valid email address.");
 if(!selectedDate||selectedDate<=todayString())errorList.push("Please choose an event date later than today.");
 if(!type)errorList.push("Please select Student or Guest.");
 if(type==="student"&&!/^[0-9]{9}$/.test(detail))errorList.push("Student I# must contain exactly 9 digits.");
 if(type==="guest"&&detail!=="EVENT131")errorList.push("Guest Access Code must be EVENT131.");
 if(errorList.length){showErrors(errorList);return;}
 document.querySelector("#ticket-name").textContent=name;
 document.querySelector("#ticket-date").textContent=new Date(selectedDate+"T12:00:00").toLocaleDateString(undefined,{year:"numeric",month:"long",day:"numeric"});
 document.querySelector("#ticket-type").textContent=type==="student"?"Student":"Guest";
 document.querySelector("#ticket-number").textContent="WDD-"+Math.random().toString(36).slice(2,8).toUpperCase();
 ticket.hidden=false;ticket.scrollIntoView({behavior:"smooth",block:"nearest"});
});
updateAttendeeField();