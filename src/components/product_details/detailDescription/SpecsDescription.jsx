import React from 'react';
import ProductDescription from './description/ProductDescription';
import Reviews from './description/reviews/Reviews';
import TechnicalSpecs from './description/technicalspecs/TechnicalSpecs';

function SpecsDescription() {
	return (
		<section className="flat-product-content">
			<ul className="product-detail-bar">
				<li className="active">Description</li>
				<li>Tecnical Specs</li>
				<li>Reviews</li>
			</ul>
			<div className="container">
				<ProductDescription />
				<TechnicalSpecs />
				<Reviews />
			</div>
		</section>
	);
}

export default SpecsDescription;