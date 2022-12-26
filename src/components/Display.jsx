import { Component } from "react";

class Display extends Component {
  render() {
    return (
      <div>
        <p>{JSON.stringify(this.props.data)}</p>
      </div>
    );
  }
}

export default Display;
