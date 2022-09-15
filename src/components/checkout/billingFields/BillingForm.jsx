import React from 'react'

const BillingForm = () => {
    return (
        <div className="billing-fields">
            <div className="fields-title">
                <h3>Billing details</h3>
                <span></span>
                <div className="clearfix"></div>
            </div>
            <div className="fields-content">
                <div className="field-row">
                    <p className="field-one-half">
                        <label htmlFor="first-name">First Name *</label>
                        <input type="text" id="first-name" name="first-name" placeholder="Ali" />
                    </p>
                    <p className="field-one-half">
                        <label htmlFor="last-name">Last Name *</label>
                        <input type="text" id="last-name" name="last-name" placeholder="Tufan" />
                    </p>
                    <div className="clearfix"></div>
                </div>
                <div className="field-row">
                    <label htmlFor="company-name">Company Name</label>
                    <input type="text" id="company-name" name="company-name" />
                </div>
                <div className="field-row">
                    <p className="field-one-half">
                        <label htmlFor="email-address">Email Address *</label>
                        <input type="email" id="email-address" name="email-address" />
                    </p>
                    <p className="field-one-half">
                        <label htmlFor="phone">Phone *</label>
                        <input type="text" id="phone" name="phone" />
                    </p>
                    <div className="clearfix"></div>
                </div>
                <div className="field-row">
                    <label>Country *</label>
                    <select name="country">
                        <option value="">Australia</option>
                        <option value="">USA State</option>
                        <option value="">Spanish</option>
                        <option value="">Viet Nam</option>
                    </select>
                </div>
                <div className="field-row">
                    <label htmlFor="address">Address *</label>
                    <input type="text" id="address" name="address" placeholder="Street address" />
                    <input type="text" id="address-2" name="address" placeholder="Apartment, suite, unit etc. (optional)" />
                </div>
                <div className="field-row">
                    <label htmlFor="town-city">Town / City *</label>
                    <input type="text" id="town-city" name="town-city" />
                </div>
                <div className="field-row">
                    <p className="field-one-half">
                        <label htmlFor="state-country">State / County *</label>
                        <input type="text" id="state-country" name="state-country" />
                    </p>
                    <p className="field-one-half">
                        <label htmlFor="post-code">Postcode / ZIP *</label>
                        <input type="text" id="post-code" name="post-code" />
                    </p>
                    <div className="clearfix"></div>
                </div>
                <div className="checkbox">
                    <input type="checkbox" id="create-account" name="create-account" checked />
                    <label htmlFor="create-account">Create an account?</label>
                </div>
            </div>
        </div>
    )
}

export default BillingForm