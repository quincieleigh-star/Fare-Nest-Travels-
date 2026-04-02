
const whatsapp="44798515953";
const email="info@farenesttravels.com";

function bookFlight(details){
let msg=`Hello Farenest Travels,%0A%0AI want to book:%0A${details}`;
window.open(`https://wa.me/${whatsapp}?text=${msg}`,"_blank");
window.location.href=`mailto:${email}?subject=Flight Booking&body=${msg}`;
}

function contactSubmit(){
let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let phone=document.getElementById("phone").value;
let msg=document.getElementById("message").value;

let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){
alert("Please enter valid email");
return false;
}

let text=`New inquiry from ${name}%0AEmail:${email}%0APhone:${phone}%0A%0A${msg}`;

window.open(`https://wa.me/${whatsapp}?text=${text}`,"_blank");
window.location.href=`mailto:info@farenesttravels.com?subject=Customer Inquiry&body=${text}`;

alert("Message prepared. Please send it to confirm.");
return false;
}
