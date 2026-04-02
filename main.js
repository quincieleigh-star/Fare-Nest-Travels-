
const whatsapp="44798515953";
const email="info@farenesttravels.com";

function sendBooking(text){
let msg=encodeURIComponent(text);
window.open(`https://wa.me/${whatsapp}?text=${msg}`,"_blank");
window.location.href=`mailto:${email}?subject=Booking Request&body=${msg}`;
}

function contactSubmit(){
let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let message=document.getElementById("message").value;

let pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!pattern.test(email)){alert("Enter valid email");return false}

let text=`New Inquiry from ${name}\nEmail:${email}\n\n${message}`;

sendBooking(text);
alert("Message prepared. Please send it.");
return false;
}
