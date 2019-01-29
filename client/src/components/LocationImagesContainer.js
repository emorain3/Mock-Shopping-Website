import React, { Component } from 'react';
import DiagonalImage from './DiagonalImage'
import {Link } from "react-router-dom";

import asian_location from '../images/asian_location.jpeg';
import american_location from '../images/america_location.jpeg';
import brazil_location from '../images/brazil_location.jpg';
import styled from 'styled-components';


let LandingPage = styled.div`
    background-color: black;
    text-align: center;
    margin: 0;
    height: 110vh;
`

let ImageContainer = styled.div`
    // border: solid salmon 20px;
    display: flex;
    justify-content: center;
    width: 97vw;
    height: 96vh;
    margin-left: 0vw;
    margin-right: 0vw;    
`

class LocationImagesContainer extends Component {
    render() {
        // const AmericanLocationComponent = () => <Link exact to="/america" > <DiagonalImage distance={-30} locationName="American" image={american_location}/> </Link>
        return (
            <LandingPage>
                <ImageContainer>
                    {/* <Link render={AmericanLocationComponent}/> */}
                    <Link to={"/america"} > 
                        <DiagonalImage distance={-45} locationName="USA" image={american_location}/> 
                    </Link>

                    <Link to={"/brazil"}> 
                        <DiagonalImage distance={-15} locationName="Brazil" image={brazil_location}/>
                    </Link> 

                    <Link to={"/korea"} > 
                        <DiagonalImage distance={15} locationName="Korean" image={asian_location}/>
                    </Link> 

                </ImageContainer>
            </LandingPage>
        );
    }
}




export default LocationImagesContainer;