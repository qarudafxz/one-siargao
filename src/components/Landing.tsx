import React from 'react'
import { useMedia } from '@/hooks/useMedia'
import { Navbar } from './index'

const Landing: React.FC = () => {
 const isMobile = useMedia('(max-width: 768px)')
 return (
  <div className="font-main h-screen bg-cover bg-center">
   <div className={`${isMobile ? 'px-8' : 'px-36'} pt-10`}>
    <Navbar />
   </div>
  </div>
 )
}

export default Landing
