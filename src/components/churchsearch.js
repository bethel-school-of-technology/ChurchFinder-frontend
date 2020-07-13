import React from 'react';
import axios from 'axios;'
// import searchChurches from './churchsearchApi';

class ChurchSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            filter
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { query } = this.state;

        axios.get('http://localhost:5000/churches/search', { query }) 
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error)
        })
    }

    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     async function API(url) {
    //         const response = await fetch('http://localhost:5000/churches/search');
    //         const data = await response.json();
    //         return data;
    //         console.log(data);
    //         console.log(response);

    //     }
    // }

    render() {
        return (
            <div>
                <form id='churchsearchform' onChange={this.handleSubmit}>
                    <input className='inputs' type='text' name='query' value={query}
                    placeholder='Enter keywords about the church you are looking for' 
                    onChange={this.handleChange}></input>
                    <button type='submit'>Search</button>
                </form>

                <div>{this.state.response}</div> //map function //filter
            </div>
        )
    }
}

export default ChurchSearch;