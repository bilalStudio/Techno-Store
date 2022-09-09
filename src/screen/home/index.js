import React from "react";
import { Link } from "react-router-dom";
import Container from "../../common/Container";
import FeactureList from "../../components/home/feactureList/FeactureList";
import TopSlider from "../../components/home/homeSliderTop/TopSlider";
import SpecialOfferSlider
 from "../../components/home/specialOfferSection/SpecialOfferSlider";

const Home=()=>{
    return(
        <>
       <Container>
       <TopSlider/>
			 
             {/* Feacture Section */}
			<section class="flat-row flat-iconbox">
				<div class="container">
					<div class="row">
                    <FeactureList img={require('../../assets/images/icons/car.png')} title={'Worldwide Shipping'} />
                    <FeactureList img={require('../../assets/images/icons/order.png')} title={'Order Online Service'} />
                    <FeactureList img={require('../../assets/images/icons/payment.png')} title={'Payment'} />
                    <FeactureList img={require('../../assets/images/icons/return.png')} title={'Return 30 Days'} />
					</div>
				</div>
			</section>
			
			<main id="home-4">
				<div class="container">
					<div class="row">
                        {/* Special Offer Section */}
                        <SpecialOfferSlider/>
						{/* <div class="col-lg-3 col-md-4">
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
														<img src={require('../../assets/images/banner_boxes/05.png')} alt=""/>
													</Link>
													<Link to="#" title="">
														<img src={require('../../assets/images/banner_boxes/05.png')} alt=""/>
													</Link>
													<Link to="#" title="">
														<img src={require('../../assets/images/banner_boxes/05.png')} alt=""/>
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
													<img src={require('../../assets/images/blog/14.jpg')} alt=""/>
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
													<img src={require('../../assets/images/blog/13.jpg')} alt=""/>
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
													<img src={require('../../assets/images/blog/12.jpg')} alt=""/>
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
														<img src={require('../../assets/images/product/other/06.jpg')} alt=""/>
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
														<img src={require('../../assets/images/product/other/05.jpg')} alt=""/>
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
														<img src={require('../../assets/images/product/other/06.jpg')} alt=""/>
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
														<img src={require('../../assets/images/product/other/05.jpg')} alt=""/>
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
											<img src={require('../../assets/images/banner_boxes/06.png')} alt=""/>
										</Link>
									</div>
								</div>
							</div>
						</div> */}
                        
						<div class="col-lg-9 col-md-8">
							<div class="wrap-imagebox flat-imagebox">
								<div class="product-tab">
									<ul class="tab-list">
										<li class="active">New Arrivals</li>
										<li>Featured</li>
										<li>Top Selling</li>
									</ul>	
								</div>
								<div class="box-product">
									<div class="row">
										<div class="col-lg-4 col-sm-12">
											<div class="product-box style2 v1">
												<div class="imagebox">
													<div class="box-image owl-carousel-1">
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/01.jpg')} alt=""/>
														</Link>
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/01.jpg')} alt=""/>
														</Link>
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/01.jpg')} alt=""/>
														</Link>
													</div>
													<div class="box-content">
														<div class="cat-name">
															<Link to="#" title="">Laptops</Link>
														</div>
														<div class="product-name">
															<Link to="#" title="">Apple iPad Mini<br />G2356</Link>
														</div>
														<div class="price">
															<span class="sale">$1,250.00</span>
															<span class="regular">$2,999.00</span>
														</div>
													</div>
													<div class="box-bottom">
														<div class="btn-add-cart">
															<Link to="#" title="">
																<img src={require('../../assets/images/icons/add-cart.png')} alt=""/>Add to Cart
															</Link>
														</div>
														<div class="compare-wishlist">
															<Link to="#" class="compare" title="">
																<img src={require('../../assets/images/icons/compare.png')} alt=""/>Compare
															</Link>
															<Link to="#" class="wishlist" title="">
																<img src={require('../../assets/images/icons/wishlist.png')} alt=""/>Wishlist
															</Link>
														</div>
													</div>
												</div>
											</div>
											<div class="product-box style2 v1">	
												<div class="imagebox">
													<div class="box-image owl-carousel-1">
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/05.jpg')} alt=""/>
														</Link>
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/05.jpg')} alt=""/>
														</Link>
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/05.jpg')} alt=""/>
														</Link>
													</div>
													<div class="box-content">
														<div class="cat-name">
															<Link to="#" title="">Cameras</Link>
														</div>
														<div class="product-name">
															<Link to="#" title="">Apple iPad Mini<br />G2356</Link>
														</div>
														<div class="price">
															<span class="sale">$1,250.00</span>
															<span class="regular">$2,999.00</span>
														</div>
													</div>
													<div class="box-bottom">
														<div class="btn-add-cart">
															<Link to="#" title="">
																<img src={require('../../assets/images/icons/add-cart.png')} alt=""/>Add to Cart
															</Link>
														</div>
														<div class="compare-wishlist">
															<span class="compare">
																<Link to="#" title="">
																	<img src={require('../../assets/images/icons/compare.png')} alt=""/>Compare
																</Link>
															</span>
															<span class="wishlist">
																<Link to="#" title="">
																	<img src={require('../../assets/images/icons/wishlist.png')} alt=""/>Wishlist
																</Link>
															</span>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="col-lg-4 col-sm-12">	
											<div class="product-box style2 v1">
												<div class="imagebox">
													<div class="box-image owl-carousel-1">
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/02.jpg')} alt=""/>
														</Link>
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/02.jpg')} alt=""/>
														</Link>
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/02.jpg')} alt=""/>
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
													<div class="box-bottom">
														<div class="btn-add-cart">
															<Link to="#" title="">
																<img src={require('../../assets/images/icons/add-cart.png')} alt=""/>Add to Cart
															</Link>
														</div>
														<div class="compare-wishlist">
															<Link to="#" class="compare" title="">
																<img src={require('../../assets/images/icons/compare.png')} alt=""/>Compare
															</Link>
															<Link to="#" class="wishlist" title="">
																<img src={require('../../assets/images/icons/wishlist.png')} alt=""/>Wishlist
															</Link>
														</div>
													</div>
												</div>
											</div>
											<div class="product-box style2 v1">
												<div class="imagebox">
													<div class="box-image owl-carousel-1">
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/06.jpg')} alt=""/>
														</Link>
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/06.jpg')} alt=""/>
														</Link>
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/06.jpg')} alt=""/>
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
													<div class="box-bottom">
														<div class="btn-add-cart">
															<Link to="#" title="">
																<img src={require('../../assets/images/icons/add-cart.png')} alt=""/>Add to Cart
															</Link>
														</div>
														<div class="compare-wishlist">
															<Link to="#" class="compare" title="">
																<img src={require('../../assets/images/icons/compare.png')} alt=""/>Compare
															</Link>
															<Link to="#" class="wishlist" title="">
																<img src={require('../../assets/images/icons/wishlist.png')} alt=""/>Wishlist
															</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="col-lg-4 col-sm-12">	
											<div class="product-box style2 v1">
												<div class="imagebox">
													<div class="box-image owl-carousel-1">
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/03.jpg')} alt=""/>
														</Link>
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/03.jpg')} alt=""/>
														</Link>
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/03.jpg')} alt=""/>
														</Link>
													</div>
													<div class="box-content">
														<div class="cat-name">
															<Link to="#" title="">Headphones</Link>
														</div>
														<div class="product-name">
															<Link to="#" title="">Beats Solo<br />HD</Link>
														</div>
														<div class="price">
															<span class="sale">$1,936.00</span>
															<span class="regular">$2,999.00</span>
														</div>
													</div>
													<div class="box-bottom">
														<div class="btn-add-cart">
															<Link to="#" title="">
																<img src={require('../../assets/images/icons/add-cart.png')} alt=""/>Add to Cart
															</Link>
														</div>
														<div class="compare-wishlist">
															<Link to="#" class="compare" title="">
																<img src={require('../../assets/images/icons/compare.png')} alt=""/>Compare
															</Link>
															<Link to="#" class="wishlist" title="">
																<img src={require('../../assets/images/icons/wishlist.png')} alt=""/>Wishlist
															</Link>
														</div>
													</div>
												</div>
											</div>
											<div class="product-box style2 v1">
												<div class="imagebox">
													<div class="box-image owl-carousel-1">
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/07.jpg')} alt=""/>
														</Link>
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/07.jpg')} alt=""/>
														</Link>
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/07.jpg')} alt=""/>
														</Link>
													</div>
													<div class="box-content">
														<div class="cat-name">
															<Link to="#" title="">Computers</Link>
														</div>
														<div class="product-name">
															<Link to="#" title="">Apple iPad Air 2 32GB 9.7"<br />Tablet</Link>
														</div>
														<div class="price">
															<span class="sale">$5,759.68</span>
															<span class="regular">$2,999.00</span>
														</div>
													</div>
													<div class="box-bottom">
														<div class="btn-add-cart">
															<Link to="#" title="">
																<img src={require('../../assets/images/icons/add-cart.png')} alt=""/>Add to Cart
															</Link>
														</div>
														<div class="compare-wishlist">
															<Link to="#" class="compare" title="">
																<img src={require('../../assets/images/icons/compare.png')} alt=""/>Compare
															</Link>
															<Link to="#" class="wishlist" title="">
																<img src={require('../../assets/images/icons/wishlist.png')} alt=""/>Wishlist
															</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-lg-4 col-sm-12">
											<div class="product-box style2 v1">
												<div class="imagebox">
													<span class="item-new">NEW</span>
													<div class="box-image owl-carousel-1">
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/01.jpg')} alt=""/>
														</Link>
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/01.jpg')} alt=""/>
														</Link>
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/01.jpg')} alt=""/>
														</Link>
													</div>
													<div class="box-content">
														<div class="cat-name">
															<Link to="#" title="">Laptops</Link>
														</div>
														<div class="product-name">
															<Link to="#" title="">Apple iPad Mini<br />G2356</Link>
														</div>
														<div class="price">
															<span class="sale">$1,250.00</span>
															<span class="regular">$2,999.00</span>
														</div>
													</div>
													<div class="box-bottom">
														<div class="btn-add-cart">
															<Link to="#" title="">
																<img src={require('../../assets/images/icons/add-cart.png')} alt=""/>Add to Cart
															</Link>
														</div>
														<div class="compare-wishlist">
															<Link to="#" class="compare" title="">
																<img src={require('../../assets/images/icons/compare.png')} alt=""/>Compare
															</Link>
															<Link to="#" class="wishlist" title="">
																<img src={require('../../assets/images/icons/wishlist.png')} alt=""/>Wishlist
															</Link>
														</div>
													</div>
												</div>
											</div>
											<div class="product-box style2 v1">	
												<div class="imagebox">
													<div class="box-image owl-carousel-1">
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/05.jpg')} alt=""/>
														</Link>
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/05.jpg')} alt=""/>
														</Link>
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/05.jpg')} alt=""/>
														</Link>
													</div>
													<div class="box-content">
														<div class="cat-name">
															<Link to="#" title="">Cameras</Link>
														</div>
														<div class="product-name">
															<Link to="#" title="">Apple iPad Mini<br />G2356</Link>
														</div>
														<div class="price">
															<span class="sale">$1,250.00</span>
															<span class="regular">$2,999.00</span>
														</div>
													</div>
													<div class="box-bottom">
														<div class="btn-add-cart">
															<Link to="#" title="">
																<img src={require('../../assets/images/icons/add-cart.png')} alt=""/>Add to Cart
															</Link>
														</div>
														<div class="compare-wishlist">
															<span class="compare">
																<Link to="#" title="">
																	<img src={require('../../assets/images/icons/compare.png')} alt=""/>Compare
																</Link>
															</span>
															<span class="wishlist">
																<Link to="#" title="">
																	<img src={require('../../assets/images/icons/wishlist.png')} alt=""/>Wishlist
																</Link>
															</span>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="col-lg-4 col-sm-12">	
											<div class="product-box style2 v1">
												<div class="imagebox">
													<div class="box-image owl-carousel-1">
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/02.jpg')} alt=""/>
														</Link>
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/02.jpg')} alt=""/>
														</Link>
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/02.jpg')} alt=""/>
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
													<div class="box-bottom">
														<div class="btn-add-cart">
															<Link to="#" title="">
																<img src={require('../../assets/images/icons/add-cart.png')} alt=""/>Add to Cart
															</Link>
														</div>
														<div class="compare-wishlist">
															<Link to="#" class="compare" title="">
																<img src={require('../../assets/images/icons/compare.png')} alt=""/>Compare
															</Link>
															<Link to="#" class="wishlist" title="">
																<img src={require('../../assets/images/icons/wishlist.png')} alt=""/>Wishlist
															</Link>
														</div>
													</div>
												</div>
											</div>
											<div class="product-box style2 v1">
												<div class="imagebox">
													<div class="box-image owl-carousel-1">
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/06.jpg')} alt=""/>
														</Link>
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/06.jpg')} alt=""/>
														</Link>
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/06.jpg')} alt=""/>
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
													<div class="box-bottom">
														<div class="btn-add-cart">
															<Link to="#" title="">
																<img src={require('../../assets/images/icons/add-cart.png')} alt=""/>Add to Cart
															</Link>
														</div>
														<div class="compare-wishlist">
															<Link to="#" class="compare" title="">
																<img src={require('../../assets/images/icons/compare.png')} alt=""/>Compare
															</Link>
															<Link to="#" class="wishlist" title="">
																<img src={require('../../assets/images/icons/wishlist.png')} alt=""/>Wishlist
															</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="col-lg-4 col-sm-12">	
											<div class="product-box style2 v1">
												<div class="imagebox">
													<div class="box-image owl-carousel-1">
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/03.jpg')} alt=""/>
														</Link>
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/03.jpg')} alt=""/>
														</Link>
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/03.jpg')} alt=""/>
														</Link>
													</div>
													<div class="box-content">
														<div class="cat-name">
															<Link to="#" title="">Headphones</Link>
														</div>
														<div class="product-name">
															<Link to="#" title="">Beats Solo<br />HD</Link>
														</div>
														<div class="price">
															<span class="sale">$1,365.00</span>
															<span class="regular">$2,999.00</span>
														</div>
													</div>
													<div class="box-bottom">
														<div class="btn-add-cart">
															<Link to="#" title="">
																<img src={require('../../assets/images/icons/add-cart.png')} alt=""/>Add to Cart
															</Link>
														</div>
														<div class="compare-wishlist">
															<Link to="#" class="compare" title="">
																<img src={require('../../assets/images/icons/compare.png')} alt=""/>Compare
															</Link>
															<Link to="#" class="wishlist" title="">
																<img src={require('../../assets/images/icons/wishlist.png')} alt=""/>Wishlist
															</Link>
														</div>
													</div>
												</div>
											</div>
											<div class="product-box style2 v1">
												<div class="imagebox">
													<div class="box-image owl-carousel-1">
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/07.jpg')} alt=""/>
														</Link>
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/07.jpg')} alt=""/>
														</Link>
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/07.jpg')} alt=""/>
														</Link>
													</div>
													<div class="box-content">
														<div class="cat-name">
															<Link to="#" title="">Computers</Link>
														</div>
														<div class="product-name">
															<Link to="#" title="">Apple iPad Air 2 32GB 9.7"<br />Tablet</Link>
														</div>
														<div class="price">
															<span class="sale">$5,759.68</span>
															<span class="regular">$2,999.00</span>
														</div>
													</div>
													<div class="box-bottom">
														<div class="btn-add-cart">
															<Link to="#" title="">
																<img src={require('../../assets/images/icons/add-cart.png')} alt=""/>Add to Cart
															</Link>
														</div>
														<div class="compare-wishlist">
															<Link to="#" class="compare" title="">
																<img src={require('../../assets/images/icons/compare.png')} alt=""/>Compare
															</Link>
															<Link to="#" class="wishlist" title="">
																<img src={require('../../assets/images/icons/wishlist.png')} alt=""/>Wishlist
															</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-lg-4 col-sm-12">
											<div class="product-box style2 v1">
												<div class="imagebox">
													<span class="item-new">NEW</span>
													<div class="box-image owl-carousel-1">
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/01.jpg')} alt=""/>
														</Link>
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/01.jpg')} alt=""/>
														</Link>
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/01.jpg')} alt=""/>
														</Link>
													</div>
													<div class="box-content">
														<div class="cat-name">
															<Link to="#" title="">Laptops</Link>
														</div>
														<div class="product-name">
															<Link to="#" title="">Apple iPad Mini<br />G2356</Link>
														</div>
														<div class="price">
															<span class="sale">$1,250.00</span>
															<span class="regular">$2,999.00</span>
														</div>
													</div>
													<div class="box-bottom">
														<div class="btn-add-cart">
															<Link to="#" title="">
																<img src={require('../../assets/images/icons/add-cart.png')} alt=""/>Add to Cart
															</Link>
														</div>
														<div class="compare-wishlist">
															<Link to="#" class="compare" title="">
																<img src={require('../../assets/images/icons/compare.png')} alt=""/>Compare
															</Link>
															<Link to="#" class="wishlist" title="">
																<img src={require('../../assets/images/icons/wishlist.png')} alt=""/>Wishlist
															</Link>
														</div>
													</div>
												</div>
											</div>
											<div class="product-box style2 v1">	
												<div class="imagebox">
													<div class="box-image owl-carousel-1">
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/05.jpg')} alt=""/>
														</Link>
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/05.jpg')} alt=""/>
														</Link>
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/05.jpg')} alt=""/>
														</Link>
													</div>
													<div class="box-content">
														<div class="cat-name">
															<Link to="#" title="">Cameras</Link>
														</div>
														<div class="product-name">
															<Link to="#" title="">Apple iPad Mini<br />G2356</Link>
														</div>
														<div class="price">
															<span class="sale">$1,250.00</span>
															<span class="regular">$2,999.00</span>
														</div>
													</div>
													<div class="box-bottom">
														<div class="btn-add-cart">
															<Link to="#" title="">
																<img src={require('../../assets/images/icons/add-cart.png')} alt=""/>Add to Cart
															</Link>
														</div>
														<div class="compare-wishlist">
															<span class="compare">
																<Link to="#" title="">
																	<img src={require('../../assets/images/icons/compare.png')} alt=""/>Compare
																</Link>
															</span>
															<span class="wishlist">
																<Link to="#" title="">
																	<img src={require('../../assets/images/icons/wishlist.png')} alt=""/>Wishlist
																</Link>
															</span>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="col-lg-4 col-sm-12">	
											<div class="product-box style2 v1">
												<div class="imagebox">
													<div class="box-image owl-carousel-1">
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/02.jpg')} alt=""/>
														</Link>
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/02.jpg')} alt=""/>
														</Link>
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/02.jpg')} alt=""/>
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
													<div class="box-bottom">
														<div class="btn-add-cart">
															<Link to="#" title="">
																<img src={require('../../assets/images/icons/add-cart.png')} alt=""/>Add to Cart
															</Link>
														</div>
														<div class="compare-wishlist">
															<Link to="#" class="compare" title="">
																<img src={require('../../assets/images/icons/compare.png')} alt=""/>Compare
															</Link>
															<Link to="#" class="wishlist" title="">
																<img src={require('../../assets/images/icons/wishlist.png')} alt=""/>Wishlist
															</Link>
														</div>
													</div>
												</div>
											</div>
											<div class="product-box style2 v1">
												<div class="imagebox">
													<div class="box-image owl-carousel-1">
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/06.jpg')} alt=""/>
														</Link>
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/06.jpg')} alt=""/>
														</Link>
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/06.jpg')} alt=""/>
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
													<div class="box-bottom">
														<div class="btn-add-cart">
															<Link to="#" title="">
																<img src={require('../../assets/images/icons/add-cart.png')} alt=""/>Add to Cart
															</Link>
														</div>
														<div class="compare-wishlist">
															<Link to="#" class="compare" title="">
																<img src={require('../../assets/images/icons/compare.png')} alt=""/>Compare
															</Link>
															<Link to="#" class="wishlist" title="">
																<img src={require('../../assets/images/icons/wishlist.png')} alt=""/>Wishlist
															</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="col-lg-4 col-sm-12">	
											<div class="product-box style2 v1">
												<div class="imagebox">
													<div class="box-image owl-carousel-1">
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/03.jpg')} alt=""/>
														</Link>
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/03.jpg')} alt=""/>
														</Link>
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/03.jpg')} alt=""/>
														</Link>
													</div>
													<div class="box-content">
														<div class="cat-name">
															<Link to="#" title="">Headphones</Link>
														</div>
														<div class="product-name">
															<Link to="#" title="">Beats Solo<br />HD</Link>
														</div>
														<div class="price">
															<span class="sale">$1,365.00</span>
															<span class="regular">$2,999.00</span>
														</div>
													</div>
													<div class="box-bottom">
														<div class="btn-add-cart">
															<Link to="#" title="">
																<img src={require('../../assets/images/icons/add-cart.png')} alt=""/>Add to Cart
															</Link>
														</div>
														<div class="compare-wishlist">
															<Link to="#" class="compare" title="">
																<img src={require('../../assets/images/icons/compare.png')} alt=""/>Compare
															</Link>
															<Link to="#" class="wishlist" title="">
																<img src={require('../../assets/images/icons/wishlist.png')} alt=""/>Wishlist
															</Link>
														</div>
													</div>
												</div>
											</div>
											<div class="product-box style2 v1">
												<div class="imagebox">
													<div class="box-image owl-carousel-1">
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/07.jpg')} alt=""/>
														</Link>
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/07.jpg')} alt=""/>
														</Link>
														<Link to="#" title="">
															<img src={require('../../assets/images/product/other/07.jpg')} alt=""/>
														</Link>
													</div>
													<div class="box-content">
														<div class="cat-name">
															<Link to="#" title="">Computers</Link>
														</div>
														<div class="product-name">
															<Link to="#" title="">Apple iPad Air 2 32GB 9.7"<br />Tablet</Link>
														</div>
														<div class="price">
															<span class="sale">$5,759.68</span>
															<span class="regular">$2,999.00</span>
														</div>
													</div>
													<div class="box-bottom">
														<div class="btn-add-cart">
															<Link to="#" title="">
																<img src={require('../../assets/images/icons/add-cart.png')} alt=""/>Add to Cart
															</Link>
														</div>
														<div class="compare-wishlist">
															<Link to="#" class="compare" title="">
																<img src={require('../../assets/images/icons/compare.png')} alt=""/>Compare
															</Link>
															<Link to="#" class="wishlist" title="">
																<img src={require('../../assets/images/icons/wishlist.png')} alt=""/>Wishlist
															</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="wrap-imagebox flat-imagebox">
								<div class="flat-row-title style2">
									<h3>Our Products</h3>
								</div>
								<div class="row">
									<div class="col-sm-6">
										<div class="product-box style1 style1-v4">
											<div class="imagebox style1 style1-v4">
												<div class="box-image">
													<Link to="#" title="">
														<img src={require('../../assets/images/product/other/s02.jpg')} alt=""/>
													</Link>
												</div>
												<div class="box-content">
													<div class="cat-name">
														<Link to="#" title="">Cameras</Link>
													</div>
													<div class="product-name">
														<Link to="#" title="">Apple iPad Mini<br />G2356</Link>
													</div>
													<div class="price">
														<span class="regular">$2,999.00</span>
														<span class="sale">$1,250.00</span>
													</div>
												</div>
												<div class="box-bottom">
													<div class="compare-wishlist">
														<Link to="#" class="compare" title="">
															<img src={require('../../assets/images/icons/compare.png')} />Compare
														</Link>
														<Link to="#" class="wishlist" title="">
															<img src={require('../../assets/images/icons/wishlist.png')} />Wishlist
														</Link>
													</div>
													<div class="btn-add-cart">
														<Link to="#" title="">
															<img src={require('../../assets/images/icons/add-cart.png')} />Add to Cart
														</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-6">
										<div class="product-box style1 style1-v4">
											<div class="imagebox style1 style1-v4">
												<div class="box-image">
													<Link to="#" title="">
														<img src={require('../../assets/images/product/other/s03.jpg')} />
													</Link>
												</div>
												<div class="box-content">
													<div class="cat-name">
														<Link to="#" title="">Headphones</Link>
													</div>
													<div class="product-name">
														<Link to="#" title="">Apple iPhone 7<br />32 GB</Link>
													</div>
													<div class="price">
														<span class="regular">$2,999.00</span>
														<span class="sale">$1,250.00</span>
													</div>
												</div>
												<div class="box-bottom">
													<div class="compare-wishlist">
														<Link to="#" class="compare" title="">
															<img src={require('../../assets/images/icons/compare.png')} />Compare
														</Link>
														<Link to="#" class="wishlist" title="">
															<img src={require('../../assets/images/icons/wishlist.png')} />Wishlist
														</Link>
													</div>
													<div class="btn-add-cart">
														<Link to="#" title="">
															<img src={require('../../assets/images/icons/add-cart.png')} alt="" />Add to Cart
														</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-6">
										<div class="product-box style1 style1-v4">
											<div class="imagebox style1 style1-v4">
												<div class="box-image">
													<Link to="#" title="">
														<img src={require('../../assets/images/product/other/s05.jpg')} alt=""/>
													</Link>
												</div>
												<div class="box-content">
													<div class="cat-name">
														<Link to="#" title="">Cameras</Link>
													</div>
													<div class="product-name">
														<Link to="#" title="">Playstation Game<br />Console</Link>
													</div>
													<div class="price">
														<span class="regular">$2,999.00</span>
														<span class="sale">$1,250.00</span>
													</div>
												</div>
												<div class="box-bottom">
													<div class="compare-wishlist">
														<Link to="#" class="compare" title="">
															<img src={require('../../assets/images/icons/compare.png')} alt=""/>Compare
														</Link>
														<Link to="#" class="wishlist" title="">
															<img src={require('../../assets/images/icons/wishlist.png')} alt=""/>Wishlist
														</Link>
													</div>
													<div class="btn-add-cart">
														<Link to="#" title="">
															<img src={require('../../assets/images/icons/add-cart.png')} alt=""/>Add to Cart
														</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-6">
										<div class="product-box style1 style1-v4">
											<div class="imagebox style1 style1-v4">
												<div class="box-image">
													<Link to="#" title="">
														<img src={require('../../assets/images/product/other/s06.jpg')} alt=""/>
													</Link>
												</div>
												<div class="box-content">
													<div class="cat-name">
														<Link to="#" title="">Headphones</Link>
													</div>
													<div class="product-name">
														<Link to="#" title="">Apple iPhone 7<br />32 GB</Link>
													</div>
													<div class="price">
														<span class="regular">$2,999.00</span>
														<span class="sale">$1,250.00</span>
													</div>
												</div>
												<div class="box-bottom">
													<div class="compare-wishlist">
														<Link to="#" class="compare" title="">
															<img src={require('../../assets/images/icons/compare.png')} alt=""/>Compare
														</Link>
														<Link to="#" class="wishlist" title="">
															<img src={require('../../assets/images/icons/wishlist.png')} alt=""/>Wishlist
														</Link>
													</div>
													<div class="btn-add-cart">
														<Link to="#" title="">
															<img src={require('../../assets/images/icons/add-cart.png')} alt=""/>Add to Cart
														</Link>
													</div>
												</div>
											</div> 
										</div> 
									</div> 
								</div> 
							</div> 
							<div class="wrap-imagebox flat-imagebox">
								<div class="flat-row-title style3">
									<h3>Most Viewed</h3>
								</div>
								<div class="rows style1">	
									<div class="owl-carousel-4">
										<div class="imagebox style4 style4-4">
											<div class="box-image">
												<Link to="#" title="">
													<img src={require('../../assets/images/product/other/10.jpg')} alt=""/>
												</Link>
											</div>
											<div class="box-content">
												<div class="cat-name">
													<Link to="#" title="">Laptops</Link>
												</div>
												<div class="product-name">
													<Link to="#" title="">Apple iPad Mini<br />G2356</Link>
												</div>
												<div class="price">
													<span class="sale">$600.00</span>
													<span class="regular">$2,999.00</span>
												</div>
											</div>
										</div>
										<div class="imagebox style4 style4-4">
											<div class="box-image">
												<Link to="#" title="">
													<img src={require('../../assets/images/product/other/11.jpg')} alt=""/>
												</Link>
											</div>
											<div class="box-content">
												<div class="cat-name">
													<Link to="#" title="">Laptops</Link>
												</div>
												<div class="product-name">
													<Link to="#" title="">Beats Pill+ Portable<br />Speaker - (PRODUCT)RED</Link>
												</div>
												<div class="price">
													<span class="sale">$1,023.00</span>
													<span class="regular">$2,999.00</span>
												</div>
											</div>
										</div>
										<div class="imagebox style4 style4-4">
											<div class="box-image">
												<Link to="#" title="">
													<img src={require('../../assets/images/product/other/12.jpg')} alt=""/>
												</Link>
											</div>
											<div class="box-content">
												<div class="cat-name">
													<Link to="#" title="">Laptops</Link>
												</div>
												<div class="product-name">
													<Link to="#" title="">Apple iPad Mini<br />G2356</Link>
												</div>
												<div class="price">
													<span class="sale">$1,489.00</span>
													<span class="regular">$2,999.00</span>
												</div>
											</div>
										</div>
										<div class="imagebox style4 style4-4">
											<div class="box-image">
												<Link to="#" title="">
													<img src={require('../../assets/images/product/other/13.jpg')} alt=""/>
												</Link>
											</div>
											<div class="box-content">
												<div class="cat-name">
													<Link to="#" title="">Laptops</Link>
												</div>
												<div class="product-name">
													<Link to="#" title="">Beats EP On-Ear<br />Headphones - Blue</Link>
												</div>
												<div class="price">
													<span class="sale">$1,749.00</span>
													<span class="regular">$2,999.00</span>
												</div>
											</div>
										</div>
										<div class="imagebox style4 style4-4">
											<div class="box-image">
												<Link to="#" title="">
													<img src={require('../../assets/images/product/other/09.jpg')} alt=""/>
												</Link>
											</div>
											<div class="box-content">
												<div class="cat-name">
													<Link to="#" title="">Laptops</Link>
												</div>
												<div class="product-name">
													<Link to="#" title="">Apple iPad Mini<br />G2356</Link>
												</div>
												<div class="price">
													<span class="sale">$50.00</span>
													<span class="regular">$2,999.00</span>
												</div>
											</div>
										</div>
										<div class="imagebox style4 style4-4">
											<div class="box-image">
												<Link to="#" title="">
													<img src={require('../../assets/images/product/other/10.jpg')} alt=""/>
												</Link>
											</div>
											<div class="box-content">
												<div class="cat-name">
													<Link to="#" title="">Laptops</Link>
												</div>
												<div class="product-name">
													<Link to="#" title="">Apple iPad Mini<br />G2356</Link>
												</div>
												<div class="price">
													<span class="sale">$600.00</span>
													<span class="regular">$2,999.00</span>
												</div>
											</div>
										</div>
										<div class="imagebox style4 style4-4">
											<div class="box-image">
												<Link to="#" title="">
													<img src={require('../../assets/images/product/other/11.jpg')} alt=""/>
												</Link>
											</div>
											<div class="box-content">
												<div class="cat-name">
													<Link to="#" title="">Laptops</Link>
												</div>
												<div class="product-name">
													<Link to="#" title="">Beats Pill+ Portable<br />Speaker - (PRODUCT)RED</Link>
												</div>
												<div class="price">
													<span class="sale">$1,023.00</span>
													<span class="regular">$2,999.00</span>
												</div>
											</div>
										</div>
										<div class="imagebox style4 style4-4">
											<div class="box-image">
												<Link to="#" title="">
													<img src={require('../../assets/images/product/other/12.jpg')} alt=""/>
												</Link>
											</div>
											<div class="box-content">
												<div class="cat-name">
													<Link to="#" title="">Laptops</Link>
												</div>
												<div class="product-name">
													<Link to="#" title="">Apple iPad Mini<br />G2356</Link>
												</div>
												<div class="price">
													<span class="sale">$1,489.00</span>
													<span class="regular">$2,999.00</span>
												</div>
											</div>
										</div>
										<div class="imagebox style4 style4-4">
											<div class="box-image">
												<Link to="#" title="">
													<img src={require('../../assets/images/product/other/13.jpg')} alt=""/>
												</Link>
											</div>
											<div class="box-content">
												<div class="cat-name">
													<Link to="#" title="">Laptops</Link>
												</div>
												<div class="product-name">
													<Link to="#" title="">Beats EP On-Ear<br />Headphones - Blue</Link>
												</div>
												<div class="price">
													<span class="sale">$1,749.00</span>
													<span class="regular">$2,999.00</span>
												</div>
											</div>
										</div>
										<div class="imagebox style4 style4-4">
											<div class="box-image">
												<Link to="#" title="">
													<img src={require('../../assets/images/product/other/09.jpg')} alt=""/>
												</Link>
											</div>
											<div class="box-content">
												<div class="cat-name">
													<Link to="#" title="">Laptops</Link>
												</div>
												<div class="product-name">
													<Link to="#" title="">Apple iPad Mini<br />G2356</Link>
												</div>
												<div class="price">
													<span class="sale">$50.00</span>
													<span class="regular">$2,999.00</span>
												</div>
											</div>
										</div>
										<div class="imagebox style4 style4-4">
											<div class="box-image">
												<Link to="#" title="">
													<img src={require('../../assets/images/product/other/10.jpg')} alt=""/>
												</Link>
											</div>
											<div class="box-content">
												<div class="cat-name">
													<Link to="#" title="">Laptops</Link>
												</div>
												<div class="product-name">
													<Link to="#" title="">Apple iPad Mini<br />G2356</Link>
												</div>
												<div class="price">
													<span class="sale">$600.00</span>
													<span class="regular">$2,999.00</span>
												</div>
											</div>
										</div>
										<div class="imagebox style4 style4-4">
											<div class="box-image">
												<Link to="#" title="">
													<img src={require('../../assets/images/product/other/11.jpg')} alt=""/>
												</Link>
											</div>
											<div class="box-content">
												<div class="cat-name">
													<Link to="#" title="">Laptops</Link>
												</div>
												<div class="product-name">
													<Link to="#" title="">Beats Pill+ Portable<br />Speaker - (PRODUCT)RED</Link>
												</div>
												<div class="price">
													<span class="sale">$1,023.00</span>
													<span class="regular">$2,999.00</span>
												</div>
											</div>
										</div>
										<div class="imagebox style4 style4-4">
											<div class="box-image">
												<Link to="#" title="">
													<img src={require('../../assets/images/product/other/09.jpg')} alt=""/>
												</Link>
											</div>
											<div class="box-content">
												<div class="cat-name">
													<Link to="#" title="">Laptops</Link>
												</div>
												<div class="product-name">
													<Link to="#" title="">Apple iPad Mini<br />G2356</Link>
												</div>
												<div class="price">
													<span class="sale">$50.00</span>
													<span class="regular">$2,999.00</span>
												</div>
											</div>
										</div>
										<div class="imagebox style4 style4-4">
											<div class="box-image">
												<Link to="#" title="">
													<img src={require('../../assets/images/product/other/12.jpg')} alt=""/>
												</Link>
											</div>
											<div class="box-content">
												<div class="cat-name">
													<Link to="#" title="">Laptops</Link>
												</div>
												<div class="product-name">
													<Link to="#" title="">Apple iPad Mini<br />G2356</Link>
												</div>
												<div class="price">
													<span class="sale">$1,489.00</span>
													<span class="regular">$2,999.00</span>
												</div>
											</div>
										</div>
										<div class="imagebox style4 style4-4">
											<div class="box-image">
												<Link to="#" title="">
													<img src={require('../../assets/images/product/other/13.jpg')} alt=""/>
												</Link>
											</div>
											<div class="box-content">
												<div class="cat-name">
													<Link to="#" title="">Laptops</Link>
												</div>
												<div class="product-name">
													<Link to="#" title="">Beats EP On-Ear<br />Headphones - Blue</Link>
												</div>
												<div class="price">
													<span class="sale">$1,749.00</span>
													<span class="regular">$2,999.00</span>
												</div>
											</div>
										</div>
										<div class="imagebox style4 style4-4">
											<div class="box-image">
												<Link to="#" title="">
													<img src={require('../../assets/images/product/other/09.jpg')} alt=""/>
												</Link>
											</div>
											<div class="box-content">
												<div class="cat-name">
													<Link to="#" title="">Laptops</Link>
												</div>
												<div class="product-name">
													<Link to="#" title="">Apple iPad Mini<br />G2356</Link>
												</div>
												<div class="price">
													<span class="sale">$50.00</span>
													<span class="regular">$2,999.00</span>
												</div>
											</div>
										</div>
										<div class="imagebox style4 style4-4">
											<div class="box-image">
												<Link to="#" title="">
													<img src={require('../../assets/images/product/other/10.jpg')} alt=""/>
												</Link>
											</div>
											<div class="box-content">
												<div class="cat-name">
													<Link to="#" title="">Laptops</Link>
												</div>
												<div class="product-name">
													<Link to="#" title="">Apple iPad Mini<br />G2356</Link>
												</div>
												<div class="price">
													<span class="sale">$600.00</span>
													<span class="regular">$2,999.00</span>
												</div>
											</div>
										</div> 
										<div class="imagebox style4 style4-4">
											<div class="box-image">
												<Link to="#" title="">
													<img src={require('../../assets/images/product/other/11.jpg')} alt=""/>
												</Link>
											</div>
											<div class="box-content">
												<div class="cat-name">
													<Link to="#" title="">Laptops</Link>
												</div>
												<div class="product-name">
													<Link to="#" title="">Beats Pill+ Portable<br />Speaker - (PRODUCT)RED</Link>
												</div>
												<div class="price">
													<span class="sale">$1,023.00</span>
													<span class="regular">$2,999.00</span>
												</div>
											</div>
										</div> 
										<div class="imagebox style4 style4-4">
											<div class="box-image">
												<Link to="#" title="">
													<img src={require('../../assets/images/product/other/12.jpg')} alt=""/>
												</Link>
											</div>
											<div class="box-content">
												<div class="cat-name">
													<Link to="#" title="">Laptops</Link>
												</div>
												<div class="product-name">
													<Link to="#" title="">Apple iPad Mini<br />G2356</Link>
												</div>
												<div class="price">
													<span class="sale">$1,489.00</span>
													<span class="regular">$2,999.00</span>
												</div>
											</div>
										</div> 
										<div class="imagebox style4 style4-4">
											<div class="box-image">
												<Link to="#" title="">
													<img src={require('../../assets/images/product/other/13.jpg')} alt=""/>
												</Link>
											</div>
											<div class="box-content">
												<div class="cat-name">
													<Link to="#" title="">Laptops</Link>
												</div>
												<div class="product-name">
													<Link to="#" title="">Beats EP On-Ear<br />Headphones - Blue</Link>
												</div>
												<div class="price">
													<span class="sale">$1,749.00</span>
													<span class="regular">$2,999.00</span>
												</div>
											</div>
										</div> 
										<div class="imagebox style4 style4-4">
											<div class="box-image">
												<Link to="#" title="">
													<img src={require('../../assets/images/product/other/09.jpg')} alt=""/>
												</Link>
											</div>
											<div class="box-content">
												<div class="cat-name">
													<Link to="#" title="">Laptops</Link>
												</div>
												<div class="product-name">
													<Link to="#" title="">Apple iPad Mini<br />G2356</Link>
												</div>
												<div class="price">
													<span class="sale">$50.00</span>
													<span class="regular">$2,999.00</span>
												</div>
											</div>
										</div> 
										<div class="imagebox style4 style4-4">
											<div class="box-image">
												<Link to="#" title="">
													<img src={require('../../assets/images/product/other/10.jpg')} alt=""/>
												</Link>
											</div>
											<div class="box-content">
												<div class="cat-name">
													<Link to="#" title="">Laptops</Link>
												</div>
												<div class="product-name">
													<Link to="#" title="">Apple iPad Mini<br />G2356</Link>
												</div>
												<div class="price">
													<span class="sale">$600.00</span>
													<span class="regular">$2,999.00</span>
												</div>
											</div>
										</div> 
									</div> 
								</div> 
							</div> 
						</div> 
					</div> 
				</div> 
			</main>
			 
			<section class="flat-row flat-highlights style1">
				<div class="container">
					<div class="row">
						<div class="col-md-4">
							<div class="flat-row-title">
								<h3>Bestsellers</h3>
							</div>
							<ul class="product-list style1">
								<li>
									<div class="img-product">
										<Link to="#" title="">
											<img src={require('../../assets/images/product/highlights/10.jpg')} alt=""/>
										</Link>
									</div>
									<div class="info-product">
										<div class="name">
											<Link to="#" title="">Razer RZ02-01071500-R3M1</Link>
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
									<div class="clearfix"></div>
								</li>
								<li>
									<div class="img-product">
										<Link to="#" title="">
											<img src={require('../../assets/images/product/highlights/9.jpg')} alt=""/>
										</Link>
									</div>
									<div class="info-product">
										<div class="name">
											<Link to="#" title="">Apple iPad Mini G2356</Link>
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
									<div class="clearfix"></div>
								</li>
								<li>
									<div class="img-product">
										<Link to="#" title="">
											<img src={require('../../assets/images/product/highlights/8.jpg')} alt=""/>
										</Link>
									</div>
									<div class="info-product">
										<div class="name">
											<Link to="#" title="">Beats Snarkitecture Headphones</Link>
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
									<div class="clearfix"/>
								</li>
							</ul> 
						</div> 
						<div class="col-md-4">
							<div class="flat-row-title">
								<h3>Featured</h3>
							</div> 
							<ul class="product-list style1">
								<li>
									<div class="img-product">
										<Link to="#" title="">
											<img src={require('../../assets/images/product/highlights/3.jpg')} alt=""/>
										</Link>
									</div>
									<div class="info-product">
										<div class="name">
											<Link to="#" title="">Razer RZ02-01071500-R3M1</Link>
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
									<div class="clearfix"></div>
								</li>
								<li>
									<div class="img-product">
										<Link to="#" title="">
											<img src={require('../../assets/images/product/highlights/2.jpg')} alt=""/>
										</Link>
									</div>
									<div class="info-product">
										<div class="name">
											<Link to="#" title="">Apple iPad Mini G2356</Link>
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
									<div class="clearfix"></div>
								</li>
								<li>
									<div class="img-product">
										<Link to="#" title="">
											<img src={require('../../assets/images/product/highlights/1.jpg')} alt=""/>
										</Link>
									</div>
									<div class="info-product">
										<div class="name">
											<Link to="#" title="">Beats Snarkitecture Headphones</Link>
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
									<div class="clearfix"/>
								</li>
							</ul> 
						</div> 
						<div class="col-md-4">
							<div class="flat-row-title">
								<h3>Hot Sale</h3>
							</div> 
							<ul class="product-list style1">
								<li>
									<div class="img-product">
										<Link to="#" title="">
											<img src={require('../../assets/images/product/highlights/19.jpg')} alt=""/>
										</Link>
									</div>
									<div class="info-product">
										<div class="name">
											<Link to="#" title="">Razer RZ02-01071500-R3M1</Link>
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
									<div class="clearfix"></div>
								</li>
								<li>
									<div class="img-product">
										<Link to="#" title="">
											<img src={require('../../assets/images/product/highlights/11.jpg')} alt=""/>
										</Link>
									</div>
									<div class="info-product">
										<div class="name">
											<Link to="#" title="">Apple iPad Mini G2356</Link>
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
									<div class="clearfix"></div>
								</li>
								<li>
									<div class="img-product">
										<Link to="#" title="">
											<img src={require('../../assets/images/product/highlights/20.jpg')} alt=""/>
										</Link>
									</div>
									<div class="info-product">
										<div class="name">
											<Link to="#" title="">Beats Snarkitecture Headphones</Link>
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
									<div class="clearfix"/>
								</li>
							</ul> 
						</div> 
					</div> 
				</div> 
			</section>
			 

			<section class="flat-row flat-brand">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<ul class="owl-carousel-5">
								<li>
									<img src={require('../../assets/images/logos/brand2.png')} alt=""/>
								</li>
								<li>
									<img src={require('../../assets/images/logos/brand5.png')} alt=""/>
								</li>
								<li>
									<img src={require('../../assets/images/logos/brand6.png')} alt=""/>
								</li>
								<li>
									<img src={require('../../assets/images/logos/brand3.png')} alt=""/>
								</li>
								<li>
									<img src={require('../../assets/images/logos/brand4.png')} alt=""/>
								</li>
								<li>
									<img src={require('../../assets/images/logos/brand7.png')} alt=""/>
								</li>
								<li>
									<img src={require('../../assets/images/logos/brand2.png')} alt=""/>
								</li>
								<li>
									<img src={require('../../assets/images/logos/brand6.png')} alt=""/>
								</li>
								<li>
									<img src={require('../../assets/images/logos/brand3.png')} alt=""/>
								</li>
								<li>
									<img src={require('../../assets/images/logos/brand4.png')} alt=""/>
								</li>
							</ul> 
						</div> 
					</div> 
				</div> 
			</section>

			<footer class="style2">
				<div class="container">
					<div class="row">
						<div class="col-lg-3 col-md-6">
							<div class="widget-ft style2 widget-about">
								<div class="logo logo-ft">
									<Link to="index.html" title="">
										<img src={require('../../assets/images/logos/logo-ft02.png')} alt=""/>
									</Link>
								</div> 
								<div class="widget-content">
									<div class="icon">
										<img src={require('../../assets/images/icons/call-2.png')} alt=""/>
									</div>
									<div class="info">
										<p class="questions">Got Questions ? Call us 24/7!</p>
										<p class="phone">Call Us: (888) 1234 56789</p>
										<p class="address">
											PO Box CT16122 Collins Street West, Victoria 8007,<br />Australia.
										</p>
									</div>
								</div> 
								<ul class="social-list">
									<li>
										<Link to="#" title="">
											<i class="fa fa-facebook" aria-hidden="true"/>
										</Link>
									</li>
									<li>
										<Link to="#" title="">
											<i class="fa fa-twitter" aria-hidden="true"/>
										</Link>
									</li>
									<li>
										<Link to="#" title="">
											<i class="fa fa-instagram" aria-hidden="true"/>
										</Link>
									</li>
									<li>
										<Link to="#" title="">
											<i class="fa fa-pinterest" aria-hidden="true"/>
										</Link>
									</li>
									<li>
										<Link to="#" title="">
											<i class="fa fa-dribbble" aria-hidden="true"/>
										</Link>
									</li>
									<li>
										<Link to="#" title="">
											<i class="fa fa-google" aria-hidden="true"/>
										</Link>
									</li>
								</ul> 
							</div> 
						</div> 
						<div class="col-lg-3 col-md-6">
							<div class="widget-ft style2 widget-categories-ft">
								<div class="widget-title">
									<h3>Find By Categories</h3>
								</div> 
								<ul class="cat-list-ft">
									<li>
										<Link to="#" title="">Desktops</Link>
									</li>
									<li>
										<Link to="#" title="">Laptops & Notebooks</Link>
									</li>
									<li>
										<Link to="#" title="">Components</Link>
									</li>
									<li>
										<Link to="#" title="">Tablets</Link>
									</li>
									<li>
										<Link to="#" title="">Software</Link>
									</li>
									<li>
										<Link to="#" title="">Phones & PDAs</Link>
									</li>
									<li>
										<Link to="#" title="">Cameras</Link>
									</li>
								</ul> 
							</div> 
						</div> 
						<div class="col-lg-2 col-md-6">
							<div class="widget-ft style2 widget-menu">
								<div class="widget-title">
									<h3>Customer Care</h3>
								</div> 
								<ul>
									<li>
										<Link to="#" title="">Desktops</Link>
									</li>
									<li>
										<Link to="#" title="">Laptops & Notebooks</Link>
									</li>
									<li>
										<Link to="#" title="">Components</Link>
									</li>
									<li>
										<Link to="#" title="">Tablets</Link>
									</li>
									<li>
										<Link to="#" title="">Software</Link>
									</li>
									<li>
										<Link to="#" title="">Phones & PDAs</Link>
									</li>
									<li>
										<Link to="#" title="">Cameras</Link>
									</li>
								</ul>
							</div> 
						</div> 
						<div class="col-lg-4 col-md-6">
							<div class="widget-ft style2 widget-newsletter">
								<div class="widget-title">
									<h3>Sign Up To New Letter</h3>
								</div> 
								<p>Make sure that you never miss our interesting <br />
									news by joining our newsletter program
								</p>
								<form action="#" class="subscribe-form" method="get" accept-charset="utf-8">
									<div class="subscribe-content">
										<input type="text" name="email" class="subscribe-email" placeholder="Your E-Mail"/>
										<button type="submit"><img src={require('../../assets/images/icons/right-2.png')} alt=""/></button>
									</div>
								</form> 
								<ul class="pay-list">
									<li>
										<Link to="#" title="">
											<img src={require('../../assets/images/logos/ft-06.png')} alt=""/>
										</Link>
									</li>
									<li>
										<Link to="#" title="">
											<img src={require('../../assets/images/logos/ft-07.png')} alt=""/>
										</Link>
									</li>
									<li>
										<Link to="#" title="">
											<img src={require('../../assets/images/logos/ft-08.png')} alt=""/>
										</Link>
									</li>
									<li>
										<Link to="#" title="">
											<img src={require('../../assets/images/logos/ft-09.png')} alt=""/>
										</Link>
									</li>
									<li>
										<Link to="#" title="">
											<img src={require('../../assets/images/logos/ft-10.png')} alt=""/>
										</Link>
									</li>
								</ul> 
							</div> 
						</div> 
					</div> 
					<div class="row">
						<div class="col-md-12">
							<div class="widget-ft style2 widget-apps">
								<div class="widget-title">
									<h3>Mobile Apps</h3>
								</div>
								<ul class="app-list">
									<li class="app-store">
										<Link to="#" title="">
											<div class="img">
												<img src={require('../../assets/images/icons/app-store-2.png')} alt=""/>
											</div>
											<div class="text">
												<h4>App Store</h4>
												<p>Available now on the</p>
											</div>
										</Link>
									</li>
									<li class="google-play">
										<Link to="#" title="">
											<div class="img">
												<img src={require('../../assets/images/icons/google-play-2.png')} alt=""/>
											</div>
											<div class="text">
												<h4>Google Play</h4>
												<p>Get in on</p>
											</div>
										</Link>	
									</li> 
								</ul> 
							</div> 
						</div> 
					</div>
				</div> 
			</footer>
			 

			<section class="footer-bottom style2">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<p class="copyright">All Rights Reserved © Techno Store 2017</p>
							<p class="btn-scroll">
								<Link to="#" title="">
									<img src={require('../../assets/images/icons/top.png')} alt=""/>
								</Link>
							</p>
						</div> 
					</div> 
				</div> 
			</section>
        
            </Container>
        </>
    );
}

export  default Home;