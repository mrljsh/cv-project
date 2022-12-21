import React from "react";
import Form from "./components/Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      position: "",
      mail: "",
      phone: "",
      address: "",
      experience: [],
      education: [],
    };
  }

  handleFormSubmit = (props) => {
    this.setState({
      firstName: props.firstName,
      lastName: props.lastName,
      position: props.position,
      mail: props.mail,
      phone: props.phone,
      address: props.address,
      experience: props.experience,
      education: props.education,
    });
  };

  render() {
    return (
      <div>
        <Form data={this.state} />
      </div>
    );
  }
}

export default App;
