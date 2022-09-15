import React from 'react'
import { Link } from 'react-router-dom'
const Slider = () => {
    return (
        <div className="widget widget-count">
            <div className="widget-title">
                <h3>Special Offer</h3>
            </div>
            <div className="counter style1 v1">
                <span className="sale">Save $60.00</span>
                <div className="counter-content">
                    <div className="box-content">
                        <div className="box-image owl-carousel-1">
                            <Link to="#" title="">
                                <img src={require('../../../../assets/images/banner_boxes/05.png')} alt="" />
                            </Link>
                            <Link to="#" title="">
                                <img src={require('../../../../assets/images/banner_boxes/05.png')} alt="" />
                            </Link>
                            <Link to="#" title="">
                                <img src={require('../../../../assets/images/banner_boxes/05.png')} alt="" />
                            </Link>
                        </div>
                        <div className="product-name">
                            <Link to="#" title="">Harman Kardon</Link>
                        </div>
                        <div className="price">
                            <span className="sale">$1,250.00</span>
                            <span className="regular">$2,999.00</span>
                        </div>
                    </div>
                    <div className="count-down">
                        <div className="square">
                            <div className="numb">
                                14
                            </div>
                            <div className="text">
                                DAYS
                            </div>
                        </div>
                        <div className="square">
                            <div className="numb">
                                09
                            </div>
                            <div className="text">
                                HOURS
                            </div>
                        </div>
                        <div className="square">
                            <div className="numb">
                                23
                            </div>
                            <div className="text">
                                SECS
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider