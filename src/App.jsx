import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Master from './Componets/Master'
import Body from './Componets/Body'
import AdminMaster from './Admin/AdminMaster'
import Adminbody from './Admin/AdminBody'
import DormitoryMaster from './Owner/Dormitory/dormitoryMaster'
import DomitoryBody from './Owner/Dormitory/DomitoryBody'
import HotelMaster from './Owner/Hotel/HotelMaster'
import HotelBody from './Owner/Hotel/HotelBody'
import Contact from './Componets/contact'
import Login from './Componets/Login'
import OwnerMaster from './Owner/OwnerPanel/OwnerMaster'
import AddHotel from './Owner/Hotel/AddHotel'

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
             <Route path='/' element={<Master/>}>
                  <Route path='/' element={<Body/>}></Route>
                  <Route path='/contact' element={<Contact/>}></Route>
             </Route>
             {/* login */}
               <Route path='/login' element={<Login/>}></Route>

             <Route path='/admin' element={<AdminMaster/>}>
                  <Route path='/admin' element={<Adminbody/>}></Route>
             </Route>

             <Route path='/domitory' element={<DormitoryMaster/>}>
                    <Route path='/domitory' element={<DomitoryBody/>}></Route>
             </Route>

            <Route path='/hotel' element={<HotelMaster/>}>
            </Route>

            <Route path='/Owner' element={<OwnerMaster/>}>
                    <Route path='/Owner' element={<HotelBody/>}></Route>
                    <Route path='/Owner' element={<AddHotel/>}></Route>
            </Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
