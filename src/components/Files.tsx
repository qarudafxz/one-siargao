import React from 'react'
import { useMedia } from '@/hooks/useMedia'
import data from '@/data/files.json'
import FileCard from './FileCard'

const Files: React.FC = () => {
 const isMobile = useMedia('(max-width: 768px)')
 return (
  <>
   {isMobile ? (
    <div></div>
   ) : (
    <div id="files" className="flex flex-col gap-4 font-main pt-24 pb-56">
     <h1 className="text-3xl font-extrabold text-center text-main">
      Files produced by authors
     </h1>
     <div className="grid grid-cols-5 gap-4 mt-5">
      {data.map((file, index) => (
       <div
        style={{
         gridColumn: index >= 5 && index <= 7 ? index - 3 : undefined,
         gridRow: index >= 5 && index <= 7 ? 2 : undefined
        }}
       >
        <FileCard key={index} label={file.label} link={file.link} />
       </div>
      ))}
     </div>
    </div>
   )}
  </>
 )
}

export default Files
