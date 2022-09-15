import React from 'react';
import LogoPics from './LogoPics';
function BrandLogo() {
	return (
		<section className="flat-row flat-brand">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<ul className="owl-carousel-5">
							<LogoPics img={require('../../../assets/images/logos/brand2.png')} />
							<LogoPics img={require('../../../assets/images/logos/brand5.png')} />
							<LogoPics img={require('../../../assets/images/logos/brand3.png')} />
							<LogoPics img={require('../../../assets/images/logos/brand4.png')} />
							<LogoPics img={require('../../../assets/images/logos/brand6.png')} />
							<LogoPics img={require('../../../assets/images/logos/brand7.png')} />
							<LogoPics img={require('../../../assets/images/logos/brand4.png')} />
							<LogoPics img={require('../../../assets/images/logos/brand6.png')} />
							<LogoPics img={require('../../../assets/images/logos/brand3.png')} />
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BrandLogo