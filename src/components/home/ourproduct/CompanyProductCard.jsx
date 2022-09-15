import React from 'react'
import { Link } from 'react-router-dom'
const Card = (props) => {
    return (
        <div className="col-sm-6">
            <div className="product-box style1 style1-v4">
                <div className="imagebox style1 style1-v4">
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
                            <span className="regular">{props.regular}</span>
                            <span className="sale">{props.sale}</span>
                        </div>
                    </div>
                    <div className="box-bottom">
                        <div className="compare-wishlist">
                            <Link to="#" className="compare" title="">
                                <img src={require('../../../assets/images/icons/compare.png')} />Compare
                            </Link>
                            <Link to="#" className="wishlist" title="">
                                <img src={require('../../../assets/images/icons/wishlist.png')} />Wishlist
                            </Link>
                        </div>
                        <div className="btn-add-cart">
                            <Link to="#" title="">
                                <img src={require('../../../assets/images/icons/add-cart.png')} />Add to Cart
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card