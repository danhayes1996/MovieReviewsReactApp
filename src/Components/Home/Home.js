import React, {Component} from 'react';
import axios from 'axios';

import NavBarComponent from '../NavBar/NavBar';
import NewMoviesPaneComponent from '../NewMoviesPane/NewMoviesPane';

export default class HomeComponent extends Component {

    constructor(){
        super();
        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/movie/new/2')
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
            <div>
                <NavBarComponent showSearchBar/>
                <NewMoviesPaneComponent count={3}/>
            </div>
        )
    }
}  