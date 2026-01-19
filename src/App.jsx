import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Master from './Componets/Master'
import Body from './Componets/Body'
import AdminMaster from './Admin/AdminMaster'
import Adminbody from './Admin/AdminBody'
import Login from './Componets/Login'
import OwnerBody from './Owner/OwnerBody'
import OwnerMaster from './Owner/OwnerMaster'
import Register from './Componets/Register'
import AddProperty from './Owner/Componets/AddProperty'
import FindProperty from './Owner/Componets/FindProperty'
import AllProperty from './Componets/AllProperty'
import Rooms from './Owner/Componets/Rooms'
import ManageProperty from './Owner/Componets/ManageProperty'

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
                         </Route>

                         <Route path='/admin' element={<AdminMaster />}>
                              <Route path='/admin' element={<Adminbody />}></Route>
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
