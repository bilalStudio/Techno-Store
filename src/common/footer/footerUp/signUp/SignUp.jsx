import React from 'react';
import { Link } from 'react-router-dom';
const SignUp = () => {
  return (
    <div className="col-lg-4 col-md-6">
							<div className="widget-ft widget-newsletter">
								<div className="widget-title">
									<h3>Sign Up To New Letter</h3>
								</div>
								<p>Make sure that you never miss our interesting <br />
									news by joining our newsletter program
								</p>
								<form action="#" className="subscribe-form" method="get">
									<div className="subscribe-content">
										<input type="text" name="email" className="subscribe-email" placeholder="Your E-Mail" />
										<button type="submit">
											<img src={require('../../../../assets/images/icons/right-2.png')} alt="" /></button>
									</div>
								</form>
								<ul className="pay-list">
									<li>
										<Link to="#" title="">
											<img src={require('../../../../assets/images/logos/ft-06.png')} alt="" />
										</Link>
									</li>
									<li>
										<Link to="#" title="">
											<img src={require('../../../../assets/images/logos/ft-07.png')} alt="" />
										</Link>
									</li>
									<li>
										<Link to="#" title="">
											<img src={require('../../../../assets/images/logos/ft-08.png')} alt="" />
										</Link>
									</li>
									<li>
										<Link to="#" title="">
											<img src={require('../../../../assets/images/logos/ft-09.png')} alt="" />
										</Link>
									</li>
									<li>
										<Link to="#" title="">
											<img src={require('../../../../assets/images/logos/ft-10.png')} alt="" />
										</Link>
									</li>
								</ul>
							</div>
						</div>
  )
}

export default SignUp