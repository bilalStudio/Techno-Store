import React from 'react'
import { Link } from 'react-router-dom'
const CategoryDetail = () => {
    return (
        <div className="drop-menu">
            <div className="one-third">
                <div className="cat-title">
                    Laptop And Computer
                </div>
                <ul>
                    <li>
                        <Link to="#" title="">Networking &amp; Internet Devices</Link>
                    </li>
                    <li>
                        <Link to="#" title="">Laptops, Desktops &amp; Monitors</Link>
                    </li>
                    <li>
                        <Link to="#" title="">Hard Drives &amp; Memory Cards</Link>
                    </li>
                    <li>
                        <Link to="#" title="">Printers &amp; Ink</Link>
                    </li>
                    <li>
                        <Link to="#" title="">Networking &amp; Internet Devices</Link>
                    </li>
                    <li>
                        <Link to="#" title="">Computer Accessories</Link>
                    </li>
                    <li>
                        <Link to="#" title="">Software</Link>
                    </li>
                </ul>
                <div className="show">
                    <Link to="#" title="">Shop All</Link>
                </div>
            </div>
            <div className="one-third">
                <div className="cat-title">
                    Audio &amp; Video
                </div>
                <ul>
                    <li>
                        <Link to="#" title="">Headphones &amp; Speakers</Link>
                    </li>
                    <li>
                        <Link to="#" title="">Home Entertainment Systems</Link>
                    </li>
                    <li>
                        <Link to="#" title="">MP3 &amp; Media Players</Link>
                    </li>
                </ul>
                <div className="show">
                    <Link to="#" title="">Shop All</Link>
                </div>
            </div>
            <div className="one-third">
                <ul className="banner">
                    <li>
                        <div className="banner-text">
                            <div className="banner-title">
                                Headphones
                            </div>
                            <div className="more-Link">
                                <Link to="#" title="">Shop Now <img
                                    src={require('../../../assets/images/icons/right-2.png')} alt="" /></Link>
                            </div>
                        </div>
                        <div className="banner-img">
                            <img src={require('../../../assets/images/banner_boxes/menu-01.png')} alt="" />
                        </div>
                        <div className="clearfix"></div>
                    </li>
                    <li>
                        <div className="banner-text">
                            <div className="banner-title">
                                TV &amp; Audio
                            </div>
                            <div className="more-Link">
                                <Link to="#" title="">Shop Now <img
                                    src={require('../../../assets/images/icons/right-2.png')} alt="" /></Link>
                            </div>
                        </div>
                        <div className="banner-img">
                            <img src={require('../../../assets/images/banner_boxes/menu-02.png')} alt="" />
                        </div>
                        <div className="clearfix"></div>
                    </li>
                    <li>
                        <div className="banner-text">
                            <div className="banner-title">
                                Computers
                            </div>
                            <div className="more-Link">
                                <Link to="#" title="">Shop Now <img
                                    src={require('../../../assets/images/icons/right-2.png')} alt="" /></Link>
                            </div>
                        </div>
                        <div className="banner-img">
                            <img src={require('../../../assets/images/banner_boxes/menu-03.png')} alt="" />
                        </div>
                        <div className="clearfix"></div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CategoryDetail