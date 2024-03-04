/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { dijkstra } from '../helpers/djiktras.helpers'
import fs from 'fs'

export const generateShortestPath = (req: Request, res: Response) => {
 const { starting_point, time_taken_to_travel, mode_of_transportation } =
  req.body
 try {
  // open road_networks.json and extract the values of coordinates
  const roadNetworks = JSON.parse(
   fs.readFileSync('../lib/Road_Networks.json', 'utf-8')
  )
  const { coordinates } = roadNetworks

  // open tourist_spots.json and extract the values of coordinates and other properties
  const touristSpots = JSON.parse(
   fs.readFileSync('../lib/Tourist_Spots.json', 'utf-8')
  )
  const { features } = touristSpots

  // find the starting point in the road network
  const start = coordinates.find((coord: any) => coord.label === starting_point)

  // find the corresponding tourist spots for the given mode of transportation
  const filteredSpots = features.filter(
   (spot: any) =>
    spot.properties.mode_of_transportation === mode_of_transportation
  )

  // use dijkstra's algorithm to find the shortest path from the starting point to all tourist spots
  const result = dijkstra(
   coordinates,
   start,
   filteredSpots,
   time_taken_to_travel
  )

  // return the shortest path as a geojson with the coordinates and tourist spot properties
  res.status(200).json({
   type: 'FeatureCollection',
   //eslint-disable-next-line
   //@ts-ignore
   features: result?.map((path: any) => ({
    type: 'Feature',
    properties: {
     name: path.properties.name,
     distance: path.properties.distance,
     time_taken: path.properties.time_taken
    },
    geometry: {
     type: 'LineString',
     coordinates: path.geometry.coordinates
    }
   }))
  })
 } catch (err) {
  res.status(500).json({ message: err.message })
 }
}
