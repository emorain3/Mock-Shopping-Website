import React, { Component } from 'react';

import styled from 'styled-components';


let ImageShape = styled.div`
    border: solid black 20px;
    -webkit-clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
    clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
    width: 30vw;
    // margin: 0;
`

class DiagonalImage extends Component {
    render() {
        return (
            <ImageShape>
                <img src={this.props.image} alt="one of our worldwide locations" />
            </ImageShape>
        );
    }
}

export default DiagonalImage;