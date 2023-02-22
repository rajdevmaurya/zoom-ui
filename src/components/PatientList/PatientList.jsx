import React from 'react'
import {store} from '../../appStore/store'
import { NavLink } from "react-router-dom";
const PatientList = () => {
    const fnLogout=()=>{
        sessionStorage.clear();
        store.dispatch({
          type:'LOGOUT'
        })
      }
    return (
        <React.Fragment>
            <div className="container mb-12">
                    <table id="customer_table" className="display customer__table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Rx</th>
                                <th>Customer Name</th>
                                <th>Phone</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td><input type="radio"/></td>
                                <td>Application</td>
                                <td>9999999999</td>
                                <td>Delhi, India</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><input type="radio"/></td>
                                <td>Application</td>
                                <td>9999999999</td>
                                <td>Delhi, India</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><input type="radio"/></td>
                                <td>Application</td>
                                <td>9999999999</td>
                                <td>Delhi, India</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><input type="radio"/></td>
                                <td>Application</td>
                                <td>9999999999</td>
                                <td>Delhi, India</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <li onClick={fnLogout}><NavLink to ="/">Logout </NavLink></li>
        </React.Fragment>
    )
}

export default PatientList;
