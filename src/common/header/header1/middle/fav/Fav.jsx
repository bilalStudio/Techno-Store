import React from 'react'
import { Link } from 'react-router-dom'
const Fav = (props) => {
    return (
        <li className={props.className}>
            <Link to="compare.html" title="">
                <img src={props.img} alt="" />
            </Link>
        </li>
    )
}

export default Fav