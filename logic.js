var mymap = L.map('mapid', {
  center: [39.09, -85.71],
  zoom: 1
});


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.light',
    accessToken: API_KEY
}).addTo(mymap);


var link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";



// Grabbing our GeoJSON data..
d3.json(link, function(data) {
  // Creating a GeoJSON layer with the retrieved data
  L.geoJson(data)
  // .addTo(mymap);

  var earthquakes = data.features
  console.log(earthquakes)


  for (var i = 0; i < earthquakes.length; i++) {
    // console.log(earthquakes[i].properties.mag)
    // console.log(earthquakes[i].geometry.coordinates)
    var latlng = earthquakes[i].geometry.coordinates;
    var circlecoord = [latlng[1], latlng[0]]
    // console.log(circlecoord)
    var mag = earthquakes[i].properties.mag
    var title = earthquakes[i].properties.title
    var status = earthquakes[i].properties.status
    console.log(status)
    console.log(title)
    console.log(mag)
    L.circle(circlecoord, {
      color: "white",
      fillColor: getColor(mag),
      fillOpacity: 2,
      radius: mag * 100000
    })
    .bindPopup("<h5>" + title + "</h5>")
    .addTo(mymap);
  
  }

})
  



function getColor(mag) {
  return mag > 5 ? '#b30000':
         mag > 4 ? '#e34a33':
         mag > 3 ? '#fc8d59':
         mag > 2 ? '#fdbb84':
         mag > 1 ? '#fdd49e':
         mag > 0 ? '#fef0d9':
                   '#fef0d9';
}

var legend = L.control({position: 'bottomright'});

legend.onAdd = function (mymap) {

    var div = L.DomUtil.create('div', 'info legend'),
        magsList = [0, 1, 2, 3, 4, 5],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < magsList.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(magsList[i] + 1) + '"></i> ' +
            magsList[i] + (magsList[i + 1] ? '&ndash;' + magsList[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(mymap);




