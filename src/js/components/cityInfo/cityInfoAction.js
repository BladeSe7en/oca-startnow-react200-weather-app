import React, { Component } from 'react';

export default class CityInfo extends Component {
  render() {
    const { name } = this.props.searchResult;
    const { temp, temp_min, temp_max, pressure, humidity } = this.props.searchResult.main;
    const { speed } = this.props.searchResult.wind;
    const { country } = this.props.searchResult.sys;
    const { lat, lon } = this.props.searchResult.coord;

    return (
      <div className='card border-info mb-3'>
        <div className='card-header text-white bg-info'>City Information</div>
        <div className='card-body'>
          <h2>{ name }{ country ? `, ${country}` : '' }</h2>
          <h6>{ country ? `Lat/Long: ${lat}, ${lon}` : '' }</h6>
          <div className='row'>
            <div className='col-4'>
              <label>Temperature (F)</label>
              <h4>{ temp }F</h4>
            </div>
            <div className='col-4'>
              <label>Pressure</label>
              <h4>{ pressure }</h4>
            </div>
            <div className='col-4'>
              <label>Humidity</label>
              <h4>{ humidity }%</h4>
            </div>
          </div>
          <div className='row'>
            <div className='col-4'>
              <label>Lowest Temp (F)</label>
              <h4>{ temp_min }F</h4>
            </div>
            <div className='col-4'>
              <label>Highest Temp (F)</label>
              <h4>{ temp_max }F</h4>
            </div>
            <div className='col-4'>
              <label>Wind Speed</label>
              <h4>{ speed }mph</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}