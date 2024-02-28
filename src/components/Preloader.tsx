import React, { useEffect } from 'react'
import { useMedia } from '@/hooks/useMedia'
import { motion } from 'framer-motion'
import logo from '@/assets/logo.png'
import { useToggleStore } from '@/store/toggle'

const Preloader: React.FC<{ active: boolean }> = ({ active }) => {
 const isMobile = useMedia('(max-width: 768px)')
 const { isLoading, toggleLoading } = useToggleStore()

 useEffect(() => {
  if (active) {
   toggleLoading(true)
   const timeoutId = setTimeout(() => {
    toggleLoading(false)
   }, 3000)

   const timeoutId2 = setTimeout(() => {
    toggleLoading(false)
   }, 5000)

   return () => {
    clearTimeout(timeoutId)
    clearTimeout(timeoutId2)
   }
  }
 }, [active, toggleLoading])

 return (
  <div>
   {isLoading &&
    (isMobile ? (
     <div></div>
    ) : (
     <div className="bg-transparent w-full h-screen grid place-items-center">
      <motion.div
       initial={{ scale: 0 }}
       animate={{ scale: 1, rotate: 360 }}
       transition={{
        duration: 0.5,
        type: 'spring',
        stiffness: 260,
        damping: 20,
        repeat: Infinity,
        repeatType: 'reverse'
       }}
      >
       <img src={logo} alt="Island Hopping Siargao" className={`w-56 h-auto`} />
      </motion.div>
     </div>
    ))}
  </div>
 )
}

export default Preloader
