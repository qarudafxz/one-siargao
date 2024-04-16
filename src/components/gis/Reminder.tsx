import React from 'react'
import { IoMdInformationCircleOutline } from 'react-icons/io'

const Reminder: React.FC = () => {
 return (
  <div className="flex gap-4 items-center p-4 rounded-md border border-zinc-300">
   <IoMdInformationCircleOutline className="text-red-600" size={50} />
   <p className="text-[10px] text-zinc-600">
    The estimated travel time is based on a standard{' '}
    <span className="font-bold">maximum speed of 40 km/h</span> , as outlined in
    RA 4136 (Land Transportation and Traffic Code)
   </p>
  </div>
 )
}

export default Reminder
