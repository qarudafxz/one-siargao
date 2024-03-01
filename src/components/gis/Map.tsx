import React, { useEffect } from 'react'
import { GeoJsonObject } from 'geojson'
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import data from '@/data/starting_points.json'
import { StartPoints } from '@/types/global'
import road_networks from '@/data/Road_Networks.json'

const Map: React.FC = () => {
 useEffect(() => {}, [])

 return (
  <MapContainer
   center={[9.86666, 126.05]}
   zoom={12}
   maxZoom={18}
   style={{ width: '100%', height: '100%', position: 'relative' }}
   dragging={true}
   scrollWheelZoom={true}
  >
   <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   />

   <GeoJSON data={road_networks as GeoJsonObject} />
   {data.map((point: StartPoints, idx: number) => (
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
