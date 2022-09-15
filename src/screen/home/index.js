import React from "react";
import BrandLogo from "../../components/home/brandlogo/BrandLogo";
import TopSlider from "../../components/home/homeSliderTop/TopSlider";
import ProductWithSlider from "../../components/home/products/ProductWithSlider";
import SpecialOfferSlider
	from "../../components/home/specialOfferSection/SpecialOfferSection";
import Feactures from "../../common/feactures/Feactures";
import ProductCat from "../../components/home/product_categories/ProductCat";
import Container from "../../common/container/Container";
const Home = () => {
	return (
		<Container  className={"style1"}>
			<div className="divider30"></div>
			<TopSlider />
			<Feactures />
			<main id="home-4">
				<div className="container">
					<div className="row">
						<SpecialOfferSlider />
						<ProductWithSlider />
					</div>
				</div>
			</main>
			<section className="flat-row flat-highlights style1">
				<div className="container">
					<div className="row">
						<ProductCat title={'Bestsellers'} />
						<ProductCat title={'Featured'} />
						<ProductCat title={'Hot Sale'} />
					</div>
				</div>
			</section>
			<BrandLogo />
			</Container>
	);
}
export default Home;