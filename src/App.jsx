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
                         <Route path='/' element={<Master />}>
                              <Route path='/' element={<Body />}></Route>
                              <Route path='/login' element={<Login />}></Route>
                         </Route>

                         <Route path='/admin' element={<AdminMaster />}>
                              <Route path='/admin' element={<Adminbody />}></Route>
                         </Route>

                         <Route path='/Owner' element={<OwnerMaster />}>
                              <Route path='/Owner' element={<OwnerBody />}></Route>
                         </Route>
                    </Routes>
               </BrowserRouter>
          </>
     )
}

export default App
