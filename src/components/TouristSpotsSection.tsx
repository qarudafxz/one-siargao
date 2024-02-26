import React from 'react'
import { useMedia } from '@/hooks/useMedia'

const TouristSpotsSection: React.FC = () => {
 const isMobile = useMedia('(max-width: 768px)')
 return (
  <div>
   {isMobile ? (
    <div></div>
   ) : (
    <div id="spots" className="">
     <div className="flex gap-10 items-center">
      <h1 className="font-bold text-3xl">List of Tourist Spots in Siargao</h1>
     </div>
    </div>
   )}
  </div>
 )
}

export default TouristSpotsSection
