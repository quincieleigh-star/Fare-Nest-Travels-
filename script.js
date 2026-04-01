// Flight search data - Simulated flight results
const flightsData = {
    "DXB-LHR": { airline: "Emirates", price: 450, duration: "7h 30m", departure: "10:00", arrival: "14:30" },
    "DXB-JFK": { airline: "Emirates", price: 850, duration: "14h 20m", departure: "02:00", arrival: "08:20" },
    "DXB-CDG": { airline: "Air France", price: 520, duration: "7h 45m", departure: "09:15", arrival: "14:00" },
    "LHR-DXB": { airline: "Emirates", price: 480, duration: "6h 50m", departure: "21:30", arrival: "07:20+1" },
    "JFK-LHR": { airline: "British Airways", price: 620, duration: "6h 55m", departure: "18:00", arrival: "06:55+1" },
    "CDG-DXB": { airline: "Emirates", price: 540, duration: "6h 45m", departure: "15:30", arrival: "00:15+1" }
};

// Function to search flights
function searchFlights() {
    const from = document.getElementById('from')?.value;
    const to = document.getElementById('to')?.value;
    const date = document.getElementById('date')?.value;
    const passengers = document.getElementById('passengers')?.value;
    
    if (!from || !to) {
        alert('Please select departure and arrival cities');
        return;
    }
    
    const route = `${from}-${to}`;
    const flight = flightsData[route];
    
    const resultsDiv = document.getElementById('flightResults');
    
    if (flight) {
        resultsDiv.innerHTML = `
            <div class="flight-card">
                <div class="flight-info">
                    <h3>${flight.airline}</h3>
                    <p>✈️ ${from} → ${to}</p>
                    <p>📅 ${date || 'Flexible'} | 👥 ${passengers} passenger(s)</p>
                    <p>⏱️ Duration: ${flight.duration}</p>
                    <p>Departure: ${flight.departure} | Arrival: ${flight.arrival}</p>
                </div>
                <div>
                    <div class="flight-price">$${flight.price}</div>
                    <button class="book-btn" onclick="requestBooking('${from}', '${to}', '${date}', ${flight.price})">Request Booking</button>
                </div>
            </div>
        `;
    } else {
        resultsDiv.innerHTML = `
            <div class="flight-card">
                <p>No direct flights found for ${from} to ${to}. Contact us for assistance with connecting flights!</p>
                <button class="book-btn" onclick="requestAssistance('${from}', '${to}')">Request Assistance</button>
            </div>
        `;
    }
}

// Function to request booking
function requestBooking(from, to, date, price) {
    const message = `I want to book a flight from ${from} to ${to} on ${date || 'flexible date'}. Price: $${price}. Please contact me to complete the booking.`;
    const subject = `Flight Booking Request: ${from} to ${to}`;
    window.location.href = `contact.html?message=${encodeURIComponent(message)}&subject=${encodeURIComponent(subject)}`;
}

// Function to request assistance
function requestAssistance(from, to) {
    const message = `I need assistance finding flights from ${from} to ${to}. Please help me find the best options.`;
    const subject = `Flight Assistance Needed: ${from} to ${to}`;
    window.location.href = `contact.html?message=${encodeURIComponent(message)}&subject=${encodeURIComponent(subject)}`;
}

// Handle contact form submission
function submitInquiry(event) {
    event.preventDefault();
    
    const name = document.getElementById('inquiryName')?.value;
    const email = document.getElementById('inquiryEmail')?.value;
    const message = document.getElementById('inquiryMessage')?.value;
    
    if (name && email && message) {
        // Here you would typically send to your email or database
        // For now, show success message
        const form = document.getElementById('inquiryForm');
        const successDiv = document.getElementById('inquirySuccess');
        
        if (form && successDiv) {
            form.style.display = 'none';
            successDiv.style.display = 'block';
            
            // Log the inquiry (you can replace this with actual email sending)
            console.log('New Inquiry:', { name, email, message });
            
            // Reset after 5 seconds (optional)
            setTimeout(() => {
                form.style.display = 'block';
                successDiv.style.display = 'none';
                form.reset();
            }, 5000);
        }
    }
    
    return false;
}

// Handle contact page message from URL parameters
function handleUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get('message');
    const subject = urlParams.get('subject');
    
    if (message && document.getElementById('inquiryMessage')) {
        document.getElementById('inquiryMessage').value = message;
    }
}

// Run when page loads
document.addEventListener('DOMContentLoaded', () => {
    handleUrlParams();
});