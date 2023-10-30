import React, { Component } from "react";

class Collapsed extends Component {
  render() {
    return (
      <div>
        <h1 style={{ background: "green", color: "white" }}>
          {this.props.title}
        </h1>
        <button onClick={this.props.handleExpand}>{this.props.text}</button>
      </div>
    );
  }
}
export default Collapsed;
