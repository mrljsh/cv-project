import { Component } from "react";

class Display extends Component {
  render() {
    return (
      <div>
        {Object.entries(this.props.data).map(([key, value]) => (
          <p key={key}>
            {key}: {value}
          </p>
        ))}
      </div>
    );
  }
}

export default Display;
