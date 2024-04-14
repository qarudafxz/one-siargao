import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useMedia } from '@/hooks/useMedia'
import { Map, SidebarComponent } from '@/components/gis/index'
import { MdOutlineMenu } from 'react-icons/md'
import { IoCloseSharp } from 'react-icons/io5'

const System: React.FC = () => {
 const isMobile = useMedia('(max-width: 768px)')
 const [isSidebarOpen, setIsSidebarOpen] = useState(false)

 const toggleSidebar = () => {
  setIsSidebarOpen(!isSidebarOpen)
 }

 return (
  <div>
   {isMobile ? (
    <div className="grid grid-cols-10 w-full h-full">
     <div className="col-span-2 flex flex-col gap-4">
      <div
       className="flex justify-start items-start cursor-pointer h-screen bg-transparent"
       onClick={toggleSidebar}
      >
       {isSidebarOpen ? (
        <IoCloseSharp
         size={40}
         className="absolute z-50 top-2 left-3 text-main"
        />
       ) : (
        <MdOutlineMenu
         size={40}
         className="absolute z-50 top-2 left-3 text-main"
        />
       )}
      </div>
     </div>
     <div
      className={`col-span-8 relative`}
      style={{
       marginLeft: isSidebarOpen ? '200px' : '0',
       transition: 'margin-left 0.3s ease'
      }}
     >
      <Map />
     </div>
     {/* Sidebar */}
     {isSidebarOpen && (
      <motion.div
       className="fixed left-0 top-0 h-full w-64 bg-transparent z-20 shadow"
       initial={{ x: -300 }}
       animate={{ x: 0 }}
       transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
       <SidebarComponent />
      </motion.div>
     )}
    </div>
   ) : (
    <div className="grid grid-cols-10">
     {/* Toggle menus */}
     <div className="col-span-2 bg-transparent h-screen w-full">
      {' '}
      {/* Changed bg-white to bg-transparent */}
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
