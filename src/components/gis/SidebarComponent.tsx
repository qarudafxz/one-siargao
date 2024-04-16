import React from 'react'
import logo from '@/assets/logo.png'
import { Inputs, Reminder } from './index'

const SidebarComponent: React.FC = () => {
 return (
  <div className="flex flex-col gap-4 p-6 font-main">
   <div className="flex gap-3 items-center">
    <img src={logo} alt="#1 Siargao" className="w-6 h-auto" />
    <h1 className="font-extrabold text-xl text-main">
     #1 Siar<span className="text-black">gao</span>
    </h1>
   </div>
   <div className="border-t border-zinc-300 pt-4">
    <h1 className="font-bold text-xl mb-2">Legend</h1>
    <div className="grid grid-cols-2">
     <div className="flex gap-2 items-center">
      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
      <p className="text-[12px]">Starting Point</p>
     </div>
     <div className="flex gap-2 items-center">
      <div className="w-2 h-2 bg-[#555555] rounded-full"></div>
      <p className="text-[12px]">Road Networks</p>
     </div>
     <div className="flex gap-2 items-center">
      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
      <p className="text-[12px]">Tourist Spots</p>
     </div>
     <div className="flex gap-2 items-center">
      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
      <p className="text-[12px]">Shortest Path</p>
     </div>
     <div className="flex gap-2 items-center">
      <div className="w-2 h-2 bg-[#7A33FF] rounded-full"></div>
      <p className="text-[12px]">Primary Roads (All types of vehicles)</p>
     </div>
     <div className="flex gap-2 items-center">
      <div className="w-2 h-2 bg-[#D8FF00] rounded-full"></div>
      <p className="text-[12px]">Secondary Roads (All types of vehicles)</p>
     </div>
     <div className="flex gap-2 items-center">
      <div className="w-2 h-2 bg-[#FF0D0D] rounded-full"></div>
      <p className="text-[12px]">Tertiary Roads (Trycicle and Motorcycle)</p>
     </div>
    </div>
   </div>
   <Inputs />
   <Reminder />
  </div>
 )
}

export default SidebarComponent
