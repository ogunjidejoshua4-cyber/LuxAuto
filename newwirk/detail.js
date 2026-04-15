// detail.js - Car Detail Page Logic

// Get car ID from URL
const urlParams = new URLSearchParams(window.location.search);
const carId = parseInt(urlParams.get('id'));

// Current car data
let currentCar = null;

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    loadCarDetails();
});

/**
 * Load car details from localStorage or cars array
 */
function loadCarDetails() {
    const loadingState = document.getElementById('loadingState');
    const detailContent = document.getElementById('detailContent');
    const errorState = document.getElementById('errorState');
    const similarSection = document.getElementById('similarSection');

    // Try to get car from localStorage first
    const storedCar = localStorage.getItem('selectedCar');
    
    if (storedCar) {
        currentCar = JSON.parse(storedCar);
    } else if (carId) {
        // Fallback: find in cars array
        currentCar = cars.find(c => c.id === carId);
    }

    // Simulate loading delay
    setTimeout(() => {
        loadingState.style.display = 'none';

        if (currentCar) {
            populateCarDetails(currentCar);
            detailContent.style.display = 'grid';
            similarSection.style.display = 'block';
            loadSimilarCars(currentCar);
        } else {
            errorState.style.display = 'block';
        }
    }, 800);
}

/**
 * Populate all car details on the page
 */
function populateCarDetails(car) {
    // Update page title
    document.title = `${car.name} - LuxAuto`;

    // Breadcrumb
    document.getElementById('breadcrumbCarName').textContent = car.name;

    // Main Image
    document.getElementById('mainCarImage').src = car.image;
    document.getElementById('mainCarImage').alt = car.name;

    // Basic Info
    document.getElementById('detailBrand').textContent = car.brand;
    document.getElementById('detailName').textContent = car.name;
    document.getElementById('detailPrice').textContent = car.price;
    document.getElementById('detailTime').textContent = car.time;

    // Specs
    document.getElementById('detailType').textContent = car.type;
    document.getElementById('detailLiters').textContent = car.leters;
    document.getElementById('detailAir').textContent = car.Air;

    // Price Summary
    document.getElementById('summaryBasePrice').textContent = car.price;
    
    // Calculate total (base + insurance + fee)
    const basePrice = parseInt(car.price.replace('₦', '').replace('m', ''));
    const total = basePrice + 2 + 0.5; // Add ₦2m insurance + ₦500k fee
    document.getElementById('summaryTotal').textContent = `₦${total}m`;

    // Generate thumbnails (using same image with variations for demo)
    generateThumbnails(car);

    // Update description with car-specific text
    updateDescription(car);
}

/**
 * Generate thumbnail gallery
 */
function generateThumbnails(car) {
    const thumbnailGrid = document.getElementById('thumbnailGrid');
    
    // Create 4 thumbnails (using same image with different params for demo)
    const thumbnails = [
        car.image,
        car.image.replace('car=' + car.id, 'car=' + car.id + '&view=1'),
        car.image.replace('car=' + car.id, 'car=' + car.id + '&view=2'),
        car.image.replace('car=' + car.id, 'car=' + car.id + '&view=3')
    ];

    thumbnailGrid.innerHTML = thumbnails.map((thumb, index) => `
        <div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeMainImage('${thumb}', this)">
            <img src="${thumb}" alt="View ${index + 1}">
        </div>
    `).join('');
}

/**
 * Change main image when thumbnail clicked
 */
function changeMainImage(src, thumbnailElement) {
    document.getElementById('mainCarImage').src = src;
    
    // Update active state
    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    thumbnailElement.classList.add('active');
}

/**
 * Toggle fullscreen image view
 */
function toggleFullscreen() {
    const img = document.getElementById('mainCarImage');
    
    if (img.requestFullscreen) {
        img.requestFullscreen();
    } else if (img.webkitRequestFullscreen) {
        img.webkitRequestFullscreen();
    }
}

/**
 * Update description based on car type
 */
function updateDescription(car) {
    const descriptions = {
        'TOYOTA': 'Experience the legendary reliability and comfort of Toyota. This vehicle offers exceptional fuel efficiency, spacious interior, and advanced safety features perfect for Nigerian roads.',
        'HONDA': 'Discover Honda\'s perfect blend of performance and practicality. Featuring innovative technology, responsive handling, and premium comfort for an enjoyable driving experience.',
        'FORD': 'American muscle meets modern sophistication. This Ford delivers powerful performance, rugged durability, and cutting-edge technology for those who demand more from their vehicle.',
        'CHEVROLET': 'Bold design meets exceptional value. Chevrolet offers reliable performance, spacious interiors, and modern features that make every journey memorable.',
        'NISSAN': 'Innovation that excites. Nissan combines sleek design with intelligent technology, delivering a driving experience that\'s both thrilling and efficient.',
        'HYUNDAI': 'Modern design meets exceptional value. Hyundai offers premium features, outstanding warranty coverage, and sophisticated styling that rivals luxury brands.',
        'KIA': 'Movement that inspires. Kia delivers striking design, advanced technology, and impressive value with industry-leading warranty coverage.',
        'BMW': 'The ultimate driving machine. Experience precision engineering, luxurious comfort, and exhilarating performance that defines automotive excellence.',
        'MERCEDES-BENZ': 'The best or nothing. Mercedes-Benz represents the pinnacle of automotive luxury, combining timeless elegance with groundbreaking innovation.',
        'AUDI': 'Vorsprung durch Technik. Advancement through technology. Audi offers sophisticated design, quattro all-wheel drive, and premium craftsmanship.'
    };

    const description = descriptions[car.brand] || descriptions['TOYOTA'];
    document.getElementById('detailDescription').textContent = description;
}

/**
 * Load similar cars (same brand or similar price)
 */
function loadSimilarCars(currentCar) {
    const similarGrid = document.getElementById('similarGrid');
    
    // Find similar cars (same brand, different model, or similar price range)
    const currentPrice = parseInt(currentCar.price.replace('₦', '').replace('m', ''));
    
    const similar = cars.filter(car => {
        if (car.id === currentCar.id) return false;
        
        const carPrice = parseInt(car.price.replace('₦', '').replace('m', ''));
        const sameBrand = car.brand === currentCar.brand;
        const similarPrice = Math.abs(carPrice - currentPrice) <= 10; // Within ₦10m
        
        return sameBrand || similarPrice;
    }).slice(0, 3); // Get top 3

    // If not enough similar cars, add random ones
    while (similar.length < 3) {
        const random = cars[Math.floor(Math.random() * cars.length)];
        if (random.id !== currentCar.id && !similar.find(c => c.id === random.id)) {
            similar.push(random);
        }
    }

    // Render similar cars using display.js function
    similarGrid.innerHTML = similar.map((car, index) => createCarCard(car, index)).join('');
    
    // Re-attach event listeners for the new cards
    similar.forEach(car => {
        const card = similarGrid.querySelector(`[data-id="${car.id}"]`);
        if (card) {
            const viewBtn = card.querySelector('.btn-view');
            viewBtn.onclick = () => {
                localStorage.setItem('selectedCar', JSON.stringify(car));
                window.location.href = `car-detail.html?id=${car.id}`;
            };
        }
    });
}

/**
 * Book Now button action
 */
function bookNow() {
    if (!currentCar) return;
    
    // Store booking info
    const bookingInfo = {
        car: currentCar,
        date: new Date().toISOString(),
        status: 'pending'
    };
    localStorage.setItem('currentBooking', JSON.stringify(bookingInfo));
    
    showToast('Redirecting to booking page...', 'calendar-check');
    
    // Redirect to booking page (create this page later)
    setTimeout(() => {
        window.location.href = 'booking.html';
    }, 1500);
}

/**
 * Add to Compare button action
 */
function addToCompare() {
    if (!currentCar) return;
    
    let compareList = JSON.parse(localStorage.getItem('compareList') || '[]');
    
    if (compareList.find(c => c.id === currentCar.id)) {
        showToast('Already in comparison list', 'info-circle');
        return;
    }
    
    if (compareList.length >= 3) {
        showToast('You can compare up to 3 cars', 'exclamation-circle');
        return;
    }
    
    compareList.push(currentCar);
    localStorage.setItem('compareList', JSON.stringify(compareList));
    
    showToast(`${currentCar.name} added to comparison`, 'check');
}

/**
 * Add to Favorites button action
 */
function addToFavorites() {
    if (!currentCar) return;
    
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    if (favorites.find(c => c.id === currentCar.id)) {
        showToast('Already in favorites', 'info-circle');
        return;
    }
    
    favorites.push(currentCar);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    showToast(`${currentCar.name} added to favorites`, 'heart');
}

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        loadCarDetails,
        populateCarDetails,
        bookNow,
        addToCompare,
        addToFavorites
    };
}