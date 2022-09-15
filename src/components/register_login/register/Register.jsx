import React from 'react'

const Register = () => {
    return (
        <div className="form-register">
            <div className="title">
                <h3>Register</h3>
            </div>
            <form action="#" method="get" id="form-register" >
                <div className="form-box">
                    <label htmlFor="name-register">Email address * </label>
                    <input type="text" id="name-register" name="name-register" />
                </div>
                <div className="form-box">
                    <label htmlFor="password-register">Password</label>
                    <input type="text" id="password-register" name="password-register" />
                </div>
                <div className="form-box">
                    <button type="submit" className="register">Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register