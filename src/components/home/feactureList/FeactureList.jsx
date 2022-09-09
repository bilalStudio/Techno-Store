import React from 'react'

const FeactureList = (props) => {
  return (
    <div class="col-md-6 col-lg-3">
    <div class="iconbox style1">
        <div class="box-header">
            <div class="image">
                <img src={props.img} alt=""/>
            </div>
            <div class="box-title">
                <h3>{props.title}</h3>
            </div>
            <div class="clearfix"/>
        </div> 
    </div>
</div>
  )
}

export default FeactureList