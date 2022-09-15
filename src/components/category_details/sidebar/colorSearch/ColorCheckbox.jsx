import React from 'react'

const ColorCheckbox = () => {
    return (
        <div className="widget widget-color">
            <div className="widget-title">
                <h3>Color<span></span></h3>
                <div style={{ height: "2px" }}></div>
            </div>
            <div className="widget-content">
                <form action="#" method="get" >
                    <input type="text" name="color" placeholder="Color Search" />
                </form>
                <div style={{ height: "5px" }}></div>
                <ul className="box-checkbox scroll">
                    <li className="check-box">
                        <input type="checkbox" id="check1" name="check1" />
                        <label htmlFor="check1">Black <span>(4)</span></label>
                    </li>
                    <li className="check-box">
                        <input type="checkbox" id="check2" name="check2" />
                        <label htmlFor="check2">Yellow <span>(2)</span></label>
                    </li>
                    <li className="check-box">
                        <input type="checkbox" id="check3" name="check3" />
                        <label htmlFor="check3">White <span>(2)</span></label>
                    </li>
                    <li className="check-box">
                        <input type="checkbox" id="check4" name="check4" />
                        <label htmlFor="check4">Blue <span>(2)</span></label>
                    </li>
                    <li className="check-box">
                        <input type="checkbox" id="check5" name="check5" />
                        <label htmlFor="check5">Red <span>(1)</span></label>
                    </li>
                    <li className="check-box">
                        <input type="checkbox" id="check6" name="check6" />
                        <label htmlFor="check6">Pink <span>(3)</span></label>
                    </li>
                    <li className="check-box">
                        <input type="checkbox" id="check7" name="check7" />
                        <label htmlFor="check7">Green <span>(4)</span></label>
                    </li>
                    <li className="check-box">
                        <input type="checkbox" id="check8" name="check8" />
                        <label htmlFor="check8">Gold <span>(4)</span></label>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ColorCheckbox