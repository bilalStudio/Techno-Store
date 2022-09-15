import React from 'react'
import Slider from './Slider'
const TopSlider = () => {
	return (
		<section className="flat-row flat-slider style3">
			<div className="container">
				<div className="row">
					<div className="col-lg-3">
					</div>
					<div className="col-lg-9">
						<div className="slider owl-carousel-11">

							<Slider
								title={'Enhanced Technology'}
								sale={'$5.325.99'}
								regular={'$2.500.99'}
								img={require('../../../assets/images/slider/02.png')}
							/>
							<Slider
								title={'Enhanced Technology'}
								sale={'$5.325.99'}
								regular={'$2.500.99'}
								img={require('../../../assets/images/slider/02.png')}
							/>
							<Slider
								title={'Enhanced Technology'}
								sale={'$5.325.99'}
								regular={'$2.500.99'}
								img={require('../../../assets/images/slider/02.png')}
							/>
							<Slider
								title={'Enhanced Technology'}
								sale={'$5.325.99'}
								regular={'$2.500.99'}
								img={require('../../../assets/images/slider/02.png')}
							/>
							<Slider
								title={'Enhanced Technology'}
								sale={'$5.325.99'}
								regular={'$2.500.99'}
								img={require('../../../assets/images/slider/02.png')}
							/>
							<Slider
								title={'Enhanced Technology'}
								sale={'$5.325.99'}
								regular={'$2.500.99'}
								img={require('../../../assets/images/slider/02.png')}
							/>
						</div>

					</div>
				</div>
			</div>
		</section>
	)
}
//rafce
export default TopSlider