import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

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
        console.log(this.state)
        axios.post("http://localhost:5000/users/login", this.state)
            .then(response => {
                console.log(response)
                this.setState({
                    result: response
                });
                window.confirm("You have successfully logged in!")
                this.props.history.push("/")
            })
        }

        render() {
            const { username, password } = this.state
            return (
                <div id='background-container'>
                <img id='home-background-img' src='background.jpg' alt='homepage-background'></img>
                <form id="login" onSubmit={this.handleSubmit} class="container" >
                    <h1>Login Page</h1>
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
                </div>
            )
        };
    }

export default withRouter(Login);