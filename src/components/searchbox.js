import React from 'react';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            searchDenomination: '',
            denomination: null
        };
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput = (e) => {
        console.log(e.target.value);
        this.setState({ searchDenomination: e.target.value });
    }

    async componentDidMount() {
        const url = 'http://localhost:5000/churches/search/denomination/Episcopal';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ denonminations: data.results, loading: false });


    }

    // handleSubmit = (e) => {
    //     async function findDenominations() {
    //         const url = 'http://localhost:5000/churches/search/denomination/:search';
    //         const response = await fetch(url);
    //         const data = await response.json();
    //         this.setState({ denonminations: data.results });
    //     }
    // }


    // axios.get('http://localhost:5000/churches/search/denomination/:search', { denominations })
    //     .then(function (response) {
    //         console.log(response)
    //     })
    //     .catch(function (error) {
    //         console.log(error)
    //     })

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

                <input className='inputs' type='text'
                    placeholder='Search for a specific denomination'
                    onChange={this.handleInput}></input>

                <div>
                    {this.state.loading ? <div>loading...</div> : <div>No churches found.</div>}
                </div>

                <div>
                    {this.state.denomination}
                </div>



            </div>
        )
    }
}

export default SearchBox;