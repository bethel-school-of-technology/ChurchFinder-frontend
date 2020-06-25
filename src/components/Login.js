import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        axios.post("http://localhost:5000/users/login", this.state)
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
        const { username, password } = this.state
        return (

            <form id="login" onSubmit={this.handleSubmit} >
                <h1>Login Page!</h1>
                <div>
                    <label htmlFor="name"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="username" value={username} onChange={this.handleChange} required></input>
                </div>
                <div>
                    <label htmlFor="name"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" value={password} onChange={this.handleChange} required></input>
                </div>
                <div className="clearfix">
                    <button type="submit" className="loginbtn">Login</button>
                </div>
            </form>
        )
    };
}
export default Login;