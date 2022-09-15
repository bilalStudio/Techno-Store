import React from 'react'

const Questions = (props) => {
    return (
        <div className="accordion-toggle">
            <div className="toggle-title">
                {props.question}
            </div>
            <div className="toggle-content">
                <p>
                    {props.answer}
                </p>
            </div>
        </div>
    )
}

export default Questions