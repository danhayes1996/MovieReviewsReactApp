import React, {Component} from 'react';

import NavBarComponent from '../NavBar/NavBar';
import MoviesScrollPaneComponent from '../MoviesScrollPane/MoviesScrollPane';

import {API_MOVIES_NEW, API_MOVIES_ALL} from '../../Constants/api-const';


export default class HomeComponent extends Component {

    constructor(){
        super();
        this.state = {
            movies: []
        };
    }

    render(){
        return (
            <div>
                <NavBarComponent showSearchBar/>

                {/* Recently Added Pane */}
                <MoviesScrollPaneComponent title="Recently Added" api_call={API_MOVIES_NEW + 4}/>
                
                {/* REMOVE AFTER TESTING - All Movies Pane */}
                <MoviesScrollPaneComponent title="All Movies" api_call={API_MOVIES_ALL} />
            </div>
        )
    }
}  