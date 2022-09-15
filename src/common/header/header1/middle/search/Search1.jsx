import React from 'react'
import { Link } from 'react-router-dom'
const Search1 = () => {
  return (
    <div className="top-search">
									<form action="#" method="get" className="form-search" >
										<div className="cat-wrap">
											<select name="category">
												<option hidden value="">All Category</option>
												<option hidden value="">Cameras</option>
												<option hidden value="">Computer</option>
												<option hidden value="">Laptops</option>
											</select>
											<span><i className="fa fa-angle-down" aria-hidden="true"></i></span>
											<div className="all-categories">
												<div className="cat-list-search">
													<div className="title">
														Electronics
													</div>
													<ul>
														<li>Components</li>
														<li>Laptop</li>
														<li>Monitor</li>
														<li>Mp3 player</li>
														<li>Scanners</li>
													</ul>
												</div>
												<div className="cat-list-search">
													<div className="title">
														Furniture
													</div>
													<ul>
														<li>Bookcases</li>
														<li>Barstools</li>
														<li>TV stands</li>
														<li>Desks</li>
														<li>Accent chairs</li>
													</ul>
												</div>
												<div className="cat-list-search">
													<div className="title">
														Accessories
													</div>
													<ul>
														<li>Software</li>
														<li>Mobile</li>
														<li>TV stands</li>
														<li>Printers</li>
														<li>Media</li>
													</ul>
												</div>
											</div>
											<span><i className="fa fa-angle-down" aria-hidden="true"></i></span>
										</div>
										<div className="box-search">
											<input type="text" name="search" placeholder="Search what you looking for ?" />
											<span className="btn-search">
												<button type="submit" className="waves-effect">
													<img src={require('../../../../../assets/images/icons/search.png')} alt="" /></button>
											</span>
											<div className="search-suggestions">
												<div className="box-suggestions">
													<div className="title">
														Search Suggestions
													</div>
													<ul>
														<li>
															<div className="image">
																<img src={require('../../../../../assets/images/product/other/s05.jpg')} alt="" />
															</div>
															<div className="info-product">
																<div className="name">
																	<Link to="#" title="">Razer RZ02-01071500-R3M1</Link>
																</div>
																<div className="price">
																	<span className="sale">
																		$50.00
																	</span>
																	<span className="regular">
																		$2,999.00
																	</span>
																</div>
															</div>
														</li>
														<li>
															<div className="image">
																<img src={require('../../../../../assets/images/product/other/s06.jpg')} alt="" />
															</div>
															<div className="info-product">
																<div className="name">
																	<Link to="#" title="">Notebook Black Spire V Nitro VN7-591G</Link>
																</div>
																<div className="price">
																	<span className="sale">
																		$24.00
																	</span>
																</div>
															</div>
														</li>
														<li>
															<div className="image">
																<img src={require('../../../../../assets/images/product/other/14.jpg')} alt="" />
															</div>
															<div className="info-product">
																<div className="name">
																	<Link to="#" title="">Apple iPad Mini G2356</Link>
																</div>
																<div className="price">
																	<span className="sale">
																		$90.00
																	</span>
																</div>
															</div>
														</li>
														<li>
															<div className="image">
																<img src={require('../../../../../assets/images/product/other/02.jpg')} alt="" />
															</div>
															<div className="info-product">
																<div className="name">
																	<Link to="#" title="">Razer RZ02-01071500-R3M1</Link>
																</div>
																<div className="price">
																	<span className="sale">
																		$50.00
																	</span>
																</div>
															</div>
														</li>
														<li>
															<div className="image">
																<img src={require('../../../../../assets/images/product/other/l01.jpg')} alt="" />
															</div>
															<div className="info-product">
																<div className="name">
																	<Link to="#" title="">Apple iPad Mini G2356</Link>
																</div>
																<div className="price">
																	<span className="sale">
																		$24.00
																	</span>
																	<span className="regular">
																		$2,999.00
																	</span>
																</div>
															</div>
														</li>
														<li>
															<div className="image">
																<img src={require('../../../../../assets/images/product/other/s08.jpg')} alt="" />
															</div>
															<div className="info-product">
																<div className="name">
																	<Link to="#" title="">Beats Snarkitecture Headphones</Link>
																</div>
																<div className="price">
																	<span className="sale">
																		$90.00
																	</span>
																	<span className="regular">
																		$2,999.00
																	</span>
																</div>
															</div>
														</li>
													</ul>
												</div>
												<div className="box-cat">
													<div className="cat-list-search">
														<div className="title">
															Categories
														</div>
														<ul>
															<li>
																<Link to="#">Networking & Internet Devices</Link>
															</li>
															<li>
																<Link to="#">Laptops, Desktops & Monitors</Link>
															</li>
															<li>
																<Link to="#">Hard Drives & Memory Cards</Link>
															</li>
															<li>
																<Link to="#">Printers & Ink</Link>
															</li>
															<li>
																<Link to="#">Networking & Internet Devices</Link>
															</li>
															<li>
																<Link to="#">Computer Accessories</Link>
															</li>
															<li>
																<Link to="#">Software</Link>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</form>
								</div>
  )
}

export default Search1