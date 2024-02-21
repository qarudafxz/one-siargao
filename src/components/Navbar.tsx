import React from 'react'
import logo from '@/assets/logo.png'
import { useMedia } from '@/hooks/useMedia'
import data from '@/data/navigation.json'

const Navbar: React.FC = () => {
 const isMobile = useMedia('(max-width: 768px)')
 return (
  <div>
   {isMobile ? (
    <img src={logo} alt="Island Hopping Siargao" className={`w-10 h-auto`} />
   ) : (
    <div className="flex justify-between items-center border-b border-zinc-300">
     <div className="flex items-center gap-4 border-r border-zinc-300 pr-6">
      <img src={logo} alt="Island Hopping Siargao" className={`w-16 h-auto`} />
      <h1 className="font-extrabold text-2xl text-main">
       #1 Siar<span className="text-black">gao</span>
      </h1>
     </div>
     <div className="flex gap-x-10 items-center">
      {data.map((item, index) => (
       <a
        href={item.url}
        key={index}
        className="text-black font-semibold menu hover:text-main duration-150"
       >
        {item.label}
       </a>
      ))}
     </div>
    </div>
   )}
  </div>
 )
}

export default Navbar
