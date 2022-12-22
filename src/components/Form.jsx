import { Component } from "react";

class Form extends Component {
  handleFormSubmit = (e) => {
    const formData = new FormData(e.target);
    const obj = {
      firstName: formData.get("firstName") ?? "",
      lastName: formData.get("lastName") ?? "",
      position: formData.get("position") ?? "",
      mail: formData.get("mail") ?? "",
      phone: formData.get("phone") ?? "",
      address: formData.get("address") ?? "",
      experience: formData.get("experience") ?? [],
      education: formData.get("education") ?? [],
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
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
