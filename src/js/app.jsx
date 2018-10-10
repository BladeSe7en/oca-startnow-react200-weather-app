import React, { Component } from 'react';
import Search from './components/search';
import CityInfo from './components/cityInfo';
import History from './components/history';

export default class App extends Component {
  render() {
    return (
      <div className='background'>
        <div className='jumbotron'>
          <h1 className='display-3'>Origin Weather Application</h1>
          <br />
          <h5 className='display-5'>Always know if you'll need an umbrella!</h5>
        </div>
        <Search />
        <div className='row'>
          <div className='col-12 col-md-6 mb-4'>
            <CityInfo />
          </div>
          <div className='col-12 col-md-6 mb-4'>
            <History />
          </div>
        </div>
      </div>
    );
  }
}
