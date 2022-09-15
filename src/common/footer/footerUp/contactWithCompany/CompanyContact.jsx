import React from 'react'
import { Link } from 'react-router-dom'
const CompanyContact = () => {
    return (
        <div className="col-lg-3 col-md-6">
            <div className="widget-ft widget-about">
                <div className="logo logo-ft">
                    <Link to="index.html" title="">
                        <img src={require("../../../../assets/images/logos/logo-ft02.png")} alt="" />
                    </Link>
                </div>
                <div className="widget-content">
                    <div className="icon">
                        <img src={require('../../../../assets/images/icons/call-2.png')} alt="" />
                    </div>
                    <div className="info">
                        <p className="questions">Got Questions ? Call us 24/7!</p>
                        <p className="phone">Call Us: (888) 1234 56789</p>
                        <p className="address">
                            PO Box CT16122 Collins Street West, Victoria 8007,<br />Australia.
                        </p>
                    </div>
                </div>
                <ul className="social-list">
                    <li>
                        <Link to="#" title="">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="#" title="">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="#" title="">
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="#" title="">
                            <i className="fa fa-pinterest" aria-hidden="true"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="#" title="">
                            <i className="fa fa-dribbble" aria-hidden="true"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="#" title="">
                            <i className="fa fa-google" aria-hidden="true"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CompanyContact