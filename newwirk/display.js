// display.js - Display Functions
// Renders cars from cars.js to the DOM

/**
 * Display cars in the container
 * @param {Array} list - Array of car objects (defaults to all cars)
 * @param {string} containerId - ID of the container element
 */
function displayCars(list = cars, containerId = 'carsGrid') {
    const container = document.getElementById(containerId);
    
    if (!container) {
        console.error(`Container with ID '${containerId}' not found`);
        return;
    }

    // Clear container
    container.innerHTML = "";

    // Handle empty state
    if (list.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h3>No vehicles found</h3>
                <p>Try adjusting your filters to see more results</p>
            </div>
        `;
        return;
    }

    // Render each car
    list.forEach((car, index) => {
        container.innerHTML += createCarCard(car, index);
    });
}

/**
 * Create HTML for a single car card
 * @param {Object} car - Car object
 * @param {number} index - Index for animation delay
 * @returns {string} HTML string
 */
function createCarCard(car, index) {
    const delay = index * 0.05;
    
    return `
        <div class="car-card" style="animation-delay: ${delay}s" data-id="${car.id}">
            <div class="car-image-container">
                <img src="${car.image}" alt="${car.name}" class="car-image" loading="lazy">
                <div class="quick-actions">
                    <button class="quick-btn" onclick="handleFavorite(${car.id})" title="Add to favorites">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button class="quick-btn" onclick="handleCompare(${car.id})" title="Compare">
                        <i class="fas fa-exchange-alt"></i>
                    </button>
                    <button class="quick-btn" onclick="handleQuickView(${car.id})" title="Quick view">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
            <div class="car-content">
                <div class="car-header">
                    <div class="car-title-group">
                        <div class="car-brand">${car.brand}</div>
                        <h3 class="car-name">${car.name}</h3>
                        <div class="car-meta">${car.type} • ${car.leters}</div>
                    </div>
                    <div class="car-price">
                        <div class="price-amount">${car.price}</div>
                        <div class="price-time"></div>
                    </div>
                </div>
                <div class="car-specs">
                    <div class="spec-item">
                        <i class="fas fa-cog"></i>
                        <span>${car.type}</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-gas-pump"></i>
                        <span>${car.leters}</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-snowflake"></i>
                        <span>${car.Air}</span>
                    </div>
                </div>
                <div class="car-footer">
                    <button class="btn-view" onclick="handleViewDetails(${car.id})">
                        View Details <i class="fas fa-arrow-right"></i>
                    </button>
                    <button class="btn-compare" onclick="handleCompare(${car.id})">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

/**
 * Handle favorite toggle
 * @param {number} id - Car ID
 */
function handleFavorite(id) {
    const car = cars.find(c => c.id === id);
    if (car) {
        showToast(`${car.name} added to favorites`, 'heart');
    }
}

/**
 * Handle compare toggle
 * @param {number} id - Car ID
 */
function handleCompare(id) {
    const car = cars.find(c => c.id === id);
    if (car) {
        showToast(`${car.name} added to comparison`, 'check');
    }
}

/**
 * Handle quick view
 * @param {number} id - Car ID
 */
function handleQuickView(id) {
    const car = cars.find(c => c.id === id);
    if (car) {
        showToast(`Quick view: ${car.name}`, 'eye');
    }
}

/**
 * Handle view details navigation
 * @param {number} id - Car ID
 */
function handleViewDetails(id) {
    const car = cars.find(c => c.id === id);
    if (car) {
        localStorage.setItem('selectedCar', JSON.stringify(car));
        window.location.href = `car-detail.html?id=${id}`;
    }
}

/**
 * Show toast notification
 * @param {string} message - Message to display
 * @param {string} icon - FontAwesome icon name
 */
function showToast(message, icon = 'info-circle') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-${icon}"></i> ${message}`;
    container.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/**
 * Toggle between grid and list view
 * @param {string} mode - 'grid' or 'list'
 */
function toggleView(mode) {
    const container = document.getElementById('carsGrid');
    const gridBtn = document.getElementById('gridBtn');
    const listBtn = document.getElementById('listBtn');
    
    if (mode === 'grid') {
        container.classList.remove('list-view');
        gridBtn?.classList.add('active');
        listBtn?.classList.remove('active');
    } else {
        container.classList.add('list-view');
        listBtn?.classList.add('active');
        gridBtn?.classList.remove('active');
    }
}

/**
 * Filter cars by brand
 * @param {string} brand - Brand name to filter by
 */
function filterByBrand(brand) {
    const filtered = cars.filter(car => car.brand === brand);
    displayCars(filtered);
    updateResultsCount(filtered.length);
}

/**
 * Filter cars by price range
 * @param {number} minPrice - Minimum price in millions
 * @param {number} maxPrice - Maximum price in millions
 */
function filterByPrice(minPrice, maxPrice) {
    const filtered = cars.filter(car => {
        const price = parseInt(car.price.replace('₦', '').replace('m', ''));
        return price >= minPrice && price <= maxPrice;
    });
    displayCars(filtered);
    updateResultsCount(filtered.length);
}

/**
 * Search cars by name or brand
 * @param {string} query - Search query
 */
function searchCars(query) {
    const lowerQuery = query.toLowerCase();
    const filtered = cars.filter(car => 
        car.name.toLowerCase().includes(lowerQuery) || 
        car.brand.toLowerCase().includes(lowerQuery)
    );
    displayCars(filtered);
    updateResultsCount(filtered.length);
}

/**
 * Sort cars by price
 * @param {string} order - 'asc' or 'desc'
 */
function sortByPrice(order = 'asc') {
    const sorted = [...cars].sort((a, b) => {
        const priceA = parseInt(a.price.replace('₦', '').replace('m', ''));
        const priceB = parseInt(b.price.replace('₦', '').replace('m', ''));
        return order === 'asc' ? priceA - priceB : priceB - priceA;
    });
    displayCars(sorted);
}

/**
 * Update results count display
 * @param {number} count - Number of cars shown
 */
function updateResultsCount(count) {
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) {
        resultsCount.textContent = `Showing ${count} of ${cars.length} vehicles`;
    }
}

/**
 * Display cars with pagination
 * @param {number} page - Current page number
 * @param {number} perPage - Items per page
 */
function displayCarsPaginated(page = 1, perPage = 12) {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const paginatedCars = cars.slice(start, end);
    
    displayCars(paginatedCars);
    renderPagination(page, perPage);
    updateResultsCount(paginatedCars.length);
}

/**
 * Render pagination controls
 * @param {number} currentPage - Current page
 * @param {number} perPage - Items per page
 */
function renderPagination(currentPage = 1, perPage = 12) {
    const totalPages = Math.ceil(cars.length / perPage);
    const pagination = document.getElementById('pagination');
    
    if (!pagination) return;
    
    let html = `
        <button class="page-btn" onclick="displayCarsPaginated(${currentPage - 1}, ${perPage})" ${currentPage === 1 ? 'disabled' : ''}>
            <i class="fas fa-chevron-left"></i>
        </button>
    `;

    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="displayCarsPaginated(${i}, ${perPage})">${i}</button>`;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            html += `<span style="color: #a0a0a0; padding: 0.5rem;">...</span>`;
        }
    }

    html += `
        <button class="page-btn" onclick="displayCarsPaginated(${currentPage + 1}, ${perPage})" ${currentPage === totalPages ? 'disabled' : ''}>
            <i class="fas fa-chevron-right"></i>
        </button>
    `;

    pagination.innerHTML = html;
}

/**
 * Toggle mobile filters sidebar
 */
function toggleMobileFilters() {
    const sidebar = document.getElementById('filtersSidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        displayCars,
        createCarCard,
        handleFavorite,
        handleCompare,
        handleQuickView,
        handleViewDetails,
        showToast,
        toggleView,
        filterByBrand,
        filterByPrice,
        searchCars,
        sortByPrice,
        displayCarsPaginated,
        renderPagination,
        toggleMobileFilters
    };
}