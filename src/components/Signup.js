import React from 'react';
import axios from 'axios';

class Signup extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            firstname: "",
            lastname: "",
            email: "",
            password: ""
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post("http://localhost:5000/users/signup", this.state)
            .then(response => {
                console.log(response)
                this.setState({
                    result: response
                });
            })
            .catch(error => {
                console.log(error)
                
            })
    }

    render() {
        const { username, firstname, lastname, email, password } = this.state
        return (
            <form id="signup" onSubmit={this.handleSubmit} method="POST" action="/users/signup">
                <h1 className="formtitle">Welcome! Please Sign Up</h1>
                <div>
                    <label htmlFor="name"><b>Enter First Name</b></label>
                    <input type="text" placeholder="First Name" name="firstname" value={firstname} onChange={this.handleChange}required/>
                </div>
                <div>
                    <label htmlFor="name"><b>Last Name</b></label>
                    <input type="text" placeholder="Last Name" name="lastname" value={lastname} onChange={this.handleChange} required />
                </div>
                <div>
                    <label htmlFor="name"><b>Email</b></label>
                    <input type="text" placeholder="Email" name="email" value={email} onChange={this.handleChange} required />
                </div>
                <div>
                    <label htmlFor="name"><b>Username</b></label>
                    <input type="text" placeholder="Username" name="username" value={username} onChange={this.handleChange} required />
                </div>
                <div>
                    <label htmlFor="name"><b>Password</b></label>
                    <input type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange}required />
                </div>
                <div>
                    <label htmlFor="name"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="password" value={password} onChange={this.handleChange}required />
                </div>
                <div className="clearfix">
                    <button type="submit" className="signupbtn">Sign Up</button>
                </div>
            </form>
        )
    }

}

export default Signup;
