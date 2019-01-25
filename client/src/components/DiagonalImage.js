import React, { Component } from 'react';
import asian_location from '../images/asian_location.jpeg';
import american_location from '../images/america_location.jpeg';
import south_american_location from '../images/south-america_location.jpeg';


class DiagonalImage extends Component {
    render() {
        return (
            <div>
                <img src={asian_location} alt="one of our worldwide locations" />
            </div>
        );
    }
}

export default DiagonalImage;