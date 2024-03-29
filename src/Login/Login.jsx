import "./Login.css";
import React from "react";
import {NavLink} from 'react-router-dom'

function template() {
 const {template}= this.state
  return (
    <div className="login container-fluid">
      <h2 className="text-center mt-4 mb-5">Login</h2>
      
      {template}
    
      <div className="row mb-3">
            <div className="offset-sm-5 col-sm-7 text-start">
              <button onClick={this.fnLogin} className="btn btn-primary">Login</button>
              <NavLink to='/register'>To Go to Register</NavLink>
            </div>
           
      </div>


    </div>
  );
};

export default template;
