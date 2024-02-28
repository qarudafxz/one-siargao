import React from 'react'
import Landing from '@/components/Landing'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PreloadAndSys from './pages/gis/PreloadAndSys'

const App: React.FC = () => {
 return (
  <Router>
   <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/gis" element={<PreloadAndSys />} />
   </Routes>
  </Router>
 )
}

export default App
