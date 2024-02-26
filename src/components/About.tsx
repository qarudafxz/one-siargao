import React from 'react'
import { useMedia } from '@/hooks/useMedia'
import map from '@/assets/map.png'

const About: React.FC = () => {
 const isMobile = useMedia('(max-width: 768px)')

 return (
  <div>
   {isMobile ? (
    <div></div>
   ) : (
    <div className="py-40">
     <div id="about" className="flex flex-col gap-4">
      <h1 className="font-bold text-3xl">
       About <span className="text-main">#1 Siargao</span>
      </h1>
      <div className="mt-20 flex gap-10 items-center">
       <img src={map} alt="Map PNG" className="w-1/2 h-auto" />
       <p>
        <span className="font-bold">#1 Siargao</span> is a GIS-Based Network
        Analysis in Finding Optimal Route on Accessing Tourist Places in Siargao
        Island, Philippines. The system will provide users beautiful tourist
        spots in Siargao based on the starting points and the time frame given
        for travel. This updates the road networks in Siargao Islands with
        integrated road networks along with tourist attractions and relevant
        geographic features.
       </p>
      </div>
     </div>
    </div>
   )}
  </div>
 )
}

export default About
