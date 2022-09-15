import React from 'react'

const PriceRange = () => {
    return (
        <div className="widget widget-price">
            <div className="widget-title">
                <h3>Price<span></span></h3>
            </div>
            <div className="widget-content">
                <p>Price</p>
                <div className="price search-filter-input">
                    <div id="slider-range" className="price-slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div className="ui-slider-range ui-corner-all ui-widget-header" ></div><span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span><span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span></div>
                    <p className="amount">
                        <input type="text" id="amount" disabled="" />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PriceRange