import React from 'react';
import Container from '../../common/container/Container';
import ProductList from '../../components/category_details/sidebar/categories/ProductList';
import PriceRange from '../../components/category_details/sidebar/priceRange/PriceRange';
import BrandCheckboxes from '../../components/category_details/sidebar/brands/BrandCheckboxes';
import ColorCheckbox from '../../components/category_details/sidebar/colorSearch/ColorCheckbox';
import BestSeller from '../../common/bestseller/BestSeller';
import Banner from '../../common/banner/Banner';
import Paggination from '../../components/category_details/pagination/Paggination';
import Slider from '../../common/recentProductSlider/Slider';

const CategoryDetail = () => {
    return (
        <Container>
            <main id="shop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="sidebar ">
                                {/* Product List */}
                                <ProductList />
                                {/* Prince */}
                                <PriceRange />
                                {/* Brands */}
                                <BrandCheckboxes />
                                {/* color */}
                                <ColorCheckbox />
                                {/* Best Seller */}
                                <BestSeller />
                                {/* Banner */}
                                <Banner />
                            </div>
                        </div>
                        <Paggination />
                    </div>
                </div>
            </main>
            <Slider />
        </Container>
    );
}

export default CategoryDetail;