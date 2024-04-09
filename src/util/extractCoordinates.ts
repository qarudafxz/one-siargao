type Coordinate = [number, number]

export function extractCoordinates(data: any): Coordinate[] {
 const coordinates: Coordinate[] = []
 if (data && data.features) {
  data.features.forEach((feature: any) => {
   if (feature.geometry && feature.geometry.coordinates) {
    const featureCoordinates: Coordinate[] = feature.geometry.coordinates
    featureCoordinates.forEach((coord: Coordinate) => {
     coordinates.push(coord)
    })
   }
  })
 }
 return coordinates
}
