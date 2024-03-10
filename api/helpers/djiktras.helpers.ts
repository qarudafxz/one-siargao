/* eslint-disable @typescript-eslint/no-explicit-any */

interface Coordinate {
 label: string
 coordinates: [number, number]
 neighbors: string[]
}

interface SpotProperties {
 location_name: string
 coordinate: string
}

interface Spot {
 label: string
 properties: SpotProperties
}

interface DistanceMap {
 [key: string]: number
}

interface PreviousMap {
 [key: string]: string | undefined
}

interface DijkstraResult {
 type: 'LineString'
 coordinates: [number, number][]
 properties: SpotProperties
}

export const dijkstra = (
 coordinates: Coordinate[],
 start: string,
 spots: Spot[],
 time_taken_to_travel: number
) => {
 const distances: DistanceMap = {}
 const previous: PreviousMap = {}

 coordinates.forEach((coord) => {
  if (coord.label !== start) {
   distances[coord.label] = Infinity
  } else {
   distances[coord.label] = 0
  }
 })

 const unvisited = new Set(coordinates.map((coord) => coord.label))

 while (unvisited.size > 0) {
  let current: string | undefined
  for (const node of unvisited) {
   if (!current || distances[node] < distances[current]) {
    current = node
   }
  }

  const spot = spots.find((spot) => spot.properties.coordinate === current)
  if (spot) {
   const result: DijkstraResult = {
    type: 'LineString',
    coordinates: [],
    properties: spot.properties
   }

   let currentNode: string | undefined = current
   while (currentNode) {
    result.coordinates.unshift(
     coordinates.find((coord) => coord.label === currentNode)?.coordinates || [
      0, 0
     ]
    )
    currentNode = previous[currentNode]
   }

   return result
  }

  unvisited.delete(current!)

  for (const neighbor of coordinates.filter((coord) =>
   coord.neighbors.includes(current!)
  )) {
   const distance =
    distances[current as unknown as string] +
    time_taken_to_travel *
     (neighbor.coordinates[0] -
      coordinates.find((c) => c.label === current)!.coordinates[0]) **
      2 +
    (neighbor.coordinates[1] -
     coordinates.find((c) => c.label === current)!.coordinates[1]) **
     2

   if (distance < distances[neighbor.label]) {
    distances[neighbor.label] = distance
    previous[neighbor.label] = current
   }
  }
 }

 return [] as DijkstraResult[]
}
