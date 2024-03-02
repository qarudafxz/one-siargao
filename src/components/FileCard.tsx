import React from 'react'
import { FaFileLines } from 'react-icons/fa6'
import { motion } from 'framer-motion'

const FileCard: React.FC<{ label: string; link: string }> = ({
 label,
 link
}) => {
 const redirectToLink = () => {
  window.open(link, '_blank')
 }

 return (
  <motion.div
   initial={{
    y: 0
   }}
   whileHover={{ y: -5 }}
   transition={{ duration: 0.3 }}
   className="flex flex-col gap-3 items-center border border-zinc-500 rounded-md py-10 cursor-pointer hover:shadow-2xl duration-300"
   onClick={redirectToLink}
  >
   <FaFileLines size={60} className="text-main" />
   <h1 className="font-semibold mt-3 text-zinc-800">{label}</h1>
  </motion.div>
 )
}

export default FileCard
