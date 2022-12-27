import React from "react";
import Display from "./components/Display";
import Form from "./components/Form";
import "./styles/App.css";

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

  handleSubmittedForm = (props) => {
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
        <header>
          <h1>CVMaker</h1>
        </header>
        <div className="container">
          <Form
            data={this.state}
            handleSubmittedForm={this.handleSubmittedForm}
          />
          <Display data={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
