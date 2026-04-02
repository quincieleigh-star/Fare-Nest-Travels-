const API_KEY = "YOUR_API_KEY";
const API_SECRET = "YOUR_API_SECRET";

let token = "";

// 🔐 Get Amadeus Token
async function getToken() {
const res = await fetch("https://test.api.amadeus.com/v1/security/oauth2/token", {
method: "POST",
headers: { "Content-Type": "application/x-www-form-urlencoded" },
body: `grant_type=client_credentials&client_id=${API_KEY}&client_secret=${API_SECRET}`
});

const data = await res.json();
token = data.access_token;
}

// ✈️ Airport autocomplete
async function searchAirport(query) {
if (!token) await getToken();

const res = await fetch(
`https://test.api.amadeus.com/v1/reference-data/locations?subType=AIRPORT,CITY&keyword=${query}`,
{ headers: { Authorization: `Bearer ${token}` } }
);

const data = await res.json();
return data.data || [];
}

// UI autocomplete
function setup(inputId, listId) {
const input = document.getElementById(inputId);
const list = document.getElementById(listId);

input.addEventListener("input", async () => {
const results = await searchAirport(input.value);

```
list.innerHTML = results.map(a => `
  <li onclick="selectAirport('${inputId}','${a.iataCode}','${a.name}')">
    ${a.name} (${a.iataCode})
  </li>
`).join("");
```

});
}

function selectAirport(inputId, code, name) {
document.getElementById(inputId).value = `${name} (${code})`;
document.getElementById(inputId).dataset.code = code;
document.querySelectorAll("ul").forEach(u => u.innerHTML = "");
}

// ✈️ Flight search
async function searchFlights() {
if (!token) await getToken();

const from = document.getElementById("from").dataset.code;
const to = document.getElementById("to").dataset.code;
const date = document.getElementById("date").value;

const res = await fetch(
`https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${from}&destinationLocationCode=${to}&departureDate=${date}&adults=1`,
{ headers: { Authorization: `Bearer ${token}` } }
);

const data = await res.json();

const resultsDiv = document.getElementById("results");

if (!data.data || data.data.length === 0) {
resultsDiv.innerHTML = "<p>No flights found. Showing alternatives...</p>";
return;
}

resultsDiv.innerHTML = data.data.slice(0,5).map(f => {
const price = f.price.total;
const airline = f.validatingAirlineCodes[0];

```
return `
  <div class="card">
    <h3>${from} → ${to}</h3>
    <p>Airline: ${airline}</p>
    <p>Price: $${price}</p>
    <button onclick="book('${from}','${to}','${date}','${price}')">Book Now</button>
  </div>
`;
```

}).join("");
}

// 📲 Booking
function book(from, to, date, price) {
const msg = `Flight: ${from} to ${to} on ${date} Price: $${price}`;

window.open(`https://wa.me/44798515953?text=${encodeURIComponent(msg)}`);
window.location.href = `mailto:info@farenesttravels.com?body=${msg}`;
}

// Init
setup("from", "fromList");
setup("to", "toList");
async function searchHotels() {
  const city = document.getElementById("city").value;

  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=hotels in ${city}`
  );

  const data = await res.json();

  document.getElementById("results").innerHTML = data.slice(0,10).map(h => `
    <div>
      <h3>${h.display_name}</h3>
      <button onclick="bookHotel('${h.display_name}')">Book via WhatsApp</button>
    </div>
  `).join("");
}

function bookHotel(name) {
  const msg = `Hotel Booking: ${name}`;
  window.open(`https://wa.me/44798515953?text=${encodeURIComponent(msg)}`);
}
