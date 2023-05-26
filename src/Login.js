import React, { useState } from "react";

// import "./Login.css"

import { useNavigate } from "react-router-dom";

export const Login = () => {
    const nav = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        nav('/emp')
    }
    return (
        <div align="center">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email : </label> <br />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your mail" id="email" name="email" required /> <br />
                <label htmlFor="password">Password : </label> <br />
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter your password" id="password" name="password" required /> <br />
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Login;