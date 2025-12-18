import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Master from './Componets/Master'
import Body from './Componets/Body'
import AdminMaster from './Admin/AdminMaster'
import Adminbody from './Admin/AdminBody'


import Login from './Componets/Login'

import OwnerBody from './Owner/OwnerBody'
import OwnerMaster from './Owner/OwnerMaster'

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
             <Route path='/' element={<Master/>}>
                  <Route path='/' element={<Body/>}></Route>
                  <Route path='/login' element={<Login/>}></Route>
             </Route>
             {/* login */}

             <Route path='/admin' element={<AdminMaster/>}>
                  <Route path='/admin' element={<Adminbody/>}></Route>
             </Route>

             <Route path='/domitory' element={<DormitoryMaster/>}>
                    <Route path='/domitory' element={<DomitoryBody/>}></Route>
             </Route>

            <Route path='/hotel' element={<HotelMaster/>}>
            
            </Route>

            <Route path='/Owner' element={<OwnerMaster/>}>
                    {/* <Route path='/Owner' element={<HotelBody/>}></Route> */}
                    <Route path='/Owner' element={<OwnerBody/>}></Route>
                    {/* <Route path='/Owner' element={<AddHotel/>}></Route> */}
                    {/* <Route path='/Owner/addform' element={<AddingForm/>}></Route> */}
            </Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
