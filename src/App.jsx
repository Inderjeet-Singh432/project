import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Master from './Componets/Master'
import Body from './Componets/Body'
import AdminMaster from './Admin/AdminMaster'
import Adminbody from './Admin/AdminBody'
import DormitoryMaster from './Owner/Dormitory/dormitoryMaster'
import DomitoryBody from './Owner/Dormitory/DomitoryBody'
import PgMaster from './Owner/Pg/PgMaster'
import PgBody from './Owner/Pg/PgBody'
import HotelMaster from './Owner/Hotel/HotelMaster'
import HotelBody from './Owner/Hotel/HotelBody'
import Contact from './Componets/contact'
import Hotel from './Componets/Hotel'
import Pg from './Componets/Pg'
import Domitory from './Componets/Domitory'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
        <Routes>
             <Route path='/' element={<Master/>}>
                  <Route path='/' element={<Body/>}></Route>
                  <Route path='/contact' element={<Contact/>}></Route>
                  <Route path='/viewhotel' element={<Hotel/>}></Route>
                  <Route path='/viewdomitory' element={<Domitory/>}></Route>
                  <Route path='/viewpg' element={<Pg/>}></Route>
             </Route>

             <Route path='/admin' element={<AdminMaster/>}>
                  <Route path='/admin' element={<Adminbody/>}></Route>
             </Route>

             <Route path='/domitory' element={<DormitoryMaster/>}>
                    <Route path='/domitory' element={<DomitoryBody/>}></Route>
             </Route>

             <Route path='/pg' element={<PgMaster/>}>
                    <Route path='/pg' element={<PgBody/>}></Route>
            </Route>

            <Route path='/hotel' element={<HotelMaster/>}>
                    <Route path='/hotel' element={<HotelBody/>}></Route>
            </Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
