import React from 'react';
import axios from 'axios';


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
            web_url: "",
            longitude: "",
            latitude: "",
            formErrors: {
                name: "",
                description: "",
                mailing_one: "",
                mailing_two: "",
                city: "",
                state: "",
                postalcode: "",
                denomination: "",
                web_url: "",
                longitude: "",
                latitude: ""

            }
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'name':
                formErrors.name = value.length < 3 ? 'Minimum 3 characters required'
                    : "";
                break;
            case 'description':
                formErrors.description = value.length < 3 ? 'Minimum 3 characters required'
                    : "";
                break;
            case "mailing_one":
                formErrors.mailing_one = value.length < 3 ? 'Minimum 3 characters required'
                    : "";
                break;
            case 'mailing_two':
                formErrors.mailing_two = value.length < 3 ? 'Minimum 3 characters required'
                    : "";
                break;
            case 'city':
                formErrors.city = value.length < 6 ? 'Minimum 6 characters required'
                    : "";
                break;
            case 'state':
                formErrors.state = value.length < 3 ? 'Minimum 3 characters required'
                    : "";
                break;
            case 'postalcode':
                formErrors.postalcode = value.length < 5 ? 'Minimum 5 characters required'
                    : "";
                break;
            case 'denomination':
                formErrors.denomination = value.length < 6 ? 'Minimum 6 characters required'
                    : "";
                break;
            case 'web_url':
                formErrors.web_url = value.length < 10 ? 'Minimum 10 characters required'
                    : "";
                break;
            case 'longitude':
                formErrors.longitude = value.length < 6 ? 'Minimum 6 characters required'
                    : "";
                break;
            case 'latitude':
                formErrors.latitude = value.length < 6 ? 'Minimum 6 characters required'
                    : "";
                break;
            default:
                break;
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post("http://localhost:5000/churches/addchurch", this.state)
            .then(response => {
                console.log(response)
                this.setState({
                    result: response
                });
            })
        if (formValid(this.state)) {
            console.log(this.state);
        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    };

    render() {
        const { formErrors } = this.state
        const { name, description, mailing_one, mailing_two, city, state, postalcode, denomination, web_url, longitude, latitude } = this.state

        return (
            <div id='background-container'>
                <img id='home-background-img' src='background.jpg' alt='homepage-background'></img>
                <div className="form-wrapper" class="container">
                    <form onSubmit={this.handleSubmit} noValidate>
                        <fieldset>
                            <legend><h2>ADD CHURCH</h2></legend>
                            <div className="name">
                                {/* <label htmlFor="name"><b>Church Name: </b></label> */}
                                <input
                                    id='name-input'
                                    className={formErrors.name.length > 0 ? "error" : null}
                                    placeholder="Church Name"
                                    type="text"
                                    name="name"
                                    noValidate
                                    value={name}
                                    onChange={this.handleChange}
                                />
                                {formErrors.name.length > 0 && (
                                    <span className="errorMessage">{formErrors.name}</span>
                                )}
                            </div>
                            <div className="description">
                                <label htmlFor="description"><b>Describe a few things that your church has to offer.</b></label>
                                <input
                                    id='description-input'
                                    className={formErrors.description.length > 0 ? "error" : null}
                                    placeholder="Church Description"
                                    type="text"
                                    name="description"
                                    noValidate
                                    value={description}
                                    onChange={this.handleChange}></input>
                                {formErrors.description.length > 0 && (
                                    <span className="errorMessage">{formErrors.description}</span>
                                )}
                            </div>
                            <br></br>
                            <div className="mailing_one">
                                <label htmlFor="mailing_one"><b>Enter Mailing Address</b></label>
                                <input
                                    id='mailing_one-input'
                                    className={formErrors.mailing_one.length > 0 ? "error" : null}
                                    placeholder="Address One"
                                    type="text"
                                    name="mailing_one"
                                    noValidate
                                    value={mailing_one}
                                    onChange={this.handleChange}
                                />
                                {formErrors.mailing_one.length > 0 && (
                                    <span className="errorMessage">{formErrors.mailing_one}</span>
                                )}
                            </div>
                            <div className="mailing_two">
                                {/* <label htmlFor="mailing_two">Enter Address Two</label> */}
                                <input
                                    id='mailing_two-input'
                                    className={formErrors.mailing_two.length > 0 ? "error" : null}
                                    placeholder="Address Two"
                                    type="text"
                                    name="mailing_two"
                                    noValidate
                                    value={mailing_two}
                                    onChange={this.handleChange}
                                />
                                {formErrors.mailing_two.length > 0 && (
                                    <span className="errorMessage">{formErrors.mailing_two}</span>
                                )}
                            </div>
                            <div className="city">
                                {/* <label htmlFor="city">Enter City</label> */}
                                <input
                                    id='city-input'
                                    className={formErrors.city.length > 0 ? "error" : null}
                                    placeholder="City"
                                    type="text"
                                    name="city"
                                    noValidate
                                    value={city}
                                    onChange={this.handleChange}
                                />
                                {formErrors.city.length > 0 && (
                                    <span className="errorMessage">{formErrors.city}</span>
                                )}
                            </div>
                            <div>
                                {/* <label htmlFor="state">Enter State</label> */}
                                <input
                                    id='state-input'
                                    className={formErrors.state.length > 0 ? "error" : null}
                                    placeholder="State"
                                    type="text"
                                    name="state"
                                    noValidate
                                    value={state}
                                    onChange={this.handleChange}
                                />
                                {formErrors.state.length > 0 && (
                                    <span className="errorMessage">{formErrors.state}</span>
                                )}
                            </div>
                            <div>
                                {/* <label htmlFor="postalcode">Enter Zipcode</label> */}
                                <input
                                    id='postalcode-input'
                                    className={formErrors.postalcode.length > 0 ? "error" : null}
                                    placeholder="Postalcode"
                                    type="number"
                                    name="postalcode"
                                    noValidate
                                    value={postalcode}
                                    onChange={this.handleChange}
                                />
                                {formErrors.postalcode.length > 0 && (
                                    <span className="errorMessage">{formErrors.postalcode}</span>
                                )}
                            </div>
                            <br></br>
                            <div className="denomination">
                                {/* <label htmlFor="denomination">Enter Denomination</label> */}
                                <input
                                    id='denomination-input'
                                    className={formErrors.denomination.length > 0 ? "error" : null}
                                    placeholder="Denomination"
                                    type="text"
                                    name="denomination"
                                    noValidate
                                    value={denomination}
                                    onChange={this.handleChange}
                                />
                                {formErrors.denomination.length > 0 && (
                                    <span className="errorMessage">{formErrors.denomination}</span>
                                )}
                            </div>
                            <div className="web_url">
                                {/* <label htmlFor="web_url">Enter Web URL</label> */}
                                <input
                                    id='web_url-input'
                                    className={formErrors.web_url.length > 0 ? "error" : null}
                                    placeholder="https://YourChurch.com/webURL"
                                    type="text"
                                    name="web_url"
                                    noValidate
                                    value={web_url}
                                    onChange={this.handleChange}
                                />
                                {formErrors.web_url.length > 0 && (
                                    <span className="errorMessage">{formErrors.web_url}</span>
                                )}
                            </div>
                            <div className="longitude">
                                {/* <label htmlFor="longitude">Enter Church Longitude</label> */}
                                <input
                                    id='longitude-input'
                                    className={formErrors.longitude.length > 0 ? "error" : null}
                                    placeholder="Longitude"
                                    type="text"
                                    name="longitude"
                                    noValidate
                                    value={longitude}
                                    onChange={this.handleChange}
                                />
                                {formErrors.longitude.length > 0 && (
                                    <span className="errorMessage">{formErrors.longitude}</span>
                                )}
                            </div>
                            <div className="latitude">
                                {/* <label htmlFor="latitude">Enter Church Latitude</label> */}
                                <input
                                    id='latitude-input'
                                    className={formErrors.latitude.length > 0 ? "error" : null}
                                    placeholder="Latitude"
                                    type="text"
                                    name="latitude"
                                    noValidate
                                    value={latitude}
                                    onChange={this.handleChange}
                                />
                                {formErrors.latitude.length > 0 && (
                                    <span className="errorMessage">{formErrors.latitude}</span>
                                )}
                            </div>
                            <div className="createAccount">
                                <button type="submit">Sign Up</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}


export default Addchurch;