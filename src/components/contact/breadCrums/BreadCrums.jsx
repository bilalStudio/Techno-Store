import React from 'react';
import { Link } from 'react-router-dom';

const BreadCrums = () => {
	return (
		<section className="flat-breadcrumb">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<ul className="breadcrumbs">
							<li className="trail-item">
								<Link to="#" title="">Home</Link>
								<span><img src="images/icons/arrow-right.png" alt="" /></span>
							</li>
							<li className="trail-item">
								<Link to="#" title="">Shop</Link>
								<span><img src="images/icons/arrow-right.png" alt="" /></span>
							</li>
							<li className="trail-end">
								<Link to="#" title="">Smartphones</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>

	);
}

export default BreadCrums;