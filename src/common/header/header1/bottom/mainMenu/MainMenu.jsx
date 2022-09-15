import React from 'react'
import { Link } from 'react-router-dom';
const MainMenu = () => {
  return (
    <div className="nav-wrap">
									<div id="mainnav" className="mainnav">
										<ul className="menu">
											<li className="column-1">
												<Link to="index.html" title="">Home</Link>
												<ul className="submenu">
													<li>
														<Link to="index.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Home Layout 01</Link>
													</li>
													<li>
														<Link to="index-v2.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Home Layout 02</Link>
													</li>
													<li>
														<Link to="index-v3.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Home Layout 03</Link>
													</li>
													<li>
														<Link to="index-v4.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Home Layout 04</Link>
													</li>
													<li>
														<Link to="index-v5.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Home Layout 05</Link>
													</li>
													<li>
														<Link to="index-v6.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Home Layout 06</Link>
													</li>
													<li>
														<Link to="index-v7.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Home Layout 07</Link>
													</li>
													<li>
														<Link to="index-v8.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Home Layout 08</Link>
													</li>
													<li>
														<Link to="index-v9.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Home Layout 09</Link>
													</li>
													<li>
														<Link to="index-v10.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Home Layout 10</Link>
													</li>
												</ul>
											</li>
											<li className="column-1">
												<Link to="shop.html" title="">Shop</Link>
												<ul className="submenu">
													<li>
														<Link to="shop.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Shop left sidebar</Link>
													</li>
													<li>
														<Link to="shop-v2.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Shop right sidebar</Link>
													</li>
													<li>
														<Link to="shop-v3.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Shop list view</Link>
													</li>
													<li>
														<Link to="shop-v4.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Shop full width</Link>
													</li>
													<li>
														<Link to="shop-v5.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Shop 03 column</Link>
													</li>
													<li>
														<Link to="shop-cart.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Shop cart</Link>
													</li>
													<li>
														<Link to="shop-checkout.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Shop checkout</Link>
													</li>
												</ul>
											</li>
											<li className="column-1">
												<Link to="#" title="">Features</Link>
												<ul className="submenu">
													<li>
														<Link to="#" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Home Theater Systems</Link>
													</li>
													<li>
														<Link to="#" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Receivers & Amplifiers</Link>
													</li>
													<li>
														<Link to="#" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Speakers</Link>
													</li>
													<li>
														<Link to="#" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>CD Players & Turntables</Link>
													</li>
													<li>
														<Link to="#" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>High-Resolution Audio</Link>
													</li>
													<li>
														<Link to="#" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>4K Ultra HD TVs</Link>
													</li>
												</ul>
											</li>
											<li className="has-mega-menu">
												<Link to="#" title="">Electronic</Link>
												<div className="submenu">
													<div className="row">
														<div className="col-lg-3 col-md-12">
															<h3 className="cat-title">Accessories</h3>
															<ul className="submenu-child">
																<li>
																	<Link to="#" title="">Electronics</Link>
																</li>
																<li>
																	<Link to="#" title="">Furniture</Link>
																</li>
																<li>
																	<Link to="#" title="">Accessories</Link>
																</li>
																<li>
																	<Link to="#" title="">Divided</Link>
																</li>
																<li>
																	<Link to="#" title="">Everyday Fashion</Link>
																</li>
																<li>
																	<Link to="#" title="">Modern ClassNameic</Link>
																</li>
																<li>
																	<Link to="#" title="">Party</Link>
																</li>
															</ul>
															<div className="show">
																<Link to="#" title="">Shop All</Link>
															</div>
														</div>
														<div className="col-lg-3 col-md-12">
															<h3 className="cat-title">Laptop And Computer</h3>
															<ul className="submenu-child">
																<li>
																	<Link to="#" title="">Networking & Internet Devices</Link>
																</li>
																<li>
																	<Link to="#" title="">Laptops, Desktops & Monitors</Link>
																</li>
																<li>
																	<Link to="#" title="">Hard Drives & Memory Cards</Link>
																</li>
																<li>
																	<Link to="#" title="">Printers & Ink</Link>
																</li>
																<li>
																	<Link to="#" title="">Networking & Internet Devices</Link>
																</li>
																<li>
																	<Link to="#" title="">Computer Accessories</Link>
																</li>
																<li>
																	<Link to="#" title="">Software</Link>
																</li>
															</ul>
															<div className="show">
																<Link to="#" title="">Shop All</Link>
															</div>
														</div>
														<div className="col-lg-4 col-md-12">
															<h3 className="cat-title">Audio & Video</h3>
															<ul className="submenu-child">
																<li>
																	<Link to="#" title="">Headphones & Speakers</Link>
																</li>
																<li>
																	<Link to="#" title="">Home Entertainment Systems</Link>
																</li>
																<li>
																	<Link to="#" title="">MP3 & Media Players</Link>
																</li>
															</ul>
															<div className="show">
																<Link to="#" title="">Shop All</Link>
															</div>
														</div>
														<div className="col-lg-2 col-md-12">
															<h3 className="cat-title">Home Audio</h3>
															<ul className="submenu-child">
																<li>
																	<Link to="#" title="">Home Theater Systems</Link>
																</li>
																<li>
																	<Link to="#" title="">Receivers & Amplifiers</Link>
																</li>
																<li>
																	<Link to="#" title="">Speakers</Link>
																</li>
																<li>
																	<Link to="#" title="">CD Players & Turntables</Link>
																</li>
																<li>
																	<Link to="#" title="">High-Resolution Audio</Link>
																</li>
																<li>
																	<Link to="#" title="">4K Ultra HD TVs</Link>
																</li>
															</ul>
															<div className="show">
																<Link to="#" title="">Shop All</Link>
															</div>
														</div>
													</div>
													<div className="row">
														<div className="col-md-6">
															<div className="banner-box">
																<div className="inner-box">
																	<Link to="#" title="">
																		<img src={require('../../../../../assets/images/banner_boxes/submenu-01.png')} alt="" />
																	</Link>
																</div>
															</div>
														</div>
														<div className="col-md-6">
															<div className="banner-box">
																<div className="inner-box">
																	<Link to="#" title="">
																		<img src={require('../../../../../assets/images/banner_boxes/submenu-02.png')} alt="" />
																	</Link>
																</div>
															</div>
														</div>
													</div>
												</div>
											</li>
											<li className="column-1">
												<Link to="#" title="">Pages</Link>
												<ul className="submenu">
													<li>
														<Link to="about.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>About</Link>
													</li>
													<li>
														<Link to="404.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>404 Page</Link>
													</li>
													<li>
														<Link to="brands.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Brands Page</Link>
													</li>
													<li>
														<Link to="categories.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Categories 01</Link>
													</li>
													<li>
														<Link to="categories-v2.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Categories 02</Link>
													</li>
													<li>
														<Link to="element.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Element</Link>
													</li>
													<li>
														<Link to="faq.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>FAQ</Link>
													</li>
													<li>
														<Link to="order-tracking.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Order Tracking</Link>
													</li>
													<li>
														<Link to="term-condition.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Terms & Conditions</Link>
													</li>
													<li>
														<Link to="single-product.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Single Product 01</Link>
													</li>
													<li>
														<Link to="single-product-v2.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Single Product 02</Link>
													</li>
													<li>
														<Link to="single-product-v3.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Single Product 03</Link>
													</li>
													<li>
														<Link to="single-product-v4.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Single Product 04</Link>
													</li>
													<li>
														<Link to="single-product-v5.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Single Product 05</Link>
													</li>
												</ul>
											</li>
											<li className="column-1">
												<Link to="blog.html" title="">Blog</Link>
												<ul className="submenu">
													<li>
														<Link to="blog.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Blog left sidebar</Link>
													</li>
													<li>
														<Link to="blog-v2.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Blog right sidebar</Link>
													</li>
													<li>
														<Link to="blog-v3.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Blog list</Link>
													</li>
													<li>
														<Link to="blog-v4.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Blog 02 column</Link>
													</li>
													<li>
														<Link to="blog-v5.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Blog full width</Link>
													</li>
													<li>
														<Link to="blog-single.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Blog single</Link>
													</li>
												</ul>
											</li>
											<li className="column-1">
												<Link to="contact.html" title="">Contact</Link>
												<ul className="submenu">
													<li>
														<Link to="contact.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Contact 01</Link>
													</li>
													<li>
														<Link to="contact-v2.html" title=""><i className="fa fa-angle-right" aria-hidden="true"></i>Contact 02</Link>
													</li>
												</ul>
											</li>
										</ul>
									</div>
								</div>
  )
}

export default MainMenu