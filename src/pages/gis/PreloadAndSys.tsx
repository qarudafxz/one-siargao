import React from 'react'
import Preloader from '@/components/Preloader'
import System from '@/pages/gis/System'

const PreloadAndSys: React.FC = () => {
 return (
  <>
   <Preloader active={true} />
   <System />
  </>
 )
}

export default PreloadAndSys
