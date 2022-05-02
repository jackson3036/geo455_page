//Creating the map variable
var mymap = L.map("map", {
    center: [35.4323, -97.9750], 
    zoom: 12});

// Set up baselayers
var streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    minZoom: 12,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

var satellite = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    minZoom: 12,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/satellite-v9',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

//Variables

//var dmgpath = L.icon ({
    //iconUrl: 'images/damagepath.png',
    //iconAnchor: [0, 0],
    //fillOpacity: [0.7],
//});

//var dmgpath = L.marker([35.48935543122857, -98.07385842812151], {icon: dmgpath}).addTo(mymap);

//

// Add a scalebar 
L.control.scale({position: 'bottomright', maxWidth: '150', metric: 'True'}).addTo(mymap);


// Create menu items
var baseLayers = {
    'Streets': streets,
    'Satellite': satellite
	};

var overlays = {
};

//Create the menu window
var layerControl = L.control.layers(baseLayers, overlays, {collapsed: false}).addTo(mymap); //collapsed: true is defaults

//radar
var el = document.getElementById('anim');
function play() {
  el.style.animationPlayState = 'running';
}
function pause() {
  el.style.animationPlayState = 'paused';
}

