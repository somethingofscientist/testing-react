import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Upload from './components/upload-icon/Upload'
import OTP from './components/OTP/OTP'
import Form from './components/Form/Form'
import Filter from './components/Filter/Filter'



const App = () => {
  return (
    <Routes>
      {/* my new code */}
      <Route exact path='/' element={<Filter />} />
      <Route exact path='/form' element={<Form />} />
      <Route exact path='/otp' element={<OTP />} />
      <Route exact path='/upload' element={<Upload />} />
    </Routes>
  )
}

export default App