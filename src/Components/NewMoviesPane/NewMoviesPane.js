import React, {Component} from 'react';
import axios from 'axios';

import MoviePreviewComponent from '../MoviePreview/MoviePreview';

import {API_MOVIES_NEW} from '../../Constants/api-const';

export default class NewMoviesPaneComponent extends Component {

    constructor(){
        super();
        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        axios.get(API_MOVIES_NEW + this.props.count)
            .then(value => {
                this.setState({movies: value.data});
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
            <div id="new-movies-pane">
                <h2>Recently Added</h2>
                {this.state.movies.map((movie, index) => {
                    return (<MoviePreviewComponent movie={movie} key={"movie" + index}/>);   
                })}
            </div>
        );
    }
}