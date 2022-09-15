import React from 'react'
import { Link } from 'react-router-dom'
const Slider = (props) => {
    return (
        <div className="slider-item style5">
            <div className="item-text">
                <div className="header-item">
                    <p>{props.title}</p>
                    <h2 className="name">SMART <span>TV</span></h2>
                </div>
                <div className="content-item">
                    <div className="price">
                        <span className="sale">{props.sale}</span>
                        <div className="clearfix"></div>
                    </div>
                    <div className="regular">
                       {props.regular}
                    </div>
                    <div className="btn-shop">
                        <Link to="#" title="">SHOP NOW
                            <img src={require('../../../assets/images/icons/right-2.png')} alt="" /></Link>
                    </div>
                </div>
            </div>
            <div className="item-image">
                <img src={props.img} alt="" />
            </div>
        </div>
    )
}

export default Slider