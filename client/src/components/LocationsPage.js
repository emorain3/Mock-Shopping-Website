import React, { Component } from 'react';
import DiagonalImage from './DiagonalImage'
import asian_location from '../images/asian_location.jpeg';
import american_location from '../images/america_location.jpeg';
import brazil_location from '../images/brazil_location.jpg';
import styled from 'styled-components';


let ImageContainer = styled.div`
    border: solid salmon 20px;
    display: flex;
    justify-content: center;
    width: 97vw;
    height: 96vh;
    margin-left: 0vw;
    margin-right: 0vw;
    
`

class LocationsPage extends Component {
    render() {
        return (
            <div>
                <ImageContainer>
                    <DiagonalImage image={american_location}/>
                    <DiagonalImage image={brazil_location}/>
                    <DiagonalImage image={asian_location}/>
                </ImageContainer>
            </div>
        );
    }
}




export default LocationsPage;