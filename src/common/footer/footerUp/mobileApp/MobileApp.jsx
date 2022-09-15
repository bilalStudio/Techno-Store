import React from 'react'
import { Link } from 'react-router-dom'
const MobileApp = () => {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="widget widget-apps">
                    <div className="widget-title">
                        <h3>Mobile Apps</h3>
                    </div>
                    <ul className="app-list">
                        <li className="app-store">
                            <Link to="#" title="">
                                <div className="img">
                                    <img src={require('../../../../assets/images/icons/app-store-2.png')} alt="" />
                                </div>
                                <div className="text">
                                    <h4>App Store</h4>
                                    <p>Available now on the</p>
                                </div>
                            </Link>
                        </li>
                        <li className="google-play">
                            <Link to="#" title="">
                                <div className="img">
                                    <img src={require('../../../../assets/images/icons/google-play-2.png')} alt="" />
                                </div>
                                <div className="text">
                                    <h4>Google Play</h4>
                                    <p>Get in on</p>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MobileApp