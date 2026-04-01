// Global Variables
let allFlights = [];
let allHotels = [];

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadFlightsData();
    loadHotelsData();
    setupEventListeners();
});

// Load Flight Data (Comprehensive Airport Database)
function loadFlightsData() {
    // Comprehensive flight database with major airports worldwide
    allFlights = [
        // Dubai (DXB) Flights
        { id: 1, airline: "Emirates", flightNo: "EK001", from: "DXB", to: "LHR", departure: "08:00", arrival: "12:30", duration: "7h 30m", price: 450, date: "2024-04-15", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=100" },
        { id: 2, airline: "Emirates", flightNo: "EK002", from: "DXB", to: "JFK", departure: "02:00", arrival: "08:20", duration: "14h 20m", price: 850, date: "2024-04-15", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=100" },
        { id: 3, airline: "Emirates", flightNo: "EK003", from: "DXB", to: "CDG", departure: "09:15", arrival: "14:00", duration: "7h 45m", price: 520, date: "2024-04-16", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=100" },
        { id: 4, airline: "Emirates", flightNo: "EK004", from: "DXB", to: "SYD", departure: "21:30", arrival: "17:20+1", duration: "13h 50m", price: 1200, date: "2024-04-17", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=100" },
        { id: 5, airline: "Emirates", flightNo: "EK005", from: "DXB", to: "HND", departure: "23:00", arrival: "13:30+1", duration: "9h 30m", price: 780, date: "2024-04-18", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=100" },
        
        // London (LHR) Flights
        { id: 6, airline: "British Airways", flightNo: "BA101", from: "LHR", to: "DXB", departure: "13:00", arrival: "23:30", duration: "6h 30m", price: 480, date: "2024-04-15", image: "https://images.unsplash.com/photo-1562778612-4a0c9300a64b?w=100" },
        { id: 7, airline: "British Airways", flightNo: "BA102", from: "LHR", to: "JFK", departure: "10:00", arrival: "13:00", duration: "7h", price: 620, date: "2024-04-16", image: "https://images.unsplash.com/photo-1562778612-4a0c9300a64b?w=100" },
        { id: 8, airline: "Virgin Atlantic", flightNo: "VS001", from: "LHR", to: "CDG", departure: "07:30", arrival: "09:45", duration: "1h 15m", price: 150, date: "2024-04-17", image: "https://images.unsplash.com/photo-1562778612-4a0c9300a64b?w=100" },
        
        // New York (JFK) Flights
        { id: 9, airline: "Delta Airlines", flightNo: "DL001", from: "JFK", to: "LHR", departure: "18:00", arrival: "06:00+1", duration: "7h", price: 650, date: "2024-04-15", image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?w=100" },
        { id: 10, airline: "American Airlines", flightNo: "AA001", from: "JFK", to: "DXB", departure: "22:00", arrival: "19:30+1", duration: "12h 30m", price: 890, date: "2024-04-16", image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?w=100" },
        
        // Paris (CDG) Flights
        { id: 11, airline: "Air France", flightNo: "AF001", from: "CDG", to: "DXB", departure: "14:30", arrival: "23:00", duration: "6h 30m", price: 540, date: "2024-04-17", image: "https://images.unsplash.com/photo-1562778612-4a0c9300a64b?w=100" },
        { id: 12, airline: "Air France", flightNo: "AF002", from: "CDG", to: "JFK", departure: "11:00", arrival: "13:30", duration: "8h 30m", price: 580, date: "2024-04-18", image: "https://images.unsplash.com/photo-1562778612-4a0c9300a64b?w=100" },
        
        // Sydney (SYD) Flights
        { id: 13, airline: "Qantas", flightNo: "QF001", from: "SYD", to: "DXB", departure: "15:00", arrival: "23:30", duration: "14h 30m", price: 1150, date: "2024-04-19", image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?w=100" },
        
        // Tokyo (HND) Flights
        { id: 14, airline: "ANA", flightNo: "NH001", from: "HND", to: "DXB", departure: "22:00", arrival: "04:00+1", duration: "10h", price: 820, date: "2024-04-20", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=100" }
    ];
}

// Load Hotel Data (Worldwide Hotels)
function loadHotelsData() {
    allHotels = [
        { id: 1, name: "Burj Al Arab", location: "Dubai, UAE", price: 1500, rating: 5, image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400", description: "7-star luxury hotel with stunning sea views" },
        { id: 2, name: "Atlantis The Palm", location: "Dubai, UAE", price: 800, rating: 5, image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400", description: "Iconic resort with waterpark and aquarium" },
        { id: 3, name: "The Ritz London", location: "London, UK", price: 950, rating: 5, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400", description: "Luxury hotel in the heart of London" },
        { id: 4, name: "The Plaza", location: "New York, USA", price: 850, rating: 5, image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400", description: "Iconic hotel overlooking Central Park" },
        { id: 5, name: "Four Seasons", location: "Paris, France", price: 1200, rating: 5, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400", description: "Luxury hotel near Champs-Élysées" },
        { id: 6, name: "Marina Bay Sands", location: "Singapore", price: 650, rating: 5, image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400", description: "Iconic hotel with rooftop infinity pool" },
        { id: 7, name: "Burj Al Arab Jumeirah", location: "Dubai, UAE", price: 1800, rating: 5, image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400", description: "World's most luxurious hotel" },
        { id: 8, name: "The Savoy", location: "London, UK", price: 750, rating: 5, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400", description: "Historic luxury hotel on the Strand" }
    ];
    
    displayHotels();
}

// Display Hotels
function displayHotels(filteredHotels = null) {
    const hotelsGrid = document.getElementById('hotelsGrid');
    if (!hotelsGrid) return;
    
    const hotels = filteredHotels || allHotels;
    
    hotelsGrid.innerHTML = hotels.map(hotel => `
        <div class="hotel-card">
            <img src="${hotel.image}" alt="${hotel.name}">
            <div class="hotel-info">
                <div class="hotel-name">${hotel.name}</div>
                <div class="hotel-location">📍 ${hotel.location}</div>
                <div class="hotel-rating">${'⭐'.repeat(hotel.rating)}</div>
                <div class="hotel-price">$${hotel.price} <span style="font-size: 0.9rem; color: #666;">/night</span></div>
                <button class="book-hotel-btn" onclick="bookHotel(${hotel.id}, '${hotel.name}', ${hotel.price})">Book Now</button>
            </div>
        </div>
    `).join('');
}

// Search Flights with Nearest Date Logic
function searchFlights() {
    const from = document.getElementById('from')?.value;
    const to = document.getElementById('to')?.value;
    const date = document.getElementById('date')?.value;
    const passengers = document.getElementById('passengers')?.value;
    
    if (!from || !to) {
        alert('Please select departure and arrival cities');
        return;
    }
    
    // Filter flights by route
    let availableFlights = allFlights.filter(flight => flight.from === from && flight.to === to);
    
    if (availableFlights.length === 0) {
        document.getElementById('flightResults').innerHTML = `
            <div style="text-align: center; padding: 3rem;">
                <h3>✈️ No direct flights found for ${from} to ${to}</h3>
                <p>Contact us for connecting flights and the best deals!</p>
                <button class="btn" onclick="requestAssistance('${from}', '${to}')">Request Assistance</button>
            </div>
        `;
        return;
    }
    
    // If date is specified, find nearest available date
    if (date) {
        const searchDate = new Date(date);
        
        // Calculate date differences
        availableFlights = availableFlights.map(flight => {
            const flightDate = new Date(flight.date);
            const diffDays = Math.abs(flightDate - searchDate) / (1000 * 60 * 60 * 24);
            return { ...flight, diffDays };
        });
        
        // Sort by closest date
        availableFlights.sort((a, b) => a.diffDays - b.diffDays);
        
        // Take closest 3 flights
        availableFlights = availableFlights.slice(0, 3);
        
        const nearestInfo = availableFlights[0].diffDays === 0 ? 
            "✅ Flights available on your selected date!" :
            `📅 Nearest flights: ${Math.round(availableFlights[0].diffDays)} days ${availableFlights[0].diffDays > 0 ? 'after' : 'before'} your selected date`;
        
        document.getElementById('dateInfo').innerHTML = `<p style="color: #667eea; margin-bottom: 1rem;">${nearestInfo}</p>`;
    }
    
    // Display results
    displayFlightResults(availableFlights, from, to, date, passengers);
}

// Display Flight Results
function displayFlightResults(flights, from, to, date, passengers) {
    const resultsDiv = document.getElementById('flightResults');
    
    if (flights.length === 0) {
        resultsDiv.innerHTML = '<p>No flights found</p>';
        return;
    }
    
    resultsDiv.innerHTML = flights.map(flight => `
        <div class="flight-card">
            <div class="flight-info">
                <div class="flight-airline">
                    <img src="${flight.image}" alt="${flight.airline}">
                    <strong>${flight.airline}</strong> | ${flight.flightNo}
                </div>
                <div class="flight-time">🕐 ${flight.departure} → ${flight.arrival}</div>
                <div>⏱️ Duration: ${flight.duration}</div>
                <div>📅 Date: ${flight.date}</div>
                <div>👥 ${passengers || 1} passenger(s)</div>
            </div>
            <div style="text-align: center;">
                <div class="flight-price">$${flight.price * (passengers || 1)}</div>
                <div style="font-size: 0.8rem; color: #666;">per person from $${flight.price}</div>
                <button class="book-flight-btn" onclick="bookFlight('${flight.airline}', '${from}', '${to}', '${flight.date}', ${flight.price}, ${passengers || 1})">Book This Flight</button>
            </div>
        </div>
    `).join('');
}

// Book Flight - Send to WhatsApp and Email
function bookFlight(airline, from, to, date, price, passengers) {
    const totalPrice = price * passengers;
    const message = `🛫 NEW FLIGHT BOOKING REQUEST 🛬\n\n` +
        `Airline: ${airline}\n` +
        `Route: ${from} → ${to}\n` +
        `Date: ${date}\n` +
        `Passengers: ${passengers}\n` +
        `Price per person: $${price}\n` +
        `Total: $${totalPrice}\n\n` +
        `Customer needs assistance with booking. Please contact them to complete the booking.`;
    
    sendToWhatsAppAndEmail(message, 'Flight Booking Request');
}

// Book Hotel - Send to WhatsApp and Email
function bookHotel(hotelId, hotelName, price) {
    const message = `🏨 NEW HOTEL BOOKING REQUEST 🏨\n\n` +
        `Hotel: ${hotelName}\n` +
        `Price per night: $${price}\n\n` +
        `Customer wants to book this hotel. Please contact them to complete the reservation.`;
    
    sendToWhatsAppAndEmail(message, 'Hotel Booking Request');
}

// Send to WhatsApp and Email
function sendToWhatsAppAndEmail(message, subject) {
    // WhatsApp - Opens chat with pre-filled message
    const whatsappNumber = "44798515953"; // Your WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new window
    window.open(whatsappUrl, '_blank');
    
    // Also send via email using mailto
    const email = "info@farenesttravels.com";
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    
    // Open email client (optional - comment if you don't want both)
    // window.open(mailtoUrl, '_blank');
    
    alert('📱 Booking request sent! Our WhatsApp will open. Send the message to confirm your booking.\n\nWe will contact you shortly!');
    
    // Log to console for debugging
    console.log('Booking Request:', { message, subject });
}

// Request Flight Assistance
function requestAssistance(from, to) {
    const message = `🛫 FLIGHT ASSISTANCE REQUEST 🛬\n\n` +
        `Customer needs help finding flights from ${from} to ${to}.\n\n` +
        `Please contact them with the best available options.`;
    
    const whatsappNumber = "44798515953";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    alert('Assistance request sent! Our travel expert will contact you on WhatsApp shortly.');
}

// Submit Inquiry - Validate Email and Send
function submitInquiry(event) {
    event.preventDefault();
    
    const name = document.getElementById('inquiryName')?.value;
    const email = document.getElementById('inquiryEmail')?.value;
    const phone = document.getElementById('inquiryPhone')?.value;
    const inquiryType = document.getElementById('inquiryType')?.value;
    const message = document.getElementById('inquiryMessage')?.value;
    
    // Email validation
    const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('❌ Please enter a valid email address (e.g., name@domain.com)');
        return false;
    }
    
    if (!name || !message) {
        alert('Please fill in all required fields');
        return false;
    }
    
    // Prepare message
    const fullMessage = `📧 NEW CUSTOMER INQUIRY 📧\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone || 'Not provided'}\n` +
        `Inquiry Type: ${inquiryType}\n` +
        `Message: ${message}\n\n` +
        `Please respond to this customer as soon as possible.`;
    
    // Send to WhatsApp
    const whatsappNumber = "44798515953";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    // Also send to email
    const mailtoUrl = `mailto:info@farenesttravels.com?subject=${encodeURIComponent('New Inquiry from ' + name)}&body=${encodeURIComponent(fullMessage)}`;
    window.open(mailtoUrl, '_blank');
    
    // Show success message
    const form = document.getElementById('inquiryForm');
    const successDiv = document.getElementById('inquirySuccess');
    
    if (form && successDiv) {
        form.style.display = 'none';
        successDiv.style.display = 'block';
        
        setTimeout(() => {
            form.style.display = 'block';
            successDiv.style.display = 'none';
            form.reset();
        }, 5000);
    }
    
    alert('✅ Inquiry sent successfully! Our team will contact you within 24 hours via WhatsApp and email.');
    
    return false;
}

// Setup Event Listeners
function setupEventListeners() {
    // Tab switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    if (tabBtns) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                tabBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                const tab = this.dataset.tab;
                const flightSearch = document.querySelector('.flight-search-form');
                const hotelSearch = document.querySelector('.hotel-search-form');
                
                if (tab === 'flights' && flightSearch) flightSearch.style.display = 'grid';
                if (tab === 'hotels' && hotelSearch) hotelSearch.style.display = 'grid';
            });
        });
    }
}

// Quick Search Function
function quickSearch() {
    const from = document.getElementById('quickFrom')?.value?.toUpperCase();
    const to = document.getElementById('quickTo')?.value?.toUpperCase();
    const date = document.getElementById('quickDate')?.value;
    
    if (!from || !to) {
        alert('Please enter both departure and arrival airports (e.g., DXB, LHR, JFK)');
        return;
    }
    
    const availableFlights = allFlights.filter(flight => flight.from === from && flight.to === to);
    
    if (availableFlights