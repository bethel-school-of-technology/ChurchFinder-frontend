import React from 'react';

const Login = () =>
    (
        <div>
            <h1>Login Page!</h1>
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required></input>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required></input>

            <button type="submit">Login</button>
        </div>
    );

export default Login;