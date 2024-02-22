import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './header/App'
// import Accordian from './header/Accordian'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar1 from './header/Navbar'
import Footer from './header/Footer'
import Tabs from './header/components/Tabs'
import Offcanvas from './header/components/OffCanvas'
import New from './header/components/New'

import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar1 />
      <Routes>
        <Route path='/App' element={<App />}></Route>
        {/* <Route path='/Accordian' element={<Accordian />} /> */}
        <Route path='/Tabs' element={<Tabs />}></Route>
        <Route path='/OffCanvas' element={<Offcanvas />}></Route>
        <Route path='/New' element={<New />}></Route>

      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
