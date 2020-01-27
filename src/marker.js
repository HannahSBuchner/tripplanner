const mapboxgl = require("mapbox-gl");
const index = require("./index");

const iconURLs = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "https://cdn3.iconfinder.com/data/icons/pyconic-icons-1-2/512/location-pin-512.png"
};

const marker = function (type, coords){
  const newMarkerDom=document.createElement("i");
  newMarkerDom.style.width="32px";
  newMarkerDom.style.height="39px";
  newMarkerDom.style.backgroundImage= iconURLs[type];
  return new mapboxgl.Marker(newMarkerDom).setLngLat(coords);
}


module.exports = marker
