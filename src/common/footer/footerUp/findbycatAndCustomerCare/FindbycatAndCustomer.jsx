import React from 'react';
import { Link } from 'react-router-dom';
const FindbycatAndCustomer = () => {
    return (
        <>
            <div className="col-lg-3 col-md-6">
                <div className="widget-ft widget-categories-ft">
                    <div className="widget-title">
                        <h3>Find By Categories</h3>
                    </div>
                    <ul className="cat-list-ft">
                        <li>
                            <Link to="#" title="">Desktops</Link>
                        </li>
                        <li>
                            <Link to="#" title="">Laptops & Notebooks</Link>
                        </li>
                        <li>
                            <Link to="#" title="">Components</Link>
                        </li>
                        <li>
                            <Link to="#" title="">Tablets</Link>
                        </li>
                        <li>
                            <Link to="#" title="">Software</Link>
                        </li>
                        <li>
                            <Link to="#" title="">Phones & PDAs</Link>
                        </li>
                        <li>
                            <Link to="#" title="">Cameras</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-2 col-md-6">
                <div className="widget-ft widget-menu">
                    <div className="widget-title">
                        <h3>Customer Care</h3>
                    </div>
                    <ul>
                        <li>
                            <Link to="#" title="">
                                Contact us
                            </Link>
                        </li>
                        <li>
                            <Link to="#" title="">
                                Site Map
                            </Link>
                        </li>
                        <li>
                            <Link to="#" title="">
                                My Account
                            </Link>
                        </li>
                        <li>
                            <Link to="#" title="">
                                Wish List
                            </Link>
                        </li>
                        <li>
                            <Link to="#" title="">
                                Delivery Information
                            </Link>
                        </li>
                        <li>
                            <Link to="#" title="">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link to="#" title="">
                                Terms & Conditions
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default FindbycatAndCustomer