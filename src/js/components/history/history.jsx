import React from "react";

class History extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSearches() {
    const { prevSearch } = this.props;

    return prevSearch.map((value, index) => {
      return (
        <div className="main-flex">
          <div className="left-flex">
            <strong>{value.name}</strong>
          </div>
          <div className="right-flex">
            <p className="date-time">{value.date}</p>
            <p className="date-time">{value.time}</p>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="card right-panel-header">
        <h3 className="card-header right-panel-border">Search History</h3>
        <div className="card-block">
          {this.renderSearches()}
        </div>
      </div>
    );
  }
}

export default History;