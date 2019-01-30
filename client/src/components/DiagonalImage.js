import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';


////////////// ANIMATIONS
let locationImageTransition = (distance) => keyframes`
    0% {
        margin-left: 10vw;
        opacity: 1;
    }
    100% {
        margin-left: ${distance + 'vw'};
        opacity: .8;
    }
`
    
////////////// STYLING
let LocationLinkContainer = styled.div`
    position: relative;
    z-index: 5;
    bottom: 15vh;
    left: 4vw;
`
    
let LocationLink = styled.h1`
    font-size: 3vw;
    text-direction: center;
    font-family: 'Titillium Web', sans-serif;
    color: pink;

    width: 20vw;
    
    transition: all 300ms ease-in-out;
    opacity: 0;
    text-shadow: 1px 1px 1px black;
`


let ImageShape = styled.div`
    border: solid black 20px;
    position: absolute;
    width: 30vw;
    height: 90vh;
    margin-top: 5vh;

    -webkit-clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
    clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
    
    opacity: .6;
    
    transition: transform 300ms ease-in-out;
    &:hover {
        transform: scale(1.2);
        opacity: 1;
    }
    
    &:hover ${LocationLink} {
        transform: scale(1);
        opacity: 1;
        cursor: pointer;
    }
    
    animation: ${({ distance }) => locationImageTransition(distance)} 1300ms ease-in-out 0s;
    margin-left: ${({ distance }) => distance + 'vw'};
    
    z-index: 1;
`




////////////// COMPONENT DEFINITION
class DiagonalImage extends Component {
    render() {
        // console.log("props for: " + this.props.locationName + " IS " + this.props.distance)
        return (
            <ImageShape distance={this.props.distance}>
                <img src={this.props.image} alt="one of our worldwide locations" />
                <LocationLinkContainer>
                    <LocationLink> {this.props.locationName} Location </LocationLink>
                </LocationLinkContainer>
            </ImageShape>
          
        );
    }
}

export default DiagonalImage;