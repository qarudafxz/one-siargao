/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { dijkstra } from '../helpers/djiktras.helpers'
import fs from 'fs'

export const generateShortestPath = (req: Request, res: Response) => {
 const { starting_point, time_taken_to_travel, mode_of_transportation } =
  req.body
 try {
  const roadNetworks = JSON.parse(
   fs.readFileSync('../lib/Road_Networks.json', 'utf-8')
  )
  const { coordinates } = roadNetworks

  const touristSpots = JSON.parse(
   fs.readFileSync('../lib/Tourist_Spots.json', 'utf-8')
  )
  const { features } = touristSpots

  const start = coordinates.find((coord: any) => coord.label === starting_point)

  const filteredSpots = features.filter(
   (spot: any) =>
    spot.properties.mode_of_transportation === mode_of_transportation
  )

  //djikstra's
  const result = dijkstra(
   coordinates,
   start,
   filteredSpots,
   time_taken_to_travel
  )

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
