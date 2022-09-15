import React from 'react';
import ProductCategory from '../../components/home/product_categories/ProductCategory';

const BestSeller = () => {
    return (
        <div className="widget widget-products">
            <div className="widget-title">
                <h3>Best Seller</h3>
            </div>
            <ProductCategory
                img1={require('../../assets/images/product/highlights/10.jpg')}
                img2={require('../../assets/images/product/highlights/9.jpg')}
                img3={require('../../assets/images/product/highlights/8.jpg')}
            />
        </div>
    )
}

export default BestSeller