import React, { Component } from 'react';
import styled from 'styled-components';
import insta_3 from '../images/insta_3.jpg';



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

let CardStyled = styled.div`
    padding: 30px 10px;
`

/////////////////////////// COMPONENT DEFINITION /////////////////////////
class ImageGrid extends Component {
    state = {
        images: [],
    }

    setImageType = (props) => {
        console.log("setImage's props: " + props.isSelectable)
        if(!props.isSelectable) {
            this.setState({images : this.props.grid_images.map( (image) => {
                    return(<ImageStyled src={image} alt=" image of something" img_height={this.props.img_height} /> )
                })
            })
        }
        this.setState({images : this.props.grid_images.map( (image) => {
            return(
                    <div class="uk-child-width-1-2@s uk-grid-match" uk-grid>
                        <div>
                            <div style={{padding: '10px 5px'}} class="uk-card uk-card-large uk-card-hover uk-card-body">
                                <img src={image} alt=" image of something"/>
                                <p> Item that you want</p>
                                <p> $ 100 </p>
                            </div>
                        </div>
                    </div>
                )
            })
        })
    }

    

    componentDidMount () {
        this.setImageType(this.props)
    }

    render() {
        
        return (
            <ImageContainer 
                side_margins={this.props.side_margins} 
                top_margins={this.props.top_margins} 
                width={this.props.width} 
            >
                
                {this.state.images}
                
            </ImageContainer>
        );
    }
}

export default ImageGrid;