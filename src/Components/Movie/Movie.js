import React, {Component} from 'react';
import axios from 'axios';

import NavBarComponent from '../NavBar/NavBar';

import {API_MOVIE_GET} from '../../Constants/api-const';

export default class MovieComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            movie: {}
        };

        this.calculateRuntime = this.calculateRuntime.bind(this);
    }

    componentDidMount() {
        axios.get(API_MOVIE_GET + this.props.match.params.id)
            .then(value => {
                console.log("movie:", value.data);
                this.setState({movie: value.data});
            }).catch(error => {
                if(!error.response) {
                    console.error("Error: Couldn't connect to API");
                } else {
                    console.error(error);
                }
            });
    }

    calculateRuntime(runtime){
        return Math.floor(runtime / 60) + "h " + (runtime % 60) + " min";
    }

    render() {
        let runtimeStr = this.calculateRuntime(this.state.movie.runtime);

        return (
            <div>
                <NavBarComponent />
                <div id="info">
                    <h2>{this.state.movie.name}</h2>
                    <p>{this.state.movie.ageRating} | {runtimeStr} | !!GENRES PLACEHOLDER!!</p>
                    <p>{this.state.movie.description}</p>
                    <img src={this.state.movie.imgUrl} alt={this.state.movie.name + " Poster"} title={this.state.movie.name + " Poster"} />
                </div>

                <div id="ratings">
                    !!RATINGS PLACEHOLDER!!
                </div>

                <h3>Reviews</h3>
                {this.state.movie.reviews && this.state.movie.reviews.length ? 
                    <div id="reviews">
                        {this.state.movie.reviews.map((review, index) => {
                            return (
                                <div className="review" key={"review" + index}>
                                    <h4>{review.title}</h4>
                                    <p className="reviewUser">{review.user.username}</p>
                                    <p>{review.content}</p>
                                    <p>{review.likes}</p>
                                    <input type="button" value="LIKE" />
                                    <input type="button" value="DISLIKE" />
                                </div>
                            )
                        })} 
                    </div> : 
                    <div id="no-reviews">
                        <p>!!NO REVIEWS PLACEHOLDER!!</p>
                    </div>
                }
            </div>
        );
    }
}