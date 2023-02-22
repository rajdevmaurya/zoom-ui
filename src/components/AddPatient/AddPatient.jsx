import React from "react";
import {NavLink} from 'react-router-dom'

function template() {
 const {template}= this.state
  return (
    <div className="login container-fluid">
      <h2 className="text-center mt-2 mb-2">Add Patient</h2>
      
      {template}
    
      <div className="row mb-3">
            <div className="offset-sm-5 col-sm-7 text-start">
              <button onClick={this.fnAddPaitent} className="btn btn-primary">Save</button>
              <button onClick={this.fnAddPaitent} className="btn btn-danger">Back</button>
            </div>
      </div>
    </div>
  );
};

export default template;
