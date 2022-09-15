import React from 'react'
import { Link } from 'react-router-dom'
const FooterBottom = () => {
    return (
        <section className="footer-bottom style2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p className="copyright"> All Rights Reserved © Techno Store 2017</p>
                        <p className="btn-scroll">
                            <Link to="#" title="">
                                <img src={require('../../../assets/images/icons/top.png')} alt="" />
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FooterBottom