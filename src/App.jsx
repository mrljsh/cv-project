import React, { useState } from "react";
import Display from "./components/Display";
import Form from "./components/Form";
import "./styles/App.css";

const App = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    position: "",
    mail: "",
    phone: "",
    address: "",
    experience: [],
    education: [],
  });

  const handleSubmittedForm = (props) => {
    setState({
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

  return (
    <div>
      <header>
        <h1>CVMaker</h1>
      </header>
      <div className="container">
        <Form data={state} handleSubmittedForm={handleSubmittedForm} />
        <Display data={state} />
      </div>
    </div>
  );
};

export default App;
