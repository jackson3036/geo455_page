//Set up icon variables
var myIcon8 = L.icon({
    iconUrl: 'Images/skiptalbot.png',
    iconSize: [30, 30],
    iconAnchor: [10, 0],
});

var myIcon9 = L.icon({
    iconUrl: 'Images/skiptalbot.png',
    iconSize: [30, 30],
    iconAnchor: [10, 0],
});

var myIcon10 = L.icon({
    iconUrl: 'Images/skiptalbot.png',
    iconSize: [30, 30],
    iconAnchor: [10, 0],
});

var myIcon11 = L.icon({
    iconUrl: 'Images/skiptalbot.png',
    iconSize: [30, 30],
    iconAnchor: [10, 0],
});

var myIcon12 = L.icon({
    iconUrl: 'Images/skiptalbot.png',
    iconSize: [30, 30],
    iconAnchor: [10, 0],
});

var myIcon13 = L.icon({
    iconUrl: 'Images/skiptalbot.png',
    iconSize: [30, 30],
    iconAnchor: [10, 0],
});

var myIcon14 = L.icon({
    iconUrl: 'Images/skiptalbot.png',
   iconSize: [30, 30],
    iconAnchor: [10, 0],
});

// Create custom popups with images
var greatwallPopup = "Great Wall of China<br/><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/20090529_Great_Wall_8185.jpg/256px-20090529_Great_Wall_8185.jpg' alt='great wall wiki' width='150px'/>";

var chichenPopup = "<b>Team:</b> The Chase<br/><b>Crew:</b> Skip Talbot, Jennifer Brindley<br/><b>Time:</b> 6:20pm<br/><b>Location:</b> Country Club Rd<br/><b>Direction:</b> North <br/><img src='Images/talbot620.jpg' width='150px'/>";

var petraPopup = "<b>Team:</b> The Chase<br/><b>Crew:</b> Skip Talbot, Jennifer Brindley<br/><b>Time:</b> 6:10pm<br/><b>Location:</b> 15th St<br/><b>Direction:</b> East <br/><img src='Images/talbot610.jpg' width='150px'/>";

var machuPopup = "<b>Team:</b> The Chase<br/><b>Crew:</b> Skip Talbot, Jennifer Brindley<br/><b>Time:</b> 6:30pm<br/><b>Location:</b> Country Club Rd<br/><b>Direction:</b> North <br/><img src='Images/talbot630.jpg' width='150px'/>";

var christPopup = "<b>Team:</b> The Chase<br/><b>Crew:</b> Skip Talbot, Jennifer Brindley<br/><b>Time:</b> 6:40pm<br/><b>Location:</b> Country Club Rd<br/><b>Direction:</b> North <br/><img src='Images/talbot640.jpg' width='150px'/>";

var coloPopup = "<b>Team:</b> The Chase<br/><b>Crew:</b> Skip Talbot, Jennifer Brindley<br/><b>Time:</b> 6:00pm<br/><b>Location:</b> Country Club Rd<br/><b>Direction:</b> North <br/><img src='Images/talbot600.jpg' width='150px'/>";

var tajPopup = "<b>Team:</b> The Chase<br/><b>Crew:</b> Skip Talbot, Jennifer Brindley<br/><b>Time:</b> 6:50pm<br/><b>Location:</b> Country Club Rd<br/><b>Direction:</b> North <br/><img src='Images/talbot650.jpg' width='150px'/>";


var customOptions ={'maxWidth': '150','className' : 'custom'};

          
// Data points
coords = [
    [35.44827283, -97.97279071],
    [35.44827283, -97.97279071],
    [35.44998585, -97.88143649],
    [35.449834, -97.848625],
    [35.435289, -97.810526],
    [35.406211, -97.760025],
    [35.385882, -97.72651]
];

// Marker Layergroup
var loc = L.layerGroup();
L.marker(coords[0], {icon: myIcon8}).bindPopup(greatwallPopup, customOptions).addTo(loc);
L.marker(coords[1], {icon: myIcon9}).bindPopup(coloPopup, customOptions).addTo(loc);
L.marker(coords[2], {icon: myIcon10}).bindPopup(petraPopup, customOptions).addTo(loc);
L.marker(coords[3], {icon: myIcon11}).bindPopup(chichenPopup, customOptions).addTo(loc);
L.marker(coords[4], {icon: myIcon12}).bindPopup(machuPopup, customOptions).addTo(loc);
L.marker(coords[5], {icon: myIcon13}).bindPopup(christPopup, customOptions).addTo(loc);
L.marker(coords[6], {icon: myIcon14}).bindPopup(tajPopup, customOptions).addTo(loc);
loc.addTo(mymap);


// Add Line
var line = L.polyline(coords, {color: "teal", weight: 7}).bindPopup("Travel Path");
line.addTo(mymap);