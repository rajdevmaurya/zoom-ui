import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/main.css'
import $ from 'jquery';
import '../../js/ap'


const Rx = () => {
  return (
 <React.Fragment>
  <section className="body__content">
<div className="container">
    <p className="required mb-1">Dataset name</p>

    <form className="form mb-3">
        <div className="mb-2">
            <input type="checkbox" name="path" id="path"/>
            <label for="path" className="form__label">Path</label>
        </div>
        <div className="mb-2">
            <input type="checkbox" name="rx" id="rx"/>
            <label for="rx" className="form__label">Rx</label>
        </div>
    </form>

    <div className="mb-3">
        <table id="rx_path_table" className="display rx__path__table">
            <thead>
                <tr>
                    <th>Rx</th>
                    <th>Name</th>
                    <th>Frequency</th>
                    <th>Duration</th>
                    <th>Notes</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Odimont</td>
                    <td>1 tab- one day</td>
                    <td>10 Days</td>
                    <td>Bed time</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Xpecof LS</td>
                    <td>three time day</td>
                    <td>5 Days</td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Levoline</td>
                    <td>four time day</td>
                    <td>5 Days</td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>budecort</td>
                    <td>1 puff two t day</td>
                    <td>1 Month</td>
                    <td>&nbsp;</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div className="btn-wrapper flex justify-between">
        <button className="btn btn--primary--reverse">Cancel</button>
        <button className="btn btn--primary">Save</button>
    </div>
</div>
</section>
</React.Fragment>
  )
}

export default Rx;
