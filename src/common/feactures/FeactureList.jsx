import React from 'react'

const FeactureList = (props) => {
  return (
    <div className="col-md-6 col-lg-3">
    <div className="iconbox style1">
        <div className="box-header">
            <div className="image">
                <img src={props.img} alt=""/>
            </div>
            <div className="box-title">
                <h3>{props.title}</h3>
            </div>
            <div className="clearfix"/>
        </div> 
    </div>
</div>
  )
}

export default FeactureList