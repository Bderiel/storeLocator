let stores;

fetch('./g.geojson')
  .then(res => res.json())
  .then(json =>{
    stores = json
  })


mapboxgl.accessToken =
  'pk.eyJ1IjoiYmRlcmllbCIsImEiOiJjajhicXN3MWIwMHF5MnFvazV0eW96OGM0In0.W3YmbjV_q0ZX-woP1ZvG1Q';
// This adds the map to your page
const map = new mapboxgl.Map({
  // container id specified in the HTML
  container: 'map',
  // style URL
  style: 'mapbox://styles/mapbox/light-v9',
  // initial position in [lon, lat] format
  center: [-77.034084, 38.909671],
  // initial zoom
  zoom: 14
});

map.on('load', function (e) {
  // Add the data to your map as a layer
  map.addLayer({
    id: 'locations',
    type: 'symbol',
    // Add a GeoJSON source containing place coordinates and information.
    source: {
      type: 'geojson',
      data: stores
    },
    layout: {
      'icon-image': 'restaurant-15',
      'icon-allow-overlap': true,
    }
  });
});