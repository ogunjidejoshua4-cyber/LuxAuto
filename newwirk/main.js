// main.js - Main Application Logic
// Initializes filters and handles all interactions

let filteredCars = [...cars];
let currentPage = 1;
const carsPerPage = 12;

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeFilters();
    displayCarsPaginated(1, carsPerPage);
});

// Initialize filter checkboxes
function initializeFilters() {
    // Get unique brands from cars array
    const brands = [...new Set(cars.map(c => c.brand))].sort();
    
    const brandFilters = document.getElementById('brandFilters');
    if (brandFilters) {
        brandFilters.innerHTML = brands.map(brand => `
            <label class="checkbox-item">
                <input type="checkbox" value="${brand}" onchange="applyFilters()">
                <span class="checkbox-label">${brand}</span>
                <span class="checkbox-count">${cars.filter(c => c.brand === brand).length}</span>
            </label>
        `).join('');
    }

    // Get unique fuel types (from type field or add fuel property to cars)
    const fuelTypes = [...new Set(cars.map(c => c.type))].sort();
    
    const fuelFilters = document.getElementById('fuelFilters');
    if (fuelFilters) {
        fuelFilters.innerHTML = fuelTypes.map(fuel => `
            <label class="checkbox-item">
                <input type="checkbox" value="${fuel}" onchange="applyFilters()">
                <span class="checkbox-label">${fuel}</span>
                <span class="checkbox-count">${cars.filter(c => c.type === fuel).length}</span>
            </label>
        `).join('');
    }

    // Transmission filters (Manual vs Automatic)
    const transmissions = ['Automatic', 'Manual'];
    
    const transmissionFilters = document.getElementById('transmissionFilters');
    if (transmissionFilters) {
        transmissionFilters.innerHTML = transmissions.map(trans => `
            <label class="checkbox-item">
                <input type="checkbox" value="${trans}" onchange="applyFilters()">
                <span class="checkbox-label">${trans}</span>
                <span class="checkbox-count">${cars.filter(c => c.type === trans).length}</span>
            </label>
        `).join('');
    }
}

// Apply all filters
function applyFilters() {
    showLoading();
    
    setTimeout(() => {
        const minPrice = parseInt(document.getElementById('minPrice').value) || 0;
        const maxPrice = parseInt(document.getElementById('maxPrice').value) || Infinity;
        
        const selectedBrands = Array.from(document.querySelectorAll('#brandFilters input:checked')).map(cb => cb.value);
        const selectedTypes = Array.from(document.querySelectorAll('#fuelFilters input:checked')).map(cb => cb.value);
        const selectedTransmissions = Array.from(document.querySelectorAll('#transmissionFilters input:checked')).map(cb => cb.value);

        filteredCars = cars.filter(car => {
            const price = parseInt(car.price.replace('₦', '').replace('m', ''));
            const priceMatch = price >= minPrice && price <= maxPrice;
            const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(car.brand);
            const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(car.type);
            const transMatch = selectedTransmissions.length === 0 || selectedTransmissions.includes(car.type);
            
            return priceMatch && brandMatch && typeMatch && transMatch;
        });

        currentPage = 1;
        sortCars(false);
        displayCars(filteredCars);
        updateResultsCount(filteredCars.length);
        hideLoading();
    }, 300);
}

// Sort cars
function sortCars(apply = true) {
    const sortValue = document.getElementById('sortSelect').value;
    
    filteredCars.sort((a, b) => {
        const priceA = parseInt(a.price.replace('₦', '').replace('m', ''));
        const priceB = parseInt(b.price.replace('₦', '').replace('m', ''));
        
        switch(sortValue) {
            case 'price-asc': return priceA - priceB;
            case 'price-desc': return priceB - priceA;
            case 'name-asc': return a.name.localeCompare(b.name);
            case 'name-desc': return b.name.localeCompare(a.name);
            case 'newest': return a.id - b.id;
            default: return 0;
        }
    });

    if (apply) {
        currentPage = 1;
        displayCars(filteredCars);
    }
}

// Clear all filters
function clearAllFilters() {
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    document.getElementById('minPrice').value = '';
    document.getElementById('maxPrice').value = '';
    document.getElementById('sortSelect').value = 'newest';
    
    filteredCars = [...cars];
    currentPage = 1;
    displayCarsPaginated(1, carsPerPage);
    showToast('All filters cleared', 'undo');
}

// Show/hide loading
function showLoading() {
    document.getElementById('loadingIndicator').classList.add('active');
}

function hideLoading() {
    document.getElementById('loadingIndicator').classList.remove('active');
}

// Close mobile filters on resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        document.getElementById('filtersSidebar').classList.remove('active');
        document.getElementById('overlay').classList.remove('active');
        document.body.style.overflow = '';
    }
});