import React from 'react';
import { Switch, Route } from 'react-router-dom'
//import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
//import Product from './components/Product';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';


class App extends React.Component {

  render() {
    return <React.Fragment>
      <Navbar />
      <Switch>

        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route exact path="/" component={ProductList} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  }
}

export default App;
