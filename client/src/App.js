import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import styled from 'styled-components';

import LocationImagesContainer from './components/LocationImagesContainer';
import HomePage from './components/HomePage'
import ShoppingPage from './components/ShoppingPage'





class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={LocationImagesContainer} />
            <Route exact path="/america" component={HomePage} />
            <Route exact path="/america/clothing/tshirts" component={ShoppingPage} />
          </Switch>

        </Router>
      </div>
    );
  }
}

export default App;
