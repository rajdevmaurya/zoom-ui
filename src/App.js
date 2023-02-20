import React from 'react';
import './App.css';
import {Routes,Route,Navigate} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import {Login} from './Login/Login'
import PatientList from './components/PatientList/PatientList';

let App = () =>{
  return (
    <React.Fragment>
      <NavBar/>
      <Routes>
        <Route path={"/"} element={<PatientList/>}/>
       </Routes>    
    </React.Fragment>
  );
}

export default App;
