
function searchFlights(){

let from=document.getElementById("from").value;
let to=document.getElementById("to").value;
let date=document.getElementById("date").value;

let results=document.getElementById("results");
results.innerHTML="";

for(let i=0;i<5;i++){

let card=document.createElement("div");
card.className="card";

let flight=`Flight FN${100+i}`;

card.innerHTML=`
<h3>${flight}</h3>
<p>${from} ➜ ${to}</p>
<p>Date: ${date}</p>
<p>Price: $${300+i*50}</p>
<button onclick="bookFlight('Flight ${flight} From ${from} To ${to} Date ${date}')">Book Now</button>
`;

results.appendChild(card);

}

}
