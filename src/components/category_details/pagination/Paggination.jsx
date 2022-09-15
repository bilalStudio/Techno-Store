import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../../../common/cards/ProductCard'

const Paggination = () => {
  return (
    <div className="col-lg-9 col-md-8">
    <div className="main-shop">
        <div className="slider owl-carousel-16">
            <div className="slider-item style9">
                <div className="item-text">
                    <div className="header-item">
                        <p>You can build the banner for other category</p>
                        <h2 className="name">Shop Banner</h2>
                    </div>
                </div>
                <div className="item-image">
                    <img src={require('../../../assets/images/banner_boxes/07.png')} alt="" />
                </div>
                <div className="clearfix"></div>
            </div>
            <div className="slider-item style9">
                <div className="item-text">
                    <div className="header-item">
                        <p>You can build the banner for other category</p>
                        <h2 className="name">Shop Banner</h2>
                    </div>
                </div>
                <div className="item-image">
                    <img src={require('../../../assets/images/banner_boxes/07.png')} alt="" />
                </div>
                <div className="clearfix"></div>
            </div>

        </div>
        <div className="wrap-imagebox">
            <div className="flat-row-title">
                <h3>Mobile & Tablet</h3>
                <span>
                    Showing 1–15 of 20 results
                </span>
                <div className="clearfix"></div>
            </div>
            <div className="sort-product">
                <ul className="icons">
                    <li>
                        <img src={require('../../../assets/images/icons/list-1.png')} alt="" />
                    </li>
                    <li>
                        <img src={require('../../../assets/images/icons/list-2.png')} alt="" />
                    </li>
                </ul>
                <div className="sort">
                    <div className="popularity">
                        <select name="popularity /">
                            <option value="">Sort by popularity</option>
                            <option value="">Sort by popularity</option>
                            <option value="">Sort by popularity</option>
                            <option value="">Sort by popularity</option>
                        </select>
                    </div>
                    <div className="showed">
                        <select name="showed">
                      <option value="">Show 15</option>
                            <option value="">Show 15</option>
                            <option value="">Show 15</option>
                            <option value="">Show 15</option>
                        </select>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
            <div className="tab-product">
                <div className="row sort-box">
                    <div className="col-lg-4 col-sm-6">
                        <ProductCard
                        img1={require('../../../assets/images/product/other/01.jpg')}
                        img2={require('../../../assets/images/product/other/01.jpg')}
                        img3={require('../../../assets/images/product/other/01.jpg')}
                        title={'Laptops'}
                        subtitle={'Apple iPad Mini'}
                        sale={'$1,250.00'}
                        regular={'$2,999.00'}
                        />
                    </div>

                    <div className="col-lg-4 col-sm-6">
                    <ProductCard
                        img1={require('../../../assets/images/product/other/03.jpg')}
                        img2={require('../../../assets/images/product/other/03.jpg')}
                        img3={require('../../../assets/images/product/other/03.jpg')}
                        title={'Headphones'}
                        subtitle={'Apple iPad Mini'}
                        sale={'$1,250.00'}
                        regular={'$2,999.00'}
                        />
                    </div>

                    <div className="col-lg-4 col-sm-6">
                    <ProductCard
                        img1={require('../../../assets/images/product/other/04.jpg')}
                        img2={require('../../../assets/images/product/other/04.jpg')}
                        img3={require('../../../assets/images/product/other/04.jpg')}
                        title={'Laptops'}
                        subtitle={'Apple iPad Mini'}
                        sale={'$1,250.00'}
                        regular={'$2,999.00'}
                        />
                       
                    </div>
                    <div className="col-lg-4 col-sm-6">
                    <ProductCard
                        img1={require('../../../assets/images/product/other/06.jpg')}
                        img2={require('../../../assets/images/product/other/06.jpg')}
                        img3={require('../../../assets/images/product/other/06.jpg')}
                        title={'Laptops'}
                        subtitle={'Apple iPad Mini'}
                        sale={'$1,250.00'}
                        regular={'$2,999.00'}
                        />
                    </div>
                    <div className="col-lg-4 col-sm-6">
                    <ProductCard
                        img1={require('../../../assets/images/product/other/07.jpg')}
                        img2={require('../../../assets/images/product/other/07.jpg')}
                        img3={require('../../../assets/images/product/other/07.jpg')}
                        title={'Laptops'}
                        subtitle={'Apple iPad Mini'}
                        sale={'$1,250.00'}
                        regular={'$2,999.00'}
                        />
                    </div>
                    <div className="col-lg-4 col-sm-6">
                    <ProductCard
                        img1={require('../../../assets/images/product/other/08.jpg')}
                        img2={require('../../../assets/images/product/other/08.jpg')}
                        img3={require('../../../assets/images/product/other/08.jpg')}
                        title={'Laptops'}
                        subtitle={'Apple iPad Mini'}
                        sale={'$1,250.00'}
                        regular={'$2,999.00'}
                        />
                        
                    </div>
                    <div className="col-lg-4 col-sm-6">
                    <ProductCard
                        img1={require('../../../assets/images/product/other/01.jpg')}
                        img2={require('../../../assets/images/product/other/01.jpg')}
                        img3={require('../../../assets/images/product/other/01.jpg')}
                        title={'Laptops'}
                        subtitle={'Apple iPad Mini'}
                        sale={'$1,250.00'}
                        regular={'$2,999.00'}
                        />
                    </div>
                    <div className="col-lg-4 col-sm-6">
                    <ProductCard
                        img1={require('../../../assets/images/product/other/05.jpg')}
                        img2={require('../../../assets/images/product/other/05.jpg')}
                        img3={require('../../../assets/images/product/other/05.jpg')}
                        title={'Laptops'}
                        subtitle={'Apple iPad Mini'}
                        sale={'$1,250.00'}
                        regular={'$2,999.00'}
                        />
                    </div>
                    <div className="col-lg-4 col-sm-6">
                    <ProductCard
                        img1={require('../../../assets/images/product/other/l03.jpg')}
                        img2={require('../../../assets/images/product/other/l03.jpg')}
                        img3={require('../../../assets/images/product/other/l03.jpg')}
                        title={'Laptops'}
                        subtitle={'Apple iPad Mini'}
                        sale={'$1,250.00'}
                        regular={'$2,999.00'}
                        />
                    </div>
                    <div className="col-lg-4 col-sm-6">
                    <ProductCard
                        img1={require('../../../assets/images/product/other/l02.jpg')}
                        img2={require('../../../assets/images/product/other/l02.jpg')}
                        img3={require('../../../assets/images/product/other/l02.jpg')}
                        title={'Laptops'}
                        subtitle={'Apple iPad Mini'}
                        sale={'$1,250.00'}
                        regular={'$2,999.00'}
                        />
                    </div>
                    <div className="col-lg-4 col-sm-6">
                    <ProductCard
                        img1={require('../../../assets/images/product/other/l04.jpg')}
                        img2={require('../../../assets/images/product/other/l04.jpg')}
                        img3={require('../../../assets/images/product/other/l04.jpg')}
                        title={'Laptops'}
                        subtitle={'Apple iPad Mini'}
                        sale={'$1,250.00'}
                        regular={'$2,999.00'}
                        />
                    </div>
                    <div className="col-lg-4 col-sm-6">
                    <ProductCard
                        img1={require('../../../assets/images/product/other/l05.jpg')}
                        img2={require('../../../assets/images/product/other/l05.jpg')}
                        img3={require('../../../assets/images/product/other/l05.jpg')}
                        title={'Laptops'}
                        subtitle={'Apple iPad Mini'}
                        sale={'$1,250.00'}
                        regular={'$2,999.00'}
                        />
                    </div>
                </div>
                {/* <div className="sort-box">
                    
                    <div className="product-box style3">
                        <div className="imagebox style1 v3">
                            <div className="box-image">
                                <Link to="#" title="">
                                    <img src={require('../../../assets/images/product/other/s02.jpg')} alt="" />
                                </Link>
                            </div>
                            <div className="box-content">
                                <div className="cat-name">
                                    <Link to="#" title="">Cameras</Link>
                                </div>
                                <div className="product-name">
                                    <Link to="#" title="">Apple iPad Air 2 32GB 9.7"<br />Tablet</Link>
                                </div>
                                <div className="status">
                                    Availablity: In stock
                                </div>
                                <div className="info">
                                    <p>
                                        The iPhone 5c replaces the iPhone 5 in the Apple stable, inheriting its internals, like the A6 processor, 4" screen...
                                    </p>
                                </div>
                            </div>
                            <div className="box-price">
                                <div className="price">
                                    <span className="regular">$2,999.00</span>
                                    <span className="sale">$1,999.00</span>
                                </div>
                                <div className="btn-add-cart">
                                    <Link to="#" title="">
                                        <img src={require('../../../assets/images/icons/add-cart.png')} alt="" />Add to Cart
                                    </Link>
                                </div>
                                <div className="compare-wishlist">
                                    <Link to="#" className="compare" title="">
                                        <img src={require('../../../assets/images/icons/compare.png')} alt="" />Compare
                                    </Link>
                                    <Link to="#" className="wishlist" title="">
                                        <img src={require('../../../assets/images/icons/wishlist.png')} alt="" />Wishlist
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-box style3">
                        <div className="imagebox style1 v3">
                            <div className="box-image">
                                <Link to="#" title="">
                                    <img src={require('../../../assets/images/product/other/01-v3.jpg')} alt="" />
                                </Link>
                            </div>
                            <div className="box-content">
                                <div className="cat-name">
                                    <Link to="#" title="">Cameras</Link>
                                </div>
                                <div className="product-name">
                                    <Link to="#" title="">New X5C-1 2.4Ghz Gyro <br />RC Quadcopter Drone</Link>
                                </div>
                                <div className="status">
                                    Availablity: In stock
                                </div>
                                <div className="info">
                                    <p>
                                        The iPhone 5c replaces the iPhone 5 in the Apple stable, inheriting its internals, like the A6 processor, 4" screen...
                                    </p>
                                </div>
                            </div>
                            <div className="box-price">
                                <div className="price">
                                    <span className="regular">$2,999.00</span>
                                    <span className="sale">$1,999.00</span>
                                </div>
                                <div className="btn-add-cart">
                                    <Link to="#" title="">
                                        <img src={require('../../../assets/images/icons/add-cart.png')} alt="" />Add to Cart
                                    </Link>
                                </div>
                                <div className="compare-wishlist">
                                    <Link to="#" className="compare" title="">
                                        <img src={require('../../../assets/images/icons/compare.png')} alt="" />Compare
                                    </Link>
                                    <Link to="#" className="wishlist" title="">
                                        <img src={require('../../../assets/images/icons/wishlist.png')} alt="" />Wishlist
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-box style3">
                        <div className="imagebox style1 v3">
                            <div className="box-image">
                                <Link to="#" title="">
                                    <img src={require('../../../assets/images/product/other/02-v3.jpg')} alt="" />
                                </Link>
                            </div>
                            <div className="box-content">
                                <div className="cat-name">
                                    <Link to="#" title="">Cameras</Link>
                                </div>
                                <div className="product-name">
                                    <Link to="#" title="">Apple İmac Z0SC4824<br />Retina</Link>
                                </div>
                                <div className="status">
                                    Availablity: In stock
                                </div>
                                <div className="info">
                                    <p>
                                        The iPhone 5c replaces the iPhone 5 in the Apple stable, inheriting its internals, like the A6 processor, 4" screen...
                                    </p>
                                </div>
                            </div>
                            <div className="box-price">
                                <div className="price">
                                    <span className="regular">$2,999.00</span>
                                    <span className="sale">$1,999.00</span>
                                </div>
                                <div className="btn-add-cart">
                                    <Link to="#" title="">
                                        <img src={require('../../../assets/images/icons/add-cart.png')} alt="" />Add to Cart
                                    </Link>
                                </div>
                                <div className="compare-wishlist">
                                    <Link to="#" className="compare" title="">
                                        <img src={require('../../../assets/images/icons/compare.png')} alt="" />Compare
                                    </Link>
                                    <Link to="#" className="wishlist" title="">
                                        <img src={require('../../../assets/images/icons/wishlist.png')} alt="" />Wishlist
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-box style3">
                        <div className="imagebox style1 v3">
                            <div className="box-image">
                                <Link to="#" title="">
                                    <img src={require('../../../assets/images/product/other/03-v3.jpg')} alt="" />
                                </Link>
                            </div>
                            <div className="box-content">
                                <div className="cat-name">
                                    <Link to="#" title="">Cameras</Link>
                                </div>
                                <div className="product-name">
                                    <Link to="#" title="">New X5C-1 2.4Ghz Gyro <br />RC Quadcopter Drone</Link>
                                </div>
                                <div className="status">
                                    Availablity: In stock
                                </div>
                                <div className="info">
                                    <p>
                                        The iPhone 5c replaces the iPhone 5 in the Apple stable, inheriting its internals, like the A6 processor, 4" screen...
                                    </p>
                                </div>
                            </div>
                            <div className="box-price">
                                <div className="price">
                                    <span className="regular">$2,999.00</span>
                                    <span className="sale">$1,999.00</span>
                                </div>
                                <div className="btn-add-cart">
                                    <Link to="#" title="">
                                        <img src={require('../../../assets/images/icons/add-cart.png')} alt="" />Add to Cart
                                    </Link>
                                </div>
                                <div className="compare-wishlist">
                                    <Link to="#" className="compare" title="">
                                        <img src={require('../../../assets/images/icons/compare.png')} alt="" />Compare
                                    </Link>
                                    <Link to="#" className="wishlist" title="">
                                        <img src={require('../../../assets/images/icons/wishlist.png')} alt="" />Wishlist
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-box style3">
                        <div className="imagebox style1 v3">
                            <div className="box-image">
                                <Link to="#" title="">
                                    <img src={require('../../../assets/images/product/other/04-v3.jpg')} alt="" />
                                </Link>
                            </div>
                            <div className="box-content">
                                <div className="cat-name">
                                    <Link to="#" title="">Cameras</Link>
                                </div>
                                <div className="product-name">
                                    <Link to="#" title="">Apple iPad Air 2 32GB 9.7"<br />Tablet</Link>
                                </div>
                                <div className="status">
                                    Availablity: In stock
                                </div>
                                <div className="info">
                                    <p>
                                        The iPhone 5c replaces the iPhone 5 in the Apple stable, inheriting its internals, like the A6 processor, 4" screen...
                                    </p>
                                </div>
                            </div>
                            <div className="box-price">
                                <div className="price">
                                    <span className="regular">$2,999.00</span>
                                    <span className="sale">$1,999.00</span>
                                </div>
                                <div className="btn-add-cart">
                                    <Link to="#" title="">
                                        <img src={require('../../../assets/images/icons/add-cart.png')} alt="" />Add to Cart
                                    </Link>
                                </div>
                                <div className="compare-wishlist">
                                    <Link to="#" className="compare" title="">
                                        <img src={require('../../../assets/images/icons/compare.png')} alt="" />Compare
                                    </Link>
                                    <Link to="#" className="wishlist" title="">
                                        <img src={require('../../../assets/images/icons/wishlist.png')} alt="" />Wishlist
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{height: "9px"}}></div>
                </div> */}
            </div>
        </div>
        <div className="blog-pagination">
            <span>
                Showing 1–15 of 20 results
            </span>
            <ul className="flat-pagination style1">
                <li className="prev">
                    <Link to="#" title="">
                        <img src={require('../../../assets/images/icons/left-1.png')} alt="" />Prev Page
                    </Link>
                </li>
                <li>
                    <Link to="#" className="waves-effect" title="">01</Link>
                </li>
                <li>
                    <Link to="#" className="waves-effect" title="">02</Link>
                </li>
                <li className="active">
                    <Link to="#" className="waves-effect" title="">03</Link>
                </li>
                <li>
                    <Link to="#" className="waves-effect" title="">04</Link>
                </li>
                <li className="next">
                    <Link to="#" title="">
                        Next Page<img src={require('../../../assets/images/icons/right-1.png')} alt="" />
                    </Link>
                </li>
            </ul>
            <div className="clearfix"></div>
        </div>
    </div>
</div> 
  )
}

export default Paggination