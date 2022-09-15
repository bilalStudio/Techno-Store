import React from 'react'
import ProductFeactures from './feactures/ProductFeactures'
const ProductDescription = (props) => {
    return (
        <div className="row">
            <div className="col-md-6">
                <div className="description-text">
                    <ProductFeactures
                        title={'Nuqqam Et Massa'}
                        paragraph={'Sed sodales sed orci molestie tristique. Nunc dictum, erat id molestie vestibulum, ex leo vestibulum justo, luctus tempor erat sem quis diam. Lorem ipsum dolor sit amet.'}
                    />

                    <ProductFeactures
                        title={'Wireless'}
                        paragraph={'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old.'}
                    />
                    <ProductFeactures
                        title={'Fresh Design'}
                        paragraph={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'}
                    />
                    <ProductFeactures
                        title={'Fabolous Sound'}
                        paragraph={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."}
                    />

                    <ProductFeactures
                        title={'Nuqqam Et Massa'}
                        paragraph={'Sed sodales sed orci molestie tristique. Nunc dictum, erat id molestie vestibulum, ex leo vestibulum justo, luctus tempor erat sem quis diam. Lorem ipsum dolor sit amet.'}
                    />
                </div>
            </div>
            <div className="col-md-6">
                <div className="description-image">
                    <div className="box-image">
                        <img src={require('../../../../assets/images/product/single/01.png')} alt="" />
                    </div>
                    <ProductFeactures
                        title={'Nuqqam Et Massa'}
                        paragraph={'Sed sodales sed orci molestie tristique. Nunc dictum, erat id molestie vestibulum, ex leo vestibulum justo, luctus tempor erat sem quis diam. Lorem ipsum dolor sit amet.'}
                    />
                </div>
            </div>
            <div className="col-md-12">
                <div className="different-color">
                    <div className="title">
                        Different Colors
                    </div>
                    <p>
                        Sed sodales sed orci<br />molestie
                    </p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="box-left">
                    <div className="img-line">
                        <img src={require('../../../../assets/images/product/single/line-1.png')} alt="" />
                    </div>
                    <div className="img-product">
                        <img src={require('../../../../assets/images/product/single/06.png')} alt="" />
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="box-right">
                    <div className="img-line">
                        <img src={require('../../../../assets/images/product/single/line-2.png')} alt="" />
                        <img src={require('../../../../assets/images/product/single/04.png')} alt="" />
                    </div>
                    <div className="img-product">
                    </div>
                    <ProductFeactures
                        title={'Nuqqam Et Massa'}
                        paragraph={'Sed sodales sed orci molestie tristique. Nunc dictum, erat id molestie vestibulum, ex leo vestibulum justo, luctus tempor erat sem quis diam. Lorem ipsum dolor sit amet.'}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductDescription