import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2"]
  };

  renderTags() {
    if (this.state.tags.length === 0) return "There are no tags present !";

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.state.tags.length === 0 && "Please create new tag !"}
        {this.renderTags()}
      </React.Fragment>
    );
  }
}

export default Counter;
