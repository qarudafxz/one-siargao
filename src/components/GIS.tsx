import React, { ReactNode } from 'react'
import { useMedia } from '@/hooks/useMedia'
import { data } from '@/data/gis_content.tsx'
import GISCard from './GISCard'

interface Props {
 title: string
 description: string
 image: ReactNode
}

const GIS: React.FC = () => {
 const isMobile = useMedia('(max-width: 768px)')

 return (
  <div>
   {isMobile ? (
    <div></div>
   ) : (
    <div id="gis" className="flex flex-col gap-4 py-36 w-full">
     <h1 className="font-bold text-2xl text-center">
      #1 Siargao Geographic Information System
     </h1>
     <div className="mt-10 grid grid-cols-4 gap-4">
      {data?.map((item: Props, idx: number) => {
       return (
        <GISCard
         key={idx}
         title={item.title}
         description={item.description}
         image={item.image}
        />
       )
      })}
     </div>
    </div>
   )}
  </div>
 )
}

export default GIS
