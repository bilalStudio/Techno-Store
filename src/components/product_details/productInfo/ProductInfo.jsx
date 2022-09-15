import React from 'react';
import { Link } from 'react-router-dom';
const ProductInfo=(props)=> {
    return (
        <section className="flat-product-detail">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="flexslider">
                        <ul className="slides">
                            <li data-thumb="images/product/flexslider/thumb/2.jpg">
                              <Link to='#' id="zoom" className='zoom'>
                                <img src={require('../../../assets/images/product/flexslider/big-size.jpg')} alt='' width='400' height='300' /></Link>
                              <span>NEW</span>
                            </li>
                            <li data-thumb="images/product/flexslider/thumb/3.jpg">
                              <Link to='#' id="zoom1" className='zoom'>
                                <img src={require('../../../assets/images/product/flexslider/big-size.jpg')} alt='' width='400' height='300' /></Link>
                            </li>
                            <li data-thumb="images/product/flexslider/thumb/4.jpg">
                              <Link to='#' id="zoom2" className='zoom'>
                                <img src={require('../../../assets/images/product/flexslider/big-size.jpg')} alt='' width='400' height='300' /></Link>
                              <span>NEW</span>
                            </li>
                            <li data-thumb="images/product/flexslider/thumb/5.jpg">
                              <Link to='#' id="zoom3" className='zoom'>
                                <img src={require('../../../assets/images/product/flexslider/big-size.jpg')} alt='' width='400' height='300' /></Link>
                            </li>
                            <li data-thumb="images/product/flexslider/thumb/6.jpg">
                              <Link to='#' id="zoom4" className='zoom'>
                                <img src={require('../../../assets/images/product/flexslider/big-size.jpg')} alt='' width='400' height='300' /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="col-md-6">
                    <div className="product-detail style4">
                        <div className="header-detail">
                            <h4 className="name">Warch 42 mm Smart Watches</h4>
                            <div className="category">
                                Smart Watches
                            </div>
                            <div className="reviewed">
                                <div className="review">
                                    <div className="queue">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <div className="text">
                                        <span>3 Reviews</span>
                                        <span className="add-review">Add Your Review</span>
                                    </div>
                                </div>
                                <div className="status-product">
                                    Availablity <span>In stock</span>
                                </div>
                            </div>
                        </div>
                        <div className="content-detail">
                            <div className="price">
                                <div className="regular">
                                    $2,999.00
                                </div>
                                <div className="sale">
                                    $1,999.00
                                </div>
                            </div>
                            <div className="info-text">
                                Vivamus in tempor eros. Phasellus rhoncus in nunc sit amet mattis. Integer in ipsum vestibulum, molestie arcu ac, efficitur tellus. Phasellus id vulputate erat.
                            </div>
                            <div className="product-id">
                                SKU: <span className="id">FW511948218</span>
                            </div>
                        </div>
                        <div className="footer-detail">
                            <div className="quanlity-box">
                                <div className="colors">
                                    <select name="color">
                                        <option value="">Select Color</option>
                                        <option value="">Black</option>
                                        <option value="">Red</option>
                                        <option value="">White</option>
                                    </select>
                                </div>
                                <div className="quanlity">
                                    <span className="btn-down"></span>
                                    <input type="number" name="number" value="" min="1" max="100" placeholder="Quanlity"/>
                                    <span className="btn-up"></span>
                                </div>
                            </div>
                            <div className="box-cart style2">
                                <div className="btn-add-cart">
                                    <Link to="#" title=""><img src={require('../../../assets/images/icons/add-cart.png')} alt="" />Add to Cart</Link>
                                </div>
                                <div className="compare-wishlist">
                                    <Link to="compare.html" className="compare" title=""><img src={require('../../../assets/images/icons/compare.png')} alt="" />Compare</Link>
                                    <Link to="compare.html" className="wishlist" title=""><img src={require('../../../assets/images/icons/wishlist.png')} alt="" />Wishlist</Link>
                                </div>
                            </div>
                            <div className="social-single">
                                <span>SHARE</span>
                                <ul className="social-list style2">
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
                    </div> 
                </div>
            </div>
        </div>
    </section> 
    );
}

export default ProductInfo;