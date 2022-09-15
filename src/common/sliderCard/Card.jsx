import React from 'react';
import { Link } from 'react-router-dom';
const Card = (props) => {
    return (
        // "imagebox style4"
        <div className={props.className}>
            <div className="box-image">
                <Link to="#" title="">
                    <img src={props.img} alt="" />
                </Link>
            </div>
            <div className="box-content">
                <div className="cat-name">
                    <Link to="#" title="">{props.title}</Link>
                </div>
                <div className="product-name">
                    <Link to="#" title="">{props.subtitle}<br />G2356</Link>
                </div>
                <div className="price">
                    <span className="sale">{props.sale}</span>
                    <span className="regular">{props.regular}</span>
                </div>
            </div>
        </div>
    )
}

export default Card