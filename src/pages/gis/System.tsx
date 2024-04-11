import React from 'react'
import { useMedia } from '@/hooks/useMedia'
import { Map, SidebarComponent } from '@/components/gis/index'

const System: React.FC = () => {
 const isMobile = useMedia('(max-width: 768px)')
 return (
  <div>
   {isMobile ? (
    <div className="grid grid-cols-10 w-full">
     <div className="col-span-8 relative">
      <Map />
     </div>
    </div>
   ) : (
    <div className="grid grid-cols-10">
     {/* Toggle menus */}
     <div className="col-span-2 bg-white h-screen w-full">
      <SidebarComponent />
     </div>
     {/* OpenStreetMap */}
     <div className="col-span-8 relative">
      <Map />
     </div>
    </div>
   )}
  </div>
 )
}

export default System
