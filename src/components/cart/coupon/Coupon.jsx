import React from 'react'

const Coupon = () => {
    return (
        <div className="form-coupon">
            <form action="#" method="get" >
                <div className="coupon-input">
                    <input type="text" name="coupon code" placeholder="Coupon Code" />
                    <button type="submit">Apply Coupon</button>
                </div>
            </form>
        </div>
    )
}

export default Coupon