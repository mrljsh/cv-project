import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">
            Name:
            <input id="name"></input>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
