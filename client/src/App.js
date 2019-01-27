import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import LocationsPage from './components/LocationsPage';
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
          <Route exact path="/" component={LocationsPage} />
        </Router>
      </LandingPage>
    );
  }
}

export default App;
