function selectSection(section) {
    // Remove active class from all sidebar items
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to clicked item
    event.target.classList.add('active');
    
    // Here you would load different content based on section
    console.log('Selected section:', section);
}

function selectVehicle(element) {
    const checkbox = element.querySelector('.vehicle-checkbox');
    const isSelected = element.classList.contains('selected');
    
    if (isSelected) {
        element.classList.remove('selected');
        checkbox.checked = false;
    } else {
        element.classList.add('selected');
        checkbox.checked = true;
    }
}

function selectBrand(element) {
    const checkbox = element.querySelector('.brand-checkbox');
    const isSelected = element.classList.contains('selected');
    
    if (isSelected) {
        element.classList.remove('selected');
        checkbox.checked = false;
    } else {
        element.classList.add('selected');
        checkbox.checked = true;
    }
}

function performSearch() {
    const searchTerm = document.querySelector('.search-input').value;
    console.log('Searching for:', searchTerm);
    // Here you would implement the search functionality
    alert('Buscando: ' + searchTerm);
}

function logout() {
    if (confirm('¿Está seguro que desea cerrar sesión?')) {
        // Redirect to login page
        window.location.href = 'login.html';
    }
}

// Handle service checkboxes
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.service-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            console.log('Service selected:', this.id, this.checked);
        });
    });
});