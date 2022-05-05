//Creating the map variable
var mymap = L.map("map", {
    center: [35.4323, -97.9750], 
    zoom: 12});

// Set up baselayers
var streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    minZoom: 12,
    maxZoom: 12,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

var satellite = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    minZoom: 12,
    maxZoom: 12,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/satellite-v9',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

//Variables

var dmgpath = L.icon ({
    iconUrl: 'images/damagepath.png',
    iconSize: [600, 350],
    iconAnchor: [0, 0],
});

var dmgpath = L.marker([35.51985543122857, -98.07385842812151], {icon: dmgpath}).addTo(mymap);
    dmgpath.setOpacity(0.5)

//

// Add a scalebar 
L.control.scale({position: 'bottomright', maxWidth: '150', metric: 'True'}).addTo(mymap);

//Create the menu window
var layerControl = L.control.layers(baseLayers, overlays, {collapsed: false}).addTo(mymap); //collapsed: true is defaults

//radar
var myIcon0 = L.icon({
    iconUrl: 'Images/radar.gif',
    iconSize: [3600, 3400],
    iconAnchor: [-10, -10],
});

var radar = L.marker([36.0703930712336, -98.5445077703547], {icon: myIcon0}).addTo(mymap);
    radar.setOpacity(0.5)

//Set up icon variables
var myIcon1 = L.icon({
    iconUrl: 'Images/reedtimmer.png',
    iconSize: [55, 50],
    iconAnchor: [10, 0],
});

var myIcon2 = L.icon({
    iconUrl: 'Images/reedtimmer.png',
    iconSize: [55, 50],
    iconAnchor: [10, 0],
});

var myIcon3 = L.icon({
    iconUrl: 'Images/reedtimmer.png',
    iconSize: [55, 50],
    iconAnchor: [10, 0],
});

var myIcon4 = L.icon({
    iconUrl: 'Images/reedtimmer.png',
    iconSize: [55, 50],
    iconAnchor: [10, 0],
});

var myIcon5 = L.icon({
    iconUrl: 'Images/reedtimmer.png',
    iconSize: [55, 50],
    iconAnchor: [10, 0],
});

var myIcon6 = L.icon({
    iconUrl: 'Images/reedtimmer.png',
    iconSize: [55, 50],
    iconAnchor: [10, 0],
});

var myIcon7 = L.icon({
    iconUrl: 'Images/reedtimmer.png',
    iconSize: [55, 50],
    iconAnchor: [10, 0],
});

// Create custom popups with images
var greatwallPopup = "<b>Team:</b> Dominator<br/><b>Crew:</b> Reed Timmer, Dick McGowan, Mike Scantlin, Chris Chittick<br/><b>Time:</b> 6:00pm<br/><b>Location:</b> Jensen Rd<br/><b>Direction:</b> West <br/><img src='Images/timmer600.PNG' width='150px'/>";

var chichenPopup = "<b>Team:</b> Dominator<br/><b>Crew:</b> Reed Timmer, Dick McGowan, Mike Scantlin, Chris Chittick<br/><b>Time:</b> 6:30pm<br/><b>Location:</b> Hwy 81<br/><b>Direction:</b> North <br/><img src='Images/timmer630.PNG' width='150px'/>";

var petraPopup = "<b>Team:</b> Dominator<br/><b>Crew:</b> Reed Timmer, Dick McGowan, Mike Scantlin, Chris Chittick<br/><b>Time:</b> 6:20pm<br/><b>Location:</b> Airport Rd<br/><b>Direction:</b> South <br/><img src='Images/timmer620.PNG' width='150px'/>";

var machuPopup = "Machu Pichu, Peru <br/><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/256px-Machu_Picchu%2C_Peru.jpg' alt='machu wiki', width='150px'/>";

var christPopup = "Christ the Redeemer, Rio de Janeiro <br/><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Aerial_view_of_the_Statue_of_Christ_the_Redeemer.jpg/256px-Aerial_view_of_the_Statue_of_Christ_the_Redeemer.jpg' alt='christ wiki', width='150px'/>";

var coloPopup = "<b>Team:</b> Dominator<br/><b>Crew:</b> Reed Timmer, Dick McGowan, Mike Scantlin, Chris Chittick<br/><b>Time:</b> 6:10pm<br/><b>Location:</b> Fort Reno Rd<br/><b>Direction:</b> South <br/><img src='Images/timmer610.PNG' width='150px'/>";


var tajPopup = "Taj Mahal, India <br/><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Taj-Mahal.jpg/256px-Taj-Mahal.jpg' alt='taj wiki', width='150px'/>";


var customOptions ={'maxWidth': '150','className' : 'custom'};

          
// Data points
coords = [
    [35.493528, -98.049667],
    [35.462022, -98.061041],
    [35.412216, -98.007982],
    [35.464618, -97.936915],
];

// Marker Layergroup
var loc = L.layerGroup();
L.marker(coords[0], {icon: myIcon1}).bindPopup(greatwallPopup, customOptions).addTo(loc);
L.marker(coords[1], {icon: myIcon2}).bindPopup(coloPopup, customOptions).addTo(loc);
L.marker(coords[2], {icon: myIcon3}).bindPopup(petraPopup, customOptions).addTo(loc);
L.marker(coords[3], {icon: myIcon4}).bindPopup(chichenPopup, customOptions).addTo(loc);
L.marker(coords[4], {icon: myIcon5}).bindPopup(machuPopup, customOptions);
L.marker(coords[5], {icon: myIcon6}).bindPopup(christPopup, customOptions)
L.marker(coords[6], {icon: myIcon7}).bindPopup(tajPopup, customOptions)
loc.addTo(mymap);


// Add Line
var line = L.polyline(coords, {color: "red", weight: 7}).bindPopup("Travel Path");
line.addTo(mymap);


// Create menu items
var baseLayers = {
    'Streets': streets,
    'Satellite': satellite
	};

var overlays = {
    'Damage Path': dmgpath,
    'Radar': radar,
    'Reed Timmer': loc,
};


//Create the menu window
var layerControl = L.control.layers(baseLayers, overlays, {collapsed: true}).addTo(mymap); //collapsed: true is defaults
