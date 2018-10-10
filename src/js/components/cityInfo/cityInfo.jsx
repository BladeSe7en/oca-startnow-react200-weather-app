import React from "react";

class CityInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const{temp, pressure, humidity, lowestTemp, highestTemp, lat, long, windSpeed, cityName, weatherIcon} = this.props;
    return (
      <div className="card left-panel">
        <h3 className="card-header left-panel-border">City Information</h3>
        <div className="card-block text-center">
          <div className="top-panel">
            <div>
              <img className="weather-icon" src={weatherIcon} alt=""/>
              <h3 className="card-title cityName">{cityName}</h3>
            </div>
            <p className="card-text">Lat/Long: {lat},{long}</p>
          </div>
          <div id="bottom-panel">
            <div className="top-three">
              <div className="top-flex">
                <h5>Temperature (F)</h5>
                <strong className="green-text">{temp}</strong>
              </div>
              <div className="top-flex">
                <h5>Pressure</h5>
                <strong className="green-text">{pressure}</strong>
              </div>
              <div className="top-flex">
                <h5>Humidity</h5>
                <strong className="green-text">{humidity}%</strong>
              </div>
            </div>
            <div className="bottom-three">
              <div className="bottom-flex">
                <h5>Lowest Temp (F)</h5>
                <strong className="green-text">{lowestTemp}</strong>
              </div>
              <div className="bottom-flex">
                <h5>Highest Temp (F)</h5>
                <strong className="green-text">{highestTemp}</strong>
              </div>
              <div className="bottom-flex">
                <h5>Wind Speed</h5>
                <strong className="green-text">{windSpeed}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CityInfo;