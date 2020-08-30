const map = L.map('map', {
  center: [40, -98.5],
  zoom: 4,
});

L.tileLayer('https://api.maptiler.com/maps/basic/{z}/{x}/{y}@2x.png?key=1ojaSiJVULNHwgWfBZYs', {
  tileSize: 512,
  zoomOffset: -1,
  minZoom: 1,
  attribution:
    '<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
  crossOrigin: true,
}).addTo(map);

//tool tip for locality area
const ttip = (area) => {
  return `<p>Area: ${area.localityArea}</p>
  <p>Rate: ${area.localityPercent}</p>`;
};

//Locality Areas
let localityAreaGroup = L.layerGroup();

function localityAreaColor(area) {
  switch (area) {
    case 'alaska':
    case 'cincinnatti':
    case 'sacramento':
      return '#ff9900';

    case 'albany':
      return '#009900';
    case 'albuquerque':
      return '#660066';
    case 'atlanta':
      return '#ff3300';
    case 'austin':
      return '#3333cc';
    case 'birmingham':
      return '#01FFDD';

    case 'boston':
    case 'chicago':
    case 'phoenix':
    case 'stLouis':
      return '#ff0000';

    case 'buffalo':
      return '#993399';
    case 'burlington':
      return '#0022AA';
    case 'charlotte':
    case 'hartford':
      return '#00ccff';

    case 'cleveland':
      return '#663300';
    case 'coloradoSprings':
      return '#ff9933';
    case 'columbus':
    case 'corpus':
      return '#33cc33';

    case 'dallas':
      return '#ff99a8';
    case 'davenport':
    case 'hawaii':
    case 'kansasCity':
    case 'pittsburg':
    case 'tucson':
    case 'virginiaBeach':
      return '#ffff00';

    case 'dayton':
      return '#ff00ff';
    case 'denver':
    case 'palmBay':
      return '#0000ff';

    case 'detroit':
    case 'sanDiego':
      return '#99ccff';

    case 'harrisburg':
      return '#cccccc';
    case 'houston':
    case 'minneapolis':
      return '#9900cc';

    case 'huntsville':
      return '#cc0000';
    case 'indianapolis':
    case 'lasVegas':
    case 'richmond':
      return '#0000cc';

    case 'laredo':
    case 'losAngeles':
    case 'miami':
      return '#008000';

    case 'milwaukee':
      return '#802b00';
    case 'newYork':
    case 'omaha':
    case 'seattle':
      return '#666699';

    case 'philadelphia':
      return '#009933';
    case 'portland':
      return '#003300';
    case 'raleigh':
      return '#6600cc';
    case 'sanAntonio':
      return '#000000';

    case 'sanJose':
      return '#ff99ff';
    case 'washington':
      return '#00ffff';
    default:
      return '#FFFFFF';
  }
}

function localityAreaStyle(area) {
  return {
    color: localityAreaColor(area),
    fillOpacity: 0.5,
    weight: 1,
    opacity: 0.5,
  };
}

(async () => {
  const alaska = await fetch('locality/alaska.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(alaska, localityAreaStyle('alaska')).bindTooltip(ttip(alaska)));

  const albany = await fetch('locality/albany.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(albany, localityAreaStyle('albany')).bindTooltip(ttip(albany)));

  const albuquerque = await fetch('locality/albuquerque.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(albuquerque, localityAreaStyle('albuquerque')).bindTooltip(ttip(albuquerque)));

  const atlanta = await fetch('locality/atlanta.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(atlanta, localityAreaStyle('atlanta')).bindTooltip(ttip(atlanta)));

  const austin = await fetch('locality/austin.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(austin, localityAreaStyle('austin')).bindTooltip(ttip(austin)));

  const birmingham = await fetch('locality/birmingham.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(birmingham, localityAreaStyle('birmingham')).bindTooltip(ttip(birmingham)));

  const boston = await fetch('locality/boston.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(boston, localityAreaStyle('boston')).bindTooltip(ttip(boston)));

  const buffalo = await fetch('locality/buffalo.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(buffalo, localityAreaStyle('buffalo')).bindTooltip(ttip(buffalo)));

  const burlington = await fetch('locality/burlington.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(burlington, localityAreaStyle('burlington')).bindTooltip(ttip(burlington)));

  const charlotte = await fetch('locality/charlotte.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(charlotte, localityAreaStyle('charlotte')).bindTooltip(ttip(charlotte)));

  const chicago = await fetch('locality/chicago.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(chicago, localityAreaStyle('chicago')).bindTooltip(ttip(chicago)));

  const cincinnatti = await fetch('locality/cincinnatti.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(cincinnatti, localityAreaStyle('cincinnatti')).bindTooltip(ttip(cincinnatti)));

  const cleveland = await fetch('locality/cleveland.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(cleveland, localityAreaStyle('cleveland')).bindTooltip(ttip(cleveland)));

  const coloradoSprings = await fetch('locality/coloradoSprings.json').then((res) => res.json());
  localityAreaGroup.addLayer(
    L.geoJSON(coloradoSprings, localityAreaStyle('coloradoSprings')).bindTooltip(ttip(coloradoSprings))
  );

  const columbus = await fetch('locality/columbus.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(columbus, localityAreaStyle('columbus')).bindTooltip(ttip(columbus)));

  const corpus = await fetch('locality/corpus.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(corpus, localityAreaStyle('corpus')).bindTooltip(ttip(corpus)));

  const dallas = await fetch('locality/dallas.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(dallas, localityAreaStyle('dallas')).bindTooltip(ttip(dallas)));

  const davenport = await fetch('locality/davenport.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(davenport, localityAreaStyle('davenport')).bindTooltip(ttip(davenport)));

  const dayton = await fetch('locality/dayton.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(dayton, localityAreaStyle('dayton')).bindTooltip(ttip(dayton)));

  const denver = await fetch('locality/denver.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(denver, localityAreaStyle('denver')).bindTooltip(ttip(denver)));

  const detroit = await fetch('locality/detroit.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(detroit, localityAreaStyle('detroit')).bindTooltip(ttip(detroit)));

  const harrisburg = await fetch('locality/harrisburg.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(harrisburg, localityAreaStyle('harrisburg')).bindTooltip(ttip(harrisburg)));

  const hartford = await fetch('locality/hartford.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(hartford, localityAreaStyle('hartford')).bindTooltip(ttip(hartford)));

  const hawaii = await fetch('locality/hawaii.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(hawaii, localityAreaStyle('hawaii')).bindTooltip(ttip(hawaii)));

  const houston = await fetch('locality/houston.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(houston, localityAreaStyle('houston')).bindTooltip(ttip(houston)));

  const huntsville = await fetch('locality/huntsville.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(huntsville, localityAreaStyle('huntsville')).bindTooltip(ttip(huntsville)));

  const indianapolis = await fetch('locality/indianapolis.json').then((res) => res.json());
  localityAreaGroup.addLayer(
    L.geoJSON(indianapolis, localityAreaStyle('indianapolis')).bindTooltip(ttip(indianapolis))
  );

  const kansasCity = await fetch('locality/kansasCity.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(kansasCity, localityAreaStyle('kansasCity')).bindTooltip(ttip(kansasCity)));

  const laredo = await fetch('locality/laredo.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(laredo, localityAreaStyle('laredo')).bindTooltip(ttip(laredo)));

  const lasVegas = await fetch('locality/lasVegas.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(lasVegas, localityAreaStyle('lasVegas')).bindTooltip(ttip(lasVegas)));

  const losAngeles = await fetch('locality/losAngeles.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(losAngeles, localityAreaStyle('losAngeles')).bindTooltip(ttip(losAngeles)));

  const miami = await fetch('locality/miami.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(miami, localityAreaStyle('miami')).bindTooltip(ttip(miami)));

  const milwaukee = await fetch('locality/milwaukee.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(milwaukee, localityAreaStyle('milwaukee')).bindTooltip(ttip(milwaukee)));

  const minneapolis = await fetch('locality/minneapolis.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(minneapolis, localityAreaStyle('minneapolis')).bindTooltip(ttip(minneapolis)));

  const newYork = await fetch('locality/newYork.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(newYork, localityAreaStyle('newYork')).bindTooltip(ttip(newYork)));

  const omaha = await fetch('locality/omaha.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(omaha, localityAreaStyle('omaha')).bindTooltip(ttip(omaha)));

  const palmBay = await fetch('locality/palmBay.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(palmBay, localityAreaStyle('palmBay')).bindTooltip(ttip(palmBay)));

  const philadelphia = await fetch('locality/philadelphia.json').then((res) => res.json());
  localityAreaGroup.addLayer(
    L.geoJSON(philadelphia, localityAreaStyle('philadelphia')).bindTooltip(ttip(philadelphia))
  );

  const phoenix = await fetch('locality/phoenix.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(phoenix, localityAreaStyle('phoenix')).bindTooltip(ttip(phoenix)));

  const pittsburg = await fetch('locality/pittsburg.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(pittsburg, localityAreaStyle('pittsburg')).bindTooltip(ttip(pittsburg)));

  const portland = await fetch('locality/portland.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(portland, localityAreaStyle('portland')).bindTooltip(ttip(portland)));

  const raleigh = await fetch('locality/raleigh.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(raleigh, localityAreaStyle('raleigh')).bindTooltip(ttip(raleigh)));

  const richmond = await fetch('locality/richmond.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(richmond, localityAreaStyle('richmond')).bindTooltip(ttip(richmond)));

  const sacramento = await fetch('locality/sacramento.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(sacramento, localityAreaStyle('sacramento')).bindTooltip(ttip(sacramento)));

  const sanAntonio = await fetch('locality/sanAntonio.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(sanAntonio, localityAreaStyle('sanAntonio')).bindTooltip(ttip(sanAntonio)));

  const sanDiego = await fetch('locality/sanDiego.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(sanDiego, localityAreaStyle('sanDiego')).bindTooltip(ttip(sanDiego)));

  const sanJose = await fetch('locality/sanJose.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(sanJose, localityAreaStyle('sanJose')).bindTooltip(ttip(sanJose)));

  const seattle = await fetch('locality/seattle.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(seattle, localityAreaStyle('seattle')).bindTooltip(ttip(seattle)));

  const stLouis = await fetch('locality/stLouis.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(stLouis, localityAreaStyle('stLouis')).bindTooltip(ttip(stLouis)));

  const tucson = await fetch('locality/tucson.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(tucson, localityAreaStyle('tucson')).bindTooltip(ttip(tucson)));

  const virginiaBeach = await fetch('locality/virginiaBeach.json').then((res) => res.json());
  localityAreaGroup.addLayer(
    L.geoJSON(virginiaBeach, localityAreaStyle('virginiaBeach')).bindTooltip(ttip(virginiaBeach))
  );

  const washington = await fetch('locality/washington.json').then((res) => res.json());
  localityAreaGroup.addLayer(L.geoJSON(washington, localityAreaStyle('washington')).bindTooltip(ttip(washington)));

  localityAreaGroup.addTo(map);
})();

//Facility Markers
const FORUM_URL = 'https://pointsixtyfive.com/wiki/';

map.createPane('facMarkers');
map.getPane('facMarkers').style.zIndex = 555;

//Color styling for facility type
function markerType(fac) {
  switch (fac.type) {
    case 'Tower':
      return '#36AD56';
    case 'Tower and Approach Control':
      return '#FF7800';
    case 'Enroute Center':
      return '#F5E000';
    case 'Combined Control Facility':
      return '#002DF5';
    case 'Approach Control':
      return '#F50000';
    default:
      return '#000000';
  }
}
//geojson marker options
function style(feature) {
  return {
    pane: 'facMarkers',
    radius: 5,
    fillColor: markerType(feature),
    color: '#000',
    weight: 0.5,
    opacity: 1,
    fillOpacity: 0.8,
  };
}

const ccf = L.featureGroup([]);
const centers = L.featureGroup([]);
const towers = L.featureGroup([]);
const tracons = L.featureGroup([]);
const updowns = L.featureGroup([]);

function sortFacTypes(marker, popupData) {
  switch (marker.fac_type) {
    case 2:
      tracons.addLayer(L.circleMarker([marker.lat, marker.lon], style(marker)).bindPopup(popupData));
      break;
    case 3:
      updowns.addLayer(L.circleMarker([marker.lat, marker.lon], style(marker)).bindPopup(popupData));
      break;
    case 6:
      ccf.addLayer(L.circleMarker([marker.lat, marker.lon], style(marker)).bindPopup(popupData));
      break;
    case 4:
    case 7:
      towers.addLayer(L.circleMarker([marker.lat, marker.lon], style(marker)).bindPopup(popupData));
      break;
    case 8:
      centers.addLayer(L.circleMarker([marker.lat, marker.lon], style(marker)).bindPopup(popupData));
      break;
    case 9:
      tracons.addLayer(L.circleMarker([marker.lat, marker.lon], style(marker)).bindPopup(popupData));
      break;
    default:
      console.error(`${marker.fac_id} could not be added to the correct group`);
  }
}

(async () => {
  const markerData = await fetch('./fac_data.json').then((res) => res.json());

  markerData.forEach((marker) => {
    const popupData = `
    <table>
      <tr>
        <td>ID: ${marker.fac_id}</td>
      </tr>
      <tr>
        <td>Name: ${marker.name}</td>
      </tr>      
      <tr>
        <td>Level: ${marker.level}</td>
      </tr>
      <tr>
        <td>Type: ${marker.type}</td>
      </tr>
      <tr>
        <td>Address: ${marker.address}</td>
      </tr>
      <tr>
        <td><a href="${FORUM_URL}${marker.fac_id}" target="_top">Forum Page</a></td>
      <tr>
    </table>
    `;

    sortFacTypes(marker, popupData);
  });

  ccf.addTo(map);
  centers.addTo(map);
  towers.addTo(map);
  tracons.addTo(map);
  updowns.addTo(map);
})();

// Layer Controls
const emptyGroup = L.layerGroup();
const baseLayers = {
  None: emptyGroup,
  'Locality Areas': localityAreaGroup,
};
const overlayMaps = {
  ARTCCs: centers,
  'Combined Control Facilities': ccf,
  Towers: towers,
  TRACONS: tracons,
  'Tower/Approach Controls': updowns,
};

L.control.layers(baseLayers, overlayMaps).addTo(map);

//Legend
const legend = L.control({ position: 'bottomright' });
legend.onAdd = function () {
  let div = L.DomUtil.create('ul', 'info legend'),
    types = ['Enroute Center', 'Combined Control Facility', 'Tower', 'Tower and Approach Control', 'Approach Control'],
    labels = ['ARTCC', 'CCF', 'Tower', 'Tower/Approach', 'TRACON'];

  for (let i = 0; i < types.length; i++) {
    let obj = { type: types[i] }; //placeholder so arguement is correct data type
    div.innerHTML += `<li><i style="background: ${markerType(obj)}"></i>${labels[i]}</li>`;
  }

  return div;
};

legend.addTo(map);
