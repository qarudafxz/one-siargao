//eslint-disable-next-line
//@ts-nocheck
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMedia } from '@/hooks/useMedia'
import data from '@/data/starting_points.json'
import { Select, MenuItem } from '@mui/material'
import { CiLocationArrow1 } from 'react-icons/ci'
import { PiSneakerMoveBold } from 'react-icons/pi'
import { Toaster, toast } from 'sonner'

interface LocationProps {
 location_name: string
 location_code: string
}

const InputBar: React.FC = () => {
 const isMobile = useMedia('(max-width: 768px)')
 const navigate = useNavigate()
 const [loc, setLoc] = useState<LocationProps>({
  location_name: '',
  location_code: ''
 })
 const [mode, setMode] = useState<string>('')

 const handleChangeMode = (event: React.ChangeEvent) => {
  setMode(event.target.value as string)
 }

 const handleLocationChange = (
  event: React.ChangeEvent<{ value: unknown }>
 ) => {
  const selectedLocation = event.target.value as LocationProps
  setLoc(selectedLocation)
 }

 const revealDirections = () => {
  if (!loc || !mode) {
   toast.error('Please provide all details.')
   return
  }

  navigate('/gis', { state: { ...loc, mode } })
 }

 return (
  <div className="bg-white shadow-md rounded-md mt-10">
   <Toaster position="top-center" />
   {isMobile ? (
    <div className="p-3 grid grid-cols-2"></div>
   ) : (
    <div className="p-6 grid grid-cols-10 gap-4">
     <div className="col-span-5 flex gap-5 items-center">
      <CiLocationArrow1 size={40} />
      <Select
       value={loc}
       onChange={handleLocationChange}
       className="w-[850px] border-none rounded-md p-3"
      >
       {data.map((item) => (
        <MenuItem key={item.location_code} value={item}>
         {item.location_name}
        </MenuItem>
       ))}
      </Select>
     </div>
     <div className="col-span-3 flex gap-5 items-center">
      <PiSneakerMoveBold size={60} />
      <Select
       value={mode}
       onChange={handleChangeMode}
       className="w-[850px] border-none rounded-md p-3"
      >
       {['Trycicle', 'Van', 'Bike', 'Walk', 'Boat'].map((item) => (
        <MenuItem key={item} value={item}>
         {item}
        </MenuItem>
       ))}
      </Select>
     </div>
     <button
      onClick={revealDirections}
      className="col-span-2 w-full text-center rounded-md bg-main text-white font-bold hover:bg-blue-700 duration-150"
     >
      Reveal Directions
     </button>
    </div>
   )}
  </div>
 )
}

export default InputBar
