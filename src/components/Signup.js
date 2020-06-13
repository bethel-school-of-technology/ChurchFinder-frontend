import React from 'react';

const Signup = () =>
    (
        <div>
            <h1>Signup Page</h1>
            <label for="firstname"><b>First Name</b></label>
            <input type="text" placeholder="Enter First Name" name="firstname" required></input>

            <label for="lastname"><b>Last Name</b></label>
            <input type="text" placeholder="Enter Last Name" name="lastname" required></input>


            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required></input>

            <label for="username"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="username" required></input>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required></input>

            <label for="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required></input>

            <div class="clearfix">
                <button type="button" class="cancelbtn">Cancel</button>
                <button type="submit" class="signupbtn">Sign Up</button>
            </div>
        </div>
    )

export default Signup;