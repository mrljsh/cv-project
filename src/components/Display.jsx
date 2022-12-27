import { Component } from "react";
import "../styles/Display.css";

class Display extends Component {
  render() {
    return (
      <div className="cv-container">
        <p>{JSON.stringify(this.props.data)}</p>
      </div>
    );
  }
}

export default Display;
