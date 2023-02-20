import React from 'react'
import { Link } from 'react-router-dom'

const PatientList = () => {
    return (
        <React.Fragment>
            <section className="contact-search p-3">
                <div className="containetr">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <p className="h3">PatientList List
                    <Link to={`/patient/add`} className="btn btn-primary ms-2">
                                        <i className="fa fa-plus-circle me-2" />New </Link>
                                </p>
                                <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore cumque vero corporis quas ad enim odit ab. Rem obcaecati laboriosam sed veritatis iure, voluptatum eius facere odio hic nobis officia.</p>
                            </div>
                        </div>
                      </div>
                </div>
            </section>

        </React.Fragment>
    )
}

export default PatientList;
