//Set up icon variables
var myIcon8 = L.icon({
    iconUrl: 'Images/twistex.png',
    iconSize: [30, 30],
    iconAnchor: [10, 0],
});

var myIcon9 = L.icon({
    iconUrl: 'Images/twistex.png',
    iconSize: [30, 30],
    iconAnchor: [10, 0],
});

var myIcon10 = L.icon({
    iconUrl: 'Images/twistex.png',
    iconSize: [30, 30],
    iconAnchor: [10, 0],
});

var myIcon11 = L.icon({
    iconUrl: 'Images/twistex.png',
    iconSize: [30, 30],
    iconAnchor: [10, 0],
});

var myIcon12 = L.icon({
    iconUrl: 'Images/twistex.png',
    iconSize: [30, 30],
    iconAnchor: [10, 0],
});

var myIcon13 = L.icon({
    iconUrl: 'Images/twistex.png',
    iconSize: [30, 30],
    iconAnchor: [10, 0],
});

var myIcon14 = L.icon({
    iconUrl: 'Images/twistex.png',
    iconSize: [30, 30],
    iconAnchor: [10, 0],
});

// Create custom popups with images
var greatwallPopup = "Great Wall of China<br/><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/20090529_Great_Wall_8185.jpg/256px-20090529_Great_Wall_8185.jpg' alt='great wall wiki' width='150px'/>";

var chichenPopup = "<b>Team:</b>Twistex<br/><b>Crew:</b> Tim Samaras, Paul Samaras, Carl Young<br/><b>Time:</b> 6:20pm<br/><b>Location:</b> Reuter Rd<br/><b>Direction:</b> East <br/><img src='Images/twistex630.PNG' width='150px'/>";

var petraPopup = "<b>Team:</b>Twistex<br/><b>Crew:</b> Tim Samaras, Paul Samaras, Carl Young<br/><b>Time:</b> 6:10pm<br/><b>Location:</b> Reuter Rd<br/><b>Direction:</b> East <br/>";

var machuPopup = "Machu Pichu, Peru <br/><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/256px-Machu_Picchu%2C_Peru.jpg' alt='machu wiki', width='150px'/>";

var christPopup = "Christ the Redeemer, Rio de Janeiro <br/><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Aerial_view_of_the_Statue_of_Christ_the_Redeemer.jpg/256px-Aerial_view_of_the_Statue_of_Christ_the_Redeemer.jpg' alt='christ wiki', width='150px'/>";

var coloPopup = "<b>Team:</b>Twistex<br/><b>Crew:</b> Tim Samaras, Paul Samaras, Carl Young<br/><b>Time:</b> 6:00pm<br/><b>Location:</b> Reuter Rd<br/><b>Direction:</b> East <br/>";

var tajPopup = "Taj Mahal, India <br/><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Taj-Mahal.jpg/256px-Taj-Mahal.jpg' alt='taj wiki', width='150px'/>";


var customOptions ={'maxWidth': '150','className' : 'custom'};

          
// Data points
coords = [
    [35.494945, -97.954965],
    [35.494945, -97.954965],
    [35.479019, -97.933812],
    [35.479024, -97.900415]
];

// Marker Layergroup
var loc = L.layerGroup();
L.marker(coords[0], {icon: myIcon8}).bindPopup(greatwallPopup, customOptions).addTo(loc);
L.marker(coords[1], {icon: myIcon9}).bindPopup(coloPopup, customOptions).addTo(loc);
L.marker(coords[2], {icon: myIcon10}).bindPopup(petraPopup, customOptions).addTo(loc);
L.marker(coords[3], {icon: myIcon11}).bindPopup(chichenPopup, customOptions).addTo(loc);
L.marker(coords[4], {icon: myIcon12}).bindPopup(machuPopup, customOptions);
L.marker(coords[5], {icon: myIcon13}).bindPopup(christPopup, customOptions);
L.marker(coords[6], {icon: myIcon14}).bindPopup(tajPopup, customOptions);
loc.addTo(mymap);


// Add Line
var line = L.polyline(coords, {color: "gold", weight: 7}).bindPopup("Travel Path");
line.addTo(mymap);