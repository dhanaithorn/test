import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import Login from './components/Login';
import ContentFeed from './components/ContentFeed';
import burger from './components/burger';
import Pasta from './components/Pasta';
import Appetiser from './components/Appetiser';
import Drink from './components/Drink';

export default class App extends Component {
  render() { 
    return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={Login} title="Login" hideNavBar/>
        <Scene key="contentfeed" component={ContentFeed} title="ContentFeed" hideNavBar/>
        <Scene key="burger" component={burger} title="Burger" hideNavBar/>
        <Scene key="Pasta" component={Pasta} title="Pasta" hideNavBar/>                                                        
        <Scene key="Appetiser" component={Appetiser} title="Appetiser" hideNavBar/>                                                        
        <Scene key="Drink" component={Drink} title="Drink" hideNavBar/>                                                        
      </Scene>
    </Router>
    );
  }
}
