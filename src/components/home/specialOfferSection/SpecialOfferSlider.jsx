import React from 'react';
import { Link } from 'react-router-dom';

const SpecialOfferSlider = () => {
  return (
    <div class="col-lg-3 col-md-4">
							<div class="sidebar">
								<div class="widget widget-count">
									<div class="widget-title">
										<h3>Special Offer</h3>
									</div>
									<div class="counter style1 v1">
										<span class="sale">Save $60.00</span>
										<div class="counter-content">
											<div class="box-content">
												<div class="box-image owl-carousel-1">
													<Link to="#" title="">
														<img src={require('../../../assets/images/banner_boxes/05.png')} alt=""/>
													</Link>
													<Link to="#" title="">
														<img src={require('../../../assets/images/banner_boxes/05.png')} alt=""/>
													</Link>
													<Link to="#" title="">
														<img src={require('../../../assets/images/banner_boxes/05.png')} alt=""/>
													</Link>
												</div>
												<div class="product-name">
													<Link to="#" title="">Harman Kardon</Link>
												</div>
												<div class="price">
													<span class="sale">$1,250.00</span>
													<span class="regular">$2,999.00</span>
												</div>
											</div>
											<div class="count-down">
												<div class="square">
													<div class="numb">
														14
													</div>
													<div class="text">
														DAYS
													</div>
												</div>
												<div class="square">
													<div class="numb">
														09
													</div>
													<div class="text">
														HOURS
													</div>
												</div>
												<div class="square">
													<div class="numb">
														23
													</div>
													<div class="text">
														SECS
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="widget widget-products">
									<div class="widget-title">
										<h3>Best Seller</h3>
									</div>
									<ul class="product-list">
										<li>
											<div class="img-product">
												<Link to="#" title="">
													<img src={require('../../../assets/images/blog/14.jpg')} alt=""/>
												</Link>
											</div>
											<div class="info-product">
												<div class="name">
													<Link to="#" title="">Razer RZ02-01071 <br />500-R3M1</Link>
												</div>
												<div class="queue">
													<i class="fa fa-star" aria-hidden="true"/>
													<i class="fa fa-star" aria-hidden="true"/>
													<i class="fa fa-star" aria-hidden="true"/>
													<i class="fa fa-star" aria-hidden="true"/>
													<i class="fa fa-star" aria-hidden="true"/>
												</div>
												<div class="price">
													<span class="sale">$50.00</span>
													<span class="regular">$2,999.00</span>
												</div>
											</div>
										</li>	
										<li>
											<div class="img-product">
												<Link to="#" title="">
													<img src={require('../../../assets/images/blog/13.jpg')} alt=""/>
												</Link>
											</div>
											<div class="info-product">
												<div class="name">
													<Link to="#" title="">Notebook Black Spire <br />V Nitro VN7-591G</Link>
												</div>
												<div class="queue">
													<i class="fa fa-star" aria-hidden="true"/>
													<i class="fa fa-star" aria-hidden="true"/>
													<i class="fa fa-star" aria-hidden="true"/>
													<i class="fa fa-star" aria-hidden="true"/>
													<i class="fa fa-star" aria-hidden="true"/>
												</div>
												<div class="price">
													<span class="sale">$24.00</span>
													<span class="regular">$2,999.00</span>
												</div>
											</div>
										</li>
										<li>
											<div class="img-product">
												<Link to="#" title="">
													<img src={require('../../../assets/images/blog/12.jpg')} alt=""/>
												</Link>
											</div>
											<div class="info-product">
												<div class="name">
													<Link to="#" title="">Apple iPad Mini <br />G2356</Link>
												</div>
												<div class="queue">
													<i class="fa fa-star" aria-hidden="true"/>
													<i class="fa fa-star" aria-hidden="true"/>
													<i class="fa fa-star" aria-hidden="true"/>
													<i class="fa fa-star" aria-hidden="true"/>
													<i class="fa fa-star" aria-hidden="true"/>
												</div>
												<div class="price">
													<span class="sale">$90.00</span>
													<span class="regular">$2,999.00</span>
												</div>
											</div>
										</li>	
									</ul>
								</div>
								<div class="widget widget-accessories">
									<div class="widget-title">
										<h3>Accessories</h3>
									</div>
									<div class="owl-carousel-7">
										<div class="product-box style2">
											<div class="imagebox">
												<div class="box-image">
													<Link to="#" title="">
														<img src={require('../../../assets/images/product/other/06.jpg')} alt=""/>
													</Link>
												</div>
												<div class="box-content">
													<div class="cat-name">
														<Link to="#" title="">Cameras</Link>
													</div>
													<div class="product-name">
														<Link to="#" title="">New X5C-1 2.4Ghz Gyro<br />RC Quadcopter Drone</Link>
													</div>
													<div class="price">
														<span class="sale">$2,009.00</span>
														<span class="regular">$2,999.00</span>
													</div>
												</div>
											</div>
										</div>
										<div class="product-box style2">
											<div class="imagebox">
												<div class="box-image">
													<Link to="#" title="">
														<img src={require('../../../assets/images/product/other/05.jpg')} alt=""/>
													</Link>
												</div>
												<div class="box-content">
													<div class="cat-name">
														<Link to="#" title="">Cameras</Link>
													</div>
													<div class="product-name">
														<Link to="#" title="">New X5C-1 2.4Ghz Gyro<br />RC Quadcopter Drone</Link>
													</div>
													<div class="price">
														<span class="sale">$2,009.00</span>
														<span class="regular">$2,999.00</span>
													</div>
												</div>
											</div>
										</div>
										<div class="product-box style2">
											<div class="imagebox">
												<div class="box-image">
													<Link to="#" title="">
														<img src={require('../../../assets/images/product/other/06.jpg')} alt=""/>
													</Link>
												</div>
												<div class="box-content">
													<div class="cat-name">
														<Link to="#" title="">Cameras</Link>
													</div>
													<div class="product-name">
														<Link to="#" title="">New X5C-1 2.4Ghz Gyro<br />RC Quadcopter Drone</Link>
													</div>
													<div class="price">
														<span class="sale">$2,009.00</span>
														<span class="regular">$2,999.00</span>
													</div>
												</div>
											</div>
										</div>
										<div class="product-box style2">
											<div class="imagebox">
												<div class="box-image">
													<Link to="#" title="">
														<img src={require('../../../assets/images/product/other/05.jpg')} alt=""/>
													</Link>
												</div>
												<div class="box-content">
													<div class="cat-name">
														<Link to="#" title="">Cameras</Link>
													</div>
													<div class="product-name">
														<Link to="#" title="">New X5C-1 2.4Ghz Gyro<br />RC Quadcopter Drone</Link>
													</div>
													<div class="price">
														<span class="sale">$2,009.00</span>
														<span class="regular">$2,999.00</span>
													</div>
												</div>
											</div>
										</div>
									</div>	
								</div>
								<div class="widget banner-box">
									<div class="inner-box">
										<Link to="#" title="">
											<img src={require('../../../assets/images/banner_boxes/06.png')} alt=""/>
										</Link>
									</div>
								</div>
							</div>
						</div>
  )
}

export default SpecialOfferSlider