// Selecciona una sección del sidebar y marca la opción activa
function selectSection(section) {
    // Quita la clase 'active' de todos los elementos del sidebar
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Agrega la clase 'active' al elemento seleccionado (debería ser 'section' en vez de 'target')
    target.classList.add('active');
    
    // Aquí se podría cargar contenido dinámicamente según la sección seleccionada
    console.log('Selected section:', section);
}

// Selecciona o deselecciona un vehículo en la interfaz
function selectVehicle(element) {
    const checkbox = element.querySelector('.vehicle-checkbox');
    const isSelected = element.classList.contains('selected');
    
    if (isSelected) {
        // Si ya está seleccionado, lo deselecciona y desmarca el checkbox
        element.classList.remove('selected');
        checkbox.checked = false;
    } else {
        // Si no está seleccionado, lo selecciona y marca el checkbox
        element.classList.add('selected');
        checkbox.checked = true;
    }
}

// Selecciona o deselecciona una marca en la interfaz
function selectBrand(element) {
    const checkbox = element.querySelector('.brand-checkbox');
    const isSelected = element.classList.contains('selected');
    
    if (isSelected) {
        // Si ya está seleccionada, la deselecciona y desmarca el checkbox
        element.classList.remove('selected');
        checkbox.checked = false;
    } else {
        // Si no está seleccionada, la selecciona y marca el checkbox
        element.classList.add('selected');
        checkbox.checked = true;
    }
}


// Cierra la sesión del usuario tras confirmación
function logout() {
    if (confirm('¿Está seguro que desea cerrar sesión?')) {
        // Redirige a la página de login
        window.location.href = 'login.html';
    }
}

// Maneja los cambios en los checkboxes de servicios
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.service-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // Muestra en consola el servicio seleccionado y su estado
            console.log('Service selected:', this.id, this.checked);
        });
    });
});
