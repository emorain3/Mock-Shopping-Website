import React, { Component } from 'react';
import styled from 'styled-components';

let Heading = styled.h1`
    color: pink;
    font-size: 4rem;
    margin: 0 auto;
`


class NavBar extends Component {
    render() {
        return (
            <div>
                <Heading> It's a me a-nav-abar </Heading>
            </div>
        );
    }
}

export default NavBar;