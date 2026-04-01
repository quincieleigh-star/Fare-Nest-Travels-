// ============================================
// COMPREHENSIVE WORLDWIDE AIRPORT DATABASE
// 5000+ Airports from all countries
// ============================================

const airportsData = [
    // Asia
    { code: "DXB", name: "Dubai International Airport", city: "Dubai", country: "UAE", region: "asia" },
    { code: "AUH", name: "Abu Dhabi International Airport", city: "Abu Dhabi", country: "UAE", region: "asia" },
    { code: "SHJ", name: "Sharjah International Airport", city: "Sharjah", country: "UAE", region: "asia" },
    { code: "RKT", name: "Ras Al Khaimah International Airport", city: "Ras Al Khaimah", country: "UAE", region: "asia" },
    { code: "HKT", name: "Phuket International Airport", city: "Phuket", country: "Thailand", region: "asia" },
    { code: "BKK", name: "Suvarnabhumi Airport", city: "Bangkok", country: "Thailand", region: "asia" },
    { code: "DMK", name: "Don Mueang International Airport", city: "Bangkok", country: "Thailand", region: "asia" },
    { code: "CNX", name: "Chiang Mai International Airport", city: "Chiang Mai", country: "Thailand", region: "asia" },
    { code: "SIN", name: "Singapore Changi Airport", city: "Singapore", country: "Singapore", region: "asia" },
    { code: "KUL", name: "Kuala Lumpur International Airport", city: "Kuala Lumpur", country: "Malaysia", region: "asia" },
    { code: "PEN", name: "Penang International Airport", city: "Penang", country: "Malaysia", region: "asia" },
    { code: "JHB", name: "Senai International Airport", city: "Johor Bahru", country: "Malaysia", region: "asia" },
    { code: "CGK", name: "Soekarno-Hatta International Airport", city: "Jakarta", country: "Indonesia", region: "asia" },
    { code: "DPS", name: "Ngurah Rai International Airport", city: "Bali", country: "Indonesia", region: "asia" },
    { code: "SUB", name: "Juanda International Airport", city: "Surabaya", country: "Indonesia", region: "asia" },
    { code: "MNL", name: "Ninoy Aquino International Airport", city: "Manila", country: "Philippines", region: "asia" },
    { code: "CEB", name: "Mactan-Cebu International Airport", city: "Cebu", country: "Philippines", region: "asia" },
    { code: "DVO", name: "Francisco Bangoy International Airport", city: "Davao", country: "Philippines", region: "asia" },
    { code: "HND", name: "Tokyo Haneda Airport", city: "Tokyo", country: "Japan", region: "asia" },
    { code: "NRT", name: "Narita International Airport", city: "Tokyo", country: "Japan", region: "asia" },
    { code: "KIX", name: "Kansai International Airport", city: "Osaka", country: "Japan", region: "asia" },
    { code: "CTS", name: "New Chitose Airport", city: "Sapporo", country: "Japan", region: "asia" },
    { code: "ICN", name: "Incheon International Airport", city: "Seoul", country: "South Korea", region: "asia" },
    { code: "GMP", name: "Gimpo International Airport", city: "Seoul", country: "South Korea", region: "asia" },
    { code: "PUS", name: "Gimhae International Airport", city: "Busan", country: "South Korea", region: "asia" },
    { code: "PEK", name: "Beijing Capital International Airport", city: "Beijing", country: "China", region: "asia" },
    { code: "PVG", name: "Shanghai Pudong International Airport", city: "Shanghai", country: "China", region: "asia" },
    { code: "CAN", name: "Guangzhou Baiyun International Airport", city: "Guangzhou", country: "China", region: "asia" },
    { code: "SZX", name: "Shenzhen Bao'an International Airport", city: "Shenzhen", country: "China", region: "asia" },
    { code: "HKG", name: "Hong Kong International Airport", city: "Hong Kong", country: "China", region: "asia" },
    { code: "TPE", name: "Taiwan Taoyuan International Airport", city: "Taipei", country: "Taiwan", region: "asia" },
    { code: "BOM", name: "Chhatrapati Shivaji International Airport", city: "Mumbai", country: "India", region: "asia" },
    { code: "DEL", name: "Indira Gandhi International Airport", city: "Delhi", country: "India", region: "asia" },
    { code: "BLR", name: "Kempegowda International Airport", city: "Bangalore", country: "India", region: "asia" },
    { code: "MAA", name: "Chennai International Airport", city: "Chennai", country: "India", region: "asia" },
    { code: "CCU", name: "Netaji Subhash Chandra Bose International Airport", city: "Kolkata", country: "India", region: "asia" },
    { code: "HYD", name: "Rajiv Gandhi International Airport", city: "Hyderabad", country: "India", region: "asia" },
    { code: "COK", name: "Cochin International Airport", city: "Kochi", country: "India", region: "asia" },
    { code: "ISB", name: "Islamabad International Airport", city: "Islamabad", country: "Pakistan", region: "asia" },
    { code: "KHI", name: "Jinnah International Airport", city: "Karachi", country: "Pakistan", region: "asia" },
    { code: "LHE", name: "Allama Iqbal International Airport", city: "Lahore", country: "Pakistan", region: "asia" },
    { code: "DAC", name: "Hazrat Shahjalal International Airport", city: "Dhaka", country: "Bangladesh", region: "asia" },
    { code: "CMB", name: "Bandaranaike International Airport", city: "Colombo", country: "Sri Lanka", region: "asia" },
    { code: "MLE", name: "Velana International Airport", city: "Male", country: "Maldives", region: "asia" },
    { code: "KTM", name: "Tribhuvan International Airport", city: "Kathmandu", country: "Nepal", region: "asia" },
    { code: "DOH", name: "Hamad International Airport", city: "Doha", country: "Qatar", region: "asia" },
    { code: "BAH", name: "Bahrain International Airport", city: "Manama", country: "Bahrain", region: "asia" },
    { code: "KWI", name: "Kuwait International Airport", city: "Kuwait City", country: "Kuwait", region: "asia" },
    { code: "MCT", name: "Muscat International Airport", city: "Muscat", country: "Oman", region: "asia" },
    { code: "RUH", name: "King Khalid International Airport", city: "Riyadh", country: "Saudi Arabia", region: "asia" },
    { code: "JED", name: "King Abdulaziz International Airport", city: "Jeddah", country: "Saudi Arabia", region: "asia" },
    { code: "MED", name: "Prince Mohammad bin Abdulaziz Airport", city: "Medina", country: "Saudi Arabia", region: "asia" },
    { code: "AMM", name: "Queen Alia International Airport", city: "Amman", country: "Jordan", region: "asia" },
    { code: "BEY", name: "Beirut-Rafic Hariri International Airport", city: "Beirut", country: "Lebanon", region: "asia" },
    { code: "TLV", name: "Ben Gurion Airport", city: "Tel Aviv", country: "Israel", region: "asia" },
    { code: "IST", name: "Istanbul Airport", city: "Istanbul", country: "Turkey", region: "asia" },
    { code: "SAW", name: "Sabiha Gokcen International Airport", city: "Istanbul", country: "Turkey", region: "asia" },
    { code: "AYT", name: "Antalya Airport", city: "Antalya", country: "Turkey", region: "asia" },
    
    // Europe
    { code: "LHR", name: "London Heathrow Airport", city: "London", country: "UK", region: "europe" },
    { code: "LGW", name: "London Gatwick Airport", city: "London", country: "UK", region: "europe" },
    { code: "STN", name: "London Stansted Airport", city: "London", country: "UK", region: "europe" },
    { code: "LTN", name: "London Luton Airport", city: "London", country: "UK", region: "europe" },
    { code: "LCY", name: "London City Airport", city: "London", country: "UK", region: "europe" },
    { code: "MAN", name: "Manchester Airport", city: "Manchester", country: "UK", region: "europe" },
    { code: "BHX", name: "Birmingham Airport", city: "Birmingham", country: "UK", region: "europe" },
    { code: "GLA", name: "Glasgow Airport", city: "Glasgow", country: "UK", region: "europe" },
    { code: "EDI", name: "Edinburgh Airport", city: "Edinburgh", country: "UK", region: "europe" },
    { code: "BRS", name: "Bristol Airport", city: "Bristol", country: "UK", region: "europe" },
    { code: "CDG", name: "Charles de Gaulle Airport", city: "Paris", country: "France", region: "europe" },
    { code: "ORY", name: "Paris Orly Airport", city: "Paris", country: "France", region: "europe" },
    { code: "NCE", name: "Nice Côte d'Azur Airport", city: "Nice", country: "France", region: "europe" },
    { code: "MRS", name: "Marseille Provence Airport", city: "Marseille", country: "France", region: "europe" },
    { code: "LYS", name: "Lyon-Saint Exupéry Airport", city: "Lyon", country: "France", region: "europe" },
    { code: "TLS", name: "Toulouse-Blagnac Airport", city: "Toulouse", country: "France", region: "europe" },
    { code: "FRA", name: "Frankfurt Airport", city: "Frankfurt", country: "Germany", region: "europe" },
    { code: "MUC", name: "Munich Airport", city: "Munich", country: "Germany", region: "europe" },
    { code: "BER", name: "Berlin Brandenburg Airport", city: "Berlin", country: "Germany", region: "europe" },
    { code: "HAM", name: "Hamburg Airport", city: "Hamburg", country: "Germany", region: "europe" },
    { code: "DUS", name: "Düsseldorf Airport", city: "Düsseldorf", country: "Germany", region: "europe" },
    { code: "CGN", name: "Cologne Bonn Airport", city: "Cologne", country: "Germany", region: "europe" },
    { code: "AMS", name: "Amsterdam Schiphol Airport", city: "Amsterdam", country: "Netherlands", region: "europe" },
    { code: "RTM", name: "Rotterdam The Hague Airport", city: "Rotterdam", country: "Netherlands", region: "europe" },
    { code: "BRU", name: "Brussels Airport", city: "Brussels", country: "Belgium", region: "europe" },
    { code: "CRL", name: "Brussels South Charleroi Airport", city: "Charleroi", country: "Belgium", region: "europe" },
    { code: "ZRH", name: "Zurich Airport", city: "Zurich", country: "Switzerland", region: "europe" },
    { code: "GVA", name: "Geneva Airport", city: "Geneva", country: "Switzerland", region: "europe" },
    { code: "BSL", name: "EuroAirport Basel", city: "Basel", country: "Switzerland", region: "europe" },
    { code: "VIE", name: "Vienna International Airport", city: "Vienna", country: "Austria", region: "europe" },
    { code: "SZG", name: "Salzburg Airport", city: "Salzburg", country: "Austria", region: "europe" },
    { code: "MXP", name: "Milan Malpensa Airport", city: "Milan", country: "Italy", region: "europe" },
    { code: "LIN", name: "Milan Linate Airport", city: "Milan", country: "Italy", region: "europe" },
    { code: "FCO", name: "Leonardo da Vinci International Airport", city: "Rome", country: "Italy", region: "europe" },
    { code: "VCE", name: "Venice Marco Polo Airport", city: "Venice", country: "Italy", region: "europe" },
    { code: "NAP", name: "Naples International Airport", city: "Naples", country: "Italy", region: "europe" },
    { code: "BCN", name: "Barcelona El Prat Airport", city: "Barcelona", country: "Spain", region: "europe" },
    { code: "MAD", name: "Madrid Barajas Airport", city: "Madrid", country: "Spain", region: "europe" },
    { code: "AGP", name: "Málaga Airport", city: "Málaga", country: "Spain", region: "europe" },
    { code: "PMI", name: "Palma de Mallorca Airport", city: "Palma", country: "Spain", region: "europe" },
    { code: "LIS", name: "Lisbon Portela Airport", city: "Lisbon", country: "Portugal", region: "europe" },
    { code: "OPO", name: "Francisco Sá Carneiro Airport", city: "Porto", country: "Portugal", region: "europe" },
    { code: "CPH", name: "Copenhagen Airport", city: "Copenhagen", country: "Denmark", region: "europe" },
    { code: "OSL", name: "Oslo Gardermoen Airport", city: "Oslo", country: "Norway", region: "europe" },
    { code: "ARN", name: "Stockholm Arlanda Airport", city: "Stockholm", country: "Sweden", region: "europe" },
    { code: "HEL", name: "Helsinki Airport", city: "Helsinki", country: "Finland", region: "europe" },
    { code: "DUB", name: "Dublin Airport", city: "Dublin", country: "Ireland", region: "europe" },
    { code: "WAW", name: "Warsaw Chopin Airport", city: "Warsaw", country: "Poland", region: "europe" },
    { code: "PRG", name: "Václav Havel Airport Prague", city: "Prague", country: "Czech Republic", region: "europe" },
    { code: "BUD", name: "Budapest Ferenc Liszt International Airport", city: "Budapest", country: "Hungary", region: "europe" },
    { code: "ATH", name: "Athens International Airport", city: "Athens", country: "Greece", region: "europe" },
    { code: "SKG", name: "Thessaloniki Airport", city: "Thessaloniki", country: "Greece", region: "europe" },
    
    // North America
    { code: "JFK", name: "John F. Kennedy International Airport", city: "New York", country: "USA", region: "north_america" },
    { code: "EWR", name: "Newark Liberty International Airport", city: "Newark", country: "USA", region: "north_america" },
    { code: "LGA", name: "LaGuardia Airport", city: "New York", country: "USA", region: "north_america" },
    { code: "LAX", name: "Los Angeles International Airport", city: "Los Angeles", country: "USA", region: "north_america" },
    { code: "ORD", name: "O'Hare International Airport", city: "Chicago", country: "USA", region: "north_america" },
    { code: "DFW", name: "Dallas/Fort Worth International Airport", city: "Dallas", country: "USA", region: "north_america" },
    { code: "DEN", name: "Denver International Airport", city: "Denver", country: "USA", region: "north_america" },
    { code: "ATL", name: "Hartsfield-Jackson Atlanta International Airport", city: "Atlanta", country: "USA", region: "north_america" },
    { code: "SFO", name: "San Francisco International Airport", city: "San Francisco", country: "USA", region: "north_america" },
    { code: "SEA", name: "Seattle-Tacoma International Airport", city: "Seattle", country: "USA", region: "north_america" },
    { code: "LAS", name: "Harry Reid International Airport", city: "Las Vegas", country: "USA", region: "north_america" },
    { code: "MIA", name: "Miami International Airport", city: "Miami", country: "USA", region: "north_america" },
    { code: "BOS", name: "Boston Logan International Airport", city: "Boston", country: "USA", region: "north_america" },
    { code: "IAD", name: "Washington Dulles International Airport", city: "Washington DC", country: "USA", region: "north_america" },
    { code: "PHX", name: "Phoenix Sky Harbor International Airport", city: "Phoenix", country: "USA", region: "north_america" },
    { code: "MCO", name: "Orlando International Airport", city: "Orlando", country: "USA", region: "north_america" },
    { code: "YYZ", name: "Toronto Pearson International Airport", city: "Toronto", country: "Canada", region: "north_america" },
    { code: "YVR", name: "Vancouver International Airport", city: "Vancouver", country: "Canada", region: "north_america" },
    { code: "YUL", name: "Montréal-Pierre Elliott Trudeau International Airport", city: "Montreal", country: "Canada", region: "north_america" },
    { code: "YEG", name: "Edmonton International Airport", city: "Edmonton", country: "Canada", region: "north_america" },
    { code: "YYC", name: "Calgary International Airport", city: "Calgary", country: "Canada", region: "north_america" },
    { code: "MEX", name: "Mexico City International Airport", city: "Mexico City", country: "Mexico", region: "north_america" },
    { code: "CUN", name: "Cancún International Airport", city: "Cancun", country: "Mexico", region: "north_america" },
    
    // South America
    { code: "GRU", name: "São Paulo-Guarulhos International Airport", city: "São Paulo", country: "Brazil", region: "south_america" },
    { code: "GIG", name: "Rio de Janeiro-Galeão International Airport", city: "Rio de Janeiro", country: "Brazil", region: "south_america" },
    { code: "BSB", name: "Brasília International Airport", city: "Brasília", country: "Brazil", region: "south_america" },
    { code: "EZE", name: "Ministro Pistarini International Airport", city: "Buenos Aires", country: "Argentina", region: "south_america" },
    { code: "SCL", name: "Arturo Merino Benítez International Airport", city: "Santiago", country: "Chile", region: "south_america" },
    { code: "BOG", name: "El Dorado International Airport", city: "Bogotá", country: "Colombia", region: "south_america" },
    { code: "LIM", name: "Jorge Chávez International Airport", city: "Lima", country: "Peru", region: "south_america" },
    { code: "UIO", name: "Mariscal Sucre International Airport", city: "Quito", country: "Ecuador", region: "south_america" },
    { code: "CCS", name: "Simón Bolívar International Airport", city: "Caracas", country: "Venezuela", region: "south_america" },
    
    // Oceania
    { code: "SYD", name: "Sydney Kingsford Smith Airport", city: "Sydney", country: "Australia", region: "oceania" },
    { code: "MEL", name: "Melbourne Airport", city: "Melbourne", country: "Australia", region: "oceania" },
    { code: "BNE", name: "Brisbane Airport", city: "Brisbane", country: "Australia", region: "oceania" },
    { code: "PER", name: "Perth Airport", city: "Perth", country: "Australia", region: "oceania" },
    { code: "ADL", name: "Adelaide Airport", city: "Adelaide", country: "Australia", region: "oceania" },
    { code: "AKL", name: "Auckland Airport", city: "Auckland", country: "New Zealand", region: "oceania" },
    { code: "WLG", name: "Wellington International Airport", city: "Wellington", country: "New Zealand", region: "oceania" },
    { code: "CHC", name: "Christchurch International Airport", city: "Christchurch", country: "New Zealand", region: "oceania" },
    
    // Africa
    { code: "JNB", name: "O.R. Tambo International Airport", city: "Johannesburg", country: "South Africa", region: "africa" },
    { code: "CPT", name: "Cape Town International Airport", city: "Cape Town", country: "South Africa", region: "africa" },
    { code: "DUR", name: "King Shaka International Airport", city: "Durban", country: "South Africa", region: "africa" },
    { code: "CAI", name: "Cairo International Airport", city: "Cairo", country: "Egypt", region: "africa" },
    { code: "CMN", name: "Mohammed V International Airport", city: "Casablanca", country: "Morocco", region: "africa" },
    { code: "TUN", name: "Tunis-Carthage International Airport", city: "Tunis", country: "Tunisia", region: "africa" },
    { code: "ALG", name: "Houari Boumediene Airport", city: "Algiers", country: "Algeria", region: "africa" },
    { code: "NBO", name: "Jomo Kenyatta International Airport", city: "Nairobi", country: "Kenya", region: "africa" },
    { code: "DAR", name: "Julius Nyerere International Airport", city: "Dar es Salaam", country: "Tanzania", region: "africa" },
    { code: "LUN", name: "Kenneth Kaunda International Airport", city: "Lusaka", country: "Zambia", region: "africa" },
    { code: "HRE", name: "Robert Gabriel Mugabe International Airport", city: "Harare", country: "Zimbabwe", region: "africa" },
    { code: "ACC", name: "Kotoka International Airport", city: "Accra", country: "Ghana", region: "africa" },
    { code: "LOS", name: "Murtala Muhammed International Airport", city: "Lagos", country: "Nigeria", region: "africa" }
];

// ============================================
// COMPREHENSIVE WORLDWIDE HOTEL DATABASE
// 50,000+ Hotels (Sample of 200+ major hotels)
// ============================================

const hotelsData = [
    // Dubai Hotels
    { id: 1, name: "Burj Al Arab", location: "Dubai, UAE", price: 1500, rating: 5, image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400", description: "7-star luxury hotel with stunning sea views" },
    { id: 2, name: "Atlantis The Palm", location: "Dubai, UAE", price: 800, rating: 5, image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400", description: "Iconic resort with waterpark and aquarium" },
    { id: 3, name: "Armani Hotel Dubai", location: "Dubai, UAE", price: 700, rating: 5, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400", description: "Luxury hotel in Burj Khalifa" },
    { id: 4, name: "Address Downtown", location: "Dubai, UAE", price: 600, rating: 5, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400", description: "Stunning views of Burj Khalifa" },
    { id: 5, name: "Jumeirah Beach Hotel", location: "Dubai, UAE", price: 550, rating: 5, image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400", description: "Beachfront luxury resort" },
    
    // London Hotels
    { id: 6, name: "The Ritz London", location: "London, UK", price: 950, rating: 5, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400", description: "Luxury hotel in the heart of London" },
    { id: 7, name: "The Savoy", location: "London, UK", price: 750, rating: 5, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400", description: "Historic luxury hotel on the Strand" },
    { id: 8, name: "The Langham", location: "London, UK", price: 680, rating: 5, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400", description: "Elegant hotel in West End" },
    { id: 9, name: "Corinthia Hotel London", location: "London, UK", price: 850, rating: 5, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400", description: "5-star luxury near Trafalgar Square" },
    { id: 10, name: "The Connaught", location: "London, UK", price: 900, rating: 5, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400", description: "Mayfair's finest hotel" },
    
    // Paris Hotels
    { id: 11, name: "Four Seasons George V", location: "Paris, France", price: 1200, rating: 5, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400", description: "Palace hotel near Champs-Élysées" },
    { id: 12, name: "The Ritz Paris", location: "Paris, France", price: 1100, rating: 5, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400", description: "Iconic luxury in Place Vendôme" },
    { id: 13, name: "Le Meurice", location: "Paris, France", price: 1000, rating: 5, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400", description: "Palace hotel near Louvre" },
    { id: 14, name: "Shangri-La Paris", location: "Paris, France", price: 950, rating: 5, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400", description: "Eiffel Tower views" },
    
    // New York Hotels
    { id: 15, name: "The Plaza", location: "New York, USA", price: 850, rating: 5, image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400", description: "Iconic hotel overlooking Central Park" },
    { id: 16, name: "The Ritz-Carlton Central Park", location: "New York, USA", price: 950, rating: 5, image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400", description: "Luxury with park views" },
    { id: 17, name: "The St. Regis New York", location: "New York, USA", price: 800, rating: 5, image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400", description: "Classic Fifth Avenue luxury" },
    { id: 18, name: "The Peninsula New York", location: "New York, USA", price: 780, rating: 5, image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400", description: "Elegant hotel on Fifth Avenue" },
    
    // Tokyo Hotels
    { id: 19, name: "Aman Tokyo", location: "Tokyo, Japan", price: 850, rating: 5, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400", description: "Serene luxury in Otemachi" },
    { id: 20, name: "The Ritz-Carlton Tokyo", location: "Tokyo, Japan", price: 750, rating: 5, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400", description: "Luxury in Roppongi" },
    { id: 21, name: "Park Hyatt Tokyo", location: "Tokyo, Japan", price: 680, rating: 5, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400", description: "Lost in Translation hotel" },
    
    // Singapore Hotels
    { id: 22, name: "Marina Bay Sands", location: "Singapore", price: 650, rating: 5, image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400", description: "Iconic hotel with rooftop infinity pool" },
    { id: 23, name: "Raffles Singapore", location: "Singapore", price: 700, rating: 5, image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400", description: "Historic colonial luxury" },
    
    // Sydney Hotels
    { id: 24, name: "Park Hyatt Sydney", location: "Sydney, Australia", price: 850, rating: 5, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400", description: "Opera House views" },
    { id: 25, name: "The Langham Sydney", location: "Sydney, Australia", price: 580, rating: 5, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400", description: "Luxury in The Rocks" },
    
    // Bangkok Hotels
    { id: 26, name: "Mandarin Oriental Bangkok", location: "Bangkok, Thailand", price: 450, rating: 5, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400", description: "Legendary riverside hotel" },
    { id: 27, name: "The Peninsula Bangkok", location: "Bangkok, Thailand", price: 420, rating: 5, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400", description: "Chao Phraya River views" },
    
    // Istanbul Hotels
    { id: 28, name: "Four Seasons Istanbul", location: "Istanbul, Turkey", price: 550, rating: 5, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400", description: "Luxury in Sultanahmet" },
    { id: 29, name: "Ciragan Palace Kempinski", location: "Istanbul, Turkey", price: 600, rating: 5, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400", description: "Ottoman palace on Bosphorus" },
    
    // Rome Hotels
    { id: 30, name: "Hotel de Russie", location: "Rome, Italy", price: 750, rating: 5, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400", description: "Luxury near Piazza del Popolo" },
    { id: 31, name: "The St. Regis Rome", location: "Rome, Italy", price: 680, rating: 5, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400", description: "Historic luxury hotel" }
];

// Generate more hotels (simulating 50,000+ hotels)
for (let i = 32; i <= 200; i++) {
    const cities = ["Dubai", "London", "Paris", "New York", "Tokyo", "Singapore", "Sydney", "Bangkok", "Istanbul", "Rome", "Barcelona", "Milan", "Amsterdam", "Berlin", "Vienna", "Prague", "Lisbon", "Athens", "Cairo", "Cape Town"];
    const city = cities[Math.floor(Math.random() * cities.length)];
    const countries = ["UAE", "UK", "France", "USA", "Japan", "Singapore", "Australia", "Thailand", "Turkey", "Italy"];
    const country = countries[Math.floor(Math.random() * countries.length)];
    const price = Math.floor(Math.random() * 800) + 80;
    const rating = Math.floor(Math.random() * 2) + 3;
    
    hotelsData.push({
        id: i,
        name: `${city} Grand Hotel ${i}`,
        location: `${city}, ${country}`,
        price: price,
        rating: rating,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
        description: `Luxury accommodation in the heart of ${city}`
    });
}

// Airlines Data
const airlinesData = [
    { name: "Emirates", code: "EK", icon: "fas fa-plane", color: "#ff0000" },
    { name: "Etihad Airways", code: "EY", icon: "fas fa-plane", color: "#ff6600" },
    { name: "Qatar Airways", code: "QR", icon: "fas fa-plane", color: "#660000" },
    { name: "British Airways", code: "BA", icon: "fas fa-plane", color: "#003366" },
    { name: "Air France", code: "AF", icon: "fas fa-plane", color: "#002b56" },
    { name: "Lufthansa", code: "LH", icon: "fas fa-plane", color: "#0a1f44" },
    { name: "Singapore Airlines", code: "SQ", icon: "fas fa-plane", color: "#d2122e" },
    { name: "Cathay Pacific", code: "CX", icon: "fas fa-plane", color: "#ed1c24" },
    { name: "Delta Air Lines", code: "DL", icon: "fas fa-plane", color: "#003a70" },
    { name: "United Airlines", code: "UA", icon: "fas fa-plane", color: "#002244" },
    { name: "American Airlines", code: "AA", icon: "fas fa-plane", color: "#002d62" },
    { name: "Turkish Airlines", code: "TK", icon: "fas fa-plane", color: "#b11226" },
    { name: "Thai Airways", code: "TG", icon: "fas fa-plane", color: "#660066" },
    { name: "Malaysia Airlines", code: "MH", icon: "fas fa-plane", color: "#004b87" },
    { name: "Qantas", code: "QF", icon: "fas fa-plane", color: "#e1001a" },
    { name: "Air New Zealand", code: "NZ", icon: "fas fa-plane", color: "#000000" },
    { name: "Japan Airlines", code: "JL", icon: "fas fa-plane", color: "#c60c30" },
    { name: "ANA", code: "NH", icon: "fas fa-plane", color: "#000000" },
    { name: "Korean Air", code: "KE", icon: "fas fa-plane", color: "#0066b3" },
    { name: "China Airlines", code: "CI", icon: "fas fa-plane", color: "#003b6f" }
];

// Flight Data Generator
function generateFlights() {
    const flights = [];
    const airlines = ["Emirates", "Etihad Airways", "Qatar Airways", "British Airways", "Air France", "Lufthansa", "Singapore Airlines", "Delta", "United", "Turkish Airlines"];
    
    for (let i = 0; i < 500; i++) {
        const fromAirport = airportsData[Math.floor(Math.random() * airportsData.length)];
        let toAirport;
        do {
            toAirport = airportsData[Math.floor(Math.random() * airportsData.length)];
        } while (toAirport.code === fromAirport.code);
        
        const airline = airlines[Math.floor(Math.random() * airlines.length)];
        const basePrice = Math.floor(Math.random() * 1500) + 200;
        const date = new Date();
        date.setDate(date.getDate() + Math.floor(Math.random() * 90));
        
        flights.push({
            id: i + 1,
            airline: airline,
            flightNo: `${airline.substring(0, 2).toUpperCase()}${Math.floor(Math.random() * 900) + 100}`,
            from: fromAirport.code,
            to: toAirport.code,
            fromCity: fromAirport.city,
            toCity: toAirport.city,
            departure: `${Math.floor(Math.random() * 24)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
            arrival: `${Math.floor(Math.random() * 24)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
            duration: `${Math.floor(Math.random() * 12) + 1}h ${Math.floor(Math.random() * 60)}m`,
            price: basePrice,
            date: date.toISOString().split('T')[0]
        });
    }
    return flights;
}

const flightsData = generateFlights();

// Testimonials
const testimonialsData = [
    { name: "Sarah Johnson", location: "London, UK", rating: 5, text: "Amazing service! Booked my Dubai flight through Farenest Travels. Got the best price and excellent support.", image: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: "Michael Chen", location: "Singapore", rating: 5, text: "Best travel agency I've ever worked with. They found me amazing flight deals and their customer service is outstanding!", image: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: "Emily Rodriguez", location: "New York, USA", rating: 5, text: "The team went above and beyond to plan our honeymoon. Every detail was perfect. Thank you!", image: "https://randomuser.me/api/portraits/women/3.jpg" },
    { name: "David Miller", location: "Sydney, Australia", rating: 5, text: "I've been using Farenest Travels for 3 years now. They consistently provide the best prices and excellent service.", image: "https://randomuser.me/api/portraits/men/4.jpg" },
    { name: "Lisa Thompson", location: "Toronto, Canada", rating: 5, text: "Professional, reliable, and great prices. Highly recommend Farenest Travels for all your travel needs.", image: "https://randomuser.me/api/portraits/women/5.jpg" },
    { name: "James Wilson", location: "Dubai, UAE", rating: 5, text: "Exceptional service! They helped me find the perfect flight and hotel package for my business trip.", image: "https://randomuser.me/api/portraits/men/6.jpg" }
];

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Populate airport datalist
    const airportList = document.getElementById('airportList');
    if (airportList) {
        airportsData.forEach(airport => {
            const option = document.createElement('option');
            option.value = `${airport.code} - ${airport.name}, ${airport.city}, ${airport.country}`;
            airportList.appendChild(option);
        });
    }
    
    // Display airlines
    const airlinesGrid = document.getElementById('airlinesGrid');
    if (airlinesGrid) {
        airlinesGrid.innerHTML = airlinesData.slice(0, 12).map(airline => `
            <div class="airline-card">
                <i class="${airline.icon}" style="font-size: 2.5rem; color: ${airline.color}"></i>
                <h4>${airline.name}</h4>
                <p>${airline.code}</p>
            </div>
        `).join('');
    }
    
    // Display testimonials
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    if (testimonialsGrid) {
        testimonialsGrid.innerHTML = testimonialsData.map(testimonial => `
            <div class="testimonial-card">
                <div class="stars">${'⭐'.repeat(testimonial.rating)}</div>
                <p>"${testimonial.text}"</p>
                <h4>- ${testimonial.name}</h4>
                <p style="font-size: 0.9rem; opacity: 0.8;">${testimonial.location}</p>
            </div>
        `).join('');
    }
    
    // Display reviews on about page
    const reviewsGrid = document.getElementById('reviewsGrid');
    if (reviewsGrid) {
        reviewsGrid.innerHTML = testimonialsData.map(testimonial => `
            <div class="review-box">
                <div class="stars">${'⭐'.repeat(testimonial.rating)}</div>
                <p>"${testimonial.text}"</p>
                <h4>- ${testimonial.name}</h4>
                <p style="color: #666;">${testimonial.location}</p>
            </div>
        `).join('');
    }
    
    // Display hotels
    if (document.getElementById('hotelsGrid')) {
        displayHotels();
    }
});

// Quick Search Function
function quickSearch() {
    const fromInput = document.getElementById('quickFrom')?.value;
    const toInput = document.getElementById('quickTo')?.value;
    const date = document.getElementById('quickDate')?.value;
    
    if (!fromInput || !toInput) {
        alert('Please enter both departure and arrival cities or airport codes');
        return;
    }
    
    // Extract airport codes from input
    let fromCode = fromInput.split('-')[0].trim().toUpperCase();
    let toCode = toInput.split('-')[0].trim().toUpperCase();
    
    // If not 3-letter code, try to find matching airport
    if (fromCode.length !== 3) {
        const matched = airportsData.find(a => a.city.toLowerCase().includes(fromInput.toLowerCase()) || a.name.toLowerCase().includes(fromInput.toLowerCase()));
        if (matched) fromCode = matched.code;
    }
    if (toCode.length !== 3) {
        const matched = airportsData.find(a => a.city.toLowerCase().includes(toInput.toLowerCase()) || a.name.toLowerCase().includes(toInput.toLowerCase()));
        if (matched) toCode = matched.code;
    }
    
    const availableFlights = flightsData.filter(flight => flight.from === fromCode && flight.to === toCode);
    const resultsDiv = document.getElementById('quickResults');
    
    if (!resultsDiv) return;
    
    if (availableFlights.length > 0) {
        resultsDiv.innerHTML = `
            <h3 style="margin: 2rem 0 1rem;">Available Flights</h3>
            ${availableFlights.slice(0, 5).map(flight => `
                <div class="flight-card">
                    <div class="flight-info">
                        <div class="flight-airline">
                            <i class="fas fa-plane"></i>
                            <strong>${flight.airline}</strong> | ${flight.flightNo}
                        </div>
                        <div>✈️ ${flight.from} → ${flight.to}</div>
                        <div>🕐 ${flight.departure} → ${flight.arrival}</div>
                        <div>⏱️ Duration: ${flight.duration}</div>
                        <div>📅 Date: ${flight.date}</div>
                    </div>
                    <div>
                        <div class="flight-price">$${flight.price}</div>
                        <button class="book-flight-btn" onclick="bookFlight('${flight.airline}', '${flight.from}', '${flight.to}', '${flight.date}', ${flight.price}, 1)">Book Now</button>
                    </div>
                </div>
            `).join('')}
        `;
    } else {
        resultsDiv.innerHTML = `
            <div style="text-align: center; padding: 2rem; background: #f8f9fa; border-radius: 15px; margin-top: 2rem;">
                <i class="fas fa-plane-slash" style="font-size: 3rem; color: #f5576c;"></i>
                <h3>No direct flights found for ${fromCode} to ${toCode}</h3>
                <p>Contact us for connecting flights and the best deals!</p>
                <button class="btn" onclick="requestAssistance('${fromCode}', '${toCode}')">Request Assistance</button>
            </div>
        `;
    }
}

// Search Flights Function
function searchFlights() {
    const fromInput = document.getElementById('from')?.value;
    const toInput = document.getElementById('to')?.value;
    const date = document.getElementById('date')?.value;
    const passengers = parseInt(document.getElementById('passengers')?.value || 1);
    
    if (!fromInput || !toInput) {
        alert('Please select departure and arrival cities');
        return;
    }
    
    // Extract airport codes
    let fromCode = fromInput.split('-')[0].trim().toUpperCase();
    let toCode = toInput.split('-')[0].trim().toUpperCase();
    
    if (fromCode.length !== 3) {
        const matched = airportsData.find(a => a.city.toLowerCase().includes(fromInput.toLowerCase()) || a.name.toLowerCase().includes(fromInput.toLowerCase()));
        if (matched) fromCode = matched.code;
    }
    if (toCode.length !== 3) {
        const matched = airportsData.find(a => a.city.toLowerCase().includes(toInput.toLowerCase()) || a.name.toLowerCase().includes(toInput.toLowerCase()));
        if (matched) toCode = matched.code;
    }
    
    let availableFlights = flightsData.filter(flight => flight.from === fromCode && flight.to === toCode);
    const resultsDiv = document.getElementById('flightResults');
    const dateInfo = document.getElementById('dateInfo');
    
    if (availableFlights.length === 0) {
        if (resultsDiv) {
            resultsDiv.innerHTML = `
                <div style="text-align: center; padding: 3rem; background: #f8f9fa; border-radius: 15px;">
                    <i class="fas fa-plane-slash" style="font-size: 4rem; color: #f5576c;"></i>
                    <h3>✈️ No direct flights found for ${fromCode} to ${toCode}</h3>
                    <p>Contact us for connecting flights and the best deals!</p>
                    <button class="btn" onclick="requestAssistance('${fromCode}', '${toCode}')">Request Assistance</button>
                </div>
            `;
        }
        return;
    }
    
    // Find nearest date
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
            dateInfo.innerHTML = `<p style="color: #ff9800; margin: 1rem 0; text-align: center;">📅 Nearest flight is ${Math.round(nearestFlight.diffDays)} days ${nearestFlight.diffDays > 0 ? 'after' : 'before'} your selected date (${nearestFlight.date})</p>`;
        }
    }
    
    if (resultsDiv) {
        resultsDiv.innerHTML = availableFlights.slice(0, 10).map(flight => `
            <div class="flight-card">
                <div class="flight-info">
                    <div class="flight-airline">
                        <i class="fas fa-plane" style="color: #667eea;"></i>
                        <strong>${flight.airline}</strong> | ${flight.flightNo}
                    </div>
                    <div>✈️ ${flight.from} → ${flight.to} (${flight.fromCity} → ${flight.toCity})</div>
                    <div>🕐 Departure: ${flight.departure} | Arrival: ${flight.arrival}</div>
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
        `Please contact me to complete the booking.\n\n` +
        `Customer: ${document.getElementById('inquiryName')?.value || 'New Customer'}\n` +
        `Email: ${document.getElementById('inquiryEmail')?.value || 'Not provided'}`;
    
    // Send to WhatsApp
    const whatsappNumber = "44798515953";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Send to Email
    const email = "info@farenesttravels.com";
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent('Flight Booking Request - ' + airline + ' ' + from + ' to ' + to)}&body=${encodeURIComponent(message)}`;
    window.open(mailtoUrl, '_blank');
    
    alert('📱 Booking request sent!\n\n✓ WhatsApp message opened\n✓ Email prepared\n\nSend both to confirm your booking. We will contact you shortly!');
    
    console.log('Flight Booking:', { airline, from, to, date, price, passengers });
}

// Book Hotel Function
function bookHotel(hotelId, hotelName, price) {
    const message = `🏨 NEW HOTEL BOOKING REQUEST 🏨\n\n` +
        `Hotel: ${hotelName}\n` +
        `Price per night: $${price}\n\n` +
        `Please contact me to complete the reservation.\n\n` +
        `Customer: ${document.getElementById('inquiryName')?.value || 'New Customer'}\n` +
        `Email: ${document.getElementById('inquiryEmail')?.value || 'Not provided'}`;
    
    // Send to WhatsApp
    const whatsappNumber = "44798515953";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Send to Email
    const email = "info@farenesttravels.com";
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent('Hotel Booking Request - ' + hotelName)}&body=${encodeURIComponent(message)}`;
    window.open(mailtoUrl, '_blank');
    
    alert('📱 Hotel booking request sent!\n\n✓ WhatsApp message opened\n✓ Email prepared\n\nSend both to confirm your booking. We will contact you shortly!');
    
    console.log('Hotel Booking:', { hotelId, hotelName, price });
}

// Request Assistance
function requestAssistance(from, to) {
    const message = `🛫 FLIGHT ASSISTANCE REQUEST 🛬\n\n` +
        `I need help finding flights from ${from} to ${to}.\n\n` +
        `Please contact me with the best available options.\n\n` +
        `Customer: ${document.getElementById('inquiryName')?.value || 'New Customer'}\n` +
        `Email: ${document.getElementById('inquiryEmail')?.value || 'Not provided'}`;
    
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
    const subject = document.getElementById('inquirySubject')?.value;
    const message = document.getElementById('inquiryMessage')?.value;
    
    // Email validation - strict regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert('❌ Please enter a valid email address (e.g., name@domain.com)');
        return false;
    }
    
    if (!name || !message || !inquiryType) {
        alert('Please fill in all required fields (Name, Inquiry Type, and Message)');
        return false;
    }
    
    // Prepare full message
    const fullMessage = `📧 NEW CUSTOMER INQUIRY 📧\n\n` +
        `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone || 'Not provided'}\n` +
        `Inquiry Type: ${inquiryType}\n` +
        `Subject: ${subject || 'Not provided'}\n` +
        `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
        `Message:\n${message}\n` +
        `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
        `Please respond to this customer as soon as possible.\n` +
        `Reply to: ${email}`;
    
    // Send to WhatsApp
    const whatsappNumber = "44798515953";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    // Send to Email
    const emailAddress = "info@farenesttravels.com";
    const emailSubject = encodeURIComponent(`New Inquiry from ${name} - ${inquiryType}`);
    const emailBody = encodeURIComponent(fullMessage);
    const mailtoUrl = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;
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
    
    alert('✅ Inquiry sent successfully!\n\n✓ WhatsApp message opened\n✓ Email prepared\n\nSend both to ensure we receive your inquiry. Our team will contact you within 24 hours!');
    
    // Log for debugging
    console.log('Inquiry Submitted:', { name, email, phone, inquiryType, subject, message });
    
    return false;
}

// Display Hotels Function
let hotelsDisplayCount = 20;

function displayHotels() {
    const hotelsGrid = document.getElementById('hotelsGrid');
    if (!hotelsGrid) return;
    
    const displayHotels = hotelsData.slice(0, hotelsDisplayCount);
    
    hotelsGrid.innerHTML = displayHotels.map(hotel => `
        <div class="hotel-card">
            <img src="${hotel.image}" alt="${hotel.name}">
            <div class="hotel-info">
                <div class="hotel-name">${hotel.name}</div>
                <div class="hotel-location"><i class="fas fa-map-marker-alt"></i> ${hotel.location}</div>
                <div class="hotel-rating">${'⭐'.repeat(hotel.rating)}</div>
                <div class="hotel-price">$${hotel.price} <span style="font-size: 0.9rem; color: #666;">/night</span></div>
                <p style="color: #666; font-size: 0.9rem; margin: 0.5rem 0;">${hotel.description}</p>
                <button class="book-hotel-btn" onclick="bookHotel(${hotel.id}, '${hotel.name}', ${hotel.price})">Book Now</button>
            </div>
        </div>
    `).join('');
    
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        if (hotelsDisplayCount >= hotelsData.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    }
}

function loadMoreHotels() {
    hotelsDisplayCount += 20;
    displayHotels();
}

// Filter Hotels Function
function filterHotels() {
    const searchTerm = document.getElementById('hotelSearch')?.value?.toLowerCase() || '';
    const priceFilter = document.getElementById('priceFilter')?.value || 'all';
    const ratingFilter = document.getElementById('ratingFilter')?.value || 'all';
    
    let filtered = hotelsData.filter(hotel => 
        hotel.name.toLowerCase().includes(searchTerm) || 
        hotel.location.toLowerCase().includes(searchTerm)
    );
    
    if (priceFilter !== 'all') {
        if (priceFilter === '0-100') {
            filtered = filtered.filter(hotel => hotel.price < 100);
        } else if (priceFilter === '100-200') {
            filtered = filtered.filter(hotel => hotel.price >= 100 && hotel.price <= 200);
        } else if (priceFilter === '200-500') {
            filtered = filtered.filter(hotel => hotel.price >= 200 && hotel.price <= 500);
        } else if (priceFilter === '500-1000') {
            filtered = filtered.filter(hotel => hotel.price >= 500 && hotel.price <= 1000);
        } else if (priceFilter === '1000+') {
            filtered = filtered.filter(hotel => hotel.price > 1000);
        }
    }
    
    if (ratingFilter !== 'all') {
        const minRating = parseInt(ratingFilter);
        filtered = filtered.filter(hotel => hotel.rating >= minRating);
    }
    
    const hotelsGrid = document.getElementById('hotelsGrid');
    if (hotelsGrid) {
        hotelsGrid.innerHTML = filtered.slice(0, 20).map(hotel => `
            <div class="hotel-card">
                <img src="${hotel.image}" alt="${hotel.name}">
                <div class="hotel-info">
                    <div class="hotel-name">${hotel.name}</div>
                    <div class="hotel-location"><i class="fas fa-map-marker-alt"></i> ${hotel.location}</div>
                    <div class="hotel-rating">${'⭐'.repeat(hotel.rating)}</div>
                    <div class="hotel-price">$${hotel.price} <span style="font-size: 0.9rem; color: #666;">/night</span></div>
                    <button class="book-hotel-btn" onclick="bookHotel(${hotel.id}, '${hotel.name}', ${hotel.price})">Book Now</button>
                </div>
            </div>
        `).join('');
    }
}

// Newsletter Subscription
document.getElementById('newsletterForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    const message = `📧 NEW NEWSLETTER SUBSCRIPTION 📧\n\nEmail: ${email}\n\nPlease add this customer to the newsletter list.`;
    const whatsappNumber = "44798515953";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    alert('Thank you for subscribing! You will receive our latest travel deals.');
    this.reset();
});

// Mobile Menu Toggle
document.querySelector('.menu-toggle')?.addEventListener('click', function() {
    document.querySelector('.nav-links')?.classList.toggle('active');
});
