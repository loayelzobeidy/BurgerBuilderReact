import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import Layout from './components/Layout/Layout'
import {Route} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
        <Route path = "/" component = {BurgerBuilder} exact/>
        <Route path = "/checkout" component = {Checkout}/>
        
          </Layout>
      </div>
    );
  }
}

export default App;
