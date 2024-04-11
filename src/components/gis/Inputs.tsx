import React, { useState, useEffect } from 'react'
import { Button } from '@chakra-ui/react'
import { DataProps } from '@/types/global'
import { toast, Toaster } from 'sonner'
// import { build } from '@/lib/build'
import { useShortestPath } from '@/store/shortest_path'
// import { useInput } from '@/store/input'
import { extractCoordinates } from '@/util/extractCoordinates'
import {
 elevenToTwenty,
 zeroToTen,
 twentyOneToThirty,
 thirtyOneToForty,
 fortyOneToFifty,
 fiftyOneToSixty,
 sixtyOneToSeventy
} from '@/data/sayak/index'
import {
 elevenToTwentyDapa,
 twentyOneToThirtyDapa,
 thirtyOneToFortyDapa,
 fortyOneToFiftyDapa,
 fiftyOneToSixtyDapa,
 sixtyOneToSeventyDapa,
 seventyOneToEightyDapa
} from '@/data/dapa/index'

const Inputs: React.FC = () => {
 const { setShortestPath } = useShortestPath()
 const [startingPoint, setStartingPoint] = useState('Dapa')
 const [timeOfTravel, setTimeOfTravel] = useState('0 - 10 minutes')
 //  const [modeOfTransportation, setModeOfTransportation] = useState('Walk')
 const [value, setValue] = useState<DataProps>({
  starting_point: 'Dapa',
  time_of_travel: '2 hours - 3 hours',
  mode_of_transportation: 'Walk',
  budget: 0
 })

 const handleGeneratePath = async (e: React.MouseEvent) => {
  e.preventDefault()

  if (!startingPoint || !timeOfTravel) {
   toast.error('Please fill up all fields')
   return
  }

  // setValue({
  //  starting_point: startingPoint,
  //  time_of_travel: timeOfTravel,
  //  mode_of_transportation: modeOfTransportation
  // })

  let coordinates: number[][] = []
  if (startingPoint === 'Sayak Airport') {
   if (timeOfTravel === '0 - 10 minutes') {
    coordinates = extractCoordinates(zeroToTen)
   } else if (timeOfTravel === '11 - 20 minutes') {
    coordinates = extractCoordinates(elevenToTwenty)
   } else if (timeOfTravel === '21 - 30 minutes') {
    coordinates = extractCoordinates(twentyOneToThirty)
   } else if (timeOfTravel === '31 - 40 minutes') {
    coordinates = extractCoordinates(thirtyOneToForty)
   } else if (timeOfTravel === '41 - 50 minutes') {
    coordinates = extractCoordinates(fortyOneToFifty)
   } else if (timeOfTravel === '51 - 60 minutes') {
    coordinates = extractCoordinates(fiftyOneToSixty)
   } else if (timeOfTravel === '61 - 70 minutes') {
    coordinates = extractCoordinates(sixtyOneToSeventy)
   } else if (timeOfTravel === '71 - 80 minutes') {
    toast.error('Route not found. Only Dapa has 71 - 80 minutes data.')
    return
   }
  } else {
   if (timeOfTravel === '0 - 10 minutes') {
    toast.error('Route not found. Only Sayak has 0 - 10 minutes data.')
    return
   } else if (timeOfTravel === '11 - 20 minutes') {
    coordinates = extractCoordinates(elevenToTwentyDapa)
   } else if (timeOfTravel === '21 - 30 minutes') {
    coordinates = extractCoordinates(twentyOneToThirtyDapa)
   } else if (timeOfTravel === '31 - 40 minutes') {
    coordinates = extractCoordinates(thirtyOneToFortyDapa)
   } else if (timeOfTravel === '41 - 50 minutes') {
    coordinates = extractCoordinates(fortyOneToFiftyDapa)
   } else if (timeOfTravel === '51 - 60 minutes') {
    coordinates = extractCoordinates(fiftyOneToSixtyDapa)
   } else if (timeOfTravel === '61 - 70 minutes') {
    coordinates = extractCoordinates(sixtyOneToSeventyDapa)
   } else if (timeOfTravel === '71 - 80 minutes') {
    coordinates = extractCoordinates(seventyOneToEightyDapa)
   }
  }
  setShortestPath(coordinates)
  return

  // const promise = () => new Promise((resolve) => setTimeout(resolve, 1000))
  // try {
  //  toast.promise(promise, {
  //   loading: 'Generating shortest path, Please wait...',
  //   success: () => {
  //    return `Shortest path generated successfully`
  //   },
  //   error:
  //    'Error occurred while generating the shortest path. Please try again in a little bit.'
  //  })

  //  const response = await fetch(build('api/v1/generate'), {
  //   method: 'POST',
  //   headers: {
  //    'Content-Type': 'application/json',
  //    'Access-Control-Allow-Origin': '*'
  //   },
  //   body: JSON.stringify({ ...value, type })
  //  })
  //  if (!response.ok) {
  //   throw new Error('An error occurred while generating the shortest path')
  //  }
  //  toast.promise(promise, {
  //   loading: 'Generating shortest path, Please wait...',
  //   success: () => {
  //    return `Shortest path generated successfully`
  //   },
  //   error:
  //    'Error occurred while generating the shortest path. Please try again in a little bit.'
  //  })
  //  const data = await response.json()
  //  if (response.status === 200) {
  //   console.log(data.shortest_path_coordinates)
  //   setShortestPath(data.shortest_path_coordinates)
  //  }
  // } catch (err) {
  //  toast.promise(promise, {
  //   loading: 'Generating shortest path, Please wait...'
  //  })
  //  toast.error('An error occurred while generating the shortest path')
  // }
 }

 useEffect(() => {
  setValue({
   starting_point: startingPoint,
   time_of_travel: timeOfTravel
   //  mode_of_transportation: modeOfTransportation
  })
 }, [startingPoint, timeOfTravel])

 return (
  <div className="flex flex-col gap-4">
   <Toaster richColors position="bottom-right" />
   <form className="flex flex-col gap-5">
    <div>
     <label htmlFor="starting_point">Starting Point</label>
     <select
      id="starting_point"
      name="starting_point"
      value={value?.starting_point}
      onChange={(e) => setStartingPoint(e.target.value)}
      className="w-full border border-zinc-500 rounded-md py-2 px-2"
     >
      <option value="Dapa Seaport">Port of Dapa</option>
      <option value="Sayak Airport">Sayak Airport</option>
     </select>
    </div>
    <div>
     <label htmlFor="time_of_travel">Time of Travel</label>
     <select
      id="time_of_travel"
      name="time_of_travel"
      value={value.time_of_travel}
      className="w-full border border-zinc-500 rounded-md py-2 px-2"
      onChange={(e) => setTimeOfTravel(e.target.value)}
     >
      <option value="0 - 10 minutes">0 - 10 minutes</option>
      <option value="11 - 20 minutes">11 - 20 minutes</option>
      <option value="21 - 30 minutes">21 - 30 minutes</option>
      <option value="31 - 40 minutes">31 - 40 minutes</option>
      <option value="41 - 50 minutes">41 - 50 minutes</option>
      <option value="51 - 60 minutes">51 - 60 minutes</option>
      <option value="61 - 70 minutes">61 - 70 minutes</option>
      <option value="71 - 80 minutes">71 - 80 minutes</option>
     </select>
    </div>
    {/* <div>
     <label htmlFor="mode_of_transportation">Mode of Transportation</label>
     <select
      id="mode_of_transportation"
      name="mode_of_transportation"
      value={value.mode_of_transportation}
      className="w-full border border-zinc-500 rounded-md py-2 px-2"
      onChange={(e) => setModeOfTransportation(e.target.value)}
     >
      <option value="Walk">Walk</option>
      <option value="Motorcycle">Motorcycle</option>
      <option value="Tricycle">Tricycle</option>
      <option value="Van">Van</option>
      <option value="Car">Car</option>
      <option value="Bicycle">Bicycle</option>
      <option value="Boat">Boat</option>
     </select>
    </div> */}

    <div className="flex flex-col gap-3">
     <Button
      onClick={(e) => handleGeneratePath(e)}
      variant="contained"
      className="w-full bg-main py-2 rounded-md text-white shadow-xl hover:bg-blue-600 duration-150 hover:shadow-sm"
     >
      Generate Shortest Path
     </Button>
     {/* <Button
      onClick={(e) => handleGeneratePath(e, 'all')}
      variant="contained"
      className="w-full border border-blue-500 py-2 rounded-md text-blue-500 shadow-xl"
     >
      Pass through all tourist spots
     </Button> */}
     <Button
      onClick={() => setShortestPath([])}
      variant="contained"
      className="w-full border border-blue-500 py-2 rounded-md text-blue-500 shadow-xl"
     >
      Clear Route
     </Button>
    </div>
   </form>
  </div>
 )
}

export default Inputs
