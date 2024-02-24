import React from 'react'
import cover from '@/assets/cover.jpg'
import { useMedia } from '@/hooks/useMedia'
import { InputBar } from './index'

const Hero: React.FC = () => {
 const isMobile = useMedia('(max-width: 768px)')
 return (
  <div className="mt-10">
   <div
    className="font-main h-[540px] flex items-center justify-center bg-cover bg-bottom rounded-[20px]"
    style={{ backgroundImage: `url(${cover})` }}
   >
    <div className="flex flex-col gap-2 items-center p-20">
     <h1
      className={`${isMobile ? 'text-xl' : 'text-5xl'} font-extrabold text-white`}
     >
      The number one <span className="text-main">Siargao</span>
     </h1>
     <p className="text-center text-white">
      Discover Siargao's top tourist destinations at your leisure. With #1
      Siargao GIS, you can explore all the must-see spots and the quickest
      routes, enhancing your fleeting adventure.
     </p>
     <InputBar />
    </div>
   </div>
  </div>
 )
}

export default Hero
