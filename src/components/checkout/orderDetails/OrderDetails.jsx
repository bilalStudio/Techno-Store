import React from 'react';
import { Link } from 'react-router-dom';

const OrderDetails = () => {
    return (
        <div className="col-md-5">
            <div className="cart-totals style2">
                <h3>Your Order</h3>
                <form action="#" method="get" >
                    <table className="product">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Apple iPad Mini<br />G2356</td>
                                <td>$99.00</td>
                            </tr>
                            <tr>
                                <td>Beats Pill + Portable<br />Speaker</td>
                                <td>$100.00</td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                            <tr>
                                <td>Total</td>
                                <td className="subtotal">$1,999.00</td>
                            </tr>
                            <tr>
                                <td>Shipping</td>
                                <td className="btn-radio">
                                    <div className="radio-info">
                                        <input type="radio" checked id="flat-rate" name="radio-flat-rate" />
                                        <label htmlFor="flat-rate">Flat Rate: <span>$3.00</span></label>
                                    </div>
                                    <div className="radio-info">
                                        <input type="radio" id="free-shipping" name="radio-flat-rate" />
                                        <label htmlFor="free-shipping">Free Shipping</label>
                                    </div>
                                    <div className="btn-shipping">
                                        <Link to="#" title="">Calculate Shipping</Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td className="price-total">$1,999.00</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="btn-radio style2">
                        <div className="radio-info">
                            <input type="radio" id="flat-payment" checked name="radio-cash-2" />
                            <label htmlFor="flat-payment">Check Payments</label>
                            <p>Please send a check to Store Name, Store Street, Store <br />Town, Store State / County, Store Postcode.</p>
                        </div>
                        <div className="radio-info">
                            <input type="radio" id="bank-transfer" name="radio-cash-2" />
                            <label htmlFor="bank-transfer">Direct Bank Transfer</label>
                        </div>
                        <div className="radio-info">
                            <input type="radio" id="cash-delivery" name="radio-cash-2" />
                            <label htmlFor="cash-delivery">Cash on Delivery</label>
                        </div>
                        <div className="radio-info">
                            <input type="radio" id="paypal" name="radio-cash-2" />
                            <label htmlFor="paypal">Paypal</label>
                        </div>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" id="checked-order" name="checked-order" checked />
                        <label htmlFor="checked-order">I’ve read and accept the terms & conditions *</label>
                    </div>
                    <div className="btn-order">
                        <Link to="#" className="order" title="">Place Order</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default OrderDetails