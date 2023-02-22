import React from 'react'
import {Link,BrowserRouter,Routes, Route,Navigate} from 'react-router-dom'
import Profile from './Profile/index'
import {store} from './appStore/store'
import Login from './Login/index';
import NavBar from './components/NavBar/NavBar';
import PatientList from './components/PatientList/PatientList';
import {BeforeLogin} from './BeforeLogin';
export const AfterLogin = () => {
  return (
    <React.Fragment>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path='/list' element={<PatientList/>} />
          <Route path='*' element={<Navigate to="list" />} />
         
        </Routes>
       </BrowserRouter>
       </React.Fragment>
  )
}
