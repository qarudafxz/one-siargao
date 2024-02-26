import { ReactNode } from 'react'
import tourist_spot from '@/assets/tourist-spot.jpg'
import roads from '@/assets/roads.jpg'
import geodatabase from '@/assets/geodatabase.jpg'
import network from '@/assets/network.jpg'

export interface GISContent {
 title: string
 description: string
 image: ReactNode
}

export const data = [
 {
  title: 'Identification of Target Nodes (tourist spots)',
  description:
   'Traffic nodes like Sayak Airport and Dapa Seaport were pinpointed using Google Earth Pro and converted to shapefile format for analysis.',
  image: tourist_spot
 },
 {
  title: 'Updating of Road Networks',
  description:
   'Road network analysis was done using ArcGIS Network Analyst Extension. Existing data from CCGeo was enhanced using Google Earth Pro, including digitization of new roads for seamless integration.',
  image: roads
 },
 {
  title: 'Creation of Geodatabase',
  description:
   'A geodatabase in ArcMap was created, containing layers for roads, municipal boundaries, traffic nodes, and tourist attractions, serving as origin and target nodes, respectively.',
  image: geodatabase
 },
 {
  title: 'Network Dataset',
  description:
   'The network dataset was improved by integrating road network features from the geodatabase, focusing on edges, junctions, and turns for network connectivity analysis.',
  image: network
 }
]
