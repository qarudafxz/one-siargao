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

 // initialize the distances dictionary with infinite distances for all nodes except the starting point
 coordinates.forEach((coord) => {
  if (coord.label !== start) {
   distances[coord.label] = Infinity
  } else {
   distances[coord.label] = 0
  }
 })

 // create a set of unvisited nodes
 const unvisited = new Set(coordinates.map((coord) => coord.label))

 // while there are still unvisited nodes
 while (unvisited.size > 0) {
  // find the node with the smallest distance
  let current: string | undefined
  for (const node of unvisited) {
   if (!current || distances[node] < distances[current]) {
    current = node
   }
  }

  // if the current node is a tourist spot, add it to the result array
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

  // remove the current node from the set of unvisited nodes
  unvisited.delete(current!)

  // for each neighbor of the current node
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

   // if the distance is shorter than the current distance to the neighbor, update the distance and previous node
   if (distance < distances[neighbor.label]) {
    distances[neighbor.label] = distance
    previous[neighbor.label] = current
   }
  }
 }

 // if we reach here, it means we didn't find any tourist spots
 return [] as DijkstraResult[]
}
