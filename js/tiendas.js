// File: js/tiendas.js
document.addEventListener('DOMContentLoaded', function() {
    // Inicializa el mapa centrado en Perú usando Leaflet
    const map = L.map('map').setView([-9.189967, -75.015152], 6);

    // Agrega la capa de OpenStreetMap al mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Define un arreglo de objetos con los datos de las tiendas (nombre, ubicación, dirección y teléfono)
    const stores = [
        {
            name: 'Tienda Cusco',
            lat: -13.525249,
            lng: -71.978766,
            address: 'Jr. Wanchaq #526',
            phone: '945567733'
        },
        {
            name: 'Tienda Arequipa',
            lat: -16.409047,
            lng: -71.537451,
            address: 'Av. Ejercito #123',
            phone: '987654321'
        },
        {
            name: 'Tienda Lima',
            lat: -12.046374,
            lng: -77.042793,
            address: 'Av. Javier Prado #456',
            phone: '912345678'
        },
        {
            name: 'Tienda Trujillo',
            lat: -8.109053,
            lng: -79.029242,
            address: 'Av. España #789',
            phone: '998877665'
        },
        {
            name: 'Tienda Chiclayo',
            lat: -6.7742,
            lng: -79.8394,
            address: 'Av. José Balta #123',
            phone: '987654321'
        }
        // Se pueden agregar más tiendas aquí
    ];

    // Selecciona el contenedor donde se mostrarán las tarjetas de tiendas
    const storesList = document.querySelector('.stores-list');

    // Recorre cada tienda para crear su marcador en el mapa y su tarjeta en la lista
    stores.forEach(store => {
        // Crea un marcador en el mapa para la tienda y le asigna un popup con su información
        const marker = L.marker([store.lat, store.lng])
            .addTo(map)
            .bindPopup(`
                <strong>${store.name}</strong><br>
                ${store.address}<br>
                📞 ${store.phone}
            `);

        // Crea la tarjeta HTML para la tienda
        const storeCard = document.createElement('div');
        storeCard.className = 'store-card';
        storeCard.innerHTML = `
            <h3>${store.name}</h3>
            <p>📍 ${store.address}</p>
            <p>📞 ${store.phone}</p>
        `;

        // Al hacer clic en la tarjeta, el mapa vuela suavemente a la tienda y abre el popup
        storeCard.addEventListener('click', function() {
            map.flyTo([store.lat, store.lng], 16, {
                duration: 4, // duración de la animación en segundos
                easeLinearity: 0.5
            });
            marker.openPopup();
        });

        // Agrega la tarjeta al contenedor de la lista de tiendas
        storesList.appendChild(storeCard);
    });

    // Ajusta el tamaño del mapa si la ventana cambia de tamaño
    window.addEventListener('resize', function() {
        map.invalidateSize();
    });
});