import React from 'react';
import axios from 'axios';


class Addchurch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            description: "",
            mailing_one: "",
            mailing_two: "",
            city: "",
            state: "",
            postalcode: "",
            denomination: "",
            web_url: ""
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name ]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post("http://localhost:5000/churches/addchurch", this.state)
            .then(response => {
                console.log(response)
                this.setState({
                    result:response
                });
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { churchname, description, mailing_one, mailing_two, city, state, postalcode, denomination, web_url } = this.state
        return (
            <form id="addchurch" onSubmit={this.handleSubmit} method="POST" action="/churches/addchurch">           
                <h1 className="formtitle">Please Add Your Church!</h1>
                <div>
                <label htmlFor="name"><b>Enter Church Name</b></label>
                <input type="text" placeholder="Church Name" name="name" value={churchname} required />
                </div>
                <div>
                <label htmlFor="name"><b>Enter Description</b></label><br></br>
                <textarea type="text" placeholder="Enter Description" name="description" value={description} onChange={this.handleChange} required></textarea>
                </div>
                <br></br>
                <div>
                <label htmlFor="name"><b>Enter Mailing Address One</b></label>
                <input type="text" placeholder="Enter Mailing Address One" name="mailing_one" value={mailing_one} onChange={this.handleChange} required />
                </div>
                <div>
                <label htmlFor="name"><b>Mailing Address Two</b></label>
                <input type="text" placeholder="Enter Mailing Address Two" name="mailing_two" value={mailing_two} onChange={this.handleChange} required />
                </div>
                <div>
                <label htmlFor="name"><b>City</b></label>
                <input type="text" placeholder="Enter City" name="city" value={city} onChange={this.handleChange} required />
                </div>
                <div>
                <label htmlFor="name"><b>State</b></label>
                <input type="text" placeholder="Enter State" name="state" value={state} onChange={this.handleChange} required></input>
                </div>
                <div>
                <label htmlFor="name"><b>Zipcode</b></label>
                <input type="number" placeholder="Enter Zipcode" name="postalcode" value={postalcode} onChange={this.handleChange} required />
                </div>
                <br></br>
                <div>
                <label htmlFor="name"><b>Denomination</b></label>
                <input type="text" placeholder="Enter Denomination" name="denomination" value={denomination} onChange={this.handleChange} required />
                </div>
                <div>
                <label htmlFor="name"><b>Web URL</b></label>
                <input type="text" placeholder="Enter URL" name="web_url" value={web_url} onChange={this.handleChange} required />
                </div>
                <div className="clearfix">
                    <button type="submit" className="signupbtn">Sign Up</button>
                </div>
            </form>
        )

    }
}

export default Addchurch;