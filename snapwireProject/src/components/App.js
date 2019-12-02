import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import AcceptedSale from './AcceptedSale';
import SoldSale from './SoldSale';
import OpenSale from './OpenSale';
import Error from './Error';
import Navigation from './Nav';
import data from '../data/data.json';

class App extends Component {
  state = {
    options: data
  };

  handleAddOpenSale = (option, index) => {
    let newArr = this.state.options;
    option.status = "Accepted"
    newArr[index] = option;
    console.log(option);
    this.setState(() => ({
      options: newArr
    }));
  }

  handleAddAcceptedSale = (option, index, buyerName, salePrice) => {
    let newArr = this.state.options;
    option.status = "Sold"
    option.transaction = {
      buyerName: buyerName,
      salePrice: salePrice
    }
    newArr[index] = option;
    console.log(option);
    this.setState(() => ({
      options: newArr
    }));
  }


  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
      console.log(this.state.options);
    } catch (e) {
      // Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const json = JSON.stringify(this.state.options);
    localStorage.setItem('options', json);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation/>
          <Switch>
            <Redirect from="/" to="/opensale" exact />
            <Route path="/acceptedsale" render={(routeProps) => (<AcceptedSale {...routeProps} options={this.state.options} handleAddAcceptedSale={this.handleAddAcceptedSale} />)} />
            <Route path="/soldsale" render={(routeProps) => (<SoldSale {...routeProps} options={this.state.options} />)} />
            <Route path="/opensale" render={(routeProps) => (<OpenSale {...routeProps} options={this.state.options} handleAddOpenSale={this.handleAddOpenSale} />)} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
