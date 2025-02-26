// Inicializa el mapa
const map = L.map('map').setView([40.7128, -74.0060], 13);

// Capa del mapa satelital (Google Maps)
const satelliteLayer = L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    attribution: '© Google Maps'
}).addTo(map);

// Capa del mapa de OpenStreetMap
const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Crea un contenedor de div para superponer el mapa
const topLayer = L.map('map', {
    center: [40.7128, -74.0060],
    zoom: 13,
    layers: [osmLayer],
    zoomControl: false,
    attributionControl: false
});

// Sincroniza ambos mapas
map.sync(topLayer);

// Ajusta el tamaño de la máscara con el slider
const slider = document.getElementById('slider');
slider.addEventListener('input', (e) => {
    const width = e.target.value * 100;
    document.querySelector('.leaflet-top-pane').style.clipPath = `inset(0 ${100 - width}% 0 0)`;
});


