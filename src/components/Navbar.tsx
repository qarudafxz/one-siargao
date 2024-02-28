import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '@/assets/logo.png'
import { useMedia } from '@/hooks/useMedia'
import data from '@/data/navigation.json'
import { Link } from 'react-scroll'

const Navbar: React.FC = () => {
 const navigate = useNavigate()
 const isMobile = useMedia('(max-width: 768px)')

 const rerouteToSystem = () => {
  navigate('/gis')
 }

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
       <Link
        to={item.url}
        smooth={true}
        spy={true}
        key={index}
        className="text-black font-semibold menu cursor-pointer hover:text-main duration-150"
       >
        {item.label}
       </Link>
      ))}
      <button
       onClick={rerouteToSystem}
       className="font-bold text-main border-2 border-main rounded-full py-2 px-6 hover:bg-main hover:text-white duration-200"
      >
       Find Spots
      </button>
     </div>
    </div>
   )}
  </div>
 )
}

export default Navbar
