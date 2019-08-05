import { jsonData, footballClubs} from '../data/data.js';

let markersArray = [];
let secondMarkersArray = [];
let mapInstance;
let footballClubsData;

export function initApp() {
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
  selectMap1.innerHTML = '<option>--</option>';
  selectMap1.innerHTML += selectedCountry.maps.map(m => `<option value=${m.id}>${m.title}</option>`);
  mapInstance.setView([selectedCountry.mapCenter.lat, selectedCountry.mapCenter.lng], selectedCountry.mapZoom);
  selectMap1.onchange = onMap1Selected(data, selectedCountry, selectMap1, selectMap2);
};

const onMap1Selected = (data, selectedCountry, selectMap1, selectMap2) => () => {
  deleteMarkers(secondMarkersArray);
  const selectedMapId = selectMap1.value;
  const otherMaps = selectedCountry.maps.filter(m => m.id !== selectedMapId);
  selectMap2.innerHTML = '<option>--</option>';
  selectMap2.innerHTML += otherMaps.map(m => `<option value=${m.id}>${m.title}</option>`);
  selectMap2.onchange = onMap2Selected(data, selectedCountry, selectMap2);
  const result = getMapItems(selectedCountry, selectedMapId);
  deleteMarkers(markersArray);
  markersArray = renderMarkers(result.items, 'marker_group1');
  handleMissingItems(result.missingItems);
};

const onMap2Selected = (data, selectedCountry, selectMap2) => () => {
  const selectedMapId = selectMap2.value;
  const result = getMapItems(selectedCountry, selectedMapId);
  deleteMarkers(secondMarkersArray);
  secondMarkersArray = renderMarkers(result.items, 'marker_group2');
  handleMissingItems(result.missingItems);
};

const getMapItems = (selectedCountry, selectedMapId) => {
  const missingItems = [];
  const selectedMap = selectedCountry.maps.find(m => m.id === selectedMapId);
  if (selectedMap.category !== 'FOOTBALL' || selectedCountry.countryCode !== 'FR') {
    return {
      items: selectedMap.items,
      missingItems
    };
  }
  const items = [];
  selectedMap.items.forEach(itemCode => {
    const item = footballClubsData[selectedCountry.countryCode][itemCode];
    if (!!item) {
      items.push(item);
    } else {
      missingItems.push(itemCode);
    }
  });

  return {
    items,
    missingItems
  };
}

const handleMissingItems = (missingItems) => {
  if (missingItems.length !== 0) {
    const selectMap1 = document.getElementsByClassName('message')[0];
    selectMap1.innerHTML = `Following items could not be found: ${missingItems}`;
  }
}

const renderMarkers = (items, className) => {
  const markerIcon = L.divIcon({
    className
  });
  return items.map(item => {
    const marker = L.marker([item.lat, item.lng],
      {
        icon: markerIcon,
        title: item.name
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

initApp();
