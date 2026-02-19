import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Master from './Componets/Master'
import Body from './Componets/Body'
import AdminMaster from './Admin/AdminMaster'
import Login from './Componets/Login'
import OwnerBody from './Owner/OwnerBody'
import OwnerMaster from './Owner/OwnerMaster'
import Register from './Componets/Register'
import AddProperty from './Owner/Componets/AddProperty'
import FindProperty from './Owner/Componets/FindProperty'
import AllProperty from './Componets/AllProperty'
import Rooms from './Owner/Componets/Rooms'
import ManageProperty from './Owner/Componets/ManageProperty'
import Booking from './Owner/Booking/Booking'
import BodyMaster from './Admin/AdminBodyMaster/BodyMaster'
import AllOwners from './Admin/AdminBodyMaster/AllOwners'
import ManageUsers from './Admin/AdminBodyMaster/ManageUsers'
import DeleteOwner from './Admin/Componets/DeleteOwner'
import AdminAllProperty from './Admin/Componets/AdminAllProperty'
import ManageBooking from './Admin/Componets/ManageBooking'
import ViewProperty from './Owner/Booking/ViewProperty'

function App() {
     return (
          <>
               <BrowserRouter>
                    <Routes>
                         <Route path='/' element={<Master />}>
                              <Route path='/' element={<Body />}></Route>
                              <Route path='/login' element={<Login />}></Route>
                              <Route path='/register' element={<Register />}></Route>
                              <Route path='/allproperty' element={<AllProperty />}></Route>
                              <Route path='/viewproperty' element={<ViewProperty />}></Route>
                              <Route path='/booking/:id' element={<Booking />}></Route>
                         </Route>

                         <Route path='/admin' element={<AdminMaster />}>
                                        <Route path='/admin/' element={<BodyMaster/>}>
                                             <Route path='/admin/owners' element={<AllOwners/>}></Route>
                                             <Route path='/admin/manage' element={<ManageUsers/>}></Route>
                                             <Route path='/admin/property' element={<AdminAllProperty/>}></Route>
                                             <Route path='/admin/managebooking' element={<ManageBooking/>}></Route>
                                             <Route path='/admin/delete/:id' element={<DeleteOwner/>}></Route>
                                        </Route>
                         </Route>
                         
                         <Route path='/Owner' element={<OwnerMaster />}>
                              <Route path='/Owner' element={<OwnerBody />}></Route>
                              <Route path='/Owner/addProperty' element={<AddProperty />}></Route>
                              <Route path='/Owner/rooms' element={<Rooms />}></Route>
                              <Route path='/Owner/findProperty' element={<FindProperty />}></Route>
                              <Route path='/Owner/manageproperty/:id' element={<ManageProperty />}></Route>
                         </Route>
                    </Routes>
               </BrowserRouter>
          </>
     )
}

export default App
