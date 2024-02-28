import React from 'react'
import { useMedia } from '@/hooks/useMedia'
import juliet from '@/assets/juliet.png'
import izza from '@/assets/izza.png'

const Authors: React.FC = () => {
 const isMobile = useMedia('(max-width: 768px)')
 return (
  <div>
   {isMobile ? (
    <div></div>
   ) : (
    <div className="py-44 px-36 bg-main" id="networks">
     <h1 className="font-bold text-3xl text-center text-white">
      Authors of #1 Siargao
     </h1>
     <div className="grid place-items-center justify-center">
      <div className="flex gap-8 items-center mt-10">
       <div className="flex flex-col gap-2 items-center">
        <img src={juliet} alt="juliet" className="rounded-full h-36 w-36" />
        <h1 className="text-white font-bold text-xl text-center">
         Juliet T. Demata
        </h1>
       </div>
       <div className="flex flex-col gap-2 items-center">
        <img src={izza} alt="izza" className="rounded-full h-36 w-36" />
        <h1 className="text-white font-bold text-xl text-center">
         Izza Nicole D. Fortun
        </h1>
       </div>
      </div>
      <p className="mt-7 text-zinc-300 px-20 text-center">
       This is part of an undergraduate research paper for the degree of
       Bachelor of Science in Geodetic Engineering - College of Engineering and
       Geosciences, Caraga State University, Butuan City, Philippines.
      </p>
     </div>
    </div>
   )}
  </div>
 )
}

export default Authors
