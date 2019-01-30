import React, { Component } from 'react';
import styled from 'styled-components';

let navStyle = {
    position: 'relative', 
    zIndex: '980',
  };

let navBkgndClr = {
    width: '100vw', 
};


class NavBar extends Component {
    render() {
        return (
            <div>
                <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
                    <nav class="uk-navbar-container" uk-navbar="dropbar: true;" style={navStyle}>
                        <div class="uk-navbar-left uk-background-secondary" style={navBkgndClr}>

                            <ul class="uk-navbar-nav">
                                <li ><a href="#"> Home </a></li>
                                <li>
                                    <a href="#"> Clothing </a>
                                    <div class="uk-navbar-dropdown">
                                        <ul class="uk-nav uk-navbar-dropdown-nav">
                                            <li class="uk-active"><a href="#">Active</a></li>
                                            <li><a href="#">Item</a></li>
                                            <li><a href="#">Item</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li><a href="#"> Office Essentials </a></li>
                            </ul>

                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default NavBar;