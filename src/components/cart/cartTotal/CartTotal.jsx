import React from 'react';
import { Link } from 'react-router-dom';

const CartTotal = () => {
    return (
        <div className="col-lg-4">
            <div className="cart-totals">
                <h3>Cart Totals</h3>
                <form action="#" method="get" >
                    <table>
                        <tbody>
                            <tr>
                                <td>Subtotal</td>
                                <td className="subtotal">$2,589.00</td>
                            </tr>
                            <tr>
                                <td>Shipping</td>
                                <td className="btn-radio">
                                    <div className="radio-info">
                                        <input type="radio" id="flat-rate" checked name="radio-flat-rate" />
                                        <label >Flat Rate: <span>$3.00</span></label>
                                    </div>
                                    <div className="radio-info">
                                        <input type="radio" id="free-shipping" name="radio-flat-rate" />
                                        <label >Free Shipping</label>
                                    </div>
                                    <div className="btn-shipping">
                                        <Link to="#" title="">Calculate Shipping</Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td className="price-total">$1,591.00</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="btn-cart-totals">
                        <Link to="#" className="update" title="">Update Cart</Link>
                        <Link to="#" className="checkout" title="">Proceed to Checkout</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CartTotal