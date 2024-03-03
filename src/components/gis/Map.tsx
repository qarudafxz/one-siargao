import React, { useEffect } from 'react'
import { GeoJsonObject } from 'geojson'
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import starting_points from '@/data/starting_points.json'
import { StartPoints } from '@/types/global'
import road_networks from '@/data/Road_Networks.json'
import tourist_spots from '@/data/spots.json'
import orange_pin from '@/assets/orange_pin.png'
import { Icon } from 'leaflet'

const Map: React.FC = () => {
 useEffect(() => {}, [])

 const orangeIcon = new Icon({
  iconUrl: orange_pin,
  iconRetinaUrl: orange_pin,
  iconAnchor: [12, 41],
  popupAnchor: [0, -41],
  shadowAnchor: [12, 41],
  iconSize: [60, 61],
  className: 'orange-icon'
 })

 return (
  <MapContainer
   center={[9.86666, 126.05]}
   zoom={12}
   minZoom={8}
   maxZoom={18}
   zoomSnap={0.5}
   style={{ width: '100%', height: '100%', position: 'relative' }}
   dragging={true}
   scrollWheelZoom={true}
   zoomAnimation={true}
   zoomAnimationThreshold={4}
   className="relative"
  >
   <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   />
   <GeoJSON
    data={road_networks as GeoJsonObject}
    style={{ color: '#555555' }}
   />
   {tourist_spots.map(
    (point: { tourist_spot: string; coordinates: number[] }, idx: number) => (
     <Marker
      key={idx}
      riseOnHover={true}
      position={[point.coordinates[0], point.coordinates[1]]}
      title={point.tourist_spot}
      alt={point.tourist_spot}
      icon={orangeIcon}
     >
      <Popup>
       <div className="p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-lg font-semibold">{point.tourist_spot}</h1>
        <p>{point.coordinates}</p>
       </div>
      </Popup>
     </Marker>
    )
   )}
   {starting_points.map((point: StartPoints, idx: number) => (
    <Marker
     key={idx}
     riseOnHover={true}
     position={[point.coordinates[0], point.coordinates[1]]}
     title={point.location_name}
     alt={point.location_name}
    >
     <Popup>
      <div className="p-4 bg-white shadow-md rounded-lg">
       <h1 className="text-lg font-semibold">{point.location_name}</h1>
       <p className="text-center">{point.location_code}</p>
       <p>{point.coordinates}</p>
      </div>
     </Popup>
    </Marker>
   ))}
  </MapContainer>
 )
}

export default Map
