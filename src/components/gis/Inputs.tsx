import React, { useState } from 'react'
import { Select, Input, Button } from '@mui/material'
import { DataProps } from '@/types/global'

const Inputs: React.FC = () => {
 const [data, setData] = useState<DataProps>({})

 return (
  <div className="flex flex-col gap-4">
   <form className="flex flex-col gap-7">
    <div>
     <label htmlFor="starting_point">Starting Point</label>
     <Select
      id="starting_point"
      variant="standard"
      fullWidth
      defaultValue="Dapa Seaport"
      label="Starting Point"
     >
      <option value="Dapa Seaport">Dapa Seaport</option>
      <option value="Sayak Airport">Sayak Airport</option>
     </Select>
    </div>
    <div>
     <label htmlFor="time_of_travel">Time of Travel</label>
     <Select
      id="time_of_travel"
      variant="standard"
      fullWidth
      defaultValue="0 - 30 minutes"
      value={data.time_of_travel}
      label="Time of Travel"
      onChange={(e) => setData({ ...data, time_of_travel: e.target.value })}
     >
      <option value="0 - 30 minutes">0 - 30 minutes</option>
      <option value="30 minutes - 1 hour">30 minutes - 1 hour</option>
      <option value="1 hour - 2 hours">1 hour - 2 hours</option>
      <option value="2 hours - 3 hours">2 hours - 3 hours</option>
      <option value="3 hours - 4 hours">3 hours - 4 hours</option>
      <option value="4 hours - 5 hours">4 hours - 5 hours</option>
     </Select>
    </div>
    <div>
     <label htmlFor="mode_of_transportation">Mode of Transportation</label>
     <Select
      id="mode_of_transportation"
      variant="standard"
      fullWidth
      defaultValue="Motorcycle"
      label="Mode of Transportation"
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
     <Button variant="contained" className="w-full">
      Generate Shortest Path
     </Button>
    </div>
   </form>
  </div>
 )
}

export default Inputs
