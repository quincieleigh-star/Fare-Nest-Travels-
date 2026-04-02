
async function searchPlaces(){

let city=document.getElementById("city").value;

let url=`https://nominatim.openstreetmap.org/search?format=json&q=${city}+hotel`;

let res=await fetch(url);
let data=await res.json();

let results=document.getElementById("places");
results.innerHTML="";

data.slice(0,8).forEach(p=>{

let card=document.createElement("div");
card.className="card";

card.innerHTML=`
<h3>${p.display_name.split(",")[0]}</h3>
<p>${p.display_name}</p>
<button onclick="bookFlight('Hotel booking: ${p.display_name}')">Book via WhatsApp</button>
`;

results.appendChild(card);

});

}
