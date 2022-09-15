import React from 'react';
import { Link } from 'react-router-dom';

const ContactMap=()=> {
    return (
        <section className="flat-map">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div id="flat-map" className="pdmap">
                           <div className="flat-maps" data-address="Quận Smith, Mississippi" data-height="444" data-images="images/icons/map.png" data-name="Themesflat Map"></div>
                        <div className="gm-map">                
                            <div className="map"></div>                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default ContactMap;