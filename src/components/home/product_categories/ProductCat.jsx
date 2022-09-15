import React from 'react'
import ProductCategory from './ProductCategory'

const ProductCat = (props) => {
  return (
    <div className="col-md-4">
      <div className="flat-row-title">
        <h3>{props.title}</h3>
      </div>
      <ProductCategory
        img1={require('../../../assets/images/product/highlights/10.jpg')}
        img2={require('../../../assets/images/product/highlights/9.jpg')}
        img3={require('../../../assets/images/product/highlights/8.jpg')}
      />
    </div>
  )
}
export default ProductCat