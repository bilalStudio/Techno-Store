import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
    return (
        <div className="widget widget-categories">
            <div className="widget-title">
                <h3>Categories<span></span></h3>
            </div>
            <ul className="cat-list style1 widget-content">
                <li>
                    <span>Accessories<i>(03)</i></span>
                    <ul className="cat-child">
                        <li>
                            <Link to="#" title="">TV</Link>
                        </li>
                        <li>
                            <Link to="#" title="">Monitors</Link>
                        </li>
                        <li>
                            <Link to="#" title="">Software</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <span>Cameras<i>(19)</i></span>
                    <ul className="cat-child">
                        <li>
                            <Link to="#" title="">Go Pro</Link>
                        </li>
                        <li>
                            <Link to="#" title="">Video</Link>
                        </li>
                        <li>
                            <Link to="#" title="">Software</Link>
                        </li>
                    </ul>
                </li>
                <li className="">
                    <span>Computers<i>(56)</i></span>
                    <ul className="cat-child">
                        <li>
                            <Link to="#" title="">Desktop</Link>
                        </li>
                        <li>
                            <Link to="#" title="">Monitors</Link>
                        </li>
                        <li>
                            <Link to="#" title="">Software</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <span>Laptops<i>(03)</i></span>
                    <ul className="cat-child">
                        <li>
                            <Link to="#" title="">Desktop</Link>
                        </li>
                        <li>
                            <Link to="#" title="">Monitors</Link>
                        </li>
                        <li>
                            <Link to="#" title="">Software</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <span>Networking<i>(03)</i></span>
                    <ul className="cat-child">
                        <li>
                            <Link to="#" title="">Monitors</Link>
                        </li>
                        <li>
                            <Link to="#" title="">Software</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <span>Old Products<i>(89)</i></span>
                    <ul className="cat-child">
                        <li>
                            <Link to="#" title="">Monitors</Link>
                        </li>
                        <li>
                            <Link to="#" title="">Software</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <span>Smartphones<i>(90)</i></span>
                    <ul className="cat-child">
                        <li>
                            <Link to="#" title="">Apple</Link>
                        </li>
                        <li>
                            <Link to="#" title="">HTC</Link>
                        </li>
                        <li>
                            <Link to="#" title="">Sony</Link>
                        </li>
                        <li>
                            <Link to="#" title="">Samsung</Link>
                        </li>
                        <li>
                            <Link to="#" title="">LG</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <span>Software<i>(23)</i></span>
                    <ul className="cat-child">
                        <li>
                            <Link to="#" title="">Desktop</Link>
                        </li>
                        <li>
                            <Link to="#" title="">Monitors</Link>
                        </li>
                        <li>
                            <Link to="#" title="">BKAV</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default ProductList