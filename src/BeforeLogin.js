import React from 'react'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Signup from './Signup/index';
import Login from './Login/index';
export const BeforeLogin = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<Signup name='Registration' />} />
              
            </Routes>
        </BrowserRouter>
    </div>
  )
}
