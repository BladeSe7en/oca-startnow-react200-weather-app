import React from "react";

class History extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSearches() {
    const { prevSearch } = this.props;

    return prevSearch.map((value, index) => {
      return (
        <div className="content main-flex">
          <div className="content left-flex">
            <strong>{value.name}</strong>
          </div>
          <div className="hist right-flex">
            <p className="content date-time">{value.date}</p>
            <p className="content date-time">{value.time}</p>
            
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="content card right-panel-header">
        <h3 className="content card-header right-panel-border">Search History</h3>
        <div className="card-block">
          {this.renderSearches()}
        </div>
      </div>
    );
  }
}

export default History;