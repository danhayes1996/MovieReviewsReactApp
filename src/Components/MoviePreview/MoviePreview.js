import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './MoviePreview.css';

export default class MoviePreviewComponent extends Component {

    render() {
        return (
            <Link to={"/movie/" + this.props.movie.id}>
                <div className="movie-preview">
                    <img src={this.props.movie.imgUrl} alt={this.props.movie.name  + " Poster"} title={this.props.movie.name} />
                    <p>{this.props.movie.name}</p>
                </div>
            </Link>
        );
    }
}