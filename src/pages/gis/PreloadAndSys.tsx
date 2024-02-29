import React from 'react'
import Preloader from '@/components/Preloader'
import System from '@/pages/gis/System'

const PreloadAndSys: React.FC = () => {
 return (
  <div className="h-screen overflow-hidden">
   <Preloader active={true} />
   <System />
  </div>
 )
}

export default PreloadAndSys
