import React from 'react'
import { IoMdInformationCircleOutline } from 'react-icons/io'

const Reminder: React.FC = () => {
 return (
  <div className="flex gap-4 items-center p-4 rounded-md border border-zinc-300">
   <IoMdInformationCircleOutline className="text-red-600" size={50} />
   <p className="text-[10px] text-zinc-600">
    To generate the shortest path, ensure all required inputs are provided.
    Omitting even a single piece of data will halt the process.
   </p>
  </div>
 )
}

export default Reminder
