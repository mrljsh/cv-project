import { Component } from "react";
import "../styles/Form.css";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      experience: [],
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
      experience: this.state.experience ?? [],
      education: this.state.education ?? [],
    };
    this.props.handleSubmittedForm(obj);
  };

  handleDataFromEducation = (data) => {
    this.setState({ education: data });
  };

  handleDataFromExperience = (data) => {
    this.setState({ experience: data });
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
          <Experience getData={this.handleDataFromExperience} />
          <button type="submit" className="full-width">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

class PersonalInfoForm extends Component {
  render() {
    return (
      <section className="personal-info full-width">
        <h1>Your Personal Informations</h1>
        <label htmlFor="firstName">
          First name:
          <input
            id="firstName"
            name="firstName"
            type="text"
            value="John"
          ></input>
        </label>
        <label htmlFor="lastName">
          Last name:
          <input id="lastName" name="lastName" type="text" value="Doe"></input>
        </label>
        <label htmlFor="position">
          Your position:
          <input
            id="position"
            name="position"
            type="text"
            value="Frontend Developer"
          ></input>
        </label>
        <label htmlFor="mail">
          Mail address:
          <input
            id="mail"
            name="mail"
            type="email"
            value="john.doe@gmail.com"
          ></input>
        </label>
        <label htmlFor="phone">
          Phone number:
          <input id="phone" name="phone" type="text" value="+1 555 333"></input>
        </label>
        <label htmlFor="address">
          Address:
          <input
            id="address"
            name="address"
            type="text"
            value="Cleveland, Ohio"
          ></input>
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
          schoolName: "VSAR",
          title: "Informational technology",
          dateStarted: "2018",
          dateFinished: "2023",
        },
        {
          schoolName: "VSAR",
          title: "Informational technology",
          dateStarted: "2018",
          dateFinished: "2023",
        },
      ],
    };
  }

  removeForm = (index) => {
    this.setState((prevState) => {
      let sections = [...prevState.sections];
      sections.splice(index, 1);
      return { sections };
    });
    setTimeout(() => {
      this.props.getData(this.state.sections);
    }, 1000);
  };

  handleChangeInput = (e, index) => {
    const { name, value } = e.target;
    const list = [...this.state.sections];
    list[index][name] = value;
    this.setState({ sections: list });
    this.props.getData(this.state.sections);
  };

  handleAddSection = () => {
    this.setState({
      sections: [
        ...this.state.sections,
        { schoolName: "", title: "", dateStarted: "", dateFinished: "" },
      ],
    });
  };

  render() {
    return (
      <section>
        <h1>Education</h1>
        {this.state.sections.map((section, index) => (
          <div className="small-form" key={index}>
            <h3>Education #{index + 1}</h3>
            <label htmlFor="schoolName">
              School name:
              <input
                id="schoolName"
                name="schoolName"
                type="text"
                value={section.schoolName}
                onChange={(e) => {
                  this.handleChangeInput(e, index);
                }}
              />
            </label>
            <label htmlFor="title">
              Field of study:
              <input
                id="title"
                name="title"
                type="text"
                value={section.title}
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
                value={section.dateStarted}
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
                value={section.dateFinished}
                onChange={(e) => {
                  this.handleChangeInput(e, index);
                }}
              />
            </label>
            <button
              onClick={(e) => {
                e.preventDefault();
                this.removeForm(index);
              }}
            >
              Delete
            </button>
          </div>
        ))}
        <button
          onClick={(e) => {
            e.preventDefault();
            this.handleAddSection();
          }}
        >
          Add section
        </button>
      </section>
    );
  }
}

class Experience extends Component {
  constructor() {
    super();

    this.state = {
      experience: [
        {
          companyName: "",
          positionName: "",
          dateStarted: "",
          dateFinished: "",
        },
      ],
    };
  }

  handleChangeInput = (e, index) => {
    const { name, value } = e.target;
    const list = [...this.state.experience];
    list[index][name] = value;
    this.setState({ experience: list });
    this.props.getData(this.state.experience);
  };

  handleAddSection = () => {
    this.setState({
      experience: [
        ...this.state.experience,
        {
          companyName: "",
          positionName: "",
          dateStarted: "",
          dateFinished: "",
        },
      ],
    });
  };

  newExperienceFormJSX = ({ index }) => (
    <div className="small-form">
      <h3>Experience #{index + 1}</h3>
      <label htmlFor="companyName">
        Company name:
        <input
          name="companyName"
          id="companyName"
          type="text"
          onChange={(e) => {
            this.handleChangeInput(e, index);
          }}
        />
      </label>
      <label htmlFor="positionName">
        Position:
        <input
          name="positionName"
          id="positionName"
          type="text"
          onChange={(e) => {
            this.handleChangeInput(e, index);
          }}
        />
      </label>
      <label htmlFor="dateStarted">
        Date started:
        <input
          name="dateStarted"
          id="dateStarted"
          type="number"
          onChange={(e) => {
            this.handleChangeInput(e, index);
          }}
        />
      </label>
      <label htmlFor="dateFinished">
        Date finished:
        <input
          name="dateFinished"
          id="dateFinished"
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
        <h1>Experience</h1>
        {this.state.experience.map((section, index) => (
          <this.newExperienceFormJSX index={index} key={index} />
        ))}
        <button
          onClick={(e) => {
            e.preventDefault();
            this.handleAddSection();
          }}
        >
          Add section
        </button>
      </section>
    );
  }
}

export default Form;
