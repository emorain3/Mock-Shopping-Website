import React, { Component } from 'react';
import styled from 'styled-components';



let ImageContainer = styled.div`
    width: ${({width}) => width ? width + 'vw' : "90vw"};
    
    display: flex; 
    flex-wrap: wrap;
    justify-content: center;
    
    margin: ${({ top_margins }) => top_margins + 'vw'} ${({ side_margins }) => side_margins + 'vw'};
    background-color: ivory;
`
let ImageStyled = styled.img`
    margin: 3vw 1.25vw;
    height: ${({ img_height }) => img_height + 'vw'};
    box-shadow: 1px 1px 1px grey;
`

/////////////////////////// COMPONENT DEFINITION /////////////////////////
class ImageGrid extends Component {
    render() {
        return (
            <ImageContainer 
                side_margins={this.props.side_margins} 
                top_margins={this.props.top_margins} 
                width={this.props.width} 
            >
                
                { this.props.grid_images.map( (image) => {
                    return(<ImageStyled src={image} alt=" image of something" img_height={this.props.img_height} /> )
                }) }
                
            </ImageContainer>
        );
    }
}

export default ImageGrid;