import React, {Component} from 'react';
import axios from 'axios';

import MoviePreviewComponent from '../MoviePreview/MoviePreview';

import './MoviesScrollPane.css';

export default class MoviesScrollPaneComponent extends Component {

    constructor(){
        super();
        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        axios.get(this.props.api_call)
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
            <div className="sp-container">
                <h2>{this.props.title}</h2>
                <div className="scroll-pane">
                    
                    {this.state.movies.map((movie, index) => {
                        return (<MoviePreviewComponent movie={movie} key={"movie" + index}/>);   
                    })}
                </div>
            </div>
        );
    }
}