import React, { useState, useEffect } from 'react'
import { Select, Input, Button } from '@mui/material'
import { DataProps } from '@/types/global'
import { toast, Toaster } from 'sonner'
import { build } from '@/lib/build'
import { useShortestPath } from '@/store/shortest_path'

const Inputs: React.FC = () => {
 const { setShortestPath } = useShortestPath()
 const [value, setValue] = useState<DataProps>({
  starting_point: 'Dapa',
  time_of_travel: '2 hours - 3 hours',
  mode_of_transportation: 'Walking',
  budget: 0
 })
 const [loading, setLoading] = useState(false)

 const handleGeneratePath = async (e: React.MouseEvent) => {
  e.preventDefault()

  try {
   setLoading(true)

   const response = await fetch(build('api/v1/generate'), {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
     'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(value)
   })

   if (!response.ok) {
    throw new Error('An error occurred while generating the shortest path')
   }

   const data = await response.json()
   if (response.status === 200) {
    setShortestPath(data.shortest_path_coordinates)
    setLoading(false)
   }
  } catch (err) {
   toast.error('An error occurred while generating the shortest path')
   setLoading(false)
  }
 }

 useEffect(() => {
  loading
   ? toast.loading('Generating shortest path')
   : toast.success('Shortest path generated successfully')
 }, [loading])

 return (
  <div className="flex flex-col gap-4">
   <Toaster position="bottom-right" />
   <form className="flex flex-col gap-7">
    <div>
     <label htmlFor="starting_point">Starting Point</label>
     <Select
      id="starting_point"
      name="starting_point"
      variant="standard"
      fullWidth
      value={value?.starting_point}
      label="Starting Point"
      onChange={(e) => setValue({ ...value, starting_point: e.target.value })}
     >
      <option value="Dapa Seaport">Dapa Seaport</option>
      <option value="Sayak Airport">Sayak Airport</option>
     </Select>
    </div>
    <div>
     <label htmlFor="time_of_travel">Time of Travel</label>
     <Select
      id="time_of_travel"
      name="time_of_travel"
      variant="standard"
      fullWidth
      value={value.time_of_travel}
      label="Time of Travel"
      onChange={(e) => setValue({ ...value, time_of_travel: e.target.value })}
     >
      <option value="0 - 30 minutes">0 - 30 minutes</option>
      <option value="30 minutes - 1 hour">30 minutes - 1 hour</option>
      <option value="1 hour - 2 hours">1 hour - 2 hours</option>
      <option value="2 hours - 3 hours">2 hours - 3 hours</option>
      <option value="3 hours - 4 hours">3 hours - 4 hours</option>
      <option value="4 hours - 5 hours">4 hours - 5 hours</option>
      <option value="6 hours - 7 hours">6 hours - 7 hours</option>
      <option value="7 hours - 8 hours">7 hours - 8 hours</option>
     </Select>
    </div>
    <div>
     <label htmlFor="mode_of_transportation">Mode of Transportation</label>
     <Select
      id="mode_of_transportation"
      name="mode_of_transportation"
      variant="standard"
      fullWidth
      value={value.mode_of_transportation}
      label="Mode of Transportation"
      onChange={(e) =>
       setValue({ ...value, mode_of_transportation: e.target.value as string })
      }
     >
      <option value="Motorcycle">Motorcycle</option>
      <option value="Tricycle">Tricycle</option>
      <option value="Van">Van</option>
      <option value="Car">Car</option>
      <option value="Bicycle">Bicycle</option>
      <option value="Boat">Boat</option>
     </Select>
    </div>
    <div>
     <label htmlFor="budget">
      Budget <span className="text-zinc-400">(Optional)</span>
     </label>
     <Input
      id="budget"
      type="number"
      placeholder="Enter your budget in PHP"
      fullWidth
     />
    </div>
    <div>
     <Button
      onClick={handleGeneratePath}
      variant="contained"
      className="w-full"
     >
      Generate Shortest Path
     </Button>
    </div>
   </form>
  </div>
 )
}

export default Inputs
