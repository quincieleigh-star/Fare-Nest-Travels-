// Flight Database
const flightsData = [
    { id: 1, airline: "Emirates", flightNo: "EK001", from: "DXB", to: "LHR", departure: "08:00", arrival: "12:30", duration: "7h 30m", price: 450, date: "2024-04-15" },
    { id: 2, airline: "Emirates", flightNo: "EK002", from: "DXB", to: "JFK", departure: "02:00", arrival: "08:20", duration: "14h 20m", price: 850, date: "2024-04-15" },
    { id: 3, airline: "Emirates", flightNo: "EK003", from: "DXB", to: "CDG", departure: "09:15", arrival: "14:00", duration: "7h 45m", price: 520, date: "2024-04-16" },
    { id: 4, airline: "Emirates", flightNo: "EK004", from: "DXB", to: "SYD", departure: "21:30", arrival: "17:20+1", duration: "13h 50m", price: 1200, date: "2024-04-17" },
    { id: 5, airline: "Emirates", flightNo: "EK005", from: "DXB", to: "HND", departure: "23:00", arrival: "13:30+1", duration: "9h 30m", price: 780, date: "2024-04-18" },
    { id: 6, airline: "British Airways", flightNo: "BA101", from: "LHR", to: "DXB", departure: "13:00", arrival: "23:30", duration: "6h 30m", price: 480, date: "2024-04-15" },
    { id: 7, airline: "British Airways", flightNo: "BA102", from: "LHR", to: "JFK", departure: "10:00", arrival: "13:00", duration: "7h", price: 620, date: "2024-04-16" },
    { id: 8, airline: "Virgin Atlantic", flightNo: "VS001", from: "LHR", to: "CDG", departure: "07:30", arrival: "09:45", duration: "1h 15m", price: 150, date: "2024-04-17" },
    { id: 9, airline: "Delta Airlines", flightNo: "DL001", from: "JFK", to: "LHR", departure: "18:00", arrival: "06:00+1", duration: "7h", price: 650, date: "2024-04-15" },
    { id: 10, airline: "American Airlines", flightNo: "AA001", from: "JFK", to: "DXB", departure: "22:00", arrival: "19:30+1", duration: "12h 30m", price: 890, date: "2024-04-16" },
    { id: 11, airline: "Air France", flightNo: "AF001", from: "CDG", to: "DXB", departure: "14:30", arrival: "23:00", duration: "6h 30m", price: 540, date: "2024-04-17" },
    { id: 12, airline: "Air France", flightNo: "AF002", from: "CDG", to: "JFK", departure: "11:00", arrival: "13:30", duration: "8h 30m", price: 580, date: "2024-04-18" },
    { id: 13, airline: "Qantas", flightNo: "QF001", from: "SYD", to: "DXB", departure: "15:00", arrival: "23:30", duration: "14h 30m", price: 1150, date: "2024-04-19" },
    { id: 14, airline: "ANA", flightNo: "NH001", from: "HND", to: "DXB", departure: "22:00", arrival: "04:00+1", duration: "10h", price: 820, date: "2024-04-20" },
    { id: 15, airline: "Singapore Airlines", flightNo: "SQ001", from: "SIN", to: "LHR", departure: "23:30", arrival: "05:30+1", duration: "13h", price: 780, date: "2024-04-21" }
];

// Hotel Database
const hotelsData = [
    { id: 1, name: "Burj Al Arab", location: "Dubai, UAE", price: 1500, rating: 5, image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400" },
    { id: 2, name: "Atlantis The Palm", location: "Dubai, UAE", price: 800, rating: 5, image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400" },
    { id: 3, name: "The Ritz London", location: "London, UK", price: 950, rating: 5, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400" },
    { id: 4, name: "The Plaza", location: "New York, USA", price: 850, rating: 5, image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400" },
    { id: 5, name: "Four Seasons Paris", location: "Paris, France", price: 1200, rating: 5, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400" },
    { id: 6, name: "Marina Bay Sands", location: "Singapore", price: 650, rating: 5, image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400" },
    { id: 7, name: "The Savoy", location: "London, UK", price: 750, rating: 5, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400" },
    { id: 8, name: "Park Hyatt Tokyo", location: "Tokyo, Japan", price: 680, rating: 5, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400" },
    { id: 9, name: "The Langham", location: "Sydney, Australia", price: 580, rating: 5, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400" }
];

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('hotelsGrid')) {
        displayHotels();
    }
});

// Quick Search Function
function quickSearch() {
    const from = document.getElementById('quickFrom')?.value?.toUpperCase();
    const to = document.getElementById('quickTo')?.value?.toUpperCase();
    const date = document.getElementById('quickDate')?.value;
    
    if (!from || !to) {
        alert('Please enter both departure and arrival airports (e.g., DXB, LHR, JFK)');
        return;
    }
    
    const availableFlights = flightsData.filter(flight => flight.from === from && flight.to === to);
    const resultsDiv = document.getElementById('quickResults');
    
    if (!resultsDiv) return;
    
    if (availableFlights.length > 0) {
        resultsDiv.innerHTML = availableFlights.map(flight => `
            <div class="flight-card">
                <div class="flight-info">
                    <div class="flight-airline">
                        <strong>${flight.airline}</strong> | ${flight.flightNo}
                    </div>
                    <div>🕐 ${flight.departure} → ${flight.arrival}</div>
                    <div>⏱️ Duration: ${flight.duration}</div>
                    <div>📅 Date: ${flight.date}</div>
                </div>
                <div>
                    <div class="flight-price">$${flight.price}</div>
                    <button class="book-flight-btn" onclick="bookFlight('${flight.airline}', '${flight.from}', '${flight.to}', '${flight.date}', ${flight.price}, 1)">Book Now</button>
                </div>
            </div>
        `).join('');
    } else {
        resultsDiv.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <p>No direct flights found for ${from} to ${to}. Contact us for assistance!</p>
                <button class="btn" onclick="requestAssistance('${from}', '${to}')">Request Assistance</button>
            </div>
        `;
    }
}

// Search Flights Function
function searchFlights() {
    const from = document.getElementById('from')?.value;
    const to = document.getElementById('to')?.value;
    const date = document.getElementById('date')?.value;
    const passengers = parseInt(document.getElementById('passengers')?.value || 1);
    
    if (!from || !to) {
        alert('Please select departure and arrival cities');
        return;
    }
    
    let availableFlights = flightsData.filter(flight => flight.from === from && flight.to === to);
    const resultsDiv = document.getElementById('flightResults');
    const dateInfo = document.getElementById('dateInfo');
    
    if (availableFlights.length === 0) {
        if (resultsDiv) {
            resultsDiv.innerHTML = `
                <div style="text-align: center; padding: 3rem;">
                    <h3>✈️ No direct flights found for ${from} to ${to}</h3>
                    <p>Contact us for connecting flights and the best deals!</p>
                    <button class="btn" onclick="requestAssistance('${from}', '${to}')">Request Assistance</button>
                </div>
            `;
        }
        return;
    }
    
    // Find nearest date if date is specified
    if (date && dateInfo) {
        const searchDate = new Date(date);
        availableFlights = availableFlights.map(flight => {
            const flightDate = new Date(flight.date);
            const diffDays = Math.abs(flightDate - searchDate) / (1000 * 60 * 60 * 24);
            return { ...flight, diffDays };
        });
        
        availableFlights.sort((a, b) => a.diffDays - b.diffDays);
        
        const nearestFlight = availableFlights[0];
        if (nearestFlight.diffDays === 0) {
            dateInfo.innerHTML = '<p style="color: #28a745; margin: 1rem 0;">✅ Flights available on your selected date!</p>';
        } else {
            dateInfo.innerHTML = `<p style="color: #ff9800; margin: 1rem 0;">📅 Nearest flight is ${Math.round(nearestFlight.diffDays)} days ${nearestFlight.diffDays > 0 ? 'after' : 'before'} your selected date</p>`;
        }
    }
    
    // Display results
    if (resultsDiv) {
        resultsDiv.innerHTML = availableFlights.slice(0, 5).map(flight => `
            <div class="flight-card">
                <div class="flight-info">
                    <div class="flight-airline">
                        <strong>${flight.airline}</strong> | ${flight.flightNo}
                    </div>
                    <div>✈️ ${flight.from} → ${flight.to}</div>
                    <div>🕐 ${flight.departure} → ${flight.arrival}</div>
                    <div>⏱️ Duration: ${flight.duration}</div>
                    <div>📅 Date: ${flight.date}</div>
                    <div>👥 ${passengers} passenger(s)</div>
                </div>
                <div>
                    <div class="flight-price">$${flight.price * passengers}</div>
                    <div style="font-size: 0.8rem; color: #666;">$${flight.price} per person</div>
                    <button class="book-flight-btn" onclick="bookFlight('${flight.airline}', '${flight.from}', '${flight.to}', '${flight.date}', ${flight.price}, ${passengers})">Book Now</button>
                </div>
            </div>
        `).join('');
    }
}

// Book Flight Function
function bookFlight(airline, from, to, date, price, passengers) {
    const totalPrice = price * passengers;
    const message = `🛫 NEW FLIGHT BOOKING REQUEST 🛬\n\n` +
        `Airline: ${airline}\n` +
        `Route: ${from} → ${to}\n` +
        `Date: ${date}\n` +
        `Passengers: ${passengers}\n` +
        `Price per person: $${price}\n` +
        `Total: $${totalPrice}\n\n` +
        `Please contact me to complete the booking.`;
    
    // Send to WhatsApp
    const whatsappNumber = "44798515953";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    alert('📱 Booking request sent! Our WhatsApp will open. Send the message to confirm your booking.\n\nWe will contact you shortly!');
    
    // Log for debugging
    console.log('Flight Booking:', { airline, from, to, date, price, passengers });
}

// Book Hotel Function
function bookHotel(hotelId, hotelName, price) {
    const message = `🏨 NEW HOTEL BOOKING REQUEST 🏨\n\n` +
        `Hotel: ${hotelName}\n` +
        `Price per night: $${price}\n\n` +
        `Please contact me to complete the reservation.`;
    
    // Send to WhatsApp
    const whatsappNumber = "44798515953";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    alert('📱 Hotel booking request sent! Our WhatsApp will open. Send the message to confirm your booking.\n\nWe will contact you shortly!');
    
    console.log('Hotel Booking:', { hotelId, hotelName, price });
}

// Request Assistance Function
function requestAssistance(from, to) {
    const message = `🛫 FLIGHT ASSISTANCE REQUEST 🛬\n\n` +
        `I need help finding flights from ${from} to ${to}.\n\n` +
        `Please contact me with the best available options.`;
    
    const whatsappNumber = "44798515953";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    alert('Assistance request sent! Our travel expert will contact you on WhatsApp shortly.');
}

// Submit Inquiry Function
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
    
    if (!name || !message || !inquiryType) {
        alert('Please fill in all required fields');
        return false;
    }
    
    // Prepare full message
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

// Display Hotels Function
function displayHotels() {
    const hotelsGrid = document.getElementById('hotelsGrid');
    if (!hotelsGrid) return;
    
    hotelsGrid.innerHTML = hotelsData.map(hotel => `
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

// Filter Hotels Function
function filterHotels() {
    const searchTerm = document.getElementById('hotelSearch')?.value?.toLowerCase() || '';
    const priceFilter = document.getElementById('priceFilter')?.value || 'all';
    
    let filtered = hotelsData.filter(hotel => 
        hotel.name.toLowerCase().includes(searchTerm) || 
        hotel.location.toLowerCase().includes(searchTerm)
    );
    
    if (priceFilter !== 'all') {
        if (priceFilter === '0-500') {
            filtered = filtered.filter(hotel => hotel.price < 500);
        } else if (priceFilter === '500-1000') {
            filtered = filtered.filter(hotel => hotel.price >= 500 && hotel.price <= 1000);
        } else if (priceFilter === '1000+') {
            filtered = filtered.filter(hotel => hotel.price > 1000);
        }
    }
    
    const hotelsGrid = document.getElementById('hotelsGrid');
    if (hotelsGrid) {
        hotelsGrid.innerHTML = filtered.map(hotel => `
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
}