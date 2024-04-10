/* eslint-disable @typescript-eslint/no-explicit-any */
//eslint-disable-next-line
//@ts-nocheck
import React, { useEffect } from 'react'
import {
 MapContainer,
 TileLayer,
 Marker,
 Popup,
 GeoJSON,
 useMap
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import starting_points from '@/data/starting_points.json'
import { StartPoints } from '@/types/global'
import road_networks from '@/data/Road_Networks.json'
import tourist_spots from '@/data/tourist_spots.json'
import orange_pin from '@/assets/orange_pin.png'
import blue_pin from '@/assets/blue_pin.png'
import { Icon } from 'leaflet'
import { useShortestPath } from '@/store/shortest_path'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import 'leaflet-routing-machine'
import L from 'leaflet'
import { GeoJsonObject } from 'geojson'
import primary_roads from '@/data/primary_roads.json'
import secondary_roads from '@/data/secondary_roads.json'
import tertiary_roads from '@/data/tertiary_roads.json'

const Map: React.FC = () => {
 const { shortestPath } = useShortestPath()

 const orangeIcon = new Icon({
  iconUrl: orange_pin,
  iconRetinaUrl: orange_pin,
  iconAnchor: [12, 41],
  popupAnchor: [0, -41],
  shadowAnchor: [12, 41],
  iconSize: [60, 61],
  className: 'orange-icon'
 })

 const blueIcon = new Icon({
  iconUrl: blue_pin,
  iconRetinaUrl: blue_pin,
  iconAnchor: [12, 41],
  popupAnchor: [0, -41],
  shadowAnchor: [12, 41],
  iconSize: [40, 41],
  className: 'blue-icon'
 })

 const handleMouseOver = (event: React.MouseEvent) => {
  const layer = event.target
  layer.bindPopup(layer.feature.properties.Name)
  layer.openPopup()
 }

 const orangeIconLayer = (feature: any, latlng: any) => {
  return L.marker(latlng, { icon: orangeIcon })
 }

 return (
  <MapContainer
   center={[9.86666, 126.05]}
   zoom={12}
   zoomSnap={0.5}
   minZoom={8}
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

   {shortestPath.length > 1 && <RoutingControl shortestPath={shortestPath} />}

   {/* Render road networks (behind primary, secondary, and tertiary roads) */}
   <GeoJSON
    data={road_networks as GeoJsonObject}
    style={{ color: '#2F2F2F' }}
   />

   {/* Render secondary roads */}
   <GeoJSON
    data={secondary_roads as GeoJsonObject}
    style={{ color: '#D8FF00' }}
   />

   {/* Render primary roads */}
   <GeoJSON
    data={primary_roads as GeoJsonObject}
    style={{ color: '#7A33FF' }}
   />

   {/* Render tertiary roads */}
   <GeoJSON
    data={tertiary_roads as GeoJsonObject}
    style={{ color: '#FF0D0D' }}
   />

   {/* Render tourist spots */}
   <GeoJSON
    data={tourist_spots as GeoJsonObject}
    pointToLayer={orangeIconLayer}
    onEachFeature={(feature, layer) => {
     layer.on({
      mouseover: handleMouseOver
     })
    }}
   />

   {/* Render starting points */}
   {starting_points.map((point: StartPoints, idx: number) => (
    <Marker
     key={idx}
     riseOnHover={true}
     position={[point.coordinates[0], point.coordinates[1]]}
     title={point.location_name}
     alt={point.location_name}
     icon={blueIcon}
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

const RoutingControl: React.FC<{ shortestPath: number[][] }> = ({
 shortestPath
}) => {
 const map = useMap()

 console.log(shortestPath)
 const slicePathPerBatches = () => {
  const sizeOfShortestPath = shortestPath.length
  const batchSize = Math.ceil(sizeOfShortestPath / 100)

  const batchedPath = []
  let start = 0
  let end = batchSize

  while (end <= sizeOfShortestPath) {
   batchedPath.push(shortestPath.slice(start, end))
   start = end
   end += batchSize
  }

  if (start < sizeOfShortestPath) {
   batchedPath.push(shortestPath.slice(start))
  }

  return batchedPath
 }

 const batchedPath = slicePathPerBatches()

 useEffect(() => {
  const routingControl = L.Routing.control({
   waypoints: batchedPath.map((batch) => L.latLng(batch[0][1], batch[0][0])),
   routeWhileDragging: true,
   lineOptions: {
    styles: [{ color: '#22c55e', opacity: 0.7, weight: 8 }]
   },
   autoRoute: true,
   draggableWaypoints: false,
   fitSelectedRoutes: true,
   createMarker: () => {}
  }).addTo(map)

  return () => {
   map.removeControl(routingControl)
  }
 }, [map, shortestPath, batchedPath])

 return null
}

export default Map
