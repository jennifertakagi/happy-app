import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'
import '../assets/styles/pages/orphanages.css';

import mapMarkerIcon from '../assets/icons/map-marker.svg';

function OrphanagesMap () {
  return (
    <div id="orphanages-map">
      <aside>
        <header>
          <img src={mapMarkerIcon} alt="Choose the orphanage"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Florianópolis</strong>
          <strong>Santa Catarina</strong>
        </footer>
      </aside>

      <Map 
        center={[-27.5973931,-48.4887233]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
         <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
       </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  )
}

export default OrphanagesMap;