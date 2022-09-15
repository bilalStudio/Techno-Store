import React from 'react'

const Star = (props) => {
  return (
    <li className={props.className}>
      <span>
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
      </span>
      <span className="numb-star">{props.number}</span>
    </li>
  )
}

export default Star