import React from 'react'
import { useMedia } from '@/hooks/useMedia'

const Landing: React.FC = () => {
 const isMobile = useMedia('(max-width: 768px)')
 return <div className="font-main">Landing Page</div>
}

export default Landing
