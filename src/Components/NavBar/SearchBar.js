import React, {Component} from 'react';
import axios from 'axios';

import {IconButton} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import {API_MOVIES_FIND, API_MOVIE_GET} from '../../Constants/api-const';

import './SearchBar.css';

export default class SearchBarComponent extends Component {

    constructor() {
        super();
        this.state = {
            results: [],
            showResults: false
        };
        
        this.findMovies = this.findMovies.bind(this);
        this.showResults = this.showResults.bind(this);
        this.hideResults = this.hideResults.bind(this);
    }

    findMovies(event) {
        let searchStr = event.target.value;
        if(searchStr === "") {
            this.hideResults();
            return;
        }

        axios.get(API_MOVIES_FIND + event.target.value)
            .then(value => {
                let showRes = value.data !== undefined && value.data.length !== 0;
                this.setState({results: value.data, showResults: showRes});
            }).catch(error => {
                if(!error.response) {
                    console.log("Error: Couldn't connect to API");
                } else {
                    console.error(error);
                }
            });
    }

    showMovie(movieId) {
        axios.get(API_MOVIE_GET + movieId)
            .then(value => {
                console.log(value.data);
            }).catch(error => {
                if(!error.response) {
                    console.log("Error: Couldn't connect to API");
                } else {
                    console.error(error);
                }
            });
    }

    showResults() {
        this.setState({showResults: true});
    }

    hideResults(){
        this.setState({showResults: false});
    }

    render() {
        let searchResults;
        if(this.state.showResults) {
            searchResults = (
                <div id="searchResults">
                    {this.state.results.map((result, index) => {
                        return (
                            <div key={"result" + index} className="search-res" onClick={ () => this.showMovie(result.id)}>
                                <p>{result.name}</p>
                            </div>
                        );
                    })}
                </div>
            );
        }

        return (
            <div id="searchContainer">
                <div id="searchBar">
                    <input id="search-txt" type="text" onKeyUp={this.findMovies} /*onBlur={this.hideResults}*/ />
                    <IconButton id="search-btn" aria-label="delete">
                        <SearchIcon fontSize="small" />
                    </IconButton>
                </div>
                {searchResults}
            </div>
        );
    }
}