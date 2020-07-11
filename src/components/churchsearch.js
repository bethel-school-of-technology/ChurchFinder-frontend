import React from 'react';
// import searchChurches from './churchsearchApi';

class ChurchSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            data: []
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
        async function API(url) {
            const response = await fetch('http://localhost:5000/churches/search');
            const data = await response.json();
            return data;
            console.log(data);
            console.log(response);

        }
    }

    render() {
        return (
            <div>
                <form onChange={this.handleSubmit}>
                    <input type='text'
                    placeholder='Search for your church' name='query' value='query'
                    onChange={this.handleChange}></input>
                    <button type='submit'>Search</button>
                </form>

                <div>{this.state.data}</div>
            </div>
        )
    }
}

export default ChurchSearch;