import React from 'react'
import { Link } from 'react-router-dom'
const SocialLink = (props) => {
    return (
        <li>
            <Link to="#" title="">
                <i className={props.className} />
            </Link>
        </li>
    )
}

export default SocialLink