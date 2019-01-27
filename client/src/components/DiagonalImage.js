import React, { Component } from 'react';

import styled, { keyframes } from 'styled-components';

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

let ImageShape = styled.div`
    border: solid black 20px;
    position: absolute;
    width: 30vw;

    -webkit-clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
    clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
    
    opacity: .6;
    
    transition: transform 300ms ease-in-out;
    &:hover {
        transform: scale(1.2);
        opacity: 1;
    }
    
    animation: ${({ distance }) => locationImageTransition(distance)} 1300ms ease-in-out 0s;
    margin-left: ${({ distance }) => distance + 'vw'};
`

class DiagonalImage extends Component {
    render() {
        return (
            <ImageShape distance={this.props.distance}>
                <img src={this.props.image} alt="one of our worldwide locations" />
            </ImageShape>
        );
    }
}

export default DiagonalImage;