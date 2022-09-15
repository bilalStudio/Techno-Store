import React from 'react'
import Star from './stars/Star'
import Star1 from './stars/Star1'

const Reviews = () => {
    return (
        <div className="row">
            <div className="col-md-6">
                <div className="rating">
                    <div className="title">
                        Based on 3 reviews
                    </div>
                    <div className="score">
                        <div className="average-score">
                            <p className="numb">4.3</p>
                            <p className="text">Average score</p>
                        </div>
                        <Star1 />
                    </div>
                    <ul className="queue-box">
                        <Star
                            className={"five-star"}
                            number={3}
                        />
                        <Star
                            className={"four-star"}
                            number={4}
                        />
                        <Star
                            className={"three-star"}
                            number={3}
                        />

                        <Star
                            className={"two-star"}
                            number={2}
                        />
                        <Star
                            className={"one-star"}
                            number={0}
                        />
                    </ul>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-review">
                    <div className="title">
                        Add a review
                    </div>
                    <div className="your-rating queue">
                        <span>Your Rating</span>
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                    </div>
                    <form action="#" method="get" >
                        <div className="review-form-name">
                            <input type="text" name="name-author" value="" placeholder="Name" />
                        </div>
                        <div className="review-form-email">
                            <input type="text" name="email-author" value="" placeholder="Email" />
                        </div>
                        <div className="review-form-comment">
                            <textarea name="review-text" placeholder="Your Name"></textarea>
                        </div>
                        <div className="btn-submit">
                            <button type="submit">Add Review</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-md-12">
                <ul className="review-list">
                    <li>
                        <div className="review-metadata">
                            <div className="name">
                                Ali Tufan : <span>April 3, 2016</span>
                            </div>
                            <Star1 />
                        </div>
                        <div className="review-content">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="review-metadata">
                            <div className="name">
                                Peter Tufan : <span>April 3, 2016</span>
                            </div>

                            <Star1 />
                        </div>
                        <div className="review-content">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="review-metadata">
                            <div className="name">
                                Jon Tufan : <span>April 3, 2016</span>
                            </div>
                            <Star1 />
                        </div>
                        <div className="review-content">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Reviews