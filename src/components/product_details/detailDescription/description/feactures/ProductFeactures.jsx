import React from 'react'

const ProductFeactures = (props) => {
    return (
        <div className="box-text">
            <h4>{props.title}</h4>
            <p>{props.paragraph}</p>
        </div>
    )
}

export default ProductFeactures