import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <section id="header" className="header">
        {/* header-top */}
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className=" col-sm-6">
                <ul className="flat-support">
                  <li>
                    <Link to='#'>Support</Link>
                  </li>
                  <li>
                    <Link to='#'>Store Locator</Link>
                  </li>
                  <li>
                    <Link to='#'>Track Your Order</Link>
                  </li>
                </ul>
                {/* /.flat-support  */}
              </div>
              {/* /.col-md-3 */}
              <div className="col-sm-6">
                <ul className="flat-unstyled">
                  <li className="account">
                    <Link to='#'>Store Locator<i className="fa fa-angle-down"
                      aria-hidden="true"/></Link>

                    <ul className="unstyled">
                      <li>
                        <Link to='#'>Login</Link>
                      </li>
                      <li>
                        <Link to='#'>Wishlist</Link>
                      </li>
                      <li>
                        <Link to='#'>My Cart</Link>
                      </li>
                      <li>
                        <Link to='#'>My Account</Link>
                      </li>
                      <li>
                        <Link to='#'>Checkout</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to='#'>USD<i className="fa fa-angle-down" aria-hidden="true"></i></Link>

                    <ul className="unstyled">
                      <li>
                        <Link to='#'>Euro</Link>
                      </li>
                      <li>
                        <Link to='#'>Dolar</Link>

                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to='#'>English<i className="fa fa-angle-down"
                      aria-hidden="true"></i></Link>

                    <ul className="unstyled">
                      <li>
                        <Link to='#'>Turkish</Link>

                      </li>
                      <li>
                        <Link to='#'>English</Link>

                      </li>
                      <li>
                        <Link to='#'>اللغة العربية</Link>
                      </li>
                      <li>
                        <Link to='#'>Español</Link>

                      </li>
                      <li>
                        <Link to='#'>Italiano</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                {/* /.flat-unstyled */}
              </div>
              {/* /.col-md-3 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        {/* /.header-top-end */}

        {/* Header-middle */}
        <div className="header-middle">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                 {/* /#logo*/}
                <div id="logo" className="logo style1">
                  <Link to='#'>
                    <img src={require('../assets/images/logos/logo.png')} alt="" />
                  </Link>

                </div>
               
                <div className="nav-wrap">
                  <div id="mainnav" className="mainnav style1">
                    <ul className="menu">
                      <li className="column-1">
                        <Link to='#'>Home</Link>
                        <ul className="submenu">
                          <li>
                            <Link to='#'>
                              <i className="fa fa-angle-right"
                              aria-hidden="true"/>Home Layout 01
                              </Link>

                          </li>
                          <li>
                            <Link to='#'>
                            <i className="fa fa-angle-right" aria-hidden="true"/>
                            Home Layout 02</Link>
                          </li>
                          <li>
                            <Link to='#'>
                              <i className="fa fa-angle-right" aria-hidden="true"/>
                              Home
                              Layout 03</Link>
                          </li>
                          <li>
                            <Link to='#'>
                              <i
                              className="fa fa-angle-right" aria-hidden="true"/>
                              Home
                              Layout 04</Link>
                          </li>
                          <li>
                            <Link to='#'>
                              <i className="fa fa-angle-right" aria-hidden="true"/>
                              Home
                              Layout 05</Link>
                          </li>
                          <li>
                            <Link to='#'>
                              <i className="fa fa-angle-right" aria-hidden="true"/>
                              Home
                              Layout 06</Link>

                          </li>
                          <li>
                            <Link to='#'>
                              <i
                              className="fa fa-angle-right" aria-hidden="true"/>
                              Home
                              Layout 07</Link>
                          </li>
                          <li>
                            <Link to='#'>
                              <i
                              className="fa fa-angle-right" aria-hidden="true"/>
                              Home
                              Layout 08</Link>
                          </li>
                          <li>
                            <Link to='#'><i
                              className="fa fa-angle-right" aria-hidden="true"/>
                              Home
                              Layout 09</Link>
                          </li>
                          <li>
                            <Link to='#'><i
                              className="fa fa-angle-right" aria-hidden="true"/>
                              Home
                              Layout 10</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="column-1">
                        <Link to='#'>Shop</Link>
                        <ul className="submenu">
                          <li>
                            <Link to='#'>
                              <i className="fa fa-angle-right"
                              aria-hidden="true"/>
                              Shop left sidebar</Link>
                          </li>
                          <li>
                            <Link to='#'>
                              <i className="fa fa-angle-right"
                              aria-hidden="true"/>
                              Shop right sidebar</Link>
                          </li>
                          <li>
                            <Link to='#'>
                              <i className="fa fa-angle-right"
                              aria-hidden="true"/>
                              Shop list view</Link>
                          </li>
                          <li>
                            <Link to='#'>
                              <i className="fa fa-angle-right"
                              aria-hidden="true"/>
                                Shop
                              full width</Link>
                          </li>
                          <li>
                            <Link to='#'><i className="fa fa-angle-right"
                              aria-hidden="true"/>Shop
                              03 column</Link>
                          </li>
                          <li>
                            <Link to='#'>
                              <i className="fa fa-angle-right" aria-hidden="true"/>Shop
                              cart</Link>
                          </li>
                          <li>
                            <Link to='#'><i
                              className="fa fa-angle-right" aria-hidden="true"/>Shop
                              checkout</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="column-1">
                        <Link to='#'>Features</Link>
                        <ul className="submenu">
                          <li>
                            <Link to='#'><i className="fa fa-angle-right"
                              aria-hidden="true"/>Home Theater
                              Systems</Link>
                          </li>
                          <li>
                            <Link to='#'><i className="fa fa-angle-right"
                              aria-hidden="true"/>Receivers &amp; Amplifiers</Link>
                          </li>
                          <li>
                            <Link to='#'><i className="fa fa-angle-right"
                              aria-hidden="true"/>Speakers</Link>
                          </li>
                          <li>
                            <Link to='#'><i className="fa fa-angle-right"
                              aria-hidden="true"></i>CD
                              Players &amp; Turntables</Link>
                          </li>
                          <li>
                            <Link to='#'><i className="fa fa-angle-right"
                              aria-hidden="true"></i>High-Resolution
                              Audio</Link>
                          </li>
                          <li>
                            <Link to='#'><i className="fa fa-angle-right"
                              aria-hidden="true"></i>4K Ultra HD
                              TVs</Link>
                          </li>
                        </ul>
                      
                      </li>
                     
                      <li className="has-mega-menu">

                        <Link to='#'>Electronic</Link>
                        <div className="submenu">
                          <div className="row">
                            <div className="col-md-3">
                              <h3 className="cat-title">Accessories</h3>
                              <ul>
                                <li>

                                  <Link to='#'>Electronics</Link>
                                </li>
                                <li>
                                  <Link to='#'>Furniture</Link>
                                </li>
                                <li>
                                  <Link to='#'>Accessories</Link>
                                </li>
                                <li>
                                  <Link to='#'>Divided</Link>
                                </li>
                                <li>
                                  <Link to='#'>Everyday Fashion</Link>
                                </li>
                                <li>
                                  <Link to='#'>Modern Classic</Link>
                                </li>
                                <li>
                                  <Link to='#'>Party</Link>
                                </li>
                              </ul>
                              <div className="show">
                                <Link to='#'>Shop All</Link>
                              </div>
                            </div>
                          
                            <div className="col-md-3">
                              <h3 className="cat-title">Laptop And Computer</h3>
                              <ul>
                                <li>
                                  <Link to='#'>Networking &amp; Internet
                                    Devices</Link>
                                </li>
                                <li>
                                  <Link to='#'>Laptops,
                                    Desktops &amp; Monitors</Link>
                                </li>
                                <li>
                                  <Link to='#'>Hard Drives &amp; Memory
                                    Cards</Link>
                                </li>
                                <li>
                                  <Link to='#'>Printers &amp; Ink</Link>
                                </li>
                                <li>
                                  <Link to='#'>Networking &amp; Internet
                                    Devices</Link>
                                </li>
                                <li>
                                  <Link to='#'>Computer Accessories</Link>
                                </li>
                                <li>
                                </li>
                              </ul>
                              <div className="show">
                                <Link to='#'>Shop All</Link>
                              </div>
                            </div>
                           
                            <div className="col-md-4">
                              <h3 className="cat-title">Audio &amp; Video</h3>
                              <ul>
                                <li>
                                  <Link to='#'>Headphones &amp; Speakers</Link>
                                </li>
                                <li>
                                  <Link to='#'>Home Entertainment Systems</Link>
                                </li>
                                <li>
                                  <Link to='#'>MP3 &amp; Media Players</Link>
                                </li>
                              </ul>
                              <div className="show">
                                <Link to='#'>Shop All</Link>
                              </div>
                            </div>
                           
                            <div className="col-md-2">
                              <h3 className="cat-title">Home Audio</h3>
                              <ul>
                                <li>
                                  <Link to='#'>Home Theater Systems</Link>
                                </li>
                                <li>
                                  <Link to='#'>Receivers &amp; Amplifiers</Link>
                                </li>
                                <li>

                                  <Link to="#">Speakers</Link>
                                </li>
                                <li>

                                  <Link to="#">CD Players &amp; Turntables</Link>
                                </li>
                                <li>

                                  <Link to="#">High-Resolution Audio</Link>
                                </li>
                                <li>

                                  <Link to="#">4K Ultra HD TVs</Link>
                                </li>
                              </ul>
                              <div className="show">

                                <Link to="#">Shop All</Link>
                              </div>
                            </div>
                          
                          </div>
                        
                          <div className="row">
                            <div className="col-md-6">
                              <div className="banner-box">
                                <div className="inner-box">

                                  <Link to="#">
                                    <img src={require('../assets/images/banner_boxes/submenu-01.png')} alt="" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                           
                            <div className="col-md-6">
                              <div className="banner-box">
                                <div className="inner-box">

                                  <Link to="#">
                                    <img src={require('../assets/images/banner_boxes/submenu-02.png')} alt="" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                            
                          </div>
                        </div>
                      </li>
                      <li className="column-1">
                        <Link to="#">Pages</Link>
                        <ul className="submenu">
                          <li>

                            <Link to="#"><i className="fa fa-angle-right"
                              aria-hidden="true"></i>About</Link>
                          </li>
                          <li>

                            <Link to="#"><i className="fa fa-angle-right"
                              aria-hidden="true"></i>404
                              Page</Link>
                          </li>
                          <li>

                            <Link to="#"><i className="fa fa-angle-right"
                              aria-hidden="true"></i>Brands
                              Page</Link>
                          </li>
                          <li>

                            <Link to="#"><i
                              className="fa fa-angle-right" aria-hidden="true"></i>Categories
                              01</Link>
                          </li>
                          <li>

                            <Link to="#"><i
                              className="fa fa-angle-right" aria-hidden="true"></i>Categories
                              02</Link>
                          </li>
                          <li>
                            <Link to="#"><i className="fa fa-angle-right"
                              aria-hidden="true"></i>Element</Link>
                          </li>
                          <li>

                            <Link to="#"><i className="fa fa-angle-right"
                              aria-hidden="true"></i>FAQ</Link>
                          </li>
                          <li>

                            <Link to="#"><i
                              className="fa fa-angle-right" aria-hidden="true"></i>Order
                              Tracking</Link>
                          </li>
                          <li>
                            <Link to="#"><i
                              className="fa fa-angle-right"
                              aria-hidden="true"></i>Terms &amp; Conditions</Link>
                          </li>
                          <li>
                            <Link to="#"><i
                              className="fa fa-angle-right" aria-hidden="true"></i>Single
                              Product 01</Link>
                          </li>
                          <li>
                            <Link to="#"><i
                              className="fa fa-angle-right" aria-hidden="true"></i>Single
                              Product 02</Link>
                          </li>
                          <li>
                            <Link to="#"><i
                              className="fa fa-angle-right" aria-hidden="true"></i>Single
                              Product 03</Link>
                          </li>
                          <li>
                            <Link to="#"><i
                              className="fa fa-angle-right" aria-hidden="true"></i>Single
                              Product 04</Link>
                          </li>
                          <li>
                            <Link to="#"><i
                              className="fa fa-angle-right" aria-hidden="true"></i>Single
                              Product 05</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="column-1">
                        <Link to="#">Blog</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="#"><i className="fa fa-angle-right"
                              aria-hidden="true"></i>Blog left
                              sidebar</Link>
                          </li>
                          <li>
                            <Link to="#"><i className="fa fa-angle-right"
                              aria-hidden="true"></i>Blog
                              right sidebar</Link>
                          </li>
                          <li>
                            <Link to="#"><i className="fa fa-angle-right"
                              aria-hidden="true"></i>Blog
                              list</Link>
                          </li>
                          <li>
                            <Link to="#"><i className="fa fa-angle-right"
                              aria-hidden="true"></i>Blog
                              02 column</Link>
                          </li>
                          <li>
                            <Link to="#"><i className="fa fa-angle-right"
                              aria-hidden="true"></i>Blog
                              full width</Link>
                          </li>
                          <li>
                            <Link to="#"><i
                              className="fa fa-angle-right" aria-hidden="true"></i>Blog
                              single</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="column-1">
                        <Link to="#">Contact</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="#"><i className="fa fa-angle-right"
                              aria-hidden="true"></i>Contact
                              01</Link>
                          </li>
                          <li>
                            <Link to="#"><i
                              className="fa fa-angle-right" aria-hidden="true"></i>Contact
                              02</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                   
                  </div>
                 
                </div>
                
                <div className="btn-menu style1">
                  <span></span>
                </div>
                
                <ul className="flat-infomation style1">
                  <li className="phone">
                    <img src={require('../assets/images/icons/call-3.png')} alt="" />
                    Call Us: 
                    <Link to="#">(888) 1234 56789</Link>
                  </li>
                </ul>
                
              </div>
              {/* /.col-md-12 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        {/* /.header-middle */}
        
        <div className="header-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-2">
                <div id="mega-menu" className="style1">
                  <div className="btn-mega"><span></span>ALL CATEGORIES</div>
                  <ul className="menu">
                    <li>
                      <Link to="#" title="" className="dropdown">
                        <span className="menu-img">
                          <img src={require('../assets/images/icons/menu/01.png')} alt="" />
                        </span>
                        <span className="menu-title">
                          Laptops &amp; Mac
                        </span>
                      </Link>
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
                                    src={require('../assets/images/icons/right-2.png')} alt="" /></Link>
                                </div>
                              </div>
                              <div className="banner-img">
                                <img src="../images/banner_boxes/menu-01.png" alt="" />
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
                                    src={require('../assets/images/icons/right-2.png')} alt="" /></Link>
                                </div>
                              </div>
                              <div className="banner-img">
                                <img src={require('../assets/images/banner_boxes/menu-02.png')} alt="" />
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
                                    src={require('../assets/images/icons/right-2.png')} alt="" /></Link>
                                </div>
                              </div>
                              <div className="banner-img">
                                <img src={require('../assets/images/banner_boxes/menu-03.png')} alt="" />
                              </div>
                              <div className="clearfix"></div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* /.drop-menu */}
                    </li>
                    <li>
                      <Link to="#" title="" className="dropdown">
                        <span className="menu-img">
                          <img src={require('../assets/images/icons/menu/02.png')} alt="" />
                        </span>
                        <span className="menu-title">
                          Mobile &amp; Tablet
                        </span>
                      </Link>
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
                                    src={require('../assets/images/icons/right-2.png')} alt="" /></Link>
                                </div>
                              </div>
                              <div className="banner-img">
                                <img src="../images/banner_boxes/menu-01.png" alt="" />
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
                                    src={require('../assets/images/icons/right-2.png')} alt="" /></Link>
                                </div>
                              </div>
                              <div className="banner-img">
                                <img src={require('../assets/images/banner_boxes/menu-02.png')} alt="" />
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
                                    src={require('../assets/images/icons/right-2.png')} alt="" /></Link>
                                </div>
                              </div>
                              <div className="banner-img">
                                <img src="../images/banner_boxes/menu-03.png" alt="" />
                              </div>
                              <div className="clearfix"></div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* /.drop-menu */}
                    </li>
                    <li>
                      <Link to="#" title="" className="dropdown">
                        <span className="menu-img">
                          <img src="../images/icons/menu/03.png" alt="" />
                        </span>
                        <span className="menu-title">
                          Home Devices
                        </span>
                      </Link>
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
                                    src={require('../assets/images/icons/right-2.png')} alt="" /></Link>
                                </div>
                              </div>
                              <div className="banner-img">
                                <img src={require('../assets/images/banner_boxes/menu-01.png')} alt="" />
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
                                    src={require('../assets/images/icons/right-2.png')} alt="" /></Link>
                                </div>
                              </div>
                              <div className="banner-img">
                                <img src={require('../assets/images/banner_boxes/menu-02.png')} alt="" />
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
                                    src={require('../assets/images/icons/right-2.png')} alt="" /></Link>
                                </div>
                              </div>
                              <div className="banner-img">
                                <img src={require('../assets/images/banner_boxes/menu-03.png')} alt="" />
                              </div>
                              <div className="clearfix"></div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* /.drop-menu */}
                    </li>
                    <li>
                      <Link to="#" title="">
                        <span className="menu-img">
                          <img src={require('../assets/images/icons/menu/04.png')} alt="" />
                        </span>
                        <span className="menu-title">
                          Software
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" title="">
                        <span className="menu-img">
                          <img src={require('../assets/images/icons/right-2.png')} alt="" />
                        </span>
                        <span className="menu-title">
                          TV &amp; Audio
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" title="">
                        <span className="menu-img">
                          <img src={require('../assets/images/icons/menu/06.png')} alt="" />
                        </span>
                        <span className="menu-title">
                          Sports &amp; Fitness
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" title="" className="dropdown">
                        <span className="menu-img">
                          <img src={require('../assets/images/icons/menu/07.png')} alt="" />
                        </span>
                        <span className="menu-title">
                          Games &amp; Toys
                        </span>
                      </Link>
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
                                    src={require('../assets/images/icons/right-2.png')} alt="" /></Link>
                                </div>
                              </div>
                              <div className="banner-img">
                                <img src={require('../assets/images/banner_boxes/menu-01.png')} alt="" />
                              </div>
                              <div className="clearfix" />
                            </li>
                            <li>
                              <div className="banner-text">
                                <div className="banner-title">
                                  TV &amp; Audio
                                </div>
                                <div className="more-Link">
                                  <Link to="#" title="">Shop Now <img
                                    src={require('../assets/images/icons/right-2.png')} alt="" /></Link>
                                </div>
                              </div>
                              <div className="banner-img">
                                <img src={require('../assets/images/banner_boxes/menu-02.png')} alt="" />
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
                                    src={require('../assets/images/icons/right-2.png')} alt="" /></Link>
                                </div>
                              </div>
                              <div className="banner-img">
                                <img src={require('../assets/images/banner_boxes/menu-03.png')} alt="" />
                              </div>
                              <div className="clearfix"></div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* /.drop-menu */}
                    </li>
                    <li>
                      <Link to="#" title="">
                        <span className="menu-img">
                          <img src={require('../assets/images/banner_boxes/menu-02.png')} alt="" />
                        </span>
                        <span className="menu-title">
                          Video Cameras
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" title="" className="dropdown">
                        <span className="menu-img">
                          <img src={require('../assets/images/banner_boxes/menu-02.png')} alt="" />
                        </span>
                        <span className="menu-title">
                          Accessories
                        </span>
                      </Link>
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
                                    src={require('../assets/images/icons/right-2.png')} alt="" /></Link>
                                </div>
                              </div>
                              <div className="banner-img">
                                <img src={require('../assets/images/banner_boxes/menu-01.png')} alt="" />
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
                                    src={require('../assets/images/icons/right-2.png')} /*{require('/assets/images/product/other/s06.jpg')}*/ alt="" /></Link>
                                </div>
                              </div>
                              <div className="banner-img">
                                <img src={require('../assets/images/banner_boxes/menu-02.png')} alt="" />
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
                                    src={require('../assets/images/icons/right-2.png')} alt="" /></Link>
                                </div>
                              </div>
                              <div className="banner-img">
                                <img src={require('../assets/images/banner_boxes/menu-03.png')} alt="" />
                              </div>
                              <div className="clearfix"></div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* /.drop-menu */}
                    </li>
                    <li>
                      <Link to="#" title="" className="dropdown">
                        <span className="menu-img">
                          <img src={require('../assets/images/icons/menu/10.png')} alt="" />
                        </span>
                        <span className="menu-title">
                          Security
                        </span>
                      </Link>
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
                                    src={require('../assets/images/icons/right-2.png')} alt="" /></Link>
                                </div>
                              </div>
                              <div className="banner-img">
                                <img src={require('../assets/images/banner_boxes/menu-01.png')} alt="" />
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
                                    src={require('../assets/images/icons/right-2.png')} alt="" /></Link>
                                </div>
                              </div>
                              <div className="banner-img">
                                <img src={require('../assets/images/banner_boxes/menu-02.png')} alt="" />
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
                                    src={require('../assets/images/icons/right-2.png')} alt="" /></Link>
                                </div>
                              </div>
                              <div className="banner-img">
                                <img src={require('../assets/images/banner_boxes/menu-03.png')} alt="" />
                              </div>
                              <div className="clearfix"></div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* /.drop-menu */}
                    </li>
                  </ul>
                  {/* /.menu */}
                </div>
              </div>
              {/* /.col-md-3 */}
              <div className="col-md-9 col-10">
                <div className="top-search style1">
                  <form action="#" method="get" className="form-search" accept-charset="utf-8">
                    <div className="cat-wrap cat-wrap-v1">
                      <select name="category">
                        <option value="" hidden="">All Category</option>
                        <option value="" hidden="">Cameras</option>
                        <option value="" hidden="">Computer</option>
                        <option value="" hidden="">Laptops</option>
                      </select>
                      <span><i className="fa fa-angle-down" aria-hidden="true"></i></span>
                      <div className="all-categories mCustomScrollbar _mCS_1">
                        <div id="mCSB_1"
                          className="mCustomScrollBox mCS-light-3 mCSB_vertical mCSB_inside"
                          style={{ maxHeight: "none" }} tabIndex="0">
                          <div id="mCSB_1_container" className="mCSB_container"
                            style={{ position: "relative", top: "0", left: "0" }} dir="ltr">
                            <div className="cat-list-search">
                              <div className="title">
                                Electronics
                              </div>
                              <ul>
                                <li>Components</li>
                                <li>Laptop</li>
                                <li>Monitor</li>
                                <li>Mp3 player</li>
                                <li>Scanners</li>
                              </ul>
                            </div>
                            {/* /.cat-list-search */}
                            <div className="cat-list-search">
                              <div className="title">
                                Furniture
                              </div>
                              <ul>
                                <li>Bookcases</li>
                                <li>Barstools</li>
                                <li>TV stands</li>
                                <li>Desks</li>
                                <li>Accent chairs</li>
                              </ul>
                            </div>
                            {/* /.cat-list-search */}
                            <div className="cat-list-search">
                              <div className="title">
                                Accessories
                              </div>
                              <ul>
                                <li>Software</li>
                                <li>Mobile</li>
                                <li>TV stands</li>
                                <li>Printers</li>
                                <li>Media</li>
                              </ul>
                            </div>
                            {/* /.cat-list-search */}
                          </div>
                          <div id="mCSB_1_scrollbar_vertical"
                            className="mCSB_scrollTools mCSB_1_scrollbar mCS-light-3 mCSB_scrollTools_vertical"
                            style={{ display: "block" }}>
                            <div className="mCSB_draggerContainer">
                              <div id="mCSB_1_dragger_vertical" className="mCSB_dragger"
                                style={{ position: "absolute", minHeight: "30px", display: "block", height: "171px", maxHeight: "253px", top: "0px" }}>
                                <div className="mCSB_dragger_bar"
                                  style={{ lineHeight: "30px" }}></div>
                              </div>
                              <div className="mCSB_draggerRail"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /.all-categories */}
                    </div>
                    {/* /.cat-wrap */}
                    <div className="box-search">
                      <input type="text" name="search"
                        placeholder="Search what you looking for ?" />
                      <span className="btn-search">
                        <button type="submit" className="waves-effect">
                          <img src={require('../assets/images/icons/search-2.png')} alt="" />
                        </button>
                      </span>
                      <div className="search-suggestions">
                        <div className="box-suggestions">
                          <div className="title">
                            Search Suggestions
                          </div>
                          <ul>
                            <li>
                              <div className="image">
                                <img src={require('../assets/images/product/other/s05.jpg')} alt="" />
                              </div>
                              <div className="info-product">
                                <div className="name">
                                  <Link to="#" title="">Razer
                                    RZ02-01071500-R3M1</Link>
                                </div>
                                <div className="price">
                                  <span className="sale">
                                    $50.00
                                  </span>
                                  <span className="regular">
                                    $2,999.00
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="image">
                                <img src={require('../assets/images/product/other/s06.jpg')} alt="" />
                              </div>
                              <div className="info-product">
                                <div className="name">
                                  <Link to="#" title="">Notebook Black Spire V
                                    Nitro VN7-591G</Link>
                                </div>
                                <div className="price">
                                  <span className="sale">
                                    $24.00
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="image">
                                <img src={require('../assets/images/product/other/14.jpg')} alt="" />
                              </div>
                              <div className="info-product">
                                <div className="name">
                                  <Link to="#" title="">Apple iPad Mini G2356</Link>
                                </div>
                                <div className="price">
                                  <span className="sale">
                                    $90.00
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="image">
                                <img src={require('../assets/images/product/other/02.jpg')} alt="" />
                              </div>
                              <div className="info-product">
                                <div className="name">
                                  <Link to="#" title="">Razer
                                    RZ02-01071500-R3M1</Link>
                                </div>
                                <div className="price">
                                  <span className="sale">
                                    $50.00
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="image">
                                <img src={require('../assets/images/product/other/l01.jpg')} alt="" />
                              </div>
                              <div className="info-product">
                                <div className="name">
                                  <Link to="#" title="">Apple iPad Mini G2356</Link>
                                </div>
                                <div className="price">
                                  <span className="sale">
                                    $24.00
                                  </span>
                                  <span className="regular">
                                    $2,999.00
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="image">
                                <img src={require('../assets/images/product/other/s08.jpg')} alt="" />
                              </div>
                              <div className="info-product">
                                <div className="name">
                                  <Link to="#" title="">Beats Snarkitecture
                                    Headphones</Link>
                                </div>
                                <div className="price">
                                  <span className="sale">
                                    $90.00
                                  </span>
                                  <span className="regular">
                                    $2,999.00
                                  </span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        {/* /.box-suggestions  */}
                        <div className="box-cat mCustomScrollbar _mCS_2 mCS_no_scrollbar">
                          <div id="mCSB_2"
                            className="mCustomScrollBox mCS-light-3 mCSB_vertical mCSB_inside"
                            style={{ maxHeight: "none" }} tabIndex="0">
                            <div id="mCSB_2_container"
                              className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                              style={{ position: "relative", top: "0", left: "0" }} dir="ltr">
                              <div className="cat-list-search">
                                <div className="title">
                                  Categories
                                </div>
                                <ul>
                                  <li>
                                    <Link to="#">Networking &amp; Internet
                                      Devices</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Laptops,
                                      Desktops &amp; Monitors</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Hard Drives &amp; Memory
                                      Cards</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Printers &amp; Ink</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Networking &amp; Internet
                                      Devices</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Computer Accessories</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Software</Link>
                                  </li>
                                </ul>
                              </div>
                              {/* /.cat-list-search  */}
                            </div>
                            <div id="mCSB_2_scrollbar_vertical"
                              className="mCSB_scrollTools mCSB_2_scrollbar mCS-light-3 mCSB_scrollTools_vertical"
                              style={{ display: "none" }}>
                              <div className="mCSB_draggerContainer">
                                <div id="mCSB_2_dragger_vertical"
                                  className="mCSB_dragger"
                                  style={{ position: "absolute", minHeight: "30px", height: "0px", top: "0px" }}>
                                  <div className="mCSB_dragger_bar"
                                    style={{ lineHeight: "30px" }} />
                                </div>
                                <div className="mCSB_draggerRail" />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /.box-cat  */}
                      </div>
                      {/* /.search-suggestions  */}
                    </div>
                    {/* /.box-search  */}
                  </form>
                  {/* /.form-search  */}
                </div>
                {/* /.top-search  */}
                <span className="show-search">
                  <button />
                </span>
                <div className="box-cart style1">
                  <div className="inner-box">
                    <ul className="menu-compare-wishlist">
                      <li className="compare">
                        <Link to="#" title="">
                          <img src={require('../assets/images/icons/compare-2.png')} alt="" />
                        </Link>
                      </li>
                      <li className="wishlist">
                        <Link to="#" title="">
                          <img src={require('../assets/images/icons/wishlist-2.png')} alt="" />
                        </Link>
                      </li>
                    </ul>
                    {/* /.menu-compare-wishlist  */}
                  </div>
                  {/* /.inner-box  */}
                  <div className="inner-box">
                    <Link to="#" title="">
                      <div className="icon-cart">
                        <img src={require('../assets/images/icons/add-cart.png')} alt="" />
                        <span>4</span>
                      </div>
                      <div className="price">
                        $0.00
                      </div>
                    </Link>
                    <div className="dropdown-box">
                      <ul>
                        <li>
                          <div className="img-product">
                            <img src={require('../assets/images/product/other/img-cart-1.jpg')} alt="" />
                          </div>
                          <div className="info-product">
                            <div className="name">
                              Samsung - Galaxy S6 4G LTE with 32GB Memory Cell Phone
                            </div>
                            <div className="price">
                              <span>1 x</span>
                              <span>$250.00</span>
                            </div>
                          </div>
                          <div className="clearfix"></div>
                          <span className="delete">x</span>
                        </li>
                        <li>
                          <div className="img-product">
                            <img src={require('../assets/images/product/other/img-cart-2.jpg')} alt="" />
                          </div>
                          <div className="info-product">
                            <div className="name">
                              Sennheiser - Over-the-Ear Headphone System - Black
                            </div>
                            <div className="price">
                              <span>1 x</span>
                              <span>$250.00</span>
                            </div>
                          </div>
                          <div className="clearfix"></div>
                          <span className="delete">x</span>
                        </li>
                      </ul>
                      <div className="total">
                        <span>Subtotal:</span>
                        <span className="price">$1,999.00</span>
                      </div>
                      <div className="btn-cart">
                        <Link to="#" className="view-cart" title="">View Cart</Link>
                        <Link to="#" className="check-out" title="">Checkout</Link>
                      </div>
                    </div>
                  </div>
                  {/* /.inner-box  */}
                </div>
                {/* /.box-cart  */}
              </div>
              {/* /.col-md-9  */}
            </div>
            {/* /.row  */}
          </div>
          {/* /.container */}
        </div>
        {/* /.header-bottom */}





      </section>

    </>
  );
}

export default Header;