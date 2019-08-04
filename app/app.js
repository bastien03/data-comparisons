let markersArray = [];
let secondMarkersArray = [];
let mapInstance;
let footballClubsData;

function initApp() {
  mapInstance = L.map('map');
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
       attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(mapInstance);
  const data = [...jsonData];
  footballClubsData = {...footballClubs};
  const selectMap1 = document.getElementById('select_map_1');
  const selectMap2 = document.getElementById('select_map_2');

  const selectCountry = document.getElementById('select_country');
  selectCountry.innerHTML += data.map(c => `<option value=${c.countryCode}>${c.countryName}</option>`);
  selectCountry.onchange = onCountrySelected(data, selectCountry, selectMap1, selectMap2);
};

const onCountrySelected = (data, selectCountry, selectMap1, selectMap2) => () => {
  const selectedCountryCode = selectCountry.value;
  const selectedCountry = data.find(d => d.countryCode === selectedCountryCode);
  selectMap1.innerHTML = '<option>--</option>' +
    selectedCountry.maps.map(m => `<option value=${m.id}>${m.title}</option>`);
  mapInstance.setView([selectedCountry.mapCenter.lat, selectedCountry.mapCenter.lng], selectedCountry.mapZoom);
  selectMap1.onchange = onMap1Selected(data, selectedCountry, selectMap1, selectMap2);
};

const onMap1Selected = (data, selectedCountry, selectMap1, selectMap2) => () => {
  const selectedMapId = selectMap1.value;
  deleteMarkers(secondMarkersArray);
  selectMap2.innerHTML = '<option>--</option>';
  const otherMaps = selectedCountry.maps.filter(m => m.id !== selectedMapId);
  selectMap2.innerHTML += otherMaps.map(m => `<option value=${m.id}>${m.title}</option>`);
  selectMap2.onchange = onMap2Selected(data, selectedCountry, selectMap2);
  const mapMarkers = getMapItems(selectedCountry, selectedMapId);
  deleteMarkers(markersArray);
  markersArray = renderMarkers(mapMarkers, 'marker_group1');
};

const onMap2Selected = (data, selectedCountry, selectMap2) => () => {
  const selectedMapId = selectMap2.value;
  const mapMarkers = getMapItems(selectedCountry, selectedMapId);
  deleteMarkers(secondMarkersArray);
  secondMarkersArray = renderMarkers(mapMarkers, 'marker_group2');
};

const getMapItems = (selectedCountry, selectedMapId) => {
  const selectedMap = selectedCountry.maps.find(m => m.id === selectedMapId);
  if (selectedMap.category !== 'FOOTBALL' || selectedCountry.countryCode !== 'fr') {
    return selectedMap.items;
  }
  return selectedMap.items.map(i => footballClubsData[selectedCountry.countryCode][i]);
}

const renderMarkers = (items, className) => {
  const markerIcon = L.divIcon({
    className
  });
  return items.map(item => {
    const marker = L.marker([item.lat, item.lng],
      {
        icon: markerIcon,
        title: item.title
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
