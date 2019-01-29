import React, { Component } from 'react';
import styled from 'styled-components';

import NavBar from './NavBar'

let HomePageContainer = styled.div`
    bacgound-color: ivory;
`

class HomePage extends Component {
    render() {
        return (
            <HomePageContainer>
                <NavBar/>            
            </HomePageContainer>
        );
    }
}

export default HomePage;