import React, {Component} from 'react';

import SearchBarComponent from './SearchBar';
import './NavBar.css';

export default class NavBarComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            hasSearchBar: props.showSearchBar,
            showMenu: false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(){
        this.setState({showMenu: !this.state.showMenu});
    }

    render() {
        let menu;
        if(this.state.showMenu) {
            //SHOW MENU STUFF
        }
        
        
        let searchBar = (this.state.hasSearchBar) ? <SearchBarComponent /> : null;
        return (
            <div id="nav">
                <input id="menu-btn" type="button" value="MENU" onClick={this.toggleMenu} />
                <div id="user-control">
                    <input id="sign-up" type="button" value="SIGN UP" />
                    <input id="sign-in-out" type="button" value="SIGN IN/OUT" />
                </div>
                {searchBar}
                {menu}
            </div>
        );
    }
}