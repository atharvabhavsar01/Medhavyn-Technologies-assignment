import { useState } from 'react'
import './App.css'
//import my libraries
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Users from './Components/User/Users';
import CreateUsers from './Components/Create/CreateUsers';
import UpdateUsers from './Components/UpdateUser/UpdateUser';
import Navbar from './Components/Navbar/Navbar';

function App() {
  // const [count, setCount] = useState(0)

  return (
     <div>
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Users />}></Route>
          <Route path='/create' element={<CreateUsers />}></Route>
          <Route path='/update/:id' element={<UpdateUsers />}></Route>
        </Routes>
      </BrowserRouter>
     </div>
  )
}

export default App
