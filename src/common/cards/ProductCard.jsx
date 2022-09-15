import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    return (
        <div className="product-box style2 v1">
            <div className="imagebox">
                <div className="box-image owl-carousel-1">
                    <Link to="#" title="">
                        <img src={props.img1}    alt="" />
                    </Link>
                    <Link to="#" title="">
                        <img src={props.img2} alt="" />
                    </Link>
                    <Link to="#" title="">
                        <img src={props.img3} alt="" />
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
                <div className="box-bottom">
                    <div className="btn-add-cart">
                        <Link to="#" title="">
                            <img src={require('../../assets/images/icons/add-cart.png')} alt="" />Add to Cart
                        </Link>
                    </div>
                    <div className="compare-wishlist">
                        <Link to="#" className="compare" title="">
                            <img src={require('../../assets/images/icons/compare.png')} alt="" />Compare
                        </Link>
                        <Link to="#" className="wishlist" title="">
                            <img src={require('../../assets/images/icons/wishlist.png')} alt="" />Wishlist
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard