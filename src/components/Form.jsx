import { Component } from "react";

class Form extends Component {
  handleFormSubmit = (e) => {
    const formData = new FormData(e.target);
    // const educationObject = {
    //   schoolName: formData.get("schoolName"),
    // };
    const obj = {
      firstName: formData.get("firstName") ?? "",
      lastName: formData.get("lastName") ?? "",
      position: formData.get("position") ?? "",
      mail: formData.get("mail") ?? "",
      phone: formData.get("phone") ?? "",
      address: formData.get("address") ?? "",
      // experience: formData.get("experience") ?? [],
      // education: educationObject ?? [],
    };
    this.props.handleSubmittedForm(obj);
  };

  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.handleFormSubmit(e);
          }}
        >
          <PersonalInfoForm />
          <EducationForm />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

class PersonalInfoForm extends Component {
  render() {
    return (
      <section>
        <h1>Your Personal Informations</h1>
        <label htmlFor="firstName">
          First name:
          <input id="firstName" name="firstName"></input>
        </label>
        <label htmlFor="lastName">
          Last name:
          <input id="lastName" name="lastName"></input>
        </label>
        <label htmlFor="position">
          Your position:
          <input id="position" name="position"></input>
        </label>
        <label htmlFor="mail">
          Mail address:
          <input id="mail" name="mail"></input>
        </label>
        <label htmlFor="phone">
          phone number:
          <input id="phone" name="phone"></input>
        </label>
        <label htmlFor="address">
          Address:
          <input id="address" name="address"></input>
        </label>
      </section>
    );
  }
}

class EducationForm extends Component {
  render() {
    return (
      <section>
        <h1>Education</h1>
        <label htmlFor="schoolName">
          School name:
          <input id="schoolName" name="schoolName" disabled></input>
        </label>
      </section>
    );
  }
}

export default Form;
