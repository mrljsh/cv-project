import { Component } from "react";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      education: [],
    };
  }

  handleFormSubmit = (e) => {
    const formData = new FormData(e.target);
    const obj = {
      firstName: formData.get("firstName") ?? "",
      lastName: formData.get("lastName") ?? "",
      position: formData.get("position") ?? "",
      mail: formData.get("mail") ?? "",
      phone: formData.get("phone") ?? "",
      address: formData.get("address") ?? "",
      // experience: formData.get("experience") ?? [],
      education: this.state.education ?? [],
    };
    this.props.handleSubmittedForm(obj);
  };

  handleDataFromEducation = (data) => {
    this.setState({ education: data.sections });
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
          <EducationForm getData={this.handleDataFromEducation} />
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
  constructor() {
    super();

    this.state = {
      sections: [
        {
          schoolName: "",
          title: "",
          dateStarted: "",
          dateFinished: "",
        },
      ],
    };
  }

  handleChangeInput = (e, index) => {
    const { name, value } = e.target;
    const list = [...this.state.sections];
    list[index][name] = value;
    this.setState({ sections: list });
    this.props.getData(this.state);
  };

  handleAddSection = () => {
    this.setState({
      sections: [
        ...this.state.sections,
        { schoolName: "", title: "", dateStarted: "", dateFinished: "" },
      ],
    });
  };

  newEducationFormJSX = ({ index }) => (
    <div>
      <h3>Education #{index + 1}</h3>
      <label htmlFor="schoolName">
        School name:
        <input
          id="schoolName"
          name="schoolName"
          onChange={(e) => {
            this.handleChangeInput(e, index);
          }}
        />
      </label>
      <label htmlFor="title">
        Title:
        <input
          id="title"
          name="title"
          onChange={(e) => {
            this.handleChangeInput(e, index);
          }}
        />
      </label>
      <label htmlFor="dateStarted">
        Year started:
        <input
          id="dateStarted"
          name="dateStarted"
          type="number"
          onChange={(e) => {
            this.handleChangeInput(e, index);
          }}
        />
      </label>
      <label htmlFor="dateFinished">
        Year finished:
        <input
          id="dateFinished"
          name="dateFinished"
          type="number"
          onChange={(e) => {
            this.handleChangeInput(e, index);
          }}
        />
      </label>
    </div>
  );

  render() {
    return (
      <section>
        <h1>Education</h1>
        {this.state.sections.map((section, index) => (
          <this.newEducationFormJSX index={index} />
        ))}
        <button
          onClick={(e) => {
            e.preventDefault();
            this.handleAddSection();
          }}
        >
          Add button
        </button>
      </section>
    );
  }
}

export default Form;
