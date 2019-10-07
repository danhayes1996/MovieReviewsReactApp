import React, {Component} from 'react';
import axios from 'axios';

import NavBarComponent from '../NavBar/NavBar';

import {API_MOVIE_GET} from '../../Constants/api-const';

export default class MovieComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            movieId: this.props.match.params.id
        };
    }

    componentDidMount() {
        axios.get(API_MOVIE_GET + this.state.movieId)
            .then(value => {
                console.log("movie:", value.data);
            }).catch(error => {
                if(!error.response) {
                    console.error("Error: Couldn't connect to API");
                } else {
                    console.error(error);
                }
            });
    }

    render() {
        return (
            <div>
                <NavBarComponent />
                <p>!!MOVIE DETAILS PLACEHOLDER!!</p>
            </div>
        );
    }
}