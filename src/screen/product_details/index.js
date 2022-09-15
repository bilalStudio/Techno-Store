import React from 'react';
import Container from '../../common/container/Container';
import Slider from '../../common/recentProductSlider/Slider';
import SpecsDescription from '../../components/product_details/detailDescription/SpecsDescription';
import ProductInfo from '../../components/product_details/productInfo/ProductInfo';

const ProductDetails = () => {
    return (
        <Container>
            <ProductInfo />
            <SpecsDescription />
            <Slider />
        </Container>
    );
}
export default ProductDetails;