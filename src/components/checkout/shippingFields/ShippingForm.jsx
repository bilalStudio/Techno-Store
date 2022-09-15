import React from 'react'

const ShippingForm = () => {
    return (

        <div className="shipping-address-fields">
            <div className="fields-title">
                <h3>Shipping Address</h3>
                <span></span>
                <div className="clearfix"></div>
            </div>
            <div className="fields-content">
                <div className="checkbox">
                    <input type="checkbox" id="create-account-2" name="create-account-2" checked />
                    <label htmlFor="create-account-2">Ship to a different address ?</label>
                </div>
                <div className="field-row">
                    <p className="field-one-half">
                        <label htmlFor="first-name-2">First Name *</label>
                        <input type="text" id="first-name-2" name="first-name-2" placeholder="Ali" />
                    </p>
                    <p className="field-one-half">
                        <label htmlFor="last-name-2">Last Name *</label>
                        <input type="text" id="last-name-2" name="last-name-2" placeholder="Tufan" />
                    </p>
                    <div className="clearfix"></div>
                </div>
                <div className="field-row">
                    <label htmlFor="company-name-2">Company Name</label>
                    <input type="text" id="company-name-2" name="company-name-2" />
                </div>
                <div className="field-row">
                    <label>Country *</label>
                    <select name="country-2">
                        <option value="">Australia</option>
                        <option value="">USA State</option>
                        <option value="">Spanish</option>
                        <option value="">Viet Nam</option>
                    </select>
                </div>
                <div className="field-row">
                    <label htmlFor="address-3">Address *</label>
                    <input type="text" id="address-3" name="address-3" placeholder="Street address" />
                    <input type="text" id="address-4" name="address2" placeholder="Apartment, suite, unit etc. (optional)" />
                </div>
                <div className="field-row">
                    <label htmlFor="town-city-2">Town / City *</label>
                    <input type="text" id="town-city-2" name="town-city-2" />
                </div>
                <div className="field-row">
                    <p className="field-one-half">
                        <label htmlFor="state-country-2">State / County *</label>
                        <input type="text" id="state-country-2" name="state-country-2" />
                    </p>
                    <p className="field-one-half">
                        <label htmlFor="post-code-2">Postcode / ZIP *</label>
                        <input type="text" id="post-code-2" name="post-code-2" />
                    </p>
                    <div className="clearfix"></div>
                </div>
                <div className="field-row">
                    <label htmlFor="notes">Order Notes</label>
                    <textarea id="notes" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                </div>
            </div>
        </div>
    )
}

export default ShippingForm