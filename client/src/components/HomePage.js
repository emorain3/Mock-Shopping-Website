import React, { Component } from 'react';
import styled from 'styled-components';

import NavBar from './NavBar'
// import cover_image_love from '../images/cover_image_love.jpg';
// import cover_image_sunny_blackgirl from '../images/cover_image_sunny_blackgirl.jpg';
import cover_image_two_girls from '../images/cover_image_two_girls.jpg';
// import cover_image_coat from '../images/cover_image_coat.jpg';
// import cover_image_bw from '../images/cover_image_bw.jpg';
// import cover_image_blackgirl_bus from '../images/cover_image_blackgirl_bus.jpg';
import insta_1 from '../images/insta_asiangirl.jpg';
import insta_2 from '../images/insta_blackgirl_1.jpg';
import insta_3 from '../images/insta_3.jpg';
import kiss from '../images/kiss_icon.png';


import ImageGrid from './ImageGrid'


////////////// STYLING
let HomePageContainer = styled.div`
    background-color: ivory;
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

    background-color: grey;
    opacity: .2;
`
let HoverTagHeader = styled.div`
    position: absolute;
    width: 50vw;
    height: 40vh;

    top: 15vh;
    left: 37vw;

    font-family: 'Dancing Script', cursive;
    font-size: 4.5vw;
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
    font-size: 6vw;
    color: maroon;

    text-shadow: 1px 1px 1px black;
`

let HeaderContainer = styled.div`
    display: flex;
    
    justify-content: center;
    align-items: center;
    
    margin-top: 5vw;
    margin-bottom: -3vw;
`
let PageText = styled.h1`   
    margin-top: 1vw;
    margin-right: 10px;
    font-family: 'Titillium Web', sans-serif;
`
let KissIcon = styled.img`
    height: 52px;
`

/////////////////////////// COMPONENT DEFINITION /////////////////////////
class HomePage extends Component {
    state = {
        images: [insta_1, insta_2, insta_3]
    }
    render() {
        return (
            <HomePageContainer>

                {/* Nav Bar */}
                <NavBar/>
                
                {/* Cover Image */}
                <CoverImageShape>
                    <img src={cover_image_two_girls} alt="cover image 1" />
                </CoverImageShape>

                    {/* Hovering Transparent Sign */}
                <HoverTagContainer> </HoverTagContainer>
                <HoverTagHeader> Gotta Love Sales.</HoverTagHeader> 
                <HoverTagline> Clearance up to 80% OFF </HoverTagline>

                {/*  Photo Feed  */}
                <HeaderContainer>
                    <PageText> 'Fits From Customers Like You </PageText>
                    <KissIcon src={kiss}/>
                </HeaderContainer>
                
                <ImageGrid 
                    isSelectable={false}
                    grid_images={this.state.images} 
                    side_margins={5} 
                    top_margins={5} 
                    img_height={30} />

            </HomePageContainer>
        );
    }
}

export default HomePage;