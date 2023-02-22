import './App.css';
import React from 'react'
import {BeforeLogin} from './BeforeLogin';
import {AfterLogin} from './AfterLogin'
import {connect} from 'react-redux'
import { useEffect } from 'react';
import {store} from './appStore/store'
function App(props) {

  useEffect(()=>{
      let isLoggedIn= sessionStorage.isLoggedIn
     
      if(isLoggedIn=='true'){
        store.dispatch({
          type:'LOGIN'
        })
      }
  },[])
  return (
    <React.Fragment>
    
         {
           
           props.isLoggedIn ? <AfterLogin/> : <BeforeLogin />
         }
     
     </React.Fragment>
  );
}

App=connect(
  (state)=>{
    return {
       isLoggedIn:state.reducer.isLoggedIn
    }
  }
)(App)

export default App;
