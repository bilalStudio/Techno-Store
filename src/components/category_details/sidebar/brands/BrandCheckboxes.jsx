import React from 'react'

const BrandCheckboxes = () => {
    return (
        <div className="widget widget-brands">
            <div className="widget-title">
                <h3>Brands<span></span></h3>
            </div>
            <div className="widget-content">
                <form action="#" method="get" >
                    <input type="text" name="brands" placeholder="Brands Search" />
                </form>
                <ul className="box-checkbox scroll">
                    <li className="check-box">
                        <input type="checkbox" id="checkbox1" name="checkbox1" />
                        <label htmlFor="checkbox1">Apple <span>(4)</span></label>
                    </li>
                    <li className="check-box">
                        <input type="checkbox" id="checkbox2" name="checkbox2" />
                        <label htmlFor="checkbox2">Samsung <span>(2)</span></label>
                    </li>
                    <li className="check-box">
                        <input type="checkbox" id="checkbox3" name="checkbox3" />
                        <label htmlFor="checkbox3">HTC <span>(2)</span></label>
                    </li>
                    <li className="check-box">
                        <input type="checkbox" id="checkbox4" name="checkbox4" />
                        <label htmlFor="checkbox4">LG <span>(2)</span></label>
                    </li>
                    <li className="check-box">
                        <input type="checkbox" id="checkbox5" name="checkbox5" />
                        <label htmlFor="checkbox5">Dell <span>(1)</span></label>
                    </li>
                    <li className="check-box">
                        <input type="checkbox" id="checkbox6" name="checkbox6" />
                        <label htmlFor="checkbox6">Sony <span>(3)</span></label>
                    </li>
                    <li className="check-box">
                        <input type="checkbox" id="checkbox7" name="checkbox7" />
                        <label htmlFor="checkbox7">Bphone <span>(4)</span></label>
                    </li>
                    <li className="check-box">
                        <input type="checkbox" id="checkbox8" name="checkbox8" />
                        <label htmlFor="checkbox8">Oppo <span>(4)</span></label>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default BrandCheckboxes