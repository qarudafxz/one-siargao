import React from 'react'
import logo from '@/assets/logo.png'

const SidebarComponent: React.FC = () => {
 return (
  <div className="flex flex-col gap-4 p-6">
   <div className="flex gap-3 items-center">
    <img src={logo} alt="#1 Siargao" className="w-14 h-auto" />
    <h1 className="font-extrabold text-2xl font-main text-main">
     #1 Siar<span className="text-black">gao</span>
    </h1>
   </div>
  </div>
 )
}

export default SidebarComponent
