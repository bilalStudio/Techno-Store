import React from 'react'

const ProductList = (props) => {
    return (
        <tr>
            <td>
                <div className="img-product">
                    <img src={props.img} alt="" />
                </div>
                <div className="name-product">
                    {props.title} <br />G2356
                </div>
                <div className="price">
                    {props.price}
                </div>
                <div className="clearfix"></div>
            </td>
            <td>
                <div className="quanlity">
                    <span className="btn-down"></span>
                    <input type="number" name="number" value="5" min="1" max="100" placeholder="Quanlity" />
                    <span className="btn-up"></span>
                </div>
            </td>
            <td>
                <div className="total">
                    {props.total}
                </div>
            </td>
            <td>
                <a href="#" title="">
                    <img src={require('../../../assets/images/icons/delete.png')} alt="" />
                </a>
            </td>
        </tr>
    )
}

export default ProductList