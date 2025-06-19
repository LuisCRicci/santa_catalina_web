
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el mapa centrado en Perú
    const map = L.map('map').setView([-9.189967, -75.015152], 6);

    // Agregar capa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Marcadores de las tiendas
    const stores = [
        {
            name: 'Tienda Cusco',
            lat: -13.525249,
            lng: -71.978766,
            address: 'Jr. Wanchaq #526',
            phone: '945567733'
        }
        , {
            name: 'Tienda Arequipa',
            lat: -16.409047,
            lng: -71.537451,
            address: 'Av. Ejercito #123',
            phone: '987654321'
        }
        , {
            name: 'Tienda Lima',
            lat: -12.046374,
            lng: -77.042793,
            address: 'Av. Javier Prado #456',
            phone: '912345678'
        }
        , {
            name: 'Tienda Trujillo',
            lat: -8.109053,
            lng: -79.029242,
            address: 'Av. España #789',
            phone: '998877665'
        }
        , {
            name: 'Tienda Chiclayo',
            lat: -6.7742,
            lng: -79.8394,
            address: 'Av. José Balta #123',
            phone: '987654321'  
        }

        // Agregar más tiendas aquí
    ];

    // Crear HTML para las tarjetas de tiendas
    const storesList = document.querySelector('.stores-list');
    stores.forEach(store => {
        // Crear marcador en el mapa
        const marker = L.marker([store.lat, store.lng])
            .addTo(map)
            .bindPopup(`
                <strong>${store.name}</strong><br>
                ${store.address}<br>
                📞 ${store.phone}
            `);

        // Crear tarjeta de tienda
        const storeCard = document.createElement('div');
        storeCard.className = 'store-card';
        storeCard.innerHTML = `
            <h3>${store.name}</h3>
            <p>📍 ${store.address}</p>
            <p>📞 ${store.phone}</p>
        `;

        // Agregar evento de clic a la tarjeta
        storeCard.addEventListener('click', function() {
            // Animación de vuelo suave
            map.flyTo([store.lat, store.lng], 16, {
                duration: 4, // duración en segundos
                easeLinearity: 0.5
            });
            marker.openPopup();
        });

        storesList.appendChild(storeCard);
    });

    // Ajustar mapa cuando cambia el tamaño de la ventana
    window.addEventListener('resize', function() {
        map.invalidateSize();
    });
});