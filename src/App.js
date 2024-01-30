import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Upload from './components/upload-icon/Upload'
import OTP from './components/OTP/OTP'
import Form from './components/Form/Form'
import Filter from './components/Filter/Filter'
import Option from './components/option/Option'
import Preview from './components/preview/Preview'
import CheckBox from './components/CheckBox/CheckBox'
import Pagination from './components/pagination/Pagination'
import Slider from './components/slider/Slider'
import Reload from './components/reload/Reload'
import ReactPDF from './components/pdfVierwer/ReactPDF'
import MUI from './components/MUI/MUI'
import Cursor from './my_testing/cursor/Cursor'


const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Cursor />} />
      <Route exact path='/mui' element={<MUI />} />
      <Route exact path='/pdf' element={<ReactPDF />} />
      <Route exact path='/reload' element={<Reload />} />
      <Route exact path='/pagination' element={<Pagination />} />
      <Route exact path='/slider' element={<Slider />} />
      <Route exact path='/checkbox' element={<CheckBox />} />
      <Route exact path='/filter' element={<Filter />} />
      <Route exact path='/form' element={<Form />} />
      <Route exact path='/otp' element={<OTP />} />
      <Route exact path='/upload' element={<Upload />} />
      <Route exact path='/option' element={<Option />} />
      <Route exact path='/preview' element={<Preview />} />
    </Routes>
  )
}

export default App
