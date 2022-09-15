import React from 'react'
import { Link } from 'react-router-dom'
const AccountDetails = () => {
    return (
        <div className="col-md-4">
            <ul className="flat-unstyled">
                <li className="account">
                    <Link to="#" title="">My Account<i className="fa fa-angle-down" aria-hidden="true"></i></Link>
                    <ul className="unstyled">
                        <li>
                            <Link to="#" title="">Login</Link>
                        </li>
                        <li>
                            <Link to="wishlist.html" title="">Wishlist</Link>
                        </li>
                        <li>
                            <Link to="shop-cart.html" title="">My Cart</Link>
                        </li>
                        <li>
                            <Link to="my-account.html" title="">My Account</Link>
                        </li>
                        <li>
                            <Link to="shop-checkout.html" title="">Checkout</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="#" title="">USD<i className="fa fa-angle-down" aria-hidden="true"></i></Link>
                    <ul className="unstyled">
                        <li>
                            <Link to="#" title="">Euro</Link>
                        </li>
                        <li>
                            <Link to="#" title="">Dolar</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="#" title="">English<i className="fa fa-angle-down" aria-hidden="true"></i></Link>
                    <ul className="unstyled">
                        <li>
                            <Link to="#" title="">Turkish</Link>
                        </li>
                        <li>
                            <Link to="#" title="">English</Link>
                        </li>
                        <li>
                            <Link to="#" title="">اللغة العربية</Link>
                        </li>
                        <li>
                            <Link to="#" title="">Español</Link>
                        </li>
                        <li>
                            <Link to="#" title="">Italiano</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default AccountDetails