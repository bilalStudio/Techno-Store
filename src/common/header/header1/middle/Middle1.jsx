import React from 'react'
import { Link } from 'react-router-dom'
import Cart from './cart/Cart'
import Fav from './fav/Fav'
import Search1 from './search/Search1'
const Middle1 = () => {
    return (
        <div className="header-middle">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div id="logo" className="logo">
                            <Link to="index.html" title="">
                                <img src={require('../../../../assets/images/logos/logo.png')} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <Search1 />
                    </div>
                    <div className="col-md-3">
                        <div className="box-cart">
                            <div className="inner-box">
                                <ul className="menu-compare-wishlist">
                                    <Fav
                                        className={'compare'}
                                        img={require('../../../../assets/images/icons/compare.png')}
                                    />
                                    <Fav
                                        className={'wishlist'}
                                        img={require('../../../../assets/images/icons/wishlist.png')}
                                    />
                                </ul>
                            </div>
                            <Cart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Middle1