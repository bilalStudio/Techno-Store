import React from 'react';
import SocialLink from './socialLink/SocialLink';
const CompanyContactInfo=()=> {
    return (
        <div className="col-md-5">
        <div className="box-contact">
            <ul>
                <li className="address">
                    <h3>Address</h3>
                    <p>
                        PO Box CT16122 Collins Street West, <br />Victoria 8007, Australia.
                    </p>
                </li>
                <li className="phone">
                    <h3>Phone</h3>
                    <p>
                        (888) 123 456 789
                    </p>
                    <p>
                        (888) 589 658 23
                    </p>
                </li>
                <li className="email">
                    <h3>Email</h3>
                    <p>
                        info@technostore.com
                    </p>
                </li>
                <li className="address">
                    <h3>Opening Hours</h3>
                    <p>
                        Monday to Friday: 10am to 6pm
                    </p>
                    <p>
                        Saturday: 10am to 4pm
                    </p>
                    <p>
                        Sunday: 12am t0 4pm
                    </p>
                </li>
                <li>
                    <h3>Follow Us</h3>
                    <ul className="social-list style2">
                        <SocialLink
                        className={'fa fa-facebook'}
                        />
                         <SocialLink
                        className={'fa fa-twitter'}
                        />
                         <SocialLink
                        className={'fa fa-instagram'}
                        />
                         <SocialLink
                        className={'fa fa-pinterest'}
                        />
                         <SocialLink
                        className={'fa fa-dribbble'}
                        />
                         <SocialLink
                        className={'fa fa-google'}
                        />
                    </ul> 
                </li>
            </ul>
        </div> 
    </div> 
    );
}

export default CompanyContactInfo;