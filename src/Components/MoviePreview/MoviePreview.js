import React, {Component} from 'react';

export default class MoviePreviewComponent extends Component {

    render() {
        return (
            <div id="movie-preview">
                <img src={this.props.movie.imgUrl} alt={this.props.movie.name  + " poster"}/>
                <p>{this.props.movie.name}</p>
            </div>
        );
    }
}