import React, {Component} from 'react';

import {IconButton, Button} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

import SearchBarComponent from '../SearchBar/SearchBar';
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
                <IconButton id="menu-btn" aria-label="menu" onClick={this.toggleMenu}>
                    <MenuIcon fontSize="small" />
                </IconButton>
                <div id="user-control">
                    <Button id="sign-up">SIGN UP/IN</Button>
                    <Button id="sign-in-out">SIGN OUT</Button>
                </div>
                {searchBar}
                {menu}
            </div>
        );
    }
}