import React from 'react';

const Addchurch = () =>
    (
        <div>
            <h1>Add Your Church</h1>
            <label for="churchname"><b>Church Name</b></label>
            <input type="text" placeholder="Enter Church Name" name="churchname" required></input>

            <label for="address"><b>Mailing Address One</b></label>
            <input type="text" placeholder="Enter Mailing Address" name="address" required></input>


            <label for="address2"><b>Mailing Address Two</b></label>
            <input type="text" placeholder="Enter Mailing Address 2" name="address2" required></input>

            <label for="city"><b>City</b></label>
            <input type="text" placeholder="Enter City" name="city" required></input>

            <label for="state"><b>State</b></label>
            <input type="text" placeholder="Enter State" name="state" required></input>

            <label for="zipcode"><b>Zipcode</b></label>
            <input type="number" placeholder="Enter Zipcode" name="zipcode" required></input><br></br>

            <label for="denomination"><b>Denomination</b></label>
            <input type="text" placeholder="Enter Denomination" name="denomination" required></input>

            <label for="weburl"><b>Web URL</b></label>
            <input type="text" placeholder="Enter URL" name="weburl" required></input>

            <div class="clearfix">
                <button type="button" class="cancelbtn">Cancel</button>
                <button type="submit" class="signupbtn">Sign Up</button>
            </div>
        </div>
    )


export default Addchurch;