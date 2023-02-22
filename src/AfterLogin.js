import React from 'react'
import {Link,BrowserRouter,Routes, Route,Navigate} from 'react-router-dom'
import Profile from './Profile/index'
import {store} from './appStore/store'
import Login from './Login/index';
import NavBar from './components/NavBar/NavBar';
import PatientList from './components/PatientList/PatientList';
import AddPatient from './components/AddPatient/AddPatient';
import Rx from './components/Rx/Rx';
export const AfterLogin = () => {
  return (
    <React.Fragment>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path='/patient/list' element={<PatientList/>} />
          <Route path='*' element={<Navigate to="/patient/list" />} />
          <Route path='/patient/add' element = {<AddPatient/>} />
          <Route path='/patient/rx' element = {<Rx/>} />
        </Routes>
       </BrowserRouter>
       </React.Fragment>
  )
}
