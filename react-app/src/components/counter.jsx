import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgesClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm" onClick={this.handleEvent}>
          Increment
        </button>
      </React.Fragment>
    );
  }

  handleEvent = () => {
    this.setState({ count: this.state.count + 1 });
  };

  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }

  getBadgesClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
