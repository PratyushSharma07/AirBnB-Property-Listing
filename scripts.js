const properties = [
    {
        id: 1,
        title: 'Cozy Apartment in City Center',
        location: 'Delhi',
        price: 12000,
        amenities: ['WiFi', 'Kitchen', 'Air Conditioning'],
        image: 'image1.jpg',
        liked: false
    },
    {
        id: 2,
        title: 'Modern House with Pool',
        location: 'Banglore',
        price: 20000,
        amenities: ['Pool', 'Free Parking', 'Washer'],
        image: 'image2.jpg',
        liked: false
    },
    {
        id: 3,
        title: 'Modern vila',
        location: 'Chennai',
        price: 50000,
        amenities: ['Pool', 'Free Parking', 'Washer'],
        image: 'image3.jpg',
        liked: false
    },
];

document.getElementById('search-button').addEventListener('click', () => {
    const location = document.getElementById('search-location').value.toLowerCase();
    const date = document.getElementById('search-date').value;
    const price = document.getElementById('search-price').value;

    const filteredProperties = properties.filter(property => {
        return (!location || property.location.toLowerCase().includes(location)) &&
               (!price || property.price <= price);
    });

    displayProperties(filteredProperties);
});

function displayProperties(properties) {
    const propertyList = document.getElementById('property-list');
    propertyList.innerHTML = '';

    properties.forEach(property => {
        const propertyElement = document.createElement('div');
        propertyElement.className = 'property';

        propertyElement.innerHTML = `

            <img src="${property.image}" alt="${property.title} ">
            <div class="property-details">
             
                <h2>${property.title}</h2>
                <p>${property.location}</p>
                <p>₹${property.price} per night</p>
                <p>Amenities: ${property.amenities.join(', ')}</p>
 <button class="like-button" onclick="toggleLike(${property.id})">
                    <img src="${property.liked ? 'liked.png' : 'unliked.png'}" alt="${property.liked ? 'Liked' : 'Unliked'}">
                </button>
                                <button class="book-button" onclick="bookProperty(${property.id})">Book</button>
            </div>
        `;

        propertyList.appendChild(propertyElement);
    });
}

function toggleLike(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    property.liked = !property.liked;
    displayProperties(properties);
}

function bookProperty(propertyId) {
    const guests = prompt("Enter number of guests:");
    const date = prompt("Enter booking date (YYYY-MM-DD):");
    alert(`Property booked for ${guests} guests on ${date}`);
}

displayProperties(properties);
