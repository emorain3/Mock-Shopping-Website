import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from "react-router-dom";


import NavBar from './NavBar'
import ImageGrid from './ImageGrid'
import ItemForm from './ItemForm'

import cover_image_sunny_blackgirl from '../images/cover_image_sunny_blackgirl.jpg';




////////////// STYLING
let PageContainer = styled.div`
    // border: solid green;
    width: 100vw;
    background-color: ivory;
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 3fr;
    grid-template-areas: "sidenavbar banner"
                         "sidenavbar imagegrid";
    
    padding-top: 3vw;
`

let SideNavContainer = styled.div`
    // border-right: solid brown;
    grid-area: sidenavbar;
    justify-self: start;
    width: 15vw;

    padding-left: 3vw;
    padding-top: 0vw;
`
let BannerImageShape = styled.img`
    border-left: solid #222222 15vw;
    border-right: solid #222222 15vw;
    border-top: solid #222222 3vw;
    margin-left: -8vw;
    width: 80vw;
    // height: 70vh;
    grid-area: banner;
`

let ItemGridContainer = styled.div`
    // border: solid blue;
    margin-right: 2vw;
    width: 85vw;
    grid-area: imagegrid;
`

let PageText = styled.h1`   
    margin-top: 2vw;
    margin-bottom: 1vw;
    margin-left: 2vw;
    font-family: 'Titillium Web', sans-serif;
`

let EditButtonsContainer = styled.div`
    visibility: ${({ visibility }) => visibility};
`

let ImageStyled = styled.img`
    margin: 1vw 1.25vw;
    height: 20vw;
    box-shadow: 1px 1px 1px grey;
`
//                          Add shopping cart Icon !!!!!           <<<<--------------------------------


/////////////////////////// COMPONENT DEFINITION /////////////////////////
class ShoppingPage extends Component {
    state = {
        image_objects: [{}],
        isAdminState: false,
        visibility: "hidden",
    }

    toggleAdminState = () => {
        this.setState({isAdminState: !this.state.isAdminState}, () => {    
            if(this.state.isAdminState) {
                this.setState({visibility: "visible"}, () => {
                    console.log("visibility set to: " + this.state.visibility)
                    this.updateImages()
                })
            } else {this.setState({visibility: "hidden"}, () => {
                console.log("visibility set to: " + this.state.visibility)
                this.updateImages()
                }) 
            }
            console.log("adminState is: " + this.state.isAdminState)
        })

    }

    updateImages = () => {
        axios.get(`/api/america/:category`).then((res) => {
            // console.log("THE DATA I WANT TO PARSE --> " + res.data)
            this.setState({ image_objects: res.data.map(image_object => {
                // console.log("image_object.name: " + JSON.stringify(image_object))
                    return(
                        <div key={image_object.image_url} style={{marginBottom: '2vw', marginTop:"0vw"}} class="uk-grid-match" uk-grid>
                            <div style={{height: "30vw"}}>
                                <div style={{padding: '10px 5px'}} class="uk-card uk-card-hover uk-card-body">
                                    
                                    {/*  Edit Buttons */}
                                    <EditButtonsContainer class="edit_button_container" visibility={this.state.visibility} >
                                        <Link to={"/admin/{{_id}}"}>
                                            <i style={{color:"grey", marginLeft:"6vw", marginBottom:"0vw"}} class="fas fa-edit fa-2x"></i>
                                        </Link>
                                        <Link to={`http://localhost:3001/api/america/admin/delete/${image_object._id}`}> 
                                            <i style={{color:"grey", marginLeft:"2vw", marginBottom:"0vw"}} class="fas fa-trash-alt fa-2x"></i>
                                        </Link> 
                                        
                                    </EditButtonsContainer>
                                    
                                    
                                    {/* Image */}
                                    <Link to={"item/{{_id}}"}>
                                        <ImageStyled src={image_object.image_url} alt=" image of something" />
                                    </Link>
                                    <p> {image_object.name}</p>
                                    <p> ${image_object.price} </p>
    
                                </div>
                            </div>
                        </div>
                    )
                }) })
            
        })
        
    }

    componentDidMount () {
        this.updateImages()
    }

    componentWillReceiveProps(nextProps) {
        this.updateImages()
    }


    render() {

        // Functions 

        // console.log("image_objects IN PARENT are: " + JSON.stringify(this.state.image_objects))
        return (
            <div>
                {/* Nav Bar */}
                <NavBar toggleAdminState = {this.toggleAdminState} />
                
                <PageContainer>

                    {/* Side Nav */}
                    <SideNavContainer>
                        <div class=" uk-width-1-4">
                            <ul class="uk-nav uk-nav-default">
                                <li class="uk-active uk-text-large"><a href="#"> Tops </a></li>
                                <li class="uk-text-large" ><a href="/america/tshirts"> T-shirts </a></li>
                                <li class="uk-text-large" ><a href="/america/blouses"> Blouses </a></li>
                            </ul>
                        </div>

                        <ItemForm updateImages={this.updateImages}/>
                    </SideNavContainer>


                    {/* Image Banner */}
                    <BannerImageShape src={ cover_image_sunny_blackgirl } alt="banner image for this page"/>


                    {/* Item Grid */}
                    <ItemGridContainer>



                        <PageText> Tops </PageText>


                        <ImageGrid 
                            visibility={this.state.visibility}
                            imageType={"2"} 
                            images={this.state.image_objects} 
                            side_margins={0} 
                            top_margins={1} 
                            img_height={20} 
                            width={80}/>


                    </ItemGridContainer>



                </PageContainer>
                
            </div>
        );
    }
}

export default ShoppingPage;