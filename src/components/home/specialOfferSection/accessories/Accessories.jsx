import React from 'react'
import Slider from './cardSlider/Slider'
const Accessories = () => {
    return (
        <div className="widget widget-accessories">
            <div className="widget-title">
                <h3>Accessories</h3>
            </div>
            <div className="owl-carousel-7">
                <Slider
                img={require('../../../../assets/images/product/other/06.jpg')}
                title={'Cameras'}
                subtitle={'New X5C-1 2.4Ghz Gyro'}
                regular={'$2,999.00'}
                sale={'$2,009.00'}
                />
                <Slider
                img={require('../../../../assets/images/product/other/05.jpg')}
                title={'Cameras'}
                subtitle={'New X5C-1 2.4Ghz Gyro'}
                regular={'$2,999.00'}
                sale={'$2,009.00'}
                />
                <Slider
                img={require('../../../../assets/images/product/other/06.jpg')}
                title={'Cameras'}
                subtitle={'New X5C-1 2.4Ghz Gyro'}
                regular={'$2,999.00'}
                sale={'$2,009.00'}
                />
                <Slider
                img={require('../../../../assets/images/product/other/05.jpg')}
                title={'Cameras'}
                subtitle={'New X5C-1 2.4Ghz Gyro'}
                regular={'$2,999.00'}
                sale={'$2,009.00'}
                />
               
            </div>
        </div>
    )
}

export default Accessories