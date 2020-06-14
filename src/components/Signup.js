import React from 'react';

const Signup = () =>
    (
        <div>
            <h1>Signup Page</h1>
            <label htmlFor="firstname"><b>First Name</b></label>
            <input type="text" placeholder="Enter First Name" name="firstname" required></input>

            <label htmlFor="lastname"><b>Last Name</b></label>
            <input type="text" placeholder="Enter Last Name" name="lastname" required></input>


            <label htmlFor="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required></input>

            <label htmlFor="username"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="username" required></input>

            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required></input>

            <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required></input>

            <div className="clearfix">
                <button type="button" className="cancelbtn">Cancel</button>
                <button type="submit" className="signupbtn">Sign Up</button>
            </div>
        </div>
    )

export default Signup;