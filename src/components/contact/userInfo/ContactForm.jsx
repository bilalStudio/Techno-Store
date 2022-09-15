import React from 'react';
const ContactForm=()=> {
    return (
        <div className="col-md-7">
        <div className="form-contact left">
            <div className="form-contact-header">
                <h3>Leave us a Message</h3>
                <p>
                    Maecenas dolor elit, semper a sem sed, pulvinar molestie lacus. Aliquam dignissim, elit non mattis ultrices, neque odio ultricies tellus, eu porttitor nisl ipsum eu massa.
                </p>
            </div> 
            <div className="form-contact-content">
                <form action="#" method="get" id="form-contact" >
                    <div className="form-box one-half name-contact">
                        <label htmlFor="name-contact">First name*</label>
                        <input type="text" id="name-contact" name="name-contact" placeholder="Ali"/>
                    </div>
                    <div className="form-box one-half password-contact">
                        <label htmlFor="password-contact">Last name*</label>
                        <input type="text" id="password-contact" name="password-contact" placeholder="Ali"/>
                    </div>
                    <div className="form-box">
                        <label htmlFor="subject-contact">Subject</label>
                        <input type="text" id="subject-contact" name="subject-contact" placeholder="Ali"/>
                    </div>
                    <div className="form-box">
                        <label htmlFor="comment-contact">Comment</label>
                        <textarea id="comment-contact"></textarea>
                    </div>
                    <div className="form-box">
                        <button type="submit" className="contact">Send</button>
                    </div>
                </form> 
            </div> 
        </div> 
    </div> 
    );
}

export default ContactForm;