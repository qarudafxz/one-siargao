import React from 'react'
import { useMedia } from '@/hooks/useMedia'

const System: React.FC = () => {
 const isMobile = useMedia('(max-width: 768px)')
 return (
  <div>
   {isMobile ? (
    <div></div>
   ) : (
    <div className="grid grid-cols-10">
     {/* Toggle menus */}
     <div className="col-span-2 bg-white h-screen w-full">
      <h1>Menu</h1>
     </div>
     {/* OpenStreetMap */}
     <div className="col-span-8 bg-main">
      <h1>OSM</h1>
     </div>
    </div>
   )}
  </div>
 )
}

export default System
