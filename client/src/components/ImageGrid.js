import React, { Component } from 'react';
import styled from 'styled-components';

import insta_1 from '../images/insta_asiangirl.jpg';
import insta_2 from '../images/insta_blackgirl_1.jpg';
import insta_3 from '../images/insta_3.jpg';

let ImageContainer = styled.div`
    width: 90vw;
    
    display: flex; 
    flex-wrap: wrap;
    justify-content: center;
    
    margin: 5vh 5vw;
    background-color: ivory;
`
let ImageStyled = styled.img`
    margin: 3vw 1.25vw;
    height: 30vw;
    box-shadow: 1px 1px 1px grey;
`

/////////////////////////// COMPONENT DEFINITION /////////////////////////
class ImageGrid extends Component {
    render() {
        return (
            <ImageContainer>
                {/* will need to map from list of images                     <------------------------------                 */}
                <ImageStyled src={insta_1} alt="cover image 1" />
                <ImageStyled src={insta_2} alt="cover image 1" />
                <ImageStyled src={insta_3} alt="cover image 1" />
            </ImageContainer>
        );
    }
}

export default ImageGrid;