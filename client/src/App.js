import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import LocationsContainer from './components/LocationsContainer';
import styled from 'styled-components';



let LandingPage = styled.div`
    background-color: black;
    text-align: center;
    margin: 0;
    height: 110vh;
`


class App extends Component {
  render() {
    return (
      <LandingPage>
        <Router>
          <Route exact path="/" component={LocationsContainer} />
        </Router>
      </LandingPage>
    );
  }
}

export default App;
