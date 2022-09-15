import React from 'react'
import { Link } from 'react-router-dom'
const CallUs = () => {
    return (
        <div className="col-md-4">
            <ul className="flat-infomation">
                <li className="phone">
                    Call us: <Link to="#" title="">(888) 1234 56789</Link>
                </li>
            </ul>
        </div>
    )
}

export default CallUs