import React from 'react';
import './App.css';
import {Routes,Route,Navigate} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ContractList from './components/contacts/ContactList/ContractList';
import AddContract from './components/contacts/AddContact/AddContract';
import ViewContract from './components/contacts/ViewContact/ViewContract';
import EditContract from './components/contacts/EditContact/EditContract';

let App = () =>{
  return (
    <React.Fragment>
      <NavBar/>
    
    </React.Fragment>
  );
}

export default App;
