import React from 'react';
import Accessories from './accessories/Accessories';
import BestSeller from '../../../common/bestseller/BestSeller';
import Slider from './specialOfferSlider/Slider';
import Banner from '../../../common/banner/Banner';

const SpecialOfferSlider = () => {
	return (
		<div className="col-lg-3 col-md-4">
			<div className="sidebar">
				<Slider />
				<BestSeller />
				<Accessories />
				<Banner />
			</div>
		</div>
	)
}
export default SpecialOfferSlider