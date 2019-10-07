import React, {Component} from 'react';

import './NavBar.css';

export default class NavBarComponent extends Component {

    constructor(){
        super();
        this.state = {
            results: [],
            showResults: false
        };

        this.showResults = this.showResults.bind(this);
        this.hideResults = this.hideResults.bind(this);
    }

    showResults() {
        this.setState({showResults: true});
    }

    hideResults() {
        this.setState({showResults: false});
    }

    render() {
        let res;
        if(this.state.showResults) {
            res = (
                <div id="searchResults">
                    <div className="search-res">
                        <p>!!RESULT PLACEHOLDER!!</p>
                    </div>
                </div>
            );
        }

        return (
            <div id="nav">
                <input id="menu-btn" type="button" value="MENU" />
                <div id="user-control">
                    <input id="sign-up" type="button" value="SIGN UP" />
                    <input id="sign-in-out" type="button" value="SIGN IN/OUT" />
                </div>
                <div id="searchContainer">
                    <div id="searchBar">
                        <input id="search-txt" type="text" onKeyUp={this.showResults} onBlur={this.hideResults} />
                        <input id="search-btn" type="button" value="SEARCH" />
                    </div>
                    {res}
                </div>
            </div>
        );
    }
}