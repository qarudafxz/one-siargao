import React from 'react'
import { useMedia } from '@/hooks/useMedia'

const About: React.FC = () => {
 const isMobile = useMedia('(max-width: 768px)')

 return (
  <div>
   {isMobile ? (
    <div></div>
   ) : (
    <div className="py-10">
     <div id="about" className="flex flex-col gap-4">
      <h1>About #1 Siargao</h1>
     </div>
    </div>
   )}
  </div>
 )
}

export default About
