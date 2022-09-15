import React from 'react';
import { Link } from 'react-router-dom';
function ProductCategory(props) {
	return (
		<ul className="product-list style1">
			<li>
				<div className="img-product">
					<Link to="#" title="">
						<img src={props.img1} alt="" />
					</Link>
				</div>
				<div className="info-product">
					<div className="name">
						<Link to="#" title="">Razer RZ02-01071500-R3M1</Link>
					</div>
					<div className="queue">
						<i className="fa fa-star" aria-hidden="true" />
						<i className="fa fa-star" aria-hidden="true" />
						<i className="fa fa-star" aria-hidden="true" />
						<i className="fa fa-star" aria-hidden="true" />
						<i className="fa fa-star" aria-hidden="true" />
					</div>
					<div className="price">
						<span className="sale">$50.00</span>
						<span className="regular">$2,999.00</span>
					</div>
				</div>
				<div className="clearfix"></div>
			</li>
			<li>
				<div className="img-product">
					<Link to="#" title="">
						<img src={props.img2} alt="" />
					</Link>
				</div>
				<div className="info-product">
					<div className="name">
						<Link to="#" title="">Apple iPad Mini G2356</Link>
					</div>
					<div className="queue">
						<i className="fa fa-star" aria-hidden="true" />
						<i className="fa fa-star" aria-hidden="true" />
						<i className="fa fa-star" aria-hidden="true" />
						<i className="fa fa-star" aria-hidden="true" />
						<i className="fa fa-star" aria-hidden="true" />
					</div>
					<div className="price">
						<span className="sale">$24.00</span>
						<span className="regular">$2,999.00</span>
					</div>
				</div>
				<div className="clearfix"></div>
			</li>
			<li>
				<div className="img-product">
					<Link to="#" title="">
						<img src={props.img3} alt="" />
					</Link>
				</div>
				<div className="info-product">
					<div className="name">
						<Link to="#" title="">Beats Snarkitecture Headphones</Link>
					</div>
					<div className="queue">
						<i className="fa fa-star" aria-hidden="true" />
						<i className="fa fa-star" aria-hidden="true" />
						<i className="fa fa-star" aria-hidden="true" />
						<i className="fa fa-star" aria-hidden="true" />
						<i className="fa fa-star" aria-hidden="true" />
					</div>
					<div className="price">
						<span className="sale">$90.00</span>
						<span className="regular">$2,999.00</span>
					</div>
				</div>
				<div className="clearfix" />
			</li>
		</ul>
	)
}

export default ProductCategory