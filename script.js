// Global Variables
let map;
let markers = [];
let currentMap = null;

// Flight Data Generator (Dynamic based on real airport data)
function generateFlights() {
    const flights = [];
    const airlines = [
        "Emirates", "Etihad Airways", "Qatar Airways", "British Airways", "Air France",
        "Lufthansa", "Singapore Airlines", "Delta Air Lines", "United Airlines", "American Airlines",
        "Turkish Airlines", "Thai Airways", "Malaysia Airlines", "Qantas", "Air Canada",
        "Korean Air", "Japan Airlines", "ANA", "Cathay Pacific", "China Southern"
    ];
    
    // Generate 5000+ flights
    for (let i = 0; i < 5000; i++) {
        const fromAirport = airportsData[Math.floor(Math.random() * airportsData.length)];
        let toAirport;
        do {
            toAirport = airportsData[Math.floor(Math.random() * airportsData.length)];
        } while (toAirport.code === fromAirport.code);
        
        const airline = airlines[Math.floor(Math.random() * airlines.length)];
        const basePrice = Math.floor(Math.random() * 2000) + 100;
        const date = new Date();
        date.setDate(date.getDate() + Math.floor(Math.random() * 365));
        
        flights.push({
            id: i + 1,
            airline: airline,
            flightNo: `${airline.substring(0, 2).toUpperCase()}${Math.floor(Math.random() * 900) + 100}`,
            from: fromAirport.code,
            to: toAirport.code,
            fromCity: fromAirport.city,
            toCity: toAirport.city,
            fromCountry: fromAirport.country,
            toCountry: toAirport.country,
            departure: `${Math.floor(Math.random() * 24)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
            arrival: `${Math.floor(Math.random() * 24)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
            duration: `${Math.floor(Math.random() * 15) + 1}h ${Math.floor(Math.random() * 60)}m`,
            price: basePrice,
            date: date.toISOString().split('T')[0]
        });
    }
    return flights;
}

const flightsData = generateFlights();

// Testimonials
const testimonialsData = [
    { name: "Sarah Johnson", location: "London, UK", rating: 5, text: "Amazing service! Found me the best flight deals and excellent support throughout." },
    { name: "Michael Chen", location: "Singapore", rating: 5, text: "Best travel agency! They found flights even on short notice. Highly recommended!" },
    { name: "Emily Rodriguez", location: "New York, USA", rating: 5, text: "Perfect honeymoon planning! Every detail was handled professionally." },
    { name: "David Miller", location: "Sydney, Australia", rating: 5, text: "Been using them for 3 years. Always the best prices and service." },
    { name: "Lisa Thompson", location: "Toronto, Canada", rating: 5, text: "The Google Maps hotel search is amazing! Found perfect accommodations." },
    { name: "James Wilson", location: "Dubai, UAE", rating: 5, text: "24/7 support and instant WhatsApp booking - couldn't ask for more!" }
];

// Airport Search with Autocomplete
function setupAirportAutocomplete() {
    const fromInput = document.getElementById('from');
    const toInput = document.getElementById('to');
    const quickFrom = document.getElementById('quickFrom');
    const quickTo = document.getElementById('quickTo');
    
    const inputs = [fromInput, toInput, quickFrom, quickTo].filter(i => i);
    
    inputs.forEach(input => {
        if (!input) return;
        
        input.addEventListener('input', function(e) {
            const value = this.value.toLowerCase();
            const suggestionsDiv = this.nextElementSibling;
            
            if (!suggestionsDiv || !suggestionsDiv.classList.contains('suggestions')) return;
            
            if (value.length < 2) {
                suggestionsDiv.style.display = 'none';
                return;
            }
            
            const matches = airportsData.filter(airport => 
                airport.code.toLowerCase().includes(value) ||
                airport.name.toLowerCase().includes(value) ||
                airport.city.toLowerCase().includes(value) ||
                airport.country.toLowerCase().includes(value)
            ).slice(0, 10);
            
            if (matches.length > 0) {
                suggestionsDiv.innerHTML = matches.map(airport => `
                    <div class="suggestion-item" onclick="selectAirport('${this.id}', '${airport.code}', '${airport.name}', '${airport.city}', '${airport.country}')">
                        <span class="suggestion-code">${airport.code}</span> - ${airport.name}<br>
                        <small>${airport.city}, ${airport.country}</small>
                    </div>
                `).join('');
                suggestionsDiv.style.display = 'block';
            } else {
                suggestionsDiv.style.display = 'none';
            }
        });
        
        // Create suggestions div
        if (!input.nextElementSibling || !input.nextElementSibling.classList.contains('suggestions')) {
            const suggestionsDiv = document.createElement('div');
            suggestionsDiv.className = 'suggestions';
            input.parentNode.insertBefore(suggestionsDiv, input.nextSibling);
        }
    });
}

function selectAirport(inputId, code, name, city, country) {
    const input = document.getElementById(inputId);
    if (input) {
        input.value = `${code} - ${name}, ${city}, ${country}`;
        const suggestionsDiv = input.nextElementSibling;
        if (suggestionsDiv) suggestionsDiv.style.display = 'none';
    }
}

// Quick Search Function
function quickSearch() {
    const fromInput = document.getElementById('quickFrom')?.value;
    const toInput = document.getElementById('quickTo')?.value;
    const date = document.getElementById('quickDate')?.value;
    
    if (!fromInput || !toInput) {
        alert('Please enter both departure and arrival locations');
        return;
    }
    
    let fromCode = extractAirportCode(fromInput);
    let toCode = extractAirportCode(toInput);
    
    const resultsDiv = document.getElementById('quickResults');
    if (!resultsDiv) return;
    
    const availableFlights = flightsData.filter(flight => flight.from === fromCode && flight.to === toCode);
    
    if (availableFlights.length > 0) {
        displayFlightResults(availableFlights, resultsDiv, 1);
    } else {
        // Find alternative routes
        const alternativeFlights = findAlternativeFlights(fromCode, toCode, date);
        if (alternativeFlights.length > 0) {
            resultsDiv.innerHTML = `
                <h3 style="margin: 2rem 0 1rem;">No direct flights found. Here are alternative options:</h3>
                ${alternativeFlights.map(flight => createFlightCardHTML(flight, 1)).join('')}
            `;
        } else {
            resultsDiv.innerHTML = `
                <div style="text-align: center; padding: 2rem; background: #f8f9fa; border-radius: 15px; margin-top: 2rem;">
                    <i class="fas fa-plane-slash" style="font-size: 3rem; color: #f5576c;"></i>
                    <h3>No flights found for ${fromCode} to ${toCode}</h3>
                    <p>Contact us for personalized assistance!</p>
                    <button class="btn" onclick="requestAssistance('${fromCode}', '${toCode}')">Request Assistance</button>
                </div>
            `;
        }
    }
}

// Extract Airport Code from input
function extractAirportCode(input) {
    const match = input.match(/^([A-Z]{3})/);
    if (match) return match[1];
    
    const airport = airportsData.find(a => 
        a.name.toLowerCase().includes(input.toLowerCase()) ||
        a.city.toLowerCase().includes(input.toLowerCase()) ||
        a.country.toLowerCase().includes(input.toLowerCase())
    );
    return airport ? airport.code : input.toUpperCase().substring(0, 3);
}

// Search Flights with Nearest Date Detection
function searchFlights() {
    const fromInput = document.getElementById('from')?.value;
    const toInput = document.getElementById('to')?.value;
    const date = document.getElementById('date')?.value;
    const passengers = parseInt(document.getElementById('passengers')?.value || 1);
    
    if (!fromInput || !toInput) {
        alert('Please select departure and arrival locations');
        return;
    }
    
    let fromCode = extractAirportCode(fromInput);
    let toCode = extractAirportCode(toInput);
    
    let availableFlights = flightsData.filter(flight => flight.from === fromCode && flight.to === toCode);
    const resultsDiv = document.getElementById('flightResults');
    const alternativeDiv = document.getElementById('alternativeFlights');
    const dateInfo = document.getElementById('dateInfo');
    
    if (availableFlights.length === 0) {
        if (resultsDiv) {
            resultsDiv.innerHTML = `
                <div style="text-align: center; padding: 3rem; background: #f8f9fa; border-radius: 15px;">
                    <i class="fas fa-plane-slash" style="font-size: 4rem; color: #f5576c;"></i>
                    <h3>No direct flights found for ${fromCode} to ${toCode}</h3>
                    <p>Checking for alternative dates and connecting flights...</p>
                </div>
            `;
        }
        
        // Find alternative flights with nearest dates
        const alternativeFlights = findAlternativeFlightsWithNearestDates(fromCode, toCode, date);
        
        if (alternativeDiv && alternativeFlights.length > 0) {
            alternativeDiv.innerHTML = `
                <h3 style="margin: 2rem 0 1rem;">✈️ Alternative Flights Available:</h3>
                ${alternativeFlights.map(flight => createFlightCardHTML(flight, passengers)).join('')}
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
            dateInfo.innerHTML = '<p style="color: #28a745; margin: 1rem 0; text-align: center;">✅ Flights available on your selected date!</p>';
        } else {
            dateInfo.innerHTML = `
                <p style="color: #ff9800; margin: 1rem 0; text-align: center;">
                    📅 Nearest flight is ${Math.round(Math.abs(nearestFlight.diffDays))} days 
                    ${nearestFlight.diffDays > 0 ? 'after' : 'before'} your selected date (${nearestFlight.date})
                </p>
            `;
        }
        
        // Also show other flights in the same month
        const sameMonthFlights = flightsData.filter(flight => 
            flight.from === fromCode && 
            flight.to === toCode &&
            new Date(flight.date).getMonth() === searchDate.getMonth()
        );
        
        if (sameMonthFlights.length > 0 && sameMonthFlights.length !== availableFlights.length) {
            dateInfo.innerHTML += `
                <p style="color: #667eea; text-align: center;">
                    📆 Also ${sameMonthFlights.length} more flight(s) available in ${searchDate.toLocaleString('default', { month: 'long' })}
                </p>
            `;
        }
    }
    
    if (resultsDiv) {
        resultsDiv.innerHTML = availableFlights.slice(0, 10).map(flight => createFlightCardHTML(flight, passengers)).join('');
    }
}

// Find Alternative Flights with Nearest Dates
function findAlternativeFlightsWithNearestDates(from, to, targetDate) {
    let flights = flightsData.filter(flight => flight.from === from && flight.to === to);
    
    if (targetDate && flights.length > 0) {
        const searchDate = new Date(targetDate);
        flights = flights.map(flight => {
            const flightDate = new Date(flight.date);
            const diffDays = Math.abs(flightDate - searchDate) / (1000 * 60 * 60 * 24);
            return { ...flight, diffDays };
        });
        flights.sort((a, b) => a.diffDays - b.diffDays);
        
        // Show nearest 5 flights
        flights = flights.slice(0, 5);
    }
    
    return flights;
}

// Find Alternative Routes (connecting flights)
function findAlternativeFlights(from, to, date) {
    const directFlights = flightsData.filter(f => f.from === from && f.to === to);
    if (directFlights.length > 0) return directFlights;
    
    // Find connecting flights through major hubs
    const hubs = ["DXB", "LHR", "JFK", "CDG", "SIN", "HND", "IST"];
    const alternatives = [];
    
    for (const hub of hubs) {
        const firstLeg = flightsData.find(f => f.from === from && f.to === hub);
        const secondLeg = flightsData.find(f => f.from === hub && f.to === to);
        
        if (firstLeg && secondLeg) {
            alternatives.push({
                ...firstLeg,
                isConnecting: true,
                connectingAirport: hub,
                secondFlight: secondLeg,
                totalPrice: firstLeg.price + secondLeg.price,
                totalDuration: calculateTotalDuration(firstLeg.duration, secondLeg.duration)
            });
            break;
        }
    }
    
    return alternatives;
}

function calculateTotalDuration(dur1, dur2) {
    const hours1 = parseInt(dur1.match(/(\d+)h/)?.[1] || 0);
    const mins1 = parseInt(dur1.match(/(\d+)m/)?.[1] || 0);
    const hours2 = parseInt(dur2.match(/(\d+)h/)?.[1] || 0);
    const mins2 = parseInt(dur2.match(/(\d+)m/)?.[1] || 0);
    
    const totalHours = hours1 + hours2;
    const totalMins = mins1 + mins2;
    return `${totalHours + Math.floor(totalMins / 60)}h ${totalMins % 60}m`;
}

function createFlightCardHTML(flight, passengers) {
    const totalPrice = flight.price * passengers;
    
    if (flight.isConnecting) {
        return `
            <div class="flight-card">
                <div class="flight-info">
                    <div class="flight-airline">
                        <i class="fas fa-plane" style="color: #667eea;"></i>
                        <strong>${flight.airline}</strong> | ${flight.flightNo}
                        <span style="color: #ff9800; margin-left: 10px;">✈️ Connecting via ${flight.connectingAirport}</span>
                    </div>
                    <div>${flight.from} (${flight.fromCity}) → ${flight.connectingAirport} → ${flight.to} (${flight.toCity})</div>
                    <div>🕐 First: ${flight.departure} → ${flight.arrival} | Second: ${flight.secondFlight.departure} → ${flight.secondFlight.arrival}</div>
                    <div>⏱️ Total Duration: ${flight.totalDuration}</div>
                    <div>📅 Date: ${flight.date}</div>
                    <div>👥 ${passengers} passenger(s)</div>
                </div>
                <div>
                    <div class="flight-price">$${totalPrice}</div>
                    <div style="font-size: 0.8rem; color: #666;">$${flight.price} per person</div>
                    <button class="book-flight-btn" onclick="bookFlight('${flight.airline}', '${flight.from}', '${flight.to}', '${flight.date}', ${flight.price}, ${passengers})">Book Now</button>
                </div>
            </div>
        `;
    }
    
    return `
        <div class="flight-card">
            <div class="flight-info">
                <div class="flight-airline">
                    <i class="fas fa-plane" style="color: #667eea;"></i>
                    <strong>${flight.airline}</strong> | ${flight.flightNo}
                </div>
                <div>✈️ ${flight.from} (${flight.fromCity}) → ${flight.to} (${flight.toCity})</div>
                <div>🕐 Departure: ${flight.departure} | Arrival: ${flight.arrival}</div>
                <div>⏱️ Duration: ${flight.duration}</div>
                <div>📅 Date: ${flight.date}</div>
                <div>👥 ${passengers} passenger(s)</div>
            </div>
            <div>
                <div class="flight-price">$${totalPrice}</div>
                <div style="font-size: 0.8rem; color: #666;">$${flight.price} per person</div>
                <button class="book-flight-btn" onclick="bookFlight('${flight.airline}', '${flight.from}', '${flight.to}', '${flight.date}', ${flight.price}, ${passengers})">Book Now</button>
            </div>
        </div>
    `;
}

function displayFlightResults(flights, container, passengers) {
    container.innerHTML = flights.map(flight => createFlightCardHTML(flight, passengers)).join('');
}

// Google Maps Integration for Hotels & Restaurants
async function searchPlaces() {
    const location = document.getElementById('locationSearch')?.value;
    const placeType = document.getElementById('placeType')?.value;
    const resultsDiv = document.getElementById('placesResults');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const mapContainer = document.getElementById('mapContainer');
    
    if (!location) {
        alert('Please enter a location to search');
        return;
    }
    
    if (loadingSpinner) loadingSpinner.style.display = 'block';
    if (resultsDiv) resultsDiv.innerHTML = '';
    
    // Get coordinates using OpenStreetMap Nominatim
    try {
        const geoResponse = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}&limit=1`);
        const geoData = await geoResponse.json();
        
        if (geoData.length === 0) {
            alert('Location not found. Please try a different location.');
            if (loadingSpinner) loadingSpinner.style.display = 'none';
            return;
        }
        
        const lat = parseFloat(geoData[0].lat);
        const lon = parseFloat(geoData[0].lon);
        
        // Initialize or update map
        if (currentMap) {
            currentMap.remove();
        }
        
        currentMap = L.map(mapContainer).setView([lat, lon], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(currentMap);
        
        // Search for places using Overpass API
        const query = `
            [out:json];
            (
                node["${placeType}"](around:5000,${lat},${lon});
                way["${placeType}"](around:5000,${lat},${lon});
                rel["${placeType}"](around:5000,${lat},${lon});
            );
            out body;
            >;
            out skel qt;
        `;
        
        const overpassResponse = await fetch('https://overpass-api.de/api/interpreter', {
            method: 'POST',
            body: query
        });
        
        const data = await overpassResponse.json();
        const places = data.elements.filter(el => el.tags).slice(0, 50);
        
        if (places.length === 0) {
            if (resultsDiv) {
                resultsDiv.innerHTML = `
                    <div style="text-align: center; padding: 3rem;">
                        <i class="fas fa-search" style="font-size: 3rem; color: #ccc;"></i>
                        <h3>No ${placeType}s found in this area</h3>
                        <p>Try searching in a different location</p>
                    </div>
                `;
            }
        } else {
            if (resultsDiv) {
                resultsDiv.innerHTML = places.map(place => `
                    <div class="place-card">
                        <div class="place-image" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center;">
                            <i class="fas fa-${placeType === 'hotel' ? 'hotel' : 'utensils'}" style="font-size: 3rem; color: white;"></i>
                        </div>
                        <div class="place-info">
                            <div class="place-name">${place.tags.name || 'Unnamed Location'}</div>
                            <div class="place-location"><i class="fas fa-map-marker-alt"></i> ${place.tags['addr:city'] || place.tags['addr:town'] || location}</div>
                            <div class="place-rating">${place.tags['stars'] ? '⭐'.repeat(parseInt(place.tags['stars'])) : '⭐'.repeat(Math.floor(Math.random() * 4) + 3)}</div>
                            <div class="place-price">${placeType === 'hotel' ? `$${Math.floor(Math.random() * 500) + 80}` : `$${Math.floor(Math.random() * 100) + 15}`}/night</div>
                            <button class="book-place-btn" onclick="bookPlace('${place.tags.name || location} ${placeType}', '${placeType}')">
                                <i class="fab fa-whatsapp"></i> Book via WhatsApp
                            </button>
                        </div>
                    </div>
                `).join('');
            }
            
            // Add markers to map
            places.forEach(place => {
                if (place.lat && place.lon) {
                    const marker = L.marker([place.lat, place.lon]).addTo(currentMap);
                    marker.bindPopup(`
                        <b>${place.tags.name || 'Unnamed'}</b><br>
                        ${place.tags['addr:street'] || ''}<br>
                        <button onclick="bookPlace('${place.tags.name || location} ${placeType}', '${placeType}')" style="margin-top: 5px; padding: 5px 10px; background: #25D366; color: white; border: none; border-radius: 5px; cursor: pointer;">
                            Book via WhatsApp
                        </button>
                    `);
                    markers.push(marker);
                }
            });
        }
        
        if (loadingSpinner) loadingSpinner.style.display = 'none';
        
    } catch (error) {
        console.error('Error searching places:', error);
        if (resultsDiv) {
            resultsDiv.innerHTML = `
                <div style="text-align: center; padding: 3rem;">
                    <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: #f5576c;"></i>
                    <h3>Error searching for places</h3>
                    <p>Please try again later</p>
                </div>
            `;
        }
        if (loadingSpinner) loadingSpinner.style.display = 'none';
    }
}

// Book Flight
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
    
    const whatsappNumber = "44798515953";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    const email = "info@farenesttravels.com";
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent('Flight Booking Request')}&body=${encodeURIComponent(message)}`;
    window.open(mailtoUrl, '_blank');
    
    alert('📱 Booking request sent!\n\n✓ WhatsApp message opened\n✓ Email prepared\n\nSend both to confirm your booking.');
}

// Book Place (Hotel/Restaurant)
function bookPlace(name, type) {
    const message = `🏨 NEW ${type.toUpperCase()} BOOKING REQUEST 🏨\n\n` +
        `Place: ${name}\n` +
        `Type: ${type}\n\n` +
        `Please contact me to complete the reservation.`;
    
    const whatsappNumber = "44798515953";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    const email = "info@farenesttravels.com";
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(`${type} Booking Request`)}&body=${encodeURIComponent(message)}`;
    window.open(mailtoUrl, '_blank');
    
    alert('📱 Booking request sent! We will contact you shortly.');
}

// Request Assistance
function requestAssistance(from, to) {
    const message = `🛫 FLIGHT ASSISTANCE REQUEST 🛬\n\n` +
        `I need help finding flights from ${from} to ${to}.\n\n` +
        `Please contact me with the best available options.`;
    
    const whatsappNumber = "44798515953";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    alert('Assistance request sent! Our travel expert will contact you on WhatsApp shortly.');
}

// Submit Inquiry
function submitInquiry(event) {
    event.preventDefault();
    
    const name = document.getElementById('inquiryName')?.value;
    const email = document.getElementById('inquiryEmail')?.value;
    const phone = document.getElementById('inquiryPhone')?.value;
    const inquiryType = document.getElementById('inquiryType')?.value;
    const message = document.getElementById('inquiryMessage')?.value;
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert('❌ Please enter a valid email address');
        return false;
    }
    
    if (!name || !message || !inquiryType) {
        alert('Please fill in all required fields');
        return false;
    }
    
    const fullMessage = `📧 NEW CUSTOMER INQUIRY 📧\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone || 'Not provided'}\n` +
        `Inquiry Type: ${inquiryType}\n` +
        `Message: ${message}\n\n` +
        `Please respond to this customer.`;
    
    const whatsappNumber = "44798515953";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    const emailAddress = "info@farenesttravels.com";
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent('New Inquiry')}&body=${encodeURIComponent(fullMessage)}`;
    window.open(mailtoUrl, '_blank');
    
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
    
    alert('✅ Inquiry sent successfully! Our team will contact you within 24 hours.');
    
    return false;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    setupAirportAutocomplete();
    
    // Display testimonials on about page
    const reviewsGrid = document.getElementById('reviewsGrid');
    if (reviewsGrid) {
        reviewsGrid.innerHTML = testimonialsData.map(t => `
            <div class="review-box">
                <div class="stars">${'⭐'.repeat(t.rating)}</div>
                <p>"${t.text}"</p>
                <h4>- ${t.name}</h4>
                <p style="color: #666;">${t.location}</p>
            </div>
        `).join('');
    }
    
    // Set default date for flight search
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        dateInput.value = `${yyyy}-${mm}-${dd}`;
    }
});

// Mobile menu toggle
document.querySelector('.menu-toggle')?.addEventListener('click', function() {
    document.querySelector('.nav-links')?.classList.toggle('active');
});
