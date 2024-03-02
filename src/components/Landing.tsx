import React from 'react'
import { useMedia } from '@/hooks/useMedia'
import { Navbar, Hero, About, GIS, Files, Authors } from './index'

const Landing: React.FC = () => {
 const isMobile = useMedia('(max-width: 768px)')
 return (
  <div className="font-main h-screen bg-cover bg-center">
   <div className={`${isMobile ? 'px-8' : 'px-36'} pt-10`}>
    <Navbar />
    <Hero />
    <About />
    <GIS />
    <Files />
   </div>
   <Authors />
  </div>
 )
}

export default Landing
