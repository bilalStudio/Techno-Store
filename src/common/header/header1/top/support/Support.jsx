import React from 'react'
import { Link } from 'react-router-dom'
const Support = () => {
    return (
        <div className="col-md-4">
            <ul className="flat-support">
                <li>
                    <Link to="faq.html" title="">Support</Link>
                </li>
                <li>
                    <Link to="store-location.html" title="">Store Locator</Link>
                </li>
                <li>
                    <Link to="order-tracking.html" title="">Track Your Order</Link>
                </li>
            </ul>
        </div>
    )
}

export default Support