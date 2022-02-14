var mymap = L.map("map").setView([43.81642117539796, -91.23209456992531], 5);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamFja3NvbjMwMzYiLCJhIjoiY2t6ZDNmY25yMnJvZDJvcHZkdW1tYW85cSJ9.2-U65L4NCXznPwTaHtaA4w', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

var myIcon1 = L.icon({
    iconUrl: 'images/icon_1.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon2 = L.icon({
    iconUrl: 'images/icon_2.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon3 = L.icon({
    iconUrl: 'images/icon_3.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon4 = L.icon({
    iconUrl: 'images/icon_4.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon5 = L.icon({
    iconUrl: 'images/icon_5.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon6 = L.icon({
    iconUrl: 'images/icon_6.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon7 = L.icon({
    iconUrl: 'images/icon_7.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon8 = L.icon({
    iconUrl: 'images/icon_8.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon9 = L.icon({
    iconUrl: 'images/icon_9.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon10 = L.icon({
    iconUrl: 'images/icon_10.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon11 = L.icon({
    iconUrl: 'images/icon_11.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon12 = L.icon({
    iconUrl: 'images/icon_12.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon13 = L.icon({
    iconUrl: 'images/icon_640.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon14 = L.icon({
    iconUrl: 'images/icon_640.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon15 = L.icon({
    iconUrl: 'images/icon_640.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var lacrosse = L.marker([43.81642117539796, -91.23209456992531], {icon: myIcon1}).bindPopup("<b>La Crosse").addTo(mymap);

var albion = L.marker([42.2431, -84.7530], {icon: myIcon2}).bindPopup("<b>Albion").addTo(mymap);

var dsu = L.marker([46.8792, -102.7896], {icon: myIcon3}).bindPopup("<b>Dickinson").addTo(mymap);

var dubuque = L.marker([42.5063, -90.6677], {icon: myIcon4}).bindPopup("<b>Dubuque").addTo(mymap);

var gvsu = L.marker([42.9722, -85.9540], {icon: myIcon5}).bindPopup("<b>Allendale").addTo(mymap);

var ncc = L.marker([41.7508, -88.1535], {icon: myIcon6}).bindPopup("<b>Naperville").addTo(mymap);

var dakotast = L.marker([44.0061, -97.1139], {icon: myIcon7}).bindPopup("<b>Madison").addTo(mymap);

var rrhs = L.marker([43.0389, -87.9065], {icon: myIcon8}).bindPopup("<b>Milwaukee").addTo(mymap);

var uwec = L.marker([44.8113, -91.4985], {icon: myIcon9}).bindPopup("<b>Eau Claire").addTo(mymap);

var uwo = L.marker([44.0247, -88.5426], {icon: myIcon10}).bindPopup("<b>Oshkosh").addTo(mymap);

var uwp = L.marker([42.7342, -90.4785], {icon: myIcon11}).bindPopup("<b>Platteville").addTo(mymap);

var uwrf = L.marker([44.8614, -92.6238], {icon: myIcon12}).bindPopup("<b>River Falls").addTo(mymap);

var uws = L.marker([44.8755, -91.9193], {icon: myIcon13}).bindPopup("<b>Menomonie").addTo(mymap);

var uwsp = L.marker([44.5236, -89.5746], {icon: myIcon14}).bindPopup("<b>Stevens Point").addTo(mymap);

var uww = L.marker([42.8336, -88.7323], {icon: myIcon15}).bindPopup("<b>Whitewater").addTo(mymap);