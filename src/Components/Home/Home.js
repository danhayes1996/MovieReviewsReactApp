import React, {Component} from 'react';
import axios from 'axios';

export default class HomeComponent extends Component {

    constructor(){
        super();
        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/movie/all')
            .then(value => {
                console.log(value);
                this.setState({movies: value.data});
            }).catch(error =>{
                if(!error.response) {
                    console.error("Error: Couldn't connect to API");
                } else {
                    console.error(error);
                }
            });
    }

    render(){
        return (
            <div className="movies">
                <p>!!MOVIES PLACEHOLDER!!</p>
            </div>
        )
    }
}  