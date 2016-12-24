
/* ==========================================================================
   Markers Json
========================================================================== */

var locations1JSON = [{
"type": "FeatureCollection",
"features": [
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -74.0077329129903,
        40.7268675625026,
        0
      ]
    },
    "properties": {
      "name": "325 Hudson",
      "datacenter": "Netrality",
      "zone": "1"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -74.41889803869707,
        40.85707660695478,
        0
      ]
    },
    "properties": {
      "name": "200 Webro Rd",
      "datacenter": "Cologix",
      "zone": "3"
    }
  }
]
}];

var locations2JSON = [{
"type": "FeatureCollection",
"features": [
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -74.01123040000004,
        40.7046866,
        0
      ]
    },
    "properties": {
      "name": "75 Broad Street",
      "datacenter": "Metcom",
      "zone": "1"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -74.00795419999997,
        40.7432086,
        0
      ]
    },
    "properties": {
      "name": "85 10th Avenue",
      "datacenter": "Telehouse",
      "zone": "1"
    }
  }
]
}];

/* ==========================================================================
   Routes Json
========================================================================== */

var routes1JSON = [{
"type": "FeatureCollection",
"features": [
  {
    "type": "Feature",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [-74.41889803869707, 40.85707660695478, 0],
        [-74.31, 40.8, 0],
        [-74.2579, 40.75, 0],
        [-74.0077329129903, 40.7268675625026, 0]
      ]
    },
    "properties": {
      "name": "200 Webro Rd, Colgix to 325 Hudson, Netrality"
    }
  }
]
}];

var routes2JSON = [{
"type": "FeatureCollection",
"features": [
  {
    "type": "Feature",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [-74.00795419999997, 40.7432086, 0],
        [-74.01123040000004, 40.72, 0],
        [-74.01123040000004, 40.7046866, 0]
      ]
    },
    "properties": {
      "name": "85 10th Ave, Telehouse to 75 Broad St, Metcom"
    }
  }
]
}];

/* ==========================================================================
   Map 1
========================================================================== */

(function($) {

//create map
var map1 = new L.Map("orderMap1", {center: [40.7,-74.3], zoom: 11, zoomControl:false, attributionControl:false});

// disable interaction
map1.dragging.disable();
map1.touchZoom.disable();
map1.doubleClickZoom.disable();
map1.scrollWheelZoom.disable();
map1.boxZoom.disable();
map1.keyboard.disable();
if (map1.tap){ map1.tap.disable(); }
document.getElementById('orderMap1').style.cursor='default';

//add mapbox map tiles
var mapTile = new L.TileLayer("https://api.mapbox.com/styles/v1/ddcreative/ciwwekdvl004e2qrxzd4vqats/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGRjcmVhdGl2ZSIsImEiOiJjaXU4aWp6dWIwMDgyMnNwZHN0eTN3bGtzIn0.JSbKaBx8Pu9Xtf4YxhT-sQ").addTo(map1);

//create marker style defaults
var mapMarker = L.Icon.extend({
  options: {
    iconSize: [16, 16],
    iconAnchor: [8, 8],
    popupAnchor:  [0, -8]
  }
});
// create individual marker styles
var selectedMarker = new mapMarker({iconUrl: "/content/img/ui/marker-zone-a-2x.png"});

//add json data for locations
var locationsLayer = L.geoJson(locations1JSON, {

  onEachFeature: function (feature, layer) {
    layer.setIcon(selectedMarker);
  }
}).addTo(map1);

//add json data for routes
var routesLayer = L.geoJSON(routes1JSON, {

  style: function(feature) {
    return {
      color: "#a5cd39",
      weight: 4
    };
  }
}).addTo(map1);

//zoom and center map around points
map1.fitBounds(locationsLayer.getBounds());

})(jQuery);

/* ==========================================================================
   Map 2
========================================================================== */

(function($) {

//create map
var map2 = new L.Map("orderMap2", {center: [40.7,-74.3], zoom: 11, zoomControl:false, attributionControl:false});

// disable interaction
map2.dragging.disable();
map2.touchZoom.disable();
map2.doubleClickZoom.disable();
map2.scrollWheelZoom.disable();
map2.boxZoom.disable();
map2.keyboard.disable();
if (map2.tap){ map2.tap.disable(); }
document.getElementById('orderMap2').style.cursor='default';

//add mapbox map tiles
var mapTile = new L.TileLayer("https://api.mapbox.com/styles/v1/ddcreative/ciwwekdvl004e2qrxzd4vqats/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGRjcmVhdGl2ZSIsImEiOiJjaXU4aWp6dWIwMDgyMnNwZHN0eTN3bGtzIn0.JSbKaBx8Pu9Xtf4YxhT-sQ").addTo(map2);

//create marker style defaults
var mapMarker = L.Icon.extend({
  options: {
    iconSize: [16, 16],
    iconAnchor: [8, 8],
    popupAnchor:  [0, -8]
  }
});
// create individual marker styles
var selectedMarker = new mapMarker({iconUrl: "/content/img/ui/marker-zone-a-2x.png"});

//add json data for locations
var locationsLayer = L.geoJson(locations2JSON, {

  onEachFeature: function (feature, layer) {
    layer.setIcon(selectedMarker);
  }
}).addTo(map2);

//add json data for routes
var routesLayer = L.geoJSON(routes2JSON, {

  style: function(feature) {
    return {
      color: "#a5cd39",
      weight: 4
    };
  }
}).addTo(map2);

//zoom and center map around points
map2.fitBounds(locationsLayer.getBounds());

})(jQuery);
