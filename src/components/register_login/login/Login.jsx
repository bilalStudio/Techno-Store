import React from 'react'
const Login = () => {
    return (
        <div className="form-login">
            <div className="title">
                <h3>Login</h3>
            </div>
            <form action="#" method="get" id="form-login" >
                <div className="form-box">
                    <label htmlFor="name-login">Username or email address * </label>
                    <input type="text" id="name-login" name="name-login" placeholder="Ali" />
                </div>
                <div className="form-box">
                    <label htmlFor="password-login">Password * </label>
                    <input type="text" id="password-login" name="password-login" placeholder="******" />
                </div>
                <div className="form-box checkbox">
                    <input type="checkbox" id="remember" checked name="remember" />
                    <label htmlFor="remember">Remember me</label>
                </div>
                <div className="form-box">
                    <button type="submit" className="login">Login</button>
                    <a href="#" title="">Lost your password?</a>
                </div>
            </form>
        </div>
    )
}

export default Login