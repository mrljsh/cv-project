import { Component } from "react";

class Display extends Component {
  render() {
    return (
      <div>
        <p>{this.props.data.firstName}</p>
      </div>
    );
  }
}

export default Display;
