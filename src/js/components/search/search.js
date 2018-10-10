import React from "react";
import axios from "axios";
//const dotenv = require('dotenv').config();
import { updateNewCall, updateInput, handleApiCall } from "./searchAction";

class Search extends React.Component {
  constructor(props) {
    super(props);


    this.handleCity = this.handleCity.bind(this);
    //this.handleApiCall = this.handleApiCall.bind(this);
    this.handleButtonLine = this.handleButtonLine.bind(this);
  }

  handleCity(event) {
    const { dispatch } = this.props;
    dispatch(updateInput(event.target.value));
  }

  handleButtonLine(city) {
    console.log('axios function hit');
    const { dispatch } = this.props;

    dispatch(handleApiCall(city));
  }



  render() {
    const { city } = this.props;
    return (
      <div>
        <div>
          <button onClick={() => this.handleButtonLine("San Diego")} className="san-diego btn">San Diego</button>
          <button onClick={() => this.handleButtonLine("New York")} className="button-between btn">New York</button>
          <button onClick={() => this.handleButtonLine("Washington DC.")} className="button-between btn">Washington DC</button>
          <button onClick={() => this.handleButtonLine("London")} className="button-between btn">London</button>
          <button onClick={() => this.handleButtonLine("Tokyo")} className="tokyo btn">Tokyo</button>
        </div>
        <div className="input-group">
          <input
            onChange={event => this.handleCity(event)}
            type="text"
            className="form-control"
            placeholder="Search for..."
            value={city}
          />
          <span className="input-group-btn">
            <button
              onClick={this.handleApiCall}
              className="btn btn-secondary"
              type="button"
            >
              <strong>Go!</strong>
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default Search;

