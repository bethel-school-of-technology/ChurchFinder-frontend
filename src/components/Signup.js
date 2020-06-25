import React from 'react';
import axios from 'axios';

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

  const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    Object.values(rest).forEach(val => {
        val == null && (valid = false);
});

return valid;
};

class Signup extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: null,
            lastname: null,
            email: null,
            username: null,
            password: null,
            formErrors:{
                firstname: "",
                lastname: "",
                email: "",
                username: "",
                password: ""
            }
        };
    }

    handleSubmit = e => {
        e.preventDefault()
        axios.post("http://localhost:5000/users/login", this.state)

        if (formValid(this.state)){
            console.log(`
            --SUBMITTING--
                Firstname: ${this.state.firstname}
                Lastname: ${this.state.lastname}
                Email: ${this.state.email}
                Username: ${this.state.username}
                Password: ${this.state.password}
            `);
        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    };

    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;


        switch(name) {
            case 'firstname': 
            formErrors.firstname = value.length < 3 ? 'Minimum 3 characters required' 
            : "";
            break;
            case 'lastname': 
            formErrors.lastname = value.length < 3 ? 'Minimum 3 characters required' 
            : "";
            break;
            case "email":
            formErrors.email = emailRegex.test(value) ? "" : "invalid email address";
            break;
            case 'username': 
            formErrors.username = value.length < 3 ? 'Minimum 3 characters required' 
            : "";
            break;
            case 'password': 
            formErrors.password = value.length < 6 ? 'Minimum 6 characters required' 
            : "";
            break;
            default:
            break;    
    }
        this.setState({formErrors, [name]: value }, () => console.log(this.state) )
    };


    render() {
        const { formErrors } = this.state
       
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Create Account</h1>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="firstname">
                            <label htmlFor="firstname">First Name</label>
                            <input
                            className={formErrors.firstname.length > 0 ? "error" : null} 
                            placeholder="First Name"
                            type="text"
                            name="firstname"
                            noValidate
                            onChange={this.handleChange}
                            />
                            {formErrors.firstname.length > 0 && (
                                <span className="errorMessage">{formErrors.firstname}</span>
                            )}
                        </div>
                        <div className="lastname">
                            <label htmlFor="lastname">Last Name</label>
                            <input
                            className={formErrors.lastname.length > 0 ? "error" : null}
                            placeholder="Last Name"
                            type="text"
                            name="lastname"
                            noValidate
                            onChange={this.handleChange}
                            />
                            {formErrors.lastname.length > 0 && (
                                <span className="errorMessage">{formErrors.lastname}</span>
                            )}
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input
                            className={formErrors.email.length > 0 ? "error" : null}
                            placeholder="Email"
                            type="text"
                            name="email"
                            noValidate
                            onChange={this.handleChange}
                            />
                            {formErrors.email.length > 0 && (
                                <span className="errorMessage">{formErrors.email}</span>
                            )}
                        </div>
                        <div className="username">
                            <label htmlFor="username">Username</label>
                            <input
                            className={formErrors.username.length > 0 ? "error" : null}
                            placeholder="Userame"
                            type="text"
                            name="username"
                            noValidate
                            onChange={this.handleChange}
                            />
                            {formErrors.username.length > 0 && (
                                <span className="errorMessage">{formErrors.username}</span>
                            )}
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input
                            className={formErrors.password.length > 0 ? "error" : null}
                            placeholder="Password"
                            type="text"
                            name="password"
                            noValidate
                            onChange={this.handleChange}
                            />
                            {formErrors.password.length > 0 && (
                                <span className="errorMessage">{formErrors.password}</span>
                            )}
                        </div>
                        <div className="password">
                            <label htmlFor="password">Repeat Password</label>
                            <input
                            className={formErrors.password.length > 0 ? "error" : null}
                            placeholder="password"
                            type="text"
                            name="password"
                            noValidate
                            onChange={this.handleChange}
                            />
                            {formErrors.password.length > 0 && (
                                <span className="errorMessage">{formErrors.password}</span>
                            )}
                        </div>
                        <div className="createAccount">
                    <button type="submit">Sign Up</button>
                  </div>
                </form>
            </div>
        </div>
        );
     }

}

export default Signup;
