/* ==========================================================================
   Markers Json
========================================================================== */
var locationsJSON = [{
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
var routesJSON = [{
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

(function($) {

//create map
var map = new L.Map("map", {center: [40.7,-74.3], zoom: 11, minZoom: 8, maxZoom: 13, attributionControl:false});

// disable interaction
map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();
map.zoomControl.disable();
map.boxZoom.disable();
map.keyboard.disable();
if (map.tap){ map.tap.disable(); }
document.getElementById('map').style.cursor='default';

//add mapbox map tiles
var mapTile = new L.TileLayer("https://api.mapbox.com/styles/v1/ddcreative/ciwwekdvl004e2qrxzd4vqats/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGRjcmVhdGl2ZSIsImEiOiJjaXU4aWp6dWIwMDgyMnNwZHN0eTN3bGtzIn0.JSbKaBx8Pu9Xtf4YxhT-sQ").addTo(map);

//create marker style defaults
var mapMarker = L.Icon.extend({
  options: {
    iconSize: [16, 16],
    iconAnchor: [8, 8],
    popupAnchor:  [0, -8]
  }
});
// create individual marker styles
var selectedMarker = new mapMarker({iconUrl: "content/img/ui/marker-icon-2x.png"}),
    aZoneMarker = new mapMarker({iconUrl: "content/img/ui/marker-zone-a-2x.png"}),
    bZoneMarker = new mapMarker({iconUrl: "content/img/ui/marker-zone-b-2x.png"}),
    cZoneMarker = new mapMarker({iconUrl: "content/img/ui/marker-zone-c-2x.png"});

//add json data for locations
var locationsLayer = L.geoJson(locationsJSON, {

  onEachFeature: function (feature, layer) {

    var markerMessage = "";
    if(feature.properties.message){
      markerMessage = "<span class=\"marker-message\">" + feature.properties.message + "</span>";
    }

    //add popups to each marker
    layer.bindPopup("<b>Address:</b> " + feature.properties.name + "<br>" + "<b>Datacenter:</b> " + feature.properties.datacenter + "<br>" + "<b>Zone:</b> " + feature.properties.zone + "<br>"  + markerMessage, {autoClose:false});

    layer.setIcon(selectedMarker);
  }
}).addTo(map);

locationsLayer.openPopup();

//add json data for zones
var zonesLayer = L.geoJSON(zonesJSON, {

  style: function(feature) {
    switch (feature.properties.zone) {
        case '1': return {
          fillColor: "#2c4498",
          fillOpacity: 0.5,
          color: "#7f7f7f",
          weight: 2
        };
        case '2': return {
          fillColor: "#a5cd39",
          fillOpacity: 0.5,
          color: "#7f7f7f",
          weight: 2
        };
        case '3': return {
          fillColor: "#424242",
          fillOpacity: 0.5,
          color: "#7f7f7f",
          weight: 2
        };
    }
  }
}).addTo(map);

//add json data for zone labels
var zoneLabelLayer = L.geoJson(zoneLabelJSON, {

  onEachFeature: function (feature, layer) {

    //create label style
    var zoneLabelMarker = L.divIcon({
      className: 'marker--zone-label',
      iconSize: [40, 18],
      html: feature.properties.label
    });

    layer.setIcon(zoneLabelMarker);
  }
}).addTo(map);

//add json data for routes
var routesLayer = L.geoJSON(routesJSON, {

  onEachFeature: function (feature, layer) {

    //add popup to route line
    layer.bindPopup("XX miles", {autoClose:false});
  },

  style: function(feature) {
    return {
      color: "#212121",
      weight: 4
    };
  }
}).addTo(map);

//add json data for state labels
var stateLabelLayer = L.geoJson(stateLabelJSON, {

  onEachFeature: function (feature, layer) {

    //create label style
    var stateLabelMarker = L.divIcon({
      className: 'marker--state-label',
      iconSize: [40, 18],
      html: feature.properties.label
    });

    layer.setIcon(stateLabelMarker);
  }
}).addTo(map);

//zoom and center map around points
map.fitBounds(locationsLayer.getBounds());

})(jQuery);
