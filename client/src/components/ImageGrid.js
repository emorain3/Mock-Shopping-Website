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
    margin: 1vw 1.25vw;
    height: ${({ img_height }) => img_height + 'vw'};
    box-shadow: 1px 1px 1px grey;
`

let CardStyled = styled.div`
    padding: 30px 10px;
`

let EditButtonsContainer = styled.div`
    visibility: ${({ visibility }) => visibility};
`


/////////////////////////// COMPONENT DEFINITION /////////////////////////
class ImageGrid extends Component {
    state = {
        images: [],
        visibility: "hidden",
    }

    setImageType = (props) => {
        console.log("visibility initially: " + this.state.visibility)
        if(props.imageType === "1") {
            this.setState({images : this.props.grid_images.map( (image) => {
                    return(<ImageStyled src={image} alt=" image of something" img_height={this.props.img_height} /> )
                })
            })
        }
        else if(props.imageType === "2") {

            this.setState({images : this.props.grid_images.map( (image) => {
                return(
                    <div style={{marginBottom: '2vw', marginTop:"0vw"}} class="uk-grid-match" uk-grid>
                        <div style={{height: `${this.props.img_height}`}}>
                            <div style={{padding: '10px 5px'}} class="uk-card uk-card-hover uk-card-body">
                                {/*  Edit Buttons */}
                                <EditButtonsContainer class="edit_button_container" visibility={this.state.visibility} >
                                    <a href="admin/{{_id}}">
                                        <i style={{color:"grey", marginLeft:"3vw", marginBottom:"0vw"}} class="fas fa-edit fa-2x"></i>
                                    </a>
                                    <a href="admin/{{_id}}">
                                        <i style={{color:"grey", marginLeft:"2vw", marginBottom:"0vw"}} class="fas fa-trash-alt fa-2x"></i>
                                    </a>
                                </EditButtonsContainer>
                                {/* Image */}
                                <a href="item/{{_id}}">
                                    <ImageStyled src={image} alt=" image of something" img_height={this.props.img_height} />
                                </a>
                                <p> Item that you want</p>
                                <p> $ 100 </p>

                            </div>
                        </div>
                    </div>
                )
            }) })
        }
    }

    

    componentDidMount () {
        this.setImageType(this.props)
        this.setState({visibility: this.props.visibility})
    }
    
    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.visibility !== this.state.visibility) {
            this.setState({ visibility: nextProps.visibility }, () => {
                this.setImageType(this.props)
            });
        }
    }
    
    
    render() {
        console.log("icon visibility updated to: " + this.state.visibility)
        
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