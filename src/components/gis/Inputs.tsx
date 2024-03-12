import React, { useState, useEffect } from 'react'
import { Input, Button } from '@chakra-ui/react'
import { DataProps } from '@/types/global'
import { toast, Toaster } from 'sonner'
import { build } from '@/lib/build'
import { useShortestPath } from '@/store/shortest_path'

const Inputs: React.FC = () => {
 const { setShortestPath } = useShortestPath()
 const [startingPoint, setStartingPoint] = useState('Dapa')
 const [timeOfTravel, setTimeOfTravel] = useState('0 - 30 minutes')
 const [modeOfTransportation, setModeOfTransportation] = useState('Walk')
 const [budget, setBudget] = useState(0)
 const [value, setValue] = useState<DataProps>({
  starting_point: 'Dapa',
  time_of_travel: '2 hours - 3 hours',
  mode_of_transportation: 'Walk',
  budget: 0
 })

 const handleGeneratePath = async (e: React.MouseEvent, type: string) => {
  e.preventDefault()

  if (!startingPoint || !timeOfTravel || !modeOfTransportation) {
   toast.error('Please fill up all fields')
   return
  }

  setValue({
   starting_point: startingPoint,
   time_of_travel: timeOfTravel,
   mode_of_transportation: modeOfTransportation,
   budget: budget ? Number(budget) : undefined
  })

  const promise = () => new Promise((resolve) => setTimeout(resolve, 1000))
  try {
   const response = await fetch(build('api/v1/generate'), {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
     'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({ ...value, type })
   })

   if (!response.ok) {
    throw new Error('An error occurred while generating the shortest path')
   }

   toast.promise(promise, {
    loading: 'Generating shortest path, Please wait...',
    success: () => {
     return `Shortest path generated successfully`
    },
    error:
     'Error occurred while generating the shortest path. Please try again in a little bit.'
   })

   const data = await response.json()
   if (response.status === 200) {
    setShortestPath(data.shortest_path_coordinates)
   }
  } catch (err) {
   toast.promise(promise, {
    loading: 'Generating shortest path, Please wait...'
   })
   toast.error('An error occurred while generating the shortest path')
  }
 }

 useEffect(() => {
  setValue({
   starting_point: startingPoint,
   time_of_travel: timeOfTravel,
   mode_of_transportation: modeOfTransportation,
   budget: budget ? Number(budget) : undefined
  })
 }, [startingPoint, timeOfTravel, modeOfTransportation, budget])

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
      <option value="Dapa Seaport">Dapa Seaport</option>
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
      <option value="0 - 30 minutes">0 - 30 minutes</option>
      <option value="30 minutes - 1 hour">30 minutes - 1 hour</option>
      <option value="1 hour - 2 hours">1 hour - 2 hours</option>
      <option value="2 hours - 3 hours">2 hours - 3 hours</option>
      <option value="3 hours - 4 hours">3 hours - 4 hours</option>
      <option value="4 hours - 5 hours">4 hours - 5 hours</option>
      <option value="6 hours - 7 hours">6 hours - 7 hours</option>
      <option value="7 hours - 8 hours">7 hours - 8 hours</option>
     </select>
    </div>
    <div>
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
    </div>
    <div>
     <label htmlFor="budget">
      Budget <span className="text-zinc-400">(Optional)</span>
     </label>
     <Input
      id="budget"
      type="number"
      placeholder="Enter your budget in PHP"
      value={value.budget}
      className="w-full border border-zinc-500 rounded-md py-2 px-2"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
       setBudget(parseInt(e.target.value))
      }
     />
    </div>
    <div className="flex flex-col gap-3">
     <Button
      onClick={(e) => handleGeneratePath(e, 'not all')}
      variant="contained"
      className="w-full bg-main py-2 rounded-md text-white shadow-xl hover:bg-blue-600 duration-150 hover:shadow-sm"
     >
      Generate Shortest Path
     </Button>
     <Button
      onClick={(e) => handleGeneratePath(e, 'all')}
      variant="contained"
      className="w-full border border-blue-500 py-2 rounded-md text-blue-500 shadow-xl"
     >
      Pass through all tourist spots
     </Button>
    </div>
   </form>
  </div>
 )
}

export default Inputs
