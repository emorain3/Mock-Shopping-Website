import React, { Component } from 'react';
import styled from 'styled-components';

let navStyle = {
    position: 'relative', 
    zIndex: '980',
  };


class NavBar extends Component {
    render() {
        return (
            <div>
                <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
                    <nav class="uk-navbar-container" uk-navbar="dropbar: true;" style={navStyle}>
                        <div class="uk-navbar-left">

                            <ul class="uk-navbar-nav">
                                <li class="uk-active"><a href="#">Active</a></li>
                                <li>
                                    <a href="#">Parent</a>
                                    <div class="uk-navbar-dropdown">
                                        <ul class="uk-nav uk-navbar-dropdown-nav">
                                            <li class="uk-active"><a href="#">Active</a></li>
                                            <li><a href="#">Item</a></li>
                                            <li><a href="#">Item</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li><a href="#">Item</a></li>
                            </ul>

                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default NavBar;