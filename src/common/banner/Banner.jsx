import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div className="widget banner-box">
            <div className="inner-box">
                <Link to="#" title="">
                    <img src={require('../../assets/images/banner_boxes/06.png')}/>
                </Link>
            </div>
        </div>
    )
}



export default Banner