
function searchFlights(){

let from=document.getElementById("from").value;
let to=document.getElementById("to").value;
let date=document.getElementById("date").value;

let results=document.getElementById("results");
results.innerHTML="";

let airlines=["Emirates","British Airways","Qatar Airways","Lufthansa","Turkish Airlines"];

for(let i=0;i<6;i++){

let airline=airlines[i%airlines.length];
let price=320 + (i*60);

let div=document.createElement("div");
div.className="card";

div.innerHTML=`
<h3>${airline}</h3>
<p>${from} ➜ ${to}</p>
<p>Date: ${date}</p>
<p><strong>£${price}</strong></p>
<button onclick="sendBooking('Flight booking: ${airline} from ${from} to ${to} on ${date} Price £${price}')">Book Now</button>
`;

results.appendChild(div);
}

}
