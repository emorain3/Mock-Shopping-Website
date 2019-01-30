import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import logo from '../images/brand_icon_transparent.png'

let navStyle = {
    paddingBottom: '1vw',
};

let navBkgndClr = {
    width: '100vw', 
    zIndex: '500',
};

let Logo = styled.img`
    margin-top: 1vw;
    margin-right: 4vw;
    margin-left: 2vw;
    height: 86px;
`


/////////////////////////// COMPONENT DEFINITION /////////////////////////
class NavBar extends Component {
    render() {
        return (
            <div>
                {/* <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
                    <nav class="uk-navbar-container" uk-navbar="dropbar: true;" style={navStyle}>
                        <div class="uk-navbar-left uk-background-secondary" style={navBkgndClr}> */}


                <div class="uk-position-relative">

                    <nav class="uk-navbar-container" uk-navbar="dropbar: true; dropbar-mode: push">

                        <div class="uk-navbar-left uk-background-secondary" style={navBkgndClr}>
                            
                            <Link to={"/america"}> <Logo src={logo} alt="Brand Logo" /> </Link>

                            <ul class="uk-navbar-nav">
                                
                                <li>
                                    <a href="#"> Clothing </a>
                                    <div class="uk-navbar-dropdown uk-navbar-dropdown-width-2">
                                        <div class="uk-navbar-dropdown-grid uk-child-width-1-2" uk-grid>
                                            <div>
                                                <ul class="uk-nav uk-navbar-dropdown-nav">

                                                    <li class="uk-nav-header"> Tops </li>
                                                    <li> <a href="/america/clothing/tshirts"> T-shirts </a></li>
                                            
            
                                                    <li> <a href="/america/clothing/blouses"> Blouses </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="#"> Accessories </a>
                                    <div class="uk-navbar-dropdown uk-navbar-dropdown-width-2">
                                        <div class="uk-navbar-dropdown-grid uk-child-width-1-2" uk-grid>
                                            <div>
                                                <ul class="uk-nav uk-navbar-dropdown-nav">

                                                    <li class="uk-nav-header">Office Essentials</li>
                                                    <li><a href="/america/office"> Notebooks and Stationery </a></li>
                                            
                                                    <li class="uk-nav-divider"></li>
                                                    <li class="uk-nav-header"><a href="/america/purses"> Purses </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                        </div>

                    </nav>
                </div>
            </div>
        );
    }
}

export default NavBar;