import React from 'react'
import { Link } from 'react-router-dom'

const AddContract = () => {
    return (
        <React.Fragment>
            <section className="add-contact p-3">
                <div className="container">
                    <div className="row">
                        <p className="h3 text-success fw-bold">Craete Contact</p>
                        <p className="fst-italic">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem qui fuga quia molestias? Necessitatibus dolorum rem repellendus alias incidunt consequatur atque commodi, quisquam vel nostrum sint distinctio, in soluta nihil?</p>
                    </div>
               
                <div className="row">
                    <div className="col-md-4">

                        <form>
                        <div className="mb-2">
                            <input type="text" className="form-control" placeholder="Name"/>
                        </div>
                        <div className="mb-2">
                            <input type="text" className="form-control" placeholder="phot url"/>
                        </div>
                        <div className="mb-2">
                            <input type="number" className="form-control" placeholder="mobile"/>
                        </div>
                        <div className="mb-2">
                            <input type="email" className="form-control" placeholder="email"/>
                        </div>
                        <div className="mb-2">
                            <input type="text" className="form-control" placeholder="Company"/>
                        </div>
                        <div className="mb-2">
                            <input type="text" className="form-control" placeholder="Title"/>
                        </div>
                        <div className="mb-2">
                            <select className="form-control">
                           <option>Select a group</option>
                            </select>
                        </div>
                        <div className="mb-2">
                            <input type="button" className="btn btn-success" value="Create"/>
                            <Link  to ={'/contracts/list'} className="btn btn-dark ms-2">cancel</Link>
                        </div>

                        </form>

                    </div>
                </div>
             </div>
            </section>
        </React.Fragment>
    )
}

export default AddContract
