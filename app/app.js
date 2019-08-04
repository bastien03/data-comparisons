let markersArray = [];
let secondMarkersArray = [];
let mapInstance;

function initApp() {
  mapInstance = L.map('map');
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
       attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(mapInstance);
  const data = [...jsonData];
  const countries = data.map(countryData => countryData.countryName);
  const selectMap1 = document.getElementById('select_map_1');
  const selectMap2 = document.getElementById('select_map_2');

  const selectCountry = document.getElementById('select_country');
  selectCountry.innerHTML += countries.map(c => `<option>${c}</option>`);
  selectCountry.onchange = onCountrySelected(data, selectCountry, selectMap1, selectMap2);
};

const onCountrySelected = (data, selectCountry, selectMap1, selectMap2) => () => {
  const selectedCountry = selectCountry.value;
  const country = data.filter(d => d.countryName === selectedCountry)[0];
  selectMap1.innerHTML = '<option>--</option>' +
    country.maps.map(m => `<option>${m.mapTitle}</option>`);
  mapInstance.setView([country.mapCenter.lat, country.mapCenter.lng], country.mapZoom);
  selectMap1.onchange = onMap1Selected(data, selectedCountry, selectMap1, selectMap2);
};

const onMap1Selected = (data, selectedCountry, selectMap1, selectMap2) => () => {
  const country = data.filter(d => d.countryName === selectedCountry)[0];
  const selectedMap = selectMap1.value;
  deleteMarkers(secondMarkersArray);
  selectMap2.innerHTML = '<option>--</option>';
  const otherMaps = country.maps.filter(m => m.mapTitle !== selectedMap);
  selectMap2.innerHTML += otherMaps.map(m => `<option>${m.mapTitle}</option>`);
  selectMap2.onchange = onMap2Selected(data, selectedCountry, selectMap2);
  const mapMarkers = country.maps
    .filter(m => m.mapTitle === selectedMap)
    .map(m => m.items)[0];
  deleteMarkers(markersArray);
  markersArray = renderMarkers(mapMarkers, 'marker_group1');
};

const onMap2Selected = (data, selectedCountry, selectMap2) => () => {
  const country = data.filter(d => d.countryName === selectedCountry)[0];
  const selectedMap = selectMap2.value;
  const mapMarkers = country.maps
    .filter(m => m.mapTitle === selectedMap)
    .map(m => m.items)[0];
  deleteMarkers(secondMarkersArray);
  secondMarkersArray = renderMarkers(mapMarkers, 'marker_group2');
};

const renderMarkers = (elements, className) => {
  const markerIcon = L.divIcon({
    className
  });
  return elements.map(element => {
    const marker = L.marker([element.lat, element.lng],
      {
        icon: markerIcon,
        title: element.title
      });
    marker.addTo(mapInstance);
    return marker;
  });
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers(array) {
  for (var i = 0; i < array.length; i++) {
    array[i].removeFrom(mapInstance);
  }
  array = [];
}
