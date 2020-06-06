import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import WelcomeScreen from './WelcomeScreen';
import BurgerMakerScreen from './BurgerMakerScreen';

const App = () => (
  <Router>
    <Route exact path='/Burger-Maker/' component={WelcomeScreen} />
    <Route path='/burger' component={BurgerMakerScreen} />
  </Router>
);

export default App;