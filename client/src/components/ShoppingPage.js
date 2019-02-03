import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import NavBar from './NavBar'
import ImageGrid from './ImageGrid'
import ItemForm from './ItemForm'

import cover_image_sunny_blackgirl from '../images/cover_image_sunny_blackgirl.jpg';
import insta_1 from '../images/insta_asiangirl.jpg';
import insta_2 from '../images/insta_blackgirl_1.jpg';
import insta_3 from '../images/insta_3.jpg';



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
    margin-bottom: -1vw;
    margin-left: 2vw;
    font-family: 'Titillium Web', sans-serif;
`

//                          Add shopping cart Icon !!!!!           <<<<--------------------------------


/////////////////////////// COMPONENT DEFINITION /////////////////////////
class ShoppingPage extends Component {
    state = {
        temp_images: [insta_1, insta_2, insta_3, insta_1, insta_2, insta_3],
        isAdminState: false,
        visibility: "hidden",
    }

    toggleAdminState = () => {
        this.setState({isAdminState: !this.state.isAdminState}, () => {    
            if(this.state.isAdminState) {
                this.setState({visibility: "visible"})
            } else {this.setState({visibility: "hidden"})}
            console.log("adminState is: " + this.state.isAdminState)
        })

    }



    componentDidMount () {
        axios.get(`/api/america/:category`).then((res) => {
            console.log(res.items)
            // this.setState({ temp_images: res.images })
            
        })
    }




    render() {

        // Functions 


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
                                <li class="uk-text-large"><a href="/america/blouses"> Blouses </a></li>
                            </ul>
                        </div>

                        <ItemForm/>
                    </SideNavContainer>


                    {/* Image Banner */}
                    <BannerImageShape src={ cover_image_sunny_blackgirl } alt="banner image for this page"/>


                    {/* Item Grid */}
                    <ItemGridContainer>



                        <PageText> Tops </PageText>


                        <ImageGrid 
                            visibility={this.state.visibility}
                            imageType={"2"} 
                            grid_images={this.state.temp_images} 
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