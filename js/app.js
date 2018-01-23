let markersArray = [];
let secondMarkersArray = [];

function initMap() {
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
  const map = renderMap(country.mapCenter, country.mapZoom);
  selectMap1.onchange = onMap1Selected(data, selectedCountry, map, selectMap1, selectMap2);
};

const renderMap = (center, zoom) => {
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom,
    center: {lat: Number(center.lat), lng: Number(center.lng)}
  });
  return map;
}

const onMap1Selected = (data, selectedCountry, map, selectMap1, selectMap2) => () => {
  const country = data.filter(d => d.countryName === selectedCountry)[0];
  const selectedMap = selectMap1.value;
  deleteMarkers(secondMarkersArray);
  selectMap2.innerHTML = '<option>--</option>';
  const otherMaps = country.maps.filter(m => m.mapTitle !== selectedMap);
  selectMap2.innerHTML += otherMaps.map(m => `<option>${m.mapTitle}</option>`);
  selectMap2.onchange = onMap2Selected(data, selectedCountry, map, selectMap2);
  const mapMarkers = country.maps
    .filter(m => m.mapTitle === selectedMap)
    .map(m => m.items)[0];
  deleteMarkers(markersArray);
  markersArray = renderMarkers(map, mapMarkers);
};

const onMap2Selected = (data, selectedCountry, map, selectMap2) => () => {
  const country = data.filter(d => d.countryName === selectedCountry)[0];
  const selectedMap = selectMap2.value;
  const mapMarkers = country.maps
    .filter(m => m.mapTitle === selectedMap)
    .map(m => m.items)[0];
    const icon = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
  deleteMarkers(secondMarkersArray);
  secondMarkersArray = renderMarkers(map, mapMarkers, icon);
};

const renderMarkers = (map, markers, icon='') => {
  return markers.map(marker =>
    new google.maps.Marker({
      position: {lat: Number(marker.lat), lng: Number(marker.lng)},
      map: map,
      title: marker.title,
      icon
    })
  );
}

// Sets the map on all markers in the array.
function setMapOnAll(array, map) {
  for (var i = 0; i < array.length; i++) {
    array[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers(array) {
  setMapOnAll(array, null);
}

// Shows any markers currently in the array.
function showMarkers(map) {
  setMapOnAll(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers(array) {
  clearMarkers(array);
  array = [];
}
