import React from 'react';
import ProductCard from '../../../common/cards/ProductCard';
import MostView from '../../../common/mostviewSlider/MostView';
import Card from '../ourproduct/CompanyProductCard';
const ProductWithSlider = () => {
	return (
		<div className="col-lg-9 col-md-8">
			<div className="wrap-imagebox flat-imagebox">
				<div className="product-tab">
					<ul className="tab-list">
						<li className="active">New Arrivals</li>
						<li>Featured</li>
						<li>Top Selling</li>
					</ul>
				</div>
				<div className="box-product">
					<div className="row">
						<div className="col-lg-4 col-sm-12">
							<ProductCard
								img1={require('../../../assets/images/product/other/01.jpg')}
								img2={require('../../../assets/images/product/other/01.jpg')}
								img3={require('../../../assets/images/product/other/01.jpg')}
								title={'Laptops'}
								subtitle={'Apple iPad Mini'}
								sale={'$1,250.00'}
								regular={'$2,999.00'}
							/>

							<ProductCard
								img1={require('../../../assets/images/product/other/05.jpg')}
								img2={require('../../../assets/images/product/other/05.jpg')}
								img3={require('../../../assets/images/product/other/05.jpg')}
								title={'Cameras'}
								subtitle={'Apple iPad Mini'}
								sale={'$1,250.00'}
								regular={'$2,999.00'}
							/>
						</div>
						<div className="col-lg-4 col-sm-12">
							<ProductCard
								img1={require('../../../assets/images/product/other/02.jpg')}
								img2={require('../../../assets/images/product/other/02.jpg')}
								img3={require('../../../assets/images/product/other/02.jpg')}
								title={'Cameras'}
								subtitle={'RC Quadcopter Drone'}
								sale={'$1,250.00'}
								regular={'$2,999.00'}
							/>

							<ProductCard
								img1={require('../../../assets/images/product/other/06.jpg')}
								img2={require('../../../assets/images/product/other/06.jpg')}
								img3={require('../../../assets/images/product/other/06.jpg')}
								title={'Cameras'}
								subtitle={'New X5C-1 2.4Ghz Gyro'}
								sale={'$1,250.00'}
								regular={'$2,999.00'}
							/>


						</div>
						<div className="col-lg-4 col-sm-12">
							<ProductCard
								img1={require('../../../assets/images/product/other/03.jpg')}
								img2={require('../../../assets/images/product/other/03.jpg')}
								img3={require('../../../assets/images/product/other/03.jpg')}
								title={'Headphones'}
								subtitle={'Beats Solo'}
								sale={'$1,250.00'}
								regular={'$2,999.00'}
							/>

							<ProductCard
								img1={require('../../../assets/images/product/other/07.jpg')}
								img2={require('../../../assets/images/product/other/07.jpg')}
								img3={require('../../../assets/images/product/other/07.jpg')}
								title={'Computers'}
								subtitle={'Apple iPad Air 2 32GB 9.7"'}
								sale={'$5,759.68'}
								regular={'$2,999.00'}
							/>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-4 col-sm-12">
							<ProductCard
								img1={require('../../../assets/images/product/other/01.jpg')}
								img2={require('../../../assets/images/product/other/01.jpg')}
								img3={require('../../../assets/images/product/other/01.jpg')}
								title={'Laptops'}
								subtitle={'Apple iPad Mini'}
								sale={'$1,250.00'}
								regular={'$2,999.00'}
							/>

							<ProductCard
								img1={require('../../../assets/images/product/other/05.jpg')}
								img2={require('../../../assets/images/product/other/05.jpg')}
								img3={require('../../../assets/images/product/other/05.jpg')}
								title={'Cameras'}
								subtitle={'Apple iPad Mini'}
								sale={'$1,250.00'}
								regular={'$2,999.00'}
							/>
						</div>
						<div className="col-lg-4 col-sm-12">
							<ProductCard
								img1={require('../../../assets/images/product/other/02.jpg')}
								img2={require('../../../assets/images/product/other/02.jpg')}
								img3={require('../../../assets/images/product/other/02.jpg')}
								title={'Cameras'}
								subtitle={'RC Quadcopter Drone'}
								sale={'$1,250.00'}
								regular={'$2,999.00'}
							/>

							<ProductCard
								img1={require('../../../assets/images/product/other/06.jpg')}
								img2={require('../../../assets/images/product/other/06.jpg')}
								img3={require('../../../assets/images/product/other/06.jpg')}
								title={'Cameras'}
								subtitle={'New X5C-1 2.4Ghz Gyro'}
								sale={'$1,250.00'}
								regular={'$2,999.00'}
							/>


						</div>
						<div className="col-lg-4 col-sm-12">
							<ProductCard
								img1={require('../../../assets/images/product/other/03.jpg')}
								img2={require('../../../assets/images/product/other/03.jpg')}
								img3={require('../../../assets/images/product/other/03.jpg')}
								title={'Headphones'}
								subtitle={'Beats Solo'}
								sale={'$1,250.00'}
								regular={'$2,999.00'}
							/>

							<ProductCard
								img1={require('../../../assets/images/product/other/07.jpg')}
								img2={require('../../../assets/images/product/other/07.jpg')}
								img3={require('../../../assets/images/product/other/07.jpg')}
								title={'Computers'}
								subtitle={'Apple iPad Air 2 32GB 9.7"'}
								sale={'$5,759.68'}
								regular={'$2,999.00'}
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4 col-sm-12">
							<ProductCard
								img1={require('../../../assets/images/product/other/01.jpg')}
								img2={require('../../../assets/images/product/other/01.jpg')}
								img3={require('../../../assets/images/product/other/01.jpg')}
								title={'Laptops'}
								subtitle={'Apple iPad Mini'}
								sale={'$1,250.00'}
								regular={'$2,999.00'}
							/>

							<ProductCard
								img1={require('../../../assets/images/product/other/05.jpg')}
								img2={require('../../../assets/images/product/other/05.jpg')}
								img3={require('../../../assets/images/product/other/05.jpg')}
								title={'Cameras'}
								subtitle={'Apple iPad Mini'}
								sale={'$1,250.00'}
								regular={'$2,999.00'}
							/>
						</div>
						<div className="col-lg-4 col-sm-12">
							<ProductCard
								img1={require('../../../assets/images/product/other/02.jpg')}
								img2={require('../../../assets/images/product/other/02.jpg')}
								img3={require('../../../assets/images/product/other/02.jpg')}
								title={'Cameras'}
								subtitle={'RC Quadcopter Drone'}
								sale={'$1,250.00'}
								regular={'$2,999.00'}
							/>

							<ProductCard
								img1={require('../../../assets/images/product/other/06.jpg')}
								img2={require('../../../assets/images/product/other/06.jpg')}
								img3={require('../../../assets/images/product/other/06.jpg')}
								title={'Cameras'}
								subtitle={'New X5C-1 2.4Ghz Gyro'}
								sale={'$1,250.00'}
								regular={'$2,999.00'}
							/>


						</div>
						<div className="col-lg-4 col-sm-12">
							<ProductCard
								img1={require('../../../assets/images/product/other/03.jpg')}
								img2={require('../../../assets/images/product/other/03.jpg')}
								img3={require('../../../assets/images/product/other/03.jpg')}
								title={'Headphones'}
								subtitle={'Beats Solo'}
								sale={'$1,250.00'}
								regular={'$2,999.00'}
							/>

							<ProductCard
								img1={require('../../../assets/images/product/other/07.jpg')}
								img2={require('../../../assets/images/product/other/07.jpg')}
								img3={require('../../../assets/images/product/other/07.jpg')}
								title={'Computers'}
								subtitle={'Apple iPad Air 2 32GB 9.7"'}
								sale={'$5,759.68'}
								regular={'$2,999.00'}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="wrap-imagebox flat-imagebox">
				<div className="flat-row-title style2">
					<h3>Our Products</h3>
				</div>
				<div className="row">
					<Card
						img={require('../../../assets/images/product/other/s02.jpg')}
						title={'Cameras'}
						subtitle={'Apple iPad Mini'}
						sale={'$1,250.00'}
						regular={'$2,999.00'}
					/>
					<Card
						img={require('../../../assets/images/product/other/s03.jpg')}
						title={'Headphones'}
						subtitle={'Apple iPhone 7'}
						sale={'$1,250.00'}
						regular={'$2,999.00'}
					/>

					<Card
						img={require('../../../assets/images/product/other/s05.jpg')}
						title={'Cameras'}
						subtitle={'Playstation Game'}
						sale={'$1,250.00'}
						regular={'$2,999.00'}
					/>
					<Card
						img={require('../../../assets/images/product/other/s03.jpg')}
						title={'Headphones'}
						subtitle={'Apple iPhone 7 32 GB'}
						sale={'$1,250.00'}
						regular={'$2,999.00'}
					/>
				</div>
			</div>
			<MostView />
		</div>
	)
}

export default ProductWithSlider