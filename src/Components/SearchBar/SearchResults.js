import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './SearchResults.css';

export default class SearchResultsComponent extends Component {
     
    render(){
        return (
            <div id="searchResults">
                {this.props.results.map((result, index) => {
                    return (
                        <Link to={"/movie/" + result.id} key={"result" + index}>
                            <div className="search-res">
                                <p>{result.name}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        );
    }
}