//Set up icon variables
var myIcon8 = L.icon({
    iconUrl: 'Images/twc.png',
    iconSize: [30, 30],
    iconAnchor: [10, 0],
});

var myIcon9 = L.icon({
    iconUrl: 'Images/twc.png',
    iconSize: [30, 30],
    iconAnchor: [10, 0],
});

var myIcon10 = L.icon({
    iconUrl: 'Images/twc.png',
    iconSize: [30, 30],
    iconAnchor: [10, 0],
});

var myIcon11 = L.icon({
    iconUrl: 'Images/twc.png',
    iconSize: [30, 30],
    iconAnchor: [10, 0],
});

var myIcon12 = L.icon({
    iconUrl: 'Images/twc.png',
    iconSize: [30, 30],
    iconAnchor: [10, 0],
});

var myIcon13 = L.icon({
    iconUrl: 'Images/twc.png',
    iconSize: [30, 30],
    iconAnchor: [10, 0],
});

var myIcon14 = L.icon({
    iconUrl: 'Images/twc.png',
   iconSize: [30, 30],
    iconAnchor: [10, 0],
});

// Create custom popups with images
var greatwallPopup = "<b>Team:</b>The Weather Channel<br/><b>Crew:</b> Mike Bettes<br/><b>Time:</b> 6:00pm<br/><b>Location:</b>Hwy 81<br/><b>Direction:</b> South <br/>";

var chichenPopup = "<b>Team:</b>The Weather Channel<br/><b>Crew:</b> Mike Bettes<br/><b>Time:</b> 6:30pm<br/><b>Location:</b>Hwy 81<br/><b>Direction:</b> South <br/><img src='Images/twc630.jpg' width='150px'/>";

var petraPopup = "<b>Team:</b>The Weather Channel<br/><b>Crew:</b> Mike Bettes<br/><b>Time:</b> 6:20pm<br/><b>Location:</b>Hwy 81<br/><b>Direction:</b> South <br/>";

var machuPopup = "Machu Pichu, Peru <br/><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/256px-Machu_Picchu%2C_Peru.jpg' alt='machu wiki', width='150px'/>";

var christPopup = "Christ the Redeemer, Rio de Janeiro <br/><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Aerial_view_of_the_Statue_of_Christ_the_Redeemer.jpg/256px-Aerial_view_of_the_Statue_of_Christ_the_Redeemer.jpg' alt='christ wiki', width='150px'/>";

var coloPopup = "<b>Team:</b>The Weather Channel<br/><b>Crew:</b> Mike Bettes<br/><b>Time:</b> 6:00pm<br/><b>Location:</b>27th St<br/><b>Direction:</b> East <br/>";

var tajPopup = "Taj Mahal, India <br/><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Taj-Mahal.jpg/256px-Taj-Mahal.jpg' alt='taj wiki', width='150px'/>";


var customOptions ={'maxWidth': '150','className' : 'custom'};

          
// Data points
coords = [
    [35.610513, -97.959117],
    [35.508017, -97.946228],
    [35.464618, -97.936915],
    [35.465912, -97.930925],
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
var line = L.polyline(coords, {color: "blue", weight: 7}).bindPopup("Travel Path");
line.addTo(mymap);