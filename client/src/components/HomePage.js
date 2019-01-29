import React, { Component } from 'react';
import styled from 'styled-components';

import NavBar from './NavBar'
import cover_image_1 from '../images/cover_image_1.jpg';




////////////// STYLING
let HomePageContainer = styled.div`
    bacgound-color: ivory;
`

let CoverImageShape = styled.div`
    // margin-left: 1vw;
    // width: 98vw;
`

let HoverTagContainer = styled.div`
    position: absolute;
    width: 50vw;
    height: 50vh;

    top: 12vh;
    left: 25vw;

    font-size: 4rem;

    background-color: lightpink;
    opacity: .8;
`
let HoverTagHeader = styled.div`
    position: absolute;
    width: 50vw;
    height: 40vh;

    top: 15vh;
    left: 37vw;

    font-family: 'Dancing Script', cursive;
    font-size: 5rem;
    color: black;

    text-shadow: 1px 1px 1px black;
`

let HoverTagline = styled.div`
    position: absolute;
    width: 40vw;
    height: 40vh;

    top: 24vh;
    left: 30vw;

    font-family: 'Open Sans', sans-serif;
    font-size: 7rem;
    color: maroon;

    text-shadow: 1px 1px 1px black;
`



/////////////////////////// COMPONENT DEFINITION /////////////////////////
class HomePage extends Component {
    render() {
        return (
            <HomePageContainer>
                <NavBar/>
                
                <CoverImageShape>
                    <img src={cover_image_1} alt="cover image 1" />
                </CoverImageShape>

                <HoverTagContainer> </HoverTagContainer>
                <HoverTagHeader> Gotta Love Sales.</HoverTagHeader> 
                <HoverTagline> Clearance up to 80% OFF </HoverTagline>


            </HomePageContainer>
        );
    }
}

export default HomePage;