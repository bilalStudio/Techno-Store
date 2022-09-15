import React from 'react';
import FeactureList from './FeactureList';
const Feactures = () => {
    return (
            <section className="flat-row flat-iconbox style3">
                <div className="container">
                    <div className="row">
                        <FeactureList img={require('../../assets/images/icons/car.png')} title={'Worldwide Shipping'} />
                        <FeactureList img={require('../../assets/images/icons/order.png')} title={'Order Online Service'} />
                        <FeactureList img={require('../../assets/images/icons/payment.png')} title={'Payment'} />
                        <FeactureList img={require('../../assets/images/icons/return.png')} title={'Return 30 Days'} />
                    </div>
                </div>
            </section>
    );
}

export default Feactures;