import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Upload from './components/upload-icon/Upload'
import OTP from './components/OTP/OTP'

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<OTP />} />
      <Route exact path='/upload' element={<Upload />} />
    </Routes>
  )
}

export default App